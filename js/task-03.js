const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listGalleryElem = document.querySelector('.gallery');
listGalleryElem.style.display='flex';
listGalleryElem.style.justifyContent='center';
listGalleryElem.style.flexWrap='wrap';
listGalleryElem.style.flexDirection='column';
listGalleryElem.style.gap='10px';



let arrayGalleryElem = [];
for (let i = 0; i < images.length; i +=1) {
  let liGalleryElem = document.createElement('li');
  liGalleryElem.classList.add('img-gallery');
  const imgEL = liGalleryElem.appendChild(document.createElement('img'));
  imgEL.src = images[i].url;
  imgEL.alt = images[i].alt;
  imgEL.style.width = "200px";
  arrayGalleryElem.push(liGalleryElem);
}

// arrayGalleryElem.forEach((key)=>listGalleryElem.appendChild(key));
arrayGalleryElem.forEach((key)=>listGalleryElem.insertAdjacentHTML("afterBegin", key.innerHTML));
