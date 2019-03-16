function handleClick(e) {
  let i = 'newcohort-1'
  if ( i === e.target.dataset.id){
    tableDiv.innerHTML = "";
    cohortNameDiv.innerHTML = "";
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
    addStudentBtn.addEventListener('click', renderAddStudentForm)
  });
}

function renderAddCohortForm() {
  // e.preventDefault()
  welcomeDiv.innerHTML = "";
  newCohortEl = document.createElement("div")
  newCohortEl.classList.add("input-group")
  newCohortEl.innerHTML = `${addCohortInput()}`
  welcomeDiv.appendChild(newCohortEl)
  let newCohortBtn = document.querySelector('#new-cohort-btn')
  newCohortBtn.addEventListener('click', saveNewCohort)
  document.querySelector("#new-cohort-input").addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
      saveNewCohort(event)
    }
  })
}

function saveNewCohort() {
  const newCohortName = document.querySelector('#new-cohort-input').value
  const regex=/^[A-Za-z]+(?:[ -][A-Za-z]+)*$/;
  if (!newCohortName.match(regex)) {
    alert("Must input string");
    return false;
  } else {
    const newCohort = {
      name: newCohortName
    }
    createCohortToApi(newCohort)
    document.getElementById('new-cohort-input').value = ""
  }
}

function renderAddStudentForm(e) {
  e.preventDefault()
  const newStudentEl = document.createElement("div")
  newStudentEl.classList.add("input-group", "col-md-6", "mb-3")
  newStudentEl.innerHTML = `${addStudentInput()}`
  newStudentFormDiv.append(newStudentEl)
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
  createStudentToApi(newStudent)
  .then(students => {
    state.students.push(students)
    getCohortStudents()
  })
  newStudentFormDiv.innerHTML = ""
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
    return `
              <input id='new-student-input' type="text" class="form-control" placeholder="Enter new student name" aria-label="Enter new student name" aria-describedby="basic-addon2">
              <div class="input-group-append">
                <button id='new-student-btn3' data-id='new-student-submit-btn' class="btn btn-outline-primary" type="submit">Submit</button>
              </div>
  `
}


function addCohortInput() {
    return `
              <input id='new-cohort-input' type="text" class="form-control" placeholder="Enter new cohort name" aria-label="Enter new cohort name" aria-describedby="basic-addon2">
              <div class="input-group-append">
                <button id='new-cohort-btn' data-id='new-cohort-submit-btn' class="btn btn-outline-primary" type="submit">Submit</button>
              </div>
          `
}
