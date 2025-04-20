FROM node:slim

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port 8000 for the application
EXPOSE 8000

# Use the "dev" script defined in package.json to start the application
CMD ["npm", "run", "prod"]
