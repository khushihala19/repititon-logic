let totalSalary = 0, count = 0;

function addEmployee() {
    event.preventDefault();
    if (count >= 5) return alert('You can only add 5 employees.');

    let name = document.getElementById('emp_name').value,
        role = document.getElementById('emp_role').value,
        salary = parseFloat(document.getElementById('emp_salary').value);

    document.getElementById('employee-table-body').insertAdjacentHTML('beforeend', `<tr>
        <td>${name}</td><td>${role}</td><td>$${salary.toFixed(2)}</td></tr>`);

    totalSalary += salary;
    document.getElementById('total-salary').innerText = `Total Salary: ${totalSalary.toFixed(2)}`;

    count++;
    document.getElementById('employee-form').reset();
}
