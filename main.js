// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM Loaded")
  let eventElements = document.querySelectorAll(".like-glyph")
  console.log(eventElements)

  eventElements.forEach((individualElement) => {
    individualElement.addEventListener("click", (event) => {
      mimicServerCall()
      .then ( function(response) {
        if (event.target.className === "activated-heart")
        {
          event.target.innerHTML = EMPTY_HEART;
          event.target.className = null;
          console.log(event.target);
        } else {
          event.target.innerHTML = FULL_HEART;
          event.target.className = "activated-heart"
          console.log(event.target);
        }
      })
      .catch (  function(error) {
        document.getElementById("modal").className = null
        setTimeout(() => {document.getElementById("modal").className = "hidden"}, 3000)
        console.log("Catch Error")
      })
    })
  })

})




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
