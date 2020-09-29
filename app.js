// 1. searching
var spans = document.querySelectorAll('span');
var darkBtn = document.querySelector('.dark');
var arr = []


// 3. event handlers
function handleClick(event) {
  arr.push(event.target.dataset.value)
}

function handleDarkMode() {
  // manipulating dom objects
  document.body.classList.add('dark-mode')
}



// 2. registering events
for (var i = 0; i < spans.length; i++)  {
  spans[i].addEventListener('click', handleClick)
}

darkBtn.addEventListener('click', handleDarkMode)
