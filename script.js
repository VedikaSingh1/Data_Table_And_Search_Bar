//GIVEN DATA:
const carData = [
  {
    model: "Sedan X1",
    make: "ABC Motors",
    year: 2020,
    mileage: 25000,
    topSpeed: 180,
    manufacturer: "ABC Motors",
    color: "Blue",
    fuelType: "Petrol",
    transmission: "Automatic",
  },
  {
    model: "SUV Q3",
    make: "DEF Autos",
    year: 2022,
    mileage: 15000,
    topSpeed: 200,
    manufacturer: "DEF Autos",
    color: "Black",
    fuelType: "Diesel",
    transmission: "Automatic",
  },
  {
    model: "Hatchback Z5",
    make: "GHI Industries",
    year: 2019,
    mileage: 30000,
    topSpeed: 160,
    manufacturer: "GHI Industries",
    color: "Red",
    fuelType: "Electric",
    transmission: "Automatic",
  },
  {
    model: "Truck T8",
    make: "JKL Trucks",
    year: 2021,
    mileage: 10000,
    topSpeed: 140,
    manufacturer: "JKL Trucks",
    color: "White",
    fuelType: "Diesel",
    transmission: "Manual",
  },
  {
    model: "Convertible C2",
    make: "MNO Motors",
    year: 2018,
    mileage: 35000,
    topSpeed: 220,
    manufacturer: "MNO Motors",
    color: "Silver",
    fuelType: "Petrol",
    transmission: "Automatic",
  },
  {
    model: "Compact D4",
    make: "PQR Cars",
    year: 2023,
    mileage: 5000,
    topSpeed: 190,
    manufacturer: "PQR Cars",
    color: "Green",
    fuelType: "Electric",
    transmission: "Automatic",
  },
  {
    model: "SUV Q5",
    make: "RST Autos",
    year: 2020,
    mileage: 18000,
    topSpeed: 210,
    manufacturer: "RST Autos",
    color: "Black",
    fuelType: "Hybrid",
    transmission: "Automatic",
  },
  {
    model: "Sedan X2",
    make: "UVW Motors",
    year: 2022,
    mileage: 12000,
    topSpeed: 185,
    manufacturer: "UVW Motors",
    color: "Blue",
    fuelType: "Petrol",
    transmission: "Automatic",
  },
  {
    model: "Hatchback Z6",
    make: "XYZ Industries",
    year: 2019,
    mileage: 27000,
    topSpeed: 170,
    manufacturer: "XYZ Industries",
    color: "Red",
    fuelType: "Electric",
    transmission: "Automatic",
  },
  {
    model: "Truck T9",
    make: "LMN Trucks",
    year: 2021,
    mileage: 8000,
    topSpeed: 145,
    manufacturer: "LMN Trucks",
    color: "White",
    fuelType: "Diesel",
    transmission: "Manual",
  },
  {
    model: "Convertible C3",
    make: "OPQ Motors",
    year: 2018,
    mileage: 32000,
    topSpeed: 230,
    manufacturer: "OPQ Motors",
    color: "Silver",
    fuelType: "Petrol",
    transmission: "Automatic",
  },
  {
    model: "Compact D5",
    make: "RUV Cars",
    year: 2023,
    mileage: 6000,
    topSpeed: 195,
    manufacturer: "RUV Cars",
    color: "Green",
    fuelType: "Electric",
    transmission: "Automatic",
  },
  {
    model: "SUV Q6",
    make: "STU Autos",
    year: 2020,
    mileage: 17000,
    topSpeed: 215,
    manufacturer: "STU Autos",
    color: "Black",
    fuelType: "Hybrid",
    transmission: "Automatic",
  },
  {
    model: "Sedan X3",
    make: "VWX Motors",
    year: 2022,
    mileage: 13000,
    topSpeed: 190,
    manufacturer: "VWX Motors",
    color: "Blue",
    fuelType: "Petrol",
    transmission: "Automatic",
  },
  {
    model: "Hatchback Z7",
    make: "YZA Industries",
    year: 2019,
    mileage: 24000,
    topSpeed: 175,
    manufacturer: "YZA Industries",
    color: "Red",
    fuelType: "Electric",
    transmission: "Automatic",
  },
  {
    model: "Truck T10",
    make: "BCD Trucks",
    year: 2021,
    mileage: 7000,
    topSpeed: 150,
    manufacturer: "BCD Trucks",
    color: "White",
    fuelType: "Diesel",
    transmission: "Manual",
  },
  {
    model: "Convertible C4",
    make: "EFG Motors",
    year: 2018,
    mileage: 30000,
    topSpeed: 235,
    manufacturer: "EFG Motors",
    color: "Silver",
    fuelType: "Petrol",
    transmission: "Automatic",
  },
  {
    model: "Compact D6",
    make: "HIJ Cars",
    year: 2023,
    mileage: 7000,
    topSpeed: 200,
    manufacturer: "HIJ Cars",
    color: "Green",
    fuelType: "Electric",
    transmission: "Automatic",
  },
  {
    model: "SUV Q7",
    make: "KLM Autos",
    year: 2020,
    mileage: 16000,
    topSpeed: 220,
    manufacturer: "KLM Autos",
    color: "Black",
    fuelType: "Hybrid",
    transmission: "Automatic",
  },
  {
    model: "Sedan X4",
    make: "NOP Motors",
    year: 2022,
    mileage: 14000,
    topSpeed: 195,
    manufacturer: "NOP Motors",
    color: "Blue",
    fuelType: "Petrol",
    transmission: "Automatic",
  },
];

// Function to create and populate the table
// function populateTable(data) {
//   const table = document.querySelector("#carTable");

//   // Create table header
//   const headerRow = table.insertRow(0);
//   for (const key in data[0]) {
//     const headerCell = document.createElement("th");
//     headerCell.textContent = key;
//     headerRow.appendChild(headerCell);
//   }

//   // Create table rows and populate data
//   for (let i = 0; i < data.length; i++) {
//     const rowData = data[i];
//     const row = table.insertRow(i + 1);

//     for (const key in rowData) {
//       const cell = row.insertCell();
//       cell.textContent = rowData[key];
//     }
//   }
// }

// Function to create and populate the table
//REPLACING FOR LOOPS WITH FOREACH in above code
function populateTable(data) {
  const table = document.querySelector("#carTable");

  // Create table header
  const headerRow = table.insertRow(0);
  Object.keys(data[0]).forEach(function (key) {
    const headerCell = document.createElement("th");
    headerCell.textContent = key;
    headerRow.appendChild(headerCell);
  });

  // Create table rows and populate data
  data.forEach(function (rowData, i) {
    const row = table.insertRow(i + 1);

    Object.values(rowData).forEach(function (value) {
      const cell = row.insertCell();
      cell.textContent = value;
    });
  });
}

// Call the function to populate the table
populateTable(carData);

// Function to search for vehicles in the table
function searchTable() {
  const input = document.querySelector("#searchInput");
  const filter = input.value.toLowerCase();
  const table = document.querySelector("#carTable");
  const rows = table.getElementsByTagName("tr");

  // Loop through all rows and hide those that don't match the search input
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const cells = row.getElementsByTagName("td");
    let found = false;

    // Loop through cells in the row and check if any of them match the search input
    for (let j = 0; j < cells.length; j++) {
      const cell = cells[j];
      if (cell.textContent.toLowerCase() === filter) {
        found = true;
        break;
      }
    }

    // Toggle the row's visibility based on whether a match was found
    row.style.display = found ? "" : "none";
  }
}

// Call the searchTable function when Enter key is pressed in the input field
document
  .querySelector("#searchInput")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      searchTable();
    }
  });

// Adding event listener to the search input bar to diplay table again if empty
const input = document.querySelector("#searchInput");
input.addEventListener("input", function () {
  // When the input value changes, call the searchTable function
  //searchTable();

  // Check if the input value is empty and reset the table to show all rows if it is
  if (input.value.trim() === "") {
    const table = document.querySelector("#carTable");
    const rows = table.getElementsByTagName("tr");

    // Loop through all rows (except the header) and display them
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      row.style.display = "";
    }
  }
});
