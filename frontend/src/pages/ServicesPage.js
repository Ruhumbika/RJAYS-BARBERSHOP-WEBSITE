import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { FiScissors, FiHome, FiStar, FiClock, FiDollarSign } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const inShopServices = [
    {
      name: 'Buzz Cut',
      description: 'Classic military-style cut with precision',
      duration: '15-20 min',
      price: 'TZS 15,000',
      features: ['Clean fade', 'Hot towel finish', 'Aftershave']
    },
    {
      name: 'High/Skin Fade',
      description: 'Dramatic fade showing technical mastery',
      duration: '30-50 min',
      price: 'TZS 45,000 - 65,000',
      features: ['Precision fade', 'Razor work', 'Styling product']
    },
    {
      name: 'Textured Styles',
      description: 'Modern crop, French crop, or temple fade',
      duration: '25-35 min',
      price: 'TZS 30,000 - 40,000',
      features: ['Texture cutting', 'Styling tutorial', 'Product recommendation']
    },
    {
      name: 'Classic Cuts',
      description: 'Side part, Ivy League, professional styling',
      duration: '25-30 min',
      price: 'TZS 40,000',
      features: ['Razor part line', 'Hot towel', 'Premium finish']
    },
    {
      name: 'Statement Styles',
      description: 'Pompadour, modern mullet, man bun',
      duration: '35-60 min',
      price: 'TZS 55,000 - 75,000',
      features: ['Complex styling', 'Blow dry', 'Premium products']
    },
    {
      name: 'Beard + Haircut',
      description: 'Complete grooming package',
      duration: '50-60 min',
      price: 'TZS 85,000',
      features: ['Full beard design', 'Haircut', 'Hot towel treatment']
    }
  ];

  const mobileServices = [
    {
      name: 'Premium Haircut (Mobile)',
      description: 'Any style from our gallery at your location',
      duration: '30-60 min',
      price: 'TZS 85,000+',
      features: ['Professional setup', 'All tools provided', 'Cleanup included']
    },
    {
      name: 'Executive Package',
      description: 'Haircut + beard grooming at your office',
      duration: '60-90 min',
      price: 'TZS 125,000',
      features: ['VIP treatment', 'Consultation', 'Premium products']
    },
    {
      name: 'Special Event Prep',
      description: 'Wedding, photoshoot, or special occasion',
      duration: '90+ min',
      price: 'Custom pricing',
      features: ['Complete grooming', 'Trial session', 'Day-of service']
    }
  ];

  const addOns = [
    { name: 'Hot Towel Treatment', price: 'TZS 10,000' },
    { name: 'Beard Design', price: 'TZS 20,000' },
    { name: 'Premium Products Package', price: 'TZS 25,000' },
    { name: 'Scalp Massage', price: 'TZS 15,000' },
    { name: 'Hair Color Consultation', price: 'TZS 30,000+' }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 mt-8"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Our <span className="text-gradient-gold">Services</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional grooming services tailored to your lifestyle
          </p>
        </motion.div>

        {/* In-Shop Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <FiScissors className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold">In-Shop Services</h2>
              <p className="text-muted-foreground">Ubungo-Msewe, Dar es Salaam</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inShopServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover-lift h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-display font-semibold mb-2">{service.name}</h3>
                    <p className="text-muted-foreground mb-4 text-sm flex-grow">{service.description}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <FiClock className="w-4 h-4 text-primary" />
                        <span>{service.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiDollarSign className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-primary">{service.price}</span>
                      </div>
                    </div>

                    <div className="border-t border-border pt-4 mb-4">
                      <p className="text-xs font-semibold mb-2 text-muted-foreground">INCLUDES:</p>
                      <ul className="space-y-1">
                        {service.features.map((feature, i) => (
                          <li key={i} className="text-sm flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link to="/booking" state={{ service: service.name }} className="mt-auto">
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        Book This Service
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <FiHome className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold">Mobile Services</h2>
              <p className="text-muted-foreground">15km radius service area</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mobileServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover-lift h-full border-primary/30">
                  <CardContent className="p-6 flex flex-col h-full">
                    <Badge className="bg-primary text-primary-foreground w-fit mb-3">Mobile</Badge>
                    <h3 className="text-xl font-display font-semibold mb-2">{service.name}</h3>
                    <p className="text-muted-foreground mb-4 text-sm flex-grow">{service.description}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <FiClock className="w-4 h-4 text-primary" />
                        <span>{service.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiDollarSign className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-primary">{service.price}</span>
                      </div>
                    </div>

                    <div className="border-t border-border pt-4 mb-4">
                      <p className="text-xs font-semibold mb-2 text-muted-foreground">INCLUDES:</p>
                      <ul className="space-y-1">
                        {service.features.map((feature, i) => (
                          <li key={i} className="text-sm flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link to="/booking" state={{ service: service.name, mobile: true }} className="mt-auto">
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        Request Mobile Service
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Add-Ons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <FiStar className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold">Add-On Services</h2>
              <p className="text-muted-foreground">Enhance your experience</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover-lift">
                  <CardContent className="p-4 flex items-center justify-between">
                    <span className="font-medium">{addon.name}</span>
                    <span className="text-primary font-semibold">{addon.price}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-subtle rounded-2xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to <span className="text-gradient-gold">Transform</span> Your Look?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your appointment today or contact us for custom packages
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Book Now
              </Button>
            </Link>
            <Link to="/gallery">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                View Gallery
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
