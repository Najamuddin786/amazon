# Use the official Node.js 20 image as the base image
FROM node:20

# Set the working directory inside the container to /app
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install dependencies from package.json
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 3100 to allow traffic on this port from outside the container
EXPOSE 3100

# Start the application using Node.js (instead of Nodemon) for production
CMD ["node", "src/index.js"]
