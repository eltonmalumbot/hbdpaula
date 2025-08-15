
// Efek mengetik untuk pesan
const pesanEl = document.getElementById("pesan");
const pesanText = "Kamu adalah alasan senyumku setiap hari 💕";
let i = 0;

function typeWriter() {
  if (i < pesanText.length) {
    pesanEl.innerHTML += pesanText.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}
setTimeout(typeWriter, 1000); // mulai setelah 1 detik

// Tombol confetti + musik
document.getElementById("btnConfetti").addEventListener("click", function() {
  const musik = document.getElementById("musik");
  musik.play();

  let duration = 2 * 1000;
  let end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
});
