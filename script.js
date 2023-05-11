"use strict";

const btnGuess = document.getElementById("btn-guess");
const btnSearch = document.getElementById("btn-search");
const btnVideos = document.getElementById("btn-videos");
const middle = document.querySelector(".section-middle");
const middleSamJack = document.querySelector(".section-middle-samjack");
const videos = document.querySelector(".section-videos");
const right = document.querySelector(".section-right");
const rightContainer = document.querySelector(".section-right-container");
const rightCast = document.querySelector(".section-right-cast");
const rightMovie = document.querySelector(".section-right-movie");

function showRightContainer() {
  right.classList.remove("hidden");
  right.classList.add("show");
  rightContainer.classList.remove("hidden");
  rightContainer.classList.add("show");
  rightCast.classList.remove("hidden");
  rightCast.classList.add("show");
  rightMovie.classList.remove("hidden");
  rightMovie.classList.add("show");
}

// Search nav button
btnSearch.addEventListener("click", function () {
  middleSamJack.classList.remove("show");
  middleSamJack.classList.add("hidden");
  middle.classList.remove("hidden");
  middle.classList.add("show");
  videos.classList.remove("show");
  videos.classList.add("hidden");
  showRightContainer();
});

// Sam and Jack nav button
btnGuess.addEventListener("click", function () {
  middle.classList.remove("show");
  middle.classList.add("hidden");
  middleSamJack.classList.remove("hidden");
  middleSamJack.classList.add("show");
  videos.classList.remove("show");
  videos.classList.add("hidden");
  showRightContainer();
});

// Videos button

btnVideos.addEventListener("click", function () {
  middle.classList.remove("show");
  middle.classList.add("hidden");
  middleSamJack.classList.remove("show");
  middleSamJack.classList.add("hidden");
  right.classList.remove("show");
  right.classList.add("hidden");
  rightContainer.classList.remove("show");
  rightContainer.classList.add("hidden");
  rightCast.classList.remove("show");
  rightCast.classList.add("hidden");
  rightMovie.classList.remove("show");
  rightMovie.classList.add("hidden");
  videos.classList.remove("hidden");
  videos.classList.add("show");
});
