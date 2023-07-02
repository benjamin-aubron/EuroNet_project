//DEBT

//Treemap Chart
const data = [{
  type: 'treemap',
  labels: ['A', 'B', 'C', 'D'],
  parents: ['', '', '', ''],
  values: [10, 20, 15, 5],
  textinfo: 'label+value',
  marker: {
    colors: ['lightblue', 'lightgreen', 'lightyellow', 'lightpink'],
    line: {
      width: 2
    }
  }
}];

const layout = {
  margin: { t: 0, l: 0, r: 0, b: 0 },
  autosize: true
};

Plotly.newPlot('treemap_debt', data, layout);


// Debt trends





// Loans