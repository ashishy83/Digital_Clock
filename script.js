


function numberFormat(n){
    return n > 9 ? "" + n: "0" + n;
}
let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let messageOne = document.getElementById("messageOne");
let messageTwo = document.getElementById("notification");
let image = document.getElementById("big-img");
let am = document.getElementById("meridian");


function timerfn(){

    let date = new Date();
    let hrs = date.getHours();
    let mint = date.getMinutes();
    let secs = date.getSeconds();
    let ampm = hrs >=12 ? "PM" : "AM";
    
    if (hrs>=12 && hrs<=16 && ampm=="PM"){
        messageOne.innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
        messageTwo.innerHTML = "LET'S HAVE SOME LUNCH !!";
        image.style.backgroundImage = "URL('Component_31.jpg')";
      }
      else if (hrs>16 && hrs<=19 && ampm=="PM"){
        messageOne.innerHTML = "GOOD EVENING !!";
        messageTwo.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
        image.style.backgroundImage = "URL('lunch_image.png')";
      }

      else if (hrs>=20 && hrs<=23 && ampm=="PM"){
        messageOne.innerText = "GOOD NIGHT !!";
        messageTwo.innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
        image.style.backgroundImage = "URL('Component_32.png')";
      }

      if (hrs > 12) {
            hrs -= 12
        }
      // if(hrs == 12){
      //   hrs = 12;
      // }
   
    hr.innerText = `${numberFormat(hrs)}`;
    min.innerText =`${numberFormat(mint)}`;
    sec.innerText = `${numberFormat(secs)}`;
    am.innerText = `${ampm}`;
    
    setTimeout(timerfn,1000);
};

timerfn();


let setAlarm = document.getElementById("alarmBtn");
setAlarm.addEventListener("click",function(){
    setAlarm.style.border = "groove red";
    let dd1 = document.getElementById("dd1");
    let dd2 = document.getElementById("dd2");
    let dd3 = document.getElementById("dd3");
    let dd4 = document.getElementById("dd4");

    let wakeTime = document.getElementById("wakeTime");
    wakeTime.innerText = dd1.options[dd1.selectedIndex].innerHTML;
   
    let luchTime = document.getElementById("luchTime");
    luchTime.innerText = dd2.options[dd2.selectedIndex].innerHTML;

    let napTime = document.getElementById("napTime");
    napTime.innerText = dd3.options[dd3.selectedIndex].innerHTML;

    let nightTime = document.getElementById("nightTime");
    nightTime.innerText = dd4.options[dd4.selectedIndex].innerHTML;


});

// function timerfn(){

//     let date = new Date();
//     let hrs = date.getHours();
//     // let min = date.getMinutes();
//     // let sec = date.getSeconds();
    
//     if(hrs >= 12){
//         let am = document.getElementById("meridian");
//         am.innerText = "PM"
//     }
//     // else if(hr >= 0 && hr < 8){
        
//     // messageOne.innerText = "GOOD NIGHT !!";
//     // messageTwo.innerText = "CLOSE YOUR EYES AND GO TO SLEEP"
//     // image.style.backgroundImage = "URL('Component_32.png')";
//     // }

//     // else if(hr > 12 && hr <=16 && min >1){
//     // messageOne.innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP";
//     // messageTwo.innerText = "LET'S HAVE SOME LUNCH !!";
//     // image.style.backgroundImage = "URL('Component_31.jpg')";
//     // }

//     // else if(hr > 16 && hr <=19){
//     // messageOne.innerText = "GOOD EVENING !!";
//     // messageTwo.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
//     // image.style.backgroundImage = "URL('lunch_image.png')";
//     // }


//     else{
//         let am = document.getElementById("meridian");
//         am.innerText = "AM"
//     }
//     return `${numberFormat(hrs)}`  //`${numberFormat(min)}` `${numberFormat(sec)}`;
    

// };
// setInterval(function(){
//         hour.innerText = timerfn();
//         // min.innerText = timerfn();
//         // sec.innerText = timerfn();
//      },1000);




// function timerfn1(){
//     let date = new Date();
//     let mint = date.getMinutes();
//     return `${numberFormat(mint)}`;
// };

// setInterval(function(){
//     min.innerText = timerfn1();
// },1000);

// function timerfn2(){
//     let date = new Date();
//     let secs = date.getSeconds();
//     return `${numberFormat(secs)}`;
// };

// setInterval(function(){
//     sec.innerText = timerfn2();
// },1000);
   



