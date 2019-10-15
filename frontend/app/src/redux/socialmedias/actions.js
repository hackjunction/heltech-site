import * as ActionTypes from "./actionTypes";
import SocialMediaService from "../../services/socialmedias";
import { socialMediasShouldUpdate } from "./selectors";

/**
 * Social Media links
 */

export const updateSocialMedias = () => (dispatch, getState) => {
  if (!socialMediasShouldUpdate(getState())) {
    return;
  }
  dispatch({
    type: ActionTypes.UPDATE_SOCIAL_MEDIAS,
    promise: SocialMediaService.getAll(),
    meta: {
      onFailure: e => console.log("Error Updating Social Medias", e)
    }
  });
};
