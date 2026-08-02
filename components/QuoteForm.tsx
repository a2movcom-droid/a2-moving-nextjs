'use client';

import { FormEvent, useEffect, useState } from 'react';

type Attribution = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  fbclid?: string;
  referrer?: string;
  landing_page?: string;
};

const ATTRIBUTION_KEY = 'a2_moving_attribution';

export default function QuoteForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem(ATTRIBUTION_KEY);
      const previous: Attribution = stored ? JSON.parse(stored) : {};
      const params = new URLSearchParams(window.location.search);

      const current: Attribution = {
        utm_source: params.get('utm_source') || undefined,
        utm_medium: params.get('utm_medium') || undefined,
        utm_campaign: params.get('utm_campaign') || undefined,
        utm_content: params.get('utm_content') || undefined,
        utm_term: params.get('utm_term') || undefined,
        gclid: params.get('gclid') || undefined,
        fbclid: params.get('fbclid') || undefined,
        referrer: previous.referrer || document.referrer || undefined,
        landing_page: previous.landing_page || window.location.href,
      };

      const attribution = Object.fromEntries(
        Object.entries({ ...previous, ...current }).filter(
          ([, value]) => Boolean(value)
        )
      );

      sessionStorage.setItem(
        ATTRIBUTION_KEY,
        JSON.stringify(attribution)
      );
    } catch {
      // The quote form still works if browser storage is unavailable.
    }
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (loading) return;

    setLoading(true);
    setError('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    let attribution: Attribution = {};

    try {
      const stored = sessionStorage.getItem(ATTRIBUTION_KEY);
      attribution = stored ? JSON.parse(stored) : {};
    } catch {
      attribution = {};
    }

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      serviceType: formData.get('serviceType'),
      moveDate: formData.get('moveDate'),
      pickup: formData.get('pickup'),
      destination: formData.get('destination'),
      homeSize: formData.get('homeSize'),
      details: formData.get('details'),
      ...attribution,
    };

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Unable to send quote request.');
      }

      setSent(true);
      form.reset();
    } catch {
      setError('Something went wrong. Please call us at 562-759-5569.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="quote" id="quote">
      <h2>Get a Free Moving Quote</h2>
      <p>Fast response. No obligation estimate.</p>

      {sent ? (
        <div className="success">
          <h3>Thank you. We received your request.</h3>
          <p>
            We sent your moving rate information to your email. Our team will
            contact you shortly to discuss your move.
          </p>

          <a
            href="https://app.supermove.co/0/a2movingcompany/request?referrer=4838"
            target="_blank"
            rel="noopener noreferrer"
          >
            Continue to Book Online
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Full Name" required />
          <input name="email" type="email" placeholder="Email" required />
          <input name="phone" type="tel" placeholder="Phone Number" required />

          <select name="serviceType" defaultValue="" required>
            <option value="" disabled>
              Select Moving Service
            </option>
            <option value="local">Local Move</option>
            <option value="long-distance">Long Distance Move</option>
            <option value="commercial">Commercial Move</option>
            <option value="labor">Labor Only</option>
          </select>

          <input name="moveDate" type="date" />
          <input name="pickup" placeholder="Pickup City or ZIP" required />
          <input
            name="destination"
            placeholder="Destination City or ZIP"
            required
          />

          <select name="homeSize" defaultValue="">
            <option value="">Select Home Size</option>
            <option>Studio</option>
            <option>1 Bedroom</option>
            <option>2 Bedrooms</option>
            <option>3 Bedrooms</option>
            <option>4+ Bedrooms</option>
            <option>Office / Commercial</option>
          </select>

          <textarea
            name="details"
            placeholder="Tell us about your move"
            rows={4}
          />

          {error && <p>{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Get My Free Quote'}
          </button>
        </form>
      )}
    </div>
  );
}
