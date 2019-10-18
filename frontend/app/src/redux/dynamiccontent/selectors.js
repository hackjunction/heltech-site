import { createSelector } from 'reselect';
import { filter, sortBy } from 'lodash-es';
const CONTENT_MAX_AGE_MS = 0; //1000 * 60 * 10;

export const content = state => state.dynamicContent.content;
export const contentUpdated = state => state.dynamicContent.lastUpdate || [];
export const contentLoading = state => state.dynamicContent.loading || [];
export const contentError = state => state.dynamicContent.error || [];
export const upcomingEvents = state =>
    state.dynamicContent.content.events || [];

//---Empty stuff---
export const communityPages = state => state.fillerContent || [];
export const eventPages = state => state.fillerContent || [];
export const eventconceptsByPriority = state => state.fillerContent || [];
export const homePages = state => state.fillerContent || [];
export const stories = state => state.fillerContent || [];
export const eventconcepts = state => state.fillerContent || [];
export const eventconceptsError = state => state.fillerContent || [];
export const eventconceptsLoading = state => state.fillerContent || [];
export const kpis = state => state.fillerContent || [];
export const pages = state => state.fillerContent || [];
export const pagesError = null;
export const pagesLoading = null;
//-----------------

export const shouldUpdate = createSelector(
    contentUpdated,
    updated => {
        return Date.now() - updated > CONTENT_MAX_AGE_MS;
    }
);
//-------------------------Nav------------------------------------
export const isSidebarOpen = state => state.dynamicContent.nav.sidebarOpen;
export const navTitle = state => state.dynamicContent.nav.navTitle;
//----------------------------------------------------------------

export const events = state => state.dynamicContent.content.events || [];
export const partners = state => state.dynamicContent.content.partners || [];
export const socialMedias = state =>
    state.dynamicContent.content.socialmedias || [];
export const teammembers = state =>
    state.dynamicContent.content.teammembers || [];
export const speakers = state => state.dynamicContent.content.speakers || [];

export const speakerCards = createSelector(
    speakers,
    data => {
        return filter(data, ['isOldSpeaker', !true]);
    }
);

export const oldSpeakers = createSelector(
    speakers,
    data => {
        return filter(data, 'isOldSpeaker');
    }
);

export const teammembersByPriority = createSelector(
    teammembers,
    data => {
        return data.sortBy('priority');
    }
);

export const mainPartners = createSelector(
    partners,
    data => {
        return filter(data, 'mainPartner');
    }
)
export const supportingPartners = createSelector(
    partners,
    data=>{
        return filter(data, 'supportingPartner')
    }
)