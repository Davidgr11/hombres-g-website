document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
  
    const quote = document.querySelector('.article__quote');
  
    if (quote) {
      const originalText = quote.textContent;
      quote.textContent = ""; // Borra el texto original
  
      let index = 0;
  
      ScrollTrigger.create({
        trigger: quote,
        start: "top 80%",
        once: true,
        onEnter: () => {
          const type = () => {
            if (index < originalText.length) {
              quote.textContent += originalText.charAt(index);
              index++;
              setTimeout(type, 50); // velocidad de escritura
            }
          };
          type();
        }
      });
    }
  });
  