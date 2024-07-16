document.getElementById('student-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const std = document.getElementById('std').value;
    const subject1 = parseFloat(document.getElementById('guj').value);
    const subject2 = parseFloat(document.getElementById('hin').value);
    const subject3 = parseFloat(document.getElementById('eng').value);
    const subject4 = parseFloat(document.getElementById('com').value);
    const subject5 = parseFloat(document.getElementById('sci').value);

    const total = subject1 + subject2 + subject3 + subject4 + subject5;
    const percentage = (total / 500) * 100;

    let grade;
    if (percentage >= 90) {
        grade = 'A';
    } else if (percentage >= 80) {
        grade = 'B';
    } else if (percentage >= 70) {
        grade = 'C';
    } else if (percentage >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    const resultsCard = `
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Standard</th>
                    <th>Total Marks</th>
                    <th>Percentage</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${name}</td>
                    <td>${std}</td>
                    <td>${total}/500</td>
                    <td>${percentage.toFixed(2)}%</td>
                    <td>${grade}</td>
                </tr>
            </tbody>
        </table>
    `;

    document.getElementById('results-card').innerHTML = resultsCard;
});
