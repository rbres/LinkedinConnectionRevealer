if(document.URL.indexOf("linkedin.com") > -1){
	var all_dds = document.getElementsByTagName("dd");
	var table_item = all_dds.item(2);
	var url = "https://www.linkedin.com" + table_item.firstChild.getAttribute("href");
	$.ajax(url,{
	 headers: {
	   "Upgrade-Insecure-Requests": 1
	 },
	 xhr: function() {
	   var xhr = jQuery.ajaxSettings.xhr();
	   var setRequestHeader = xhr.setRequestHeader;
	   xhr.setRequestHeader = function(name, value) {
	     if (name == 'X-Requested-With') return;
	     setRequestHeader.call(this, name, value);
	   }
	   return xhr;
	 },
	}).done(function(response) { 
	 var text = response;
	 var start = text.search("ozfeed-templates");
	 text = text.substr(start);
	 start = text.search("\"followCount\":") + 14;
	 text = text.substr(start);
	 var end = text.search("\"")-1;
	 text = text.substr(0, end);
	 $(".connections-link").text($(".connections-link").text() + " ("+ text + ")");
	});
}