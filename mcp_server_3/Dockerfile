# Use the official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy the rest of the application code
COPY . .

# Create a non-root user to run the application
RUN addgroup -g 1001 -S nodejs && \
    adduser -S mcp -u 1001

# Change ownership of the app directory to the nodejs user
RUN chown -R mcp:nodejs /app
USER mcp

# Expose the port the app runs on (if applicable)
# Note: MCP servers typically use stdio, but exposing for potential future use
EXPOSE 3000

# Add health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node --version || exit 1

# Set environment variables
ENV NODE_ENV=production

# Command to run the application
CMD ["npm", "start"]