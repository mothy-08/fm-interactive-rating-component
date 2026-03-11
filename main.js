const ratingFormElement = document.getElementById("rating-form");
const thankYouCard = document.getElementById("thank-you-card");
const ratingBadgeElement = document.getElementById("rating-badge");

ratingFormElement.addEventListener("submit", (event) => {
  event.preventDefault();

  ratingFormElement.hidden = true;

  const formData = new FormData(event.target);
  const formEntries = Object.fromEntries(formData);
  const selectedRating = formEntries.rating;

  ratingBadgeElement.textContent = `You selected ${selectedRating} out of 5`;

  thankYouCard.hidden = false;
  history.pushState({ step: "thank-you" }, "");
});

window.addEventListener("popstate", () => {
  ratingFormElement.reset();
  ratingFormElement.hidden = false;
  thankYouCard.hidden = true;
});
