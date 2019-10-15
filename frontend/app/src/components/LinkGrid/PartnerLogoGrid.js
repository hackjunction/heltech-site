import React from 'react';
import './style.scss';

import { connect } from 'react-redux';
import { map } from 'lodash-es';
import { partners } from '../../redux/dynamiccontent/selectors';

import Image from '../Image';

import LinkGrid from './index.js';

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
/* 
const PartnerLogoGrid = ({ partners }) => {
  const items = map(partners, p => {
    return {
      image: p.logo,
      url: p.website,
      alt: p.name
    };
  });

  return <LinkGrid links={items} />;
};
 */
const mapStateToProps = state => ({
    partners: partners(state)
});

export default connect(mapStateToProps)(PartnerLogoGrid);
