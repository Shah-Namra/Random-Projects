function updateColor() {
    const red = document.getElementById('red').value;
    const green = document.getElementById('green').value;
    const blue = document.getElementById('blue').value;
    
    const colorDisplay = document.getElementById('colorDisplay');
    const rgbCode = document.getElementById('rgbCode');
    
    colorDisplay.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    
    
    rgbCode.textContent = `RGB(${red}, ${green}, ${blue})`;
    
    document.getElementById('redValue').textContent = red;
    document.getElementById('greenValue').textContent = green;
    document.getElementById('blueValue').textContent = blue;
}

function copyRGBCode() {
    const rgbCode = document.getElementById('rgbCode').textContent;
    navigator.clipboard.writeText(rgbCode)
        .then(() => {
            alert('RGB Code copied to clipboard!');
        })
        .catch(err => {
            console.error('Could not copy text: ', err);
        });
}

function resetSliders() {
    document.getElementById('red').value = 0;
    document.getElementById('green').value = 0;
    document.getElementById('blue').value = 0;
    updateColor();
}
