// Gallery functionality
const galleryTabs = document.querySelectorAll('.gallery-tab');
const gallerySections = document.querySelectorAll('.gallery-section');

// Modal elements
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalSpecs = document.getElementById('modal-specs');
const carouselTrack = document.getElementById('carousel-track');
const carouselIndicators = document.getElementById('carousel-indicators');
const closeModal = document.getElementById('close-modal');
const carouselPrev = document.getElementById('carousel-prev');
const carouselNext = document.getElementById('carousel-next');

let currentSlide = 0;
let currentProject = null;

// Project data with multiple images for each project
const projectData = {
  'modern-family': {
    title: 'Modern Family Home',
    description: 'Complete window replacement featuring energy-efficient double-pane windows with custom trim work. This project transformed the home\'s energy efficiency while maintaining its contemporary aesthetic.',
    images: ['pictures', '🪟', '🔧', '✨', '🏡'],
    specs: {
      'Windows': '24 Units',
      'Type': 'Double-Hung',
      'Material': 'Vinyl with Wood Interior',
      'Energy Rating': 'Energy Star Certified',
      'Completed': '2024'
    }
  },
  'traditional-colonial': {
    title: 'Traditional Colonial',
    description: 'Historic home restoration with period-appropriate window designs while maintaining modern efficiency. We carefully preserved the architectural integrity while upgrading performance.',
    images: ['🏡', '🏛️', '🔨', '📏', '🎨'],
    specs: {
      'Windows': '18 Units',
      'Type': 'Casement',
      'Material': 'Wood with Historic Profile',
      'Features': 'Custom Mullions',
      'Completed': '2024'
    }
  },
  'contemporary-ranch': {
    title: 'Contemporary Ranch',
    description: 'New construction windows with sleek frames and maximum natural light optimization. The design focused on creating seamless indoor-outdoor living.',
    images: ['🏘️', '🌅', '🪟', '🏗️', '💡'],
    specs: {
      'Windows': '32 Units',
      'Type': 'Picture & Slider',
      'Material': 'Aluminum Clad',
      'Features': 'Floor-to-Ceiling',
      'Completed': '2023'
    }
  },
  'craftsman-bungalow': {
    title: 'Craftsman Bungalow',
    description: 'Authentic craftsman-style windows with detailed mullions and energy-efficient glazing. We honored the craftsman tradition while incorporating modern technology.',
    images: ['🏠', '🔨', '🎨', '🪟', '🏛️'],
    specs: {
      'Windows': '16 Units',
      'Type': 'Multi-Pane',
      'Material': 'Wood with Lead Glass',
      'Features': 'Handcrafted Mullions',
      'Completed': '2023'
    }
  },
  'luxury-estate': {
    title: 'Luxury Estate',
    description: 'High-end residential project featuring custom bay windows and premium materials throughout. Every detail was crafted to meet the highest standards of luxury and performance.',
    images: ['🏡', '💎', '🏰', '🪟', '✨'],
    specs: {
      'Windows': '48 Units',
      'Type': 'Bay & Custom',
      'Material': 'Mahogany with Bronze Hardware',
      'Features': 'Custom Shapes',
      'Completed': '2024'
    }
  },
  'suburban-remodel': {
    title: 'Suburban Remodel',
    description: 'Complete home renovation with energy-efficient windows and updated architectural styling. This transformation brought new life to a classic suburban home.',
    images: ['🏘️', '🔄', '🏠', '⚡', '🌟'],
    specs: {
      'Windows': '28 Units',
      'Type': 'Mixed Styles',
      'Material': 'Fiberglass Composite',
      'Features': 'Smart Glass Technology',
      'Completed': '2024'
    }
  },
  'office-complex': {
    title: 'Office Complex',
    description: 'Large-scale commercial installation featuring floor-to-ceiling windows and modern curtain wall systems. This project redefined the workplace environment with natural light.',
    images: ['🏢', '🌆', '🏗️', '💼', '🌟'],
    specs: {
      'Windows': '200+ Units',
      'Type': 'Curtain Wall',
      'Material': 'Structural Glazing',
      'Features': 'Energy Management System',
      'Completed': '2024'
    }
  },
  'retail-storefront': {
    title: 'Retail Storefront',
    description: 'Downtown retail space with expansive display windows designed for maximum product visibility. The design creates an inviting shopping experience.',
    images: ['🏪', '🛍️', '💡', '🪟', '🎯'],
    specs: {
      'Windows': '12 Units',
      'Type': 'Storefront',
      'Material': 'Tempered Glass',
      'Features': 'Anti-Reflective Coating',
      'Completed': '2023'
    }
  },
  'manufacturing-facility': {
    title: 'Manufacturing Facility',
    description: 'Industrial windows with enhanced durability and safety features for harsh manufacturing environments. Built to withstand extreme conditions.',
    images: ['🏭', '⚙️', '🔧', '🛡️', '🏗️'],
    specs: {
      'Windows': '85 Units',
      'Type': 'Industrial',
      'Material': 'Reinforced Steel Frame',
      'Features': 'Impact Resistant',
      'Completed': '2023'
    }
  },
  'house-worship': {
    title: 'House of Worship',
    description: 'Sacred space windows designed to enhance natural light while maintaining the spiritual atmosphere. These windows create a sense of divine connection.',
    images: ['⛪', '🌅', '🎨', '✝️', '🕊️'],
    specs: {
      'Windows': '36 Units',
      'Type': 'Stained Glass',
      'Material': 'Art Glass with Lead Came',
      'Features': 'Custom Religious Motifs',
      'Completed': '2024'
    }
  },
  'educational-campus': {
    title: 'Educational Campus',
    description: 'School building renovation with energy-efficient windows designed for optimal learning environments. Creating bright, inspiring spaces for education.',
    images: ['🏫', '📚', '🌅', '👥', '🎓'],
    specs: {
      'Windows': '150 Units',
      'Type': 'Classroom',
      'Material': 'Low-E Insulated Glass',
      'Features': 'Sound Dampening',
      'Completed': '2023'
    }
  },
  'medical-center': {
    title: 'Medical Center',
    description: 'Healthcare facility windows meeting strict medical standards for cleanliness and patient comfort. Designed for healing and wellness.',
    images: ['🏥', '⚕️', '💡', '🧼', '🌿'],
    specs: {
      'Windows': '120 Units',
      'Type': 'Medical Grade',
      'Material': 'Antimicrobial Coating',
      'Features': 'Easy Clean Surface',
      'Completed': '2024'
    }
  }
};

// Function to switch gallery tabs
function switchGalleryTab(targetCategory) {
  // Remove active class from all tabs
  galleryTabs.forEach(tab => {
    tab.classList.remove('active');
  });

  // Hide all gallery sections
  gallerySections.forEach(section => {
    section.classList.remove('active');
  });

  // Activate the clicked tab
  const activeTab = document.querySelector(`[data-category="${targetCategory}"]`);
  if (activeTab) {
    activeTab.classList.add('active');
  }

  // Show the corresponding section
  const activeSection = document.getElementById(targetCategory + '-section');
  if (activeSection) {
    activeSection.classList.add('active');
  }
}

// Function to open project modal
function openProjectModal(projectId) {
  const project = projectData[projectId];
  if (!project) return;

  currentProject = project;
  currentSlide = 0;

  // Set modal content
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;

  // Create specs
  modalSpecs.innerHTML = '';
  Object.entries(project.specs).forEach(([key, value]) => {
    const specItem = document.createElement('div');
    specItem.className = 'modal-spec-item';
    specItem.innerHTML = `
      <span class="spec-label">${key}:</span>
      <span class="spec-value">${value}</span>
    `;
    modalSpecs.appendChild(specItem);
  });

  // Create carousel slides
  carouselTrack.innerHTML = '';
  project.images.forEach((image, index) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
    slide.innerHTML = image;
    carouselTrack.appendChild(slide);
  });

  // Create indicators
  carouselIndicators.innerHTML = '';
  project.images.forEach((_, index) => {
    const indicator = document.createElement('div');
    indicator.className = `carousel-indicator ${index === 0 ? 'active' : ''}`;
    indicator.addEventListener('click', () => goToSlide(index));
    carouselIndicators.appendChild(indicator);
  });

  // Show modal
  modal.classList.add('active');
  updateCarousel();
}

// Function to update carousel position
function updateCarousel() {
  const slideWidth = 100;
  carouselTrack.style.transform = `translateX(-${currentSlide * slideWidth}%)`;

  // Update indicators
  document.querySelectorAll('.carousel-indicator').forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentSlide);
  });
}

// Function to go to specific slide
function goToSlide(slideIndex) {
  currentSlide = slideIndex;
  updateCarousel();
}

// Function to go to next slide
function nextSlide() {
  if (currentProject && currentSlide < currentProject.images.length - 1) {
    currentSlide++;
    updateCarousel();
  }
}

// Function to go to previous slide
function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateCarousel();
  }
}

// Function to close modal
function closeProjectModal() {
  modal.classList.remove('active');
  currentProject = null;
  currentSlide = 0;
}

// Add click handlers to gallery tabs
galleryTabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
    const category = tab.getAttribute('data-category');
    switchGalleryTab(category);
  });
});

// Add click handlers to project cards
document.querySelectorAll('.image-card').forEach(card => {
  card.addEventListener('click', () => {
    const projectId = card.getAttribute('data-project');
    openProjectModal(projectId);
  });
});

// Modal event listeners
if (closeModal) {
  closeModal.addEventListener('click', closeProjectModal);
}
if (carouselNext) {
  carouselNext.addEventListener('click', nextSlide);
}
if (carouselPrev) {
  carouselPrev.addEventListener('click', prevSlide);
}

// Close modal when clicking outside
if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeProjectModal();
    }
  });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (modal && modal.classList.contains('active')) {
    if (e.key === 'Escape') {
      closeProjectModal();
    } else if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  }
});
