function ImportJSON(url) {
  var jsondata = UrlFetchApp.fetch(url);
  var object   = JSON.parse(jsondata.getContentText());
  
  return Object.keys(object).map(function(uuid) {
    return object[uuid].email;
  }).filter( function(email){
    return email != undefined && email != null && email != '';
  });
}
