function leftRiemannSum(fn, start, end, points) {
  const step = (end - start) / points
  let sum = 0

  for (let i = 0; i < points; i += 1) {
    const x = start + i * step
    sum += fn(x) * step
  }

  return sum
}

function targetFunction(x) {
  return x * Math.cos(x)
}

const start = Number(prompt("Enter the start of integration interval:"))
const end = Number(prompt("Enter the end of integration interval:"))
const points = 10000

if (Number.isNaN(start) || Number.isNaN(end)) {
  alert("Invalid interval")
} else {
  const result = leftRiemannSum(targetFunction, start, end, points)
  alert(`Integral result: ${result}`)
}
