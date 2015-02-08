/* UI */
function scrollTo(link, target) {
  link.click(function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: target.offset().top - 30
    }, 800);
  });
}

scrollTo($('#talkslink'), $('#talks'));
scrollTo($('#aboutlink'), $('#about'));

/* Handlebars */
var data = [
  {
    num: 1,
    name:"Talk One",
    date: "October 11, 2014",
    card: [
      {
        num: 1,
        speaker: "Ariel Sobel",
        title: "Strip, Don't Tease",
        description: "This talk emphasizes the importance of emotional vulnerability and openness.She suggests college students should be in touch with their emotions in order to have more fulfilling, honest relationships with their friends, family, and community at large.",
        img: "img/demo/ariel.jpg",
        url: "https://www.youtube.com/watch?v=a501jtIprzc",
				button: "Watch Video"
      },
      {
        num: 2,
        speaker: "Alex Zhang",
        title: "Expand Your Mind: Lucid Dreaming 101",
        description: "Proving that Inception might not be so far fetched, this talk is a step-by-step guide for the process of lucid dreaming and its potential to impact our society's thought. He challenges his audience to push their creative limits and explore in new ways.",
        img: "img/demo/alex.jpg",
        url: "https://www.youtube.com/watch?v=K3i77WLegh8",
				button: "Watch Video"
      },
      {
        num: 3,
        speaker: "Logan Heley",
        title: "American Politics: We Need You",
        description: "A talk for society: that we should return to more active political engagement, dispelling the myth that our present political atmosphere is beyond saving. He suggests Americans need to more directly involve themselves in their political process if they hope to see true social change.",
        img: "img/demo/logan.jpg",
        url: "https://www.youtube.com/watch?v=OXNX2MeN0Yk",
				button: "Watch Video"
      },
      {
        num: 4,
        speaker: "Michelle Lau",
        title: "How To Make Love Like A Pornstar: Results May Vary",
        description: "A talk focusing on the demand-side of trafficking; she studies porn and the negative side effects it has on relationships and individuals. By bringing these new facts to light, she hopes her audience will make a more informed decision on when to engage in porn.",
        img: "img/demo/michelle.jpg",
        url: "https://www.youtube.com/watch?v=yJPsRHK7c0c",
				button: "Watch Video"
      }
    ]
  }, 
	{
	 num: 2,
	 name:"Talk Two",
	 date: "December 5, 2014",
	 card: [
		 {
			 num: 1,
			 speaker: "Amy Suto",
			 title: "The Secrets of Building Creativity",
			 description: "NEEDED.",
			 img: "img/demo/filler.jpg",
			 url: "https://www.youtube.com/watch?v=fdaqepfKu8k",
				button: "Watch Video"
		 },
		 {
			 num: 2,
			 speaker: "Nathaniel Haas",
			 title: "The 'No' Factor",
			 description: "NEEDED.",
			 img: "img/demo/filler.jpg",
			 url: "https://www.youtube.com/watch?v=tMjIkPox4g4",
				button: "Watch Video"
		 },
		 {
			 num: 3,
			 speaker: "Liwei Xu",
			 title: "Stepping Out of Boundaries",
			 description: "NEEDED.",
			 img: "img/demo/filler.jpg",
			 url: "https://www.youtube.com/watch?v=4SS0KCD8aHo",
				button: "Watch Video"
		 },
		 {
			 num: 4,
			 speaker: "Our YouTube Channel",
			 title: "Subscribe!",
			 description: "Check out our YouTube channel and subscribe to keep up with our content as we release it! Our YouTube channel is the best way to stay up to date with the latest Tommy Talks videos.",
			 img: "img/demo/youtube.jpg",
			 url: "https://www.youtube.com/channel/UCkPAeSKa5_im3ufKqrbvXXA",
				button: "Take Me There"
		 }
	 ]
	}
];

$(document).ready(function() {
  var templateSource = $("#talk-template").html();

  var template = Handlebars.compile(templateSource);
  $("#talks").append(template(data));
	
	var length = data.length;
	var current = 1;
	
	for (var i = 1; i <= length; i++) {
		if (i != 1) $('#talk-' + i).hide();
	}
	
	$('#backward').click(function() {
		var prev = current;
		if (current === 1) current = length;
		else current--;
		$('#talk-' + prev).hide();
		$('#talk-' + current).show();
	});
	$('#forward').click(function() {
		var prev = current;
		if (current === length) current = 1;
		else current++;
		$('#talk-' + prev).hide();
		$('#talk-' + current).show();
	});
});

