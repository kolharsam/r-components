import React, { Component } from "react";
import PropTypes from "prop-types";
//import styled from 'styled-components'; - TODO: write import once I know what to do with the styles

// BEGIN STYLES

//  TODO: WHAT DO I PUT IN STYLES?

// END STYLES

const data = {
    "Manchester United": 13,
    "Chelsea": 5,
    "Arsenal": 3,
    "Manchester City": 3,
    "Leicester City": 1,
    "Blackburn Rovers": 1,
    "Liverpool": 0,
    "Tottenham Hotspurs": 0
}

class RBarGraph extends Component {
    constructor(props) {
        super(props);
        this.drawGridLine = this.drawGridLine.bind(this);
        this.drawBars = this.drawBars.bind(this);
        this.draw = this.draw.bind(this);
        this.makeBarGraph = this.makeBarGraph.bind(this);
        this.makeLabelText = this.makeLabelText.bind(this);
        this.makeLegend = this.makeLegend.bind(this);
        this.makeBars = this.makeBars.bind(this);
    }

    componentDidMount() {
        const canvas = this.refs.canvas;
        const context = canvas.getContext('2d');
        const legend = this.refs.legend;

        this.makeBarGraph(canvas, context, legend);
    }

    drawGridLine (context, startX, startY, endX, endY, lineColor) {
        context.save();
        context.strokeStyle = lineColor;
        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(endX, endY);
        context.stroke();
        context.restore();
    }

    drawBars (context, beginTopX, beginTopY, width, height, fillColor) {
        context.save();
        context.fillStyle = fillColor;
        context.fillRect(beginTopX, beginTopY, width, height);
        context.restore();
    }

    makeLabelText (context, canvas) {
        context.save();
        context.textBaseline = "bottom";
        context.textAlign = "center";
        context.fillStyle = "#000000";
        context.font = "bold 14px Helvetica";
        context.fillText(this.props.label, canvas.width / 2, canvas.height);
        context.restore();
    }

    makeLegend(legend) {
        var barIndex = 0;
        var ul = document.createElement("ul");
        legend.append(ul);
        for (var data in this.props.data) {
            var li = document.createElement("li");
            li.style.listStyle = "none";
            li.style.borderLeft = "20px solid " + this.props.colors[barIndex % this.props.colors.length];
            li.style.padding = "5px";
            li.textContent = data;
            ul.append(li);
            barIndex++;
        }
    }

    makeGridLines (canvasHeight, maxValue, canvas, context) {
        var gridValue = 0;
        while (gridValue <= maxValue) {
            var gridY = canvasHeight * (1 - gridValue / maxValue) + this.props.padding;
            drawLine(context, 0, gridY, canvas.width, gridY, this.options.gridColor);

            //writing grid markers
            context.save();
            context.fillStyle = this.options.gridColor;
            context.textBaseline = "bottom";
            context.font = "bold 10px Arial";
            context.fillText(gridValue, 10, gridY - 2);
            context.restore();

            gridValue += this.props.gridScale;
        }
    }

    makeBars (canvasWidth, canvasHeight, maxValue, context, canvas) {
        var barIndex = 0;
        var numberOfBars = Object.keys(this.props.data).length;
        var barSize = (canvasWidth) / numberOfBars;

        for (var iter in this.props.data) {
            var val = this.props.data[iter];
            var barHeight = Math.round(canvasHeight * val / maxValue);
            this.drawBars(context, 
                        this.props.padding + barIndex * barSize, 
                        canvas.height - barHeight - this.props.padding, 
                        barSize, barHeight, this.props.colors[barIndex % this.props.colors.length]
                        );
            barIndex++;
        }
    }

    makeBarGraph (canvas, context, legend) {
            var maxValue = 0;
                
            for (var number in this.props.data) {
                maxValue = Math.max(maxValue, this.props.data[number]);
            }

            var canvasAdjustHeight = canvas.height - this.props.padding * 2;
            var canvasAdjustWidth = canvas.width - this.props.padding * 2;

            //drawing the grid lines
            this.makeGridLines(canvasAdjustHeight, maxValue, canvas, context);

            //drawing the bars
            this.makeBars(canvasAdjustWidth, canvasAdjustHeight, maxValue, context, canvas);

            //draw names
            this.makeLabelText(context, canvas);

            //draw legend
            this.makeLegend(legend);
    }

    render() {
        return (
            <React.Fragment>
              <canvas id="canvas" ref="canvas" width={640} height={420}></canvas>
              <legend for="canvas" ref="legend"></legend>
            </React.Fragment>
        );
    }
}

RBarGraph.propTypes = {
  label: PropTypes.string.isRequired,
  styles: PropTypes.object,
  padding: PropTypes.number,
  gridScale: PropTypes.number.isRequired,
  gridColor: PropTypes.string,
  colors: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired
};

RBarGraph.defaultProps = {
  label: "Premier League Winners",
  padding: 20,
  gridScale: 5,
  gridColor: "#eeeeee",
  colors: ["#a55ca5", "#67b6c7", "#bccd7a", "#eb9743"],
  data: data
};

export default RBarGraph;

{
  /**

    code used for counting the champions: 

    var champ = ["MCFC", "CHE", "LEI", "CHE", "MCFC", "MUFC", "MCFC", "MUFC", 
                "CHE", "MUFC", "MUFC", "MUFC", "CHE", "CHE", "ARS", "MUFC", "ARS", "MUFC", 
                "MUFC", "MUFC", "ARS", "MUFC", "MUFC", "BLK", "MUFC", "MUFC"];


    var champCount = champ.reduce((total, value) => {
            total[value] = (total[value] || 0) + 1;
        return total;
    });

    console.log(champCount);
*/
}