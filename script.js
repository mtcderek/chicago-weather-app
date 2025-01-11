document.addEventListener('DOMContentLoaded', () => {
    const sunnySlider = document.getElementById('sunnySlider');
    const warmSlider = document.getElementById('warmSlider');

    function updateSliders(changedSlider, otherSlider) {
        otherSlider.value = 100 - changedSlider.value;
    }

    sunnySlider.addEventListener('input', () => updateSliders(sunnySlider, warmSlider));
    warmSlider.addEventListener('input', () => updateSliders(warmSlider, sunnySlider));
});
