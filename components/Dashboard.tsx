
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import StatCard from './StatCard';
import { formatIDR } from '../constants';

const data = [
  { name: 'Jan', simpanan: 4000, pinjaman: 2400 },
  { name: 'Feb', simpanan: 3000, pinjaman: 1398 },
  { name: 'Mar', simpanan: 2000, pinjaman: 9800 },
  { name: 'Apr', simpanan: 2780, pinjaman: 3908 },
  { name: 'Mei', simpanan: 1890, pinjaman: 4800 },
  { name: 'Jun', simpanan: 2390, pinjaman: 3800 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Simpanan" 
          value={formatIDR(154200000)} 
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          trend="12.5%"
          trendUp={true}
        />
        <StatCard 
          title="Total Pinjaman Aktif" 
          value={formatIDR(84500000)} 
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
          trend="5.2%"
          trendUp={false}
        />
        <StatCard 
          title="Total Anggota" 
          value="248" 
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
          trend="8 Anggota Baru"
          trendUp={true}
        />
        <StatCard 
          title="Estimasi SHU" 
          value={formatIDR(12800000)} 
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
          trend="18%"
          trendUp={true}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold mb-6">Pertumbuhan Simpanan vs Pinjaman</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="simpanan" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="pinjaman" fill="#94a3b8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold mb-6">Aktivitas Transaksi Harian</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Line type="monotone" dataKey="simpanan" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 flex justify-between items-center border-b border-slate-100">
          <h3 className="text-lg font-semibold">Transaksi Terbaru</h3>
          <button className="text-blue-600 text-sm font-medium hover:text-blue-700">Lihat Semua</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-medium">
              <tr>
                <th className="px-6 py-4">Tanggal</th>
                <th className="px-6 py-4">Anggota</th>
                <th className="px-6 py-4">Tipe</th>
                <th className="px-6 py-4">Jumlah</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4 text-sm">24 Mar 2024</td>
                <td className="px-6 py-4 text-sm font-medium">Andi Pratama</td>
                <td className="px-6 py-4 text-sm">Simpanan Wajib</td>
                <td className="px-6 py-4 text-sm font-semibold">{formatIDR(200000)}</td>
                <td className="px-6 py-4"><span className="px-2 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full">Selesai</span></td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4 text-sm">23 Mar 2024</td>
                <td className="px-6 py-4 text-sm font-medium">Siti Aminah</td>
                <td className="px-6 py-4 text-sm">Angsuran Pinjaman</td>
                <td className="px-6 py-4 text-sm font-semibold">{formatIDR(1325000)}</td>
                <td className="px-6 py-4"><span className="px-2 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full">Selesai</span></td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4 text-sm">22 Mar 2024</td>
                <td className="px-6 py-4 text-sm font-medium">Budi Santoso</td>
                <td className="px-6 py-4 text-sm">Simpanan Sukarela</td>
                <td className="px-6 py-4 text-sm font-semibold">{formatIDR(500000)}</td>
                <td className="px-6 py-4"><span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">Diproses</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
