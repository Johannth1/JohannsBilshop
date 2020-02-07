import React from 'react';
import axios from 'axios';

class AddDeler extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            delerNummer: 0,
            hylle: "",
            rad: 0,
            antall: 0
        }
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://localhost:5001/deler', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
        <div>
            <div >
                <form  onSubmit={this.submitHandler}>
                <label htmlFor="name">Navn på delen</label>
                    <div>
                        <input 
                            type="text" 
                            name="name" 
                            value={this.state.name} 
                            onChange={e => {
                            this.setState({ name: e.target.value });
                        }}/>
                    </div>
                <label htmlFor="name">Deler Nummer</label>
                    <div>
                        <input 
                            type="number" 
                            name="delernummer" 
                            value={this.state.delerNummer} 
                            onChange={e => {
                            this.setState({ delerNummer: Number ( e.target.value ) });
                        }}/>
                    </div>
                <label htmlFor="name">Hylle plassering(A-Z)</label>
                    <div>
                        <input 
                            type="text"
                            name="hylle" 
                            value={this.state.hylle} 
                            onChange={e => {
                            this.setState({ hylle: e.target.value });
                        }}/>
                    </div>
                <label htmlFor="name">Rad plassering(1-9)</label>
                    <div>
                        <input 
                            type="number"
                            name="rad" 
                            value={this.state.rad}
                            onChange={e => {
                            this.setState({ rad: Number (e.target.value) });
                        }}/>
                    </div>
                    <label htmlFor="name">Legg in Antall</label>
                    <div>
                        <input 
                            type="number"
                            name="antall" 
                            value={this.state.antall}
                            onChange={e => {
                            this.setState({ antall: Number( e.target.value) });
                        }}/>
                    </div>
                         <button className="btn btn-success" type="submit">Legg inn delen</button>
                </form>
            </div>
        </div>
        )
    }
}

export default AddDeler



