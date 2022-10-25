function setBackground() {
    const color1 = randomHexColor();
    const color2 = randomHexColor();

    document.getElementById("color1").value = color1;
    document.getElementById("color2").value = color2;

    document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
    document.getElementById("color").innerHTML = `linear-gradient(to right, ${color1}, ${color2})`;
}

function randomInteger(max) {
    return Math.floor(Math.random() * (max + 1));
}

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r, g, b];
}  

function randomHexColor() {
    let [r, g, b] = randomRgbColor();

    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');

    return `#${hr}${hg}${hb}`;
}