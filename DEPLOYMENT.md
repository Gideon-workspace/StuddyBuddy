# Firebase Hosting & CI/CD Setup

This document explains how to set up Firebase hosting and CI/CD for your StuddyBuddy project.

## Prerequisites

- Firebase CLI installed globally: `npm install -g firebase-tools`
- A Firebase project created in the Firebase Console
- GitHub repository with your code

## Setup Steps

### 1. Firebase Project Configuration

1. Update `.firebaserc` with your actual Firebase project ID:
```json
{
  "projects": {
    "default": "your-actual-firebase-project-id"
  }
}
```

### 2. GitHub Secrets Configuration

Add the following secrets to your GitHub repository (Settings → Secrets and variables → Actions):

#### Required Environment Variables:
- `VITE_FIREBASE_API_KEY` - Your Firebase API key
- `VITE_FIREBASE_AUTH_DOMAIN` - Your Firebase auth domain
- `VITE_FIREBASE_PROJECT_ID` - Your Firebase project ID
- `VITE_FIREBASE_STORAGE_BUCKET` - Your Firebase storage bucket
- `VITE_FIREBASE_MESSAGING_SENDER_ID` - Your Firebase messaging sender ID
- `VITE_FIREBASE_APP_ID` - Your Firebase app ID
- `VITE_FIREBASE_MEASUREMENT_ID` - Your Firebase measurement ID (optional)

#### Required Service Account:
- `FIREBASE_SERVICE_ACCOUNT_KEY` - Firebase service account key JSON
- `FIREBASE_PROJECT_ID` - Your Firebase project ID

### 3. Generate Firebase Service Account Key

1. Go to Firebase Console → Project Settings → Service Accounts
2. Click "Generate new private key"
3. Download the JSON file
4. Copy the entire JSON content and add it as `FIREBASE_SERVICE_ACCOUNT_KEY` secret in GitHub

### 4. Local Development

Create a `.env` file in the frontend directory with your Firebase config:

```bash
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

## Deployment Commands

### Manual Deployment
```bash
cd frontend
npm run deploy
```

### Preview Deployment
```bash
cd frontend
npm run deploy:preview
```

## Automatic Deployments

The CI/CD pipeline will automatically:

1. **On Push to Main/Master**: Deploy to production
2. **On Pull Requests**: Create preview deployments with unique URLs

### Workflow Files Created:
- `.github/workflows/deploy.yml` - Production deployment
- `.github/workflows/preview.yml` - Preview deployment for PRs

## Firebase Hosting Features

- **SPA Support**: Configured for React Router with catch-all rewrites
- **Caching**: Optimized cache headers for assets
- **CORS**: Configured for font files
- **Security**: Headers optimized for web security

## Troubleshooting

1. **Deployment fails**: Check if Firebase project ID is correct in `.firebaserc`
2. **Build fails**: Ensure all environment variables are set in GitHub secrets
3. **Preview not working**: Verify service account has necessary permissions

## File Structure

```
├── .firebaserc                 # Firebase project configuration
├── firebase.json               # Firebase hosting configuration
├── .github/
│   └── workflows/
│       ├── deploy.yml          # Production deployment workflow
│       └── preview.yml         # Preview deployment workflow
└── frontend/
    ├── package.json            # Updated with deploy scripts
    └── .env                    # Local environment variables (create this)
```