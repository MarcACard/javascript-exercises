/* === Global Variables === */
const $FORM = $('#review-form');
const $TITLE = $('#title');
const $RATING = $('#rating');
const $REVIEWS = $('#movie-reviews');
// --------------------------
const createReview = (title, rating) => {
  const $movieCard = $(`
    <div class="movie-review">
      <span class="title">${title}</span> <br />
      <span class="rating">${rating}/5</span> <br />
    </div>
  `)
  const $removeButton = $('<button>Remove</button>')
    .addClass('remove-button')
    .click(function () {
      this.parentElement.remove();
    });

  $removeButton.appendTo($movieCard);

  return $movieCard;
}

const resetForm = () => {
  $TITLE.val('')
  $RATING.val('')
}

$FORM.submit((e) => {
  e.preventDefault();

  const $review = createReview($TITLE.val(), $RATING.val());
  $review.appendTo($REVIEWS);
  resetForm();
})
