/* 
==================
== Start Header ==
==================
 */
// ============= Start Top Bar =============

// => Constants
const ani_select_down = "select-down forwards 1s linear";
const ani_select_up = "select-up forwards 1s linear";
const selectLanguage = document.querySelector(
  "header .top-bar .container .select-language"
);
const selectCurrency = document.querySelector(
  "header .top-bar .container .select-currency"
);
const english = document.querySelector(
  ".top-bar .container .currency .language-currency .language-dropdown a"
);
const usd = document.querySelector(
  ".top-bar .container .currency .currency-dropdown a"
);

// =========  =========  =========  =========

english.addEventListener("click", (e) => {
  e.preventDefault();
  selectLanguage.style.display = "block";
});
usd.addEventListener("click", (e) => {
  e.preventDefault();
  selectCurrency.style.display = "block";
});
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("check-lang")) {
    selectLanguage.style.animation = ani_select_down;
    selectLanguage.style.display = "block";
  } else {
    selectLanguage.cssText = `background:red`;
    selectLanguage.style.display = "none";
  }
  if (e.target.classList.contains("check-usd")) {
    selectCurrency.style.animation = ani_select_down;
  } else {
    selectCurrency.style.display = "none";
  }
});

// ============= End Top Bar =============

// ============= Start Bottom Bar =============

let B_links_lis = document.querySelectorAll("header .bottom-bar ul.links li");
let B_links_uls_dropdown = document.querySelectorAll(
  "header .bottom-bar ul.links li ul"
);

B_links_lis.forEach((li) => {
  li.addEventListener("mouseenter", (e) => {
    // e.target.children[1].classList.contains("links-home")
  //   console.log(e.target.children[1])
  // li.children[1].style.background  = 'red'
   
  
//  if (
//       e.target.children[1].classList.contains("links-home") == true &&
//       e.target.children[1].tagName == "UL"
//     ) {
      
//       e.target.children[1].style.animation = "show 0.3s linear 1 forwards";
//       e.target.children[1].onmouseleave = (e) => {
//         e.target.children[1].style.animation = "0";
      
        
//       }
//     }
  });
});

// ============= End Bottom Bar =============

/* 
================
== End Header ==
================
 */
