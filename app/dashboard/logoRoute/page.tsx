"use client"

import React, { useState , useEffect , useRef } from 'react';
import "./logo.css"
import Londa from './londa';
import { renderCanvas } from './renderCanvas';
// Define the component to display the list of books (images)
const BookList: React.FC = () => {


 

    const [selectedImage, setSelectedImage] = useState<string | null>(null); // Track selected image
  
    // Handle the image click event
    const handleImageClick = (src: string) => {
      setSelectedImage(src); // Set the selected image
    };
  
    // Handle closing the zoomed image
    const closeImage = () => {
      setSelectedImage(null); // Reset selected image to null
    };

   
     // Initialize the canvas when the component mounts
  useEffect(() => {
    renderCanvas(); // Call the renderCanvas function to start the animation

    return () => {
      // Cleanup: any required code when the component unmounts
    };
  }, []);
    

    return (
    


      <div>
        {/* Canvas for the animation */}
<canvas id="canvas6"></canvas>

        {/* Display a modal with the clicked image */}
        {selectedImage && (
          <div className="modal" onClick={closeImage}>
            <img src={selectedImage} alt="Enlarged Book" className="zoomedImage" />
          </div>
        )}
 <h1 className="highlighted-text-shadow">
  Our<br />
  Designer's<br />
  Gallery<br />
  #GOOGENIX
</h1>


    <ul className='bookUl'>
      <li><img src="https://imgur.com/OB9JJH4.png" alt="Book 10"    onClick={() => handleImageClick("https://imgur.com/OB9JJH4.png")}  /></li>



      <li><img src="https://imgur.com/0qrc5zM.jpg" alt="Book 2"     onClick={() => handleImageClick("https://imgur.com/0qrc5zM.jpg")}/></li>



      <li><img src="https://imgur.com/7Ig7N6A.jpg" alt="Book 3"     onClick={() => handleImageClick("https://imgur.com/7Ig7N6A.jpg")}/></li>



      <li><img src="https://imgur.com/N3Lwjfj.jpg" alt="Book 4"     onClick={() => handleImageClick("https://imgur.com/N3Lwjfj.jpg")}/></li>


      <li><img src="https://imgur.com/ETBysDd.jpg" alt="Book 5"     onClick={() => handleImageClick("https://imgur.com/ETBysDd.jpg")}/></li>


      <li><img src="https://imgur.com/Rter0aT.jpg" alt="Book 6"     onClick={() => handleImageClick("https://imgur.com/Rter0aT.jpg")}/></li>


      <li><img src="https://imgur.com/psqFNsN.jpg" alt="Book 7"     onClick={() => handleImageClick("https://imgur.com/psqFNsN.jpg")}/></li>


      <li><img src="https://imgur.com/essMCqW.jpg" alt="Book 8"     onClick={() => handleImageClick("https://imgur.com/essMCqW.jpg")}/></li>


      <li><img src="https://imgur.com/8HS3B69.jpg" alt="Book 9"     onClick={() => handleImageClick("https://imgur.com/8HS3B69.jpg")}/></li>


      <li><img src="https://imgur.com/mUClPR5.jpg" alt="Book 1"     onClick={() => handleImageClick("https://imgur.com/mUClPR5.jpg")}/></li>


      <li><img src="https://imgur.com/KteCdfU.jpg" alt="Book 11"    onClick={() => handleImageClick("https://imgur.com/KteCdfU.jpg")}  /></li>


      <li><img src="https://imgur.com/QpzrzFX.jpg" alt="Book 13"    onClick={() => handleImageClick("https://imgur.com/QpzrzFX.jpg")}  /></li>


      <li><img src="https://imgur.com/gtDlPUD.jpg" alt="Book 12"    onClick={() => handleImageClick("https://imgur.com/gtDlPUD.jpg")}  /></li>


      <li><img src="https://imgur.com/mzDmQmU.jpg" alt="Book 14"    onClick={() => handleImageClick("https://imgur.com/mzDmQmU.jpg")}  /></li>


      <li><img src="https://imgur.com/I8vdqnM.jpg" alt="Book 15"    onClick={() => handleImageClick("https://imgur.com/I8vdqnM.jpg")}  /></li>


      <li><img src="https://imgur.com/XUksft8.jpg" alt="Book 16"    onClick={() => handleImageClick("https://imgur.com/XUksft8.jpg")}  /></li>


      <li><img src="https://imgur.com/nkVfd1e.jpg" alt="Book 17"    onClick={() => handleImageClick("https://imgur.com/nkVfd1e.jpg")}  /></li>


      <li><img src="https://imgur.com/WccL7qZ.jpg" alt="Book 18"    onClick={() => handleImageClick("https://imgur.com/WccL7qZ.jpg")}  /></li>


      <li><img src="https://imgur.com/DpxUBdl.jpg" alt="Book 19"    onClick={() => handleImageClick("https://imgur.com/DpxUBdl.jpg")}  /></li>


      <li><img src="https://imgur.com/08bpeg7.jpg" alt="Book 20"    onClick={() => handleImageClick("https://imgur.com/08bpeg7.jpg")}  /></li>


      <li><img src="https://imgur.com/EOLS3yT.jpg" alt="Book 21"    onClick={() => handleImageClick("https://imgur.com/EOLS3yT.jpg")}  /></li>


      <li><img src="https://imgur.com/zfY8Mtv.jpg" alt="Book 22"    onClick={() => handleImageClick("https://imgur.com/zfY8Mtv.jpg")}  /></li>


      <li><img src="https://imgur.com/sPRnnbp.jpg" alt="Book 23"    onClick={() => handleImageClick("https://imgur.com/sPRnnbp.jpg")}  /></li>


      <li><img src="https://imgur.com/w4okpVH.jpg" alt="Book 24"    onClick={() => handleImageClick("https://imgur.com/w4okpVH.jpg")}  /></li>


      <li><img src="https://imgur.com/UIe8pd7.jpg" alt="Book 25"    onClick={() => handleImageClick("https://imgur.com/UIe8pd7.jpg")}  /></li>


      <li><img src="https://imgur.com/Lt3AAV0.jpg" alt="Book 26"    onClick={() => handleImageClick("https://imgur.com/Lt3AAV0.jpg")}  /></li>


      <li><img src="https://imgur.com/94VMls4.jpg" alt="Book 27"    onClick={() => handleImageClick("https://imgur.com/94VMls4.jpg")}  /></li>


      <li><img src="https://imgur.com/XqqqK1a.jpg" alt="Book 28"    onClick={() => handleImageClick("https://imgur.com/XqqqK1a.jpg")}  /></li>


      <li><img src="https://imgur.com/gYUjNK3.jpg" alt="Book 29"    onClick={() => handleImageClick("https://imgur.com/gYUjNK3.jpg")}  /></li>


      <li><img src="https://imgur.com/heAgqkj.jpg" alt="Book 30"    onClick={() => handleImageClick("https://imgur.com/heAgqkj.jpg")}  /></li>


      <li><img src="https://imgur.com/XOFBpDr.jpg" alt="Book 31"    onClick={() => handleImageClick("https://imgur.com/XOFBpDr.jpg")}  /></li>


      <li><img src="https://imgur.com/lULOCgz.png" alt="Book 32"    onClick={() => handleImageClick("https://imgur.com/lULOCgz.png")}  /></li>


      <li><img src="https://imgur.com/6ncDGTp.jpg" alt="Book 33"    onClick={() => handleImageClick("https://imgur.com/6ncDGTp.jpg")}  /></li>


      <li><img src="https://imgur.com/CfDknLN.jpg" alt="Book 34"    onClick={() => handleImageClick("https://imgur.com/CfDknLN.jpg")}  /></li>


    </ul>
   
    </div>
    
    
  );
};

export default BookList;


