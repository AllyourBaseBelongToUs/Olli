import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This middleware function runs before every request
export function middleware(request: NextRequest) {
  // Get the response
  const response = NextResponse.next();
  
  // Add security headers
  const securityHeaders = {
    'X-DNS-Prefetch-Control': 'on',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    // Add a Content Security Policy in production
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:;",
  };
  
  // Set the headers
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
  
  return response;
}

// Specify which paths this middleware should run on
export const config = {
  matcher: [
    // Apply to all routes except for API routes, static files, and images
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
};
