import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      moveDate,
      pickup,
      destination,
      homeSize,
      details,
    } = body;

    if (!name || !email || !phone || !pickup || !destination) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.FROM_EMAIL,
        to: [
          'a2movcom@gmail.com',
        ],
        subject: `A2 Moving Quote Request - ${name}`,
        html: `
          <h2>Thank you for considering A2 Moving</h2>

          <p>Hi ${name},</p>

          <p>We received your moving quote request.</p>

          <h3>Local Moving Rates</h3>
          <p>
            2 movers + truck: $119/hour<br>
            3 movers + truck: $159/hour<br>
            4 movers + truck: $199/hour<br>
            One-time fuel charge: $50<br>
            3-hour minimum applies.
          </p>

          <p>
            Our rates include the moving truck, blankets, plastic wrap,
            dollies, tools, tape, basic furniture disassembly/reassembly,
            and liability coverage.
          </p>

          <h3>Your Move Information</h3>
          <p>
            Name: ${name}<br>
            Email: ${email}<br>
            Phone: ${phone}<br>
            Move date: ${moveDate || 'Not provided'}<br>
            Pickup: ${pickup}<br>
            Destination: ${destination}<br>
            Home size: ${homeSize || 'Not provided'}<br>
            Details: ${details || 'Not provided'}
          </p>

          <p>
            Our team will contact you shortly.
          </p>

          <p>
            <a href="https://app.supermove.co/0/a2movingcompany/request?referrer=4838">
              Book Your Move Online
            </a>
          </p>

          <p>
            Questions? Call us at 562-759-5569.
          </p>

          <p>
            Thank you,<br>
            A2 Moving
          </p>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Email error:', error);

      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}
