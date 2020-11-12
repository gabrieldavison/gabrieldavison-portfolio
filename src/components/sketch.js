import { colors } from "../utils/styles"

export default function Sketch(p5) {
  let canvas

  const blocks = ["\u2588", "\u2593", "\u2592", "\u2591"]
  let spacing = 3
  let maxLines = 20
  let currentHorizontal = 0
  let currentVertical = 0

  let maxLength = 60
  let minlength = 4

  let fillColor = 200
  let bgColor = colors.light

  let lineWidth = 3

  let fr = 15

  p5.setup = () => {
    canvas = p5.createCanvas(p5.windowWidth - 10, p5.windowHeight - 10)
    canvas.position(0, 0)
    canvas.style("z-index", "-2")
    p5.background(bgColor)
    p5.fill(fillColor)
    p5.textSize(lineWidth)
    p5.frameRate(fr)
    p5.noLoop()
  }

  p5.draw = () => {
    p5.resizeCanvas(p5.windowWidth - 100, p5.windowHeight - 100)
    currentHorizontal = 0
    currentVertical = 0
    p5.background(bgColor)
    drawHorizontal()
    drawVerticle()
  }

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth - 100, p5.windowHeight - 100)
  }

  p5.mousePressed = () => {
    p5.loop()
  }

  p5.mouseReleased = () => {
    p5.noLoop()
  }

  function drawHorizontal() {
    while (currentHorizontal < maxLines) {
      let x = p5.floor(p5.random(0, p5.width))
      let y = p5.floor(p5.random(0, p5.height))
      let length = p5.floor(p5.random(minlength, maxLength))
      let lineArr = createLine(length)
      for (let i = 0; i < lineArr.length; i++) {
        p5.text(lineArr[i], x, y)

        x += spacing
      }
      currentHorizontal += 1
    }
  }

  function drawVerticle() {
    while (currentVertical < maxLines) {
      let x = p5.floor(p5.random(0, p5.width))
      let y = p5.floor(p5.random(0, p5.height))
      let length = p5.floor(p5.random(minlength, maxLength))
      let lineArr = createLine(length)
      for (let i = 0; i < lineArr.length; i++) {
        p5.text(lineArr[i], x, y)

        y += spacing
      }
      currentVertical += 1
    }
  }

  function createLine(length) {
    const lineArray = []
    let full = p5.floor(length / 3)
    let dark = p5.floor(length / 6)
    let medium = p5.floor(length / 12)
    let light = p5.floor(length / 12)

    for (let i = 0; i < light; i++) {
      lineArray.push(blocks[3])
    }

    for (let i = 0; i < medium; i++) {
      lineArray.push(blocks[2])
    }

    for (let i = 0; i < dark; i++) {
      lineArray.push(blocks[1])
    }

    for (let i = 0; i < full; i++) {
      lineArray.push(blocks[0])
    }

    for (let i = 0; i < dark; i++) {
      lineArray.push(blocks[1])
    }

    for (let i = 0; i < medium; i++) {
      lineArray.push(blocks[2])
    }

    for (let i = 0; i < light; i++) {
      lineArray.push(blocks[3])
    }
    return lineArray
  }
}
