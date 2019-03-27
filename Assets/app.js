  var config = {
      apiKey: "AIzaSyB8O5p6MMVeHXb40ZwWzyaez9NQinhjosk",
      authDomain: "train-assignment-d9607.firebaseapp.com",
      databaseURL: "https://train-assignment-d9607.firebaseio.com",
      projectId: "train-assignment-d9607",
      storageBucket: "train-assignment-d9607.appspot.com",
      messagingSenderId: "1065144488650"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var name = "";
  var destination = "";
  var time = 0;
  var frequency = 0;

  $("#add-user").on("click", function (event) {
      event.preventDefault();

      name = $("#name").val();
      destination = $("#destination").val();
      time = $("#time").val();
      frequency = $("#frequency").val();


      database.ref().push({
          name: name,
          destination: destination,
          time: time,
          frequency: frequency,
      });
  });

  database.ref().on("child_added", function (snapshot) {


      //   $("#name-display").text(snapshot.val().name);
      //   $("#destination-display").text(snapshot.val().destination);
      //   $("#time-display").text(snapshot.val().time);
      //   $("#frequency-display").text(snapshot.val().frequency);

      $(".table").append("<tr><td>" + snapshot.val().name + "</td><td>" + snapshot.val().destination + "</td><td>" + snapshot.val().time + "</td><td>" + snapshot.val().frequency + "</td></tr>")

  }, function (errorObject) {
      console.log("Errors handled: " + errorObject.code);
  });