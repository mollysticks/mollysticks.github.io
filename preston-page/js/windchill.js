function computeWindchill() {
    let f = parseFloat(document.getElementById("high-temp").textContent);
    let w = parseFloat(document.getElementById("wind-speed").textContent);
    let windSpeed = Math.pow(w, 0.16);
    let firstWindChill = (35.74 + (0.6215 * f) - (35.75 * windSpeed) + 0.4275 * f * windSpeed);
    let windChill = Math.round(firstWindChill);

    if (f > 50 || w < 3) {
        document.getElementById("chill").innerHTML = "N/A"; 
    }
    else {
        document.getElementById("chill").innerHTML = windChill + "&#8457;";
    }
}

document.onload = computeWindchill();

