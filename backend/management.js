const admin = require("firebase-admin");
const serviceAccount = require('./angulartodo.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://angulartodo-c00ed.firebaseio.com"
});

module.exports = admin;