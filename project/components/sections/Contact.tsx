'use client';

import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  User,
  Building,
  Globe,
  Calendar,
  CheckCircle,
  HeadphonesIcon,
  HelpCircle,
  MessageCircle,
  FileText
} from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+20 123 456 789', '+20 987 654 321'],
    description: 'Available 24/7 for urgent inquiries'
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@mcced.com', 'support@mcced.com'],
    description: 'We respond within 2 hours'
  },
  {
    icon: MapPin,
    title: 'Address',
    details: ['Cairo, Egypt', 'Middle East Hub'],
    description: 'Visit our headquarters'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Mon-Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
    description: 'Emergency support available 24/7'
  },
];

const offices = [
  {
    city: 'Cairo',
    country: 'Egypt',
    address: '123 Logistics Street, Cairo, Egypt',
    phone: '+20 123 456 789',
    email: 'cairo@mcced.com',
    type: 'Headquarters'
  },
  {
    city: 'Dubai',
    country: 'UAE',
    address: '456 Trade Center, Dubai, UAE',
    phone: '+971 123 456 789',
    email: 'dubai@mcced.com',
    type: 'Regional Office'
  },
  {
    city: 'Riyadh',
    country: 'Saudi Arabia',
    address: '789 Business District, Riyadh, KSA',
    phone: '+966 123 456 789',
    email: 'riyadh@mcced.com',
    type: 'Branch Office'
  },
];

const customerServiceOptions = [
  {
    icon: HelpCircle,
    title: 'General Inquiries',
    description: 'Questions about our services, working hours, or company information'
  },
  {
    icon: MessageCircle,
    title: 'Shipment Support',
    description: 'Assistance with tracking, delivery issues, or shipment status updates'
  },
  {
    icon: FileText,
    title: 'Documentation Help',
    description: 'Support with customs documentation, certificates, or shipping paperwork'
  },
  {
    icon: Phone,
    title: '24/7 Emergency Support',
    description: 'Urgent assistance for time-sensitive shipments and critical situations'
  },
];

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-primary/10 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* خلفية SVG زخرفية */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-20 blur-2xl z-0" aria-hidden>
        <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="700" cy="100" r="120" fill="#06b6d4" fillOpacity="0.18" />
          <circle cx="100" cy="500" r="180" fill="#6366f1" fillOpacity="0.13" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 tracking-widest"
          >
            Contact Us
          </motion.span>
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-4">
              <Mail className="w-10 h-10 text-primary" />
              <Phone className="w-8 h-8 text-cyan-500" />
              <MapPin className="w-8 h-8 text-indigo-500" />
            </div>
          </div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 drop-shadow-lg"
          >
            Get in Touch with Our Experts
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Ready to streamline your logistics? <span className="text-primary font-semibold">Contact our team</span> for personalized 
            solutions and expert guidance on your shipping needs.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            variants={itemVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <Card className="p-8 bg-white/90 dark:bg-gray-800/90 shadow-xl border border-primary/10">
              <div className="flex items-center mb-6">
                <MessageSquare className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Send us a Message
                </h3>
              </div>

              {isSubmitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Thank you for contacting us. We&apos;ll get back to you within 2 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <Building className="w-4 h-4 inline mr-2" />
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="Enter company name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <Globe className="w-4 h-4 inline mr-2" />
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      <option value="">Select a service</option>
                      <option value="air-freight">Air Freight</option>
                      <option value="sea-freight">Sea Freight</option>
                      <option value="road-freight">Road Freight</option>
                      <option value="rail-freight">Rail Freight</option>
                      <option value="customs">Customs Services</option>
                      <option value="supply-chain">Supply Chain Consultation</option>
                      <option value="logistics">Logistics Consultation</option>
                      <option value="business-development">Business Development</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Tell us about your logistics needs"
                    ></textarea>
                  </div>

                  <div>
                    <Button className="w-full md:w-auto">
                      <Send className="w-4 h-4 mr-2" />
                      Submit Message
                  </Button>
                  </div>
                </form>
              )}
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <Card className="p-8 bg-gradient-to-br from-primary to-cyan-600 text-white shadow-xl border-0">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <item.icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-white/90 text-sm">{detail}</p>
                      ))}
                      <p className="text-white/70 text-xs mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
                  </div>
                </Card>
          </motion.div>
        </div>

        {/* Customer Service Section */}
        <motion.div
          id="customer-service"
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <HeadphonesIcon className="w-12 h-12 text-primary" />
            </div>
            <motion.span
              variants={itemVariants}
              className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
            >
              Customer Service
            </motion.span>
            
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              How Can We Help You?
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            >
              Our dedicated customer service team is available to assist you with any questions or concerns.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {customerServiceOptions.map((option, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/90 dark:bg-gray-800/90 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-primary/10"
              >
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <option.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  {option.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <motion.div variants={itemVariants}>
              <Button size="lg" href="tel:+201234567890">
                <Phone className="w-5 h-5 mr-2" />
                Call Customer Service
                </Button>
            </motion.div>
          </div>
        </motion.div>


        {/* Global Offices */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="text-center mb-12">
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Our Global Offices
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            >
              Visit or contact one of our offices around the world
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              className="bg-white/90 dark:bg-gray-800/90 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-primary/10"
              >
                <div className="flex items-center mb-4">
                  <MapPin className="w-5 h-5 text-primary mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {office.city}, {office.country}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {office.address}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-primary mr-2" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-primary mr-2" />
                    <span>{office.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Building className="w-4 h-4 text-primary mr-2" />
                    <span>{office.type}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}