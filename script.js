const data = [
  {
    "CLASS NAME": "AGRICULTURAL DRY LAND",
    "LOSS": 267.9957,
    "GAIN": 203.7915,
    "CHANGE": -0.413875126,
    "UNCHANGED": 155.1294
  },
  {
    "CLASS NAME": "HIGH DENSITY URBAN",
    "LOSS": 107.4285,
    "GAIN": 159.6681,
    "CHANGE": 0.843209321,
    "UNCHANGED": 61.9533
  },
  {
    "CLASS NAME": "LOW DENSITY URBAN",
    "LOSS": 156.9402,
    "GAIN": 144.6066,
    "CHANGE": -0.220020872,
    "UNCHANGED": 56.0565
  },
  {
    "CLASS NAME": "SHRUB",
    "LOSS": 81.4023,
    "GAIN": 110.8251,
    "CHANGE": 0.791267306,
    "UNCHANGED": 37.1844
  },
  {
    "CLASS NAME": "VEGETATION",
    "LOSS": 81.6381,
    "GAIN": 83.4174,
    "CHANGE": 0.04231683,
    "UNCHANGED": 42.0471
  },
  {
    "CLASS NAME": "WATER BODIES",
    "LOSS": 21.7278,
    "GAIN": 14.8239,
    "CHANGE": -0.642516124,
    "UNCHANGED": 10.7451
  }
];

// Populate Table
const tableHead = document.getElementById("table-head");
const tableBody = document.getElementById("data-table");

tableHead.innerHTML = `<tr>
  <th>Class Name</th>
  <th>Loss</th>
  <th>Gain</th>
  <th>Change</th>
  <th>Unchanged</th>
</tr>`;

tableBody.innerHTML = data.map(row => `
  <tr>
    <td>${row["CLASS NAME"]}</td>
    <td>${row.LOSS.toFixed(2)}</td>
    <td>${row.GAIN.toFixed(2)}</td>
    <td>${row.CHANGE.toFixed(2)}</td>
    <td>${row.UNCHANGED.toFixed(2)}</td>
  </tr>
`).join("");

// Bar Chart
Plotly.newPlot('barChart', [
  {
    x: data.map(d => d["CLASS NAME"]),
    y: data.map(d => d.GAIN),
    name: 'Gain',
    type: 'bar',
    marker: { color: 'green' }
  },
  {
    x: data.map(d => d["CLASS NAME"]),
    y: data.map(d => d.LOSS),
    name: 'Loss',
    type: 'bar',
    marker: { color: 'red' }
  }
],);

// Pie Chart
function updatePieChart(valueType) {
  const values = data.map(d => valueType === "Changed"
    ? Math.abs(d.GAIN - d.LOSS)
    : d.UNCHANGED);
  const labels = data.map(d => d["CLASS NAME"]);

  Plotly.newPlot('pieChart', [{
    values: values,
    labels: labels,
    type: 'pie',
    hole: 0.4
  }], );
}

document.getElementById("valueTypeSelect").addEventListener("change", (e) => {
  updatePieChart(e.target.value);
});

// Initial render
updatePieChart("Changed");

// Dark mode toggle
document.getElementById("toggleDarkMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});











  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  