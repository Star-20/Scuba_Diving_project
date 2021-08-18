// When I scroll down the page, the header will show off and the naviation (home,pages,blog...)color will look black and on the hover effect, they change the color to the :#0473ab; . Do that I must give ID to the header, and count the scroll down number //

//this one will give me a scroll value/count when i start to scroll the page. we cansee the result on the inspect >>console part . Scroll up/down will be 'Y' and scroll right/left will be 'X' //



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
        document.getElementById('nav-parent').style.top =0;  //this helps not to go down so fast //
        document.getElementById('nav-parent').style.marginTop =0;
        document.getElementById('nav').style.width ='62%';
        document.getElementById('nav').style.color ='black'; //for the text color //
        document.getElementById('nav1').style.color='#0473ab';
           
   }
    // if I am below 199, make it to its orginal normal property //
    else {
         document.getElementById('nav-parent').style.position ='static'; //mean no position //
        // document.getElementById('nav-parent').style.left =0;
        document.getElementById('nav-parent').style.backgroundColor ='transparent';
       // document.getElementById('nav-parent').style.top =0;  //this helps not to go down so fast //
        document.getElementById('nav-parent').style.marginTop ='30px';
        document.getElementById('nav').style.width ='100%';
        document.getElementById('nav').style.color ='white'; //for the text color //

     
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
      //so at this point it will show up on the top/orginal position  //
    
  }
 else{
   document.getElementById('btt').style.transform="translateY(15vh)";
 }

 //code to go back to top

 let scrollValue;

 //step2
 function scrollToTop(){
         window.scrollTo(0,scrollValue);  //ex:the value is 500
         if(scrollValue>0){  //the value is still 500
             scrollValue-=50; ///reduis the value by 30, l(500-50=450)
         
         }
         else {
                     
             cancelAnimationFrame(animation);  //at value=0, then the else is called cuz we dont need it //
         
         }
             

         let animation= requestAnimationFrame(scrollToTop);
          //call the function till it reach  500,450,400..toExponential.apply. 0 //

 }

 //step1.
 document.getElementById('btt').addEventListener("click",function(){

    scrollValue=window.pageYOffset;   //the value will be what the current value the scroll the page have . ex:it it is 500, then the scrollvalue=500//
    scrollToTop();
    //  window.scrollTo(0,0)
     //this x,y. but on x we dont want to scrool any thing to horizontaly, only on Y which is veritricaly we can scroll to top.so it is zero //
     
 })


// hidding and showing mobile menu/nav  //

//step2 on click after step1 it must gone, add var

let mobNavStatus=false;  //means it is hidden from the page

// step1 on click the menu-lines, we will perform this task
document.getElementById('menu-lines').onclick=function(){
   console.log("hello");  //to test the click


   //step 2.1
   if(mobNavStatus===false){   //step2
  document.getElementById('mob-nav').style.marginLeft='0'; 
  //it was given -65% to hide it  and give 0 will show up and make it true which is the to visible ,step1
   mobNavStatus=true;

   //step3, to make the line2 too trasparent and will not show up
document.getElementById('line2').style.opacity="0"

//step4. to rotate line1 and line3
//4.1 to rotate and translate them
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
//step2 on click after step1 it must gone, add var

let mobchildStatus=false;  //means it is hidden from the page

   //step1
document.getElementById('menu-dots').onclick=function(){
   console.log("hello");  //to test the click

   if(mobchildStatus===false){   //step2
  document.getElementById('mob-child').style.marginLeft='40%';
  //it was given -50% to hide it and 50% will show up and make it true which is the to visible ,step1 

  //it was given -50% to hide it and 50% will show up and make it true which is the to visible ,step1
   mobchildStatus=true;
}
 else{
        document.getElementById('mob-child').style.marginLeft='-70%';  
        //step2 ,it is shown now and want to close it on next click, and make it false
       
         mobchildStatus=false;
  
}

}

}

   

















