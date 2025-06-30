'use client';

import { useState, ChangeEvent } from 'react';
import { Info } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    preferredTime: '',
    agreeToContact: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\+?[0-9\s-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.reason.trim()) newErrors.reason = 'Please let us know what brings you here';
    if (!formData.preferredTime.trim()) newErrors.preferredTime = 'Preferred time is required';
    if (!formData.agreeToContact) newErrors.agreeToContact = 'You must agree to be contacted';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    try {
      // In a real application, you would send this data to your backend
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully! We\'ll get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        reason: '',
        preferredTime: '',
        agreeToContact: false,
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'There was an error sending your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-sky-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Contact Details */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-green-900/10">
              <h2 className="text-2xl font-bold mb-6" style={{ color: 'rgb(20, 65, 51)' }}>Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                    <svg className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium" style={{ color: 'rgb(20, 65, 51)' }}>Phone</h3>
                    <p className="text-gray-600">(323) 555-0192</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                    <svg className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium" style={{ color: 'rgb(20, 65, 51)' }}>Email</h3>
                    <a href="mailto:serena@blakepsychology.com" className="text-gray-600 hover:underline">serena@blakepsychology.com</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                    <svg className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium" style={{ color: 'rgb(20, 65, 51)' }}>Location</h3>
                    <p className="text-gray-600">1287 Maplewood Drive<br />Los Angeles, CA 90026</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                    <svg className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium" style={{ color: 'rgb(20, 65, 51)' }}>Office Hours</h3>
                    <div className="space-y-2">
                      <p className="text-gray-600">
                        <span className="font-medium">In-person:</span> Tue & Thu, 10 AM–6 PM
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Virtual via Zoom:</span> Mon, Wed & Fri, 1 PM–5 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                    <svg className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium" style={{ color: 'rgb(20, 65, 51)' }}>Session Fees</h3>
                    <div className="space-y-1">
                      <p className="text-gray-600">
                        <span className="font-medium">Individual Session:</span> $200
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Couples Session:</span> $240
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="p-6 rounded-lg shadow-lg border border-green-900/10 bg-green-50">
              <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: 'rgb(20, 65, 51)' }}>Get In Touch</h2>
              <p className="text-sm text-center mb-6" style={{ color: 'rgb(20, 65, 51)' }}>
                Simply fill out the brief fields below and I will be in touch with you soon, usually within one business day. 
                This form is safe, private, and completely free.
              </p>
            
            {submitStatus ? (
              <div className={`p-4 rounded-lg text-center ${
                submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {submitStatus.message}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium mb-1"
                    style={{ color: 'rgb(20, 65, 51)' }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-700"
                    style={{ borderColor: 'rgb(20, 65, 51)' }}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium mb-1"
                    style={{ color: 'rgb(20, 65, 51)' }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-700"
                    style={{ borderColor: 'rgb(20, 65, 51)' }}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label 
                    htmlFor="phone" 
                    className="block text-sm font-medium mb-1"
                    style={{ color: 'rgb(20, 65, 51)' }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-700"
                    style={{ borderColor: 'rgb(20, 65, 51)' }}
                    placeholder="(555) 234-5678"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                </div>

                <div>
                  <label 
                    htmlFor="reason" 
                    className="block text-sm font-medium mb-1"
                    style={{ color: 'rgb(20, 65, 51)' }}
                  >
                    What brings you here?
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    rows={3}
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-700"
                    style={{ borderColor: 'rgb(20, 65, 51)' }}
                    placeholder="Briefly tell us what you&apos;d like to discuss"
                  ></textarea>
                  {errors.reason && <p className="mt-1 text-xs text-red-600">{errors.reason}</p>}
                </div>

                <div>
                  <label 
                    htmlFor="preferredTime" 
                    className="block text-sm font-medium mb-1"
                    style={{ color: 'rgb(20, 65, 51)' }}
                  >
                    Preferred time to reach you
                  </label>
                  <input
                    type="text"
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-700"
                    style={{ borderColor: 'rgb(20, 65, 51)' }}
                    placeholder="e.g., Weekday afternoons, Mornings, etc."
                  />
                  {errors.preferredTime && <p className="mt-1 text-xs text-red-600">{errors.preferredTime}</p>}
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="agreeToContact"
                      name="agreeToContact"
                      type="checkbox"
                      checked={formData.agreeToContact}
                      onChange={() => setFormData(prev => ({ ...prev, agreeToContact: !prev.agreeToContact }))}
                      className="size-4 rounded border-gray-300 text-green-700 focus:ring-green-700"
                      style={{ borderColor: 'rgb(20, 65, 51)' }}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label 
                      htmlFor="agreeToContact" 
                      className="font-medium"
                      style={{ color: 'rgb(20, 65, 51)' }}
                    >
                      I agree to be contacted
                    </label>
                    {errors.agreeToContact && <p className="text-red-600 text-xs mt-1">{errors.agreeToContact}</p>}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-950 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800 transition-colors duration-300"
                  >
                    {isSubmitting ? 'Sending...' : 'Submit'}
                  </button>
                </div>

                <p className="text-xs text-center mt-4" style={{ color: 'rgb(20, 65, 51)' }}>
                  <Info className="size-3 inline mr-1" />
                  By submitting, you confirm you are 18+ and agree to our{' '}
                  <a href="/privacy" className="underline" style={{ color: 'rgb(20, 65, 51)' }}>
                    Privacy Policy & TOS
                  </a>{' '}
                  and to receive emails & texts from Dr. Serena Blake.
                </p>
              </form>
            )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
