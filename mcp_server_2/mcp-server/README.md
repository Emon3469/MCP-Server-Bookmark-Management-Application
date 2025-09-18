# MCP Server - Bookmark Management Application

A modern bookmark management application built with Next.js, Prisma, and Clerk authentication. This application allows users to save, organize, and manage their bookmarks with a clean and intuitive interface.

## 🚀 Features

- **User Authentication**: Secure authentication powered by Clerk
- **Bookmark Management**: Create, read, update, and delete bookmarks
- **Modern UI**: Built with React and modern CSS
- **Database**: SQLite database with Prisma ORM
- **Responsive Design**: Works on desktop and mobile devices
- **Docker Support**: Fully containerized for easy deployment

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Backend**: Next.js API Routes
- **Database**: SQLite with Prisma ORM
- **Authentication**: Clerk
- **Styling**: CSS Modules
- **Icons**: Lucide React
- **Containerization**: Docker & Docker Compose

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18 or higher
- npm or yarn
- Docker and Docker Compose (for containerized deployment)
- Git

## 🚀 Quick Start

### Option 1: Docker Deployment (Recommended)

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mcp-server
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit the `.env` file with your configuration values.

3. **Run with Docker Compose**
   ```bash
   # Production deployment
   docker-compose up -d

   # Development with hot reloading
   docker-compose --profile dev up -d app-dev
   ```

4. **Access the application**
   - Production: http://localhost:3000
   - Development: http://localhost:3001

### Option 2: Local Development

1. **Clone and install dependencies**
   ```bash
   git clone <repository-url>
   cd mcp-server
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

3. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🐳 Docker Commands

### Build and Run
```bash
# Build the Docker image
docker build -t mcp-server .

# Run the container
docker run -p 3000:3000 mcp-server

# Using Docker Compose
docker-compose up -d
```

### Development Mode
```bash
# Run in development mode with hot reloading
docker-compose --profile dev up -d app-dev
```

### Useful Commands
```bash
# View logs
docker-compose logs -f app

# Stop services
docker-compose down

# Rebuild and restart
docker-compose up -d --build
```

## 📁 Project Structure

```
mcp-server/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── api/            # API routes
│   │   ├── [transport]/    # Dynamic routes
│   │   └── globals.css     # Global styles
│   ├── components/         # React components
│   │   ├── BookmarkCard.tsx
│   │   ├── BookmarkForm.tsx
│   │   └── BookmarkList.tsx
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   └── types/              # TypeScript type definitions
├── prisma/
│   ├── schema.prisma       # Database schema
│   └── dev.db             # SQLite database
├── public/                 # Static assets
├── Dockerfile             # Production Docker image
├── Dockerfile.dev         # Development Docker image
├── docker-compose.yml     # Docker Compose configuration
└── package.json           # Dependencies and scripts
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="file:./dev.db"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
CLERK_SECRET_KEY=your_clerk_secret_key_here

# Next.js
NEXT_TELEMETRY_DISABLED=1
NODE_ENV=development
```

### Database Setup

The application uses SQLite with Prisma. The database schema includes:

- **Bookmark Model**: Stores bookmark information including URL, title, notes, and timestamps

## 🚀 Deployment

### Production Deployment with Docker

1. **Build the production image**
   ```bash
   docker build -t mcp-server:latest .
   ```

2. **Run the container**
   ```bash
   docker run -d \
     --name mcp-server \
     -p 3000:3000 \
     -v $(pwd)/prisma:/app/prisma \
     mcp-server:latest
   ```

### Using Docker Compose

```bash
# Production deployment
docker-compose up -d

# Scale the application
docker-compose up -d --scale app=3
```

## 🧪 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Database Operations

```bash
# Generate Prisma client
npx prisma generate

# Push schema changes to database
npx prisma db push

# View database in Prisma Studio
npx prisma studio
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill process using port 3000
   npx kill-port 3000
   ```

2. **Database connection issues**
   ```bash
   # Regenerate Prisma client
   npx prisma generate
   ```

3. **Docker build fails**
   ```bash
   # Clean Docker cache
   docker system prune -a
   ```

### Getting Help

- Check the [Issues](https://github.com/your-repo/issues) page
- Review the [Next.js Documentation](https://nextjs.org/docs)
- Check [Prisma Documentation](https://www.prisma.io/docs)

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [Docker Documentation](https://docs.docker.com)
