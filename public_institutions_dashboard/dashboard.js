// Sankey Chart - A retravailler plus tard
// const data = {
//   type: "sankey",
//   orientation: "h",
//   node: {
//     pad: 15,
//     thickness: 100,
//     line: {
//       color: "black",
//       width: 0.5,
//     },
//     label: [
//       "Institutions publiques",
//       "Entreprises",
//       "Citoyens",
//       "Organismes à but non lucratif",
//       "Entité",
//       "Institutions publiques",
//       "Entreprises",
//       "Citoyens",
//       "Organismes à but non lucratif",
//     ],
//     x: [0.01, 0.01, 0.01, 0.01, 0.5, 1, 1, 1, 1],
//     y: [0.01, 0.33, 0.66, 1, 0.5, 0.01, 0.33, 0.66, 1],
//     color: [
//       "blue",
//       "red",
//       "green",
//       "yellow",
//       "black",
//       "blue",
//       "red",
//       "green",
//       "yellow",
//     ],
//   },

//   link: {
//     source: [0, 1, 2, 3, 4, 4, 4, 4],
//     target: [4, 4, 4, 4, 5, 6, 7, 8],
//     value: [8, 4, 2, 8, 8, 12, 2, 1],
//     color: [
//       "#123456",
//       "red",
//       "green",
//       "yellow",
//       "blue",
//       "red",
//       "green",
//       "yellow",
//     ],
//   },
// };

// const data = [data];

// const layout = {
//   title: "",
//   font: {
//     size: 10,
//   },
//   autosize: true,
//   // paper_bgcolor: "#1f2937",
// };

// //Plot the sankey diagram and on window.resize makes the graph responsiv
// Plotly.react("sankey_diagram", data, layout, {displayModeBar: false});
// window.onresize = function() {Plotly.react("sankey_diagram", data, layout, {displayModeBar: false})};

// Pie chart - Inflows
// const ctx = document.getElementById("pieChartInflows");

// new Chart(ctx, {
//   type: "bar",
//   data: {
//     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//     datasets: [
//       {
//         label: "# of Votes",
//         data: [12, 19, 3, 5, 2, 3],
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// });

// DASHBOARD PUBLIC INSTITUTIONS
// Inflow PieChart
// Graph Data
// const dataInflow = {
//   labels: [
//     "Institutions publiques",
//     "Entreprises",
//     "Citoyen.nes",
//     "Organismes à but non lucratif",
//   ],
//   datasets: [
//     {
//       data: [321, 140, 33, 67],
//       backgroundColor: ["#D45B16", "#666666", "#8E1859", "#00A1A2"],
//     },
//   ],
// };

// // Graph config
// const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       display: false,
//       labels: {
//         fontColor: "black",
//       },
//       position: "top",
//     },
//   },
// };

// // Create graph
// const pieChartInflows = document.getElementById("pieChartInflows");
// new Chart(pieChartInflows, {
//   type: "doughnut",
//   data: dataInflow,
//   options: options,
// });

// // Outflow PieChart
// // Graph Data
// const dataOutflow = {
//   labels: [
//     "Institutions publiques",
//     "Entreprises",
//     "Citoyen.nes",
//     "Organismes à but non lucratif",
//   ],
//   datasets: [
//     {
//       data: [213, 96, 34, 171],
//       backgroundColor: ["#D45B16", "#666666", "#8E1859", "#00A1A2"],
//     },
//   ],
// };

// // Create graph
// const pieChartOutflows = document.getElementById("pieChartOutflows");
// new Chart(pieChartOutflows, {
//   type: "doughnut",
//   data: dataOutflow,
//   options: options,
// });

//Inflows and Outflows

//Config
const config = {
  responsive: true,
  displayModeBar: false,
};

//Layout
const layout = {
  margin: { t: 10, l: 10, r: 10, b: 10 },
  paper_bgcolor: "#1f2937",
  plot_bgcolor: "#1f2937",
  legend: {
    orientation: "h",
    x: 0.5, // Center the legend horizontally
    xanchor: "center",
    font: {
      color: "#d1d5db",
    },
  }
};

//Inflows donut
const dataInflows = [{
  type: 'pie',
  values: [321, 140, 33, 67],
  labels: [
    "Institutions publiques",
    "Entreprises",
    "Citoyen.nes",
    "Organismes à but non lucratif",
  ],
  hole: 0.5, // Set the size of the hole in the middle
  hovertemplate:
    `<extra></extra>` +
    "<b>Entité</b>: %{label}" +
    "<br><b>Montant</b>: %{value} M€<br>" +
    "<b>Part des recettes</b>: %{percent}",
  textinfo: 'label+percent', 
  textposition: 'inside',
  textfont: {
    color: "white",
  },
  texttemplate: '%{percent:.0%}',
  marker: {
    colors: ["#D45B16", "#666666", "#8E1859", "#00A1A2"],
    line: {
      color: '#1f2937',
      width: 2,
    }
  },
}];

Plotly.newPlot('pieChartInflows', dataInflows, layout, config);

//Inflows donut
const dataOutflows = [{
  type: 'pie',
  values: [213, 96, 34, 171],
  labels: [
    "Institutions publiques",
    "Entreprises",
    "Citoyen.nes",
    "Organismes à but non lucratif",
  ],
  hole: 0.5, // Set the size of the hole in the middle
  hovertemplate:
    `<extra></extra>` +
    "<b>Entité</b>: %{label}" +
    "<br><b>Montant</b>: %{value} M€<br>" +
    "<b>Part des dépenses</b>: %{percent}",
  textinfo: 'label+percent', 
  textposition: 'inside',
  textfont: {
    color: "white",
  },
  texttemplate: '%{percent:.0%}',
  marker: {
    colors: ["#D45B16", "#666666", "#8E1859", "#00A1A2"],
    line: {
      color: '#1f2937',
      width: 2,
    }
  },
}];


Plotly.newPlot('pieChartOutflows', dataOutflows, layout, config);
