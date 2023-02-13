let windowWidth = window.innerWidth;
let translateBy = Math.min((windowWidth / 100) * 35, 250);
let allImagesWidth = document.querySelector('.all-images').offsetWidth;

let allImages = document.querySelector('.all-images').children;
let onImage = 0;

Array.from(allImages).forEach((imageDiv, index) => {
    imageDiv.style.transform =
        ('translateX(' + String((allImagesWidth / 2) - (imageDiv.offsetWidth / 2)) + 'px)')
    if (onImage === index) {
        imageDiv.classList.remove('faint')
    } else {
        imageDiv.classList.add('faint')
    }
});

const handle = (howMuch) => {
    onImage = howMuch;
    Array.from(allImages).forEach((imageDiv, index) => {
        imageDiv.style.transform = ('translateX(-' + String(((imageDiv.offsetWidth + 48) * howMuch)) + 'px)')
        console.log(imageDiv.getBoundingClientRect().left, (imageDiv.offsetWidth + 48) * howMuch)
        if (onImage === index) {
            imageDiv.classList.remove('faint')
        } else {
            imageDiv.classList.add('faint')
        }
    });
}


window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;
    translateBy = Math.min((windowWidth / 100) * 35, 250);
    allImagesWidth = document.querySelector('.all-images').offsetWidth;
});

const previous = () => {
    if (onImage > 0) {
        console.log('previous');
        handle(onImage - 1);
    }
}

const next = () => {
    if (onImage <= 4) {
        console.log('next');
        handle(onImage + 1);
    }

}