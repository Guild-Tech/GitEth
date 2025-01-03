// import { githubAuth } from "@/services/api";
import { AppDispatch } from "..";
import {
  signInWithGoogle,
  signOutUser,
} from "../../services/firebase";
import { setUser, setLoading, setError } from "../reducers/auth";

/**
 * Signs in a user with GitHub. If the sign-in is successful, sets the user state with the user's data.
 * @returns {Promise<void>}
 */
export const loginWithGitHub = () => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  try {
    // const user = await githubAuth();
    // console.log(user)
    // dispatch(
    //   setUser({
    //     uid: user.uid,
    //     displayName: user.displayName,
    //     email: user.email,
    //     photoURL: user.photoURL,
    //     username: user.displayName?.replace(/\s+/g, "").toLowerCase() || "anonymous",
    //     token: null,
    //   })
    // );
    dispatch(setError(null));
  } catch (error: any) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

/**
 * Signs in a user with Google. If the sign-in is successful, sets the user state with the user's data.
 * @returns {Promise<void>}
 */
export const loginWithGoogle = () => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  try {
    const user = await signInWithGoogle();
    dispatch(
      setUser({
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        username: user.displayName?.replace(/\s+/g, "").toLowerCase() || "anonymous",
        token: null,
      })
    );
    dispatch(setError(null));
  } catch (error: any) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};


/**
 * Logs out the current user by calling the signOutUser service.
 * @returns {Promise<void>}
 */
export const logout = () => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  try {
    await signOutUser();
    dispatch(setUser(null));
    dispatch(setError(null));
  } catch (error: any) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
