import React, {Component} from 'react';
import PropTypes from 'prop-types';

class RComponentTable extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isFixedSize: false,
            recvProps: false,
            heading: '',
            rows:[],
            content: [],
        }; 
    }

    componentWillReceiveProps (props) {
        props !== null ? this.setState({recvProps: !this.state.recvProps}, () => {console.log('Received Props successfully')}) : alert("There's been an error in receiving props!");

        if (this.state.recvProps) {
            this.setState({heading: props.tableHeading, rows:props.tableRows, content: props.tableContent}, () => {console.log("Set all data for rendering.")});
        } else {
            console.error("There's been a problem with the props that you are passing!");
        }
    }

    render() {
        return (
            <React.Fragment>
                
            </React.Fragment>
        );
    }
}

RComponentTable.propTypes = {
    tableHeading: PropTypes.string.isRequired,
    tableRows: PropTypes.array.isRequired,
    tableContent: PropTypes.array.isRequired
}

export default RComponentTable;