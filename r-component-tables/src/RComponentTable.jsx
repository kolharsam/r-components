import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    styles: PropTypes.object
}

const defaultProps = {
    styles: {
        label: {
            fontFamily: 'Comic Sans MS',
            color: 'green'
        },
        input: {
            background: '#ddd',
            border: '1px solid red'
        }
    }
}

class BoilerplateComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(e.target.value);
    }
    
    render() {
        const styles = this.props.styles || {};

        return (
            <div>
                <label style={styles.label}>{this.props.label}</label>
                <input type="text" style={styles.input} onChange={this.handleChange} />
            </div>
        );
    }
}

BoilerplateComponent.propTypes = propTypes;
BoilerplateComponent.defaultProps = defaultProps;

export default BoilerplateComponent;

// import React, {Component} from 'react';
// import PropTypes from 'prop-types';

// class RComponentTable extends Component {
//     constructor (props) {
//         super(props);
//         this.state = {
//             isFixedSize: false,
//             recvProps: false,
//             heading: '',
//             rows:[],
//             content: [],
//         }; 
//     }

//     componentWillReceiveProps (props) {
//         props !== null ? this.setState({recvProps: !this.state.recvProps}, () => {console.log('Received Props successfully')}) : alert("There's been an error in receiving props!");

//         if (this.state.recvProps) {
//             this.setState({heading: props.tableHeading, rows:props.tableRows, content: props.tableContent}, () => {console.log("Set all data for rendering.")});
//         } else {
//             console.error("There's been a problem with the props that you are passing!");
//         }
//     }

//     render() {
//         return (
//             <React.Fragment>
                
//             </React.Fragment>
//         );
//     }
// }

// RComponentTable.propTypes = {
//     tableHeading: PropTypes.string.isRequired,
//     tableRows: PropTypes.array.isRequired,
//     tableContent: PropTypes.array.isRequired
// }

// export default RComponentTable;