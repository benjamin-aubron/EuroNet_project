// BUDGET

//Treemap Chart
const treemapLayout = {
  margin: { t: 25, l: 20, r: 20, b: 20 },
  autosize: true,
  paper_bgcolor: "#1f2937",
  clickmode: "none",
  dragmode: false,
  font: {
    size: 15,
    color: '#7f7f7f'
  }
};

const treemapConfig = {
  responsive: true,
  displayModeBar: false,
};

const treemapIncomesData = [
  {
    type: "treemap",
    labels: [
      "Recettes",
      "Fonctionnement",
      "Fiscalité directe",
      "Compensation fiscale",
      "Reversement de la région",
      "Recettes propres",
      "Dotations de l'Etat",
      "Fiscalité indirecte",
      "Autres recettes",
      "Investissement",
      "Recettes propres d'investissement",
      "Emprunt",
    ],
    parents: [
      "",
      "Recettes",
      "Fonctionnement",
      "Fonctionnement",
      "Fonctionnement",
      "Fonctionnement",
      "Fonctionnement",
      "Fonctionnement",
      "Fonctionnement",
      "Recettes",
      "Investissement",
      "Investissement",
    ],
    values: [0, 0, 401, 5, 53, 87, 70, 61, 30, 0, 22, 94],
    text: ["58%", "21%", "10%", "8%", "3%", "2%", "1%"],
    textinfo: "label",
    hovertemplate:
      `<extra></extra>` +
      "<b>Intitulé</b>: %{label}" +
      "<br><b>Montant budgeté</b>: %{value} M€<br>" +
      "<b>Part du budget</b>: %{text}",
    marker: {
      colors: ["#86efac", "#22c55e", "#86efac","#86efac", "#86efac", "#86efac", "#86efac", "#86efac", "#86efac","#22c55e","#86efac", "#86efac"],
      line: {
        width: 0.5,
      },
    },
  },
];

Plotly.newPlot("detailed_incomes", treemapIncomesData, treemapLayout, treemapConfig);

const treemapExpendituresData = [
  {
    type: "treemap",
    labels: [
      "Dépenses",
      "Fonctionnement",
      "Masse salariale",
      "Dépenses imprévues",
      "Autres charges",
      "Subventions personnes de droits privé",
      "Subventions organismes publics",
      "Charges à caractère général",
      "Frais financiers",
      "Investissement",
      "Remboursement de la dette",
      "Plan d'équipement",
    ],
    parents: [
      "",
      "Dépenses",
      "Fonctionnement",
      "Fonctionnement",
      "Fonctionnement",
      "Fonctionnement",
      "Fonctionnement",
      "Fonctionnement",
      "Fonctionnement",
      "Dépenses",
      "Investissement",
      "Investissement",
    ],
    values: [0, 0, 357, 3, 57, 77, 15, 116, 5, 0, 41, 152],
    text: ["58%", "21%", "10%", "8%", "3%", "2%", "1%"],
    textinfo: "label",
    hovertemplate:
      `<extra></extra>` +
      "<b>Intitulé</b>: %{label}" +
      "<br><b>Montant budgeté</b>: %{value} M€<br>" +
      "<b>Part du budget</b>: %{text}",
    marker: {
      colors: ["pink", "#fda4af", "pink", "pink","pink", "pink", "pink", "pink", "pink", "#fda4af","pink","pink"],
      line: {
        width: 0.5,
      },
    },
  },
];

Plotly.newPlot("detailed_expenditures", treemapExpendituresData, treemapLayout, treemapConfig);


const configBudget = {
  responsive: true,
  displayModeBar: false,
};

// // Loans
const layoutBudget = {
  margin: { t: 10, l: 30, r: 30, b: 30 },
  autosize: true,
  paper_bgcolor: "#1f2937",
  plot_bgcolor: "#1f2937",
  hovermode: "x unified",
  showlegend: true,
  legend: {
    orientation: "h",
    x: 0.5, // Center the legend horizontally
    xanchor: "center",
    font: {
      color: "#d1d5db",
    },
  },
  xaxis: {
    showline: true,
    linecolor: "#6b7280",
    showgrid: true,
    tickfont: {
      color: "#6b7280",
    },
  },
  yaxis: {
    showline: true,
    linecolor: "#6b7280",
    showgrid: true,
    tickfont: {
      color: "#6b7280",
    },
  },
  dragmode: false, //disables the ability to drag and select a region.
};

// const incomes = {
//   x: [
//     "Janvier",
//     "Février",
//     "Mars",
//     "Avril",
//     "Mai",
//     "Juin",
//     "Juillet",
//     "Aout",
//     "Septembre",
//     "Octobre",
//     "Novembre",
//     "Décembre",
//   ],
//   y: [58, 120, 210, 247, 340, 395, 430, 503, 602],
//   type: "scatter",
//   mode: "lines+markers",
//   marker: {
//     color: "#16a34a",
//     size: 10,
//     symbol: "circle",
//   },
//   line: {
//     color: "#16a34a",
//     width: 2,
//   },
//   hovertemplate: `<extra></extra>` + "<b>Recettes cumulées</b>: %{y} M€",
//   name: "Recettes cumulées",
// };

// const expenditures = {
//   x: [
//     "Janvier",
//     "Février",
//     "Mars",
//     "Avril",
//     "Mai",
//     "Juin",
//     "Juillet",
//     "Aout",
//     "Septembre",
//     "Octobre",
//     "Novembre",
//     "Décembre",
//   ],
//   y: [68, 130, 250, 227, 370, 425, 490, 563, 632],
//   type: "scatter",
//   mode: "lines+markers",
//   marker: {
//     color: "#b91c1c",
//     size: 10,
//     symbol: "circle",
//   },
//   line: {
//     color: "#b91c1c",
//     width: 2,
//   },
//   hovertemplate: `<extra></extra>` + "<b>Dépenses cumulées</b>: %{y} M€",
//   name: "Dépenses cumulées",
// };

// const budgetLinear = {
//   x: [
//     "Janvier",
//     "Février",
//     "Mars",
//     "Avril",
//     "Mai",
//     "Juin",
//     "Juillet",
//     "Aout",
//     "Septembre",
//     "Octobre",
//     "Novembre",
//     "Décembre",
//   ],
//   y: [69, 137, 206, 274, 343, 412, 480, 549, 617, 686, 754, 823],
//   type: "scatter",
//   fill: "tozeroy",
//   fillcolor: "rgba(128, 128, 128, 0.2)",
//   mode: "lines",
//   line: {
//     color: "gray",
//     width: 0,
//   },
//   hovertemplate: `<extra></extra>` + "<b>Prévisionnel</b>: %{y} M€",
//   name: "Budget prévisionnel",
// };

// const budget = {
//   x: [
//     "Janvier",
//     "Février",
//     "Mars",
//     "Avril",
//     "Mai",
//     "Juin",
//     "Juillet",
//     "Aout",
//     "Septembre",
//     "Octobre",
//     "Novembre",
//     "Décembre",
//   ],
//   y: [823, 823, 823, 823, 823, 823, 823, 823, 823, 823, 823, 823],
//   type: "scatter",
//   mode: "lines",
//   line: {
//     color: "#94a3b8",
//     width: 1,
//     dash: "dash",
//   },
//   hovertemplate: `<extra></extra>` + "<b>Budget annuel</b>: %{y} M€",
//   name: "Budget annuel",
// };

// const incomesVsExpenditures = [incomes, expenditures, budgetLinear, budget];

// Plotly.newPlot("realVsPlanned_graph", incomesVsExpenditures, layoutBudget, configBudget);


// const data = [
//   {
//     type: 'bar',
//   x: [
//     "Janvier",
//     "Février",
//     "Mars",
//     "Avril",
//     "Mai",
//     "Juin",
//     "Juillet",
//     "Aout",
//     "Septembre",
//     "Octobre",
//     "Novembre",
//     "Décembre",
//   ],
// y: [500,600,700],
//     base: [-500,-600,-700],
//     hovertemplate: '%{base}',
//     marker: {
//       color: '#16a34a'
//     },
//     name: 'Recettes'
//   },
//   {
//     type: 'bar',
//     x: [
//       "Janvier",
//       "Février",
//       "Mars",
//       "Avril",
//       "Mai",
//       "Juin",
//       "Juillet",
//       "Aout",
//       "Septembre",
//       "Octobre",
//       "Novembre",
//       "Décembre",
//     ],
//    y: [300,400,700],
//     base: 0,
//     marker: {
//       color: '#b91c1c'
//     },
//     name: 'Dépenses'
//   }];


// Plotly.newPlot('realVsPlanned_graph', data, layoutBudget, configBudget);


const trace1 = {
  x: [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ],
  y: [-500,-700,-600],
  type: 'scatter'
};

const trace2 = {
  x: [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ],
  y: [500,700,600],
  type: 'scatter'
};

const data = [trace1, trace2];

Plotly.newPlot('realVsPlanned_graph', data, layoutBudget, configBudget);