// Utility functions to populate content from config
document.addEventListener('DOMContentLoaded', function() {
  const config = window.siteConfig;
  
  // Update navigation
  function updateNavigation(activePage) {
    const navbarNav = document.getElementById('navbarNav');
    if (navbarNav) {
      const navList = navbarNav.querySelector('.navbar-nav');
      if (navList) {
        navList.innerHTML = '';
        config.navigation.forEach(item => {
          const isActive = item.url === activePage;
          const navItem = document.createElement('li');
          navItem.className = 'nav-item';
          navItem.innerHTML = `
            <a class="nav-link ${isActive ? 'active' : ''}" href="${item.url}">${item.name}</a>
          `;
          navList.appendChild(navItem);
        });
      }
    }
    
    // Update navbar brand
    const navbarBrand = document.querySelector('.navbar-brand');
    if (navbarBrand) {
      navbarBrand.textContent = config.businessName;
    }
  }
  
  // Update footer
  function updateFooter() {
    const footer = document.querySelector('footer .container .row .col-12 p');
    if (footer) {
      footer.textContent = config.footer.copyright;
    }
  }
  
  // Update contact links
  function updateContactLinks() {
    // Phone links
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
      link.href = `tel:${config.contact.phone}`;
      if (link.textContent.includes('9842741789') || link.textContent.includes('Call') || link.textContent.includes('Phone')) {
        link.innerHTML = link.innerHTML.replace(/9842741789/g, config.contact.phone);
      }
    });
    
    // WhatsApp links
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
      link.href = `https://wa.me/${config.contact.whatsapp}`;
    });
    
    // Email links
    document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
      link.href = `mailto:${config.contact.email}`;
      if (link.textContent.includes('@')) {
        link.innerHTML = link.innerHTML.replace(/a1adorners786@gmail\.com/g, config.contact.email);
      }
    });
    
    // Google Maps links
    document.querySelectorAll('a[href*="google"]').forEach(link => {
      if (link.href.includes('share.google')) {
        link.href = config.contact.googleMapsLink;
      }
    });
    
    // Address text
    document.querySelectorAll('p').forEach(p => {
      if (p.textContent.includes('Yearcaud main road')) {
        p.innerHTML = p.innerHTML.replace(/Yearcaud main road, Gorimedu, Salem 636008/g, config.contact.address);
      }
    });
  }
  
  // Initialize common elements
  function initializeCommonElements() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    updateNavigation(currentPage);
    updateFooter();
    updateContactLinks();
  }
  
  // Call initialization
  initializeCommonElements();
});

// Utility function to create service cards
function createServiceCard(service) {
  return `
    <div class="col-lg-4 col-md-6">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <i class="${service.icon} display-4 text-primary mb-3"></i>
          <h5 class="card-title">${service.title}</h5>
          <p class="card-text">${service.description}</p>
        </div>
      </div>
    </div>
  `;
}

// Utility function to create gallery cards
function createGalleryCard(item) {
  return `
    <div class="col-lg-4 col-md-6">
      <div class="card h-100 shadow-sm">
        <img src="${item.image}" alt="${item.title}" class="card-img-top" style="height: 250px; object-fit: cover;">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.description}</p>
        </div>
      </div>
    </div>
  `;
}
