// functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.style.display = 'none';

showHideBtn.onclick = function() {
  let showHideText = showHideBtn.textContent;
  if(showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
  }
};

// functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.onsubmit = function(e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  nameField.value = '';
  commentField.value = '';
}

const commentBtn = document.querySelector(".show-hide")

commentBtn.addEventListener("keydown", (e) => {
  if(e.keyCode === 9) { // tab key
    document.activeElement.click();
  }
});

console.log("here")
const transcript = document.querySelector('.transcript');
const transcriptBtn = document.querySelector('.transcript-container button');

transcriptBtn.addEventListener("click", toggleTranscript);

function toggleTranscript() {
  if(transcriptBtn.textContent === 'Show transcript') {
    transcript.style.height = '150px';
    transcriptBtn.textContent = 'Hide transcript';
  } else {
    transcript.style.height = '0';
    transcriptBtn.textContent = 'Show transcript';
  }
};
