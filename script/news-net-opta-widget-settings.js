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

//use a different ID key between live page and localhost (localhost not supported by provided key).
//substitute key value given as query string parameter on localhost.
//doc_location used to construct links in opta_settings.link_callback - localhost and live use different paths.
if(document.location.host == 'localhost:8000' && query.i){
	window['sub_id'] = query.i
	window['doc_location'] = document.location.href.substring(0,document.location.href.lastIndexOf('/')+1)//for localhost
}else{
	window['sub_id'] = 'b7b73f836f5975bc4752b7b54aced1da'
	// window['doc_location'] = `${document.location.protocol}${document.location.hostname}${document.location.pathname}`//for live page(from "not index")
	window['doc_location'] = `${document.location.protocol}${document.location.hostname}${document.location.pathname.substring(0,document.location.pathname.lastIndexOf('/')+1)}`//for live page


	// window['doc_location'] = document.location.href.substring(0,document.location.href.lastIndexOf('/')+1)
}
// console.log(document.location)
// console.log(`${document.location.protocol}${document.location.hostname}${document.location.pathname.substring(0,document.location.pathname.lastIndexOf('/')+1)}`)
// console.log(`${document.location.protocol}${document.location.hostname}`)
// console.log(doc_location)
// console.log(sub_id)

/*SET UP DROPDOWN NAV*/
$(function(){

	let newsnet_sport_nav_container = document.getElementsByClassName('newsnet_sport_nav_container')[0]

	newsnet_sport_nav_container.innerHTML = (`
		<div class="sport_nav_title">
			Scoreboard
		</div>
		
		<div class="newsnet_sport_nav">
			<div class="dropdown">
				<button class="dropbtn">Football</button>
				<div class="dropdown-content">
					<a href="football.html?competition=379&season=2018&i=${sub_id}">AFC Asian Cup</a>
					<a href="football.html?competition=731&season=2021&i=${sub_id}">AFC Women's Asian Cup</a>
					<a href="football.html?competition=341&season=1000022&i=${sub_id}">Asian World Cup Qualifiers</a>
					<a href="football.html?competition=214&season=2021&i=${sub_id}">Australian A-League Men</a>
					<a href="football.html?competition=684&season=2021&i=${sub_id}">Australian A-League Women</a>
					<a href="football.html?competition=5&season=2021&i=${sub_id}">Champions League</a>
					<a href="football.html?competition=8&season=2021&i=${sub_id}">English Premier League</a>
					<a href="football.html?competition=1009&season=2019&i=${sub_id}">FFA Cup of Nations</a>
					<a href="football.html?competition=24&season=2021&i=${sub_id}">French Ligue 1</a>
					<a href="football.html?competition=22&season=2021&i=${sub_id}">German Bundesliga</a>
					<a href="football.html?competition=551&season=2022&i=${sub_id}">Internationals Women</a>
					<a href="football.html?competition=88&season=2022&i=${sub_id}">Internationals</a>
					<a href="football.html?competition=21&season=2021&i=${sub_id}">Italian Serie A</a>
					<a href="football.html?competition=378&season=2021&i=${sub_id}">Olympic Football Tournament</a>
					<a href="football.html?competition=734&season=2019&i=${sub_id}">Olympic Women's Tournament Qualifying Asia</a>
					<a href="football.html?competition=578&season=2021&i=${sub_id}">Olympic Women's Tournament</a>
					<a href="football.html?competition=1136&season=2020&i=${sub_id}">Olympics Intercontinental Play-offs Women</a>
					<a href="football.html?competition=23&season=2021&i=${sub_id}">Spanish La Liga</a>
					<a href="football.html?competition=1125&season=2021&i=${sub_id}">UEFA Europa Conference League</a>
					<a href="football.html?competition=6&season=2021&i=${sub_id}">UEFA Europa League</a>
					<a href="football.html?competition=3&season=2020&i=${sub_id}">UEFA European Championship Finals</a>
					<a href="football.html?competition=408&season=2022&i=${sub_id}">Women's World Cup</a>
					<a href="football.html?competition=4&season=2022&i=${sub_id}">World Cup</a>
				</div>
			</div>
			
			<div class="dropdown">
				<button class="dropbtn">Basketball</button>
				<div class="dropdown-content">
					<a href="basketball.html?competition=5wdi9kmiurd2rjx2f7ew92wm6&season=4sjxxlpzq4fgth238gnebn3tg&i=${sub_id}">NBL</a>
				</div>
			</div>
			
			<div class="dropdown">
				<button class="dropbtn">Tennis</button>
				<div class="dropdown-content"></div>
			</div>
			<div class="dropdown">
				<button class="dropbtn">Golf</button>
				<div class="dropdown-content">
					<a href="golf.html?competition=3c5msl8moic00eu49b06aumsp&season=405fzvlo157c392mbz8odw9p0&i=${sub_id}">PGA Tour</a>
				</div>
			</div>
			<div class="dropdown">
				<button class="dropbtn">Cricket</button>
				<div class="dropdown-content">
					<a href="cricket.html?competition=2722&season=na&i=${sub_id}">England v India Test Series 2021/2022</a>
					<a href="cricket.html?competition=2780&season=na&i=${sub_id}">IPL 2021</a>
					<a href="cricket.html?competition=2781&season=na&i=${sub_id}">ICC World Test Championship Final 2021</a>
					<a href="cricket.html?competition=2784&season=na&i=${sub_id}">West Indies v England Twenty20 Series 2022</a>
					<a href="cricket.html?competition=2785&season=na&i=${sub_id}">West Indies v England Test Series 2022</a>
					<a href="cricket.html?competition=2813&season=na&i=${sub_id}">Australia v England Test Series 2021/2022</a>
					<a href="cricket.html?competition=2816&season=na&i=${sub_id}">Australia v Sri Lanka Twenty20 Series 2022</a>
					<a href="cricket.html?competition=2831&season=na&i=${sub_id}">Weber Women's Big Bash League 2021</a>
					<a href="cricket.html?competition=2832&season=na&i=${sub_id}">KFC T20 Big Bash League 2021/2022</a>
					<a href="cricket.html?competition=2852&season=na&i=${sub_id}">ICC Men's T20 World Cup 2021</a>
					<a href="cricket.html?competition=2856&season=na&i=${sub_id}">England v New Zealand Test Series 2022</a>
					<a href="cricket.html?competition=2857&season=na&i=${sub_id}">England v India Twenty20 Series 2022</a>
					<a href="cricket.html?competition=2858&season=na&i=${sub_id}">England v India ODI Series 2022</a>
					<a href="cricket.html?competition=2859&season=na&i=${sub_id}">England v South Africa ODI Series 2022</a>
					<a href="cricket.html?competition=2860&season=na&i=${sub_id}">England v South Africa Twenty20 Series 2022</a>
					<a href="cricket.html?competition=2861&season=na&i=${sub_id}">England v South Africa Test Series 2022</a>
					<a href="cricket.html?competition=2863&season=na&i=${sub_id}">South Africa v India Test Series 2021/2022</a>
					<a href="cricket.html?competition=2864&season=na&i=${sub_id}">South Africa v India ODI Series 2022</a>
					<a href="cricket.html?competition=2868&season=na&i=${sub_id}">South Africa v Bangladesh ODI Series 2022</a>
					<a href="cricket.html?competition=2869&season=na&i=${sub_id}">South Africa v Bangladesh Test Series 2022</a>
					<a href="cricket.html?competition=2878&season=na&i=${sub_id}">India v West Indies ODI Series 2022</a>
					<a href="cricket.html?competition=2879&season=na&i=${sub_id}">India v West Indies Twenty20 Series 2022</a>
					<a href="cricket.html?competition=2880&season=na&i=${sub_id}">India v Sri Lanka Test Series 2022</a>
					<a href="cricket.html?competition=2881&season=na&i=${sub_id}">India v Sri Lanka Twenty20 Series 2022</a>
					<a href="cricket.html?competition=2882&season=na&i=${sub_id}">India v South Africa Twenty20 Series 2022</a>
					<a href="cricket.html?competition=2886&season=na&i=${sub_id}">Netherlands v England ODI Series 2022</a>
					<a href="cricket.html?competition=2903&season=na&i=${sub_id}">Pakistan v Australia Test Series 2022</a>
					<a href="cricket.html?competition=2904&season=na&i=${sub_id}">Pakistan v Australia ODI Series 2022</a>
					<a href="cricket.html?competition=2905&season=na&i=${sub_id}">Pakistan v Australia Only Twenty20 2022</a>
					<a href="cricket.html?competition=2908&season=na&i=${sub_id}">New Zealand v Bangladesh Test Series 2022</a>
					<a href="cricket.html?competition=2911&season=na&i=${sub_id}">New Zealand v South Africa Test Series 2022</a>
					<a href="cricket.html?competition=2913&season=na&i=${sub_id}">New Zealand v Netherlands Only Twenty20 2022</a>
					<a href="cricket.html?competition=2914&season=na&i=${sub_id}">New Zealand v Netherlands ODI Series 2022</a>
					<a href="cricket.html?competition=2917&season=na&i=${sub_id}">West Indies v Ireland ODI Series 2022</a>
					<a href="cricket.html?competition=2920&season=na&i=${sub_id}">Afghanistan v Netherlands ODI Series in Qatar 2022</a>
					<a href="cricket.html?competition=2922&season=na&i=${sub_id}">Sri Lanka v Zimbabwe ODI Series 2022</a>
					<a href="cricket.html?competition=2934&season=na&i=${sub_id}">New Zealand in England Tour Matches 2022</a>
					<a href="cricket.html?competition=2938&season=na&i=${sub_id}">South Africa in England Tour Matches 2022</a>
					<a href="cricket.html?competition=2939&season=na&i=${sub_id}">India in England Tour Matches 2022</a>
					<a href="cricket.html?competition=2940&season=na&i=${sub_id}">ICC Men's T20 World Cup 2022</a>
					<a href="cricket.html?competition=2945&season=na&i=${sub_id}">Bangladesh v Afghanistan ODI Series 2022</a>
					<a href="cricket.html?competition=2946&season=na&i=${sub_id}">Bangladesh v Afghanistan Twenty20 Series 2022</a>
					<a href="cricket.html?competition=2953&season=na&i=${sub_id}">Netherlands v West Indies ODI Series 2022</a>
					<a href="cricket.html?competition=2954&season=na&i=${sub_id}">Ireland v India Twenty20 Series 2022</a>
					<a href="cricket.html?competition=2955&season=na&i=${sub_id}">Ireland v New Zealand ODI Series 2022</a>
					<a href="cricket.html?competition=2956&season=na&i=${sub_id}">Ireland v New Zealand Twenty20 Series 2022</a>
					<a href="cricket.html?competition=2957&season=na&i=${sub_id}">Ireland v South Africa Twenty20 Series in England 2022</a>
					<a href="cricket.html?competition=2960&season=na&i=${sub_id}">IPL 2022</a>
					<a href="cricket.html?competition=2966&season=na&i=${sub_id}">Nepal v Papua New Guinea ODI Series 2022</a>
				</div>
			</div>
			<div class="dropdown">
				<button class="dropbtn">Motorsport</button>
				<div class="dropdown-content">
					<a href="motorsport.html?competition=1m5x4n07f2kqkiczebja5etiq&season=3d2cd3uj88qgdlt4lyhr0cis4&i=${sub_id}">FIA F1 World Championship</a>
					<a href="motorsport.html?competition=2e554vbpw7g0ykhl0rziuabxl&season=3j534o30hn9scfadkb0v9hkb8&i=${sub_id}">FIM MotoGP World Championship</a>
					<a href="motorsport.html?competition=2ecsbewwstw5jn9h7kpv2joix&season=e9p0ngu4n2do5agfk6wt23f9w&i=${sub_id}">V8 Supercars</a>
				</div>
			</div>
			<div class="dropdown">
				<button class="dropbtn">US Sports</button>
				<div class="dropdown-content"></div>
			</div>
			<div class="dropdown">
				<button class="dropbtn">Olympics</button>
				<div class="dropdown-content"></div>
			</div>
			<div class="dropdown">
				<button class="dropbtn">Rugby Union</button>
				<div class="dropdown-content">
					<a href="rugbyunion.html?competition=3&season=2023&i=${sub_id}">International</a>
					<a href="rugbyunion.html?competition=205&season=2022&i=${sub_id}">Super Rugby Pacific</a>
					<a href="rugbyunion.html?competition=209&season=2022&i=${sub_id}">Six Nations</a>
					<a href="rugbyunion.html?competition=210&season=2024&i=${sub_id}">Rugby World Cup</a>
					<a href="rugbyunion.html?competition=214&season=2022&i=${sub_id}">The Rugby Championship</a>
					<a href="rugbyunion.html?competition=221&season=2021&i=${sub_id}">British & Irish Lions</a>
					<a href="rugbyunion.html?competition=249&season=2022&i=${sub_id}">Women's Rugby World Cup</a>
				</div>
			</div>
			<div class="dropdown">
				<button class="dropbtn">Rugby League</button>
				<div class="dropdown-content">
					<a href="rugbyleague.html?competition=3&season=2022&i=${sub_id}">National Rugby League</a>
					<a href="rugbyleague.html?competition=6&season=2021&i=${sub_id}">State of Origin</a>
					<a href="rugbyleague.html?competition=86&season=2021&i=${sub_id}">NRL Women's Premiership</a>
					<a href="rugbyleague.html?competition=87&season=2021&i=${sub_id}">Women's State of Origin</a>
				</div>
			</div>
			<div class="dropdown">
				<button class="dropbtn">AFL</button>
				<div class="dropdown-content">
					<a href="afl.html?competition=11686&season=2022&i=${sub_id}">AFL</a>
					<a href="afl.html?competition=11595&season=2022&i=${sub_id}">AFLW</a>
				</div>
			</div>
		</div>
	`)
})
/*SET UP DROPDOWN NAV*/
console.log('210323')
/*FOOTBALL*/
if(document.location.href.indexOf('football.html') >= 0){//check that this is the football page

	switch(query['competition']){

		//football (soccer)
		// case '8': //premier-league
		// case '214': //a-league-mens
		// case '684': //a-league-womens

		case '3'://	UEFA European Championship Finals	2020
		case '4'://	World Cup	2022
		case '5'://	Champions League	2021
		case '6'://	UEFA Europa League	2021
		case '8'://	English Premier League	2021
		case '21'://	Italian Serie A	2021
		case '22'://	German Bundesliga	2021
		case '23'://	Spanish La Liga	2021
		case '24'://	French Ligue 1	2021
		case '88'://	Internationals	2022
		case '214'://	Australian A-League Men	10001
		case '341'://	Asian World Cup Qualifiers	1000022
		case '378'://	Olympic Football Tournament	2021
		case '379'://	AFC Asian Cup	2018
		case '408'://	Women's World Cup	2022
		case '551'://	Internationals Women	2022
		case '578'://	Olympic Women's Tournament	2021
		case '731'://	AFC Women's Asian Cup	2021
		case '734'://	Olympic Women's Tournament Qualifying Asia	2019
		case '1009'://	FFA Cup of Nations	2019
		case '1125'://	UEFA Europa Conference League	2021
		case '1136'://	Olympics Intercontinental Play-offs Women	2020

		let fixturesTopLeft = document.getElementsByClassName('fixtures-top-left')[0]

		let matchSummary = document.getElementById('match-centre-top-left')
		let standingsWidget = document.getElementById('standings-widget')

	// if(query['competition'] == "8"){

		fixturesTopLeft.innerHTML = (`
			<opta-widget 
				widget="fixtures" 
				competition="${query['competition']}"
				season="${query['season']}"
				template="normal" 
				live="true" 
				show_venue="true" 
				match_status="all" 
				grouping="date" 
				show_grouping="true" 
				navigation="tabs_scroll" 
				default_nav="1" 
				start_on_current="true" 
				sub_grouping="date" 
				show_subgrouping="false" 
				order_by="date_ascending" 
				show_crests="true" 
				date_format="dddd D MMMM YYYY" 
				time_format="HH:mm" 
				month_date_format="MMMM" 
				competition_naming="full" 
				team_naming="full" 
				team_link="teams" 
				match_link="" 
				pre_match="false" 
				show_live="true" 
				show_logo="false" 
				show_title="true" 
				breakpoints="400" 
				sport="football"
				image_size="medium"
				>
					<opta-widget 
						sport="football" 
						widget="match_summary" 
						template="normal" 
						live="" 
						competition="" 
						season="" 
						match="" 
						show_match_header="false" 
						show_attendance="true" 
						show_cards="true" 
						show_crests="false" 
						show_goals="true" 
						show_goals_combined="false" 
						show_penalties_missed="false" 
						show_referee="true" 
						show_subs="true" 
						show_venue="true" 
						show_shootouts="false" 
						player_naming="last_name" 
						player_link="" 
						show_logo="true" 
						breakpoints="400"
						>
					</opta-widget>
				</opta-widget>
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
/*FOOTBALL*/
console.log('2203251653')
/*BASKETBALL*/
if(document.location.href.indexOf('basketball.html') >= 0){
	switch(query['competition']){
		case '5wdi9kmiurd2rjx2f7ew92wm6':

		let fixturesTopLeft = document.getElementsByClassName('fixtures-top-left')[0]
		let matchSummary = document.getElementById('match-centre-top-left')
		let standingsWidget = document.getElementById('standings-widget')

		fixturesTopLeft.innerHTML = (`
			<opta-widget widget="scoreboard" 
			competition="${query['competition']}" 
			season="${query['season']}" 
			template="normal" live="true" show_venue="true" grouping="date" show_grouping="true" show_date_picker="true" navigation="tabs_scroll" default_nav="1" start_on_current="true" order_by="date_ascending" away_team_first="false" show_crests="true" date_format="dddd D MMMM YYYY" time_format="HH:mm" month_date_format="MMMM" competition_naming="full" team_naming="full" pre_match="false" show_live="true" show_logo="false" show_title="false" breakpoints="400" sport="basketball"></opta-widget>
		`)

		standingsWidget.innerHTML=(`
			<opta-widget widget="standings" 
			competition="5wdi9kmiurd2rjx2f7ew92wm6" 
			season="4sjxxlpzq4fgth238gnebn3tg" 
			template="normal" navigation="tabs" default_nav="1" show_categories="all" show_rank="true" show_key="true" show_crests="true" sorting="true" team_naming="full" show_logo="false" show_title="true" breakpoints="460" sport="basketball"></opta-widget>
		`)

		break;
	}
}
/*BASKETBALL*/

/*MOTORSPORT*/

if(document.location.href.indexOf('motorsport.html') >= 0){
	switch(query['competition']){
		case '1m5x4n07f2kqkiczebja5etiq'://F1

		let fixturesTopLeft = document.getElementsByClassName('fixtures-top-left')[0]
		let matchSummary = document.getElementById('match-centre-top-left')
		let standingsWidget = document.getElementById('standings-widget')

		fixturesTopLeft.innerHTML = (`
			<opta-widget widget="scoreboard" 
			competition="${query['competition']}" 
			season="${query['season']}" 
			template="normal" live="true" show_venue="true" grouping="date" show_grouping="true" show_date_picker="true" navigation="tabs_scroll" default_nav="1" start_on_current="true" order_by="date_ascending" away_team_first="false" show_crests="true" date_format="dddd D MMMM YYYY" time_format="HH:mm" month_date_format="MMMM" competition_naming="full" team_naming="full" pre_match="false" show_live="true" show_logo="false" show_title="false" breakpoints="400" sport="basketball"></opta-widget>
		`)

		standingsWidget.innerHTML=(`
			<opta-widget widget="standings" 
			competition="${query['competition']}" 
			season="${query['season']}" 
			template="normal" navigation="tabs" default_nav="1" show_drivers="true" show_constructors="true" show_wins="true" team_naming="full" driver_naming="full" show_logo="false" limit="10" show_title="true" breakpoints="460" sport="motorsport"></opta-widget>
		`)

		break;
	}
}


// <opta-widget widget="standings" competition="1m5x4n07f2kqkiczebja5etiq" season="3d2cd3uj88qgdlt4lyhr0cis4" template="normal" navigation="tabs" default_nav="1" show_drivers="true" show_constructors="true" show_wins="true" team_naming="full" driver_naming="full" show_logo="false" limit="10" show_title="true" breakpoints="460" sport="motorsport"></opta-widget>
/*MOTORSPORT*/











/*MATCH CENTRE STUFF*/
if(document.location.href.indexOf('match.html') >= 0 || document.location.href.indexOf('test2.html') >= 0){//check that this is a match centre page

	switch(query['competition']){

		//football (soccer)
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
				show_images="true"
				show_competition_name="true"
				competition_naming="full"
				team_naming="full"
				player_naming="full"
				show_live="true"
				show_logo="false"
				show_title="true"
				breakpoints="400"
				sport="football"
				image_size="large"
			></opta-widget>
		`)

		// standingsWidget.innerHTML=(`
		// 	<opta-widget
		// 		widget="match_summary"
		// 		competition="${query['competition']}"
		// 		season="${query['season']}"
		// 		match="${query['match']}"
		// 		template="normal"
		// 		live="true"
		// 		show_match_header="true"
		// 		show_score="true"
		// 		show_attendance="true"
		// 		show_date="true"
		// 		date_format="dddd D MMMM YYYY HH:mm"
		// 		show_cards="all"
		// 		show_crests="true"
		// 		show_team_formation="true"
		// 		show_goals="true"
		// 		show_goals_combined="false"
		// 		show_penalties_missed="true"
		// 		show_halftime_score="false"
		// 		show_referee="true"
		// 		show_subs="true"
		// 		show_venue="true"
		// 		show_shootouts="true"
		// 		show_tooltips="true"
		// 		show_images="true"
		// 		show_competition_name="true"
		// 		competition_naming="full"
		// 		team_naming="full"
		// 		player_naming="full"
		// 		show_live="true"
		// 		show_logo="false"
		// 		show_title="true"
		// 		breakpoints="400, 1200"
		// 		sport="football"
		// 		image_size="large"
		// 	></opta-widget>
		// `)

		// document.write(`
		// 	<opta-widget
		// 		widget="match_summary"
		// 		competition="${query['competition']}"
		// 		season="${query['season']}"
		// 		match="${query['match']}"
		// 		template="normal"
		// 		live="true"
		// 		show_match_header="true"
		// 		show_score="true"
		// 		show_attendance="true"
		// 		show_date="true"
		// 		date_format="dddd D MMMM YYYY HH:mm"
		// 		show_cards="all"
		// 		show_crests="true"
		// 		show_team_formation="true"
		// 		show_goals="true"
		// 		show_goals_combined="false"
		// 		show_penalties_missed="true"
		// 		show_halftime_score="false"
		// 		show_referee="true"
		// 		show_subs="true"
		// 		show_venue="true"
		// 		show_shootouts="true"
		// 		show_tooltips="true"
		// 		show_images="true"
		// 		show_competition_name="true"
		// 		competition_naming="full"
		// 		team_naming="full"
		// 		player_naming="full"
		// 		show_live="true"
		// 		show_logo="false"
		// 		show_title="true"
		// 		breakpoints="400, 1200"
		// 		sport="football"
		// 		image_size="large"
		// 	></opta-widget>
		// `)

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

const clickTest = (e)=>{
	console.log(e.target)
}

/*WIDGET SETTINGS*/
//basic setup
//must use "var" - "const" and "let" throw errors for some reason
var opta_settings = {
	subscription_id: sub_id,
	language: 'en_GB',
	timezone: 'user',

	//http://widget.cloud.opta.net/helper/v3/docs/#!/manual/widget-customisation-linking
	link_callback: function(params){

		let link = window['doc_location']
		link=''
		console.log(link)
		console.log(`${params['base_url']}.html?competition=${params['competition']}&season=${params['season']}&match=${params['match']}`)
		// Competitions
		switch(params.competition){
			//football (soccer)
			case 8: //premier-league
			case 214: //a-league-mens
			case 684: //a-league-womens
			link += `${params['base_url']}.html?competition=${params['competition']}&season=${params['season']}&match=${params['match']}`
			break;
		}

		if(document.location.host == 'localhost:8000' && query.i){
			link += `&i=${sub_id}`
		}
		console.warn(link)
		return link;
	}

	// link_callback: function(params){

	// 	// Opta('#match-centre').html(params.match)
		
	// 	// console.log(params.match)
	// 	// return `#match-centre?competition=${params['competition']}&season=${params['season']}&match=${params['match']}`;
	// 	return `#match-centre`;
	// }
};

//edit behaviour of hyperlinks
//test case for customisation
//adapted from http://widget.cloud.opta.net/helper/v3/docs/#!/manual/callbacks
Opta.events.subscribe('widget.drawn', function (widget) {
	
	let attr = widget.widget.attr;

	//if it is a fixtures widget, change the attributes of match page hyperlinks (if included)
	//to open in a new tab rather than navigating away from the current page
	
	if (attr.widget === 'fixtures') {
			
		Opta(widget.widget.wid + ' .Opta-MatchLink').each(function (num, element) {
					
			let link = Opta(element)

			// console.log(link)

			link.bind('click',clickTest)

			// link.attr({
			// 	'target': '_blank',
			// 	// 'title': `Season: ${params['season']}, Match: ${params['match']}`,
			// 	// 'title': `number: ${num}`,
			// 	'href': element['href'].replace(document.location.href,'https://')
			// })
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