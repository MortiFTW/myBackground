function myBackground(colors) {
    let elements = document.querySelectorAll('.myBackground');

    elements.forEach(element => {
        element.style.backgroundImage = `linear-gradient(100deg,${colors.color1}, ${colors.color2})`

    })
}

module.exports.myBackground = myBackground;