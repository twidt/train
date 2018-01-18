$(document).ready(function(){
	// initializing some firebase
	var config = {
    apiKey: "AIzaSyBUi220bVJBSjLVDSo6nAfaIuUj1gtW90w",
    authDomain: "train-2fce2.firebaseapp.com",
    databaseURL: "https://train-2fce2.firebaseio.com",
    projectId: "train-2fce2",
    storageBucket: "",
    messagingSenderId: "765138792762"
  };
firebase.initializeApp(config);


// Variable to reference the database
   var database = firebase.database();

// my global variables
var trainName = "";
var destination = "";
var firstTrainTime = "";
var frequency = "";

// Capture Button Click
$("#add-user").on("click", function() {
// to keep the page from refreshing
    event.preventDefault();
// the "initial load" code from activity 13

trainName = $("#trainName").val().trim();
destination = $("#destination").val().trim();
firstTrainTime = $("#firstTrainTime").val().trim();
frequency = $("#frequency").val().trim();
database.ref().set({
	trainName: trainName,
	destination: destination,
	firstTrainTime: firstTrainTime,
	frequency: frequency
});

});

 // Creating Firebase "watcher" 
     database.ref().on("value", function(snapshot) {
      // Log everything that's coming out of snapshot
      console.log(snapshot.val());
      console.log(snapshot.val().trainName);
      console.log(snapshot.val().destination);
      console.log(snapshot.val().firstTrainTime);
      console.log(snapshot.val().frequency);
      // Change the HTML to reflect
      $("#trainName").html(snapshot.val().trainName);
      $("#destination").html(snapshot.val().destination);
      $("#firstTrainTime").html(snapshot.val().firstTrainTime);
      $("#frequency").html(snapshot.val().frequency);

    // Create Error Handling
     }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });