//https://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym

/* === Global Variables === */
const $SEARCHFORM = $('#search-form');
const $REMOVEALL = $('#remove-all')
const $RESULTS = $('#results');

// -------------------

const renderGif = (gif) => {
  const { images: { original: { url } }, title } = gif;
  const $img = $('<img>')
    .attr({ 'src': url, 'alt': title, 'class': 'image' })

  $RESULTS.prepend($img);
}

/* === Event Listeners === */
$SEARCHFORM.submit(async (e) => {
  e.preventDefault();

  const searchTerm = $('#search-term').val();
  const resp = await axios.get('https://api.giphy.com/v1/gifs/search', {
    params: {
      q: searchTerm,
      api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
    }
  });

  if(!resp.data.data.length) return;

  const gifsArray = resp.data.data;
    
  const randomIndex = Math.floor(Math.random() * gifsArray.length);

  renderGif(gifsArray[randomIndex]);
});

$REMOVEALL.click(() => {
  $RESULTS.empty();
})

