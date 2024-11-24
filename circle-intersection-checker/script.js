const cirCoordinates = []

function logifintersection() {
    const firstCircle = cirCoordinates[0]
    const secCircle = cirCoordinates[1]
    const x1 = firstCircle.x
    const x2 = secCircle.x
    const y1 = firstCircle.y
    const y2 = secCircle.y
    const r1 = firstCircle.radius
    const r2 = secCircle.radius

    const d = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2))

    if (d + r2 <= r1) {
        return "Circle 2 is inside Circle 1";
    }
    if (d + r1 <= r2) {
        return "Circle 1 is inside Circle 2";
    }
    if (d < r1 + r2) {
        return "Circles intersect";
    }
    if (d === r1 + r2) {
        return "Circles are touching";
    }
    return "Circles are not intersecting";
}


window.addEventListener('click', (e) => {

    const totalCircles = document.querySelectorAll('.circle')
    if (totalCircles.length === 2) {
        totalCircles.forEach(circ => {
            document.body.removeChild(circ)
            cirCoordinates.shift()
            document.querySelector('p').textContent = ''
        })
    }

    const x = e.clientX;
    const y = e.clientY;

    const radius = Math.floor((Math.random() * 180) + 20)
    cirCoordinates.push({ x, y, radius })

    // console.log("i am clicked at ", x, y, cirCoordinates)

    const circle = document.createElement('div')
    circle.classList.add('circle')
    circle.style.top = y - radius + "px"
    circle.style.left = x - radius + "px"
    circle.style.width = radius * 2 + "px"
    circle.style.height = radius * 2 + "px"


    document.body.appendChild(circle)

    if (cirCoordinates.length == 2) {
        const res = logifintersection()
        console.log(res)

        document.querySelector('p').textContent = res
    }
})