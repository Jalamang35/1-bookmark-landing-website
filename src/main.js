import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const hamburgarIcon = document.querySelector("#hamburgar-icon");
  const desktopLogo = document.querySelector("#desktop-logo");
  const mobileMenu = document.querySelector("#mobile-menu");
  const closeIcon = document.querySelector("#close-icon");

  hamburgarIcon.addEventListener("click", () => {
    hamburgarIcon.classList.add("hidden");
    desktopLogo.classList.add("hidden");
    mobileMenu.classList.remove("hide");
  });

  closeIcon.addEventListener("click", () => {
    hamburgarIcon.classList.remove("hidden");
    desktopLogo.classList.remove("hidden");
    mobileMenu.classList.add("hide");
  });

  // TABS AND ACTIVE INDICATOR MANIPULATION SECTION
  const tabs = document.querySelectorAll(".feature-tab");
  const sections = document.querySelectorAll(".feature-section");
  const activeIndicator = document.getElementById("active-indicator");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", function () {
      sections.forEach((section) => section.classList.add("hide"));
      sections[index].classList.remove("hide");

      if (window.innerWidth >= 768) {
        // Large screen (horizontal tabs)
        activeIndicator.style.cssText = `
          left: ${this.offsetLeft}px;
          top: auto;
          width: ${this.offsetWidth}px;
          height: 2px;
          transform: translateY(0);
        `;
      } else {
        // Small screen (vertical tabs)
        const offsetTop =
          this.parentElement.offsetTop + this.offsetTop + this.offsetHeight;
        activeIndicator.style.cssText = `
          left: 30%;
          top: ${this.offsetTop + this.offsetHeight}px;
          width: 40%;
          height: 4px;
          transform: translateY(-4px);
        `;
      }
    });
  });

  // FAQS SECTIONS
  const faqs = document.querySelectorAll(".faqs-container");

  faqs.forEach((faq) => {
    const arrowDown = faq.querySelector(".arrow-down");
    const answer = faq.querySelector(".answer");

    faq.addEventListener("click", function () {
      if (answer.classList.contains("hidden")) {
        answer.classList.remove("hidden"); // Show the answer
        arrowDown.style.cssText = `transform: rotate(180deg); filter: brightness(0) saturate(100%) invert(14%) sepia(100%) saturate(5000%) hue-rotate(0deg);`;
      } else {
        answer.classList.add("hidden"); // Hide the answer
        arrowDown.style.cssText = `transform: rotate(0deg);`;
      }
    });
  });

  // FORM VALIDIATION
  const form = document.querySelector("form");
  const emailInput = document.querySelector("#email");
  const submitButton = document.querySelector("#submit");
  const emailError = document.querySelector(".email-error");
  const emailInputGroup = document.querySelector(".input-group");
  const placeholder = document.querySelector("placeholder");
  const iconError = document.querySelector("#icon-error");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailValue = emailInput.value.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

    if (!emailValue || !isValidEmail) {
      emailInput.value = "";
      emailInput.placeholder = "example@email/com";
      // placeholder.style.cssText = `font-weight: bolder; color: black;`
      submitButton.classList.add("submit-button-error");
      emailError.classList.remove("hide");
      emailInputGroup.classList.add("input-group-error");
      iconError.classList.remove("hide");
    } else {
      // console.log("Valid Email");
    }
  });

  emailInput.addEventListener("input", () => {
    emailInput.iconError.classList.add("hide");
    iconError.classList.add("hide");
    emailInput.placeholder = "Enter your email address";
    submitButton.classList.remove("submit-button-error");
    emailError.classList.add("hide");
    emailInputGroup.classList.remove("input-group-error");
  });
});
// HAMBURGER AND CLOSE MENU SECTION

// export default app;

// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
