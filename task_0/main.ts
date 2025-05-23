interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Smith",
  age: 20,
  location: "Ethiopia",
};

const student2: Student = {
  firstName: "Trizah",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

const studentsList: Student[] = [student1, student2];

// function to render the table
function renderStudentsTable(students: Student[]): void {
  // Create table element
  const table = document.createElement("table");
  table.style.border = "1px solid black";
  table.style.borderCollapse = "collapse";

  // Create table header
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const firstNameHeader = document.createElement("th");
  firstNameHeader.textContent = "First Name";
  firstNameHeader.style.border = "1px solid black";
  firstNameHeader.style.padding = "8px";

  const locationHeader = document.createElement("th");
  locationHeader.textContent = "Location";
  locationHeader.style.border = "1px solid black";
  locationHeader.style.padding = "8px";

  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(locationHeader);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  const tbody = document.createElement("tbody");

  // Add a row for each student
  students.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    firstNameCell.style.border = "1px solid black";
    firstNameCell.style.padding = "8px";

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    locationCell.style.border = "1px solid black";
    locationCell.style.padding = "8px";

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);

  // Append table to the document body
  document.body.appendChild(table);
}

// Call the function to render the table
renderStudentsTable(studentsList);
