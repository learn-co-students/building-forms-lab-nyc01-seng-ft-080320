import React, { Component } from 'react'
import { connect } from 'react-redux'

import BandInput from '../components/BandInput'

class BandsContainer extends Component {
    renderBands = () => {
        return (
            <div>
                <h4>Bands: </h4>
                <ul>
                    {this.props.bands.map((band, indx) => <li key={indx}>{band.name}</li>)}
                </ul>
            </div>
        )
    }

    render() {
        return(
        <div>
                <BandInput addBand={this.props.addBand}/>
                {this.props.bands.length > 0 ? this.renderBands() : null }
        </div>
        )
    }
}

const mapStateToProps = state => ({ bands: state.bands })

const mapDispatchToProps = dispatch => ({
    addBand: formData => dispatch({type: 'ADD_BAND', payload: formData})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
