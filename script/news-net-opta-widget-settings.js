/*GENERAL PAGE SETUP*/
//function to get query string parameters
const getQueryParams = (qs)=>{
	qs = qs.split('+').join(' ');

	let params = {},
	tokens,
	re = /[?&]?([^=]+)=([^&]*)/g;

	while (tokens = re.exec(qs)) {
		params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
	}
	return params;
};

//query string parameters as a variable
let query = getQueryParams(document.location.search)

//use a different ID key between live page and localhost (localhost not supported by provided key)
//substitute key value given as query string parameter on localhost
// console.log(document.location.host)
if(document.location.host == 'localhost:8000' && query.i){
	window['sub_id'] = query.i
	window['doc_location'] = document.location.href.substring(0,document.location.href.lastIndexOf('/')+1)//for localhost
}else{
	window['sub_id'] = 'b7b73f836f5975bc4752b7b54aced1da'
	// window['doc_location'] = document.location.href//for live page
	window['doc_location'] = `${document.location.protocol}.${document.location.hostname}.${document.location.pathname}`//for live page
}
console.log(doc_location)

// console.log(document.location.href)//for live page
// console.log(document.location.href.substring(0,document.location.href.lastIndexOf('/')+1))//for localhost
/*MATCH CENTRE STUFF*/
if(document.location.href.indexOf('match.html') >= 0){//check that this is a match centre page

	switch(query['competition']){

		//soccer
		case '8': //premier-league
		case '214': //a-league-mens
		case '684': //a-league-womens

		let matchSummary = document.getElementById('match-centre-top-left')
		let standingsWidget = document.getElementById('standings-widget')

		matchSummary.innerHTML=(`
			<opta-widget
				widget="match_summary"
				competition="${query['competition']}"
				season="${query['season']}"
				match="${query['match']}"
				template="normal"
				live="true"
				show_match_header="true"
				show_score="true"
				show_attendance="true"
				show_date="true"
				date_format="dddd D MMMM YYYY HH:mm"
				show_cards="all"
				show_crests="true"
				show_team_formation="true"
				show_goals="true"
				show_goals_combined="false"
				show_penalties_missed="true"
				show_halftime_score="false"
				show_referee="true"
				show_subs="true"
				show_venue="true"
				show_shootouts="true"
				show_tooltips="true"
				show_images="false"
				show_competition_name="true"
				competition_naming="full"
				team_naming="full"
				player_naming="full"
				show_live="true"
				show_logo="false"
				show_title="true"
				breakpoints="400, 700"
				sport="football"
				image_size="large"
			></opta-widget>
		`)

		standingsWidget.innerHTML=(`
			<opta-widget
				widget="standings"
				competition="${query['competition']}"
				season="${query['season']}"
				template="normal"
				live="false"
				default_nav="1"
				side="combined"
				data_detail="default"
				show_key="false"
				show_crests="true"
				points_in_first_column="false"
				lose_before_draw="false"
				show_form="6"
				competition_naming="full"
				team_naming="full"
				date_format="dddd D MMMM YYYY"
				sorting="true"
				show_live="true"
				show_relegation_average="false"
				show_logo="false"
				show_title="true"
				breakpoints="400,700"
				sport="football"
			></opta-widget>
		`)
		break;
	}
}
console.log(document.location.protocol)
console.log(document.location.pathname)
console.log(document.location.hostname)
/*WIDGET SETTINGS*/
//basic setup
//must use "var" - "const" and "let" throw errors for some reason
var opta_settings = {
	subscription_id: sub_id,
	language: 'en_GB',
	timezone: 'user',

	link_callback: function(params){

		let link = window['doc_location']
console.log(link)
console.log(window['doc_location'])
		// Competitions
		switch(params.competition){
			//soccer
			case 8: //premier-league
			case 214: //a-league-mens
			case 684: //a-league-womens
			link += `${params['base_url']}.html?competition=${params['competition']}&season=${params['season']}&match=${params['match']}`
			break;
		}
// https://match.html/?competition=8&season=2021&match=2210449
		if(document.location.host == 'localhost:8000' && query.i){
			link += `&i=${sub_id}`
		}

		return link;
	}
};

//edit behaviour of hyperlinks
//test case for customisation
Opta.events.subscribe('widget.drawn', function (widget) {
	
	let attr = widget.widget.attr;

	//if it is a fixtures widget, change the attributes of match page hyperlinks (if included)
	//to open in a new tab rather than navigating away from the current page
	
	if (attr.widget === 'fixtures') {
			
		Opta(widget.widget.wid + ' .Opta-MatchLink').each(function (num, element) {
					
			let link = Opta(element)
			// link.attr('target','_blank')
			link.attr({
				'target': '_blank',
				// 'title': `Season: ${params['season']}, Match: ${params['match']}`,
				// 'title': `number: ${num}`,
				'href': element['href'].replace(document.location.href,'https://')
			})

			// console.log(element['href'].replace(document.location.href,'https://'))
		})
	}
});



/*WIDGETS IN TABS*/
//http://widget.cloud.opta.net/helper/v3/docs/#!/example/tabs
$(function() {
	var loadNewWidgets = function(dom) {
		var opta_widget_tags = $(dom).find('opta-widget[load="false"]');

		if (opta_widget_tags.length) {
			opta_widget_tags.removeAttr('load');
			Opta.start();
		}
	},
	resumeFocusedWidgets = function(dom) {
		var widget_containers = $(dom).find('.Opta');

		widget_containers.each(function() {
			var element = $(this),
			widget_id = element.attr('id'),
			Widget = Opta.widgets[widget_id];

			Widget.resume(Widget.live, Widget.first_time);
			console.info('Resumed', Widget.attr.widget);
		});
	},
	pauseHiddenWidgets = function(dom) {
		var widget_containers = $(dom).find('.Opta');

		widget_containers.each(function() {
			var element = $(this),
			widget_id = element.attr('id'),
			Widget = Opta.widgets[widget_id];

			Widget.pause();
			console.info('Paused', Widget.attr.widget);
		});
	};

	$('#tabs').tabs({
		create: function(event, ui) {
			// Load widgets in default tab
			loadNewWidgets(ui.panel);
		},
		activate: function(event, ui) {
			console.group();
			// Load any new widgets in selected tab
			loadNewWidgets(ui.newPanel);

			// Resume focussed widgets that have already been loaded
			resumeFocusedWidgets(ui.newPanel);

			// Pause hidden widgets
			pauseHiddenWidgets(ui.oldPanel);
			console.groupEnd();
		}
	});





	/*VISIBILITY API - https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API*/
	// Set the name of the hidden property and the change event for visibility
	var hidden, visibilityChange;
	if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
		hidden = "hidden";
		visibilityChange = "visibilitychange";
	} else if (typeof document.msHidden !== "undefined") {
		hidden = "msHidden";
		visibilityChange = "msvisibilitychange";
	} else if (typeof document.webkitHidden !== "undefined") {
		hidden = "webkitHidden";
		visibilityChange = "webkitvisibilitychange";
	}


	function handleVisibilityChange() {
		// console.log(document.visibilityState)
		if (document[hidden]) {
		// videoElement.pause();
		console.log('is hidden')
		pauseHiddenWidgets();
		} else {
		// videoElement.play();
		console.log('is visible')
		resumeFocusedWidgets();
		}
	}

	// Warn if the browser doesn't support addEventListener or the Page Visibility API
	if (typeof document.addEventListener === "undefined" || hidden === undefined) {
		console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
	} else {
		// Handle page visibility change
		document.addEventListener(visibilityChange, handleVisibilityChange, false);
	}
});