//
function handleClick(e) {
  let i = 'newcohort-1'
  if ( i === e.target.dataset.id){
    renderAddCohortForm()
  } else {
    getCohort(e)
  }
}

//
function getCohort(e) {
  getCohortApi().then(data => {
    data.forEach(cohort => {
      if (cohort.id === parseInt(e.target.dataset.id)) {
        cohortNameDiv.innerHTML = `<h2 id="cohort-${cohort.id}">Cohort: ${
          cohort.name
        }</h2><h4>Today's Date: ${new Date().toLocaleDateString()}</h4>`;
        state.selectedCohortId = parseInt(e.target.dataset.id);

      }
      state.cohorts = data
    });
  }).then(getCohortStudents)
}

function getCohortStudents() {
  tableDiv.style.display = "";
  welcomeDiv.innerText = "";
  getStudentApi().then(data => {
    state.students = data;
    studentTableBody.innerText = "";
    data.forEach(student => {
      if (student.cohort_id === state.selectedCohortId) {
        const studentEl = document.createElement("tr");
        studentEl.innerHTML = renderStudent(student);
        studentTableBody.appendChild(studentEl);
      }
    });
    const addStudentBtn = document.querySelector("#add-student-btn2")
    addStudentBtn.addEventListener('click', renderAddStudentForm)
  });
}

function renderAddCohortForm() {
  // e.preventDefault()
  tableDiv.style.display = 'none'
  welcomeDiv.innerHTML = "";
  newCohortEl = document.createElement("div")
  newCohortEl.innerHTML = `${addCohortInput()}`
  welcomeDiv.appendChild(newCohortEl)
  let newCohortBtn = document.querySelector('#new-cohort-btn')
  newCohortBtn.addEventListener('click', saveNewCohort)
}

function saveNewCohort() {
  const newCohortName = document.querySelector('#new-cohort-input').value
  const newCohort = {
    name: newCohortName
  }
  createCohortToApi(newCohort)
  document.getElementById('new-cohort-input').value = ""

}

function renderAddStudentForm() {
  // e.preventDefault()
  // debugger
  // tableDiv.style.display = 'none'
  const newStudentEl = document.createElement("div")
  newStudentEl.innerHTML = `${addStudentInput()}`
  tableDiv.append(newStudentEl)
  let newStudentBtn = document.querySelector('#new-student-btn3')
  newStudentBtn.addEventListener('click', saveNewStudent)
}

function saveNewStudent() {

  const newStudent   = {
    name: "",
    cohort_id: state.selectedCohortId
  }
  newStudent.name = document.querySelector('#new-student-input').value

  state.students.push(newStudent)
  const destroy = document.querySelector('table div')
  destroy.innerHTML = ""
  createStudentToApi(newStudent)
  .then(students => {
    state.students.push(students)
    getCohortStudents()
  })
}



function rerenderStudents() {
    getCohortApi().then(data => {
      data.forEach(cohort => {
        if (cohort.id === selectedCohortId) {
          cohortNameDiv.innerHTML = `<h2 id="cohort-${cohort.id}">Cohort: ${
            cohort.name
          }</h2><h4>Today's Date: ${new Date().toLocaleDateString()}</h4>`;
        }
        state.cohorts = data
      });
    }).then(getCohortStudents)
}






function renderStudent(student) {
    return `
    <td class="student_name">${student.name}</td>

    <td>
        <input data-id="${student.id}" name="${student.name}" value="present" class="present-check" type="radio">
    </td>

    <td>
        <input data-id="${student.id}" name="${student.name}" value="absent" class="absent-check" type="radio">
    </td>

    <td>
        <input data-id="${student.id}" name="${student.name}" value="late" class="late-check" type="radio">
    </td>`
    }


function renderPercentages(percentage) {
    return `
    <td class="student_name">${percentage.name}</td>

    <td>
        <div data-id="${percentage.student_id}" class="present-data">${Math.ceil(percentage.presentPer)}%</div>
    </td>

    <td>
        <div data-id="${percentage.student_id}" class="absent-data">${Math.floor(percentage.absentPer)}%</div>
    </td>

    <td>
        <div data-id="${percentage.student_id}" class="late-data">${Math.floor(percentage.latePer)}%</div>
    </td>` // REVIEW: Change percentages from integer to animatation
}


function addStudentInput() {
    return `<div class="input-group mb-3">
              <input id='new-student-input' type="text" class="form-control" placeholder="Enter new student name" aria-label="Enter new student name" aria-describedby="basic-addon2">
              <div class="input-group-append">
                <button id='new-student-btn3' data-id='new-student-submit-btn' class="btn btn-outline-secondary" type="button">Submit</button>
              </div>
            </div>
  `
}


function addCohortInput() {
    return `<div class="input-group mb-3">
              <input id='new-cohort-input' type="text" class="form-control" placeholder="Enter new cohort name" aria-label="Enter new cohort name" aria-describedby="basic-addon2">
              <div class="input-group-append">
                <button id='new-cohort-btn' data-id='new-cohort-submit-btn' class="btn btn-outline-secondary" type="button">Submit</button>
              </div>
            </div>
          `
}
