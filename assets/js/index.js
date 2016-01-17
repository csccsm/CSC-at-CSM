Parse.initialize("pls2KT1xZhiJJ99gJL5FQ7DyxVgq4iN1s6yxw1Kh", "BPYMCRgdjQ0oTTCNvrKZRIq4GOuSqOploiW7pT4r");

var Events = Parse.Object.extend("Events");

function getEvents() {
   var query = new Parse.Query(Events);
   query.find({
      success: function(event) {
         var output = "";
         for (var i in event) {
            var title = event[i].get("title");
            var description = event[i].get("description");
            output += "<li>";
            output += "<h3>"+title+ " "+"-"+" "+date+"</h3>";
            output += "<p>"+description+"</p>"
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
