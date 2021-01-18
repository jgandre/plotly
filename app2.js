var dataset;

d3.json("samples.json").then(
    data => {  
        var names = data.names;
        var ele = document.getElementById("selDataset");
        for(var i = 0; i < names.length; i++) {
          var opt = names[i];

          var el = document.createElement("option");
          el.text = opt;
          el.value = opt;

          ele.add(el);
        };
        
        dataset = data   
        // console.log("Hello")
        // console.log(data)
        // console.log(data.samples.map(d => d.id))
        // console.log(data.names.map(d => d.names))
        // console.log(data.samples.map(d => d.sample_values))
        // console.log(data.samples.map(d => d.otu_ids))     
        
}
    )
    
    
    function optionChanged(value) {
        d3.json("samples.json").then(
            data => {
        //     console.log('clicked:', value);
        //     console.log(dataset);

        var sample = dataset.samples.find(d => d.id === value)
            console.log(sample);
        
        // Building Bar Chart
        let trace = [{
            type: 'bar',
            x: sample.sample_values.sort((a, b) => b - a).slice(0,10).reverse(),
            text: sample.otu_labels.sort((a, b) => b - a).slice(0,10).reverse(),
            y: sample.otu_ids.sort((a, b) => b - a).slice(0,10).map(otu_id => `OTU ${otu_id}`).reverse(),
            orientation: 'h'
        }];

        
        Plotly.newPlot("bar", trace)
        

        // Building Bubble Chart
        var trace1 = {
            x: sample.otu_ids.sort(),
            y: sample.sample_values.sort(),
            mode: 'markers',
            marker: {
                size: sample.sample_values.sort(),
                color: sample.otu_ids.sort(), 
                colorscale: 'Portland',
                type: 'heatmap',                
        }
    };
        
        var data = [trace1];
        
        var layout = {            
            showlegend: false,
            height: 600,
            width: 1200,
            xaxis: {
                title: {
                  text: 'OTU_ID',
                  font: {
                    family: 'Helvetica, monospace',
                    size: 18,
                    color: '#7f7f7f',
                  }
                },
              },
            
        };
        
        Plotly.newPlot('bubble', data, layout);

        // Metadata Table
        var meta = dataset.metadata.find(d => d.id == value)
            console.log(meta);
            
        let table = d3.select("#metadata-table")

        table.selectAll("tr").remove()

        let tableBody = table.append("tbody")
        
            let row = tableBody.append("tr")
            row.append("tr").text('id: ' + meta.id)
            row.append("tr").text('ethinicity: ' + meta.ethnicity)
            row.append("tr").text('gender: ' + meta.gender)
            row.append("tr").text('age: ' + meta.age)
            row.append("tr").text('location: ' + meta.location)
            row.append("tr").text('bbtype: ' + meta.bbtype)
            row.append("tr").text('wfreq: ' + meta.wfreq)
        })

    }