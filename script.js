const form = document.getElementById('time-form');
const outputDiv = document.getElementById('output');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const startTime = document.getElementById('start-time').value.trim(); // valueAsNumber();
    const endTime = document.getElementById('end-time').value.trim(); // valueAsNumber();
    const message = document.getElementById('message').value.trim();

    if (!startTime || !endTime || !message) {
        outputDiv.innerText = 'Please fill all fields';
        return;
    }

    // const result = `Time: ${startTime} - ${endTime}\nMessage: ${message}`;
    const result = `${startTime}, ${endTime}, ${message}`;
    // outputDiv.innerText += result + '<br><hr>';

    // Show the save button
    document.getElementById('save-btn').style.display = 'block';

    // Add event listener to save button
    form.addEventListener('click', (e) => {
        if (e.target.id === 'save-btn') {
            e.preventDefault();
            saveToCSV(result);
        }
    });
});

function saveToCSV(data) {
    const csvData = `Start, Stop, Message\n${data}`;
    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob([csvData], { type: 'text/csv' }));
    link.download = 'results.csv';
    link.click();
}
