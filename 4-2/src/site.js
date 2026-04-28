document.addEventListener('DOMContentLoaded', () => {

  
    const mainMenu = document.querySelector('.main-menu');
    const allSubMenus = document.querySelectorAll('.sub-menu');
    
    if (mainMenu) {
        mainMenu.addEventListener('click', (e) => {
           
            e.stopPropagation(); 
            
            allSubMenus.forEach(sub => sub.classList.toggle('active'));
        });
    }

    document.addEventListener('click', () => {
        allSubMenus.forEach(sub => sub.classList.remove('active'));
    });



    const slideContainer = document.querySelector('.slide-container');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    if (slideContainer && slides.length > 0) {
        setInterval(() => {
            currentIndex++;
            if (currentIndex >= slides.length) {
                currentIndex = 0; 
            }

            slideContainer.style.top = -(currentIndex * 400) + 'px';
        }, 3000);
    }



    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
       
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

           
            btn.classList.add('active');
            if(tabContents[index]) {
                tabContents[index].classList.add('active');
            }
        });
    });


   
    const popupTrigger = document.querySelector('.popup-trigger');
    const modalOverlay = document.getElementById('modalContainer');
    const closeBtn = document.getElementById('closeBtn');

    if (popupTrigger && modalOverlay) {
       
        popupTrigger.addEventListener('click', () => {
            modalOverlay.style.display = 'flex';
        });

        
        closeBtn.addEventListener('click', () => {
            modalOverlay.style.display = 'none';
        });

        
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.style.display = 'none';
            }
        });
    }
});
