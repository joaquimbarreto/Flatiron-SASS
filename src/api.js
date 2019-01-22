const baseUrl = 'http://localhost:3000';
const studentUrl = baseUrl + '/students/';
const cohortUrl = baseUrl + '/cohorts/';
const tcfUrl = baseUrl + '/tcfs/';

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