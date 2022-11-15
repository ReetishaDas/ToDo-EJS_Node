
 // exports help us to export it in the other page where we require it. //goes to function call
//add () calling or activating function. in this page we dont want that to happen here. //add () in the Main function --- app.js

exports.getDate = function() {
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  return today.toLocaleDateString("en-US", options); //onverting date to string

}


//to export multiple functions
exports.getDay = function() {
  const today = new Date();
  const options = {
    weekday: "long",
  };
  return today.toLocaleDateString("en-US", options); //onverting date to string

}
