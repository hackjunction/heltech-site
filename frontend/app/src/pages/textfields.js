const defaultText = {
  newsletterFormTitle: "Interested?",
  newsletterFormSubtitle: "Subscribe to our newsletter.",
  contactFormTitle: "Leave us a message!",
  contactFormSubtitle: "We will contact you shortly!",

  //----

  whoAreWe: "HEL TECH",
  whoAreWeSubtitle: "What is it?",
  whoAreWeBody: `Organized on the first Monday of each month in Helsinki, Hel Tech brings together cutting-edge tech, researchers and entrepreneurs to meet, learn and network. The Hel Tech crowd consists of a community of curious minds, who want to explore the most relevant developments in tech.

  ## The top tech meetup in Finland.
  The meetups include keynotes, demos, research showcases and discussions, not forgetting casual networking and a laid-back afterwork. Each meetup is centered around a specific tech topic, such as healthtech, machine learning or impact tech.
  
  ## We are volunteer based and non-profit
  
  That's right, we are not in this for the money, we do this for the love of technology and joy of learning and co-creating.
  `,
  whatWeDo: "Sparking your curiosity?",
  whatWeDoSubtitle: "Good.",
  whatWeDoBody: `Check out our events below and be sure to subscribe to our newsletter to stay updated on the latest and greatest tech has to offer!

  We are looking forward to meeting you at our next event!`,

  //------

  whyPartnerWithUsTitle: "Why partner with us?",
  whyPartnerWithUsFirstTitle: "CREATIVITY",
  whyPartnerWithUsFirstBody:
    "The montly Hel Tech meetup is the place to connect and observe what top tech talents around the world have to offer. The fresh concepts introduced and the connections made at our events will help you and your company moving forward in this digital age.",

  whyPartnerWithUsSecondTitle: "",
  //----
  newsletterSubmitButton: "Subscribe"
};
export default defaultText;

/* COPY PASTA

import {connect } from 'react-redux';

import * as ContentSelectors from '../../redux/staticcontent/selectors';

  const { getText } = this.props;

const mapStateToProps = state => ({
    getText: ContentSelectors.buildGetText(state),
    getMedia: ContentSelectors.buildGetMedia(state)

   

})
 export default connect(mapStateToProps)()
*/
