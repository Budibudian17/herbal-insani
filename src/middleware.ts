import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getBranchBySubdomain, getAllBranches } from '@/types/branch';

/**
 * Middleware for multi-tenant routing
 * Handles both subdomain-based and path-based routing
 */
export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const url = request.nextUrl;
  const path = url.pathname;

  // Extract subdomain from hostname
  const subdomain = extractSubdomain(hostname);

  // Handle subdomain-based routing
  if (subdomain) {
    const branch = getBranchBySubdomain(subdomain);
    
    if (branch) {
      // Valid subdomain - add branch info to headers
      const response = NextResponse.next();
      response.headers.set('x-branch-id', branch.id);
      response.headers.set('x-branch-code', branch.code);
      return response;
    }
    
    // Invalid subdomain - redirect to main domain
    const mainDomain = hostname.replace(`${subdomain}.`, '');
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  // Handle path-based routing for development or alternative access
  // e.g., /depok-merdeka/dashboard -> /dashboard with branch context
  const branchPathMatch = path.match(/^\/(depok-merdeka|depok-melati-4|depok-siliwangi|depok-sawangan)(\/.*)?$/);
  
  if (branchPathMatch) {
    const branchSubdomain = branchPathMatch[1];
    const remainingPath = branchPathMatch[2] || '/';
    const branch = getBranchBySubdomain(branchSubdomain);
    
    if (branch) {
      // Rewrite to the actual path without branch prefix
      const response = NextResponse.rewrite(new URL(remainingPath, request.url));
      response.headers.set('x-branch-id', branch.id);
      response.headers.set('x-branch-code', branch.code);
      return response;
    }
  }

  // Main domain - show branch selection or default branch
  if (path === '/') {
    // Check if user has a selected branch in cookie
    const selectedBranch = request.cookies.get('selected-branch');
    
    if (selectedBranch) {
      const branch = getAllBranches().find(b => b.id === selectedBranch.value);
      if (branch) {
        // Redirect to branch-specific path
        return NextResponse.redirect(new URL(`/${branch.subdomain}`, request.url));
      }
    }
    
    // No branch selected - continue to landing page for branch selection
    return NextResponse.next();
  }

  return NextResponse.next();
}

/**
 * Extract subdomain from hostname
 */
function extractSubdomain(host: string): string | null {
  // Remove port if present
  const hostname = host.split(':')[0];
  
  // Handle localhost for development
  if (hostname === 'localhost') {
    return null;
  }
  
  // Split by dots
  const parts = hostname.split('.');
  
  // If we have more than 2 parts, the first part is the subdomain
  if (parts.length > 2) {
    return parts[0];
  }
  
  return null;
}

/**
 * Configure which paths the middleware should run on
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
};
