const text = "Hello Evano 👋🏼,";
    const speed = 30; 
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            document.getElementById("text").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();


    document.addEventListener('DOMContentLoaded', () => {
      const buttons = document.querySelectorAll('.main__footer-button:not(.prev):not(.next)');
      const prevButton = document.querySelector('.main__footer-button.prev');
      const nextButton = document.querySelector('.main__footer-button.next');
  
      prevButton.addEventListener('click', () => {
          moveActiveButton(-1);
      });
  
      nextButton.addEventListener('click', () => {
          moveActiveButton(1);
      });
  
      buttons.forEach(button => {
          button.addEventListener('click', () => {
              
              buttons.forEach(btn => btn.classList.remove('active'));
           
              button.classList.add('active');
          });
      });
  
      function moveActiveButton(direction) {
          const activeButton = document.querySelector('.main__footer-button.active');
          const activeIndex = Array.from(buttons).indexOf(activeButton);
          let newIndex = activeIndex + direction;
  
          if (newIndex >= 0 && newIndex < buttons.length) {
              buttons.forEach(btn => btn.classList.remove('active'));
              buttons[newIndex].classList.add('active');
          }
      }
  });
  
  