function sendWhatsApp(){

    const name = document.getElementById('nameInput').value
    const phone = document.getElementById('phoneInput').value
    const service = document.getElementById('serviceInput').value
    const message = document.getElementById('messageInput').value

    if(!name || !phone){
        alert('please fill your name and phone number')
        return
    }

    const text = 
    `Hello Sofa Samrat ! 

        Name: ${name} 
        Phone: ${phone} 
        Service Needed: ${service} 
        Message: ${message}
    
     Please get back to me soon !`

    window.open('https://wa.me/919876543210?text=' + encodeURIComponent(text), '_blank')

}

  // Scroll-triggered fade-up animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));


  const sections = ['sofas','couches','beds','repair'];
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 160) current = id;
    });
    document.querySelectorAll('.cat-link').forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === '#' + current);
    });
  });