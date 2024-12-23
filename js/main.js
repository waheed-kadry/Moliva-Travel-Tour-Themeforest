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
} else {
    selectLanguage.cssText = `background:red`
    selectLanguage.style.animation = ani_select_up;
}
if (e.target.classList.contains("check-usd")) {
    selectCurrency.style.animation = ani_select_down;
} else {
    selectCurrency.style.animation = ani_select_up;
  }
});

// ============= End Top Bar =============

/* 
================
== End Header ==
================
 */
