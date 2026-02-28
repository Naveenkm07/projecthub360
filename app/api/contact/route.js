import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, phone, college, projectType, message } = body;

        if (!name || !email || !college || !projectType || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        await addDoc(collection(db, 'contacts'), {
            name: name.trim(),
            email: email.trim().toLowerCase(),
            phone: phone?.trim() || '',
            college: college.trim(),
            projectType,
            message: message.trim(),
            status: 'new',
            createdAt: serverTimestamp(),
        });

        return NextResponse.json({ success: true, message: 'Inquiry saved successfully' });
    } catch (error) {
        console.error('Contact API error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
