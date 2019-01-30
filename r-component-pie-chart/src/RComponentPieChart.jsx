import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const data = {
  "Manchester United": 13,
  "Chelsea": 5,
  "Arsenal": 3,
  "Manchester City": 3,                                 // same as the one in Bar Graph Component
  "Leicester City": 1,
  "Blackburn Rovers": 1,
  "Liverpool": 0,
  "Tottenham Hotspurs": 0
};

class RComponentPieChart extends Component {
    constructor (props) {
        super(props);
        this.pieChartInit = this.pieChartInit.bind(this);
    }

    pieChartInit () {
        return <p>This is a Pie Chart</p>;
    }

    render () {
        return(
            <React.Fragment>
                {this.pieChartInit()}
            </React.Fragment>
        );
    }
}

RComponentPieChart.propTypes = {
    label: PropTypes.string.isRequired,
    styles: PropTypes.object,
    padding: PropTypes.number,
    gridScale: PropTypes.number.isRequired,
    gridColor: PropTypes.string,
    colors: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired
};

RComponentPieChart.defaultProps = {
    label: "Premier League Winners",
    padding: 20,
    gridScale: 5,
    gridColor: "#eeeeee",
    colors: ["#a55ca5", "#67b6c7", "#bccd7a", "#eb9743"],
    data: data
};

export default RComponentPieChart;