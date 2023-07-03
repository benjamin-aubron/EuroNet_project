//DEBT

//Treemap Chart
const data = [
  {
    type: "treemap",
    labels: ["Créancier 1", "Créancier 2", "Créancier 3", "Créancier 4","Créancier 5","Créancier 6", "Créancier 7"],
    parents: ["", "", "", "","", "", "",""],
    values: [220, 80, 40, 20, 10, 6, 4],
    text : ["58%","21%","10%","8%","3%","2%","1%",],
    textinfo: "none",
    hovertemplate: `<extra></extra>`+'<b>Créancier</b>: %{label}' +
    '<br><b>Montant prêté</b>: %{value} M€<br>' +
    '<b>Part de la dette</b>: %{text}',
    marker: {
      colors: ["lightblue", "lightgreen", "lightyellow", "lightpink"],
      line: {
        width: 1,
      },
    },
  },
];

const layout = {
  margin: { t: 0, l: 0, r: 0, b: 0 },
  autosize: true,
  paper_bgcolor: "#1f2937",
};

const config = {
  responsive: true,
  displayModeBar: false
};

Plotly.newPlot("treemap_debt", data, layout, config);


// Debt donut
// var data2 = [{
//   values: [16, 15, 12, 6, 5, 4, 42],
//   labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
//   domain: {column: 0},
//   name: 'GHG Emissions',
//   hoverinfo: 'label+percent+name',
//   hole: .5,
//   type: 'pie'
// }];

// var layout2 = {
//   title: false,
//   annotations: [
//     {
//       font: {
//         size: 20
//       },
//       showarrow: false,
//       text: 'GHG',
//       x: 0.17,
//       y: 0.5
//     }
//   ],
//   showlegend: false,
//   margin: {"t": 0, "b": 0, "l": 0, "r": 0},
// };

// Plotly.newPlot('donut_debt', data2, layout2);

// Debt trends
var trace_debt_trend = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter'
};

var data4 = [trace_debt_trend];

Plotly.newPlot('debt_trend_graph', data4);

// Loans
var trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter'
};

var trace2 = {
  x: [1, 2, 3, 4],
  y: [16, 5, 11, 9],
  type: 'scatter'
};

var data3 = [trace1, trace2];

Plotly.newPlot('loan_graph', data3);