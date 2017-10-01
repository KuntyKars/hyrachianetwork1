 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDt49SJUwJkJHaDRkkZCz662e-JA9Bezck",
    databaseURL: "https://hyrachia-network.firebaseio.com",
    projectId: "hyrachia-network",
    storageBucket: "hyrachia-network.appspot.com",
    messagingSenderId: "899110065814"
  };
  firebase.initializeApp(config);

  

  var signUpBtn = document.getElementById('signUpBtn');
  var signInBtn = document.getElementById('signInBtn');

  signUpBtn.addEventListener('click', function(){
      var emailField = document.getElementById('email').value;
      var passwordField = document.getElementById('password').value;

      firebase.auth().createUserWithEmailAndPassword(emailField, passwordField).then(function(){
          alert('User Created!');
      })
      .catch(function(error){
          if(error != null){
              console.log(error.message);
              return;
          }
         
      });

  });

  signInBtn.addEventListener('click', function() {
    var emailField = document.getElementById('email').value;
    var passwordField = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(emailField, passwordField).then(function(){
        document.location.href = 'pageTwo.html';
    }).catch(function(error){
        if(error != null){
            console.log(error.message);
            return;
        }
    });
      });
    


