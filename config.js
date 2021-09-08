import firebase from 'firebase'
require("@firebase/firestore")


 //Add configuration here
 const firebaseConfig = {
  apiKey: "AIzaSyD23B2clMtiagjfy9tl4-jTQAmaWrJrsZ8",
  authDomain: "complaint-forum-4b6ab.firebaseapp.com",
  projectId: "complaint-forum-4b6ab",
  storageBucket: "complaint-forum-4b6ab.appspot.com",
  messagingSenderId: "126026239599",
  appId: "1:126026239599:web:30cdaadbcb1784f9ec879a"
};
 

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

