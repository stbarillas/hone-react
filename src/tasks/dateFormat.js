import RenderTable from "../components/table";

function millisecondCalc(days){
    const milliseconds = days * 24 * 60 * 60 * 1000;
    return milliseconds;
}

function formatDate(dateObject){
    const year = dateObject.getFullYear(),
        // Index starts with Jan = 0, so we add +1 so the output is accurate
        month = String((dateObject.getMonth() + 1)).padStart(2,'0'),
        day = String((dateObject.getDate())).padStart(2,'0');
    return(year + "-"+ month + "-" + day);
}

function currentDate(){
    const dateObject = new Date();
    return(formatDate(dateObject));
}

function previousDate(days){
    let current = new Date().getTime(),
        milliseconds = millisecondCalc(days),
        difference = current-milliseconds;
    return (formatDate(new Date(difference)));


}

export {currentDate, previousDate};