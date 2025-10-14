// Simple toggle for FAQ expand & collapse
document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("open");
    const answer = item.querySelector(".faq-answer");
    if (item.classList.contains("open")) {
      answer.style.display = "block";
    } else {
      answer.style.display = "none";
    }
  });
});
