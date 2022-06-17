// Your code here
const allEmployees = []
function createEmployeeRecord([firstName, familyName, title, pay]) {
  const employeeRecord = {
    firstName: firstName,
    familyName: familyName,
    title: title,
    payPerHour: pay,
    timeInEvents: [],
    timeOutEvents: []
  }
  allEmployees.push(employeeRecord)
  return employeeRecord
}

function createEmployeeRecords(arrays) {
    const arrOfObjs = []
    arrays.forEach((array) => {
      const newObj = createEmployeeRecord(array)
      arrOfObjs.push(newObj)
    })
    return arrOfObjs
  }

  function createTimeInEvent(employee, date) {
    const hour = date.split(" ")[1]
    const MDYdate = date.split(" ")[0]
    const timeInEmployee = {
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date: MDYdate
    }
    const timeInEvents = employee.timeInEvents
    timeInEvents.push(timeInEmployee)
    return employee
  }

  function createTimeOutEvent(employee, date) {
    const hour = date.split(" ")[1]
    const MDYdate = date.split(" ")[0]
    const timeOutEmployee = {
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date: MDYdate
    }
    const timeOutEvents = employee.timeOutEvents
    timeOutEvents.push(timeOutEmployee)
    return employee
  }

  function hoursWorkedOnDate(employee, date) {
    let timeIn =""
    let timeOut =""
    employee.timeInEvents.forEach((x) => {
      if (x.date === date) {
        timeIn = x.hour
      }
    })
    employee.timeOutEvents.forEach((x) => {
      if (x.date === date) {
        timeOut = x.hour
      }
    })
    const hoursWorked = (timeOut - timeIn) / 100
    return hoursWorked
  }
  
  function wagesEarnedOnDate(employee, date) {
    const hoursWorked = hoursWorkedOnDate(employee, date)
    const dayCheck = hoursWorked * employee.payPerHour
    return dayCheck
  }
  
  function allWagesFor(employee) {
    const daysWorked = employee.timeInEvents.map (x => x.date)
    let dayCheck = 0
    daysWorked.forEach(date => {
      const newWage = wagesEarnedOnDate(employee, date)
      dayCheck = dayCheck + newWage
    })
    return dayCheck
  }
  function calculatePayroll(array) {
    let totalPayroll = 0
    array.forEach(employee => {
      totalPayroll = totalPayroll + allWagesFor(employee)
    })
    return totalPayroll
  }
  