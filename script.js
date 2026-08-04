

const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});



const navLinks = document.querySelectorAll(".nav-link");
const navCollapse = document.querySelector(".navbar-collapse");


navCollapse.addEventListener("show.bs.collapse", () => {
    document.body.classList.add("menu-open");
});

navCollapse.addEventListener("hidden.bs.collapse", () => {
    document.body.classList.remove("menu-open");
});

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth < 992) {

            const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);

            if (bsCollapse) {
                bsCollapse.hide();
            }

        }

    });

});



navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});




document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        }

    });

});




const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transition = ".35s";
        btn.style.transform = "translateY(-4px) scale(1.03)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0) scale(1)";

    });

});




window.addEventListener("load", () => {

    navbar.style.opacity = "0";
    navbar.style.transform = "translateY(-40px)";

    setTimeout(() => {

        navbar.style.transition = ".8s ease";
        navbar.style.opacity = "1";
        navbar.style.transform = "translateY(0)";

    }, 200);

});


const heroTitle = document.querySelector(".hero-section h1");
const heroText = document.querySelector(".hero-section p");
const heroButtons = document.querySelector(".hero-btn");
const heroImage = document.querySelector(".hero-image");

window.addEventListener("load", () => {

    heroTitle.style.opacity = "0";
    heroText.style.opacity = "0";
    heroButtons.style.opacity = "0";
    heroImage.style.opacity = "0";

    heroTitle.style.transform = "translateY(40px)";
    heroText.style.transform = "translateY(40px)";
    heroButtons.style.transform = "translateY(40px)";
    heroImage.style.transform = "translateX(50px)";

    setTimeout(() => {

        heroTitle.style.transition = ".8s";
        heroTitle.style.opacity = "1";
        heroTitle.style.transform = "translateY(0)";

    }, 300);

    setTimeout(() => {

        heroText.style.transition = ".8s";
        heroText.style.opacity = "1";
        heroText.style.transform = "translateY(0)";

    }, 500);

    setTimeout(() => {

        heroButtons.style.transition = ".8s";
        heroButtons.style.opacity = "1";
        heroButtons.style.transform = "translateY(0)";

    }, 700);

    setTimeout(() => {

        heroImage.style.transition = "1s";
        heroImage.style.opacity = "1";
        heroImage.style.transform = "translateX(0)";

    }, 900);

});



const logo = document.querySelector(".logo");

logo.addEventListener("mouseenter", () => {

    logo.style.transition = ".4s";
    logo.style.transform = "rotate(-10deg) scale(1.08)";

});

logo.addEventListener("mouseleave", () => {

    logo.style.transform = "rotate(0deg) scale(1)";

});




const progressBar = document.createElement("div");

progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "3px";
progressBar.style.width = "0";
progressBar.style.zIndex = "99999";
progressBar.style.background = "linear-gradient(90deg,#6A11CB,#C84DFF)";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const scroll =
        (window.scrollY /
            (document.body.scrollHeight - window.innerHeight)) * 100;

    progressBar.style.width = scroll + "%";

});