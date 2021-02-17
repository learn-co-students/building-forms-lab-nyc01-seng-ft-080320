// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
    state = {
        name: '',
    }


    handleTextChange = e => {
        this.setState( {name: e.target.value})
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.props.addBand(this.state)
        this.setState({ name: '' })
    }

    render() {
        return(
        <div>
            <form onSubmit={this.handleFormSubmit}>
                <p>
                    <label>Band Name: </label>
                    <input type='text'
                    value={this.state.name}
                    onChange={this.handleTextChange}/>
                </p>
                <input type='submit'/>
            </form>
        </div>
        )
    }
}

export default BandInput
