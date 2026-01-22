
export enum MemberStatus {
  ACTIVE = 'Aktif',
  INACTIVE = 'Non-Aktif',
  PENDING = 'Menunggu'
}

export interface Member {
  id: string;
  name: string;
  employeeId: string;
  department: string;
  joinDate: string;
  status: MemberStatus;
  creditLimit: number;
  savings: {
    principal: number;
    mandatory: number;
    voluntary: number;
  };
}

export interface Loan {
  id: string;
  memberId: string;
  memberName: string;
  amount: number;
  tenor: number; // in months
  interestRate: number; // annual percentage
  startDate: string;
  status: 'Pending' | 'Approved' | 'Active' | 'Paid';
  monthlyInstallment: number;
}

export interface Transaction {
  id: string;
  date: string;
  memberId: string;
  type: 'Simpanan' | 'Penarikan' | 'Angsuran' | 'SHU';
  amount: number;
  description: string;
}

export enum AppView {
  DASHBOARD = 'dashboard',
  MEMBERS = 'members',
  SAVINGS = 'savings',
  LOANS = 'loans',
  ACCOUNTING = 'accounting',
  AI_ASSISTANT = 'ai_assistant'
}
