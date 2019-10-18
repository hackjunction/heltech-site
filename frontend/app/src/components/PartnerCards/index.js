import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import * as ContentSelectors from '../../redux/dynamiccontent/selectors';

import Image from '../Image';

const PartnerCards = props => {
    const renderCards = () => {
        return props.partners.map(partner => {
            return (
                <div
                    className="PartnerCardGrid--item"
                    key={partner.name}
                >
                    <div className="PartnerCardGrid--item__top">
                        <div className="PartnerCardGrid--item__flipper">
                            <div className="PartnerCardGrid--item__flipper-front">
                                <Image
                                    image={partner.logo}
                                    className="PartnerCardGrid--item__img"
                                    width={280}
                                    height={280}
                                    crop="fit"
                                />
                            </div>
                            <a  
                                href={partner.website} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <div className="PartnerCardGrid--item__flipper-back">
                                    <span
                                        className="PartnerCardGrid--item__name" 
                                    
                                    >
                                        {partner.name}
                                    </span>
                                    <span className="PartnerCardGrid--item__desc">
                                        {partner.description}
                                    </span>
                                </div>
                            </a>
                            
                        </div>
                    </div>
                </div>
            );
        });
    };
    return (
        <div className="PartnerCardGrid">
            <div className="PartnerCardGrid--items">{renderCards()}</div>
        </div>
    );
};

const mapStateToProps = (state,ownProps) => {
    const type=ownProps.type;
    let partners;
    if(type=='main'){
        partners = ContentSelectors.mainPartners(state);
    }
    else if(type=='support'){
        partners =  ContentSelectors.supportingPartners(state);
    }
    else{
        partners = ContentSelectors.partners(state);
    }
    return{
        partners: partners
    }
};

export default connect(mapStateToProps)(PartnerCards);
