const baseUrl = 'http://localhost:3000';
const studentUrl = baseUrl + '/students/';
const cohortUrl = baseUrl + '/cohorts/';
const tcfUrl = baseUrl + '/tcfs/';

const studentsUl = document.querySelector('#students');

function init() {
   return fetch(studentUrl)
    .then(response => response.json())
    .then(data => {
        data.forEach(student =>{
            if (student.cohort_id === 1) {
            const studentEl = document.createElement('li');
            studentEl.setAttribute("class", "list-group-item")
            studentEl.innerText = student.name
            studentsUl.appendChild(studentEl)
        }
        })
    })
}



document.addEventListener('DOMContentLoaded', init)