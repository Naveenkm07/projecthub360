'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { getOrdersByUser } from '@/lib/firestore';
import Link from 'next/link';
import { LayoutDashboard, FolderOpen, CreditCard, LogOut, Plus, Zap, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import Footer from '@/components/Footer';

function StatusBadge({ status }) {
    if (status === 'pending') return <span className="status-pending">{status}</span>;
    if (status === 'active') return <span className="status-active">{status}</span>;
    return <span className="status-done">{status}</span>;
}

export default function DashboardPage() {
    const { user, loading, logout } = useAuth();
    const router = useRouter();
    const [orders, setOrders] = useState([]);
    const [ordersLoading, setOrdersLoading] = useState(true);

    useEffect(() => {
        if (!loading && !user) router.push('/login');
    }, [user, loading, router]);

    useEffect(() => {
        if (!user) return;
        getOrdersByUser(user.uid)
            .then(setOrders)
            .catch(console.error)
            .finally(() => setOrdersLoading(false));
    }, [user]);

    if (loading || !user) return (
        <div className="min-h-screen flex items-center justify-center" style={{ background: '#070d1b' }}>
            <div className="w-8 h-8 border-2 border-primary-400/30 border-t-primary-400 rounded-full animate-spin" />
        </div>
    );

    const stats = [
        { label: 'Total Orders', value: orders.length, icon: FolderOpen, color: 'from-primary-400 to-blue-600' },
        { label: 'In Progress', value: orders.filter((o) => o.status === 'active').length, icon: Clock, color: 'from-blue-500 to-cyan-400' },
        { label: 'Completed', value: orders.filter((o) => o.status === 'completed').length, icon: CheckCircle, color: 'from-indigo-400 to-primary-400' },
        { label: 'Pending Review', value: orders.filter((o) => o.status === 'pending').length, icon: AlertCircle, color: 'from-yellow-500 to-orange-400' },
    ];

    return (
        <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #070d1b 0%, #0a1225 100%)' }}>
            <div className="max-w-7xl mx-auto px-6 pt-28 pb-16">
                {/* Welcome header */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-blue-600 rounded-xl flex items-center justify-center shadow-glow-sm text-white font-bold text-lg">
                                {user.displayName?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase()}
                            </div>
                            <div>
                                <h1 className="font-display font-bold text-2xl text-white">
                                    Welcome back, {user.displayName?.split(' ')[0] || 'Student'}!
                                </h1>
                                <p className="text-slate-500 text-sm">{user.email}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Link href="/#contact" className="btn-glow text-sm flex items-center gap-2">
                            <Plus size={16} /> New Project
                        </Link>
                        <button onClick={logout} className="flex items-center gap-2 px-4 py-2.5 glass rounded-xl text-slate-400 hover:text-red-400 text-sm transition-colors">
                            <LogOut size={15} /> Sign Out
                        </button>
                    </div>
                </motion.div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                    {stats.map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08, duration: 0.4 }}
                                className="glass rounded-2xl p-5">
                                <div className={`w-10 h-10 bg-gradient-to-br ${s.color} rounded-xl flex items-center justify-center mb-3`}>
                                    <Icon size={18} className="text-white" />
                                </div>
                                <p className="font-display font-bold text-2xl text-white">{s.value}</p>
                                <p className="text-slate-500 text-xs mt-1">{s.label}</p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Orders Table */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}
                    className="glass rounded-2xl overflow-hidden">
                    <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
                        <h2 className="font-display font-bold text-white">My Project Orders</h2>
                        <Link href="/#contact" className="btn-sm text-xs">+ Request Project</Link>
                    </div>

                    {ordersLoading ? (
                        <div className="px-6 py-12 text-center text-slate-500 text-sm">Loading your orders...</div>
                    ) : orders.length === 0 ? (
                        <div className="px-6 py-16 text-center">
                            <Zap size={40} className="text-slate-700 mx-auto mb-4" />
                            <p className="text-slate-500 text-sm">No orders yet.</p>
                            <Link href="/#contact" className="inline-block mt-4 btn-sm">Request Your First Project</Link>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-xs text-slate-500 uppercase tracking-wider">
                                        <th className="text-left px-6 py-3">Project</th>
                                        <th className="text-left px-6 py-3">Type</th>
                                        <th className="text-left px-6 py-3">Status</th>
                                        <th className="text-left px-6 py-3">Date</th>
                                        <th className="text-left px-6 py-3">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order) => (
                                        <tr key={order.id} className="border-t border-white/5 hover:bg-white/2 transition-colors">
                                            <td className="px-6 py-4 text-white text-sm font-medium">{order.projectTitle || '—'}</td>
                                            <td className="px-6 py-4 text-slate-400 text-sm">{order.projectType || '—'}</td>
                                            <td className="px-6 py-4"><StatusBadge status={order.status} /></td>
                                            <td className="px-6 py-4 text-slate-500 text-xs">{order.createdAt?.toDate?.()?.toLocaleDateString() || '—'}</td>
                                            <td className="px-6 py-4 text-primary-400 text-sm font-semibold">₹{order.amount || '—'}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </motion.div>
            </div>
            <Footer />
        </div>
    );
}
