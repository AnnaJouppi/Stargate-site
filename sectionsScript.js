"use strict";

const stargate = {
  showName: "Stargate SG-1",
  productionRoles: [
    "actor",
    "director",
    "writer",
    "producer",
    "stuntsman",
    "actor",
  ],
  characters: [
    "Major Samantha Carter",
    "Teal'c",
    "Colonel Jack O'Neill",
    "Doctor Daniel Jackson",
  ],
  stars: [
    "Amanda Tapping",
    "Christopher Judge",
    "Richard Dean Anderson",
    "Michael Shanks",
  ],
  guestCharacters: ["Doctor Janet Fraiser", "Jonas Quinn"],
  guestStars: ["Teryl Rothery", "Corin Nemec"],

  samAndJackMarried: true,
  samAndJackMarriedSeason: 8,
  romanceStart: 7,
  runtime: "45 min",
  onAir: "1997 - 2007",
  imdbRating: 8.4,
  seasons: 10,
  seasonList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

  stargateMovie: {
    year: 1994,
    runtime: "1h 56min",
    imdbRatingMovie: 7.0,
    starsMovie: [
      "Kurt Russell",
      "James Spader",
      "Jaye Davidson",
      "Alexis Cruz",
    ],
    charactersMovie: [
      "Colonel Jack O'Neill",
      "Doctor Daniel Jackson",
      "Ra",
      "Skaara",
    ],
  },

  castId: [
    "Oneill",
    "Carter",
    "Tealc",
    "Daniel",
    "Oneill-Movie",
    "Daniel-Movie",
    "Ra",
    "Skaara",
  ],

  productionRolesArr: function () {
    const cleanArr = [...new Set(this.productionRoles)];
    return cleanArr;
  },

  showSeasons: function () {
    for (const season of this.seasonList) console.log(`Season : ${season}`);
    console.log(`Total number of seasons: ${this.seasonList.length}`);
  },

  characterSelect: function (character1, character2, character3) {
    if (character1 >= 0 && character1 < 4)
      console.log(
        `The character in index place ${character1} is ${this.characters[character1]}. Other characters you chose were ${this.characters[character2]} and ${this.characters[character3]}.`
      );
    else console.log("Please insert a number between 0-3.");
  },

  starring: function (number1, number2, number3) {
    if (number1 >= 0 && number1 < 4)
      console.log(
        `${this.characters[number1]} is played by ${
          this.stars[number1]
        }. Other characters you chose were ${
          this.characters[number2] || "not found"
        } and ${this.characters[number3] || "not found"}.`
      );
    else console.log("Please insert a number between 0-3.");
  },

  ifMarried: function () {
    const marriageToNumber = Number(marriageInput.value);
    let str = "";
    if (marriageToNumber <= 0 || marriageToNumber > 10) {
      console.log(typeof marriageToNumber);
      str = `Please enter a number between 1-10!`;
    } else if (
      marriageToNumber < stargate.samAndJackMarriedSeason ||
      marriageToNumber > stargate.samAndJackMarriedSeason
    ) {
      str = ` Wrong! ${stargate.characters[0]} and ${stargate.characters[2]} were not married on this season. Have another guess!`;
    } else if (marriageToNumber === stargate.samAndJackMarriedSeason)
      str = `Correct! ${stargate.characters[0]} and ${stargate.characters[2]} were married on season ${stargate.samAndJackMarriedSeason}.`;
    else str = `Please enter a NUMBER between 1-10!`;

    resultsMarriage.innerHTML = str;
  },

  starsAmount: function (guestsNumber, ...number) {
    console.log(
      `There are currently following ${number.length} stars: ${number} and ${guestsNumber.length} guest stars in our database: ${guestsNumber}.`
    );
    console.log();
  },
};

// Buttons
const btnSeasons = document.getElementById("btn-seasons");
const btnEpisodes = document.getElementById("btn-episodes");
const btnSeries = document.querySelectorAll(".btn-cast");
const btnGuessMarriage = document.getElementById("btn-guess-marriage");

// Marriage input
let marriageInput = document.getElementById("input-marriage");

// Result middle section divs
const resultsIndividually = document.getElementById("results-individually");
const resultstotal = document.getElementById("results-total");
const resultsEpisodes = document.getElementById("results-episodes-runtime");
const resultsMarriage = document.getElementById("results-marriage");

// Result right section divs
const resultsSeriesP = document.getElementById("results-series-p");
const resultsSeries = document.querySelector(".results-series");
const resultsMovieP = document.getElementById("results-movie-p");
const resultsMovie = document.querySelector(".results-movie");

// Images
let imageSrc = document.getElementById("image");
let aLink = document.getElementById("image-link");
let imageSrcMovie = document.getElementById("image-movie");
let aLinkMovie = document.getElementById("image-link-movie");

// Marriage section
btnGuessMarriage.addEventListener("click", stargate.ifMarried);

// Seasons section
btnSeasons.addEventListener("click", function () {
  const individual = `Individually: ${stargate.seasonList}`;
  const total = `Total number of seasons: ${stargate.seasons}`;
  resultsIndividually.innerHTML = individual;
  resultstotal.innerHTML = total;
});

// Episodes section
btnEpisodes.addEventListener("click", function () {
  const str = `${stargate.showName} was on air ${stargate.onAir} with an average runtime of ${stargate.runtime} per episode. It has an IMDb rating of ${stargate.imdbRating}. `;
  resultsEpisodes.innerHTML = str;
});

// Cast & Characters
// Series
// With switch-case

btnSeries.forEach((button) =>
  button.addEventListener("click", function () {
    const arr = [];
    for (const castId of stargate.castId) {
      const btnID = `btn-${castId}-series`;
      arr.push(btnID);
      console.log(arr);
    }
    switch (button.id) {
      case arr[0]:
        resultsSeries.classList.remove("hidden");
        resultsSeries.classList.add("show-series");
        resultsSeriesP.innerHTML = `${stargate.characters[2]} is played by ${stargate.stars[2]}.`;
        imageSrc.src = "img/oneill.png";
        aLink.href = "img/oneill.png";
        console.log(button.id);
        break;
      case arr[1]:
        resultsSeries.classList.remove("hidden");
        resultsSeries.classList.add("show-series");
        resultsSeriesP.innerHTML = `${stargate.characters[0]} is played by ${stargate.stars[0]}.`;
        imageSrc.src = "img/carter.png";
        aLink.href = "img/carter.png";
        console.log(button.id);
        break;
      case arr[2]:
        resultsSeries.classList.remove("hidden");
        resultsSeries.classList.add("show-series");
        resultsSeriesP.innerHTML = `${stargate.characters[1]} is played by ${stargate.stars[1]}.`;
        imageSrc.src = "img/tealc.png";
        aLink.href = "img/tealc.png";
        console.log(button.id);
        break;
      case arr[3]:
        resultsSeries.classList.remove("hidden");
        resultsSeries.classList.add("show-series");
        resultsSeriesP.innerHTML = `${stargate.characters[3]} is played by ${stargate.stars[3]}.`;
        imageSrc.src = "img/daniel.png";
        aLink.href = "img/daniel.png";
        console.log(button.id);
        break;
      case arr[4]:
        resultsMovie.classList.remove("hidden");
        resultsMovie.classList.add("show-series");
        resultsMovieP.innerHTML = `${stargate.stargateMovie.charactersMovie[0]} is played by ${stargate.stargateMovie.starsMovie[0]}.`;
        imageSrcMovie.src = "img/oneillmovie.jpg";
        aLinkMovie.href = "img/oneillmovie.jpg";
        console.log(button.id);
        break;
      case arr[5]:
        resultsMovie.classList.remove("hidden");
        resultsMovie.classList.add("show-series");
        resultsMovieP.innerHTML = `${stargate.stargateMovie.charactersMovie[1]} is played by ${stargate.stargateMovie.starsMovie[1]}.`;
        imageSrcMovie.src = "img/danielmovie.jpg";
        aLinkMovie.href = "img/danielmovie.jpg";
        console.log(button.id);
        break;
      case arr[6]:
        resultsMovie.classList.remove("hidden");
        resultsMovie.classList.add("show-series");
        resultsMovieP.innerHTML = `${stargate.stargateMovie.charactersMovie[2]} is played by ${stargate.stargateMovie.starsMovie[2]}.`;
        imageSrcMovie.src = "img/ra.jpg";
        aLinkMovie.href = "img/ra.jpg";
        console.log(button.id);
        break;
      case arr[7]:
        resultsMovie.classList.remove("hidden");
        resultsMovie.classList.add("show-series");
        resultsMovieP.innerHTML = `${stargate.stargateMovie.charactersMovie[3]} is played by ${stargate.stargateMovie.starsMovie[3]}.`;
        imageSrcMovie.src = "img/skaara.jpg";
        aLinkMovie.href = "img/skaara.jpg";
        console.log(button.id);
        break;
    }
  })
);

// stargate.starsAmount(stargate.guestStars, ...stargate.stars);

// const guestsCombined = [...stargate.guestCharacters, ...stargate.guestStars];
// console.log(
//   `Guest stars in Stargate SG-1 are: ${guestsCombined[2]} as ${guestsCombined[0]} and ${guestsCombined[3]} as ${guestsCombined[1]}.`
// );

// console.log(stargate.guestStars);
// stargate.showSeasons();

// // using REST and destructuring stargate.stars
// const [firstStar, secondStar, ...rest] = stargate.stars;
// console.log(firstStar, secondStar, rest);

// console.log(stargate.productionRolesArr());

// const actors = [...stargate.stars];
// const askIfMarried = Number(
//   prompt('On which season were Samantha and Jack married on? (1-10):')
// );
// console.log();

//      const askingNicely = [
// prompt('Give a number 0-3 :'),
// prompt('Give a number 0-3 :'),
// prompt('Give a number 0-3 :'),
// ];

// stargate.ifMarried(askIfMarried);
// stargate.characterSelect(...askingNicely);
// stargate.starring(...askingNicely);
