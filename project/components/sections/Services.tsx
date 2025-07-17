'use client';

import { motion } from 'framer-motion';
import { 
  Plane, 
  Ship, 
  Warehouse, 
  FileText, 
  Shield, 
  Package, 
  MapPin, 
  Truck,
  Globe,
  Clock,
  CheckCircle,
  ArrowRight,
  Train,
  BarChart,
  Network,
  Building
} from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { useInView } from 'react-intersection-observer';

const cargoServices = [
  {
    icon: Plane,
    title: 'Air Freight',
    description: 'Fast and reliable air cargo services for time-sensitive shipments worldwide.',
    features: ['Express delivery', 'Temperature controlled', 'Real-time tracking', 'Door-to-door service'],
  },
  {
    icon: Ship,
    title: 'Sea Freight',
    description: 'Cost-effective sea freight solutions for large volume shipments.',
    features: ['FCL & LCL options', 'Port-to-port delivery', 'Consolidated shipping', 'Flexible scheduling'],
  },
  {
    icon: Truck,
    title: 'Road Freight',
    description: 'Reliable road transportation services for local and international deliveries.',
    features: ['Full & partial loads', 'Cross-border services', 'Express delivery', 'Specialized vehicles'],
  },
  {
    icon: Train,
    title: 'Rail Freight',
    description: 'Eco-friendly rail freight solutions for long-distance cargo transportation.',
    features: ['Intermodal options', 'High capacity', 'Lower carbon footprint', 'Cost-effective'],
  },
  {
    icon: FileText,
    title: 'Customs Services',
    description: 'Expert customs clearance and documentation services.',
    features: ['Documentation prep', 'Duty optimization', 'Compliance support', 'Fast clearance'],
  },
];

const consultationServices = [
  { 
    icon: Network, 
    title: 'Supply Chain', 
    description: 'Comprehensive supply chain optimization and management solutions',
    features: ['Network design', 'Process optimization', 'Inventory management', 'Technology integration']
  },
  { 
    icon: Warehouse, 
    title: 'Logistics', 
    description: 'End-to-end logistics planning and execution services',
    features: ['Distribution strategy', 'Warehouse optimization', 'Transport planning', 'Cost reduction']
  },
  { 
    icon: BarChart, 
    title: 'Business Development', 
    description: 'Strategic business growth and market expansion services',
    features: ['Market analysis', 'Growth strategy', 'Partner selection', 'International expansion']
  },
];

const valueAddedServices = [
  { icon: Shield, title: 'Cargo Insurance', description: 'Comprehensive coverage for your shipments' },
  { icon: Package, title: 'Packaging Solutions', description: 'Professional packing and crating services' },
  { icon: MapPin, title: 'Real-time Tracking', description: 'Monitor your shipments 24/7 online' },
  { icon: Building, title: 'Warehousing', description: 'Secure storage and distribution facilities' },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
          >
            Our Services
          </motion.span>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Comprehensive Logistics Solutions
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            From cargo services to business consultation, we provide end-to-end logistics 
            and supply chain solutions tailored to your business needs.
          </motion.p>
        </motion.div>

        {/* Cargo Services */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Cargo Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cargoServices.map((service, index) => {
              let href = "#";
              switch (service.title) {
                case "Air Freight":
                  href = "/services/air-freight";
                  break;
                case "Sea Freight":
                  href = "/services/sea-freight";
                  break;
                case "Road Freight":
                  href = "/services/road-freight";
                  break;
                case "Rail Freight":
                  href = "/services/rail-freight";
                  break;
                case "Customs Services":
                  href = "/services/customs";
                  break;
                default:
                  href = "#";
              }
              return (
                <motion.div key={service.title} variants={itemVariants}>
                  <Card className="p-6 h-full group cursor-pointer">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {service.description}
                      </p>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-white"
                      href={href}
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Consultation Services */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Consultation Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultationServices.map((service, index) => {
              let href = "#";
              switch (service.title) {
                case "Supply Chain":
                  href = "/consultation/supply-chain";
                  break;
                case "Logistics":
                  href = "/consultation/logistics";
                  break;
                case "Business Development":
                  href = "/consultation/business-development";
                  break;
                default:
                  href = "#";
              }
              return (
                <motion.div key={service.title} variants={itemVariants}>
                  <Card className="p-6 h-full group cursor-pointer">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {service.description}
                      </p>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-white"
                      href={href}
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Value-Added Services */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Value-Added Services
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Enhance your logistics experience with our comprehensive range of additional services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueAddedServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors group cursor-pointer"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="bg-gradient-to-r from-primary to-cyan-600 rounded-2xl p-8 md:p-12 text-white">
            <Globe className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Ship Globally?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get a customized quote for your logistics needs and experience 
              the MCCED difference in global shipping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" href="/get-a-quote">
                Get Free Quote
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" href="/contact">
                <Clock className="mr-2 w-5 h-5" />
                Customer Service
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}