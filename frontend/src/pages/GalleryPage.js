import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { hairstyles, categories, faceShapes, hairTypes, maintenanceLevels } from '../data/hairstyles';
import { FiX, FiChevronLeft, FiChevronRight, FiFilter } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const GalleryPage = () => {
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [currentAngle, setCurrentAngle] = useState('front');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFaceShape, setSelectedFaceShape] = useState(null);
  const [selectedHairType, setSelectedHairType] = useState(null);
  const [selectedMaintenance, setSelectedMaintenance] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  const angles = [
    { id: 'front', name: 'Front View' },
    { id: 'left45', name: '45° Left' },
    { id: 'right45', name: '45° Right' },
    { id: 'side', name: 'Side View' },
    { id: 'back', name: 'Back View' },
    { id: 'overhead', name: 'Overhead' }
  ];

  const filteredStyles = hairstyles.filter(style => {
    if (selectedCategory !== 'all') {
      const categoryMatch = selectedCategory === 'low-maintenance' && style.maintenanceLevel === 'low' ||
                           selectedCategory === 'signature' && style.difficulty >= 3 ||
                           selectedCategory === 'professional' && (style.category.includes('Professional') || style.category.includes('Business')) ||
                           selectedCategory === 'bold' && (style.category.includes('Bold') || style.category.includes('Statement'));
      if (!categoryMatch) return false;
    }
    if (selectedFaceShape && !style.faceShapes.includes(selectedFaceShape)) return false;
    if (selectedHairType && !style.hairTypes.includes(selectedHairType)) return false;
    if (selectedMaintenance && style.maintenanceLevel !== selectedMaintenance) return false;
    return true;
  });

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
            <span className="text-gradient-gold">Hairstyle</span> Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore 12 signature styles with 360° views. Find your perfect look.
          </p>
        </motion.div>

        {/* Filter Button (Mobile) */}
        <div className="md:hidden mb-6">
          <Button
            onClick={() => setShowFilters(!showFilters)}
            variant="outline"
            className="w-full"
          >
            <FiFilter className="mr-2" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </div>

        {/* Filters */}
        <AnimatePresence>
          {(showFilters || window.innerWidth >= 768) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8 space-y-6"
            >
              {/* Categories */}
              <div>
                <h3 className="text-sm font-semibold mb-3 text-foreground">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <Button
                      key={cat.id}
                      variant={selectedCategory === cat.id ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedCategory(cat.id)}
                      className={selectedCategory === cat.id ? 'bg-primary text-primary-foreground' : ''}
                    >
                      {cat.name} ({cat.count})
                    </Button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Face Shapes */}
                <div>
                  <h3 className="text-sm font-semibold mb-3 text-foreground">Face Shape</h3>
                  <div className="flex flex-wrap gap-2">
                    {faceShapes.map((shape) => (
                      <Button
                        key={shape.id}
                        variant={selectedFaceShape === shape.id ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedFaceShape(selectedFaceShape === shape.id ? null : shape.id)}
                        className={selectedFaceShape === shape.id ? 'bg-primary text-primary-foreground' : ''}
                      >
                        {shape.icon} {shape.name}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Hair Types */}
                <div>
                  <h3 className="text-sm font-semibold mb-3 text-foreground">Hair Type</h3>
                  <div className="flex flex-wrap gap-2">
                    {hairTypes.map((type) => (
                      <Button
                        key={type.id}
                        variant={selectedHairType === type.id ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedHairType(selectedHairType === type.id ? null : type.id)}
                        className={selectedHairType === type.id ? 'bg-primary text-primary-foreground' : ''}
                      >
                        {type.icon} {type.name}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Maintenance */}
                <div>
                  <h3 className="text-sm font-semibold mb-3 text-foreground">Maintenance</h3>
                  <div className="flex flex-wrap gap-2">
                    {maintenanceLevels.map((level) => (
                      <Button
                        key={level.id}
                        variant={selectedMaintenance === level.id ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedMaintenance(selectedMaintenance === level.id ? null : level.id)}
                        className={selectedMaintenance === level.id ? 'bg-primary text-primary-foreground' : ''}
                      >
                        {level.name}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Count */}
        <div className="mb-6 text-center md:text-left">
          <p className="text-muted-foreground">
            Showing {filteredStyles.length} of {hairstyles.length} styles
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStyles.map((style, index) => (
            <motion.div
              key={style.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="hover-lift cursor-pointer overflow-hidden group" onClick={() => setSelectedStyle(style)}>
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={style.images.front}
                    alt={style.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">{style.category}</Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                    <h3 className="text-xl font-display font-bold text-foreground mb-2">{style.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{style.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-semibold">{style.price}</span>
                      <span className="text-sm text-muted-foreground">{style.duration}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-display font-semibold text-lg mb-1">{style.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{style.category}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary font-semibold">{style.price}</span>
                    <span className="text-muted-foreground">{style.duration}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Style Detail Modal */}
      <AnimatePresence>
        {selectedStyle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-lg z-50 overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-8">
              <div className="max-w-6xl mx-auto">
                {/* Close Button */}
                <div className="flex justify-end mb-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedStyle(null)}
                    className="rounded-full"
                  >
                    <FiX className="w-6 h-6" />
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Image Viewer */}
                  <div className="space-y-4">
                    <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-elegant">
                      <img
                        src={selectedStyle.images[currentAngle]}
                        alt={`${selectedStyle.name} - ${currentAngle}`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Angle Selector */}
                    <div className="grid grid-cols-6 gap-2">
                      {angles.map((angle) => (
                        <button
                          key={angle.id}
                          onClick={() => setCurrentAngle(angle.id)}
                          className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                            currentAngle === angle.id
                              ? 'border-primary shadow-glow'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <img
                            src={selectedStyle.images[angle.id]}
                            alt={angle.name}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Style Info */}
                  <div className="space-y-6">
                    <div>
                      <Badge className="bg-primary text-primary-foreground mb-3">
                        {selectedStyle.category}
                      </Badge>
                      <h2 className="text-4xl font-display font-bold mb-2">{selectedStyle.name}</h2>
                      <p className="text-muted-foreground">{selectedStyle.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-card/50 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground mb-1">Duration</p>
                        <p className="text-lg font-semibold">{selectedStyle.duration}</p>
                      </div>
                      <div className="bg-card/50 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground mb-1">Price</p>
                        <p className="text-lg font-semibold text-primary">{selectedStyle.price}</p>
                      </div>
                      <div className="bg-card/50 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground mb-1">Difficulty</p>
                        <p className="text-lg font-semibold">{'⭐'.repeat(selectedStyle.difficulty)}</p>
                      </div>
                      <div className="bg-card/50 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground mb-1">Maintenance</p>
                        <p className="text-lg font-semibold capitalize">{selectedStyle.maintenanceLevel}</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Best for Face Shapes:</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedStyle.faceShapes.map((shape) => (
                          <Badge key={shape} variant="outline">
                            {faceShapes.find(s => s.id === shape)?.name}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Hair Types:</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedStyle.hairTypes.map((type) => (
                          <Badge key={type} variant="outline">
                            {hairTypes.find(t => t.id === type)?.name}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Link to="/booking" state={{ selectedStyle: selectedStyle.name }}>
                      <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        Book This Style
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
