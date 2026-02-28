import { db } from './firebase';
import {
    collection,
    addDoc,
    getDocs,
    getDoc,
    doc,
    updateDoc,
    deleteDoc,
    query,
    orderBy,
    where,
    serverTimestamp,
} from 'firebase/firestore';

// ─── Projects ────────────────────────────────────────────────────────────────
export const getProjects = async () => {
    const q = query(collection(db, 'projects'), orderBy('createdAt', 'desc'));
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};

export const getProjectById = async (id) => {
    const snap = await getDoc(doc(db, 'projects', id));
    return snap.exists() ? { id: snap.id, ...snap.data() } : null;
};

export const createProject = async (data) => {
    return addDoc(collection(db, 'projects'), {
        ...data,
        createdAt: serverTimestamp(),
    });
};

export const updateProject = async (id, data) => {
    return updateDoc(doc(db, 'projects', id), {
        ...data,
        updatedAt: serverTimestamp(),
    });
};

export const deleteProject = async (id) => {
    return deleteDoc(doc(db, 'projects', id));
};

// ─── Contact / Inquiries ─────────────────────────────────────────────────────
export const saveContact = async (data) => {
    return addDoc(collection(db, 'contacts'), {
        ...data,
        status: 'new',
        createdAt: serverTimestamp(),
    });
};

export const getContacts = async () => {
    const q = query(collection(db, 'contacts'), orderBy('createdAt', 'desc'));
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};

// ─── Orders / Project Requests ───────────────────────────────────────────────
export const createOrder = async (data) => {
    return addDoc(collection(db, 'orders'), {
        ...data,
        status: 'pending',
        createdAt: serverTimestamp(),
    });
};

export const getOrdersByUser = async (uid) => {
    const q = query(
        collection(db, 'orders'),
        where('userId', '==', uid),
        orderBy('createdAt', 'desc')
    );
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};

export const getAllOrders = async () => {
    const q = query(collection(db, 'orders'), orderBy('createdAt', 'desc'));
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};

export const updateOrderStatus = async (id, status) => {
    return updateDoc(doc(db, 'orders', id), { status, updatedAt: serverTimestamp() });
};
