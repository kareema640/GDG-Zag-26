const inputs = document.querySelectorAll('input, select');
inputs.forEach(input => {
    input.addEventListener('input', () => {
        sessionStorage.setItem(input.id, input.value);
    });
});
window.onload = function() {
    inputs.forEach(input => {
        const savedValue = sessionStorage.getItem(input.id);    
        if (savedValue) {
            input.value = savedValue;
        }
    });
};