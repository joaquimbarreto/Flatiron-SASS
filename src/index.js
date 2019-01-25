

/* TODO:  1 - Welcome Screen */

/* TODO:  2 - Cohort Drop Down Menu */
/* TODO:    2a - API fetch for Cohort JSON */
/* TODO:    2b - Render Cohort Drop down menu */
/* TODO:    2c - Event Listener for drop down click */
/* TODO:    2d - Save selected cohort students objects in state */

/* TODO:  3 - Render Cohort Students Table */
/* TODO:    3a - for Each student render radio buttons => Present, Absent, Late  */
/* TODO:    3b - Event Listener click modifies student object values in state  */



/* TODO:  5 - Render All Present Button  */
/* TODO:    5a - Render all present button  */
/* TODO:    5b - Checks all 'Present' radio buttons in the form  */
/* TODO:    5c - Event Listener for 'All Present button'  */

/* TODO:  6 - Render Submit Button  */
/* TODO:    6a - Creates a 'Submit' button for the form  */
/* TODO:    6b - On submit triggers a POST to api to persist modified student objects from state  */
/* TODO:    6b - Renders the 'STATs' table for cohort students*/

/* TODO:  7 - Render Submit Button  */
/* TODO:    7a - Creates a 'Submit' button for the form  */
/* TODO:    7b - Event Listener triggers a POST to api to persist state objects into Rails backend  */
/* TODO:    7c - Event Listener triggers a persist state objects into Rails backend  */
/* TODO:    7d - API POST fetch student state objects to back end  */
/* TODO:    7e - Renders the 'STATs' table for cohort students */




const studentsUl = document.querySelector("#students");
const cohortNameDiv = document.querySelector("#cohort-name");
const studentTableBody = document.querySelector(".table tbody");
const cohortDropDownNav = document.querySelector("#dropdown_cohorts");
const tableDiv = document.querySelector(".table");
const welcomeDiv = document.querySelector("#welcome");
const logoDiv = document.querySelector(".navbar-brand");
const allPresentButton = document.querySelector("#all-present-btn");
const allSubmitButton = document.querySelector("#all-submit-btn");
const lateTimeEl = document.querySelector(".late-time");
const currentDateEl = document.querySelector("#current-date");
const tableFooter = document.querySelector("tfoot")

const state = {
  students: [],
  newPresences: [],
  stats: [],
  percentages: [],
  selectedCohortId: null,
  cohorts: []
};

/* ------------------- INIT ------------------------*/

function init() {
  hello();
  dropDownCohorts();
}

function hello() {
  tableDiv.style.display = "none";
  cohortNameDiv.innerText = "";
  welcomeDiv.innerHTML = `
    <h1>Welcome to Flatiron</h1>
    <h2>Student Attendance Score Sheet</h2>
    <h4>Please choose a cohort above</h4>`;
}  // IDEA: Add a TCF login?

function dropDownCohorts() {
  cohortDropDownNav.innerHTML = ""
  getCohortApi().then(data => {
    data.forEach(cohort => {
      const dropCohortA = document.createElement("a");
      dropCohortA.setAttribute("class", "dropdown-item");
      dropCohortA.setAttribute("data-id", `${cohort.id}`);
      dropCohortA.setAttribute("href", "#");
      dropCohortA.innerText = cohort.name;
      cohortDropDownNav.appendChild(dropCohortA);
    });
    return (cohortDropDownNav.innerHTML += `
        <div class="dropdown-divider"></div>
        <p data-id='newcohort-1' class="dropdown-item" >Add Cohort</p>`);
  });
}

/* TODO:  4 - Render Add Student Button  */
/* TODO:    3a - Creates new student form with data entry fields TBD!!  */
/* TODO:    3b - Event Listener Updates State on submit  */
/* TODO:    3b - Re-render table from state on submit  */






/*-------------------- FORM LOGIC ------------------ */



function checkAllPresent(e) {
  const presentCheckboxes = document.querySelectorAll(".present-check");
  for (let i = 0, n = presentCheckboxes.length; i < n; i++) {
    presentCheckboxes[i].checked = e;
  }
  allStudentsAreChecked();
}

const allStudentsAreChecked = () => {
  let radio = document.querySelectorAll('[type="radio"]');
  let newArray = [...radio];
  const allPresentChecked = newArray.filter(element => element.checked);

  allPresentChecked.forEach(student => {
    const id = student.dataset.id;
    const studentPresent = {
      present: true,
      late: null,
      student_id: id,
      date: new Date().toLocaleDateString()
    };
    updatePresence(studentPresent);
  });
};


/*-------------------- SET STATE ------------------ */

function setCohortState(){
  getCohortApi().then(data => {
    state.cohorts = data
    dropDownCohorts()
  })
}

function setStudentState(){
  getCohortApi().then((data) => setState(data))
}

function setState(data){
  return state.students = data
}
