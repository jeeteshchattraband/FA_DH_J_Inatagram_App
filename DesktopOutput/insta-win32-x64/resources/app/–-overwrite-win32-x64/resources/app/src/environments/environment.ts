// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCGaqrZdqcK5-22E2CdlfUx1JjE0TthZ08',
    authDomain: 'new-instagram-app.firebaseapp.com',
    databaseURL: 'https://new-instagram-app.firebaseio.com',
    projectId: 'new-instagram-app',
    storageBucket: 'new-instagram-app.appspot.com',
    messagingSenderId: '512668751948'
  }
};
