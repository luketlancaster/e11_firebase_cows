import firebase from 'firebase/app';
import 'firebase/auth';

const authDiv = $('#auth');
const pastureDiv = $('#pasture');
const navbarLogoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      pastureDiv.removeClass('hide');
      navbarLogoutButton.removeClass('hide');
    } else {
      authDiv.removeClass('hide');
      pastureDiv.addClass('hide');
      navbarLogoutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
