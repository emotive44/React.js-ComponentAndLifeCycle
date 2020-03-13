import React from 'react'
import './DetailsImg.css'
import Image from '../Image/Image'

class DetailsImg extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="DetailsImg-wrapper">
                <Image className='DetailsImg-img' url={this.props.url}></Image>
                <h2>Name: {this.props.name}</h2>
                <h3>Information:</h3>
                <p className="DetailsImg-info">{this.props.bio}</p>
            </div>
        )
    }
}

export default DetailsImg;
