// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

(window as any).fbAsyncInit = function () {
  console.log('FB', FB);

  FB.init({
    appId: '557727016488126',
    cookie: true,
    xfbml: true,
    autoLogAppEvents: true,
    version: 'v16.0',
  });

  FB.AppEvents.logPageView();

  FB.getLoginStatus(function (response) {
    console.log('getLoginStatus', response);
  });

  FB.logout();
};

(window as any).checkLoginState = function () {
  FB.getLoginStatus(function (response) {
    console.log('checkLoginState.getLoginStatus', response);
  });
};

if (!document.getElementById('facebook-jssdk')) {
  const fjs = document.getElementsByTagName('script')[0];
  const js = document.createElement('script');
  js.id = 'facebook-jssdk';
  js.src = 'https://connect.facebook.net/en_GB/sdk.js';
  fjs.parentNode.insertBefore(js, fjs);
}

// window.open('https://www.facebook.com/v16.0/dialog/oauth?client_id=194952563323877&redirect_uri=https%3A%2F%2Flocalhost%3A7126%2Ffacebook%2Flogin&config_id=924606228592541')

// https://localhost:7126/facebook/login?error=access_denied&error_code=200&error_description=Permissions+error&error_reason=user_denied

// https://www.facebook.com/v16.0/dialog/oauth?app_id=194952563323877&auth_type=code&cbt=1681831750395&channel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df3138d531872e04%26domain%3Dtypescript-kr18rl.stackblitz.io%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Ftypescript-kr18rl.stackblitz.io%252Ff3c76745d9bda08%26relation%3Dopener&client_id=194952563323877&config_id=924606228592541&display=popup&domain=typescript-kr18rl.stackblitz.io&e2e=%7B%7D&fallback_redirect_uri=https%3A%2F%2Ftypescript-kr18rl.stackblitz.io%2F&locale=en_GB&logger_id=fe007f761529b&origin=1&redirect_uri=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfe541889a9b7ac%26domain%3Dtypescript-kr18rl.stackblitz.io%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Ftypescript-kr18rl.stackblitz.io%252Ff3c76745d9bda08%26relation%3Dopener%26frame%3Df318a4840583ed4&response_type=token%2Csigned_request%2Cgraph_domain&sdk=joey&version=v16.0
