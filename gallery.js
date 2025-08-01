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
const carouselPrev = document.getElementById('carousel-prev-mobile');
const carouselNext = document.getElementById('carousel-next-mobile');

let currentSlide = 0;
let currentProject = null;

// Project data
const projectData = {
  'traverseCity': {
    title: 'Traverse City',
    description: 'Large-scale commercial installation featuring floor-to-ceiling windows and modern curtain wall systems.',
    images: [
      'pictures/Commercial/traverseCity/HouseExterior.jpg',
      'pictures/Commercial/traverseCity/IMG_8163.jpg', 
      'pictures/Commercial/traverseCity/IMG_8164.jpg', 
      'pictures/Commercial/traverseCity/IMG_8160.jpg', 
      'pictures/Commercial/traverseCity/IMG_8165.jpg', 
      'pictures/Commercial/traverseCity/IMG_8159.jpg'
    ],
    specs: {}
  },
  'retail-storefront': {
    title: 'Post Dr',
    description: 'Newly constructed building',
    images: [
      'pictures/Commercial/postDr/IMG_1667.jpg',
      'pictures/Commercial/postDr/IMG_1658.jpg', 
      'pictures/Commercial/postDr/IMG_1660.jpg', 
      'pictures/Commercial/postDr/IMG_1661.jpg', 
      'pictures/Commercial/postDr/IMG_1663.jpg', 
      'pictures/Commercial/postDr/IMG_1669.jpg'],
    specs: {}
  },
  'manufacturing-facility': {
    title: 'Manistee Hotel',
    description: 'Newly built hotel building.',
    images: [
      'pictures/Commercial/manisteeHotel/IMG_7615.jpg',
      'pictures/Commercial/manisteeHotel/IMG_7616.jpg', 
      'pictures/Commercial/manisteeHotel/IMG_7617.jpg', 
      'pictures/Commercial/manisteeHotel/IMG_7618.jpg'],
    specs: {}
  },
  'house-worship': {
    title: 'Holland Firehouse',
    description: 'Historical building downtown Holland MI.',
    images: [
      'pictures/Commercial/hollandFirehouse/IMG_9607.jpg',
      'pictures/Commercial/hollandFirehouse/IMG_9605.jpg', 
      'pictures/Commercial/hollandFirehouse/IMG_9609.jpg', 
      'pictures/Commercial/hollandFirehouse/IMG_9610.jpg',
      'pictures/Commercial/hollandFirehouse/IMG_9603.jpg'],
    specs: {}
  },
  'educational-campus': {
    title: 'Hastings FOC',
    description: 'County government office in Hastings, Michigan.',
    images: [
      'pictures/Commercial/hastingsFoc/IMG_9692.jpg',
      'pictures/Commercial/hastingsFoc/IMG_9691.jpg', 
      'pictures/Commercial/hastingsFoc/IMG_9688.jpg',
      'pictures/Commercial/hastingsFoc/IMG_9702.jpg'],
    specs: {}
  },
  'Adelaide': {
    title: 'Adelaide Pointe Marina',
    description: 'Newly constructed marina in Muskegon, MI.',
    images: [
      'pictures/Commercial/adelaidePointe/IMG_9645.jpg',
      'pictures/Commercial/adelaidePointe/IMG_9653.jpg', 
      'pictures/Commercial/adelaidePointe/IMG_9648.jpg'],
    specs: {}
  },
  'medical-center': {
    title: 'Florida Home',
    description: '$1.2 Million window job in Naples, FL.',
    images: [
      'pictures/Commercial/florida/IMG_0485.jpg',
      'pictures/Commercial/florida/IMG_0482.jpg', 
      'pictures/Commercial/florida/IMG_0480.jpg',
      'pictures/Commercial/florida/IMG_0474.jpg',
      'pictures/Commercial/florida/IMG_0471.jpg',
      'pictures/Commercial/florida/IMG_0467.jpg',
      'pictures/Commercial/florida/IMG_0469.jpg',
      'pictures/Commercial/florida/IMG_0466.jpg',
      'pictures/Commercial/florida/IMG_0465.jpg',
      'pictures/Commercial/florida/IMG_0463.jpg',
      'pictures/Commercial/florida/IMG_0461.jpg',
      'pictures/Commercial/florida/IMG_0380.jpg',
      'pictures/Commercial/florida/IMG_0120.jpg'],
    specs: {}
   },
  'tallTimbers': {
    title: 'Tall Timbers',
    description: 'Newly constructed apartment building in Portage, MI.',
    images: [
      'pictures/Commercial/tallTimbers/IMG_8592.jpg',
      'pictures/Commercial/tallTimbers/IMG_8591.jpg', 
      'pictures/Commercial/tallTimbers/IMG_8587.jpg'],
    specs: {}
  },
  '400Rose': {
    title: '400 Rose',
    description: 'Newly constructed apartment building in Portage, MI.',
    images: [
      'pictures/Commercial/400Rose/IMG_1176.jpg',
      'pictures/Commercial/400Rose/IMG_1657.jpg', 
      'pictures/Commercial/400Rose/IMG_1658.jpg',
      'pictures/Commercial/400Rose/IMG_7042.jpg'],
    specs: {}
  },
  'project1': {
    title: 'American Foursquare Home',
    description: 'American Foursquare with Colonial Revival influences.',
    images: [
      'pictures/Residential/project1/IMG_4510.jpeg',
      'pictures/Residential/project1/IMG_2809.jpeg', 
      'pictures/Residential/project1/IMG_1453.jpeg',
      'pictures/Residential/project1/IMG_4511.jpeg',
      'pictures/Residential/project1/IMG_2807.jpeg'],
    specs: {}
  },
  'project2': {
    title: 'Contemporary Lakeside Home',
    description: 'Arched picture, Decorative entry sidelight, Casement, and Bay windows.',
    images: [
      'pictures/Residential/project1/project2/IMG_6809.jpeg',
      'pictures/Residential/project1/project2/IMG_1614.jpeg', 
      'pictures/Residential/project1/project2/IMG_6808.jpeg',
      'pictures/Residential/project1/project2/IMG_6811.jpeg',
      'pictures/Residential/project1/project2/IMG_6813.jpeg'],
    specs: {}
  }
};

// Helper function to check if string is image path
function isImagePath(str) {
  return typeof str === 'string' && (str.includes('.jpg') || str.includes('.jpeg') || str.includes('.png') || str.includes('.gif') || str.includes('.webp'));
}

// Function to switch gallery tabs
function switchGalleryTab(targetCategory) {
  galleryTabs.forEach(tab => {
    tab.classList.remove('active');
  });

  gallerySections.forEach(section => {
    section.classList.remove('active');
  });

  const activeTab = document.querySelector(`[data-category="${targetCategory}"]`);
  if (activeTab) {
    activeTab.classList.add('active');
  }

  const activeSection = document.getElementById(targetCategory + '-section');
  if (activeSection) {
    activeSection.classList.add('active');
  }
}

// Function to open project modal
function openProjectModal(projectId) {
  console.log('Opening modal for project:', projectId);
  
  const project = projectData[projectId];
  if (!project) {
    console.log('Project not found:', projectId);
    return;
  }

  currentProject = project;
  currentSlide = 0;

  console.log('Project images:', project.images);

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
  
  project.images.forEach((item, index) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
    
    if (isImagePath(item)) {
      // It's an image
      const img = document.createElement('img');
      img.src = item;
      img.alt = `${project.title} - Image ${index + 1}`;
      slide.appendChild(img);
    } else {
      // It's an emoji
      slide.innerHTML = item;
      slide.style.background = 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)';
      slide.style.display = 'flex';
      slide.style.alignItems = 'center';
      slide.style.justifyContent = 'center';
      slide.style.fontSize = '6rem';
      slide.style.color = 'white';
    }
    
    carouselTrack.appendChild(slide);
  });

  // Set the carousel track width to hold all slides side by side
  const numImages = project.images.length;
  carouselTrack.style.width = `${numImages * 100}%`;
  
  // Ensure each slide is exactly the right width
  const slides = carouselTrack.querySelectorAll('.carousel-slide');
  slides.forEach(slide => {
    slide.style.width = `${100 / numImages}%`;
  });
  
  console.log('Number of images:', numImages);
  console.log('Set carousel track width to:', carouselTrack.style.width);

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
  document.body.style.overflow = 'hidden';
  
  // Update carousel to show first slide
  updateCarousel();
}

// Function to update carousel position
function updateCarousel() {
  console.log('Updating carousel to slide:', currentSlide);
  console.log('Total slides:', currentProject ? currentProject.images.length : 0);
  
  // Calculate slide width based on actual number of images
  const numImages = currentProject ? currentProject.images.length : 1;
  const slideWidth = 100 / numImages;
  const translateValue = -currentSlide * slideWidth;
  
  carouselTrack.style.transform = `translateX(${translateValue}%)`;
  
  console.log('Applied transform:', carouselTrack.style.transform);

  // Update indicators
  document.querySelectorAll('.carousel-indicator').forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentSlide);
  });
}

// Function to go to specific slide
function goToSlide(slideIndex) {
  console.log('Going to slide:', slideIndex);
  currentSlide = slideIndex;
  updateCarousel();
}

// Function to go to next slide (with looping)
function nextSlide() {
  console.log('Next slide clicked. Current slide:', currentSlide);
  
  if (currentProject) {
    // If at last slide, loop back to first slide
    if (currentSlide >= currentProject.images.length - 1) {
      currentSlide = 0;
      console.log('Looping back to first slide');
    } else {
      currentSlide++;
      console.log('Moving to slide:', currentSlide);
    }
    updateCarousel();
  } else {
    console.log('No project loaded');
  }
}

// Function to go to previous slide (with looping)
function prevSlide() {
  console.log('Previous slide clicked. Current slide:', currentSlide);
  
  if (currentProject) {
    // If at first slide, loop to last slide
    if (currentSlide <= 0) {
      currentSlide = currentProject.images.length - 1;
      console.log('Looping to last slide:', currentSlide);
    } else {
      currentSlide--;
      console.log('Moving to slide:', currentSlide);
    }
    updateCarousel();
  } else {
    console.log('No project loaded');
  }
}

// Function to close modal
function closeProjectModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
  currentProject = null;
  currentSlide = 0;
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, adding event listeners');
  
  // Gallery tabs
  galleryTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      const category = tab.getAttribute('data-category');
      switchGalleryTab(category);
    });
  });

  // Project cards
  document.querySelectorAll('.image-card').forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project');
      console.log('Image card clicked:', projectId);
      openProjectModal(projectId);
    });
  });

  // Modal controls
  if (closeModal) {
    closeModal.addEventListener('click', closeProjectModal);
  }
  
  if (carouselNext) {
    carouselNext.addEventListener('click', function(e) {
      console.log('Next button clicked!');
      e.preventDefault();
      nextSlide();
    });
  }
  
  if (carouselPrev) {
    carouselPrev.addEventListener('click', function(e) {
      console.log('Previous button clicked!');
      e.preventDefault();
      prevSlide();
    });
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
  
  console.log('All event listeners added');
});