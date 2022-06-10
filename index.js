const yearField = document.querySelector('#year')
const monthField = document.querySelector('#month')
const dayField = document.querySelector('#day')
const percentage = document.querySelector('#percentage')
const result = document.querySelector('#result')
const dateStart = document.querySelector('#dateStart')
const endDate = document.querySelector('#endDate')
const legendEndDate = document.querySelector('#legendEndDate')

let date = new Date()
let day = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear()

if (month < 10) month = '0' + month
if (day < 10) day = '0' + day

let today = year + '-' + month + '-' + day
document.getElementById('dateStart').value = today

function roundToTwo(num) {
  return +(Math.round(num + 'e+2') + 'e-2')
}

calculateEndDate = (daysPercentage) => {
  let startDate = moment(dateStart.value)
  let datePredicted = startDate.add(daysPercentage, 'day')
  endDate.innerText = datePredicted.format('DD-MM-YYYY')
}

calculatePercentage = () => {
  const totalTime = (yearField.value * 12 + +monthField.value) * 30 + +dayField.value
  const totalDays = Math.round(totalTime * (percentage.value / 100))

  const monthNumber = (totalDays / 30).toString().split('.')[0]
  const yearNumber = (monthNumber / 12).toString().split('.')[0]
  const resultShow = `${yearNumber} Años ${monthNumber - yearNumber * 12} Meses ${
    totalDays - monthNumber * 30
  } Días `
  result.innerText = resultShow

  calculateEndDate(totalDays)
  legendEndDate.innerText = `Cumple el ${percentage.value}% el `
}
