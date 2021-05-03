/** Given a query string, return array of matching shows:
 *     { id, name, summary, episodesUrl }
 */


/** Search Shows
 *    - given a search term, search for tv shows that
 *      match that query.  The function is async show it
 *       will be returning a promise.
 *
 *   - Returns an array of objects. Each object should include
 *     following show information:
 *    {
        id: <show id>,
        name: <show name>,
        summary: <show summary>,
        image: <an image from the show data, or a default imege if no image exists, (image isn't needed until later)>
      }
 */
async function searchShows(query) {
  if (!query) return;

  const resp = await axios.get('http://api.tvmaze.com/search/shows?q=' + query);
  const shows = resp.data.map((showObj) => {
    const show = showObj.show;
    return {
      id: show.id,
      name: show.name,
      summary: show.summary,
      image: show.image ? show.image.medium : 'https://tinyurl.com/tv-missing',
    }
  })

  return shows;
}

/** Populate shows list:
 *     - given list of shows, add shows to DOM
 */
function populateShows(shows) {
  const $showsList = $("#shows-list");
  $showsList.empty();

  for (let show of shows) {
    let $item = $(
      `<div class="col-md-6 col-lg-3 Show" data-show-id="${show.id}">
        <div class="card" data-show-id="${show.id}">
          <img class="card-img-top" src="${show.image}">
          <div class="card-body">
            <h5 class="card-title">${show.name}</h5>
            <p class="card-text">${show.summary}</p>
            <a href="#episodes-area" class="btn btn-primary episode-button">Episode List</a>
          </div>
        </div>
      </div>
      `);
      
    $showsList.append($item);
  }
}

/** 
 * Given a show ID, return list of episodes:
 *      { id, name, season, number }
 */
 async function getEpisodes(id) {
  const resp = await axios.get(`http://api.tvmaze.com/shows/${id}/episodes`)
  const episodes = resp.data.map((episode) => {
    const { id, name, season, number } = episode
    return { id, name, season, number };
  })

  return episodes;
}

/**
 * Populate episode data into the DOM within #episodes-area
 * 
 */
function populateEpisodes(episodes) {
  const $episodeList = $('#episodes-list');
  $episodeList.empty();

  for (episode of episodes) {
    $episodeList.append($(`
      <li data-episode-id="${episode.id}">${episode.name} (season ${episode.season}, number ${episode.number})</li>
    `))
  }

  $('#episodes-area').show();
  $('#episodes-area')[0].scrollIntoView();
}

/** Handle search form submission:
 *    - hide episodes area
 *    - get list of matching shows and show in shows list
 */
$("#search-form").on("submit", async function handleSearch(evt) {
  evt.preventDefault();

  let query = $("#search-query").val();
  if (!query) return;

  $("#episodes-area").hide();

  let shows = await searchShows(query);

  populateShows(shows);
});

/**
 * Handle clicks on .episode-button(s) within .Show cards.  
 */
 $('#shows-list').on('click', '.episode-button', async (event) => {
  const showId = $(event.target).parent().parent().data('show-id');
  const episodes = await getEpisodes(showId);
  populateEpisodes(episodes);
})