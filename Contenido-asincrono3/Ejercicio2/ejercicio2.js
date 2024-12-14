const imgList = document.querySelectorAll('.img');
const lightbox = document.querySelector('.lightbox');
const grande = document.querySelector('.grande');
const closeBtn = document.querySelector('.close');


const closeLightbox = () => lightbox.classList.remove('isActive');


const showImage = (src) => {
    grande.src = src;
    lightbox.classList.add('isActive');
};

imgList.forEach(img => img.addEventListener('click', () => showImage(img.src)));
closeBtn.addEventListener('click', closeLightbox);
