import React from 'react'
import './Slider.css'
import left from '../../resources/left.png'
import right from '../../resources/right.png'
import Image from '../Image/Image'


const baseUrl = 'http://localhost:9999/episodePreview/';

class Slider extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            imgUrl: '',
            focusedEpId: 2
        }
      
        this.leftImg = this.leftImg.bind(this);
        this.rightImg = this.rightImg.bind(this);
    }

    get(baseUrl, id){
        return fetch(baseUrl + id)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    focusedEpId: data.id,
                    imgUrl: data.url
                });
            });
    }

    componentDidMount() {
        this.get(baseUrl, this.state.focusedEpId)
    }


    rightImg() {
        let id = this.state.focusedEpId
        this.get(baseUrl, ++id)
    }

    leftImg() {
        let id = this.state.focusedEpId
        this.get(baseUrl, --id);
    }

    render() {
        return (
            <div className="Slider-wrapper">
                <Image className={['Slider-button', 'case-left']} url={left} onClick={this.leftImg}></Image>
                <Image className="Slider-img" url={this.state.imgUrl}></Image>
                <Image className={['Slider-button', 'case-right']} url={right} onClick={this.rightImg}></Image>
            </div>
        )
    }
}

export default Slider
