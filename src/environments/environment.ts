// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyB7fXrM254G2hBijdxDw9zLHg5CBydN53U",
    authDomain: "ajakosmetics-1c577.firebaseapp.com",
    projectId: "ajakosmetics-1c577",
    storageBucket: "ajakosmetics-1c577.appspot.com",
    messagingSenderId: "477681127708",
    appId: "1:477681127708:web:a388c34609c8dfd6bcead9",
    measurementId: "G-YWNC604FL4"
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
