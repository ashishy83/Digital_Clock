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

      if(hrs<=8 && ampm=="AM"){
        messageTwo.innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
      }
    
      else if (hrs>=12 && hrs<=16 && ampm=="PM"){
        messageTwo.innerHTML = "LET'S HAVE SOME LUNCH !!";
      }
      else if (hrs>16 && hrs<=19 && ampm=="PM"){
        messageTwo.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
      }

      else if (hrs>=20 && hrs<=23 && ampm=="PM"){
        messageTwo.innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
      }

      if (hrs > 12) {
            hrs -= 12
        }
    
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
    document.getElementById("wakeTime").innerText = dd1.options[dd1.selectedIndex].innerHTML;
    document.getElementById("luchTime").innerText = dd2.options[dd2.selectedIndex].innerHTML;
    document.getElementById("napTime").innerText = dd3.options[dd3.selectedIndex].innerHTML;
    document.getElementById("nightTime").innerText = dd4.options[dd4.selectedIndex].innerHTML;

    let time = new Date();
    let hourhand = time.getHours(); 
    let wakeupTimeArr=dd1.value;
    let lunchTimeArr=dd2.value;
    let napTimeArr =dd3.value;
    let nightTimeArr=dd4.value;

    if(wakeupTimeArr==hourhand){
        messageOne.innerHTML = "GOOD MORNING!! WAKE UP !!";
        image.style.backgroundImage = "URL('Component30.png')";    
    }
    else if(lunchTimeArr==hourhand){
        messageOne.innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
        image.style.backgroundImage = "URL('Component_31.jpg')";
    }
    else if(napTimeArr==hourhand){
        messageOne.innerText="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        image.style.backgroundImage = "URL('lunch_image.png')";    
    }
    else if(nightTimeArr==hourhand){
        messageOne.innerText="CLOSE YOUR EYES AND GO TO SLEEP";
        image.style.backgroundImage = "URL('Component_32.png')";     
    }
    else{
        messageOne.innerText="Select time & set alarm ";
        image.style.backgroundImage = "url('random.jpg')";
        image.style.backgroundSize = "contain";
    }
   
});