const fontSelect = document.getElementById('fontFamily');
const colorSelect = document.getElementById('colorPicker');
const sizeSelect = document.getElementById('fontSize');
const textPreview = document.getElementById('textPreview');

for (let i = 16; i <= 30; i++) {
    let option = document.createElement('option');
    option.value = i + "px";
    option.textContent = i + "px";
    sizeSelect.appendChild(option);
}

function updateStyles() {
    textPreview.style.fontFamily = fontSelect.value;
    textPreview.style.color = colorSelect.value;
    textPreview.style.fontSize = sizeSelect.value;

    const userSettings = {
        font: fontSelect.value,
        color: colorSelect.value,
        size: sizeSelect.value
    };
    localStorage.setItem('textSettings', JSON.stringify(userSettings));
}

[fontSelect, colorSelect, sizeSelect].forEach(select => {
    select.addEventListener('change', updateStyles);
});

window.onload = function() {
    const savedData = localStorage.getItem('textSettings');
    
    if (savedData) {
        const settings = JSON.parse(savedData);
        
        fontSelect.value = settings.font;
        colorSelect.value = settings.color;
        sizeSelect.value = settings.size;
        
        updateStyles();
    }
};