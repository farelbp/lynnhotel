window.addEventListener('scroll', () => {
    const aboutUs = document.querySelector('.about-us');
    const aboutUsPosition = aboutUs.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
  
    console.log(aboutUsPosition, screenPosition);  // Cek posisi elemen dan layar
  
    if (aboutUsPosition < screenPosition) {
      aboutUs.classList.add('show');
    }
  });

  