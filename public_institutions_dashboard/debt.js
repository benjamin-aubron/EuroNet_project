//DEBT

//Treemap Chart
const layout_treemap = {
  margin: { t: 0, l: 20, r: 20, b: 20 },
  autosize: true,
  paper_bgcolor: "#1f2937",
  clickmode: "none",
  dragmode: false,

};

const config_treemap = {
  responsive: true,
  displayModeBar: false,
};

const data_treemap = [
  {
    type: "treemap",
    labels: [
      "Créancier 1",
      "Créancier 2",
      "Créancier 3",
      "Créancier 4",
      "Créancier 5",
      "Créancier 6",
      "Créancier 7",
    ],
    parents: ["", "", "", "", "", "", "", ""],
    values: [220, 80, 40, 20, 10, 6, 4],
    text: ["58%", "21%", "10%", "8%", "3%", "2%", "1%"],
    textinfo: "label",
    hovertemplate:
      `<extra></extra>` +
      "<b>Créancier</b>: %{label}" +
      "<br><b>Montant prêté</b>: %{value} M€<br>" +
      "<b>Part de la dette</b>: %{text}",
    marker: {
      colors: ["lightblue", "lightgreen", "lightyellow", "lightpink"],
      line: {
        width: 1,
      },
    },
  },
];

Plotly.newPlot("treemap_debt", data_treemap, layout_treemap, config_treemap);


// Debt trends + Loans
const configDebt = {
  responsive: true,
  displayModeBar: false,
};

// Debt trends
const layoutDebtTrend = {
  margin: { t: 0, l: 30, r: 30, b: 30 },
  autosize: true,
  paper_bgcolor: "#1f2937",
  plot_bgcolor: "#1f2937",
  hovermode: "closest",
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

const debtTrendData = {
  x: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  y: [390, 432, 419, 399, 425, 412, 392, 403, 391, 377, 380],
  type: "scatter",
  mode: "lines+markers",
  marker: {
    color: "#cc00cc",
    size: 12,
    symbol: "square",
  },
  line: {
    color: "#cc00cc",
    width: 3,
  },
  hovertemplate:
    `<extra></extra>` + "<br><b>Année</b>: %{x}<br>" + "<b>Dette</b>: %{y} M€",
  name: "Dette",
};
const traceDebtTrend = [debtTrendData];
Plotly.newPlot("debt_trend_graph", traceDebtTrend, layoutDebtTrend, configDebt);

// Loans
const layoutLoans = {
  margin: { t: 0, l: 30, r: 30, b: 30 },
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

const annuity = {
  x: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  y: [61, 62, 57, 51, 58, 49, 87, 41, 43, 42, 51],
  type: "scatter",
  mode: "lines+markers",
  marker: {
    color: "#1f77b4",
    size: 12,
    symbol: "circle",
  },
  line: {
    color: "#1f77b4",
    width: 3,
  },
  hovertemplate:
    `<extra></extra>` +
    "<b>Annuité</b>: %{y} M€",
  name: "Annuité",
};

const loan = {
  x: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  y: [91, 78, 42, 38, 69, 25, 54, 45, 61, 88, 64],
  type: "scatter",
  mode: "lines+markers",
  marker: {
    color: "#ff7f0e",
    size: 12,
    symbol: "circle",
  },
  line: {
    color: "#ff7f0e",
    width: 3,
  },
  hovertemplate:
    `<extra></extra>` +
    "<b>Emprunt</b>: %{y} M€",
  name: "Emprunt",
};

const annuityVsLoan = [annuity, loan];

Plotly.newPlot("loan_graph", annuityVsLoan, layoutLoans, configDebt);
