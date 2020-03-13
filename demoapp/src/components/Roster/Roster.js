import React, { Fragment } from 'react'
import './Roster.css'
import Image from '../Image/Image'
import DetailsImg from '../DetailsImg/DetailsImg';

class Roster extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bio: [],
            name: [],
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
                let arrayWithBios = res.map(x => x.bio);
                let arrayWithNames = res.map(x => x.name);

                this.setState({
                    bio: arrayWithBios,
                    name: arrayWithNames,
                    imgUrl: arrayWithUrls
                })
            });
    }

    details(e) {
        this.setState({id: e.target.id, isClick: true})
    }

    render() {
        let id = this.state.id;
        let {imgUrl, name, bio, isClick} = this.state;

        if(!isClick) {
            return (
                <Fragment>
                    <div className="Roster-wrapper">
                        {imgUrl.map((x,i) => {
                            return <Image className='Roster-img' url={x} id={i} key={x} onClick={this.details}></Image>
                        })}
                    </div>
                </Fragment>
            );
        }
        return (
            <Fragment>
                <div className="Roster-wrapper">
                    {imgUrl.map((x,i) => {
                        return <Image className='Roster-img' url={x} id={i} key={x} onClick={this.details}></Image>
                    })}
                </div>
                <DetailsImg url={imgUrl[id]} name={name[id]} bio={bio[id]}/>
            </Fragment>
        );
        
    }
}

export default Roster
