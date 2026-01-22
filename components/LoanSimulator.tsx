
import React, { useState, useMemo } from 'react';
import { formatIDR } from '../constants';

const LoanSimulator: React.FC = () => {
  const [amount, setAmount] = useState(5000000);
  const [tenor, setTenor] = useState(12);
  const [interest, setInterest] = useState(6);

  const simulation = useMemo(() => {
    const totalInterest = (amount * (interest / 100) * (tenor / 12));
    const totalPayment = amount + totalInterest;
    const monthlyInstallment = totalPayment / tenor;
    return {
      monthlyInstallment,
      totalInterest,
      totalPayment
    };
  }, [amount, tenor, interest]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-fit sticky top-24">
        <h2 className="text-xl font-bold mb-6">Simulasi Pinjaman</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Jumlah Pinjaman (IDR)</label>
            <input 
              type="number" 
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Tenor (Bulan): {tenor}</label>
            <input 
              type="range" 
              min="3" 
              max="60" 
              step="3"
              className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
              value={tenor}
              onChange={(e) => setTenor(Number(e.target.value))}
            />
            <div className="flex justify-between text-xs text-slate-400 mt-2">
              <span>3 Bln</span>
              <span>60 Bln</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Bunga Tahunan (%): {interest}</label>
            <input 
              type="range" 
              min="1" 
              max="24" 
              step="0.5"
              className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
              value={interest}
              onChange={(e) => setInterest(Number(e.target.value))}
            />
          </div>

          <div className="pt-6 border-t border-slate-100 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Angsuran per Bulan</span>
              <span className="font-bold text-blue-600">{formatIDR(simulation.monthlyInstallment)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Total Bunga</span>
              <span className="font-medium text-slate-700">{formatIDR(simulation.totalInterest)}</span>
            </div>
            <div className="flex justify-between text-sm pt-3 border-t border-slate-50 border-dashed">
              <span className="text-slate-900 font-semibold">Total Pengembalian</span>
              <span className="font-bold text-slate-900">{formatIDR(simulation.totalPayment)}</span>
            </div>
          </div>

          <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
            Ajukan Pinjaman Sekarang
          </button>
        </div>
      </div>

      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold mb-4">Daftar Pinjaman Berjalan</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-slate-500 text-xs uppercase">
                <tr>
                  <th className="px-4 py-3">ID Pinjaman</th>
                  <th className="px-4 py-3">Anggota</th>
                  <th className="px-4 py-3">Plafon</th>
                  <th className="px-4 py-3">Tenor</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="text-sm">
                  <td className="px-4 py-4 font-mono font-medium">L-2024-001</td>
                  <td className="px-4 py-4 font-medium">Andi Pratama</td>
                  <td className="px-4 py-4">{formatIDR(15000000)}</td>
                  <td className="px-4 py-4">12 Bln</td>
                  <td className="px-4 py-4"><span className="px-2 py-1 bg-green-50 text-green-600 rounded-full text-xs">Aktif</span></td>
                </tr>
                <tr className="text-sm">
                  <td className="px-4 py-4 font-mono font-medium">L-2024-042</td>
                  <td className="px-4 py-4 font-medium">Siti Aminah</td>
                  <td className="px-4 py-4">{formatIDR(5000000)}</td>
                  <td className="px-4 py-4">6 Bln</td>
                  <td className="px-4 py-4"><span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs">Menunggu</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-600 p-6 rounded-2xl text-white">
            <h4 className="text-blue-100 text-sm font-medium mb-1">Total Plafon Tersedia</h4>
            <p className="text-2xl font-bold">{formatIDR(1250000000)}</p>
            <div className="mt-4 h-1 bg-blue-500 rounded-full">
              <div className="h-full bg-white rounded-full w-2/3"></div>
            </div>
            <p className="mt-2 text-xs text-blue-100">67% Terpakai dari Dana Koperasi</p>
          </div>
          <div className="bg-slate-900 p-6 rounded-2xl text-white">
            <h4 className="text-slate-400 text-sm font-medium mb-1">Rata-rata Suku Bunga</h4>
            <p className="text-2xl font-bold">6.5% / Tahun</p>
            <p className="mt-4 text-xs text-slate-400 italic">"Bunga koperasi lebih rendah dari bank komersial."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanSimulator;
