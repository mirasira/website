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

function ToEnd(today, EndMinutes){
    EndHours = Math.floor(EndMinutes/60);
    EndMinutes = EndMinutes%60;
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

// TimeTabel Structure will be Weekday | Start | End | Subject

const TimeTable = [[1, 9*60+15, 10*60+45, "MPV"], [1, 11*60+0, 12*60+30, "ARO"], [1, 14*60+30, 16*60+0, "KOA"], [3, 9*60+0, 10*60+30, "SPD"], [3, 14*60+30, 16*60+0, "MPV"], [4, 9*60+15, 10*60+45, "ARO"], [4, 12*60+45, 14*60+15, "KOA"], [4, 16*60+15, 17*60+45, "SPD"], [3, 19*60+0, 20*60+30, "MPV"]] // , [3, 19*60+0, 20*60+30, "whaaaaaat???"]


window.setInterval(
    () => {
        const today = new Date();
        let weekday = today.getDay();
        IsClass = false;
        for (let i = 0; i < TimeTable.length; i++){
            if (TimeTable[i][0] == weekday){
                if (TimeTable[i][1] <= today.getHours()*60+today.getMinutes() && TimeTable[i][2] >= today.getHours()*60+today.getMinutes()){
                    // document.getElementById("Time").innerHTML = "<h1>" + TimeTable[i][3] + "</h1>";
                    document.getElementById("Time").innerHTML =ToEnd(today, TimeTable[i][2]);
                    document.getElementById("ClasName").innerHTML =TimeTable[i][3];
                    IsClass = true;
                    break;
                }else if (TimeTable[i][1] >= today.getHours()*60+today.getMinutes() && TimeTable[i][1]-15 <= today.getHours()*60+today.getMinutes()){
                    document.getElementById("Time").innerHTML = "Starts in "+ToEnd(today, TimeTable[i][1]);
                    document.getElementById("ClasName").innerHTML =TimeTable[i][3];
                    IsClass = true;
                    break;
                }
            }
        }

        if (!IsClass){
            document.getElementById("Time").innerHTML = "VOLNOOOOOOO";
            document.getElementById("ClasName").innerHTML = "";
        }

        // document.getElementById("Time").innerHTML = "<h1>" + ToEnd(today) + "</h1>";

    }
);