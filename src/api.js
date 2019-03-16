const baseUrl = 'http://localhost:3000';
const studentUrl = baseUrl + '/students/';
const cohortUrl = baseUrl + '/cohorts/';
const tcfUrl = baseUrl + '/tcfs/';
const presenceUrl = baseUrl + '/presences/';

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

function updateStudentPresencesToApi(presence) {
    fetch(presenceUrl, {
        method: 'POST',
        headers: {'Accept': 'application/json',
  			          'Content-Type': 'application/json'},
        body: JSON.stringify(presence)
    }).then(res => res.json())
}

function createCohortToApi(name){
  fetch(cohortUrl, {
    method: 'POST',
    headers: {'Accept': 'application/json',
              'Content-Type': 'application/json'},
    body: JSON.stringify(name)
  }).then(setCohortState)
}

function createStudentToApi(student){
  return fetch(studentUrl, {
    method: 'POST',
    headers: {'Accept': 'application/json',
              'Content-Type': 'application/json'},
    body: JSON.stringify(student)
  }).then(resp => resp.json())
}
