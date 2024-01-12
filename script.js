function enqueueStudent() {
    const name = document.getElementById('name').value;
    const gradeSection = document.getElementById('gradeSection').value;
    const strand = document.getElementById('strand').value;

    const queuingList = JSON.parse(localStorage.getItem('queuingList')) || [];

    // Check if the person already has a queuing number
    const existingStudent = queuingList.find(student => student.name === name && student.gradeSection === gradeSection && student.strand === strand);

    if (existingStudent) {
        alert(`You already have Queuing Number: ${existingStudent.queuingNumber}. Please wait for your turn.`);
        return;
    }

    const student = {
        name,
        gradeSection,
        strand
    };

    const queuingNumber = queuingList.length + 1;
    student.queuingNumber = queuingNumber;
    queuingList.push(student);
    localStorage.setItem('queuingList', JSON.stringify(queuingList));

    displayQueuedStudent(student);
}

function displayQueuedStudent(student) {
    const resultElement = document.getElementById('result');
    const queueList = document.getElementById('queue-list');

    resultElement.innerHTML = `Your Queuing Number: ${student.queuingNumber}`;
}
