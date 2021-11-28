 const filenames = [
     'files/img1.jpg',
     'files/img2.jpg',
     'files/img3.jpg',
     'files/img4.jpg',
     'files/img5.jpg',
     'files/img6.jpg',
     'files/img7.jpg',
     'files/img8.jpg',
     'files/img9.jpg'
 ];

 fetchImage(filenames).catch(err => console.log(err));

 async function fetchImage(filenames){
    for(let filename of filenames){
        const response = await fetch(filename);
        const blob = await response.blob();
        const img = document.createElement('img');
        img.src = URL.createObjectURL(blob);
    
         
        document.body.append(img);
        console.log('hello')
      
         

    }



 }