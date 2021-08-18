



window.onscroll=function(){
   console.log(window.pageYOffset); // will give me a scroll value for scroll down /up  //

}


//.1. it will start at 199. once it reach this one it will start to change //

window.onscroll = function(){
    //js for Header popup //

    if(window.pageYOffset > 196) {
        document.getElementById('nav-parent').style.position ='fixed';
        document.getElementById('nav-parent').style.left =0;
        document.getElementById('nav-parent').style.backgroundColor ='white';
        document.getElementById('nav-parent').style.top =0;  
        document.getElementById('nav-parent').style.marginTop =0;
        document.getElementById('nav').style.width ='62%';
        document.getElementById('nav').style.color ='black'; 
        document.getElementById('nav1').style.color='#0473ab';
           
   }
    // if I am below 199, make it to its orginal normal property //
    else {
         document.getElementById('nav-parent').style.position ='static'; 
       
        document.getElementById('nav-parent').style.backgroundColor ='transparent';
      
        document.getElementById('nav-parent').style.marginTop ='30px';
        document.getElementById('nav').style.width ='100%';
        document.getElementById('nav').style.color ='white'; 

     
    }


    // the shadow  will appear on the destination part //

    if(window.pageYOffset > 750) {
        document.getElementById('nav-parent').style.boxShadow='0 1px 5px #d5d5d5';
    }
    else {
 document.getElementById('nav-parent').style.boxShadow='none';
    }

//2. For back to top popup for id=btt//

  if(window.pageYOffset > 520) {
      //console.log('btt');
      document.getElementById('btt').style.transform="translateY(0)";
   
    
  }
 else{
   document.getElementById('btt').style.transform="translateY(15vh)";
 }

 //code to go back to top

 let scrollValue;

 //step2
 function scrollToTop(){
         window.scrollTo(0,scrollValue);  
         if(scrollValue>0){  
             scrollValue-=50; 
         
         }
         else {
                     
             cancelAnimationFrame(animation);  
         
         }
             

         let animation= requestAnimationFrame(scrollToTop);
          
 }

 //step1.
 document.getElementById('btt').addEventListener("click",function(){

    scrollValue=window.pageYOffset;   
    scrollToTop();
   
 })


// hidding and showing mobile menu/nav  //


let mobNavStatus=false;  //means it is hidden from the page

document.getElementById('menu-lines').onclick=function(){
   console.log("hello");  //to test the click


   //step 2.1
   if(mobNavStatus===false){   //step2
  document.getElementById('mob-nav').style.marginLeft='0'; 

   mobNavStatus=true;

 document.getElementById('line2').style.opacity="0"


document.getElementById('line1').style.transform="rotateZ(45deg) translateY(10px) translateX(10px)";
document.getElementById('line3').style.transform="rotateZ(-45deg) translateY(-2px) translateX(3px)";

 }
 
  else{
        document.getElementById('mob-nav').style.marginLeft='-65%';  
        //step2 ,it is shown now and want to close it on next click, and make it false
         mobNavStatus=false;
         
         //step3, to  line2 will come again
document.getElementById('line2').style.opacity="1"

//step4. to get it back to the 3 lines
 document.getElementById('line1').style.transform="rotateZ(0deg)";
document.getElementById('line3').style.transform="rotateZ(0deg)";

 }


   }

   // hidding and showing mobile mob-child the callus info  //

let mobchildStatus=false;  //means it is hidden from the page

   //step1
document.getElementById('menu-dots').onclick=function(){
   console.log("hello");  //to test the click

   if(mobchildStatus===false){   //step2
  document.getElementById('mob-child').style.marginLeft='40%';

   mobchildStatus=true;
}
 else{
        document.getElementById('mob-child').style.marginLeft='-70%';  
         
       
         mobchildStatus=false;
  
}

}

}

   

















