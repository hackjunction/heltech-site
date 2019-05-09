import React, { PureComponent } from 'react';
import './style.scss';

import KEYS from '../../redux/staticcontent/keys';
import MEDIA_KEYS from '../../redux/staticmedia/keys';

import HeaderImage from '../../components/HeaderImage';
import BasicHeader from '../../components/HeaderImage/BasicHeader';
import EventCalendar from '../../components/EventCalendar';
import Divider from '../../components/Divider';
import NewsLetterForm from '../../components/NewsLetterForm';
import SingleColumnSection from '../../components/SingleColumnSection';

import Page from '../PageHOC';

class CalendarPage extends PureComponent {
    render() {
        return (
            <Page className="CalendarPage" pageTitle="Calendar" metaDescKey={KEYS.calendarPageSubtitle}>
                <HeaderImage
                    imageKey={MEDIA_KEYS.calendarPageHeaderImage}
                    alt="Header image"
                >
                    <BasicHeader titleKey={KEYS.calendarPageTitle} bodyKey={KEYS.calendarPageSubtitle} />
                </HeaderImage>
                <SingleColumnSection title="Here you will find a list of our coming events:">
                </SingleColumnSection>
                <EventCalendar />
                <Divider lg />
                <NewsLetterForm />
                <Divider lg />
            </Page>
        );
    }
}

export default CalendarPage