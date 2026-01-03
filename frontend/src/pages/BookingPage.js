import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Calendar } from '../components/ui/calendar';
import { FiCalendar, FiClock, FiMapPin, FiHome, FiPhone, FiMail } from 'react-icons/fi';
import { toast } from 'sonner';
import { useLocation } from 'react-router-dom';

const BookingPage = () => {
  const location = useLocation();
  const [serviceType, setServiceType] = useState(location.state?.mobile ? 'mobile' : 'inshop');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    style: location.state?.selectedStyle || '',
    service: location.state?.service || '',
    time: '',
    address: '',
    zipCode: '',
    notes: ''
  });

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM'
  ];

  const popularStyles = [
    'Buzz Cut', 'High Fade', 'Skin Fade', 'Textured Crop',
    'Side Part', 'Pompadour', 'Modern Mullet', 'Man Bun',
    'Beard + Fade', 'Temple Fade', 'French Crop', 'Ivy League'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.time) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (serviceType === 'mobile' && !formData.address) {
      toast.error('Please provide your address for mobile service');
      return;
    }

    // Store booking data in localStorage (mock functionality)
    const booking = {
      ...formData,
      serviceType,
      date: selectedDate.toDateString(),
      id: Date.now(),
      status: 'pending'
    };

    const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    existingBookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(existingBookings));

    toast.success('Booking request submitted! We\'ll confirm via SMS within 1 hour.');
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      style: '',
      service: '',
      time: '',
      address: '',
      zipCode: '',
      notes: ''
    });
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 mt-8"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            <span className="text-gradient-gold">Book</span> Your Appointment
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose between in-shop visit or luxury mobile service
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit}>
            {/* Service Type Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="mb-6">
                <CardContent className="p-6">
                  <Label className="text-lg font-semibold mb-4 block">Select Service Type *</Label>
                  <RadioGroup value={serviceType} onValueChange={setServiceType}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <label
                        className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          serviceType === 'inshop'
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <RadioGroupItem value="inshop" id="inshop" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <FiMapPin className="w-5 h-5 text-primary" />
                            <span className="font-semibold">In-Shop Visit</span>
                          </div>
                          <p className="text-sm text-muted-foreground">Ubungo-Msewe, Dar es Salaam</p>
                          <p className="text-sm text-primary font-semibold mt-1">TZS 15,000 - 85,000</p>
                        </div>
                      </label>

                      <label
                        className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          serviceType === 'mobile'
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <RadioGroupItem value="mobile" id="mobile" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <FiHome className="w-5 h-5 text-primary" />
                            <span className="font-semibold">Mobile Service</span>
                          </div>
                          <p className="text-sm text-muted-foreground">At your location (15km radius)</p>
                          <p className="text-sm text-primary font-semibold mt-1">TZS 85,000 - 125,000</p>
                        </div>
                      </label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
            </motion.div>

            {/* Personal Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="+255 XXX XXX XXX"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="email">Email (Optional)</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Service Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Service Selection</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="style">Preferred Hairstyle</Label>
                      <Select value={formData.style} onValueChange={(value) => handleChange('style', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a style" />
                        </SelectTrigger>
                        <SelectContent>
                          {popularStyles.map((style) => (
                            <SelectItem key={style} value={style}>
                              {style}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="service">Additional Services</Label>
                      <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Optional add-ons" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">No additional services</SelectItem>
                          <SelectItem value="beard">Beard Design (+TZS 20,000)</SelectItem>
                          <SelectItem value="hottowel">Hot Towel Treatment (+TZS 10,000)</SelectItem>
                          <SelectItem value="massage">Scalp Massage (+TZS 15,000)</SelectItem>
                          <SelectItem value="premium">Premium Products (+TZS 25,000)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Date & Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Date & Time *</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label className="mb-2 block">Select Date</Label>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date()}
                        className="rounded-md border"
                      />
                    </div>
                    <div>
                      <Label className="mb-2 block">Select Time Slot</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => handleChange('time', time)}
                            className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                              formData.time === time
                                ? 'border-primary bg-primary text-primary-foreground'
                                : 'border-border hover:border-primary/50'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Address (Mobile Service Only) */}
            {serviceType === 'mobile' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Service Location *</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="address">Full Address *</Label>
                        <Textarea
                          id="address"
                          value={formData.address}
                          onChange={(e) => handleChange('address', e.target.value)}
                          placeholder="Street address, building name, floor, etc."
                          rows={3}
                          required={serviceType === 'mobile'}
                        />
                      </div>
                      <div>
                        <Label htmlFor="zipCode">Area / ZIP Code (for availability check)</Label>
                        <Input
                          id="zipCode"
                          value={formData.zipCode}
                          onChange={(e) => handleChange('zipCode', e.target.value)}
                          placeholder="Enter area or postal code"
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Service available within 15km radius of Ubungo-Msewe
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Additional Notes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="mb-6">
                <CardContent className="p-6">
                  <Label htmlFor="notes">Additional Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleChange('notes', e.target.value)}
                    placeholder="Any special requests or preferences..."
                    rows={4}
                  />
                </CardContent>
              </Card>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col gap-4"
            >
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow"
              >
                Submit Booking Request
              </Button>
              <p className="text-sm text-center text-muted-foreground">
                <strong>Note:</strong> This is a booking request. We'll confirm your appointment via SMS within 1 hour.
                For immediate assistance, contact us on WhatsApp.
              </p>
            </motion.div>
          </form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12"
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-center">Need Help? Contact Us</h3>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <FiPhone className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-sm font-medium">Phone / WhatsApp</p>
                    <p className="text-sm text-muted-foreground">+255 XXX XXX XXX</p>
                  </div>
                  <div>
                    <FiMail className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">contact@rjaysbarbershop.co.tz</p>
                  </div>
                  <div>
                    <FiMapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">Ubungo-Msewe, DSM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
