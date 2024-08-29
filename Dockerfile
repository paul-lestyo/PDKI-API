# Use a lightweight base image
FROM node:alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

# Copy only necessary files for runtime
FROM node:alpine

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/node_modules ./node_modules
COPY . .

# Specify the command to start your Node.js application
CMD ["npm", "run", "start"]
