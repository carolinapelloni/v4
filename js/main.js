
document.addEventListener("DOMContentLoaded", function () {
  // MENU MOBILE
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("open");

      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute(
        "aria-label",
        isOpen ? "Chiudi il menu" : "Apri il menu"
      );
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Apri il menu");
      });
    });
  }

  // ANNO AUTOMATICO NEL FOOTER
  document.querySelectorAll("[data-year]").forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });

  // MODULI DIMOSTRATIVI OFFLINE
  document.querySelectorAll("[data-demo-form]").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.reportValidity()) {
        return;
      }

      const notice = form.querySelector(".notice");

      if (notice) {
        notice.textContent =
          "Grazie! Il modulo funziona in modalità dimostrativa. " +
          "Nessun dato è stato inviato. Per ricevere richieste reali, " +
          "collega il modulo a un servizio email o a un backend.";

        notice.classList.add("show");
      }
    });
  });
});
