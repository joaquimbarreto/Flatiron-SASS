
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
        <div data-id="${percentage.student_id}" class="absent-data">${Math.ceil(percentage.absentPer)}%</div>
    </td>

    <td>
        <div data-id="${percentage.student_id}" class="late-data">${Math.floor(percentage.latePer)}%</div>
    </td>`


}
