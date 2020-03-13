import React, { Fragment } from 'react'
import './Roster.css'
import Image from '../Image/Image'
import DetailsImg from '../DetailsImg/DetailsImg';


class Roster extends React.Component {
    currentInfo = {};
    constructor(props) {
        super(props);

        this.state = {
            imgUrl: [],
            isClick: false
        }

        this.details = this.details.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:9999/roster')
            .then(res => res.json())
            .then(res=> {
                let arrayWithUrls = res.map(x => x.url);

                this.setState({
                    imgUrl: arrayWithUrls
                })
            });
    }

    details(e) {
        fetch('http://localhost:9999/character/' + e.target.id)
            .then(res => res.json())
            .then(res => {
                this.setState({currentInfo: res, isClick: true})
            });
    }

    render() {
        let {imgUrl, currentInfo, isClick} = this.state;

        if(!isClick) {
            return (
                <Fragment>
                    <div className="Roster-wrapper">
                        {imgUrl.map((x, i) => {
                            return <Image className='Roster-img' url={x} id={i} key={x} onClick={this.details}></Image>
                        })}
                    </div>
                </Fragment>
            );
        }
        return (
            <Fragment>
                <div className="Roster-wrapper">
                    {imgUrl.map((x, i) => {
                        return <Image className='Roster-img' url={x} id={i} key={x} onClick={this.details}></Image>
                    })}
                </div>
                <DetailsImg {...currentInfo}/>
            </Fragment>
        );
        
    }
}

export default Roster
