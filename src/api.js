const baseUrl = 'http://localhost:3000';
const studentUrl = baseUrl + '/students/';
const cohortUrl = baseUrl + '/cohorts/';
const tcfUrl = baseUrl + '/tcfs/';
const presenceUrl = baseUrl + '/presence/';

function getCohortApi() {
    return fetch(cohortUrl)
    .then(res => res.json())
}

function getStudentApi() {
    return fetch(studentUrl)
    .then(res => res.json())
}

function getTcfApi() {
    return fetch(tcfUrl)
    .then(res => res.json())
}


function studentPresent() {
    const presentChecked = document.querySelectorAll('.present-check')
    presentChecked.forEach(student => {

        return updateStudentPresentToApi(student)
    })
}


function updateStudentPresentToApi(student) {
    const studentId = parseInt(student.dataset.id)
    fetch(presenceUrl, {
        method: 'POST',
        headers: { 
            'Accept': 'application/json',
  			'Content-Type': 'application/json'
         },
        body: JSON.stringify({
            student_id: studentId,
            present: true,
            late: '',
            date: "2019-01-01"
        })
    }).then(res => res.json())

    fetch('http://localhost:3000/presences/', {
        method: 'POST',
        headers: { 
            'Accept': 'application/json',
  			'Content-Type': 'application/json'
         },
        body: JSON.stringify({
            student_id: 14,
            present: true,
            late: '',
            date: "2019-01-01"
        })
    }).then(res => res.json())
}