function displayTime()
{
    // console.log("JavaScript is Live");
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    
    var session = document.getElementById('sessions');

    if(hrs>=12)
    {
        session.innerHTML = 'PM'

    }
    else 
    {
            session.innerHTML = 'AM'
    }

    if(hrs>=6 && hrs<11)
    {
        const Greeting = document.getElementsByClassName('MSG')[0];
        Greeting.innerHTML = " GRAB SOME HEALTHY BREAKFAST"
        console.log ("GRAB SOME HEALTHY BREAKFAST!!!")
    }

    if(hrs>=11 && hrs<15)
    {
        const Greeting = document.getElementsByClassName('MSG')[0];
        Greeting.innerHTML = " LET`S HAVE SOME LUNCH..!"
        console.log ("LET'S HAVE SOME LUNCH !!")
    }

    if(hrs>=15 && hrs<19)
    {
        const Greeting = document.getElementsByClassName('MSG')[0];
        Greeting.innerHTML = " STOP YAWNING, GET SOME TEA...!"
        console.log ("STOP YAWNING, GET SOME TEA !")
    }

    if(hrs>=19 && hrs<24)
    {
        const Greeting = document.getElementsByClassName('MSG')[0];
        Greeting.innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP"
    }

    if(hrs>=1 && hrs<6)
    {
        const Greeting = document.getElementsByClassName('MSG')[0];
        Greeting.innerHTML = " GOOD NIGHT"
        console.log ("GOOD NIGHT...!")
    }

   
    if(hrs>12)
    {
        hrs-=12;
        PMAM ="PM";
    }
     if(hrs<10)
    {
        hrs="0" +hrs;
       
    }
    if(min<10)
    {
        min="0" +min;
    }
    if(sec<10)
    {
        sec="0" +sec;
    }
    document.getElementById('hours').innerHTML =hrs;
    document.getElementById('minutes').innerHTML =min;
    document.getElementById('seconds').innerHTML =sec;
}
 
setInterval(displayTime,1000);
function callme()
{
  
    let mornText = document.getElementById('mornText')
    let image =document.getElementById('img')
    let Morning =document.getElementById('Morning')
    let Afternoon =document.getElementById('Afternoon')
    let Evening =document.getElementById('Evening')
    let Night =document.getElementById('Night')
    let wake = Morning.options[document.getElementById ('Morning').selectedIndex];
    let lunch = Morning.options[document.getElementById ('Afternoon').selectedIndex];
    let nap = Morning.options[document.getElementById ('Evening').selectedIndex];
    let night = Morning.options[document.getElementById ('Night').selectedIndex];

    let TEXT = document.getElementsByClassName('TEXT')

    TEXT[0].innerText=`Wake Up Time: ${wake.text}`;
    TEXT[1].innerText=`Lunch Time: ${lunch.text}`;
    TEXT[2].innerText=`Nap Time: ${nap.text}`;
    TEXT[3].innerText=`Night Time: ${night.text}`;

    let time = new Date();
    let hrs = time.getHours();
    if(hrs === parseInt(Morning.value))
    {
        mornText.innerText = 'GOOD MORNING !! WAKE UP !!';
        image.src = './morning.svg';
    }

    else if(hrs === parseInt(Afternoon.value))
    {
        mornText.innerText = 'GOOD AFTERNOON !! TAKE SOME SLEEP';
        image.src = './group.svg';
    }

    else if(hrs === parseInt(Evening.value))
    {

        mornText.innerText = 'GOOD EVENING !!';
        image.src = './goodeve.jpg';
    }

    else if(hrs === parseInt(Night.value))
    {
    
        mornText.innerText = 'GOOD NIGHT  !!';
        image.src = './goodnight_image.svg';
    }
}
// function party()
// {
//     // console.log("Working");
//     document.getElementById("BUTTON").innerHTML="Party Time !"
//     document.getElementById("BUTTON").style.backgroundImage = "linear-gradient(to right, #FC5EFF, #6E54EC)";
//     document.getElementById("BUTTON").style.fontSize = "20px"
//     document.getElementById("BUTTON").style.fontWeight = "bold"
// }
// function set()
// {
//     // console.log("w");
//     document.getElementById("BUTTON").innerHTML="Set Alarm"
//     document.getElementById("BUTTON").style.backgroundImage = "linear-gradient(to right,#6E54EC, #FC5EFF )";
//     document.getElementById("BUTTON").style.fontSize = "20px"
//     document.getElementById("BUTTON").style.fontWeight = "bold"
// }