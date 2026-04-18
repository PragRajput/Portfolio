# Portfolio Contact Form API

A standalone Express.js + TypeScript backend server for handling contact form submissions via Resend email service.

## Features

- Express.js REST API
- TypeScript for type safety
- Resend email integration
- CORS enabled for frontend communication
- Environment-based configuration
- Development mode with hot reload

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Resend API key (get one at https://resend.com)

## Installation

```bash
cd api
npm install
```

## Configuration

1. Copy the example environment file:
```bash
cp .env.example .env
```

2. Update `.env` with your credentials:
```env
RESEND_API_KEY=your_resend_api_key_here
FROM_EMAIL=onboarding@resend.dev
TOOEMAIL=your_email@example.com
PORT=5000
NODE_ENV=development
```

## Running the Server

### Development Mode (with hot reload)
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

## API Endpoints

### Health Check
```
GET /
```
Response:
```json
{
  "status": "Portfolio API Server is running",
  "version": "1.0.0"
}
```

### Send Email
```
POST /api/send-email
```

Request Body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to get in touch!"
}
```

Success Response (200):
```json
{
  "success": true,
  "message": "Email sent successfully",
  "data": { ... }
}
```

Error Response (400/500):
```json
{
  "error": "Error message here",
  "details": "Additional error details"
}
```

## Deployment Options

### Option 1: Railway
1. Install Railway CLI: `npm install -g @railway/cli`
2. Login: `railway login`
3. Initialize: `railway init`
4. Add environment variables in Railway dashboard
5. Deploy: `railway up`

### Option 2: Render
1. Create account at https://render.com
2. Create new Web Service
3. Connect your GitHub repository
4. Set build command: `cd api && npm install && npm run build`
5. Set start command: `cd api && npm start`
6. Add environment variables in Render dashboard

### Option 3: Heroku
1. Install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create your-api-name`
4. Set buildpacks: `heroku buildpacks:set heroku/nodejs`
5. Add environment variables: `heroku config:set RESEND_API_KEY=xxx`
6. Deploy: `git push heroku main`

### Option 4: DigitalOcean App Platform
1. Create account at https://digitalocean.com
2. Create new App
3. Connect GitHub repository
4. Set source directory to `api`
5. Add environment variables
6. Deploy

### Option 5: Docker
```bash
# Build Docker image
docker build -t portfolio-api .

# Run container
docker run -p 5000:5000 --env-file .env portfolio-api
```

## Environment Variables for Production

When deploying, make sure to set these environment variables:

- `RESEND_API_KEY` - Your Resend API key
- `FROM_EMAIL` - Email address to send from (must be verified in Resend)
- `TOOEMAIL` - Your email address (where form submissions will be sent)
- `PORT` - Server port (usually set automatically by hosting platform)
- `NODE_ENV` - Set to `production`

## Frontend Configuration

In your frontend `.env` file, set the API URL:

**Development:**
```env
VITE_API_URL=http://localhost:5000
```

**Production:**
```env
VITE_API_URL=https://your-api-domain.com
```

## Testing

Test the API locally:

```bash
# Health check
curl http://localhost:5000/

# Send test email
curl -X POST http://localhost:5000/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message"
  }'
```

## Project Structure

```
api/
├── src/
│   └── index.ts          # Main server file
├── dist/                 # Compiled TypeScript output
├── .env                  # Environment variables (not in git)
├── .env.example          # Example environment variables
├── .gitignore           # Git ignore file
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── README.md            # This file
```

## Troubleshooting

### Email not sending
- Check your Resend API key is valid
- Verify the FROM_EMAIL is verified in your Resend dashboard
- Check server logs for error messages

### CORS errors
- Make sure your frontend URL is allowed
- Update CORS configuration in `src/index.ts` if needed

### Port already in use
- Change the PORT in `.env` file
- Kill the process using the port: `lsof -ti:5000 | xargs kill -9` (macOS/Linux)

## License

ISC
