if(document.URL.indexOf("linkedin.com") > -1){
  all_dds = document.getElementsByTagName("dd");
  table_item = all_dds.item(2);
  url = "https://www.linkedin.com/" + table_item.firstChild.getAttribute("href");
  $.ajax(url).done(function(response) { 
    text = response;
    start = text.search("followerCount")+15;
    end = text.search("activityCount")-2;
    connections = text.substring(start, end);
    $(".connections-link").text($(".connections-link").text() + " ("+ connections + ")");
  });
}