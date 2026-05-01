const container = document.getElementById('appContainer');
const envelope = document.getElementById('envelopeBox');
const letterInside = document.getElementById('letterInside');
const video = document.querySelector('.boomerang');

envelope.addEventListener('click', () => {
    container.classList.add('open');
    if (video) video.play();
    
    for (let i = 0; i < 12; i++) {
        const kiss = document.createElement('div');
        kiss.innerHTML = '💋';
        kiss.style.position = 'fixed';
        kiss.style.left = Math.random() * 80 + 10 + '%';
        kiss.style.bottom = '15%';
        kiss.style.fontSize = '1.8rem';
        kiss.style.pointerEvents = 'none';
        kiss.style.transition = 'all 2.5s ease-out';
        kiss.style.zIndex = '9999';
        document.body.appendChild(kiss);
        
        setTimeout(() => {
            kiss.style.transform = 'translateY(-350px) rotate(20deg)';
            kiss.style.opacity = '0';
            setTimeout(() => kiss.remove(), 2500);
        }, 50);
    }
});

letterInside.addEventListener('click', (e) => {
    // Nếu chạm vào vùng cuộn chữ thì không đóng thư để còn đọc tiếp
    if (e.target.closest('.letter-content-scroll')) return;
    container.classList.remove('open');
});