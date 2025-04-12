document.addEventListener("DOMContentLoaded", () => {
  // HAMBURGER AND CLOSE MENU SECTION
  const hamburgerIcon = document.querySelector("#hamburger-icon");
  const desktopLogo = document.querySelector("#desktop-logo");
  const mobileMenu = document.querySelector("#mobile-menu");
  const closeIcon = document.querySelector("#close-icon");

  hamburgerIcon.addEventListener("click", () => {
    hamburgerIcon.classList.add("hidden");
    desktopLogo.classList.add("hidden");
    mobileMenu.classList.remove("hide");
  });

  closeIcon.addEventListener("click", () => {
    hamburgerIcon.classList.remove("hidden");
    desktopLogo.classList.remove("hidden");
    mobileMenu.classList.add("hide");
  });

  // TABS AND ACTIVE INDICATOR MANIPULATION SECTION
  const tabs = document.querySelectorAll(".feature-tab");
  const sections = document.querySelectorAll(".feature-section");

  const simpleIndicator = document.querySelector("#simple-indicator");
  const speedyIndicator = document.querySelector("#speedy-indicator");
  const easyIndicator = document.querySelector("#easy-indicator");

  const indicators = {
    "simple-bookmark-section": simpleIndicator,
    "intelligent-search-section": speedyIndicator,
    "share-bookmark-section": easyIndicator,
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", function () {
      sections.forEach((section) => section.classList.add("hide"));
      sections[index].classList.remove("hide");

      Object.values(indicators).forEach((indicator) =>
        indicator.classList.add("hide")
      );

      const target = tab.getAttribute("data-target");
      indicators[target].classList.remove("hide");
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
