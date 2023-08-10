
  const tabItem = document.querySelectorAll('.tabs__btn-item');   
  const tabContent = document.querySelectorAll('.tabs__content-item');   


  tabItem.forEach(function (element) {
    element.addEventListener('click', open);
  })


function open (evt) {
    const tabTarget = evt.currentTarget;  
    const button = tabTarget.dataset.button;
    
      tabItem.forEach(function(item) {
        item.classList.remove('tabs__btn-item--active');
      })

      tabTarget.classList.add('tabs__btn-item--active');
      tabContent.forEach(function(item) {
        item.classList.remove('tabs__content-item--active');  
      }); 

      document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}
 
    const menuBtn = document.querySelector('.menu__btn');
    const menuList = document.querySelector('.menu__list');
       menuBtn.addEventListener('click', () => {
       menuBtn.classList.toggle('menu__btn--active'); 
});



  const swiper = new Swiper(".swiper", { 
        // effect: "fade",  
        pagination: {
        el: ".swiper-pagination",
      }, 
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },  
    });



const themeSwitchers = document.querySelectorAll('.changetheme');

themeSwitchers.forEach(switcher => {
  switcher.addEventListener('click', function() {
    applyTheme(this.dataset.theme);
  });
});

function applyTheme(themeName) {
  let themeUrl = `style/thema-${themeName}.css`;

  const themeLinks = document.querySelectorAll('[rel="stylesheet"][title="thema"]');
  
  themeLinks.forEach(link => {
    link.removeAttribute('disabled');
    link.removeAttribute('title'); 
  });

  const selectedThemeLink = document.querySelector(`[href="${themeUrl}"]`);

  if (selectedThemeLink) {
    selectedThemeLink.setAttribute('disabled', 'true');
    selectedThemeLink.setAttribute('title', 'thema');  
  }

  localStorage.setItem('theme', themeName); // Збереження теми в localStorage
}

// Отримання активної теми з localStorage та застосування її
let activeTheme = localStorage.getItem('theme'); 

if(activeTheme === null) {
    applyTheme('light');
} else {
  applyTheme(activeTheme);
}
