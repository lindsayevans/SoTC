
var MAP_API_KEY = location.host.indexOf('localhost') != -1 ? 
	'ABQIAAAA1IX7KXHN5eMgHy4n0_SLChT2yXp_ZAY8_ufC3CFXhHIE1NvwkxSyZYEKrrVg7vrnYqb9D5lPd4zJWQ':
	'ABQIAAAA1IX7KXHN5eMgHy4n0_SLChQwrrIPAdeMAqJ7rTrefujICwNWehR5Hs6MxIso0nY-EL20LCpGsgrTwg';

document.write(unescape('%3Cscript src="http://maps.google.com/maps?file=api&amp;v=2&amp;sensor=true&amp;key='+MAP_API_KEY+'" type="text/javascript"></script>'));

$(function(){

	$('body').css({fontFamily: 'Comic Sans MS, Comic Sans'});

	var map = $('<div id="m"/>')
		.appendTo('body')
		.css({
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%'
		}),
		gmap = new GMap2(map[0])
	;
	gmap.setCenter(new GLatLng(-33.872268,151.22509), 16);

	$('section').each(function(i){
		var _this = $(this),
			point = new GLatLng(
				$('span[itemprop="latitude"]', _this).attr('content'),
				$('span[itemprop="longitude"]', _this).attr('content')
			),
			marker = new GMarker(point, {title: $('h2[itemprop~="org"]', _this).text()})
		;
		gmap.addOverlay(marker);
		GEvent.addListener(marker, 'click', function(){
			marker.openInfoWindowHtml(_this.html());
		});

	});

});
