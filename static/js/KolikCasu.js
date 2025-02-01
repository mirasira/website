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

// const TimeTable = [[1, 9*60+15, 10*60+45, "MPV"], [1, 11*60+0, 12*60+30, "ARO"], [1, 14*60+30, 16*60+0, "KOA"], [3, 9*60+0, 10*60+30, "SPD"], [3, 14*60+30, 16*60+0, "MPV"], [4, 9*60+15, 10*60+45, "ARO"], [4, 12*60+45, 14*60+15, "KOA"], [4, 16*60+15, 17*60+45, "SPD"], [3, 19*60+0, 20*60+30, "MPV"]] // , [3, 19*60+0, 20*60+30, "whaaaaaat???"]
// const TimeTable = [[1, 11*60, 12*60+30, "UIR"], [1, 12*60+45, 14*60+15, "UIR"], [1, 14*60+30, 16*60, "SPE"], [2, 12*60+45, 14*60+15, "SPE"], [2, 16*60+15, 17*60+45, "TDV"], [3, 11*60+0, 12*60+30, "TDV"], [3, 18*60+0, 19*60+30, "Bouldering"], [4, 9*60+15, 10*60+45, "N3"], [4, 11*60+0, 12*60+30, "GRT"], [4, 12*60+45, 14*60+15, "GRT"]]
const TimeTable = [[], [], [], [], [], [], []]


urls = [["Hans-Ulrich Rudel", "https://cs.wikipedia.org/wiki/Hans-Ulrich_Rudel"], ["Fainting goat", "https://en.wikipedia.org/wiki/Fainting_goat"], ["Sonoluminescence", "https://en.wikipedia.org/wiki/Sonoluminescence"], ["Cotylorhynchus", "https://en.wikipedia.org/wiki/Cotylorhynchus"], ["Jiraiya", "https://en.wikipedia.org/wiki/Jiraiya"], ["Jacob sheep", "https://en.wikipedia.org/wiki/Jacob_sheep"], ["Spectral color", "https://en.wikipedia.org/wiki/Spectral_color#Extra-spectral_colors"], ["Neotenie", "https://cs.wikipedia.org/wiki/Neotenie"], ["Ferrocerium", "https://en.wikipedia.org/wiki/Ferrocerium#:~:text=Ferrocerium%20(also%20known%20in%20Europe,of%20iron%20and%20%2F%20or%20magnesium."], ["Marvin Heemeyer", "https://en.wikipedia.org/wiki/Marvin_Heemeyer"], ["Lepovkovití", "https://cs.wikipedia.org/wiki/Lepovkovit%C3%AD"], ["Jack Churchill", "https://en.wikipedia.org/wiki/Jack_Churchill"], ["Tarrare", "https://en.wikipedia.org/wiki/Tarrare"], ["List of longest-living organisms", "https://en.wikipedia.org/wiki/List_of_longest-living_organisms"], ["Otto Lilienthal", "https://cs.wikipedia.org/wiki/Otto_Lilienthal"], ["Sonderkommando Elbe", "https://en.wikipedia.org/wiki/Sonderkommando_Elbe"], ["Hitch (knot)", "https://en.wikipedia.org/wiki/Hitch_(knot)"], ["Hemiceratoides hieroglyphica", "https://en.wikipedia.org/wiki/Hemiceratoides_hieroglyphica#:~:text=Hemiceratoides%20hieroglyphica%20is%20a%20moth,specialized%2C%20harpoon%2Dlike%20proboscis."], ["Namaqua sandgrouse", "https://en.wikipedia.org/wiki/Namaqua_sandgrouse"], ["Ubre Blanca", "https://en.wikipedia.org/wiki/Ubre_Blanca"], ["Strophurus taenicauda", "https://en.wikipedia.org/wiki/Strophurus_taenicauda"], ["Rat-tailed maggot", "https://en.wikipedia.org/wiki/Rat-tailed_maggot"], ["Kuru", "https://cs.wikipedia.org/wiki/Kuru"], ["Triboluminescence", "https://en.wikipedia.org/wiki/Triboluminescence"], ["Pythium oligandrum", "https://cs.wikipedia.org/wiki/Pythium_oligandrum"], ["Japanese folktales", "https://en.wikipedia.org/wiki/Japanese_folktales"], ["Crushing (execution)", "https://en.wikipedia.org/wiki/Crushing_(execution)"], ["Shakespeare (programovací jazyk)", "https://cs.wikipedia.org/wiki/Shakespeare_(programovac%C3%AD_jazyk)"], ["Fu-Go balloon bomb", "https://en.wikipedia.org/wiki/Fu-Go_balloon_bomb"], ["Taikyoku shogi", "https://en.wikipedia.org/wiki/Taikyoku_shogi#:~:text=Taikyoku%20sh%C5%8Dgi%20(Japanese%3A%20%E5%A4%A7%E5%B1%80%E5%B0%86%E6%A3%8B,earlier%20large%20board%20shogi%20games."], ["Ezoterický programovací jazyk", "https://cs.wikipedia.org/wiki/Ezoterick%C3%BD_programovac%C3%AD_jazyk#OstraJAVA"], ["Adrian Carton de Wiart", "https://en.wikipedia.org/wiki/Adrian_Carton_de_Wiart"], ["Shepherd's leap", "https://en.wikipedia.org/wiki/Shepherd%27s_leap"], ["Adenotrophic viviparity", "https://en.wikipedia.org/wiki/Adenotrophic_viviparity"], ["Dahala Khagrabari", "https://en.wikipedia.org/wiki/Dahala_Khagrabari"], ["Shirime", "https://en.m.wikipedia.org/wiki/Shirime"], ["Mystacinobia zelandica", "https://cs.wikipedia.org/wiki/Mystacinobia_zelandica"], ["Hydnora", "https://cs.wikipedia.org/wiki/Hydnora"], ["Rúp Kund", "https://cs.wikipedia.org/wiki/R%C3%BAp_Kund"], ["Portia (rod)", "https://cs.wikipedia.org/wiki/Portia_(rod)"], ["Kloš jelení", "https://cs.wikipedia.org/wiki/Klo%C5%A1_jelen%C3%AD"], ["List of light sources", "https://en.wikipedia.org/wiki/List_of_light_sources"], ["Common Surinam toad", "https://en.wikipedia.org/wiki/Common_Surinam_toad"], ["Neoteny in humans", "https://en.wikipedia.org/wiki/Neoteny_in_humans"], ["Wallace Line", "https://en.wikipedia.org/wiki/Wallace_Line"], ["Contest to kill 100 people using a sword", "https://en.wikipedia.org/wiki/Contest_to_kill_100_people_using_a_sword"], ["Toxic bird", "https://en.wikipedia.org/wiki/Toxic_bird"], ["Cecílie kroužkovaná", "https://cs.wikipedia.org/wiki/Cec%C3%ADlie_krou%C5%BEkovan%C3%A1"], ["Channichthyidae", "https://en.wikipedia.org/wiki/Channichthyidae"], ["Euthalia aconthea", "https://en.wikipedia.org/wiki/Euthalia_aconthea"], ["Pláštěnci", "https://cs.wikipedia.org/wiki/Pl%C3%A1%C5%A1t%C4%9Bnci"], ["Zavíječ voskový", "https://cs.wikipedia.org/wiki/Zav%C3%ADje%C4%8D_voskov%C3%BD"], ["Stromatolit", "https://cs.wikipedia.org/wiki/Stromatolit"], ["Carbonate–silicate cycle", "https://en.wikipedia.org/wiki/Carbonate%E2%80%93silicate_cycle#:~:text=The%20carbonate%E2%80%93silicate%20geochemical%20cycle,rocks%20by%20metamorphism%20and%20volcanism."], ["Operace Northwoods", "https://cs.wikipedia.org/wiki/Operace_Northwoods"], ["List of legendary creatures from Japan", "https://en.wikipedia.org/wiki/List_of_legendary_creatures_from_Japan"], ["Dictamnus albus", "https://en.wikipedia.org/wiki/Dictamnus_albus"], ["Mansfield Smith-Cumming", "https://en.wikipedia.org/wiki/Mansfield_Smith-Cumming"], ["Project Orion (nuclear propulsion)", "https://en.wikipedia.org/wiki/Project_Orion_(nuclear_propulsion)"], ["Solifugy", "https://cs.wikipedia.org/wiki/Solifugy"], ["Anti-predator adaptation", "https://en.wikipedia.org/wiki/Anti-predator_adaptation"], ["Svijonožci", "https://cs.wikipedia.org/wiki/Svijono%C5%BEci"], ["Naegleria fowleri", "https://cs.wikipedia.org/wiki/Naegleria_fowleri"], ["Earthquake light", "https://en.wikipedia.org/wiki/Earthquake_light"], ["Crash at Crush", "https://en.wikipedia.org/wiki/Crash_at_Crush"], ["Látky vzbuzující mimořádné obavy", "https://cs.wikipedia.org/wiki/L%C3%A1tky_vzbuzuj%C3%ADc%C3%AD_mimo%C5%99%C3%A1dn%C3%A9_obavy"], ["Pralesnička strašná", "https://cs.wikipedia.org/wiki/Pralesni%C4%8Dka_stra%C5%A1n%C3%A1"]]


function getDateWeek(date) {
    const currentDate = 
        (typeof date === 'object') ? date : new Date();
    const januaryFirst = 
        new Date(currentDate.getFullYear(), 0, 1);
    const daysToNextMonday = 
        (januaryFirst.getDay() === 1) ? 0 : 
        (7 - januaryFirst.getDay()) % 7;
    const nextMonday = 
        new Date(currentDate.getFullYear(), 0, 
        januaryFirst.getDate() + daysToNextMonday);
 
    return (currentDate < nextMonday) ? 52 : 
    (currentDate > nextMonday ? Math.ceil(
    (currentDate - nextMonday) / (24 * 3600 * 1000) / 7) : 1);
}

const today1 = new Date();
const weekNumber = getDateWeek(today1);
document.getElementById("FunFact").innerHTML = "<a href='"+urls[weekNumber-1][1]+"'>"+urls[weekNumber-1][0]+"</a>";


const pastFunFacts = document.querySelector(".PastFunFacts tbody");

// urls.forEach((url, index) => {
//     if (index < weekNumber - 1) {
//         const row = document.createElement("tr");
//         const sourceCell = document.createElement("td");
//         const factCell = document.createElement("td");
//         const linkCell = document.createElement("td");
//         const link = document.createElement("a");

//         sourceCell.textContent = url[0];
//         factCell.textContent = `Interesting fact about ${url[0]}`;
//         link.href = url[1];
//         link.textContent = "Link";

//         linkCell.appendChild(link);
//         row.appendChild(sourceCell);
//         row.appendChild(factCell);
//         row.appendChild(linkCell);
//         pastFunFacts.appendChild(row);
//     }
// });

window.setInterval(
    () => {
        // const today = new Date();
        // let weekday = today.getDay();
        // IsClass = false;
        // for (let i = 0; i < TimeTable.length; i++){
        //     if (TimeTable[i][0] == weekday){
        //         if (TimeTable[i][1] <= today.getHours()*60+today.getMinutes() && TimeTable[i][2] >= today.getHours()*60+today.getMinutes()){
        //             // document.getElementById("Time").innerHTML = "<h1>" + TimeTable[i][3] + "</h1>";
        //             document.getElementById("Time").innerHTML =ToEnd(today, TimeTable[i][2]);
        //             document.getElementById("ClasName").innerHTML =TimeTable[i][3];
        //             IsClass = true;
        //             break;
        //         }else if (TimeTable[i][1] >= today.getHours()*60+today.getMinutes() && TimeTable[i][1]-15 <= today.getHours()*60+today.getMinutes()){
        //             document.getElementById("Time").innerHTML = "Starts in "+ToEnd(today, TimeTable[i][1]);
        //             document.getElementById("ClasName").innerHTML =TimeTable[i][3];
        //             IsClass = true;
        //             break;
        //         }
        //     }
        // }
        IsClass = false;
        if (!IsClass){
            document.getElementById("Time").innerHTML = "ZKOUŠKYYYYYYYYYYYYYYYYYY";
            document.getElementById("ClasName").innerHTML = "";
        }
        

        // document.getElementById("Time").innerHTML = "<h1>" + ToEnd(today) + "</h1>";

    }
);