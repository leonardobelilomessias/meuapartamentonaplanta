

import * as admin from 'firebase-admin';
import * as serviceAccount from './key_firebase_admin.json';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    // Optional: Specify the database URL if you're using Firebase Realtime Database
    // databaseURL: 'https://<your-database-name>.firebaseio.com'
  });
}

export { admin };