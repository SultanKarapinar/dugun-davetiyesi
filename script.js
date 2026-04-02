function openInvite() {
    const envelope = document.getElementById("envelope");
    envelope.classList.add("open");

    
    setTimeout(() => {
        const wrapper = document.getElementById("envelopeScreen");
        wrapper.style.opacity = "0";
        wrapper.style.transition = "1.5s ease";
        
        setTimeout(() => {
            wrapper.style.display = "none";
            const main = document.getElementById("main");
            main.style.display = "block";
            setTimeout(() => {
                main.classList.add("visible");
                startFallingPetals();
            }, 100);
        }, 1000);
    }, 2500); 
}

// Düşen Yaprakları Oluşturma Fonksiyonu
function startFallingPetals() {
    const container = document.getElementById("petalsContainer");

    setInterval(() => {
        const petal = document.createElement("div");
        petal.classList.add("petal");

        // Rastgele özellikler 
        const size = Math.random() * 15 + 10 + "px"; // 10px - 25px arası
        const left = Math.random() * 100 + "vw"; // Ekranın rastgele bir yerinden
        const duration = Math.random() * 5 + 5 + "s"; // 5s - 10s arası düşme hızı
        const delay = Math.random() * 2 + "s"; // Rastgele gecikme

        petal.style.width = size;
        petal.style.height = size;
        petal.style.left = left;
        petal.style.animationDuration = duration;
        petal.style.animationDelay = delay;

        container.appendChild(petal);

        // Ekrandan çıkan yaprağı sil 
        setTimeout(() => {
            petal.remove();
        }, parseFloat(duration) * 1000 + parseFloat(delay) * 1000);

    }, 300);
}
// Düğün Tarihini 
const weddingDate = new Date("April 8, 2026 20:00:00").getTime();

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Zaman hesaplamaları
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // HTML'e yazdır
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Tarih geçtiyse
    if (distance < 0) {
        clearInterval(countdown);
        document.querySelector(".countdown-container").innerHTML = "MUTLULUKLAR!";
    }
}, 1000);