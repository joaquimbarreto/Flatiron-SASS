
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
    // <input id="student-${student.id}" data-id="${student.id}" class="late-time" type="time" value="09:16">
