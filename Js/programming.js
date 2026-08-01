// =========================
// Statistics Counter
// =========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const update = () => {

        const target = +counter.dataset.target;

        const current = +counter.innerText;

        const increment = Math.ceil(target / 80);

        if (current < target) {

            counter.innerText = current + increment;

            setTimeout(update, 20);

        } else {

            counter.innerText = target;

        }

    };

    update();

});

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".company-navbar ul");

menuBtn.addEventListener("click", function () {

    console.log("clicked");

    navMenu.classList.toggle("active");

});