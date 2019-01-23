
const updatePresence = presence => {
	state.newPresences = state.newPresences.filter(oldPresence => oldPresence.student_id !== presence.student_id)
    state.newPresences.push(presence)
    
}

document.addEventListener('click', e => {
  if (e.target.type === 'radio') {
      const id = e.target.dataset.id
      const presence = e.target.value
    
    const newPresence = {
      present: true,
      late: null,
      student_id: id,
      date: new Date().toLocaleDateString()
    }
    
    switch (presence) {
      case 'absent':
        newPresence.present = false
        break
      case 'late':
        newPresence.present = false
        newPresence.late = true
        break
    }
    
    updatePresence(newPresence)
    console.log(state.newPresences)
  }
})

function updateAllPresences() {
    state.newPresences.forEach(updateStudentPresencesToApi)
    state.newPresences = []
    state.students = []
    getStudentApi()
        .then(data => showPercentages(data))    
} 
function showPercentages(data) {
    state.students = data
    saveStatsToState()
    calPercentage()
    displayPercentage()
}



