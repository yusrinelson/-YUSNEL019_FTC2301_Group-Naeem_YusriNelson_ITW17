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

    for (let i = 0; i < length; i++) {
        result.push(null)
    }
    return result
}

const createData = () => {
    const current = new Date()
    current.setDate(1)

    const startDay = current.getDay()
    const daysInMonth = getDaysInMonth(current)

    const weeks = createArray(5)
    const days = createArray(7)
    let value = null
    const result = []

    for (let weekIndex = 0; weekIndex < weeks.length; weekIndex++) {
        value = [{
            week: weekIndex + 1,
            days: []
        }]

        for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {
            value = dayIndex - startDay
            const isValid = days > 0 && days <= daysInMonth

            result[weekIndex[value[1]]] = [{
                dayOfWeek: dayIndex + 1,
                value: isValid && days,
            }]
        }
    }
}

const addCell = (existing, classString, value) => {
    result = /* html */ `
        <td ${classString}>
            ${value}
        </td>

        ${existing}
    `
}

const createHtml = (data) => {
    let result = ''

    for (let week = 0; week < data; week++) {
        let inner = ""
        addCell(inner, 'table__cell table__cell_sidebar', `Week ${week}`)

        for (let dayOfWeek = 0; dayOfWeek < data; dayOfWeek++) {
            classString = table__cell
            const isToday = new Date() === value
            const isWeekend = dayOfWeek = 1 && dayOfWeek == 7
            const isAlternate = week / 2

            let classString = 'table__cell'

            if (isToday){
                 classString = `${classString} table__cell_today`
            }
            if (isWeekend){
                 classString === `${classString} table__cell_weekend`
                } 
            if (isAlternate){ classString === `${classString} table__cell_alternate`
        }
            inner = addCell(inner, classString, value)
        }

        result = `<tr>${inner}</tr>`
    }
}

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)