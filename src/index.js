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

const form = document.querySelector("#integral-form")
const result = document.querySelector("#result")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const start = Number(document.querySelector("#start").value)
  const end = Number(document.querySelector("#end").value)
  const points = Number(document.querySelector("#points").value)

  if (Number.isNaN(start) || Number.isNaN(end) || !Number.isInteger(points) || points <= 0) {
    result.textContent = "Проверьте значения: границы должны быть числами, а количество точек — целым числом больше нуля."
    result.classList.add("result__value--error")
    return
  }

  const integral = leftRiemannSum(targetFunction, start, end, points)
  result.textContent = `Приближенное значение интеграла: ${integral.toFixed(8)}`
  result.classList.remove("result__value--error")
})
