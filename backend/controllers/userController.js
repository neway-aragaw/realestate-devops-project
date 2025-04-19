const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const ddb = require('../lib/dynamodbClient');
const { GetCommand, PutCommand } = require('@aws-sdk/lib-dynamodb');

// Read from .env or fallback
const USERS_TABLE = process.env.DYNAMO_USER_TABLE || 'UsersDev';
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRATION = process.env.JWT_EXPIRATION || '1d';

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    console.log('📩 Register request:', { name, email });

    const existingUser = await ddb.send(new GetCommand({
      TableName: USERS_TABLE,
      Key: { email }
    }));

    if (existingUser.Item) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await ddb.send(new PutCommand({
      TableName: USERS_TABLE,
      Item: {
        email,
        name,
        password: hashedPassword,
        createdAt: new Date().toISOString()
      }
    }));

    if (!JWT_SECRET) throw new Error('JWT_SECRET is not defined in .env');

    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });

    res.status(201).json({ token, user: { name, email } });
  } catch (err) {
    console.error('❌ Registration error:', err);
    res.status(500).json({ error: err.message || 'Internal server error' });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log('🔑 Login attempt:', email);

    const userData = await ddb.send(new GetCommand({
      TableName: USERS_TABLE,
      Key: { email }
    }));

    if (!userData.Item) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isValid = await bcrypt.compare(password, userData.Item.password);
    if (!isValid) return res.status(401).json({ message: 'Invalid credentials' });

    if (!JWT_SECRET) throw new Error('JWT_SECRET is not defined in .env');

    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });

    res.status(200).json({
      token,
      user: {
        email,
        name: userData.Item.name
      }
    });
  } catch (err) {
    console.error('❌ Login error:', err);
    res.status(500).json({ error: err.message || 'Internal server error' });
  }
};
