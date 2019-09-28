
//getting current year
function getYear() {
    //make new date object
    var d = new Date();
    //set the year from the date object to a new variable
    var n = d.getFullYear();
    //put the year right before the copyright symbol
    document.getElementById("currentYear").innerHTML = n;
}

function lastModified() {
    //get the string for last modified
    var lastModifiedString = document.lastModified;
    //make a new date object with the last modified information
    var d = new Date(lastModifiedString);
    document.getElementById("lastModified").innerHTML = d.toLocaleDateString('en-US') + " " + d.toLocaleTimeString('en-US');
}
//run the functions
function getDates() {
    getYear();
    lastModified();
}


