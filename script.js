const countDown =()=>{
    const countDate= new Date("May 26, 2022 09:00:00").getTime();
    const now= new Date().getTime();
    const gap = countDate-now;
    //how the time does work
    const second = 1000;
    const minute = 60*second;
    const hour = 60*minute;
    const day = 24*hour;
    // collect the days
    const textDay = Math.floor(gap/day);
    const textHour = Math.floor((gap%day)/hour);
    const textMinut = Math.floor((gap%hour)/minute);
    const textSecond = Math.floor((gap%minute)/second);
    document.querySelector(".day").innerHTML= textDay;
    document.querySelector(".hour").innerHTML= textHour;
    document.querySelector(".minute").innerHTML= textMinut;
    document.querySelector(".second").innerHTML= textSecond;
   
}

setInterval(countDown,1100);
