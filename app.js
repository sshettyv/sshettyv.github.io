 const gallery = document.getElementById('gallery');
 const popup = document.getElementById('popup');
 const bodyTag = document.getElementsByTagName('body');
 const selectedImage = document.getElementById('selectedImage');
 const imageIndexes= [1,2,3,4,5,6,7,8,9];
 const selectedIndex = null;
 let w= window.innerWidth;
 let h= window.innerHeight;

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
 if(screen.width<1200){
   unResponsive();
 }
 window.addEventListener('resize', unResponsive);

function unResponsive(){
      console.log(screen.width)
            if(screen.width <1200){
                              bodyTag[0].innerHTML="<div> Site is under construction for mobile</div><br><div >Please visit via Computer/Screen width> 1200px - Vijeth Shetty</div>";
                               

            }

}