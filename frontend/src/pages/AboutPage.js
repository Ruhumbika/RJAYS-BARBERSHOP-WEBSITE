import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { FiAward, FiUsers, FiTrendingUp, FiMapPin, FiClock, FiPhone } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const logo = 'https://static.prod-images.emergentagent.com/jobs/9e53fdc8-37ad-4a53-89b2-e592423571e4/images/b95e77aa9bffb17f95d6f68e6d8f47a4e7b979f090efc82c181ce97864b0a501.png';
  const shopInterior = 'https://static.prod-images.emergentagent.com/jobs/9e53fdc8-37ad-4a53-89b2-e592423571e4/images/0e538b211d360225d2a2c0f3fca15ef478325e4ee0eed15a5ac75ede9f6b62cc.png';
  const tools = 'https://static.prod-images.emergentagent.com/jobs/9e53fdc8-37ad-4a53-89b2-e592423571e4/images/fe0e558ad09d619db1fb5ead7203f9e2c87068ac7c17d29f4e95a26cd0a92cf8.png';
  const mobileKit = 'https://static.prod-images.emergentagent.com/jobs/9e53fdc8-37ad-4a53-89b2-e592423571e4/images/e40803d642ba7e986205c67db3393c3f6aab62da91eede28a9761fdd6220228c.png';

  const values = [
    {
      icon: <FiAward />,
      title: 'Excellence',
      description: 'Committed to delivering premium grooming experiences with every cut'
    },
    {
      icon: <FiUsers />,
      title: 'Client-Focused',
      description: 'Your satisfaction and confidence are our top priorities'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Innovation',
      description: 'Staying ahead with the latest styles and techniques in barbering'
    }
  ];

  const milestones = [
    { year: '2014', event: 'RJAY\'S BARBERSHOP Founded' },
    { year: '2017', event: 'Expanded to Premium Location in Ubungo-Msewe' },
    { year: '2020', event: 'Launched Mobile Grooming Service' },
    { year: '2024', event: '5000+ Happy Clients Served' }
  ];

  const faqs = [
    {
      question: 'Do I need to book in advance?',
      answer: 'We highly recommend booking in advance, especially for weekends and mobile services. Walk-ins are welcome but subject to availability.'
    },
    {
      question: 'How far do you travel for mobile services?',
      answer: 'We provide mobile services within a 15km radius of our Ubungo-Msewe location. Contact us to check if we cover your area.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, mobile money (M-Pesa, Tigo Pesa, Airtel Money), and bank transfers.'
    },
    {
      question: 'Can I request a specific barber?',
      answer: 'Yes! When booking, mention your preferred barber in the notes section. We\'ll do our best to accommodate your request.'
    },
    {
      question: 'What\'s included in the mobile service?',
      answer: 'Mobile service includes all tools, equipment, professional setup, the haircut/grooming service of your choice, and complete cleanup.'
    }
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
          <div className="w-32 h-32 mx-auto mb-6">
            <img src={logo} alt="RJAY'S BARBERSHOP" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            About <span className="text-gradient-gold">RJAY'S</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium barbering experience in Dar es Salaam since 2014
          </p>
        </motion.div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">
                Our <span className="text-gradient-gold">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  RJAY'S BARBERSHOP was founded in 2014 with a simple mission: to bring world-class grooming experiences to Dar es Salaam. What started as a passion for the craft of barbering has evolved into a premium destination for men who value precision, style, and excellence.
                </p>
                <p>
                  Located in the heart of Ubungo-Msewe, our shop combines luxury ambiance with technical mastery. Every member of our team is trained in both classic techniques and contemporary styles, ensuring you receive a cut that's perfectly tailored to your lifestyle.
                </p>
                <p>
                  In 2020, we pioneered mobile barbering services in Tanzania, bringing our premium experience directly to your doorstep. Today, we serve over 5000 satisfied clients, each leaving with renewed confidence and style.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <img src={shopInterior} alt="Shop Interior" className="w-full rounded-lg shadow-elegant" />
              <img src={tools} alt="Professional Tools" className="w-full rounded-lg shadow-elegant" />
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-display font-bold text-center mb-12">
            Our <span className="text-gradient-gold">Values</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover-lift h-full text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary text-2xl">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-display font-bold text-center mb-12">
            Our <span className="text-gradient-gold">Journey</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-bold text-primary-foreground shrink-0">
                    {milestone.year}
                  </div>
                  {index !== milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2"></div>
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-lg font-medium">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Location & Hours */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-display font-bold text-center mb-12">
            Visit <span className="text-gradient-gold">Us</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <FiMapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Location</h3>
                    <p className="text-muted-foreground mb-4">
                      RJAY'S BARBERSHOP<br />
                      Ubungo-Msewe<br />
                      Dar es Salaam, Tanzania
                    </p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <FiClock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Hours</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span className="font-medium">9:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-medium">9:00 AM - 9:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="font-medium">10:00 AM - 6:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-display font-bold text-center mb-12">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-subtle rounded-2xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Experience <span className="text-gradient-gold">Excellence?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust RJAY'S for their grooming needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Book Appointment
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

export default AboutPage;
