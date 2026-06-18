import { headers } from 'next/headers';
import { BranchConfig, getBranchBySubdomain } from '@/types/branch';

/**
 * Detect branch from subdomain
 * Supports both subdomain-based and path-based routing
 */
export async function detectBranch(): Promise<BranchConfig | null> {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  
  // Extract subdomain from host
  // e.g., jakarta.herbalinsani.com -> jakarta
  // e.g., herbalinsani.com -> null (main domain)
  const subdomain = extractSubdomain(host);
  
  if (subdomain) {
    const branch = getBranchBySubdomain(subdomain);
    if (branch) return branch;
  }
  
  // Fallback: check for branch in path (for development or alternative routing)
  // This will be handled by middleware for path-based routing
  return null;
}

/**
 * Extract subdomain from hostname
 */
function extractSubdomain(host: string): string | null {
  // Remove port if present
  const hostname = host.split(':')[0];
  
  // Handle localhost for development
  if (hostname === 'localhost') {
    return null; // No subdomain on localhost
  }
  
  // Split by dots
  const parts = hostname.split('.');
  
  // If we have more than 2 parts, the first part is the subdomain
  // e.g., jakarta.herbalinsani.com -> ['jakarta', 'herbalinsani', 'com']
  if (parts.length > 2) {
    return parts[0];
  }
  
  return null;
}

/**
 * Get branch from path parameter
 * Used for path-based routing fallback
 */
export function getBranchFromPath(path: string): BranchConfig | null {
  const { getBranchBySubdomain } = require('@/types/branch');
  
  // Extract branch code from path
  // e.g., /jakarta/dashboard -> jakarta
  const match = path.match(/^\/([a-z-]+)/);
  if (match) {
    return getBranchBySubdomain(match[1]);
  }
  
  return null;
}

/**
 * Validate branch access
 * Check if user has access to the requested branch
 */
export function validateBranchAccess(
  userBranchId: string | null,
  requestedBranchId: string
): boolean {
  // If no user branch (public access), allow
  if (!userBranchId) return true;
  
  // User can only access their own branch
  return userBranchId === requestedBranchId;
}
