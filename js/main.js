


tocbot.init({
  // Where to render the table of contents.
  tocSelector: '.js-toc',
  // Where to grab the headings to build the table of contents.
  contentSelector: '.js-toc-content',
  // Which headings to grab inside of the contentSelector element.
  headingSelector: 'h1, h2',
});
window.onload = function () {
    //alert("hello");
    document.getElementById("defaultOpen").click();
}
///////////////////Sidebar
var subNavPos = $('#appear').position().top;
var currentBrowserWidth = $(window).width();
var sidebarBox = document.querySelector('#box'),
    sidebarBtn = document.querySelector('#ham'),
    Wrapper = document.querySelector('#wrapper');
    toc_ham = document.querySelector('#subNav');


if (currentBrowserWidth > 1492 ) {
      $('#box').addClass('active');
      $('#ham').addClass('active');
}
$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();
        scrollDistance +=1;
		// Show/hide menu on scroll
		//if (scrollDistance >= 850) {
		//		$('nav').fadeIn("fast");
		//} else {
		//		$('nav').fadeOut("fast");
		//}

    // For tab, Get the element with id="defaultOpen" and click on it



    if ( subNavPos < scrollDistance) {
            //alert("hello");
      $('#subNav').addClass('is-visible', 1000);
      $('#subNav').removeClass('is-invisible', 1000);
      $('#ham').addClass('is-visible', 1000);
      $('#ham').removeClass('is-invisible', 1000);
      $('#box').addClass('is-visible', 1000);
      $('#box').removeClass('is-invisible', 1000);
    }else {
      $('#subNav').addClass('is-invisible', 1500);
      $('#subNav').removeClass('is-visible', 1500);
      $('#ham').addClass('is-invisible', 1500);
      $('#ham').removeClass('is-visible', 1500);
      $('#box').addClass('is-invisible', 1500);
      $('#box').removeClass('is-visible', 1500);
    }
		// Assign active class to nav links while scolling
		$('.subSection').each(function(i) {
				if ($(this).position().top <= scrollDistance && scrollDistance >= $('.motivation').position().top ) {
						$('.subNav a.active').removeClass('active');
						$('.subNav a').eq(i).addClass('active');
				}
		});

});


sidebarBtn.addEventListener('click', function (event) {
		sidebarBtn.classList.toggle('active');
		sidebarBox.classList.toggle('active');
    toc_ham.classList.toggle('is-visible');
});

Wrapper.addEventListener('click', function (event) {

		if (sidebarBox.classList.contains('active')) {
				sidebarBtn.classList.remove('active');
				sidebarBox.classList.remove('active');
		}
});

window.addEventListener('keydown', function (event) {

		if (sidebarBox.classList.contains('active') && event.keyCode === 27) {
				sidebarBtn.classList.remove('active');
				sidebarBox.classList.remove('active');
		}
});


function openFlow(evt, flowName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(flowName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it



var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});
