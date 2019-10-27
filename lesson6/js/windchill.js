function computeWindchill() {
    console.log("check");
    let f = parseFloat(document.getElementById("high-temp").textContent);
    let w = parseFloat(document.getElementById("wind-speed").textContent);
    console.log(f);
    console.log("This file is working");
}

document.onload = computeWindchill();

