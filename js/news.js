const btnText = document.getElementById("myBtn");

btnText.addEventListener('click', function myFunction() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const more2 = document.getElementById("more2");



    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Читать больше";
        moreText.style.display = "none";
        more2.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Читать меньше";
        moreText.style.display = "inline";
        more2.style.display = "inline";
    }
})

















