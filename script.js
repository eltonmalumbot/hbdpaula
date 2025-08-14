// Animasi Konfeti
document.getElementById('btnKonfeti').addEventListener('click', function() {
  const konfeti = document.createElement('div');
  konfeti.className = 'konfeti';
  document.body.appendChild(konfeti);

  // Musik latar (opsional)
  const musik = document.getElementById('musik');
  musik.play();

  // Hapus konfeti setelah 5 detik
  setTimeout(() => {
    konfeti.remove();
  }, 5000);
});

// Efek ketik nama (opsional)
const nama = document.getElementById('nama');
const namaPacar = "Nama Pacarmu"; // Ganti dengan nama pacar
let i = 0;

function ketik() {
  if (i < namaPacar.length) {
    nama.innerHTML += namaPacar.charAt(i);
    i++;
    setTimeout(ketik, 150);
  }
}

ketik();
