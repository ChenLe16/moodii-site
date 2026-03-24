document.addEventListener("DOMContentLoaded", () => {
  const navMenus = document.querySelectorAll(".nav-menu");

  navMenus.forEach((navMenu) => {
    const button = navMenu.querySelector(".menu-button");
    const menu = navMenu.querySelector(".menu-dropdown");

    if (!(button instanceof HTMLButtonElement) || !(menu instanceof HTMLElement)) {
      return;
    }

    const closeMenu = () => {
      button.setAttribute("aria-expanded", "false");
      menu.hidden = true;
    };

    const openMenu = () => {
      button.setAttribute("aria-expanded", "true");
      menu.hidden = false;
    };

    button.addEventListener("click", () => {
      const isOpen = button.getAttribute("aria-expanded") === "true";
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    document.addEventListener("click", (event) => {
      if (!navMenu.contains(event.target)) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });
  });
});
