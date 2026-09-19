const audio = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", async () => {
  try {
    if (audio.paused) {
      await audio.play();
      musicBtn.textContent = "♫";
      musicBtn.classList.add("playing");
    } else {
      audio.pause();
      musicBtn.textContent = "♪";
      musicBtn.classList.remove("playing");
    }
  } catch (err) {
    console.error(err);
    alert("ضيفي الأغنية باسم talia-song.mp3 داخل فولدر assets ثم اضغطي زر الموسيقى.");
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
