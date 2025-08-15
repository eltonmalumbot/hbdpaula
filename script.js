function playMusic() {
    const musik = document.getElementById('musik');
    musik.load();
    musik.play()
        .then(() => console.log("Musik diputar"))
        .catch(e => console.warn("Gagal memutar musik:", e));
}

function createConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];
    const colors = [
        '#ff4b5c', '#ffb6b9', '#fae3d9', '#bbded6', '#8ac6d1',
        '#f7b267', '#f79d65', '#f4845f', '#f27059', '#ff8fab'
    ];

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    for (let i = 0; i < 200; i++) {
        pieces.push({
            x: centerX,
            y: centerY,
            rotation: Math.random() * 360,
            color: colors[Math.floor(Math.random() * colors.length)],
            shape: Math.random() > 0.5 ? 'circle' : 'rect',
            size: Math.random() * 10 + 5,
            speedX: (Math.random() - 0.5) * 8,
            speedY: Math.random() * -5 - 2,
            spin: Math.random() * 0.2 - 0.1
        });
    }

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

            p.x += p.speedX;
            p.y += p.speedY;
            p.speedY += 0.1;
            p.rotation += p.spin;

            if (p.y > canvas.height || p.x < 0 || p.x > canvas.width) {
                p.x = centerX;
                p.y = centerY;
                p.speedX = (Math.random() - 0.5) * 8;
                p.speedY = Math.random() * -5 - 2;
            }
        });

        requestAnimationFrame(update);
    }

    update();
}

document.getElementById('btnKonfeti').addEventListener('click', () => {
    playMusic();
    createConfetti();
});

window.addEventListener('resize', () => {
    const canvas = document.getElementById('confetti-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
