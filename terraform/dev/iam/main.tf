resource "aws_iam_role" "realestate_app_role" {
  name = "realestate-backend-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect = "Allow"
      Principal = {
        Service = "ec2.amazonaws.com" # Change to "eks.amazonaws.com" or "lambda.amazonaws.com" if needed
      }
      Action = "sts:AssumeRole"
    }]
  })

  tags = {
    Project     = "realestate-app"
    Environment = "dev"
  }
}

resource "aws_iam_policy" "dynamodb_rw_policy" {
  name        = "realestate-dynamodb-access"
  description = "Access to UsersDev and Properties tables"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "dynamodb:GetItem",
          "dynamodb:PutItem",
          "dynamodb:UpdateItem",
          "dynamodb:DeleteItem",
          "dynamodb:Scan",
          "dynamodb:Query"
        ]
        Resource = [
          "arn:aws:dynamodb:us-east-1:*:table/UsersDev",
          "arn:aws:dynamodb:us-east-1:*:table/Properties"
        ]
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "attach_dynamodb_policy" {
  role       = aws_iam_role.realestate_app_role.name
  policy_arn = aws_iam_policy.dynamodb_rw_policy.arn
}
