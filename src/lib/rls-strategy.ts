/**
 * Row Level Security (RLS) Strategy for Multi-Tenant Data Isolation
 * 
 * This strategy ensures that each branch can only access their own data,
 * preventing cross-branch data access and maintaining data security.
 */

import { BranchId } from '@/types/branch';

/**
 * RLS Policy Configuration
 * Defines how data isolation should be enforced for each table
 */
export interface RLSPolicy {
  table: string;
  branchColumn: string; // Column that stores branch_id
  policies: {
    select: string; // SELECT policy
    insert: string; // INSERT policy
    update: string; // UPDATE policy
    delete: string; // DELETE policy
  };
}

/**
 * RLS Policies for all tables
 */
export const RLS_POLICIES: RLSPolicy[] = [
  {
    table: 'patients',
    branchColumn: 'branch_id',
    policies: {
      select: 'branch_id = current_branch_id() OR is_admin()',
      insert: 'branch_id = current_branch_id()',
      update: 'branch_id = current_branch_id()',
      delete: 'branch_id = current_branch_id()',
    },
  },
  {
    table: 'doctors',
    branchColumn: 'branch_id',
    policies: {
      select: 'branch_id = current_branch_id() OR is_admin()',
      insert: 'branch_id = current_branch_id()',
      update: 'branch_id = current_branch_id()',
      delete: 'branch_id = current_branch_id()',
    },
  },
  {
    table: 'queue_entries',
    branchColumn: 'branch_id',
    policies: {
      select: 'branch_id = current_branch_id() OR is_admin()',
      insert: 'branch_id = current_branch_id()',
      update: 'branch_id = current_branch_id()',
      delete: 'branch_id = current_branch_id()',
    },
  },
  {
    table: 'appointments',
    branchColumn: 'branch_id',
    policies: {
      select: 'branch_id = current_branch_id() OR is_admin()',
      insert: 'branch_id = current_branch_id()',
      update: 'branch_id = current_branch_id()',
      delete: 'branch_id = current_branch_id()',
    },
  },
  {
    table: 'medical_records',
    branchColumn: 'branch_id',
    policies: {
      select: 'branch_id = current_branch_id() OR is_admin()',
      insert: 'branch_id = current_branch_id()',
      update: 'branch_id = current_branch_id()',
      delete: 'branch_id = current_branch_id()',
    },
  },
  {
    table: 'users',
    branchColumn: 'branch_id',
    policies: {
      select: 'branch_id = current_branch_id() OR is_admin() OR id = auth.uid()',
      insert: 'branch_id = current_branch_id()',
      update: 'branch_id = current_branch_id() OR id = auth.uid()',
      delete: 'branch_id = current_branch_id() OR is_admin()',
    },
  },
];

/**
 * Generate SQL for RLS policies
 * This SQL should be run in Supabase SQL Editor to set up RLS
 */
export function generateRLSSQL(): string {
  let sql = '-- Enable RLS on all tables\n\n';
  
  RLS_POLICIES.forEach(policy => {
    sql += `-- Table: ${policy.table}\n`;
    sql += `ALTER TABLE ${policy.table} ENABLE ROW LEVEL SECURITY;\n\n`;
    
    // Create function to get current branch_id from session
    sql += `-- Create policy for SELECT\n`;
    sql += `CREATE POLICY "${policy.table}_select_policy" ON ${policy.table}\n`;
    sql += `  FOR SELECT USING (${policy.policies.select});\n\n`;
    
    sql += `-- Create policy for INSERT\n`;
    sql += `CREATE POLICY "${policy.table}_insert_policy" ON ${policy.table}\n`;
    sql += `  FOR INSERT WITH CHECK (${policy.policies.insert});\n\n`;
    
    sql += `-- Create policy for UPDATE\n`;
    sql += `CREATE POLICY "${policy.table}_update_policy" ON ${policy.table}\n`;
    sql += `  FOR UPDATE USING (${policy.policies.update});\n\n`;
    
    sql += `-- Create policy for DELETE\n`;
    sql += `CREATE POLICY "${policy.table}_delete_policy" ON ${policy.table}\n`;
    sql += `  FOR DELETE USING (${policy.policies.delete});\n\n`;
    
    sql += `---\n\n`;
  });
  
  return sql;
}

/**
 * Helper function to add branch_id filter to queries
 * This is used in application code to ensure data isolation
 */
export function addBranchFilter<T extends Record<string, any>>(
  query: T,
  branchId: BranchId
): T {
  return {
    ...query,
    branch_id: branchId,
  } as T;
}

/**
 * Validate that a record belongs to the current branch
 * Used in server actions to prevent unauthorized access
 */
export function validateBranchAccess(
  recordBranchId: string | null,
  currentBranchId: BranchId,
  isAdmin: boolean = false
): boolean {
  if (isAdmin) return true;
  return recordBranchId === currentBranchId;
}

/**
 * Get branch_id from current session
 * This should be implemented based on your auth system
 */
export async function getCurrentBranchId(): Promise<BranchId | null> {
  // This will be implemented when Supabase auth is integrated
  // For now, return null
  return null;
}

/**
 * Check if current user is admin
 */
export async function isAdmin(): Promise<boolean> {
  // This will be implemented when Supabase auth is integrated
  // For now, return false
  return false;
}
