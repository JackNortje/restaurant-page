
import { contactPage } from './app/pages/contactPage';
import { homePage } from './app/pages/homePage'
import { menuPage } from './app/pages/menuPage';

function click() {
  document.querySelector('.home').addEventListener('click', function() {
    homePage()
  });
  document.querySelector('.menu').addEventListener('click', function() {
    menuPage()
  });
  document.querySelector('.contact').addEventListener('click', function() {
    contactPage()
  })
};

click();


























// // let homeSection = document.querySelector('.homeView');


// // // let menuBtn = document.querySelector('.home');

// // // menuBtn.addEventListener('click', function() {
// // //   menuPage()
// // // })

// // function buttonsClicked() {

// //  if (document.querySelector('.menu').clicked == true) {
// //     menuPage()
// //   } else if (document.querySelector('.contact').clicked == true) {
// //     contactPage()
// //   } else ( homePage())
  
// // };

// // buttonsClicked();

// function allButtons() {
  
//   if (document.querySelector('.menu').addEventListener('click') == true) {
//     menuPage()
//   } else if (document.querySelector('.contact').addEventListener('click', contactPage())
//   } else( document.querySelector('.home').addEventListener('click', homePage())

// };

// allButtons();