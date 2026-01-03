import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { FiScissors, FiHome, FiStar, FiTrendingUp, FiAward, FiMapPin, FiPhone } from 'react-icons/fi';
import { Card, CardContent } from '../components/ui/card';

const HomePage = () => {
  const heroImage = 'https://static.prod-images.emergentagent.com/jobs/9e53fdc8-37ad-4a53-89b2-e592423571e4/images/0e538b211d360225d2a2c0f3fca15ef478325e4ee0eed15a5ac75ede9f6b62cc.png';
  const barberTools = 'https://static.prod-images.emergentagent.com/jobs/9e53fdc8-37ad-4a53-89b2-e592423571e4/images/fe0e558ad09d619db1fb5ead7203f9e2c87068ac7c17d29f4e95a26cd0a92cf8.png';
  const mobileKit = 'https://static.prod-images.emergentagent.com/jobs/9e53fdc8-37ad-4a53-89b2-e592423571e4/images/e40803d642ba7e986205c67db3393c3f6aab62da91eede28a9761fdd6220228c.png';
  const transformation = 'https://static.prod-images.emergentagent.com/jobs/9e53fdc8-37ad-4a53-89b2-e592423571e4/images/725614dc6c0f8548e950fc40d1f3c1cbfad98ccff5964dff92551df3b3dd54af.png';

  const services = [
    {
      icon: <FiScissors className="w-8 h-8" />,
      title: 'Premium Haircuts',
      description: '12+ signature styles from classic to contemporary',
      price: 'TZS 30,000 - 85,000'
    },
    {
      icon: <FiHome className="w-8 h-8" />,
      title: 'Door-to-Door Service',
      description: 'Luxury grooming at your doorstep',
      price: 'TZS 85,000 - 125,000'
    },
    {
      icon: <FiStar className="w-8 h-8" />,
      title: 'Beard Design',
      description: 'Professional beard shaping and maintenance',
      price: 'TZS 20,000+'
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: 'Grooming Packages',
      description: 'Complete transformation experiences',
      price: 'TZS 100,000+'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Happy Clients' },
    { number: '12', label: 'Signature Styles' },
    { number: '10+', label: 'Years Experience' },
    { number: '15km', label: 'Service Radius' }
  ];

  const testimonials = [
    {
      name: 'James Mwangi',
      role: 'Business Executive',
      text: 'Best barbershop in Dar es Salaam! The attention to detail is incredible.',
      rating: 5
    },
    {
      name: 'David Kimaro',
      role: 'Entrepreneur',
      text: 'The mobile service is a game-changer. Professional setup right at my office.',
      rating: 5
    },
    {
      name: 'Ali Hassan',
      role: 'Creative Director',
      text: 'Finally found a barber who understands modern styles. Highly recommend!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(10, 35, 66, 0.85), rgba(10, 35, 66, 0.9)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                <span className="text-gradient-gold">Premium</span>{' '}
                <span className="text-foreground">Grooming</span>
                <br />
                <span className="text-foreground">Experience</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Master barbering artistry meets modern style at RJAY'S BARBERSHOP, Ubungo-Msewe, Dar es Salaam. 
                Premium cuts in-shop or luxury mobile service at your doorstep.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/booking">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow">
                    Book In-Shop Visit
                  </Button>
                </Link>
                <Link to="/booking">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Request Mobile Service
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-card/50 backdrop-blur-lg border-t border-border">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-display font-bold text-primary">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Our <span className="text-gradient-gold">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From classic cuts to bold statements, we offer comprehensive grooming solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover-lift bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
                    <div className="text-primary font-semibold">{service.price}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Explore <span className="text-gradient-gold">12 Signature Styles</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our comprehensive hairstyle gallery with 360° views
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              'https://static.prod-images.emergentagent.com/jobs/9e53fdc8-37ad-4a53-89b2-e592423571e4/images/efdb673dd3149d419da42c4d687f40729838abec5297d45ec5fb18f5c1ae6b99.png',
              'https://static.prod-images.emergentagent.com/jobs/9e53fdc8-37ad-4a53-89b2-e592423571e4/images/236018f8aa52e1767c413056ec8ddca1380f93eb66b162824d31c30e1fd8b5d9.png',
              'https://static.prod-images.emergentagent.com/jobs/9e53fdc8-37ad-4a53-89b2-e592423571e4/images/2871f64a272abc4edbdf794186d85d304e76e5ab932d1b7d22d7a1b1bcdb8779.png'
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative overflow-hidden rounded-lg shadow-card hover-lift cursor-pointer group"
              >
                <img 
                  src={image} 
                  alt={`Style ${index + 1}`} 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-foreground font-semibold">View Style Details</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/gallery">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                View All 12 Styles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Dual Service Model */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="text-gradient-gold">Two Ways</span> to Experience Excellence
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover-lift h-full">
                <div className="relative h-64">
                  <img src={heroImage} alt="In-Shop" className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4">
                    <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold">
                      In-Shop Experience
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-display font-bold mb-4">Visit Our Premium Shop</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <FiMapPin className="w-5 h-5 text-primary mt-0.5" />
                      <span>Ubungo-Msewe, Dar es Salaam</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FiStar className="w-5 h-5 text-primary mt-0.5" />
                      <span>Luxury atmosphere with premium tools</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FiAward className="w-5 h-5 text-primary mt-0.5" />
                      <span>Starting from TZS 30,000</span>
                    </li>
                  </ul>
                  <Link to="/booking">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Book In-Shop
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover-lift h-full">
                <div className="relative h-64">
                  <img src={mobileKit} alt="Mobile Service" className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4">
                    <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold">
                      Mobile Service
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-display font-bold mb-4">Luxury at Your Doorstep</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <FiHome className="w-5 h-5 text-primary mt-0.5" />
                      <span>15km radius service area</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FiStar className="w-5 h-5 text-primary mt-0.5" />
                      <span>Professional mobile setup</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FiAward className="w-5 h-5 text-primary mt-0.5" />
                      <span>Starting from TZS 85,000</span>
                    </li>
                  </ul>
                  <Link to="/booking">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Request Mobile Service
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Client <span className="text-gradient-gold">Testimonials</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover-lift h-full">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FiStar key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-gold relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={barberTools} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary-foreground">
              Ready for Your Transformation?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Book your appointment today and experience the RJAY'S difference
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button size="lg" variant="outline" className="bg-background text-primary border-none hover:bg-background/90">
                  Book Appointment
                </Button>
              </Link>
              <a href="https://wa.me/255XXXXXXXXX" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  <FiPhone className="mr-2" /> WhatsApp Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-display font-bold mb-4 text-primary">RJAY'S BARBERSHOP</h3>
              <p className="text-muted-foreground mb-4">
                Premium grooming experience in Dar es Salaam
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/gallery" className="block text-muted-foreground hover:text-primary transition-colors">Gallery</Link>
                <Link to="/services" className="block text-muted-foreground hover:text-primary transition-colors">Services</Link>
                <Link to="/booking" className="block text-muted-foreground hover:text-primary transition-colors">Book Now</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Ubungo-Msewe, Dar es Salaam</p>
                <p>+255 XXX XXX XXX</p>
                <p>contact@rjaysbarbershop.co.tz</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 RJAY'S BARBERSHOP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
