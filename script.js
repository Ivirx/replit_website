const allImagesElement = document.querySelector('.all-images');
let centerAllImages = allImagesElement.offsetWidth / 2;
let allImages = allImagesElement.children;
let onImage = 0;

function handleSlide() {
    Array.from(allImages).forEach((imageDiv, index) => {
        imageDiv.style.transform =
            ('translateX(' + String((centerAllImages - (imageDiv.offsetWidth / 2)) + (-1 * ((imageDiv.offsetWidth + 48) * onImage))) + 'px)');
        if (onImage === index)
            imageDiv.classList.remove('faint');
        else
            imageDiv.classList.add('faint');
    });
}

window.addEventListener('resize', () => {
    centerAllImages = document.querySelector('.all-images').offsetWidth / 2;
    handleSlide();
});

const previous = () => {
    if (onImage > 0) {
        onImage -= 1
        handleSlide();
    }
}

const next = () => {
    if (onImage < 5) {
        onImage += 1
        handleSlide();
    }
}

handleSlide();
