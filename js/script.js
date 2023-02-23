
$(document).ready(function() {
	var url = window.location.pathname;
	var activePage = url.substring(url.lastIndexOf('/')+1);
	
	$('.nav-link').each(function() {
	  var linkPage = this.href.substring(this.href.lastIndexOf('/')+1);
	  
	  if (activePage == linkPage) {
		$(this).addClass('active');
	  }
	});
  });





$(document).ready(function(){
	$('.venobox').venobox();
	$('.my-video-links').venobox();
	$('.my-video-gallery').venobox();
});







