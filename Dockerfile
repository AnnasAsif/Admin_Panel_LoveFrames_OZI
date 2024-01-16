# Use an official Node runtime as a base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the entire app to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 9010

# Define the command to run your app
CMD ["npm", "start"]
