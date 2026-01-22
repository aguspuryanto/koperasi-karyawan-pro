
import React from 'react';
import { Member, MemberStatus, Loan, Transaction } from './types';

export const MOCK_MEMBERS: Member[] = [
  {
    id: '1',
    name: 'Andi Pratama',
    employeeId: 'EMP001',
    department: 'IT Support',
    joinDate: '2022-01-15',
    status: MemberStatus.ACTIVE,
    creditLimit: 50000000,
    savings: { principal: 1000000, mandatory: 2400000, voluntary: 5000000 }
  },
  {
    id: '2',
    name: 'Siti Aminah',
    employeeId: 'EMP002',
    department: 'Human Resources',
    joinDate: '2021-11-20',
    status: MemberStatus.ACTIVE,
    creditLimit: 30000000,
    savings: { principal: 1000000, mandatory: 3600000, voluntary: 1500000 }
  },
  {
    id: '3',
    name: 'Budi Santoso',
    employeeId: 'EMP003',
    department: 'Finance',
    joinDate: '2023-03-10',
    status: MemberStatus.ACTIVE,
    creditLimit: 25000000,
    savings: { principal: 1000000, mandatory: 1200000, voluntary: 0 }
  },
];

export const MOCK_LOANS: Loan[] = [
  {
    id: 'L001',
    memberId: '1',
    memberName: 'Andi Pratama',
    amount: 15000000,
    tenor: 12,
    interestRate: 6,
    startDate: '2023-12-01',
    status: 'Active',
    monthlyInstallment: 1325000
  },
  {
    id: 'L002',
    memberId: '2',
    memberName: 'Siti Aminah',
    amount: 5000000,
    tenor: 6,
    interestRate: 6,
    startDate: '2024-01-15',
    status: 'Active',
    monthlyInstallment: 858333
  }
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  { id: 'T001', date: '2024-03-01', memberId: '1', type: 'Simpanan', amount: 200000, description: 'Simpanan Wajib Maret' },
  { id: 'T002', date: '2024-03-01', memberId: '2', type: 'Simpanan', amount: 200000, description: 'Simpanan Wajib Maret' },
  { id: 'T003', date: '2024-02-28', memberId: '1', type: 'Angsuran', amount: 1325000, description: 'Angsuran Pinjaman L001' },
];

export const formatIDR = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(amount);
};
