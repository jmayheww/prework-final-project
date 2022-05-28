const data = [
    {year: "2014-2015", employer: "Oxnard Lemon Company", position: "Accounts Payable/Receivable Clerk"},
    {year: "2015-2016", employer: "Postmates", position: "Delivery Driver"},
    {year: "2015-2017", employer: "Blue Ocean", position: "Bookkeeper, Assistant"},
    {year: "2016-2019", employer: "Bodega Wine Bar and Coffee", position: "Lead Barista, Shift Supervisor, Server"},
    {year: "2019-2022", employer: "Hernandez Law", position: "Paralegal, Legal Assistant"}

    ];


    const tableBody = document.getElementById('table-body');


    for (const obj of data) {

        const tr = document.createElement('tr');
        const content = `<td>${obj.year}</td>
        <td>${obj.employer}</td>
        <td>${obj.position}</td>`;

        tr.innerHTML = content;
        tableBody.appendChild(tr)

    }
