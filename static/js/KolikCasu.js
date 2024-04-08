function ToDate(today){

    let Hours = String(today.getHours());
    let Minutes = String(today.getMinutes());
    let Seconds = String(today.getSeconds());
    if (Hours.length == 1){
        Hours = "0" + Hours
    }
    if (Minutes.length == 1){
        Minutes = "0" + Minutes
    }
    if (Seconds.length == 1){
        Seconds = "0" + Seconds
    }

    return Hours +":"+Minutes+":"+Seconds
}

function ToEnd(today){
    EndHours = 10;
    EndMinutes = 45;
    EndSeconds = 0;

    minus = false;
    Diff = EndHours*3600+EndMinutes*60+EndSeconds-today.getHours()*3600-today.getMinutes()*60-today.getSeconds();
    if (Diff < 0){
        minus = true;
    }

    HoursDiff = Diff/3600;
    if (HoursDiff < 0){
        HoursDiff = Math.ceil(HoursDiff);
    }else{
        HoursDiff = Math.floor(HoursDiff);
    }
    MinutesDiff = (Diff-HoursDiff*3600)/60;
    if (MinutesDiff < 0){
        MinutesDiff = Math.ceil(MinutesDiff);
    }else{
        MinutesDiff = Math.floor(MinutesDiff);
    }

    SecondsDiff = (Diff-HoursDiff*3600-MinutesDiff*60);
    
    if (SecondsDiff < 0){
        SecondsDiff = Math.ceil(SecondsDiff);
    }else{
        SecondsDiff = Math.floor(SecondsDiff);
    }


    let Hours = String(Math.abs(HoursDiff));
    let Minutes = String(Math.abs(MinutesDiff));
    let Seconds = String(Math.abs(SecondsDiff));
    if (Hours.length == 1){
        Hours = "0" + Hours
    }
    if (Minutes.length == 1){
        Minutes = "0" + Minutes
    }
    if (Seconds.length == 1){
        Seconds = "0" + Seconds
    }

    if (minus){
        return "-"+Hours +":"+Minutes+":"+Seconds
    }
    return Hours +":"+Minutes+":"+Seconds

}

window.setInterval(
    () => {
        const today = new Date();
        document.getElementById("Time").innerHTML = "<h1>" + ToEnd(today) + "</h1>";

    }
);