function clickButtom() {
    let firstYear = parseInt(document.getElementById("firstYear").value);
    let firstMonth = parseInt(document.getElementById("firstMonth").value);
    let firstDay = parseInt(document.getElementById("firstDay").value);
    let secondYear = parseInt(document.getElementById("secondYear").value);
    let secondMonth = parseInt(document.getElementById("secondMonth").value);
    let secondDay = parseInt(document.getElementById("secondDay").value);
    let during = document.getElementById("during");

    let finalYear = secondYear - firstYear;
    let finalMonth = secondMonth - firstMonth;
    let finalDay = secondDay - firstDay;

    //condition for month
    if (firstMonth <= 0) {
        alert("the month should be between 1 to 12");
    }
    else if (secondMonth <= 0) {
        alert("the month should be between 1 to 12");
    }
    else if (firstMonth >= 13) {
        alert("the month should be between 1 to 12");
    }
    else if (secondMonth >= 13) {
        alert("the month should be between 1 to 12");
    }
    else if (firstDay <= 0) {
        alert("the day should be between 1 to 30");
    }
    else if (secondDay <= 0) {
        alert("the day should be between 1 to 30");
    }
    else if (firstDay >= 31) {
        alert("the day should be between 1 to 30");
    }
    else if (secondDay >= 31) {
        alert("the day should be between 1 to 30");
    } else {
        if(finalDay < 0){
            finalMonth -= 1 ;
            finalDay = 30 + finalDay ;
        }
        if (finalMonth < 0){
            finalYear -= 1 ;
            finalMonth = 12 + finalMonth;
        }
        console.log(during.innerHTML);
        during.innerHTML = finalYear + " years and " + finalMonth + " month and " + finalDay + " day";
    }
}