
function renderStudent(student) {
    return `
    
    <td class="student_name">${student.name}</td>

    <td>
        <input data-id="${student.id}" class="present-check" type="checkbox">
    </td>

    <td>
        <input data-id="${student.id}" class="absent-check" type="checkbox" value="option1">
    </td>

    <td>
        <input data-id="${student.id}" class="late-check" type="checkbox" value="option1">
        <input data-id="${student.id}" class="late-time" type="time" value="Time">
    </td>

    </li>`
}
