'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { getProjects, createProject, updateProject, deleteProject, getAllOrders, getContacts, updateOrderStatus } from '@/lib/firestore';
import { Plus, Edit2, Trash2, X, Save, BarChart3, FolderOpen, Mail, ShoppingBag, Shield, LogOut, ChevronDown } from 'lucide-react';
import Footer from '@/components/Footer';

const emptyForm = { title: '', category: '', description: '', tags: '', emoji: '📁', price: '', featured: false };

function Modal({ open, onClose, children }) {
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={onClose}>
            <div className="glass rounded-2xl w-full max-w-lg p-7 glow-border" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

function ProjectForm({ form, setForm, onSubmit, onClose, loading, isEdit }) {
    return (
        <>
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-bold text-white text-xl">{isEdit ? 'Edit Project' : 'Add New Project'}</h3>
                <button onClick={onClose} className="text-slate-400 hover:text-white"><X size={20} /></button>
            </div>
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                    <div><label className="text-xs text-slate-500 mb-1 block">Emoji</label>
                        <input value={form.emoji} onChange={(e) => setForm({ ...form, emoji: e.target.value })} className="input-dark w-full" /></div>
                    <div><label className="text-xs text-slate-500 mb-1 block">Price (₹)</label>
                        <input type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} placeholder="4500" className="input-dark w-full" /></div>
                </div>
                <div><label className="text-xs text-slate-500 mb-1 block">Title *</label>
                    <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Project title" required className="input-dark w-full" /></div>
                <div><label className="text-xs text-slate-500 mb-1 block">Category *</label>
                    <input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} placeholder="e.g. Machine Learning" required className="input-dark w-full" /></div>
                <div><label className="text-xs text-slate-500 mb-1 block">Description *</label>
                    <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} placeholder="Short description..." required className="input-dark w-full resize-none" /></div>
                <div><label className="text-xs text-slate-500 mb-1 block">Tags (comma-separated)</label>
                    <input value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} placeholder="React, Python, Firebase" className="input-dark w-full" /></div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="featured" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} className="accent-primary-400" />
                    <label htmlFor="featured" className="text-slate-300 text-sm">Featured project</label>
                </div>
            </div>
            <div className="flex gap-3 mt-6">
                <button onClick={onClose} className="flex-1 py-3 glass rounded-xl text-slate-400 hover:text-white text-sm font-medium transition-colors">Cancel</button>
                <button onClick={onSubmit} disabled={loading} className="flex-1 py-3 bg-gradient-to-r from-primary-500 to-primary-400 text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 disabled:opacity-60 hover:shadow-glow transition-all">
                    {loading ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <><Save size={15} /> {isEdit ? 'Save Changes' : 'Add Project'}</>}
                </button>
            </div>
        </>
    );
}

const tabs = [
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'orders', label: 'Orders', icon: ShoppingBag },
    { id: 'inquiries', label: 'Inquiries', icon: Mail },
];

export default function AdminDashboard() {
    const { user, loading, isAdmin, logout } = useAuth();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('projects');
    const [projects, setProjects] = useState([]);
    const [orders, setOrders] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);
    const [modal, setModal] = useState(null); // null | 'add' | 'edit'
    const [form, setForm] = useState(emptyForm);
    const [editId, setEditId] = useState(null);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (!loading && (!user || !isAdmin)) router.push('/admin/login');
    }, [user, loading, isAdmin, router]);

    useEffect(() => {
        if (!isAdmin) return;
        Promise.all([getProjects(), getAllOrders(), getContacts()])
            .then(([p, o, c]) => { setProjects(p); setOrders(o); setContacts(c); })
            .catch(console.error)
            .finally(() => setDataLoading(false));
    }, [isAdmin]);

    const openAdd = () => { setForm(emptyForm); setModal('add'); };
    const openEdit = (p) => { setEditId(p.id); setForm({ ...emptyForm, ...p, tags: Array.isArray(p.tags) ? p.tags.join(', ') : p.tags }); setModal('edit'); };
    const closeModal = () => { setModal(null); setEditId(null); };

    const handleSave = async () => {
        if (!form.title || !form.category) return;
        setSaving(true);
        const payload = { ...form, tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean), price: Number(form.price) || 0 };
        try {
            if (modal === 'edit') {
                await updateProject(editId, payload);
                setProjects((prev) => prev.map((p) => p.id === editId ? { ...p, ...payload } : p));
            } else {
                const ref = await createProject(payload);
                setProjects((prev) => [{ id: ref.id, ...payload }, ...prev]);
            }
            closeModal();
        } catch (err) { console.error(err); }
        finally { setSaving(false); }
    };

    const handleDelete = async (id) => {
        if (!confirm('Delete this project?')) return;
        await deleteProject(id);
        setProjects((prev) => prev.filter((p) => p.id !== id));
    };

    if (loading || !user || !isAdmin) return (
        <div className="min-h-screen flex items-center justify-center" style={{ background: '#070d1b' }}>
            <div className="w-8 h-8 border-2 border-primary-400/30 border-t-primary-400 rounded-full animate-spin" />
        </div>
    );

    return (
        <div className="min-h-screen" style={{ background: '#070d1b' }}>
            <div className="max-w-7xl mx-auto px-6 pt-28 pb-16">
                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center"><Shield size={18} className="text-white" /></div>
                        <div><h1 className="font-display font-bold text-2xl text-white">Admin Dashboard</h1>
                            <p className="text-slate-500 text-xs">{user.email}</p></div>
                    </div>
                    <button onClick={logout} className="flex items-center gap-2 glass px-4 py-2.5 rounded-xl text-slate-400 hover:text-red-400 text-sm transition-colors">
                        <LogOut size={15} /> Sign Out
                    </button>
                </div>

                {/* Summary stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    {[{ label: 'Projects', val: projects.length, color: 'from-primary-400 to-blue-600' },
                    { label: 'Orders', val: orders.length, color: 'from-indigo-400 to-primary-500' },
                    { label: 'Inquiries', val: contacts.length, color: 'from-blue-500 to-cyan-400' }].map((s) => (
                        <div key={s.label} className="glass rounded-2xl p-5">
                            <p className={`font-display font-black text-3xl bg-gradient-to-r ${s.color} bg-clip-text text-transparent`}>{s.val}</p>
                            <p className="text-slate-500 text-sm mt-1">{s.label}</p>
                        </div>
                    ))}
                </div>

                {/* Tabs */}
                <div className="flex gap-2 mb-6">
                    {tabs.map((t) => {
                        const Icon = t.icon;
                        return (
                            <button key={t.id} onClick={() => setActiveTab(t.id)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${activeTab === t.id ? 'bg-primary-400 text-white shadow-glow-sm' : 'glass text-slate-400 hover:text-white'
                                    }`}>
                                <Icon size={15} /> {t.label}
                            </button>
                        );
                    })}
                </div>

                {/* Projects Tab */}
                {activeTab === 'projects' && (
                    <div className="glass rounded-2xl overflow-hidden">
                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
                            <h2 className="font-bold text-white">All Projects</h2>
                            <button onClick={openAdd} className="btn-sm flex items-center gap-2 text-xs"><Plus size={14} /> Add Project</button>
                        </div>
                        {dataLoading ? <div className="py-12 text-center text-slate-500 text-sm">Loading...</div> : (
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead><tr className="text-xs text-slate-500 uppercase tracking-wider">
                                        <th className="text-left px-6 py-3">Project</th>
                                        <th className="text-left px-6 py-3">Category</th>
                                        <th className="text-left px-6 py-3">Price</th>
                                        <th className="text-left px-6 py-3">Featured</th>
                                        <th className="text-left px-6 py-3">Actions</th>
                                    </tr></thead>
                                    <tbody>
                                        {projects.map((p) => (
                                            <tr key={p.id} className="border-t border-white/5 hover:bg-white/2 transition-colors">
                                                <td className="px-6 py-4"><div className="flex items-center gap-3">
                                                    <span className="text-2xl">{p.emoji || '📁'}</span>
                                                    <div><p className="text-white font-medium text-sm">{p.title}</p>
                                                        <p className="text-slate-500 text-xs line-clamp-1 max-w-xs">{p.description}</p></div>
                                                </div></td>
                                                <td className="px-6 py-4"><span className="tech-tag text-xs">{p.category}</span></td>
                                                <td className="px-6 py-4 text-primary-400 text-sm">{p.price ? `₹${p.price.toLocaleString()}` : '—'}</td>
                                                <td className="px-6 py-4"><span className={p.featured ? 'status-active' : 'status-pending'}>{p.featured ? 'Yes' : 'No'}</span></td>
                                                <td className="px-6 py-4"><div className="flex gap-2">
                                                    <button onClick={() => openEdit(p)} className="p-2 glass rounded-lg text-slate-400 hover:text-primary-400 transition-colors"><Edit2 size={14} /></button>
                                                    <button onClick={() => handleDelete(p.id)} className="p-2 glass rounded-lg text-slate-400 hover:text-red-400 transition-colors"><Trash2 size={14} /></button>
                                                </div></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {projects.length === 0 && <div className="py-12 text-center text-slate-500 text-sm">No projects yet. <button onClick={openAdd} className="text-primary-400 hover:underline">Add one</button></div>}
                            </div>
                        )}
                    </div>
                )}

                {/* Orders Tab */}
                {activeTab === 'orders' && (
                    <div className="glass rounded-2xl overflow-hidden">
                        <div className="px-6 py-4 border-b border-white/5"><h2 className="font-bold text-white">All Orders</h2></div>
                        {dataLoading ? <div className="py-12 text-center text-slate-500 text-sm">Loading...</div> : (
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead><tr className="text-xs text-slate-500 uppercase tracking-wider">
                                        <th className="text-left px-6 py-3">Student</th><th className="text-left px-6 py-3">Project</th>
                                        <th className="text-left px-6 py-3">Amount</th><th className="text-left px-6 py-3">Status</th>
                                        <th className="text-left px-6 py-3">Date</th>
                                    </tr></thead>
                                    <tbody>
                                        {orders.map((o) => (
                                            <tr key={o.id} className="border-t border-white/5">
                                                <td className="px-6 py-4 text-white text-sm">{o.userName || o.userId?.slice(0, 8)}</td>
                                                <td className="px-6 py-4 text-slate-300 text-sm">{o.projectTitle || '—'}</td>
                                                <td className="px-6 py-4 text-primary-400 text-sm">₹{o.amount?.toLocaleString() || '—'}</td>
                                                <td className="px-6 py-4"><span className={`status-${o.status}`}>{o.status}</span></td>
                                                <td className="px-6 py-4 text-slate-500 text-xs">{o.createdAt?.toDate?.()?.toLocaleDateString() || '—'}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {orders.length === 0 && <div className="py-12 text-center text-slate-500 text-sm">No orders yet.</div>}
                            </div>
                        )}
                    </div>
                )}

                {/* Contacts Tab */}
                {activeTab === 'inquiries' && (
                    <div className="glass rounded-2xl overflow-hidden">
                        <div className="px-6 py-4 border-b border-white/5"><h2 className="font-bold text-white">Contact Inquiries</h2></div>
                        {dataLoading ? <div className="py-12 text-center text-slate-500 text-sm">Loading...</div> : (
                            <div className="divide-y divide-white/5">
                                {contacts.map((c) => (
                                    <div key={c.id} className="px-6 py-5 hover:bg-white/2 transition-colors">
                                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-white font-semibold text-sm">{c.name}</span>
                                                    <span className="tech-tag text-xs">{c.projectType}</span>
                                                    <span className="status-pending text-xs">{c.status}</span>
                                                </div>
                                                <p className="text-slate-500 text-xs">{c.email} · {c.phone} · {c.college}</p>
                                                <p className="text-slate-300 text-sm mt-2 leading-relaxed">{c.message}</p>
                                            </div>
                                            <p className="text-slate-600 text-xs flex-shrink-0">{c.createdAt?.toDate?.()?.toLocaleDateString() || '—'}</p>
                                        </div>
                                    </div>
                                ))}
                                {contacts.length === 0 && <div className="py-12 text-center text-slate-500 text-sm">No inquiries yet.</div>}
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Project Modal */}
            <Modal open={!!modal} onClose={closeModal}>
                <ProjectForm form={form} setForm={setForm} onSubmit={handleSave} onClose={closeModal} loading={saving} isEdit={modal === 'edit'} />
            </Modal>

            <Footer />
        </div>
    );
}
