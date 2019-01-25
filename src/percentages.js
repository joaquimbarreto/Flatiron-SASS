
function saveStatsToState() {
    state.students.forEach(student => {
        const totalSchoolDays = student.presences.length
        const daysPresent = student.presences.filter(days => days.present === true).length
        const daysAbsent = student.presences.filter(days => days.present === false).length
        const daysLate = student.presences.filter(days => days.late === true).length

        const studentStat =
            {
                name: student.name,
                student_id: student.id,
                cohort_id: student.cohort_id,
                daysPresent: daysPresent,
                daysLate: daysLate,
                daysAbsent: daysAbsent,
                totalDays: totalSchoolDays
            }
        state.stats.push(studentStat)
    })
}

function calPercentage() {
    state.stats.forEach (stat => {
        const pp = (stat.daysPresent / stat.totalDays) *100
        const lp = (stat.daysLate / stat.totalDays) *100
        const ap = (stat.daysAbsent / stat.totalDays) *100

        const studentPercentages =
                    {
                        name: stat.name,
                        cohort_id: stat.cohort_id,
                        student_id: stat.student_id,
                        presentPer: pp,
                        latePer: lp,
                        absentPer: ap
                    }

        state.percentages.push(studentPercentages)
    })
}

function displayPercentage() {
    studentTableBody.innerText = "";
    const filteredPercentages = state.percentages.filter(percentage => percentage.cohort_id === state.selectedCohortId)
    filteredPercentages.forEach(percentage => {
        const studentEl = document.createElement('tr');
        studentEl.innerHTML = renderPercentages(percentage)
        studentTableBody.appendChild(studentEl)
    })
}
