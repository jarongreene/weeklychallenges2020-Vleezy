// FIRST SLIDERS

var i = 0, images, time; //start
  images =['test_1.jpg','test_2.jpg','test_3.jpg','test_4.jpg'];
  time = 2000;

function changeImg(){
         document.slide.src = images[i];
        i++;
        if (i == images.length) { i = 0 };
        setTimeout("changeImg()", time);
    }
    changeImg();

// SECOND SLIDER

    var i = 0, images2, time2; //start
    images2 =['product_cookies/cookie_1.jpg','product_cookies/cookie_3.jpg','product_cookies/cookie_13.jpg','product_cookies/cookie_5.jpg'];
    time2 = 2000;
  
  function changeImg2(){
           document.slide2.src = images2[i];
          i++;
          if (i == images2.length) { i = 0; }
          setTimeout("changeImg2()", time2);
      }
      changeImg2();
  

//CONTACT_FORM VALIDATION


function VForm()                                    
{ 
    var name = document.forms["FormJS"]["Name"];               
    var email = document.forms["FormJS"]["Email"];     
   
    if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    }
       
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
    return true; }


  