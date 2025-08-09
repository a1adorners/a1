// A1 Adorners Website Configuration
// Update this file to change content across all pages

const siteConfig = {
  // Business Information
  businessName: "A1 Adorners",
  tagline: "Tent House Supplier & Event Rentals in Salem",
  
  // Contact Information
  contact: {
    phone: "9842741786",
    whatsapp: "9842741786",
    email: "a1adorners786@gmail.com",
    address: "Yearcaud main road, Gorimedu, Salem 636008",
    googleMapsLink: "https://share.google/NGeAZl5IRdx1zFcGW"
  },
  
  // Navigation Items
  navigation: [
    { name: "Home", url: "index.html" },
    { name: "Services", url: "services.html" },
    { name: "Gallery", url: "gallery.html" },
    { name: "About", url: "about.html" },
    { name: "Contact", url: "contact.html" }
  ],
  
  // Home Page Content
  home: {
    heroTitle: "A1 Adorners",
    heroSubtitle: "Tent House Supplier & Event Rentals in Salem",
    bannerImage: "assets/images/Banner.png",
    welcomeTitle: "Welcome to A1 Adorners",
    welcomeText: "Your trusted partner for tents, stages, and event rentals in Salem. We provide complete solutions for weddings, meetings, school functions, hotel functions, housewarming, and more.",
    servicesPreview: [
      {
        icon: "bi-house",
        title: "Tent Rentals",
        description: "High-quality tents for all events"
      },
      {
        icon: "bi-music-note",
        title: "Stage Setup",
        description: "Professional stage setup & decoration"
      },
      {
        icon: "bi-calendar-event",
        title: "Event Planning",
        description: "Complete event planning assistance"
      }
    ]
  },
  
  // Services Content
  services: [
    {
      icon: "bi-house",
      title: "Tent Rentals",
      description: "High-quality tents for all events including weddings, corporate events, and private parties."
    },
    {
      icon: "bi-music-note",
      title: "Stage Setup & Decoration",
      description: "Professional stage setup with beautiful decorations to make your event memorable."
    },
    {
      icon: "bi-grid-3x3-gap",
      title: "Chair & Table Rentals",
      description: "Wide variety of chairs and tables to accommodate guests comfortably at your event."
    },
    {
      icon: "bi-star",
      title: "VIP Chairs & Covers",
      description: "Elegant VIP chairs with premium covers for special guests and important occasions."
    },
    {
      icon: "bi-circle",
      title: "Round Tables",
      description: "Perfect round tables for dining and social gatherings at your special events."
    },
    {
      icon: "bi-calendar-event",
      title: "Event Planning Assistance",
      description: "Complete event planning support to ensure your event runs smoothly from start to finish."
    }
  ],
  
  // Gallery Content
  gallery: [
    {
      image: "assets/images/placeholder1.jpg",
      title: "Wedding Event Setup",
      description: "Beautiful tent and decoration setup for a memorable wedding celebration."
    },
    {
      image: "assets/images/placeholder2.jpg",
      title: "Corporate Function",
      description: "Professional stage and seating arrangement for corporate events."
    },
    {
      image: "https://lh3.googleusercontent.com/p/AF1QipNMyS7iafaz5CN9UbBpxnYsyG5YulQFlyKN5dEs=s680-w680-h510-rw",
      title: "School Function",
      description: "Well-organized tent and seating for school events and functions."
    }
  ],
  
  // About Page Content
  about: {
    title: "About Us",
    subtitle: "Learn more about our story and commitment to excellence",
    storyTitle: "Our Story",
    storyText: "A1 Adorners is a family-run business based in Gorimedu, Salem. With years of experience, we provide high-quality tents, event setups, and decorations for all kinds of occasions. Our mission is to make your event memorable and stress-free.",
    features: [
      {
        icon: "bi-award",
        title: "Quality Service",
        description: "Years of experience in event management"
      },
      {
        icon: "bi-people",
        title: "Family Business",
        description: "Personal touch and dedicated service"
      },
      {
        icon: "bi-geo-alt",
        title: "Local Expertise",
        description: "Based in Salem, serving the community"
      }
    ],
    mission: {
      title: "Our Mission",
      text: "To provide exceptional event rental services that transform ordinary occasions into extraordinary memories. We strive to deliver quality equipment, professional setup, and outstanding customer service for every event."
    },
    vision: {
      title: "Our Vision",
      text: "To be the leading event rental company in Salem, known for our reliability, creativity, and commitment to making every celebration perfect. We aim to grow while maintaining our personal touch and family values."
    }
  },
  
  // Call to Action Messages
  cta: {
    services: {
      title: "Ready to Plan Your Event?",
      text: "Contact us today for a personalized quote and let us make your event unforgettable.",
      buttonText: "Get in Touch"
    },
    gallery: {
      title: "Like What You See?",
      text: "Let us create a beautiful setup for your next event. Contact us for a customized quote.",
      buttonText: "Contact Us Today"
    },
    about: {
      title: "Ready to Work with Us?",
      text: "Experience the A1 Adorners difference for your next event. We're here to make it special.",
      buttons: [
        { text: "Contact Us", class: "btn-primary" },
        { text: "View Services", class: "btn-outline-primary", url: "services.html" }
      ]
    },
    contact: {
      title: "Ready to Plan Your Event?",
      text: "Contact us today and let's discuss how we can make your event special and memorable."
    }
  },
  
  // Footer
  footer: {
    copyright: "© 2025 A1 Adorners | Tent House Supplier & Event Rentals in Salem"
  },
  
  // Page Titles and Meta
  pageTitles: {
    home: "A1 Adorners",
    services: "Services - A1 Adorners",
    gallery: "Gallery - A1 Adorners",
    about: "About Us - A1 Adorners",
    contact: "Contact - A1 Adorners"
  }
};

// Make config available globally
window.siteConfig = siteConfig;
