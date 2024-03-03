const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.querySelector('.portfolio-img').style.filter = 'brightness(70%)';
        });

        card.addEventListener('mouseout', () => {
            card.querySelector('.portfolio-img').style.filter = 'brightness(100%)';
        });
    });



    


    document.addEventListener("DOMContentLoaded", function() {
        // Создаем новый экземпляр Intersection Observer
        const observer = new IntersectionObserver(entries => {
            // Проходимся по каждой записи
            entries.forEach(entry => {
                // Если элемент в зоне видимости
                if (entry.isIntersecting) {
                    // Получаем элемент, который сейчас находится в зоне видимости
                    const target = entry.target;
                    
                    // Добавляем класс "show" к этому элементу
                    target.classList.add("show");
                    
                    // Отключаем дальнейшее наблюдение за этим элементом, чтобы анимация запустилась только один раз
                    observer.unobserve(target);
                }
            });
        });
      
        // Получаем все элементы, которые должны запускать анимацию при прокрутке
        const animatedElements = document.querySelectorAll(".animated");
      
        // Проходимся по каждому элементу и добавляем его в наблюдатель интерсекций
        animatedElements.forEach(animatedElement => {
            observer.observe(animatedElement);
        });
      });
    


      document.addEventListener('DOMContentLoaded', function() {
        const animatedElements2 = document.querySelectorAll(".animated2");
        const animatedElements3 = document.querySelectorAll(".animated3");
    
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // Этот порог определяет, когда элемент считается видимым
        };
    
        const intersectionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
    
        animatedElements2.forEach(animatedElement => {
            intersectionObserver.observe(animatedElement);
        });
    
        animatedElements3.forEach(animatedElement => {
            intersectionObserver.observe(animatedElement);
        });
    });
    



      

      document.addEventListener('DOMContentLoaded', function() {
        var navbar = document.querySelector('.navber');
        var burgerMenu = document.querySelector('.burger-menu');
    
        burgerMenu.addEventListener('click', function() {
            navbar.classList.toggle('active');
        });
    });
    



