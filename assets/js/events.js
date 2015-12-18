Parse.initialize("pls2KT1xZhiJJ99gJL5FQ7DyxVgq4iN1s6yxw1Kh", "BPYMCRgdjQ0oTTCNvrKZRIq4GOuSqOploiW7pT4r");

var Events = Parse.Object.extend("Events");

$("#event-form").submit(function(event) {
   event.preventDefault();
   var title = $("#event-title").val();
   var description = $("#event-description").val();

   var newEvent = new Events();

   newEvent.set("title", title);
   newEvent.set("description", description);

   newEvent.save({
      success: function(suc) {
         console.log("Success: " + suc.message);
      },
      error: function(err) {
         console.log("Error: " + err.message)
      }
   });
});
