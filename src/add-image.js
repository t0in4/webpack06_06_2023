import Image from './index.jpeg';

function addImage() {
    const img = document.createElement('img');
    img.alt = 'Image';
    img.widht = 300;
    img.src = Image;
    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;