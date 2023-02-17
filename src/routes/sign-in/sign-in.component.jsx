import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <div>Sign In Page</div>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
    </>
  );
};

export default SignIn;
