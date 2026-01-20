const carouselStates = {};

        function moveCarousel(id, direction) {
            const container = document.getElementById(id);
            const images = container.querySelectorAll('img');
            const totalImages = images.length;
            
            if (!carouselStates[id]) carouselStates[id] = 0;
            
            carouselStates[id] = (carouselStates[id] + direction + totalImages) % totalImages;
            
            const offset = carouselStates[id] * 100;
            container.style.transform = `translateX(-${offset}%)`;
        }

function copyEmail() {
    const email = "ignacioruhlcosta@gmail.com";
    
    // Intenta abrir el correo de todas formas por si tienen app
    window.location.href = "mailto:" + email;

    // Copia el email al portapapeles automáticamente
    navigator.clipboard.writeText(email).then(() => {
        const tooltip = document.getElementById("tooltip");
        tooltip.classList.remove("opacity-0");
        tooltip.classList.add("opacity-100");
        
        // Oculta el mensaje de "Copiado" después de 2 segundos
        setTimeout(() => {
            tooltip.classList.remove("opacity-100");
            tooltip.classList.add("opacity-0");
        }, 2000);
    });
}