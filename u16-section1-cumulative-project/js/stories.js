"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();

  putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story) {
  console.debug("generateStoryMarkup", story);

  const hostName = story.getHostName();
  
  return $(`
      <li id="${story.storyId}">
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${story.author}</small>
        <br />
        <small class="story-user">posted by ${story.username} </small>
        ${currentUser ? getFavHTML(story) : ""}
        ${currentUser.username === story.username ? getDeleteHTML() : ''}
      </li>
    `);
}

/** Return  favorite star markup & hovertext  */

function getFavHTML(story) {
  const isFav = currentUser.isFavorite(story);
  const starType = isFav ? "fas" : "far";
  const hoverText = isFav ? "remove from favorites" : "add to favorites";
  
  return `
    <small class="star" title="${hoverText}">
      <i class="fa-star ${starType}" aria-hidden="true"></i>
    </small>
  `
}

/** Return delete trashcan markup & hovertext */
function getDeleteHTML() {
  return `
  <small class="delete" title="delete your story">
    <i class="fa fa-trash" aria-hidden="true"></i>
  </small>
  `
}

/** Gets list of stories from server, generates their HTML, and puts on page. */

function putStoriesOnPage() {
  console.debug("putStoriesOnPage");

  $allStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();
}

/** Retrieves data from new story form submissiono to post to DB */

async function postNewStory(evt) {
  evt.preventDefault();

  const author = $('#create-author').val();
  const title = $('#create-title').val();
  const url = $('#create-url').val();

  const story = await storyList.addStory(currentUser, { author, title, url })
  const storyMarkup = generateStoryMarkup(story);
  $allStoriesList.prepend(storyMarkup);
  storyList.stories.push(story);

  $newStoryForm.trigger('reset');
}

$newStoryForm.on("submit", postNewStory);

/** Gets list of stories from server, generates their HTML, and puts on page. */

function putFavStoriesOnPage() {
  console.debug("putFavStoriesOnPage");

  $favStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  for (let story of currentUser.favorites) {
    const $story = generateStoryMarkup(story);
    $favStoriesList.append($story);
  }

  $favStoriesList.show();
}


/************************************* 
 *  Story Interactions Handling - functional on Main / favorites / user submitted stories view
 */

/**  */

async function handleFavoriteToggle(event){
  const $targetStar = $(event.target);
  
  const $parentLi = $($targetStar.closest('li')[0]);
  const storyId = $parentLi.attr('id');
  const story = storyList.stories.find(s => {
    return s.storyId === storyId
  })

  if ($targetStar.hasClass('far')) {
    // far = star outline = not a favorite
    await currentUser.addFavorite(story);
  } else {
    await currentUser.removeFavorite(story);
  }

  // Switch Star Type in DOM to opposite of current
  $targetStar.toggleClass('fas far');
}

$storiesUi.on("click", ".star", handleFavoriteToggle)

/**  */
async function handleDelete(event) {
  const $targetDelete = $(event.target);
  
  const $parentLi = $($targetDelete.closest('li')[0]);
  const storyId = $parentLi.attr('id');
  const story = storyList.stories.find(s => {
    return s.storyId === storyId
  })

  // Remove from DOM & Global Variables 
  $parentLi.remove();
  storyList.stories = storyList.stories.filter(userStory => userStory.storyId !== story.storyId);
  
  // Remove from DB 
  currentUser.deleteStory(story);
}

$storiesUi.on("click", ".delete", handleDelete);
