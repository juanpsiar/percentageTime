const yearField = document.querySelector('#year')
const monthField = document.querySelector('#month')
const dayField = document.querySelector('#day')
const percentage = document.querySelector('#percentage')
const result = document.querySelector('#result')

function roundToTwo(num) {
  return +(Math.round(num + 'e+2') + 'e-2')
}

calculatePercentage = () => {
  const totalTime = (yearField.value * 12 + +monthField.value) * 30 + +dayField.value
  const totalDays = Math.round(totalTime * (percentage.value / 100))

  const monthNumber = (totalDays / 30).toString().split('.')[0]
  const yearNumber = (monthNumber / 12).toString().split('.')[0]
  const resultShow = `${yearNumber} Años ${monthNumber - yearNumber * 12} Meses ${
    totalDays - monthNumber * 30
  } Días `
  console.log(totalTime, { totalDays }, monthNumber, yearNumber, resultShow)
  result.innerText = resultShow
}
