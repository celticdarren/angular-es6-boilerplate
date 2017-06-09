import * as firebase from 'firebase';

export default function ($firebaseAuth) {
  'ngInject';

  const auth = $firebaseAuth(firebase.auth());


  return {
    fbTest() {
      let ref = firebase.database().ref();
      return ref.child('scores').child('lochgreen');
    },

    register(user) {
      return auth.$createUserWithEmailAndPassword(user.email, user.password);
    },

    login(user) {
      return auth.$signInWithEmailAndPassword(user.email, user.password);
    },

    logout() {
      auth.$signOut();
    },

    isLoggedIn() {
      return auth.$getAuth();
    },

    sendWelcomeEmail(emailAddress) {
      firebaseDataService.emails.push({
        emailAddress: emailAddress
      });
    }

  }
}
