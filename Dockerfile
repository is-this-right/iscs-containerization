# Step 1: Use a lightweight Node.js base image
FROM node:18-alpine AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the application
RUN npm run build

# Step 7: Expose the port for Cloud Run
EXPOSE 8080

# Step 8: Start the Node.js server
CMD ["npm", "start"]
