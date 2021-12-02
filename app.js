 const gallery = document.getElementById('gallery');
 const popup = document.getElementById('popup');
 const selectedImage = document.getElementById('selectedImage');
 const imageIndexes= [1,2,3,4,5,6,7,8,9];
 const selectedIndex = null;

 imageIndexes.forEach((i) => {
    const image = document.createElement('img');
    image.src = `/files/img${i}.jpg`;
    image.alt = `food image {i}`;
    image.classList.add('galleryImg');
    image.addEventListener('click',()=>{
        popup.style.transform = 'translateY(0)';
        selectedImage.src = `/files/img${i}.jpg`;
        selectedImage.alt = `food image {i}`;
    });
    gallery.append(image);
     

 })

 popup.addEventListener('click',()=>{
    popup.style.transform = 'translateY(-100%)';
    popup.src = '' ;
    popup.alt='';

 })

 document.getElementById('githubLink').onclick = function(){
   window.open('https://github.com/sshettyv');
   
 }