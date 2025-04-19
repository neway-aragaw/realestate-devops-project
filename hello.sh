#!/bin/bash

mkdir -p backend/{controllers,routes,middlewares,config,prisma}
cd backend

touch app.js server.js .env Dockerfile package.json

# Dummy starter files
touch controllers/userController.js
touch routes/userRoutes.js
touch middlewares/authMiddleware.js
touch config/db.js
touch prisma/schema.prisma

echo "✅ Backend structure created in ./backend"
