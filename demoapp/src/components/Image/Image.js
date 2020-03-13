import React, { Fragment } from 'react'

class Image extends React.Component {
    constructor(props) {
        super(props);
        
    }

    classNames(data) {
        let classes;
        if(Array.isArray(data)) {
            classes = data.join(' ')
            return classes
        }
        return data;
    }

    render() {
        let {className, url, id, onClick} = this.props
        return (
            <Fragment>
                <img className={this.classNames(className)} src={url} id={id} onClick={onClick}></img>
            </Fragment>
        )
    }
}

export default Image
