import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './assets/fontello/css/fontello.css';
import './App.scss';
import './styles/global.scss';

import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';
import { hotjar } from 'react-hotjar';
import { withRouter } from 'react-router';
import { AnimatePresence } from 'framer-motion';

import config from './config';

import ScrollToTop from './components/ScrollToTop';
import GlobalLifecycle from './GlobalLifecycle';

import Header from './components/Header';
import EditorTools from './components/EditorTools';
import Footer from './components/Footer';
import PrivacyBanner from './components/PrivacyBanner';
import Divider from './components/Divider';

import * as StaticContentActions from './redux/staticcontent/actions';
import * as DynamicContentActions from './redux/dynamiccontent/actions';
import * as SocialMediaActions from './redux/socialmedias/actions';
import LoadingPage from './pages/Loading';

/* import HomePage from './pages/Home';
import ParticipantsPage from './pages/Participants';
import PartnersPage from './pages/Partners';
import ConceptsPage from './pages/Concepts';
import CalendarPage from './pages/Calendar';
import TeamPage from './pages/Team';
import ConceptPage from './pages/Concept';
import BasicPage from './pages/BasicPage';
import NotFoundPage from './pages/NotFound';
import StoryPage from './pages/Story';
import DevPage from './pages/DevPage';
import OldSpeakersPage from './pages/OldSpeakers'; */

const HomePage = React.lazy(() => import('./pages/Home'));
const ParticipantsPage = React.lazy(() => import('./pages/Participants'));
const PartnersPage = React.lazy(() => import('./pages/Partners'));
const ConceptsPage = React.lazy(() => import('./pages/Concepts'));
const CalendarPage = React.lazy(() => import('./pages/Calendar'));
const TeamPage = React.lazy(() => import('./pages/Team'));
const ConceptPage = React.lazy(() => import('./pages/Concept'));
const BasicPage = React.lazy(() => import('./pages/BasicPage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFound'));
const StoryPage = React.lazy(() => import('./pages/Story'));
const DevPage = React.lazy(() => import('./pages/DevPage'));
const OldSpeakersPage = React.lazy(() => import('./pages/OldSpeakers'));

class App extends Component {
    componentDidMount() {
        this.props.updateDynamicContent();
        this.props.updateStaticContent();
        this.props.updateSocialMedias();

        if (config.FACEBOOK_PIXEL_ID) {
            ReactPixel.init(
                config.FACEBOOK_PIXEL_ID,
                {},
                { autoConfig: true, debug: false }
            );
        }
        if (config.GOOGLE_ANALYTICS_ID) {
            ReactGA.initialize(config.GOOGLE_ANALYTICS_ID);
        }

        if (config.HOTJAR_ID && config.HOTJAR_SV) {
            hotjar.initialize(config.HOTJAR_ID, config.HOTJAR_SV);
        }

        this.handleRouteChange(this.props.history.location);
        this.unlisten = this.props.history.listen(this.handleRouteChange);
    }

    componentWillUnmount() {
        this.unlisten();
    }

    handleRouteChange(location) {
        if (config.GOOGLE_ANALYTICS_ID) {
            ReactGA.pageview(location.pathname);
        }
    }
    render() {
        const { location } = this.props;
        
        return (
            <div className="App">
                <PrivacyBanner />
                <Header />
                <main className="App--main">
                    <Suspense fallback={<LoadingPage />}>
                        <AnimatePresence>
                            <Switch>
                                {/* Static pages */}
                                <Route exact path="/" component={HomePage} />
                                <Route
                                    exact
                                    path="/story"
                                    component={StoryPage}
                                />
                                <Route
                                    exact
                                    path="/participants"
                                    component={ParticipantsPage}
                                />
                                <Route
                                    exact
                                    path="/partners"
                                    component={PartnersPage}
                                />
                                <Route
                                    exact
                                    path="/concepts"
                                    component={ConceptsPage}
                                />
                                <Route
                                    exact
                                    path="/calendar"
                                    component={CalendarPage}
                                />
                                <Route
                                    exact
                                    path="/team"
                                    component={TeamPage}
                                />
                                <Route exact path="/dev" component={DevPage} />
                                <Route
                                    exact
                                    path="/past-speakers"
                                    component={OldSpeakersPage}
                                />
                                {/* Concept pages */}
                                <Route
                                    path="/concepts/:slug"
                                    component={ConceptPage}
                                />

                                {/* Other pages */}
                                <Route path="/:slug" component={BasicPage} />
                                <Route component={NotFoundPage} />
                            </Switch>
                        </AnimatePresence>
                    </Suspense>
                    
                </main>

                <Footer />
                <ScrollToTop />
                <GlobalLifecycle />
                {config.IS_DEBUG ? <EditorTools /> : null}
            </div>
        );
    }
}

export default connect(
    null,
    {
        updateDynamicContent: DynamicContentActions.updateDynamicContent,
        updateStaticContent: StaticContentActions.updateStaticContent,
        updateSocialMedias: SocialMediaActions.updateSocialMedias
    }
)(withRouter(App));
