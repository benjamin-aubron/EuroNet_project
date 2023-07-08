const configBudget = {
  responsive: true,
  displayModeBar: false,
};

// Loans
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

const incomes = {
  x: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout","Septembre","Octobre", "Novembre", "Décembre"],
  y: [58, 120, 210, 247, 340, 395, 430, 503, 602],
  type: "scatter",
  mode: "lines+markers",
  marker: {
    color: "#16a34a",
    size: 10,
    symbol: "circle",
  },
  line: {
    color: "#16a34a",
    width: 2,
  },
  hovertemplate: `<extra></extra>` + "<b>Recettes cumulées</b>: %{y} M€",
  name: "Recettes cumulées",
};

const expenditures = {
  x: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout","Septembre","Octobre", "Novembre", "Décembre"],
  y: [68, 130, 250, 227, 370, 425, 490, 563, 632],
  type: "scatter",
  mode: "lines+markers",
  marker: {
    color: "#b91c1c",
    size: 10,
    symbol: "circle",
  },
  line: {
    color: "#b91c1c",
    width: 2,
  },
  hovertemplate: `<extra></extra>` + "<b>Dépenses cumulées</b>: %{y} M€",
  name: "Dépenses cumulées",
};

const budgetLinear = {
  x: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout","Septembre","Octobre", "Novembre", "Décembre"],
  y: [69, 137, 206, 274, 343, 412, 480, 549, 617, 686, 754, 823],
  type: "scatter",
  fill: 'tozeroy',
  fillcolor: "rgba(128, 128, 128, 0.2)",
  mode: "lines",
  line: {
    color: "gray",
    width: 0,
  },
  hovertemplate: `<extra></extra>` + "<b>Prévisionnel</b>: %{y} M€",
  name: "Budget prévisionnel",
};

const budget = {
  x: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout","Septembre","Octobre", "Novembre", "Décembre"],
  y: [823, 823, 823, 823, 823, 823, 823, 823, 823, 823, 823, 823],
  type: "scatter",
  mode: "lines",
  line: {
    color: "#94a3b8",
    width: 1,
    dash: "dash",
  },
  hovertemplate: `<extra></extra>` + "<b>Budget annuel</b>: %{y} M€",
  name: "Budget annuel",
};

const incomesVsExpenditures = [incomes, expenditures,budgetLinear, budget];

Plotly.newPlot("loan_graph", incomesVsExpenditures, layoutBudget, configBudget);