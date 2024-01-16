 <script src="script.js">
        initOwnerPage();

        function dequeueStudent() {
            const queuingList = JSON.parse(localStorage.getItem('queuingList')) || [];

            if (queuingList.length === 0) {
                alert('No students in the queue.');
                return;
            }

            const dequeuedStudent = queuingList.shift();
            localStorage.setItem('queuingList', JSON.stringify(queuingList));

            // Call the function to display the updated list
            displayQueuingList();

            alert(`Dequeued: Queuing Number ${dequeuedStudent.queuingNumber}, Name: ${dequeuedStudent.name}`);
        }
    </script>
