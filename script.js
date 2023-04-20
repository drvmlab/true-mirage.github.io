const sections = document.querySelectorAll(".section");

sections.forEach((section) => {
  const banners = section.querySelectorAll(".banner");
  const title = section.querySelector("h2");

  if (title) {
    banners.forEach((banner) => {
      if (banner) {
        banner.addEventListener("mouseover", () => {
          title.style.opacity = "1";
        });

        banner.addEventListener("mouseout", () => {
          title.style.opacity = "0";
        });
      }
    });
  }
});

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;

  sections.forEach((section) => {
    const title = section.querySelector("h2");
    const banner = section.querySelector(".banner");

    if (title && banner) {
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
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const audio1 = document.getElementById("audio1");
  const playButton1 = document.getElementById("play-button1");
  const seekBar1 = document.getElementById("seek-bar1");
  const currentTime1 = document.getElementById("current-time1");
  const duration1 = document.getElementById("duration1");

  if (audio1 && playButton1) {
    playButton1.addEventListener("click", function () {
      if (audio1.paused) {
        audio1.play();
        playButton1.textContent = "pause";
      } else {
        audio1.pause();
        playButton1.textContent = "play";
      }
    });
  }

  if (audio1 && seekBar1) {
    audio1.addEventListener("timeupdate", function () {
      seekBar1.value = (audio1.currentTime / audio1.duration) * 100;

      currentTime1.textContent = formatTime(audio1.currentTime);
      duration1.textContent = formatTime(audio1.duration);
    });

    seekBar1.addEventListener("input", function () {
      audio1.currentTime = (seekBar1.value / 100) * audio1.duration;
    });
  }

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }
});

function backToMainPage(event) {
  event.preventDefault();
  const backButton = document.querySelector(".back-button");

  if (backButton) {
    backButton.style.transform = "translateY(100vh)";
    backButton.style.opacity = "0";
    backButton.style.transition = "transform 0.5s ease, opacity 0.5s ease";

    setTimeout(() => {
      // Replace 'index.html' with the URL of your main page
      window.location.href = "index.html";
    }, 500);
  }
}
const scrollToggle = document.querySelector("#scroll-toggle");
const imageContainer = document.querySelector("#image-container");

if (scrollToggle && imageContainer) {
  scrollToggle.addEventListener("click", () => {
    const containerHeight = imageContainer.scrollHeight;
    let position = 0;
    const duration = 2000;
    const distance = containerHeight / (duration / 10);

    const scrollInterval = setInterval(() => {
      position += distance;
      imageContainer.scrollTop = position;
      if (position >= containerHeight) {
        clearInterval(scrollInterval);
      }
    }, 10);
  });
}

window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  if (header) {
    header.classList.toggle("hidden", window.scrollY > 0);
  }
});

const audioPlayer = document.getElementById("audio-player");
const playButton = document.getElementById("play-button");
const playlist = document.getElementById("playlist");
const tracks = playlist ? playlist.querySelectorAll("li") : [];
let currentTrackIndex = 0;

if (audioPlayer && playButton) {
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
}

function playTrack(index) {
  if (tracks.length > 0) {
    const track = tracks[index];
    const trackSrc = track.getAttribute("data-src");
    audioPlayer.src = trackSrc;
    audioPlayer.play();
  }
}
