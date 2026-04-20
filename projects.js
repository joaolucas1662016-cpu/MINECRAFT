{
  "name": "minecraft-toolkit",
  "version": "1.0.0",
  "description": "Minecraft SaaS Toolkit",
  "private": true,
  "engines": { "node": "18.x" },
  "scripts": {
    "start": "node server.js",
    "build": "react-scripts build",
    "postinstall": "react-scripts build"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "bcryptjs": "^2.4.3",
    "jsonwebtoken": "^9.0.2",
    "dotenv": "^16.4.5",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.0",
    "axios": "^1.6.7",
    "react-scripts": "5.0.1",
    "pg": "^8.11.3"
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": ["last 1 chrome version", "last 1 firefox version", "last 1 safari version"]
  }
}
