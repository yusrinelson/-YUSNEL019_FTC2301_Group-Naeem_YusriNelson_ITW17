// scripts.js

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 

const createArray = (length) => {
    const result = []

    for (let i = 0; i < length; i++) {        //fixed the for loop
        result.push(i)
    }
    return result
}

const createData = () => {

    const current = new Date()                       //made new Date a function ny adding ()
    current.setDate(1)

    const startDay = current.getDay()               //corrected current.Day to current.getDay()
    const daysInMonth = getDaysInMonth(current)

    const weeks = createArray(5)                   //added correct rows/coloumn values
    const days = createArray(7)
    let value = null

    const result = []

    for (let weekIndex of weeks) {                   //changed for in loop to for of
        value = {
            week: weekIndex + 1,
            days: [],
        }

        for (let dayIndex of days) {

            const day = (weekIndex * 7) + dayIndex + startDay - 1      // fixed the math equation
            const isValid = day > 0 && day <= daysInMonth

            value.days.unshift({
                dayOfWeek: dayIndex + 1,
                value: isValid && day || "",                        //added or "" so blanks would be blank and not show false
            })
        }
        result.push(value)
    }
    return result
}

//made classString a function
const addCell = (existing, classString, value) => {
    const result = /* html */ `
        <td class= "${classString}">                      
            ${value}
        </td>

        ${existing}
    `
    return result
}

const createHtml = (data) => {
    let result = ''

    for (let week of data) {                        //made for in to for of
        let inner = ""


        for (let day of week.days) {
            let classString = "table__cell"             //made tabel__cell a string

            const isToday = new Date().getDate() == day.value
            const isWeekend = day.dayOfWeek == 1 || day.dayOfWeek == 7
            const isAlternate = week / 2

            if (isToday) {
                classString = `${classString} table__cell_today`
            }
            if (isWeekend) {
                classString = `${classString} table__cell_weekend`
            }
            if (isAlternate) {
                classString = `${classString} table__cell_alternate`
            }

            inner = addCell(inner, classString, day.value)
        }
        inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week.week}`)       //moved out of the for loop so tht it stays in the weeks column
        result += `<tr>${inner}</tr>`               //added + so that each week is shown and not only the final week
    }
    return result;
}

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)