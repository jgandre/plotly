// d3.json("samples.json").then(
//     data => {
//         let trace1 = {
//             x: data.map(d => d.date),
//             y: data.map(d => d.total_tests),
//             name: "Total Tests"
//         }

//         let trace2 = {
//             x: data.map(d => d.date),
//             y: data.map(d => d.total_cases),
//             name: "Total Cases"
//         }

//         let trace3 = {
//             x: data.map(d => d.date),
//             y: data.map(d => d.total_deaths),
//             name: "Total Deaths"
//         }

//         let plotData = [trace1, trace2, trace3]

//         let plotLayout = {
//             title: "USA COVID"
//         }

//         Plotly.newPlot("myPlot", plotData, plotLayout)
//     }
// )


d3.json("samples.json").then((d)=> console.log(d));

//  dropdown menue 

 let select = document.getElementById("selDataset")
    let dropDown = data.names;
    console.log(dropDown);

    for (let i = 0; i < dropDown.length; i++) {
        let opt =  dropDown[i];

        let el = document.createElement("option");
        el.text = opt;
        el.value = opt;

        select.add(el);
    };
    
;



// // From Doug's class: horizontal barchart 
// let trace1 = {
//     x: reverseSlice.map(object => object.greekSearchResults),
//     y: reverseSlice.map(object => object.greekName),
//     name: "Greek",
//     type: "bar",
//     orientation: "h"
// }
