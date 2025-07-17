import React from 'react';
import Button from '@/components/ui/Button';

export default function GetAQuoteForm() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 min-h-[60vh] flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-primary">Get a Free Quote</h1>
        <form className="space-y-6">
          <div>
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">Name</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required />
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required />
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">Phone</label>
            <input type="tel" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">Service Needed</label>
            <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
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
            <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" rows={4}></textarea>
          </div>
          <button type="submit" className="w-full">
            <Button size="lg" className="w-full">Submit Request</Button>
          </button>
        </form>
      </div>
    </section>
  );
}
