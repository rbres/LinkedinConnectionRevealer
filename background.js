
if(document.URL.indexOf("linkedin.com") > -1){
  var text = $("#profile_v2_connections").next().text();
  var search_string = "numConn%3A";
  text = text.toLocaleString().slice(text.indexOf(search_string) + search_string.length);
  var connections = text.substring(0, text.indexOf("%"));
  $(".connections-link").text($(".connections-link").text() + " ("+ connections + ")");
}
