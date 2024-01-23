function appendToTable() {
 
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const address = document.getElementById("address").value;
  const pincode = document.getElementById("pincode").value;
  const state = document.getElementById("state").value;
  const country = document.getElementById("country").value;
  const selectedOptions = [
    ...document.querySelectorAll("[name='checkboxOptions']"),
  ]
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  const gender = document.querySelector("[name='gender']:checked").value;

  const newRow = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = firstName;
  newRow.appendChild(firstNameCell);

  const lastNameCell = document.createElement("td");
  lastNameCell.textContent = lastName;
  newRow.appendChild(lastNameCell);

  const addressCell = document.createElement("td");
  addressCell.textContent = address;
  newRow.appendChild(addressCell);

  const PinCell = document.createElement("td");
  PinCell.textContent = pincode;
  newRow.appendChild(PinCell);

  const GenCell = document.createElement("td");
  GenCell.textContent = gender;
  newRow.appendChild(GenCell);

  const CheckCell = document.createElement("td");
  CheckCell.textContent = selectedOptions;
  newRow.appendChild(CheckCell);

  const StateCell = document.createElement("td");
  StateCell.textContent = state;
  newRow.appendChild(StateCell);

  const CounCell = document.createElement("td");
  CounCell.textContent = country;
  newRow.appendChild(CounCell);

  const tableBody = document
    .getElementById("data-table")
    .getElementsByTagName("tbody")[0];
  tableBody.appendChild(newRow);
}
