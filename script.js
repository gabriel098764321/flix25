document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector(".text");
    const cursorElement = document.querySelector(".cursor");
    const text = textElement.textContent;
    textElement.textContent = "";
    
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        } else {
            setTimeout(reset, 2000); // Espera 2 segundos antes de reiniciar
        }
    }

    function reset() {
        textElement.textContent = "";
        index = 0;
        type();
    }

    type();
});