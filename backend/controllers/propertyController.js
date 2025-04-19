const ddb = require('../lib/dynamodbClient');
const { ScanCommand, PutCommand } = require('@aws-sdk/lib-dynamodb');
const { v4: uuidv4 } = require('uuid');

exports.getAllProperties = async (req, res) => {
  try {
    const data = await ddb.send(new ScanCommand({
      TableName: 'Properties'
    }));

    res.status(200).json(data.Items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addProperty = async (req, res) => {
  const { title, price, location, imageUrl } = req.body;

  try {
    const newProperty = {
      id: uuidv4(),
      title,
      price,
      location,
      imageUrl,
      createdAt: new Date().toISOString()
    };

    await ddb.send(new PutCommand({
      TableName: 'Properties',
      Item: newProperty
    }));

    res.status(201).json(newProperty);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
