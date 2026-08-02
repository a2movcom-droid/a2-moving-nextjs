import { NextResponse } from 'next/server';

const SERVICE_TYPES = {
  local: {
    label: 'Local Move',
    projectType: 'local-move',
    jobType: 'local-move',
  },
  'long-distance': {
    label: 'Long Distance Move',
    projectType: 'long-distance-move',
    jobType: 'long-distance-move',
  },
  commercial: {
    label: 'Commercial Move',
    projectType: 'commercialmove',
    jobType: 'commercialmove-move',
  },
  labor: {
    label: 'Labor Only',
    projectType: 'local',
    jobType: 'local-labor',
  },
} as const;

function cleanString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = cleanString(body.name);
    const email = cleanString(body.email);
    const phone = cleanString(body.phone);
    const moveDate = cleanString(body.moveDate);
    const pickup = cleanString(body.pickup);
    const destination = cleanString(body.destination);
    const homeSize = cleanString(body.homeSize);
    const details = cleanString(body.details);
    const serviceType = cleanString(body.serviceType);

    const utmSource = cleanString(body.utm_source);
    const utmMedium = cleanString(body.utm_medium);
    const utmCampaign = cleanString(body.utm_campaign);
    const utmContent = cleanString(body.utm_content);
    const utmTerm = cleanString(body.utm_term);
    const gclid = cleanString(body.gclid);
    const fbclid = cleanString(body.fbclid);
    const referrer = cleanString(body.referrer);
    const landingPage = cleanString(body.landing_page);

    if (!name || !email || !phone || !pickup || !destination) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const phoneDigits = phone.replace(/\D/g, '');
    const normalizedPhone =
      phoneDigits.length === 11 && phoneDigits.startsWith('1')
        ? phoneDigits.slice(1)
        : phoneDigits;

    if (normalizedPhone.length !== 10) {
      return NextResponse.json(
        { error: 'Please enter a valid 10-digit phone number' },
        { status: 400 }
      );
    }

    const serviceKey =
      serviceType in SERVICE_TYPES
        ? (serviceType as keyof typeof SERVICE_TYPES)
        : homeSize === 'Office / Commercial'
          ? 'commercial'
          : 'local';

    const service = SERVICE_TYPES[serviceKey];

    const milestone: Record<string, string> = {
      kind: 'LEAD_CREATED',
      timestamp: new Date().toISOString(),
    };

    if (referrer) milestone.referrer_url = referrer;
    if (utmCampaign) milestone.utm_campaign = utmCampaign;
    if (utmMedium) milestone.utm_medium = utmMedium;
    if (utmSource) milestone.utm_source = utmSource;
    if (utmContent) milestone.utm_content = utmContent;
    if (utmTerm) milestone.utm_term = utmTerm;

    if (gclid) {
      milestone.ad_kind = 'GOOGLE_ADS';
      milestone.ad_click_id = gclid;
    } else if (fbclid) {
      milestone.ad_kind = 'FACEBOOK';
      milestone.ad_click_id = fbclid;
    }

    const referralDetails = [
      landingPage && `Landing page: ${landingPage}`,
      referrer && `Referrer: ${referrer}`,
      utmCampaign && `Campaign: ${utmCampaign}`,
      utmMedium && `Medium: ${utmMedium}`,
      utmContent && `Content: ${utmContent}`,
      utmTerm && `Term: ${utmTerm}`,
      gclid && `Google click ID: ${gclid}`,
      fbclid && `Facebook click ID: ${fbclid}`,
    ]
      .filter(Boolean)
      .join(' | ');

    const moveDescription = [
      `Service: ${service.label}`,
      homeSize && `Home size: ${homeSize}`,
      details && `Customer details: ${details}`,
    ]
      .filter(Boolean)
      .join('\n');

    const supermovePayload = {
      project_type: service.projectType,
      client: {
        name,
        notes: details || undefined,
        primary_contact: {
          full_name: name,
          email,
          phone_number: normalizedPhone,
        },
      },
      jobs: [
        {
          job_type: service.jobType,
          name: `${service.label} - ${name}`,
          description: moveDescription,
          ...(moveDate && /^\d{4}-\d{2}-\d{2}$/.test(moveDate)
            ? { date: moveDate }
            : {}),
          locations: [
            {
              address: pickup,
              country: 'US',
            },
            {
              address: destination,
              country: 'US',
            },
          ],
          note_from_customer: details || undefined,
          office_notes: homeSize ? `Home size: ${homeSize}` : undefined,
        },
      ],
      name: `${service.label} - ${name}`,
      description: moveDescription,
      referral_source: utmSource || 'A2 Moving Website',
      referral_details: referralDetails || 'A2 Moving website quote form',
      milestones: [milestone],

      // Keep true for the first test. Change to false after verification.
      is_test: true,
    };

    const supermoveUrl = process.env.SUPERMOVE_WEBHOOK_URL;

    if (!supermoveUrl) {
      console.error('SUPERMOVE_WEBHOOK_URL is not configured');

      return NextResponse.json(
        { error: 'Lead integration is not configured' },
        { status: 500 }
      );
    }

    const supermoveResponse = await fetch(supermoveUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(supermovePayload),
      cache: 'no-store',
    });

    if (!supermoveResponse.ok) {
      const supermoveError = await supermoveResponse.text();

      console.error(
        'Supermove lead error:',
        supermoveResponse.status,
        supermoveError.slice(0, 1000)
      );

      return NextResponse.json(
        { error: 'Failed to create Supermove lead' },
        { status: 502 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeMoveDate = escapeHtml(moveDate || 'Not provided');
    const safePickup = escapeHtml(pickup);
    const safeDestination = escapeHtml(destination);
    const safeHomeSize = escapeHtml(homeSize || 'Not provided');
    const safeDetails = escapeHtml(details || 'Not provided');
    const safeService = escapeHtml(service.label);

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.FROM_EMAIL,
        to: [email],
        bcc: ['a2movcom@gmail.com'],
        subject: `A2 Moving Quote Request - ${safeName}`,
        html: `
          <h2>Thank you for considering A2 Moving</h2>

          <p>Hi ${safeName},</p>

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
            Name: ${safeName}<br>
            Email: ${safeEmail}<br>
            Phone: ${safePhone}<br>
            Service: ${safeService}<br>
            Move date: ${safeMoveDate}<br>
            Pickup: ${safePickup}<br>
            Destination: ${safeDestination}<br>
            Home size: ${safeHomeSize}<br>
            Details: ${safeDetails}
          </p>

          <p>Our team will contact you shortly.</p>

          <p>
            <a href="https://app.supermove.co/0/a2movingcompany/request?referrer=4838">
              Continue to Book Online
            </a>
          </p>

          <p>Questions? Call us at 562-759-5569.</p>

          <p>
            Thank you,<br>
            A2 Moving
          </p>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const emailError = await emailResponse.text();
      console.error(
        'Email error:',
        emailResponse.status,
        emailError.slice(0, 1000)
      );
    }

    return NextResponse.json({
      success: true,
      emailSent: emailResponse.ok,
      testLead: true,
    });
  } catch (error) {
    console.error('Quote request error:', error);

    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}
