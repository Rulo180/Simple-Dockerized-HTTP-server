# Base image
FROM node:8

# Copy package.json file to the image
COPY package*.json ./

# Install required dependencies
RUN npm install

# Copy all the app files
COPY . .

# Expose port 8080
EXPOSE 8080

# Start the app
CMD [ "npm", "start" ]
