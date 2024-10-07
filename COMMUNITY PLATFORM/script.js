
/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button'),
      searchClose  = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content')

    //   .........    menu show
    // validate if contant exists 
    if(searchButton){
        searchButton.addEventListener('click', () =>{
            searchContent.classList.add('show-search')
        })
    }

    // -----------menu hidden 
    // validate if contant close
    if(searchClose){
        searchClose.addEventListener('click', () =>{
            searchContent.classList.remove('show-search')
        })
    }

/*=============== LOGIN ===============*/
const loginButton = document.getElementById('login-button'),
loginClose  = document.getElementById('login-close'),
loginContent = document.getElementById('login-content')

//   .........    menu show
// validate if contant exists 
if(loginButton){
  loginButton.addEventListener('click', () =>{
      loginContent.classList.add('show-login')
  })
}

// -----------menu hidden 
// validate if contant close
if(loginButton){
  loginClose.addEventListener('click', () =>{
      loginContent.classList.remove('show-login')
  })
}

// =========================================================================>
    //=========================================================================>
        // <!-- JavaScript for toggling forms -->
// function login() {
//     document.getElementById('login-form').style.display = 'grid';
//     document.getElementById('register-form').style.display = 'none';
//     document.querySelector('.toggle-btn.active-btn').classList.remove('active-btn');
//     document.querySelector('.toggle-btn').classList.add('active-btn');
// }

// function register() {
//     document.getElementById('login-form').style.display = 'none';
//     document.getElementById('register-form').style.display = 'grid';
//     document.querySelector('.toggle-btn.active-btn').classList.remove('active-btn');
//     document.querySelectorAll('.toggle-btn')[1].classList.add('active-btn');
// }

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader =() =>{
    const header = document.getElementById('header') 
    //when the scroll is greater than 50 viewport height, add the 
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowHeader)


/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is higher than 350 viewport height, add the
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
             : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections = document.querySelectorAll('section[id]');

// const scrollActive = () => {
//   const scrollDown = window.scrollY;

//   sections.forEach(current => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 58; 
//     const sectionId = current.getAttribute('id');
//     const sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

//     if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
//       sectionsClass.classList.add('active-link');
//     } else {
//       sectionsClass.classList.remove('active-link');
//     }
//   });
// };

// window.addEventListener('scroll', scrollActive);

// Declare sections before it's used in scrollActive
const sections = document.querySelectorAll('section[id]'); 

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

    if (sectionsClass) {  // Ensure sectionsClass is defined before using classList
      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        sectionsClass.classList.add('active-link');
      } else {
        sectionsClass.classList.remove('active-link');
      }
    }
  });
};

window.addEventListener('scroll', scrollActive);



/*=============== FEEDBACK  SWIPER ===============*/

let swiperFeedback = new Swiper('.feedback-swiper', {
    
    loop: true,
    spacebetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

      
     breakpoints: {
        1150:{
            slidesPerView: 3,
            centeredSlides: false,
            

        }
     }
  
  });
/*========================== DARK LIGHT THEME =================================*/ 


document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('theme-button')
    const darkTheme = 'dark-theme'
    const iconTheme = 'ri-sun-line'

    // Previously selected theme (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

    // Function to get the current theme and icon
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

    // Validate if the user previously chose a theme
    if (selectedTheme) {
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
        themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
    }

    // Toggle between light and dark themes
    themeButton.addEventListener('click', () => {
        console.log('Button clicked')
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)

        // Save the theme and current icon that the user chooses
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    })
})



/*=============== SCROLL REVEAL ANIMATION ===============*/


const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true;  animations
})


sr.reveal('.home-data', '.favorite-container', '.feedback-container', '.footer')
sr.reveal('.home-images', {delay: 600})
sr.reveal('.publish-data', {origin: 'left'})
sr.reveal('.publish-images', {origin: 'right'})


// ============ home animaation =================
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,

};

ScrollReveal().reveal(".header-image img",{
    ...scrollRevealOption,
    origin:"right",

});

ScrollReveal().reveal(".header-content h1",{
    ...scrollRevealOption,
    delay:500,

});

ScrollReveal().reveal(".header-content p",{
    ...scrollRevealOption,
    delay:1000,

});

ScrollReveal().reveal(".header-content form",{
    ...scrollRevealOption,
    delay:1500,

});
// =============================== PROJECTS ==================
const sortBtns = document.querySelectorAll(".project-id > *")
const sortItems = document.querySelectorAll(".project-container > *")
    sortBtns.forEach((btn) =>{
        btn.addEventListener('click',() =>{
            sortBtns.forEach((btn) => btn.classList.remove
            ("active")) ;
            btn.classList.add("active");

            const targetData = btn.getAttribute("data-target");
            sortItems.forEach((item) =>{
                item.classList.add("delete");
                if(item.getAttribute("data-item")  === targetData  || targetData === "all"
                            ){
                                item.classList.remove("delete");
                            }

            });
        });
    });
// -======================================


// ================ COMMENT =========

// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('review-form').addEventListener('submit', function(e) {
//         e.preventDefault(); 
//         Prevent the form from refreshing the page

//         Get user input
//         const userName = document.getElementById('name').value;
//         const userReview = document.getElementById('review').value;

//         Check if both inputs are filled
//         if (userName && userReview) {
//             Create a new comment card dynamically
//             const newComment = document.createElement('div');
//             newComment.classList.add('card-review'); 
//             Add card-review class for styling

//             newComment.innerHTML = `
//                 <div class="card__content">
//                     <span><i class="ri-double-quotes-l"></i></span>
//                     <div class="card__details">
//                         <p>${userReview}</p>
//                         <h4>- ${userName}</h4>
//                     </div>
//                 </div>
//             `;

//             Append the new comment to the comment section
//             document.getElementById('new-comments').appendChild(newComment);

//             Clear the form fields after submission
//             document.getElementById('review-form').reset();
//         } else {
//             alert('Please fill in both fields!');
//         }
//     });
// });






