import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from './styles.css'

const topMargin = {
  marginTop: '30px'
};

const localStyles = {
  // TODO: Load Local Styles here
};
class RComponentTables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finalElement: []
    };
  }

  componentWillMount() {
    let tempRows = this.props.tableRows;
    let tempContent = this.props.tableContent;

    for (let i = 0; i < this.props.tableRows.length; i++) {
      tempRows[i] = this.props.tableRows[i];
      tempContent[i] = Object.values(this.props.tableContent[i]);
    }

    let tableHeaders = (
      <tr key={"tr" + Math.floor(Math.random() * 200)}>
        {tempRows.map(column => {
          return <th key={"th" + Math.floor(Math.random() * 900)}>{column}</th>;
        })}
      </tr>
    );

    let tableBody = [];

    tableBody = tempContent.map(row => {
      return (
        <tr key={"tri" + Math.floor(Math.random() * 700)}>
          {row.map(function(col) {
            return <td key={"tr" + Math.floor(Math.random() * 400)}>{col}</td>;
          })}
        </tr>
      );
    });

    //console.log(typeof(tableBody));

    let tBody = (
      <React.Fragment>
        <thead>{tableHeaders}</thead>
        <tbody>{tableBody}</tbody>
      </React.Fragment>
    );

    //console.log(tBody);

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
        <div className={styles.component}>
            <h1>{this.props.tableHeading}</h1>
            <div style={topMargin}>
            <table className={styles.mainTable}>{this.state.finalElement[0]}</table>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

RComponentTables.defaultProps = {
  //makeResponsive: true,
  tableHeading: "Here's a Table Heading"
};

RComponentTables.propTypes = {
  tableHeading: PropTypes.string,
  tableRows: PropTypes.array.isRequired,
  tableContent: PropTypes.array.isRequired,
  //makeResponsive: PropTypes.bool.isRequired
};

export default RComponentTables;
