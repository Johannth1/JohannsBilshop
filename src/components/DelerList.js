import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Deler from './Deler';
import SearchBar from './SearchBar';



 export default class DelerList extends React.Component {
    state = {
        deler: [],
        searchMethod: null
    }
    componentDidMount() {
        axios.get(this.props.webAPIUrl).then(response => {
            const deler = [];
            for(var i = 0; i < response.data.length; i++) {
                deler.push({ info: response.data[i], display: true });
            }
            this.setState({ deler });
        });
    }
    searchCallback = (searchMethod) => {
        this.setState({ searchMethod });    
    }
    searchDeler = (searchMode, text) => {
        this.setState({ deler: this.state.deler.map((deler) => {
            deler.display = this.state.searchMethod(searchMode, text, deler.info);
            console.log(deler.display)
            return deler;
        }) });
    }  
    delete = name => {
        let success = false;
        axios.delete(`${this.props.webAPIUrl}/${name}`).then( response => {
            success = true;
        });
        if(success) {
            this.setState({ deler: this.state.deler.filter((deler) => {
                return deler.info.name !== name;
            }) });
        }
    }
    render() {
        return (
            <React.Fragment>
            <SearchBar searchDeler={this.searchDeler} searchCallback={this.searchCallback}/>
            <table className="table table-hover table-dark">   
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>DelerNummer</th>
                        <th>Hylle</th>
                        <th>Rad</th>
                        <th>Antall</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.deler.map(deler => <Deler key={deler.info.name} delerInfo={deler.info} display={deler.display} delete={this.delete} />)}
                </tbody>
                
            </table>
            </React.Fragment>
        );
    }
}
DelerList.propTypes = {
    webAPIUrl: PropTypes.string.isRequired
}
