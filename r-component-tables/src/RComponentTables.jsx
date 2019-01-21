import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components'

// BEGIN STYLES 

const topMargin = {
	marginTop: '30px'
};

const overallComponent = {
	fontFamily: 'sans-serif',
    display: 'flex',
    flexDirection: 'column',
    width: '500px'
};

const Table = styled.table`
	overflow-x: auto;
	width: 100%;
	table-layout: fixed;
	border-collapse: collapse;
`;

const TH = styled.th`
    border: 2px dashed #000;
	padding: 10px;
`;

const TD = styled.td`
	padding: 8px;
	&:hover {
		background: #c4c4c4;
		color: #ffffff;
	}
`;

// const mainTableOddRow = {
//     backgroundColor: '#c4c4c4'
// };
										// TODO: Need to figure out a way for the odd and even part
// const mainTableEvenHeading = {
//     backgroundColor: '#c4c4c4'
// };

// END STYLES 

class RComponentTables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finalElement: []
    };
  }

  componentWillMount() {
    let i = 0; 																		// counter for the style

    let tempRows = this.props.tableRows;
    let tempContent = this.props.tableContent;

    for (let i = 0; i < this.props.tableRows.length; i++) {
      tempRows[i] = this.props.tableRows[i];
      tempContent[i] = Object.values(this.props.tableContent[i]);
    }

    let tableHeaders = (
      <tr key={"tr" + Math.floor(Math.random() * 200)}>
        {tempRows.map(column => {
          return  <TH key={"th" + Math.floor(Math.random() * 900)}>
                    {column}
                  </TH>;
        })}
      </tr>
    );

    let tableBody = [];
	
	i = 0; 																			// resetting the counter.

    tableBody = tempContent.map(row => {
      return (
        <tr key={"tri" + Math.floor(Math.random() * 700)}>
          {row.map(function(col) {
            return <TD key={"tr" + Math.floor(Math.random() * 400)}>{col}</TD>;
          })}
        </tr>
      );
    });

    let tBody = (
      <React.Fragment>
        <thead>{tableHeaders}</thead>
        <tbody>{tableBody}</tbody>
      </React.Fragment>
    );

    this.setState(
      {
        finalElement: [...this.state.finalElement, tBody]
      },
      () => {
        console.log(this.state.finalElement);
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        <div style={overallComponent}>
            <h1>{this.props.tableHeading}</h1>
            <div style={topMargin}>
            <Table>{this.state.finalElement[0]}</Table>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

RComponentTables.defaultProps = {
  //makeResponsive: true, // TODO : feature
  tableHeading: "Here's a Table Heading"
};

RComponentTables.propTypes = {
  tableHeading: PropTypes.string,
  tableRows: PropTypes.array.isRequired,
  tableContent: PropTypes.array.isRequired,
  //makeResponsive: PropTypes.bool.isRequired
};

export default RComponentTables;
