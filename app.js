// Const is to define a variable, and document.querySelector is a method used to return the first Element within the document that matches the specified selector
const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

//This code basically adds the event of sliding to the btn function, which let the video pause.
btn.addEventListener("click", function () {
  // if the btn class list doesn't contain the class "slide", then its gonnna be added through this if statement
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } 
  // else, remove the slide and play the video
  else {
    btn.classList.remove("slide");
    video.play();
  }
});
