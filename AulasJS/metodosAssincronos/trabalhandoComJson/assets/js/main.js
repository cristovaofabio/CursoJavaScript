fetch('pessoas.json')
    .then(response => response.json())
    .then(json => showData(json));

function showData(json) {
    const table = document.createElement('table');

    json.forEach(person => {
        const tr = document.createElement('tr');

        let tdName = document.createElement('td');
        let tdAge = document.createElement('td');
        let tdSalary = document.createElement('td');
        
        tdName.innerHTML = person.nome;
        tdAge.innerHTML = person.idade;
        tdSalary.innerHTML = person.salario;

        tr.appendChild(tdName);
        tr.appendChild(tdAge);
        tr.appendChild(tdSalary);

        table.appendChild(tr);
    });

    const result = document.querySelector('.resultado');
    result.appendChild(table);
}