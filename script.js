// IRON FIT — navigation, membership selection and contact form
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  // Automatically display the current year in the footer.
  document.getElementById("year").textContent = new Date().getFullYear();

  // Mobile navigation menu.
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  // Close the mobile menu after a navigation link is selected.
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  // When a membership button is clicked, preselect it in the enquiry form.
  document.querySelectorAll("[data-plan]").forEach((button) => {
    button.addEventListener("click", () => {
      const interest = document.getElementById("interest");
      const plan = button.dataset.plan;
      interest.value = `${plan} Membership`;
    });
  });

  // Front-end form validation and demo success message.
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    formMessage.textContent = "";
    formMessage.className = "form-message";

    if (!form.checkValidity()) {
      form.reportValidity();
      formMessage.textContent = "Please check the required fields and enter valid details.";
      formMessage.classList.add("error");
      return;
    }

    const formData = new FormData(form);
    const firstName = String(formData.get("name")).trim().split(/\s+/)[0];

    formMessage.textContent = `Thank you, ${firstName}! Your demo enquiry has been recorded on this page. Connect a backend or email service to receive real submissions.`;
    formMessage.classList.add("success");
    form.reset();
  });
});
