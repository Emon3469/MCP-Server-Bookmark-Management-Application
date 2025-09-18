# MCP Calendar Server

A Model Context Protocol (MCP) server that provides Google Calendar integration, allowing AI assistants to retrieve calendar events by date.

## 🚀 Features

- **Google Calendar Integration**: Seamlessly connect to Google Calendar API
- **Date-based Event Retrieval**: Get calendar events for specific dates
- **MCP Protocol Compliance**: Built using the official MCP SDK
- **Docker Support**: Containerized deployment ready
- **Environment Configuration**: Secure API key management

## 📋 Prerequisites

- Node.js 18+ 
- Google Calendar API credentials
- npm or yarn package manager

## 🛠️ Installation

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mcp_server_3
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the root directory:
   ```env
   GOOGLE_PUBLIC_API_KEY=your_google_api_key_here
   CALENDER_ID=your_calendar_id@gmail.com
   ```

4. **Start the server**
   ```bash
   npm start
   ```

### Docker Deployment

1. **Build the Docker image**
   ```bash
   docker build -t mcp-calendar-server .
   ```

2. **Run with Docker Compose**
   ```bash
   docker-compose up -d
   ```

## 🔧 Configuration

### Google Calendar API Setup

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Calendar API
4. Create credentials (API Key)
5. Add your API key to the `.env` file

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GOOGLE_PUBLIC_API_KEY` | Google Calendar API key | Yes |
| `CALENDER_ID` | Target calendar ID (usually your email) | Yes |

## 📖 API Reference

### Tools

#### `getMyCalendarDataByDate`

Retrieves calendar events for a specific date.

**Parameters:**
- `date` (string): Date in ISO format (e.g., "2024-01-15")

**Response:**
```json
{
  "meetings": [
    "Meeting Title at 2024-01-15T10:00:00Z",
    "Another Event at 2024-01-15T14:30:00Z"
  ]
}
```

**Error Response:**
```json
{
  "error": "Error message description"
}
```

## 🐳 Docker

### Dockerfile Features

- **Multi-stage build**: Optimized for production
- **Security**: Non-root user execution
- **Health checks**: Container health monitoring
- **Alpine Linux**: Minimal image size

### Docker Compose

The `docker-compose.yaml` includes:
- Service orchestration
- Environment variable management
- Network configuration
- Health checks
- Volume mounting for development

## 🔒 Security

- API keys are stored in environment variables
- Docker container runs as non-root user
- `.gitignore` excludes sensitive files
- No hardcoded credentials in source code

## 📁 Project Structure

```
mcp_server_3/
├── .env                    # Environment variables (not in repo)
├── .gitignore             # Git ignore rules
├── Dockerfile             # Docker container configuration
├── docker-compose.yaml    # Docker Compose orchestration
├── package.json           # Node.js dependencies and scripts
├── server.js              # Main MCP server implementation
└── README.md              # Project documentation
```

## 🚀 Development

### Running in Development Mode

```bash
# Install dependencies
npm install

# Start the server
npm start
```

### Code Style

- ES6 modules
- Async/await for asynchronous operations
- Zod for input validation
- Environment-based configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🆘 Troubleshooting

### Common Issues

1. **"Module not found" errors**
   - Ensure `package.json` has `"type": "module"`
   - Check all import statements use ES6 syntax

2. **Google API authentication errors**
   - Verify your API key is correct
   - Ensure Google Calendar API is enabled
   - Check calendar ID format

3. **Docker build failures**
   - Ensure Docker is running
   - Check Dockerfile syntax
   - Verify all files are present

### Debug Mode

To run with debug logging:
```bash
DEBUG=* npm start
```

## 📞 Support

For support and questions:
- Create an issue in the repository
- Check existing documentation
- Review Google Calendar API documentation

## 🔄 Changelog

### v1.0.0
- Initial release
- Google Calendar integration
- MCP protocol implementation
- Docker support
- Basic error handling

---

**Built with ❤️ using the Model Context Protocol**