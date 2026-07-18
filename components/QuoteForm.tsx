'use client';

import { FormEvent, useState } from 'react';

export default function QuoteForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      moveDate: formData.get('moveDate'),
      pickup: formData.get('pickup'),
      destination: formData.get('destination'),
      homeSize: formData.get('homeSize'),
      details: formData.get('details'),
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
          <input name="moveDate" type="date" />
          <input name="pickup" placeholder="Pickup City or ZIP" required />
          <input name="destination" placeholder="Destination City or ZIP" required />

          <select name="homeSize">
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
