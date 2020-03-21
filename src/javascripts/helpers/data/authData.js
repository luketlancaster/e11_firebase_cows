import firebase from 'firebase/app';
import 'firebase/auth';

import pasture from '../../components/pasture/pasture';

const authDiv = $('#auth');
const pastureDiv = $('#pasture');
const navbarLogoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      pastureDiv.removeClass('hide');
      navbarLogoutButton.removeClass('hide');
      pasture.buildCows();
    } else {
      authDiv.removeClass('hide');
      pastureDiv.addClass('hide');
      navbarLogoutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
