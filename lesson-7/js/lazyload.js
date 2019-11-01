function check () {
    console.log("is this js loading?")
}

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }
    img.src = src;
}

const images = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshhold: 1,
    rootMargin: "0px 0px 300px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {        
    if (!entry.isIntersecting) {
        return;
    }        
    else {
        preloadImage(entry.target);
        imgObserver.unobserve(entry.target);
    }
});
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});
