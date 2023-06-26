



// Sankey Diagram
var data = {
  type: "sankey",
  orientation: "h",
  node: {
     pad: 15,
     thickness: 30,
     line: {
        color: "black",
        width: 0.5
     },
     label: ["Institutions publiques", "Entreprises", "Citoyens", "Organismes à but non lucratif", "Entité", "Institutions publiques", "Entreprises", "Citoyens", "Organismes à but non lucratif"],
     color: ["blue", "red", "green", "yellow", "black", "blue", "red", "green", "yellow"]
        },

  link: {
     source: [0,1,2,3,4,4,4,4],
     target: [4,4,4,4,5,6,7,8],
     value:  [8,4,2,8,8,12,2,1]
  }
  }

  var data = [data]

  var layout = {
  title: "",
  font: {
     size: 20
  }
  }

  Plotly.react('sankey_diagram', data, layout)