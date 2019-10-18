import React from 'react';
import './style.scss';

import { connect } from 'react-redux';
import { map } from 'lodash-es';
import { partners } from '../../redux/dynamiccontent/selectors';

import Image from '../Image';

import LinkGrid from './index.js';
import * as ContentSelectors from '../../redux/dynamiccontent/selectors';


const PartnerLogoGrid = props => {
    const renderPartners = partners => {
        return partners.map(partner => {
            return (
                <a
                    key={partner.name}
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="PartnersGrid--partner">
                        <Image
                            image={partner.logo}
                            className="PartnersGrid--partner__img"
                            crop={'fill'}
                        />
                    </div>
                </a>
            );
        });
    };

    return (
        <div className="PartnersGrid">
            <div className="PartnersGrid--inner">
                {renderPartners(props.partners)}
            </div>
        </div>
    );
};
 
const mapStateToProps = (state, ownProps) => {
    const type = ownProps.type;
    switch(type){
        case 'main': 
            return {partners:  ContentSelectors.mainPartners(state)}
        case 'support' :
            return{
                partners: ContentSelectors.supportingPartners(state)
            }
        default:
            return {partners: ContentSelectors.partners(state)}
    }
};

export default connect(mapStateToProps)(PartnerLogoGrid);
