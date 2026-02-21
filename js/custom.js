document.addEventListener("DOMContentLoaded", function () {
  // Highlight active menu
  const links = document.querySelectorAll(".main-menu__list a");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});
// Enquiry Popup
document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("openEnquiry");
  const closeBtn = document.getElementById("closeEnquiry");
  const modal = document.getElementById("enquiryModal");

  if (openBtn && closeBtn && modal) {
    openBtn.addEventListener("click", () => {
      modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }
});
