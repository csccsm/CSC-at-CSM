Parse.initialize("pls2KT1xZhiJJ99gJL5FQ7DyxVgq4iN1s6yxw1Kh", "BPYMCRgdjQ0oTTCNvrKZRIq4GOuSqOploiW7pT4r");

var Events = Parse.Object.extend("Events");

$("#event-form").submit(function(event) {
   var title = $("#event-title").val();
   var date = $("#event-date").val();
   var description = $("#event-description").val();

   var newEvent = new Events();

   newEvent.set("title", title);
   newEvent.set("date", date);
   newEvent.set("description", description);

   newEvent.save({
      success: function(suc) {
         console.log("Success: " + suc.message);
      },
      error: function(err) {
         console.log("Error: " + err.message);
      }
   });
});

function getEvents() {
   var query = new Parse.Query(Events);
   query.find({
      success: function(event) {
         var output = "";
         for (var i in event) {
            var title = event[i].get("title");
            var date = event[i].get("date");
            var description = event[i].get("description");
            output += "<li>";
            output += "<h3>"+title+ " "+"-"+" "+date+"</h3>";
            output += "<p>"+description+"</p>";
            output += "</li>";
         }
         $("#list-events").html(output);
      },
      error: function(err) {
         console.log("Error: " + err.message);
      }
   });
}
getEvents();
