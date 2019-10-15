import React, { PureComponent } from 'react';
import './style.scss';
import {connect} from 'react-redux';

import { Link } from 'react-router-dom';
import Image from '../Image';

import * as ContentSelectors from '../../redux/staticcontent/selectors';

class ImageLink extends PureComponent {
    render() {
        const { image, imageAlt, linkTo, linkText } = this.props;
    
        return (
            <div className="ImageLink">
                <Image className="ImageLink--image" image={image} alt={imageAlt} width={600} height={200} crop={'fill'} />
                <Link className="ImageLink--link" to={linkTo}>
                    <span className="ImageLink--link__text">{linkText}</span>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    const getMedia = ContentSelectors.buildGetMedia(state)
    return{
        image: getMedia(ownProps.imageKey),
    }
}

export default connect(mapStateToProps)(ImageLink)
/* 
const mapStateToProps = state => ({
    getMedia: ContentSelectors.buildGetMedia(state)
})

export default connect(mapStateToProps)(ImageLink); */
