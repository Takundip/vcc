// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});

// Membership tier selection
document.addEventListener('DOMContentLoaded', function() {
    const tierButtons = document.querySelectorAll('.tier-btn');
    
    tierButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedTier = this.getAttribute('data-tier');
            const tierInput = document.getElementById('tier');
            
            if (tierInput) {
                tierInput.value = selectedTier;
                // Scroll to form
                document.getElementById('apply').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                // Highlight the tier select
                tierInput.focus();
            } else {
                // If on membership page, scroll to form
                const formSection = document.getElementById('apply');
                if (formSection) {
                    formSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// Form submission
document.addEventListener('DOMContentLoaded', function() {
    const membershipForm = document.getElementById('membershipForm');
    
    if (membershipForm) {
        membershipForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Simulate form submission
            showSubmissionMessage();
        });
    }
});

// Show submission message
function showSubmissionMessage() {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;
    
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: linear-gradient(135deg, #1a1a2e, #0f0f0f);
        padding: 50px;
        border-radius: 20px;
        max-width: 500px;
        text-align: center;
        border: 2px solid #ffd700;
    `;
    
    modalContent.innerHTML = `
        <div style="font-size: 4rem; margin-bottom: 20px;">👁️</div>
        <h2 style="color: #ffd700; margin-bottom: 20px; font-size: 2rem;">Application Submitted</h2>
        <p style="color: #d0d0d0; margin-bottom: 30px; line-height: 1.8;">
            Thank you for your application to join The Illuminati. 
            Our council will review your submission and contact you within 2-4 weeks.
        </p>
        <button id="closeModal" style="
            background: linear-gradient(135deg, #ffd700, #ffed4e);
            color: #0a0a0a;
            padding: 15px 40px;
            border: none;
            border-radius: 50px;
            font-weight: bold;
            font-size: 1.1rem;
            cursor: pointer;
            transition: transform 0.3s ease;
        ">Understood</button>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Close modal functionality
    const closeBtn = document.getElementById('closeModal');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    // Add hover effect to button
    closeBtn.addEventListener('mouseenter', () => {
        closeBtn.style.transform = 'translateY(-2px)';
    });
    
    closeBtn.addEventListener('mouseleave', () => {
        closeBtn.style.transform = 'translateY(0)';
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.principle-card, .testimonial-card, .tier-card, .process-step');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.principle-card, .testimonial-card, .tier-card, .process-step');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.8)';
    } else {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
    }
});





