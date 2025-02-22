/*
const detectDevice = () => {
    const userAgent = navigator.userAgent;

    if (/iPhone|iPad|iPod/i.test(userAgent)) {
        return 'iOS';
    } else if (/Android/i.test(userAgent)) {
        return 'Android';
    } else {
        return 'unknown';
    }
};

document.getElementById('yourButtonId').addEventListener('click', () => {
    const deviceType = detectDevice();
    
    if (deviceType === 'iOS') {
        window.location.href = 'https://apps.apple.com/your-ios-app-link';
    } else if (deviceType === 'Android') {
        window.location.href = 'https://play.google.com/store/apps/details?id=your.android.app';
    } else {
        alert('Unsupported device. Please visit our website for more information.');
    }
});
*/

document.addEventListener("DOMContentLoaded", () => {
  const headerMenuButton = document.querySelector(".header__button--menu");
  const headerMenu = document.querySelector(".header__menu");
  const hamburger = document.querySelector(".hamburger");
  const headerPricing = document.querySelector(".header__button--pricing-menu");
  const headerFeatures = document.querySelector(
    ".header__button--features-menu"
  );
  const visuallyHidden = document.querySelector(".visuallyHidden");
  const mediaQuery = window.matchMedia("(max-width: 650px)");

  function hideElementsOnMediaQuery() {
    if (!mediaQuery.matches) {
      headerMenuButton.style.display = "none";
      headerPricing.style.display = "none";
      headerFeatures.style.display = "none";
    } else {
      headerMenuButton.style.display = "block";
    }
  }

  hideElementsOnMediaQuery();
  window.addEventListener("resize", hideElementsOnMediaQuery);

  let isOpen = false;
  headerMenuButton.onclick = () => {
    if (!isOpen) {
      hamburger.click();
      headerMenu.style.display = "block";
      isOpen = true;
    } else {
      hamburger.click();
      headerMenu.style.display = "none";
      isOpen = false;
    }
  };

  hamburger.onclick = () => {
    if (!isOpen) {
      hamburger.click();
      headerMenu.style.display = "block";
      isOpen = true;
    } else {
      hamburger.click();
      headerMenu.style.display = "none";
      isOpen = false;
    }
  };

  headerPricing.onclick = () => {
    hamburger.click();
    headerMenu.style.display = "none";
    isOpen = false;
  };

  headerFeatures.onclick = () => {
    hamburger.click();
    headerMenu.style.display = "none";
    isOpen = false;
  };
});
