const text = "我們是一間便宜低延遲的伺服器托管";
let index = 0;
function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-text").textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
window.onload = typeEffect;
