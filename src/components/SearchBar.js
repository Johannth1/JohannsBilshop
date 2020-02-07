import React from 'react';

export default class SearchBar extends React.Component {
    state = {
        fieldText: "",
        mode: "nameContains"
    }
    search = (searchMode, text, DelerInfo) => {
        switch(searchMode) {
            case "nameContains":
                return this.nameContains(text, DelerInfo);
            case "delerNummerContains":
                return this.delerNummerContains(text, DelerInfo);
            case "hylleContains":
                return this.hylleContains(text, DelerInfo);
            case "radContains":
                return this.radContains(text, DelerInfo);
            case "minAntall":
                return this.minAntall(text, DelerInfo);
            case "maxAntall":
                return this.maxAntall(text, DelerInfo);
            default:
                return false;
        }
    }

    nameContains = (text, DelerInfo) => {
        if(DelerInfo.name.toLowerCase().includes(text.toLowerCase())) {
            return true;
        }
        return false;
    }
    delerNummerContains = (text, DelerInfo) => {
        if(DelerInfo.delerNummer.toString().includes(text.toString())) {
            return true;
        }
        return false;
    }
    hylleContains = (text, DelerInfo) => {
        if(DelerInfo.hylle.toString().includes(text.toLowerCase())) {
            return true;
        }
        return false;
    }
    radContains = (text, DelerInfo) => {
        if(DelerInfo.rad.toLowerCase().includes(text.toLowerCase())) {
            return true;
        }
        return false;
    }

    minAntall = (text, DelerInfo) => {
        if(DelerInfo.inStock >= Number(text)) {
            return true;
        }
        return false;
    }
    maxAntall = (text, DelerInfo) => {
        if(DelerInfo.inStock <= Number(text)) {
            return true;
        }
        return false;
    }

    submitHandler = e => {
        e.preventDefault()
        this.props.searchDeler(this.state.mode, this.state.fieldText);
    }
    componentDidMount() {
        this.props.searchCallback(this.search);
    }
    render() {
        return (
            <form className="form-inline" onSubmit={this.submitHandler}>
                <div className="form-group">
                    <select className="form-control mb-2" onChange={e => {
                        this.setState({ mode: e.target.value });
                    }}>
                        <option value="nameContains">Name</option>
                        <option value="delerNummerContains">Delernummer</option>
                        <option value="hylleContains">Hylle</option>
                        <option value="radContains">Rad</option>
                        <option value="minAntall">Minimum Antall</option>
                        <option value="maxAntall">Maximum Antall</option>
                    </select>
                    <input type="text" className="form-control mb-2" onChange={e => {
                        this.setState({ fieldText: e.target.value });
                    }}/>
                    <button type="submit" className="btn btn-primary mb-2">Search</button>
                </div>
            </form>
        );
    }
}
