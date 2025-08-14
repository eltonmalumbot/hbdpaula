
// Fungsi untuk memainkan musik
function playMusic() {
  const musik = document.getElementById('musik');
  if (musik) {
    musik.play().catch(e => console.log("Autoplay blocked:", e));
  }
}

// Fungsi untuk membuat konfeti (menggunakan canvas)
function createConfetti() {
  const canvas = document.createElement('canvas');
  const container = document.querySelector('.container');
  canvas.width = container.offsetWidth;
  canvas.height = container.offsetHeight;
  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '100';
  container.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const pieces = [];
  const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722'];

  // Buat partikel konfeti
  for (let i = 0; i < 150; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      rotation: Math.random() * 360,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: Math.random() > 0.5 ? 'circle' : 'rect',
      size: Math.random() * 10 + 5,
      speed: Math.random() * 3 + 2
    });
  }

  // Animasi konfeti
  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    pieces.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation * Math.PI / 180);
      ctx.fillStyle = p.color;
      
      if (p.shape === 'circle') {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      }
      
      ctx.restore();
      
      // Update posisi
      p.y += p.speed;
      p.rotation += p.speed / 5;
      
      // Reset jika keluar layar
      if (p.y > canvas.height) {
        p.y = -p.size;
        p.x = Math.random() * canvas.width;
      }
    });

    requestAnimationFrame(update);
  }

  update();
  
  // Hapus canvas setelah 5 detik
  setTimeout(() => {
    canvas.remove();
  }, 5000);
}

// Event listener untuk tombol konfeti
document.getElementById('btnKonfeti').addEventListener('click', function() {
  playMusic();
  createConfetti();
});

// Efek ketik nama (opsional)
const nama = document.getElementById('nama');
const namaPacar = "Paula Erika Panjaitan"; // Ganti dengan nama pacar
let i = 0;

function ketik() {
  if (i < namaPacar.length) {
    nama.innerHTML += namaPacar.charAt(i);
    i++;
    setTimeout(ketik, 150);
  }
}

ketik();
