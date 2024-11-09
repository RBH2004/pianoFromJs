const pianoKeys = document.querySelectorAll(".piano-keys .key")
const volumeSlider = document.querySelector(".volume-slider input")
const keysCheckbox=document.querySelector(".keys-checkbox input")
let allkeys = [],
    audio = new Audio("tunes/a.wav")

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`;
    audio.play();


    const clickedKey = document.querySelector(`[data-key=${key}]`)
    clickedKey.classList.add("active")
    setTimeout(() => {
        clickedKey.classList.remove("active")
    }, 150)
}
pianoKeys.forEach(key => {
    allkeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
})

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const showHideKeys=()=>{
    pianoKeys.forEach(key=>key.classList.toggle("hide"));
}
const pressedKey = (e) => {
    if (allkeys.includes(e.key)) playTune(e.key);
    console.log(e);
}
volumeSlider.addEventListener("input", handleVolume);
keysCheckbox.addEventListener("click", showHideKeys);
document.addEventListener("keydown", pressedKey);