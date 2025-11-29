function showSurprise() {
    const surprises = [
        "Ты самая лучшая мама на свете! 🌟",
        "Я тебя очень сильно люблю! 💕",
        "Спасибо за всё, что ты для меня делаешь! 🙏",
        "Ты — мой самый главный человек! 💖",
        "Я так тебя люблю, мамочка! 😘"
    ];
    
    const randomSurprise = surprises[Math.floor(Math.random() * surprises.length)];
    document.getElementById('surprise').innerHTML = randomSurprise;
    
    // Добавляем конфетти-эффект
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const emoji = ['🎉', '🎊', '💐', '🌸', '💖', '🌟'];
            const randomEmoji = emoji[Math.floor(Math.random() * emoji.length)];
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-50px';
            confetti.style.fontSize = (Math.random() * 20 + 20) + 'px';
            confetti.style.opacity = '0.8';
            confetti.innerHTML = randomEmoji;
            confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 5000);
        }, i * 100);
    }
}

// Добавляем анимацию падения для конфетти
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Автозапуск анимации через 10 секунд
setTimeout(() => {
    showSurprise();
}, 10000);
