// Smooth scroll to Features section on CTA button click
const ctaBtn = document.querySelector('.cta-btn');

ctaBtn.addEventListener('click', () => {
  const featuresSection = document.querySelector('.features');
  featuresSection.scrollIntoView({ behavior: 'smooth' });
});

