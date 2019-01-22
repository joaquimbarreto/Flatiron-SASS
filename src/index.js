const studentsUl = document.querySelector('#students');
const cohortDiv = document.querySelector('#cohort');
const studentTableBody = document.querySelector('.table tbody')
const cohortDropDownNav = document.querySelector('#dropdown_cohorts')
const tableDiv = document.querySelector('.table')
const welcomeDiv = document.querySelector('#welcome')
const logoDiv = document.querySelector('.navbar-brand')


function init() {
    dropDownCohorts()
    hello()
}

function hello() {
    tableDiv.style.display = "none";
    cohortDiv.innerText = '';
    welcomeDiv.innerHTML = `
    <h1>Welcome to Flatiron</h1>
    <h2>Student Attendance Score Sheet</h2>
    <h4>Please choose a cohort above</h4>
    `
}


function getCohort(e) {
    getCohortApi()
    .then(data => {
        data.forEach(cohort =>{
            if (cohort.id === parseInt(e.target.dataset.id)) {
            cohortDiv.innerHTML = `<h2>Cohort: ${cohort.name}</h2>`
        }
        })
    })

}


function getCohortStudents(e) {
    tableDiv.style.display = "";
    welcomeDiv.innerText = "";
    getStudentApi()
    .then(data => {
        studentTableBody.innerText = "";
        data.forEach(student =>{
            if (student.cohort_id === parseInt(e.target.dataset.id)) {
            const studentEl = document.createElement('tr');
            studentEl.innerHTML = renderStudent(student)
            studentTableBody.appendChild(studentEl)
        }
        })
    })
}



function renderStudent(student) {
    return `
    
    <td class="student_name">${student.name}</td>

    <td>
        <input data-id="${student.id}" class="present_check" type="checkbox" value="option1">
    </td>

    <td>
        <input data-id="${student.id}" class="absent_check" type="checkbox" value="option1">
    </td>

    <td>
        <input data-id="${student.id}" class="late_check" type="checkbox" value="option1">
        <input data-id="${student.id}" class="late_time" type="time" value="Time">
    </td>

    </li>`
}
function dropDownCohorts() {
    getCohortApi()
        .then(data => {
            data.forEach(cohort => {
                const dropCohortA = document.createElement('a')
                dropCohortA.setAttribute("class", "dropdown-item")
                dropCohortA.setAttribute("data-id", `${cohort.id}`)
                dropCohortA.setAttribute("href", "#")
                dropCohortA.innerText = cohort.name
                cohortDropDownNav.appendChild(dropCohortA)
            })
        })

}


document.addEventListener('DOMContentLoaded', init)
logoDiv.addEventListener('click', hello)


cohortDropDownNav.addEventListener('click', getCohortStudents)
cohortDropDownNav.addEventListener('click', getCohort)