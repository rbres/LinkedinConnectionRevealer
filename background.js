start = document.URL.indexOf("id=")+3;
end = document.URL.indexOf("authType")-1;
id = document.URL.substring(start, end);
url = "https://www.linkedin.com/vsearch/p?&pivotType=cofc&pid=" + id;
$.ajax(url).done(function(response) { 
  text = response;
  start = text.search("results_count");
  relevant_string = text.substring(start, start+100);
  new_start = relevant_string.search("003e")+4;
  answer = relevant_string.substring(new_start, new_start+10);
  answer = answer.substring(0, answer.indexOf("+"));
  $(".connections-link").text($(".connections-link").text() + " ("+ answer + ")");
});
