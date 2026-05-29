```javascript id="zmsqnp"
/* ===================================
   LIGHTBOX FUNCTIONALITY
===================================

Flow:

1. User clicks an image
2. Lightbox opens
3. Large image is displayed
4. User can close by:
   - Clicking X
   - Clicking outside image
   - Pressing ESC

=================================== */

const galleryImages = document.querySelectorAll(".masonry img");

const lightbox = document.querySelector(".lightbox");

const lightboxImage = document.querySelector(".lightbox img");

const closeButton = document.querySelector(".close-lightbox");

/* Open Lightbox */

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

        document.body.style.overflow = "hidden";

    });

});

/* Close using X button */

closeButton.addEventListener("click", closeLightbox);

/* Close when clicking dark background */

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        closeLightbox();

    }

});

/* Close with ESC key */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeLightbox();

    }

});

function closeLightbox() {

    lightbox.style.display = "none";

    document.body.style.overflow = "auto";

}

/* ===================================
   SCROLL REVEAL ANIMATIONS
===================================

IntersectionObserver watches
elements entering the viewport.

When visible:
.reveal
      ↓
.reveal.show

CSS handles the animation.

Much more efficient than
listening to scroll events.

=================================== */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach((element) => {

    observer.observe(element);

});

/* ===================================
   NAVBAR BACKGROUND ON SCROLL
===================================

Adds a slightly stronger background
when scrolling down.

Makes navigation easier to read
over photographs.

=================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(10,10,10,0.92)";

    } else {

        navbar.style.background =
            "rgba(10,10,10,0.65)";

    }

});

/* ===================================
   ACTIVE NAVIGATION LINK
===================================

Highlights the current section
while scrolling.

=================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >=
            sectionTop - 150
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

});

/* ===================================
   IMAGE PRELOAD
===================================

Preloads gallery images
for smoother lightbox opening.

=================================== */

galleryImages.forEach((image) => {

    const preload = new Image();

    preload.src = image.src;

});

/* ===================================
   OPTIONAL CONSOLE MESSAGE
=================================== */

console.log(
    "Sridhar Photography Portfolio Loaded Successfully"
);
```
