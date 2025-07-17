'use client';

import { motion } from 'framer-motion';
import { 
  Package, 
  Thermometer, 
  Shield, 
  Clock, 
  Truck, 
  Plane,
  Ship,
  Warehouse,
  CheckCircle,
  ArrowRight,
  Globe,
  Zap
} from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { useInView } from 'react-intersection-observer';

const products = [
  {
    icon: Package,
    title: 'Standard Freight',
    description: 'Reliable and cost-effective shipping for regular cargo',
    features: [
      'Door-to-door delivery',
      'Real-time tracking',
      'Insurance coverage',
      'Flexible scheduling'
    ],
    price: 'From $50',
    popular: false,
  },
  {
    icon: Zap,
    title: 'Express Delivery',
    description: 'Fast-track shipping for time-sensitive shipments',
    features: [
      'Priority handling',
      '24-48 hour delivery',
      'Dedicated support',
      'Live GPS tracking'
    ],
    price: 'From $150',
    popular: true,
  },
  {
    icon: Thermometer,
    title: 'Temperature Controlled',
    description: 'Specialized transport for temperature-sensitive goods',
    features: [
      'Climate monitoring',
      'Cold chain integrity',
      'Pharmaceutical grade',
      'Real-time alerts'
    ],
    price: 'From $200',
    popular: false,
  },
  {
    icon: Shield,
    title: 'High-Value Cargo',
    description: 'Secure transport for valuable and sensitive items',
    features: [
      'Enhanced security',
      'Dedicated escort',
      'Full insurance',
      'Chain of custody'
    ],
    price: 'Custom Quote',
    popular: false,
  },
];

const specializedServices = [
  {
    icon: Plane,
    title: 'Air Cargo Charter',
    description: 'Dedicated aircraft for large or urgent shipments',
    image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Ship,
    title: 'Project Cargo',
    description: 'Heavy lift and oversized cargo transportation',
    image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Warehouse,
    title: 'E-commerce Fulfillment',
    description: 'Complete order fulfillment and distribution',
    image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Products() {
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
    <section id="products" className="py-20 bg-white dark:bg-gray-800">
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
            Our Products
          </motion.span>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Tailored Logistics Products
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Choose from our range of specialized logistics products designed to meet 
            your specific shipping and transportation needs.
          </motion.p>
        </motion.div>

        {/* Main Products */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {products.map((product, index) => (
            <motion.div key={product.title} variants={itemVariants}>
              <Card className={`p-6 h-full relative ${product.popular ? 'ring-2 ring-primary' : ''}`}>
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <product.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {product.description}
                  </p>
                  <div className="text-2xl font-bold text-primary mb-4">
                    {product.price}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={product.popular ? 'primary' : 'outline'} 
                  className="w-full"
                >
                  Get Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Specialized Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Specialized Solutions
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Advanced logistics solutions for unique transportation challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {specializedServices.map((service, index) => (
              <motion.div key={service.title} variants={itemVariants}>
                <Card className="overflow-hidden group cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <service.icon className="w-8 h-8 mb-2" />
                      <h4 className="text-xl font-bold">{service.title}</h4>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {service.description}
                    </p>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="bg-gradient-to-r from-primary to-cyan-600 rounded-2xl p-8 md:p-12 text-white">
            <Globe className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Our logistics experts can design a tailored solution that perfectly 
              fits your unique shipping requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Clock className="mr-2 w-5 h-5" />
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Download Brochure
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}