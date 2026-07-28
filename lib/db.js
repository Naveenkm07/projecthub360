import { supabase } from './supabase';

// ─── Projects ────────────────────────────────────────────────────────────────
export const getProjects = async () => {
    const { data, error } = await supabase.from('projects').select('*').order('createdAt', { ascending: false });
    if (error) throw error;
    return data;
};

export const getProjectById = async (id) => {
    const { data, error } = await supabase.from('projects').select('*').eq('id', id).single();
    if (error) return null;
    return data;
};

export const createProject = async (data) => {
    const { data: result, error } = await supabase.from('projects').insert([data]).select().single();
    if (error) throw error;
    return result;
};

export const updateProject = async (id, data) => {
    const { data: result, error } = await supabase.from('projects').update(data).eq('id', id).select().single();
    if (error) throw error;
    return result;
};

export const deleteProject = async (id) => {
    const { error } = await supabase.from('projects').delete().eq('id', id);
    if (error) throw error;
};

// ─── Contact / Inquiries ─────────────────────────────────────────────────────
export const saveContact = async (data) => {
    const { data: result, error } = await supabase.from('contacts').insert([{ ...data, status: 'new' }]).select().single();
    if (error) throw error;
    return result;
};

export const getContacts = async () => {
    const { data, error } = await supabase.from('contacts').select('*').order('createdAt', { ascending: false });
    if (error) throw error;
    return data;
};

// ─── Orders / Project Requests ───────────────────────────────────────────────
export const createOrder = async (data) => {
    const { data: result, error } = await supabase.from('orders').insert([{ ...data, status: 'pending' }]).select().single();
    if (error) throw error;
    return result;
};

export const getOrdersByUser = async (uid) => {
    const { data, error } = await supabase.from('orders').select('*').eq('userId', uid).order('createdAt', { ascending: false });
    if (error) throw error;
    return data;
};

export const getAllOrders = async () => {
    const { data, error } = await supabase.from('orders').select('*').order('createdAt', { ascending: false });
    if (error) throw error;
    return data;
};

export const updateOrderStatus = async (id, status) => {
    const { data, error } = await supabase.from('orders').update({ status }).eq('id', id).select().single();
    if (error) throw error;
    return data;
};
