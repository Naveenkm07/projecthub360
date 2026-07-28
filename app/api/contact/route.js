import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, phone, college, projectType, message } = body;

        if (!name || !email || !college || !projectType || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const { error } = await supabase.from('contacts').insert([{
            name: name.trim(),
            email: email.trim().toLowerCase(),
            phone: phone?.trim() || '',
            college: college.trim(),
            projectType,
            message: message.trim(),
            status: 'new',
        }]);

        if (error) throw error;

        return NextResponse.json({ success: true, message: 'Inquiry saved successfully' });
    } catch (error) {
        console.error('Contact API error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
