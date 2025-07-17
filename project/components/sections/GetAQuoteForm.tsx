"use client";
import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { Plane, Ship, Truck, CheckCircle } from 'lucide-react';

export default function GetAQuoteForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.service) {
      setError('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setSent(true);
      setLoading(false);
    }, 1200);
  };

  return (
    <section className="relative py-20 min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary/10 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none select-none opacity-30 blur-2xl" aria-hidden>
        <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="700" cy="100" r="120" fill="#06b6d4" fillOpacity="0.18" />
          <circle cx="100" cy="500" r="180" fill="#6366f1" fillOpacity="0.13" />
        </svg>
      </div>
      <div className="max-w-2xl w-full bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-2xl p-8 md:p-12 relative z-10 border border-primary/10">
        <div className="flex items-center gap-4 mb-6">
          <Plane className="w-10 h-10 text-primary" />
          <Ship className="w-8 h-8 text-cyan-500" />
          <Truck className="w-8 h-8 text-indigo-500" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-primary">Get a Free Quote</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">Request a personalized logistics quote and our team will get back to you promptly.</p>
        {sent ? (
          <div className="flex flex-col items-center justify-center py-12">
            <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
            <p className="text-xl font-semibold text-green-600 mb-2">Request Sent Successfully!</p>
            <p className="text-gray-600 dark:text-gray-300">Thank you for reaching out. Our team will contact you soon.</p>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">Name <span className="text-red-500">*</span></label>
              <input name="name" type="text" value={form.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-900" required />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">Email <span className="text-red-500">*</span></label>
              <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-900" required />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">Phone</label>
              <input name="phone" type="tel" value={form.phone} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-900" />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">Service Needed <span className="text-red-500">*</span></label>
              <select name="service" value={form.service} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-900" required>
                <option value="">Select a service</option>
                <option>Air Freight</option>
                <option>Sea Freight</option>
                <option>Road Freight</option>
                <option>Rail Freight</option>
                <option>Customs Clearance</option>
                <option>Supply Chain</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-900" rows={4}></textarea>
            </div>
            {error && <div className="text-red-500 text-sm font-medium">{error}</div>}
            <Button size="lg" className="w-full mt-2" disabled={loading}>
              {loading ? 'Sending...' : 'Submit Request'}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
