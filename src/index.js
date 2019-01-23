const studentsUl = document.querySelector('#students');
const cohortNameDiv = document.querySelector('#cohort-name');
const studentTableBody = document.querySelector('.table tbody');
const cohortDropDownNav = document.querySelector('#dropdown_cohorts');
const tableDiv = document.querySelector('.table');
const welcomeDiv = document.querySelector('#welcome');
const logoDiv = document.querySelector('.navbar-brand');
const allPresentButton = document.querySelector('#all-present-btn');
const allSubmitButton = document.querySelector('#all-submit-btn');
const lateTimeEl = document.querySelector('.late-time');
const currentDateEl = document.querySelector('#current-date');

const state = {
    students: [],
    newPresences: [],
    stats: [],
    percentages: [],
    selectedCohortId: null 
}

function init() {
    dropDownCohorts()
    hello()
}

function hello() {
    tableDiv.style.display = "none";
    cohortNameDiv.innerText = '';
    welcomeDiv.innerHTML = `
    <h1>Welcome to Flatiron</h1>
    <h2>Student Attendance Score Sheet</h2>
    <h4>Please choose a cohort above</h4>`
}

function getCohort(e) {
    getCohortApi()
    .then(data => {
        data.forEach(cohort =>{
            if (cohort.id === parseInt(e.target.dataset.id)) {
                cohortNameDiv.innerHTML = `<h2 id="cohort-${cohort.id}">Cohort: ${cohort.name}</h2><h4>Today's Date: ${new Date().toLocaleDateString()}</h4>`
            }
        })
    })
}

function getCohortStudents(e) {
    tableDiv.style.display = "";
    welcomeDiv.innerText = "";
    state.selectedCohortId = parseInt(e.target.dataset.id)
    getStudentApi()
    .then(data => {
        state.students = data
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
        return cohortDropDownNav.innerHTML += `
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="">Add Cohort</a>`
    })
}

function checkAllPresent(e) {
    const presentCheckboxes = document.querySelectorAll('.present-check')
    for(let i=0, n=presentCheckboxes.length; i<n; i++) {
        presentCheckboxes[i].checked = e;   
    }
    allStudentsAreChecked()
}


const allStudentsAreChecked = () => {
    let radio = document.querySelectorAll('[type="radio"]')
    let newArray = [...radio]
    const allPresentChecked = newArray.filter(element => element.checked)

    allPresentChecked.forEach(student => {
        const id = student.dataset.id
        const studentPresent = {
        present: true,
        late: null,
        student_id: id,
        date: new Date().toLocaleDateString()
        }
        updatePresence(studentPresent)
    })
}



