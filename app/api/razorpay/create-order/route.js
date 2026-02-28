import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(request) {
    try {
        const { amount, projectTitle, userId } = await request.json();

        if (!amount || !projectTitle) {
            return NextResponse.json({ error: 'Amount and project title required' }, { status: 400 });
        }

        // amount must be in paise (INR)
        const order = await razorpay.orders.create({
            amount: Math.round(amount * 100), // convert ₹ to paise
            currency: 'INR',
            receipt: `order_${Date.now()}`,
            notes: { projectTitle, userId: userId || 'guest' },
        });

        return NextResponse.json({
            orderId: order.id,
            amount: order.amount,
            currency: order.currency,
            keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        });
    } catch (error) {
        console.error('Razorpay create-order error:', error);
        return NextResponse.json({ error: 'Failed to create payment order' }, { status: 500 });
    }
}
