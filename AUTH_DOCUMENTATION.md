# Authentication System Documentation

## Overview
Complete authentication system with Login/Signup modals, token management, and security features.

## Features
- ✅ Login & Signup Modal UI
- ✅ Token stored in secure cookies
- ✅ Bearer token automatically added to all API requests
- ✅ XSS protection with input sanitization
- ✅ DDOS protection with rate limiting
- ✅ Form validation
- ✅ User state management with Zustand
- ✅ Auto-authentication check on app load
- ✅ Environment-based API URLs

## Environment Setup
Create `.env.local` file:
```
NEXT_PUBLIC_API_URL=http://localhost:8081
```

## Usage Examples

### 1. Check if user is authenticated
```tsx
import { useAuthStore } from '@/app/store/authStore';

function MyComponent() {
  const { isAuthenticated, user } = useAuthStore();
  
  return (
    <div>
      {isAuthenticated ? (
        <p>Welcome {user?.fname}!</p>
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
}
```

### 2. Make authenticated API calls
```tsx
import { apiClient } from '@/app/lib/apiClient';

async function fetchProtectedData() {
  const response = await apiClient('http://localhost:8081/protected-route', {
    method: 'GET',
  });
  
  const data = await response.json();
  return data;
}
```

### 3. Logout user
```tsx
import { useAuthStore } from '@/app/store/authStore';

function LogoutButton() {
  const { logout } = useAuthStore();
  
  return <button onClick={logout}>Logout</button>;
}
```

## Security Features

### XSS Protection
All user inputs are sanitized before sending to API:
- HTML tags are escaped
- Special characters are encoded
- Input length limits enforced

### DDOS Protection
Rate limiting middleware:
- 100 requests per minute per IP
- Automatic cleanup of old entries
- 429 status code for exceeded limits

### Cookie Security
- SameSite=Strict
- Secure flag enabled
- 7-day expiration
- HttpOnly (can be enabled server-side)

## API Response Format
Expected response from `/register` and `/login`:
```json
{
  "verified": true,
  "token": "jwt_token_here",
  "userType": "PATIENT"
}
```

## Form Validations
- Email: Valid email format
- Password: Minimum 8 characters
- Phone: Numbers and common phone characters only
- Names: Required, max 50 characters
- All inputs: XSS sanitization applied
