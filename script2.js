console.log("welcome to spotify");
var songIndex=0;
var audioelement=new Audio('songs/1.mp3');
var masterplay=document.getElementById('masterPlay');
var myprogressbar=document.getElementById('myProgressBar');
var gif=document.getElementById('gif');
var songItems=Array.from(document.getElementsByClassName('songitem'));//jitne bhi song items h wo ab milgye,
//ab unke andr ka img 
 var songs=[
    {sng:"song1",filepath:"songs/1.mp3",coverpath:"covers/1.jpg"},
    {sng:"song2",filepath:"songs/2.mp3",coverpath:"covers/2.jpg"},
    {sng:"song3",filepath:"songs/3.mp3",coverpath:"covers/3.jpg"},
    {sng:"song4",filepath:"songs/4.mp3",coverpath:"covers/4.jpg"},
    {sng:"song5",filepath:"songs/5.mp3",coverpath:"covers/5.jpg"},
 ]
 

 songItems.forEach(function(element,i) {    
    //console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].sng;
})



// ForEach Loop:
// The forEach loop is used for iterating over elements in an array.

// javascript

// const numbers = [0, 1, 2, 3, 4];
// numbers.forEach(function(number) {
//     console.log(number);
// });


masterplay.addEventListener('click',function(){
if(audioelement.paused||audioelement.currentTime<=0)
{
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
}
else
{
    audioelement.pause();
    masterplay.classList.remove('fa-pause-circle');
    masterplay.classList.add('fa-play-circle');
    gif.style.opacity=0;
}
})

//listen to events
audioelement.addEventListener('timeupdate',function(){
    //console.log('timeupdate');//progress bar aage peeche kheechoge toh time change hoga woh dikhega.
    //update seekbar
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    //console.log(progress);
    myprogressbar.value=progress;//perventage store horha h aur show horha h ki utna covered h.
})
myprogressbar.addEventListener('change',function(){
    audioelement.currentTime=(myprogressbar.value*audioelement.duration)/100;
})


    //
//BAAKI SAARE SONGS KO RPKNE K LIYE TAAKI BAAKI SAARE RUK JAE PAHLE WAALE AUR JISPR CLICK HUA H WO CHLE BS
//isko click krte hi saare songs ruk jaate h aur sbme mai play button show hot H
// FIR TURANT HI E.TARGET SE HUM JO BHI BUTTON CLICK HUA H JO KI 
//FUNCTION CLCIK MAI E K ROOP MAI PAAS HUA THA
//USME .TARGET USE KRKE PLAY CIRCLE KO HTAKR PAUSE CIRCLE ADD
//KRDETE H.

function makeAllPlays(){ 

Array.from(document.getElementsByClassName('songItemPlay')).forEach(function(element){
element.classList.remove('fa-pause-circle');
element.classList.add('fa-play-circle');
    })
}



//callback event listener k andr hota h.
//func k andr parameter pass hota h.

//kisi aur pr click krne se jo pahle chl rha tha wo ruk jaega.
//PLAY BUTTON DIKHJAEGA PURANE WAALE PR USKA MTLB H KI WO JO PAHLE SE CHL RHA THA WO AB PAUSED H.
Array.from(document.getElementsByClassName('songItemPlay')).forEach(function(element) 
{      
element.addEventListener('click',function(e){
//console.log(e.target);
makeAllPlays();
//CHL RHA H SONG.
songIndex=parseInt(e.target.id);
 e.target.classList.remove('fa-play-circle');
 e.target.classList.add('fa-pause-circle');
 audioelement.src = `songs/${songIndex+1}.mp3`;//BACKTICKS H TO LIBERATE TEMPERATE LIBERALS.
 audioelement.currentTime=0;
 audioelement.play();
 masterplay.classList.remove('fa-play-circle');
 masterplay.classList.add('fa-pause-circle');
//GANA PLAY HOGA TB JO BUTTON H NEECHE MASTERCLASS MAI WO BHI CHANGE HOJAENGE.ISILIYE LAST KI 2 LINES LIKHI H.
})
})

document.getElementById('forward').addEventListener('click',   function(){
    if(songIndex>5)
    {
songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioelement.src = `songs/${songIndex+1}.mp3`;//BACKTICKS H TO LIBERATE TEMPERATE LIBERALS.
 audioelement.currentTime=0;
 audioelement.play();
 masterplay.classList.remove('fa-play-circle');
 masterplay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',   function(){
    if(songIndex<=0)
    {
songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioelement.src = `songs/${songIndex+1}.mp3`;//BACKTICKS H TO LIBERATE TEMPERATE LIBERALS.
 audioelement.currentTime=0;
 audioelement.play();
 masterplay.classList.remove('fa-play-circle');
 masterplay.classList.add('fa-pause-circle');
})

 
//click callback func ko activate krdeta h aur e wo button isne click receive kiya.
 //e.target gives the whole id whichever button was clicked.
 //e .target se wo element mil jaega jispr click hua h.


 // makeAllPlays Function:
 //dusra waala play krrhe toh
//  Purpose: This function is intended to operate on 
//  all elements
// with the class 'songItemPlay',
//  not just the element that triggered the event.
//  Implementation: Since it is designed to work on all elements, 
//  it doesn't need to reference the specific target element. 
//  It uses element directly in the forEach loop, which represents 
//  each element with the class 'songItemPlay' one by one.


// Click Event Listener:
// Purpose: This event listener is responding to a click event on a specific element
// with the class 'songItemPlay'.
// Implementation: Here, e.target is used to refer to the
// specific element that triggered
// the click event. The click event is attached to each element 
//  with the class 'songItemPlay', and e.target allows you to perform actions specifically
// on the clicked element.


// how are we accesung all the songs using $ is it the part of jquery?
// ChatGPT
// No, the use of $ in the line audioelement.src='songs/$(index).mp3'; is not related to jQuery. It looks like a mistake in the code. If you intend to use the variable index in a string in JavaScript, you should use template literals, denoted by backticks (``), not single quotes ('') or double quotes ("").
 
// Here's the corrected line:

// javascript

// audioelement.src = `songs/${index}.mp3`;

// In this corrected line, ${index} is part of a template literal, and it allows you to embed the value of the index variable directly into the string. This is a feature of ECMAScript 6 (ES6) and later versions of JavaScript.

// If you use single quotes or double quotes, like in your original code, it will treat it as a plain string and not substitute the value of index:

// javascript

// // Incorrect, will treat it as a plain string
// audioelement.src = 'songs/$(index).mp3';

// // Correct, will substitute the value of index using template literals
// audioelement.src = `songs/${index}.mp3`;

// Make sure you use the correct syntax to achieve the desired behavior in your JavaScript code.