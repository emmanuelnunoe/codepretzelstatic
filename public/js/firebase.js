<script type="module">

  // Import the functions you need from the SDKs you need

    import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";

    import {getAnalytics} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-analytics.js";

    // TODO: Add SDKs for Firebase products that you want to use

    // https://firebase.google.com/docs/web/setup#available-libraries


    // Your web app's Firebase configuration

    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    const firebaseConfig = {

        apiKey: "AIzaSyBD0Waoed_C4VQM7iSY7Am-XtMPfJnfkQg",

    authDomain: "codepretzel-website.firebaseapp.com",

    projectId: "codepretzel-website",

    storageBucket: "codepretzel-website.appspot.com",

    messagingSenderId: "304153503141",

    appId: "1:304153503141:web:8581f10b566b715bf3f44c",

    measurementId: "G-HW8Y2C2BW0"

  };


    // Initialize Firebase

    const app = initializeApp(firebaseConfig);

    const analytics = getAnalytics(app);

</script>