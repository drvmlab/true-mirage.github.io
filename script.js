const sections = document.querySelectorAll(".section");

sections.forEach((section) => {
  const banners = section.querySelectorAll(".banner");
  const title = section.querySelector("h2");

  banners.forEach((banner) => {
    const img = banner.querySelector("img");

    banner.addEventListener("mouseover", () => {
      title.style.opacity = "1";
    });

    banner.addEventListener("mouseout", () => {
      title.style.opacity = "0";
    });
  });
});


window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;

  sections.forEach((section) => {
    const title = section.querySelector("h2");
    const banner = section.querySelector(".banner");

    if (scrollPosition > banner.offsetTop + banner.offsetHeight / 9) {
      title.classList.add("fade-in-blur");
    } else {
      title.classList.remove("fade-in-blur");
    }

    if (
      scrollPosition >
      banner.offsetTop + banner.offsetHeight - title.offsetHeight
    ) {
      title.classList.add("fade-out-blur");
    } else {
      title.classList.remove("fade-out-blur");
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const audio1 = document.getElementById("audio1");
  const playButton1 = document.getElementById("play-button1");
  const seekBar1 = document.getElementById("seek-bar1");
  const currentTime1 = document.getElementById("current-time1");
  const duration1 = document.getElementById("duration1");

  playButton1.addEventListener("click", function() {
    if (audio1.paused) {
      audio1.play();
      playButton1.textContent = "pause";
    } else {
      audio1.pause();
      playButton1.textContent = "play";
    }
  });

  audio1.addEventListener("timeupdate", function() {
    seekBar1.value = (audio1.currentTime / audio1.duration) * 100;

    currentTime1.textContent = formatTime(audio1.currentTime);
    duration1.textContent = formatTime(audio1.duration);
  });

  seekBar1.addEventListener("input", function() {
    audio1.currentTime = (seekBar1.value / 100) * audio1.duration;
  });

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }
});
function backToMainPage(event) {
  event.preventDefault();
  const backButton = document.querySelector(".back-button");
  backButton.style.transform = "translateY(100vh)";
  backButton.style.opacity = "0";
  backButton.style.transition = "transform 0.5s ease, opacity 0.5s ease";

  setTimeout(() => {
    // Replace 'index.html' with the URL of your main page
    window.location.href = "index.html";
  }, 500);
}
const scrollToggle = document.querySelector("#scroll-toggle");
const imageContainer = document.querySelector("#image-container");

scrollToggle.addEventListener("click", () => {
  // get the height of the image container
  const containerHeight = imageContainer.scrollHeight;
  // set the initial position to 0
  let position = 0;
  // set the duration of the animation to 2000ms (2 seconds)
  const duration = 2000;
  // calculate the distance to scroll every 10ms
  const distance = containerHeight / (duration / 10);

  // create an interval to scroll the container down every 10ms
  const scrollInterval = setInterval(() => {
    // increment the position by the distance
    position += distance;
    // scroll the container to the current position
    imageContainer.scrollTop = position;
    // check if the end of the container has been reached
    if (position >= containerHeight) {
      // clear the interval when the end is reached
      clearInterval(scrollInterval);
    }
  }, 10);
});

function backToMainPage(event) {
  event.preventDefault();
  const backButton = document.querySelector(".back-button");
  backButton.style.transform = "translateY(100vh)";
  backButton.style.opacity = "0";
  backButton.style.transition = "transform 0.5s ease, opacity 0.5s ease";

  setTimeout(() => {
    // Replace 'index.html' with the URL of your main page
    window.location.href = "index.html";
  }, 500);
}

window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  header.classList.toggle("hidden", window.scrollY > 0);
});

// Function to control the audio players
const audioPlayer = document.getElementById("audio-player");
const playButton = document.getElementById("play-button");
const playlist = document.getElementById("playlist");
const volumeBars = document.querySelectorAll(".volume-bar");
const tracks = playlist.querySelectorAll("li");
let currentTrackIndex = 0;

audioPlayer.addEventListener("ended", () => {
  currentTrackIndex++;
  if (currentTrackIndex >= tracks.length) {
    currentTrackIndex = 0;
  }
  playTrack(currentTrackIndex);
});

playButton.addEventListener("click", () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
});

function playTrack(index) {
  const track = tracks[index];
  const trackSrc = track.getAttribute("data-src");
  audioPlayer.src = trackSrc;
  audioPlayer.play();
}




