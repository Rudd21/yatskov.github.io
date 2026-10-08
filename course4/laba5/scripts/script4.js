let photoblock = document.getElementById('photo-block');
let photonumblock = document.getElementById('photo-num-block');
let descriptionblock = document.getElementById('description-block');

let imagesArray = [
    {path: 'images/sport1.webp', title: 'Кросівки темних відтінків', description: 'Круті кросівки'},
    {path: 'images/sport2.webp', title: 'Кросівки Asecs', description: 'Нормальні кросівки'},
    {path: 'images/sport3.jpg', title: 'Чорні кросівки', description: 'Позорні кросівки'}
];

let index = 0;

function initPhotoRotator(photoblock, imagesArray, currentIndex){
    photoblock.innerHTML = '';
    photonumblock.innerHTML = '';
    descriptionblock.innerHTML = '';
    let img = document.createElement('img');
    let photo_num = document.createElement('span');
    let title = document.createElement('span');
    let description = document.createElement('span');
    photo_num.textContent = `Фотографія ${currentIndex+1} з ${imagesArray.length}`;
    title.textContent = imagesArray[currentIndex].title;
    title.style.fontWeight = 'bold';
    title.style.display = 'block';
    description.textContent = imagesArray[currentIndex].description;
    img.src = imagesArray[currentIndex].path;
    photoblock.appendChild(img);
    photonumblock.appendChild(photo_num);
    descriptionblock.appendChild(title);
    descriptionblock.appendChild(description);
    hideButtons();
}

function nextPhoto(){
    index++;
    if (index >= imagesArray.length){
        index = 0;

    }
    initPhotoRotator(photoblock, imagesArray, index);
}

document.getElementById('prev').onclick = prevPhoto; 

function prevPhoto(){
    index--;
    if (index < 0){
        index = imagesArray.length - 1;
    }
    initPhotoRotator(photoblock, imagesArray, index);
}

function hideButtons() {
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    if (index === 0) {
        prev.style.display = 'none';
    } else {
        prev.style.display = 'block';
    }

    if (index === imagesArray.length - 1) {
        next.style.display = 'none';
    } else {
        next.style.display = 'block';
    }}

hideButtons();
