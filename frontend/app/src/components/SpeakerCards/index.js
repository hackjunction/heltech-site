import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import * as ContentSelecors from '../../redux/dynamiccontent/selectors';

import Image from '../Image';

const SpeakerCards = props => {
    const renderSpeakers = () => {
        return props.speakers.map(speaker => {
            return (
                <div
                    className="SpeakerGrid--item"
                    key={speaker.name + speaker.topic}
                >
                    <div className="SpeakerGrid--item__top">
                        <div className="SpeakerGrid--item__flipper">
                            <div className="SpeakerGrid--item__flipper-front">
                                <Image
                                    image={speaker.image}
                                    className="SpeakerGrid--item__img"
                                    width={290}
                                    height={290}
                                />
                            </div>
                            <div className="SpeakerGrid--item__flipper-back">
                                <span className="SpeakerGrid--item__name">
                                    {speaker.name}
                                </span>
                                <span className="SpeakerGrid--item__topic">
                                    {speaker.topic}
                                </span>
                                <span className="SpeakerGrid--item__desc">
                                    {speaker.description}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    };
    return (
        <div className="SpeakerGrid">
            <div className="SpeakerGrid--items">{renderSpeakers()}</div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    let speakers;

    switch (ownProps.type) {
        case 'new':
            speakers = ContentSelecors.speakerCards(state);
            break;
        case 'old':
            speakers = ContentSelecors.oldSpeakers(state);
            break;

        default:
            speakers = '';
    }
    return {
        speakers: speakers
    };
};

export default connect(mapStateToProps)(SpeakerCards);
