const swup = new Swup({
    animationSelector: '[class*="transition-"]',
});

var header = document.getElementById("nav");
var btns = header.getElementsByClassName("a");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const boxContainer = document.querySelector(".box-container");
    const boxes = document.querySelectorAll(".box");
    const leftArrow = document.querySelector(".fa-angle-left");
    const rightArrow = document.querySelector(".fa-angle-right");

    let currentIndex = 0;
    const totalSlides = boxes.length;

    function updateSliderPosition() {
        boxContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    rightArrow.addEventListener("click", () => {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
            updateSliderPosition();
        }
    });

    leftArrow.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    });
});

function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-pane');
    const links = document.querySelectorAll('.nav-link');
    tabs.forEach(tab => tab.classList.remove('active'));
    links.forEach(link => link.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
}