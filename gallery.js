// Gallery functionality - Fixed version with fullscreen functionality
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

// Fullscreen elements
let fullscreenOverlay = null;
let fullscreenImage = null;
let fullscreenText = null;

// Project data
const projectData = {
  'traverseCity': {
    title: 'Traverse City',
    description: 'Traverse City, MI',
    images: [
      'pictures/Commercial/traverseCity/tc1.jpg', 
      'pictures/Commercial/traverseCity/tc2.jpg', 
      'pictures/Commercial/traverseCity/tc3.jpg', 
      'pictures/Commercial/traverseCity/tc4.jpg', 
      'pictures/Commercial/traverseCity/tc5.jpg',
      'pictures/Commercial/traverseCity/tc6.jpg',
    ],
    specs: {}
  },
  

  //Commercial Gallery

  'postDr': {
    title: 'Post Dr',
    description: '1309 Post Dr NE, Belmont, MI',
    images: [ 
      'pictures/Commercial/postDr/pd1.jpg'],
    specs: {}
  },
  'manisteeHotel': {
    title: 'Manistee Hotel',
    description: '1070 Nursery Rd, Wellston, MI',
    images: [
      'pictures/Commercial/manisteeHotel/mh1.jpg'],
    specs: {}
  },
  'hollandFirehouse': {
    title: 'Holland Firehouse',
    description: '106 E 8th St, Holland, MI',
    images: [
      'pictures/Commercial/hollandFirehouse/hf1.jpg'],
    specs: {}
  },
  'hastingsFOC': {
    title: 'Hastings FOC',
    description: '102 S Broadway St, Hastings, MI',
    images: [
      'pictures/Commercial/hastingsFoc/hfoc1.jpg'],
    specs: {}
  },
  'adelaidePointe': {
    title: 'Adelaide Pointe Marina',
    description: '1000 Adelaide Circle, Muskegon, MI',
    images: [ 
      'pictures/Commercial/adelaidePointe/ap1.jpg'],
    specs: {}
  },
  'floridaHome': {
    title: 'Florida Home',
    description: 'Naples, FL',
    images: [
      'pictures/Commercial/florida/fl1.jpg',
      'pictures/Commercial/florida/fl2.jpg', 
      'pictures/Commercial/florida/fl3.jpg',
      'pictures/Commercial/florida/fl4.jpg',
      'pictures/Commercial/florida/fl5.jpg',
      'pictures/Commercial/florida/fl6.jpg',
      'pictures/Commercial/florida/fl7.jpg',
      'pictures/Commercial/florida/fl8.jpg',
      'pictures/Commercial/florida/fl9.jpg',
      'pictures/Commercial/florida/fl10.jpg',
      'pictures/Commercial/florida/fl11.jpg',
      'pictures/Commercial/florida/fl12.jpg'],

    specs: {}
   },
   '530rose': {
    title: '530 Rose',
    description: '530 Rose St, Kalamazoo, MI',
    images: [
      'pictures/Commercial/530Rose/530R1.jpg',
      'pictures/Commercial/530Rose/530R2.jpg',
      'pictures/Commercial/530Rose/530R3.jpg',
      'pictures/Commercial/530Rose/530R4.jpg',
      'pictures/Commercial/530Rose/530R5.jpg',
      'pictures/Commercial/530Rose/530R6.jpg'],

    specs: {}
   },
  'tallTimbers': {
    title: 'Tall Timbers',
    description: '4200 West Centre, Portage, MI',
    images: [
      'pictures/Commercial/tallTimbers/tt1.jpg'],
    specs: {}
  },
  '400Rose': {
    title: '400 Rose',
    description: '400 Rose St, Kalamazoo, MI',
    images: [
      'pictures/Commercial/400Rose/400R1.jpg',
      'pictures/Commercial/400Rose/400R2.jpg',
      'pictures/Commercial/400Rose/400R3.jpg',
      'pictures/Commercial/400Rose/400R4.jpg',
      'pictures/Commercial/400Rose/400R5.jpg',
      'pictures/Commercial/400Rose/400R6.jpg',
      'pictures/Commercial/400Rose/400R7.jpg',
      'pictures/Commercial/400Rose/400R8.jpg',
      'pictures/Commercial/400Rose/400R9.jpg',
      'pictures/Commercial/400Rose/400R10.jpg',
      'pictures/Commercial/400Rose/400R11.jpg',
      'pictures/Commercial/400Rose/400R2.jpg',
      'pictures/Commercial/400Rose/400R13.jpg',
      'pictures/Commercial/400Rose/400R14.jpg'],
    specs: {}
  },
  'ironWorks': {
    title: 'Iron Works',
    description: '225 N Rose St, Kalamazoo, MI',
    images: [
      'pictures/Commercial/ironWorks/iw1.jpg',
      'pictures/Commercial/ironWorks/iw2.jpg',
      'pictures/Commercial/ironWorks/iw3.jpg',
      'pictures/Commercial/ironWorks/iw4.jpg',
      'pictures/Commercial/ironWorks/iw5.jpg',
      'pictures/Commercial/ironWorks/iw6.jpg',
      'pictures/Commercial/ironWorks/iw7.jpg',
      'pictures/Commercial/ironWorks/iw8.jpg'],
    specs: {}
  },
  'riversEdge': {
    title: 'Rivers Edge',
    description: '508 Harrison St, Kalamazoo, MI',
    images: [
      'pictures/Commercial/riversEdge/re1.jpg',
      'pictures/Commercial/riversEdge/re2.jpg', 
      'pictures/Commercial/riversEdge/re3.jpg',
      'pictures/Commercial/riversEdge/re4.jpg',
      'pictures/Commercial/riversEdge/re5.jpg',
      'pictures/Commercial/riversEdge/re6.jpg'],
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

// Function to create fullscreen overlay
function createFullscreenOverlay() {
  if (!fullscreenOverlay) {
    fullscreenOverlay = document.createElement('div');
    fullscreenOverlay.className = 'fullscreen-overlay';
    
    fullscreenImage = document.createElement('img');
    fullscreenImage.className = 'fullscreen-image';
    
    fullscreenText = document.createElement('div');
    fullscreenText.className = 'fullscreen-text';
    fullscreenText.textContent = 'Click anywhere to close';
    
    fullscreenOverlay.appendChild(fullscreenImage);
    fullscreenOverlay.appendChild(fullscreenText);
    document.body.appendChild(fullscreenOverlay);
    
    // Add click event to close fullscreen
    fullscreenOverlay.addEventListener('click', closeFullscreen);
  }
}

// Function to open image in fullscreen
function openFullscreen(imageSrc, imageAlt = '') {
  createFullscreenOverlay();
  
  fullscreenImage.src = imageSrc;
  fullscreenImage.alt = imageAlt;
  
  // Prevent page scrolling when fullscreen is open
  document.body.style.overflow = 'hidden';
  
  // Show fullscreen overlay
  fullscreenOverlay.classList.add('active');
  
  console.log('Opened fullscreen for:', imageSrc);
}

// Function to close fullscreen
function closeFullscreen() {
  if (fullscreenOverlay) {
    fullscreenOverlay.classList.remove('active');
    document.body.style.overflow = '';
    console.log('Closed fullscreen');
  }
}

// Function to switch gallery tabs
function switchGalleryTab(targetCategory) {
  console.log('Switching to tab:', targetCategory);
  
  galleryTabs.forEach(tab => {
    tab.classList.remove('active');
  });

  gallerySections.forEach(section => {
    section.classList.remove('active');
  });

  const activeTab = document.querySelector(`[data-category="${targetCategory}"]`);
  if (activeTab) {
    activeTab.classList.add('active');
    console.log('Activated tab:', activeTab);
  } else {
    console.log('Tab not found for category:', targetCategory);
  }

  const activeSection = document.getElementById(targetCategory + '-section');
  if (activeSection) {
    activeSection.classList.add('active');
    console.log('Activated section:', activeSection);
  } else {
    console.log('Section not found for category:', targetCategory + '-section');
  }
}

// Handle hash navigation from external links
function handleHashNavigation() {
  const hash = window.location.hash.replace('#', '');
  console.log('Handling hash navigation:', hash);
  
  if (hash === 'commercial') {
    console.log('Switching to commercial tab');
    switchGalleryTab('commercial');
  } else if (hash === 'residential') {
    console.log('Switching to residential tab');
    switchGalleryTab('residential');
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
      
      // Add fullscreen click event to carousel images
      img.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent modal navigation
        openFullscreen(img.src, img.alt);
      });
      
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
  const numImages = currentProject ? currentProject.images.length : 5;
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
  
  // Handle hash navigation FIRST, before setting up other events
  handleHashNavigation();
  
  // Gallery tabs
  galleryTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      const category = tab.getAttribute('data-category');
      switchGalleryTab(category);
      // Update URL hash when tab is clicked
      window.location.hash = category;
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
    // Handle fullscreen keyboard events
    if (fullscreenOverlay && fullscreenOverlay.classList.contains('active')) {
      if (e.key === 'Escape') {
        closeFullscreen();
      }
      return;
    }
    
    // Handle modal keyboard events
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

// Handle hash changes while on the page
window.addEventListener('hashchange', function() {
  console.log('Hash changed, handling navigation');
  handleHashNavigation();
});