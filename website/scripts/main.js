// Main JavaScript for Mickey & Shivani's Wedding Website

document.addEventListener('DOMContentLoaded', function() {
  // Form submission handling
  const rsvpForm = document.querySelector('.rsvp-form');
  
  if (rsvpForm) {
    rsvpForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const isAttending = document.querySelector('input[name="attending"]:checked')?.value;
      
      // Get selected events
      const selectedEvents = [];
      document.querySelectorAll('input[name="events"]:checked').forEach(checkbox => {
        selectedEvents.push(checkbox.value);
      });
      
      const dietaryRestrictions = document.getElementById('dietary').value;
      
      // In a real implementation, this would send data to a server
      // For now, just show a confirmation message
      alert(`Thank you, ${name}! Your RSVP has been submitted.\nWe've sent a confirmation email to ${email}.`);
      
      // Reset the form
      rsvpForm.reset();
    });
  }
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Parallax effect for hero section
  const hero = document.querySelector('.hero');
  
  if (hero) {
    window.addEventListener('scroll', function() {
      const scrollPosition = window.pageYOffset;
      hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });
  }
  
  // Add countdown timer
  const weddingDate = new Date('May 22, 2026 15:00:00').getTime();
  
  // Only run if we're on the homepage with the hero section
  if (document.querySelector('.hero-content')) {
    // Create countdown element
    const countdownElement = document.createElement('div');
    countdownElement.className = 'countdown';
    document.querySelector('.hero-content').appendChild(countdownElement);
    
    // Update countdown every second
    const countdownTimer = setInterval(function() {
      const now = new Date().getTime();
      const distance = weddingDate - now;
      
      // Time calculations
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      // Display countdown
      countdownElement.innerHTML = `
        <div class="countdown-item">
          <span class="countdown-number">${days}</span>
          <span class="countdown-label">Days</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-number">${hours}</span>
          <span class="countdown-label">Hours</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-number">${minutes}</span>
          <span class="countdown-label">Minutes</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-number">${seconds}</span>
          <span class="countdown-label">Seconds</span>
        </div>
      `;
      
      // If the countdown is over
      if (distance < 0) {
        clearInterval(countdownTimer);
        countdownElement.innerHTML = "Today is the big day!";
      }
    }, 1000);
  }
  
  // Add CSS for countdown that was created via JavaScript
  const countdownStyles = document.createElement('style');
  countdownStyles.textContent = `
    .countdown {
      display: flex;
      justify-content: center;
      margin-top: 2rem;
      gap: 1rem;
      color: white;
    }
    
    .countdown-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 0.5rem 1rem;
      border-radius: 5px;
      min-width: 70px;
    }
    
    .countdown-number {
      font-size: 1.8rem;
      font-weight: 500;
    }
    
    .countdown-label {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    @media (max-width: 480px) {
      .countdown {
        flex-wrap: wrap;
      }
      
      .countdown-item {
        min-width: 60px;
        margin-bottom: 0.5rem;
      }
      
      .countdown-number {
        font-size: 1.5rem;
      }
    }
  `;
  document.head.appendChild(countdownStyles);
  
  // Add event listener for when "Attending" radio button changes
  const attendingYes = document.getElementById('attending-yes');
  const attendingNo = document.getElementById('attending-no');
  const eventsSection = document.querySelector('.form-group:nth-of-type(4)');
  
  if (attendingYes && attendingNo && eventsSection) {
    const toggleEventsVisibility = function() {
      if (attendingYes.checked) {
        eventsSection.style.display = 'block';
      } else {
        eventsSection.style.display = 'none';
      }
    };
    
    // Set initial state
    toggleEventsVisibility();
    
    // Add event listeners
    attendingYes.addEventListener('change', toggleEventsVisibility);
    attendingNo.addEventListener('change', toggleEventsVisibility);
  }
});