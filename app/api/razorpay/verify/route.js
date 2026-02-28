import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(request) {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, orderData } = await request.json();

        // Verify signature
        const body = razorpay_order_id + '|' + razorpay_payment_id;
        const expectedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(body)
            .digest('hex');

        if (expectedSignature !== razorpay_signature) {
            return NextResponse.json({ error: 'Payment verification failed' }, { status: 400 });
        }

        // Save verified order to Firestore
        await addDoc(collection(db, 'orders'), {
            ...orderData,
            razorpayOrderId: razorpay_order_id,
            razorpayPaymentId: razorpay_payment_id,
            status: 'pending',
            paymentVerified: true,
            createdAt: serverTimestamp(),
        });

        return NextResponse.json({ success: true, paymentId: razorpay_payment_id });
    } catch (error) {
        console.error('Razorpay verify error:', error);
        return NextResponse.json({ error: 'Verification failed' }, { status: 500 });
    }
}
