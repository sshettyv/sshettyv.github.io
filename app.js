

 document.getElementById('githubLink').onclick = function(){
   window.open('https://github.com/sshettyv');
   
 }
 if(screen.width<1200   ){
   unResponsive();
 }
 window.addEventListener('resize', unResponsive);



 


function unResponsive(){
      console.log(screen.width)
            if(screen.width <1200){
              window.location.replace("mobilePage.html");;
            }

}
