import React from 'react';

export default class Deler extends React.Component {
    delete = () => {
        this.props.delete(this.props.delerInfo.name);
    }
    render() {
        return (
            <tr className={this.props.display ? "" : "d-none"}>
                <td>{this.props.delerInfo.name}</td>
                <td>{this.props.delerInfo.delerNummer}</td>
                <td>{this.props.delerInfo.hylle}</td>
                <td>{this.props.delerInfo.rad}</td>
                <th className={
                    this.props.delerInfo.antall > 0 ? "text-success" : "text-danger"
                }>{this.props.delerInfo.antall}</th>
                <td>
                 <button className="btn btn-danger" onClick={this.delete}>Delete</button>
                </td>
            </tr>
            
        );
    }
}
