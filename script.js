document.getElementById("yesBtn").addEventListener("click", function() {
    window.location.href = "final.html";
});

document.getElementById("noBtn").addEventListener("mouseover", function() {
    let x = Math.random() * (window.innerWidth - this.offsetWidth);
    let y = Math.random() * (window.innerHeight - this.offsetHeight);
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});
