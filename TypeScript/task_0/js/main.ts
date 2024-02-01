interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Mahmoud",
  lastName: "Hn",
  age: 24,
  location: "tunisia",
};
const student2: Student = {
  firstName: "First",
  lastName: "Last",
  age: 20,
  location: "tunisia",
};
const studentList: Array<Student> = [student1, student2];
const table: HTMLTableElement = document.createElement("table");
document.body.appendChild(table);
const thead: HTMLTableSectionElement = document.createElement("thead");
thead.innerHTML = "<tr><th>firstName</th><th>location</th></tr>";
table.appendChild(thead);
const tbody: HTMLTableSectionElement = document.createElement("tbody");
table.appendChild(tbody);
for (let i: number = 0; i < studentList.length; i++) {
  const row: HTMLTableRowElement = document.createElement("tr");
  const th1: HTMLTableCellElement = document.createElement("th");
  const th2: HTMLTableCellElement = document.createElement("th");
  th1.innerHTML = studentList[i].firstName;
  th2.innerHTML = studentList[i].location;
  row.appendChild(th1);
  row.appendChild(th2);

  tbody.appendChild(row);
}
