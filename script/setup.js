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

//define DOM elements
let fixturesWidget = document.getElementById('fixtures-widget')
let standingsWidget = document.getElementById('standings-widget')
let matchSummary = document.getElementById('match-widget')
let rostersWidget = document.getElementById('rosters-widget')

//functions
document.onready = ()=>{

	switch(query['competition']){
		
		/*AFL*/
		case '11686'://AFL
		case '11595'://AFLW

		fixturesWidget.innerHTML = (`
			<opta-widget widget="fixtures" 
			template="normal" 
			competition="${query['competition']}" 
			season="${query['season']}" 
			show_venue="true" 
			match_status="all" 
			grouping="date" 
			show_grouping="true" 
			navigation="tabs_scroll" 
			default_nav="1" 
			show_date_picker="true" 
			start_on_current="true" 
			sub_grouping="date" 
			show_subgrouping="false" 
			order_by="date_ascending" 
			away_team_first="false" 
			show_crests="true" 
			date_format="ll" 
			time_format="HH:mm" 
			month_date_format="MMMM"

			match_link="afl-match-summary.html" 
				
			pre_match="10" 
				
			show_logo="false" 
			show_title="true" 
			breakpoints="400" 
			sport="afl" 

			image_size="medium"

			></opta-widget>
		`);
		//team link above match link
		//team_link="afl-teams.html" 

		matchSummary.innerHTML = (`
			<opta-widget 
			widget="match_summary" 
			template="normal" 
			competition="${query['competition']}" 
			season="${query['season']}" 
			match="${query['match']}" 
			live="true" 
			show_match_header="true" 
			show_score="true" 
			show_quarters="true" 
			show_scorers="true" 
			show_crests="true" 
			show_date="true" 
			date_format="dddd D MMMM YYYY" 
			show_competition_name="true" 
			show_venue="true" 
			competition_naming="full" 
			team_naming="full" 
			player_naming="full" 

			show_title="true" 
			show_logo="false" 
			show_live="true" 
			breakpoints="400, 700" 
			sport="afl"
			></opta-widget>
		`);
		//team & pplayer links in gap above
		// team_link="afl-teams.html" 
		// player_link="afl-players.html" 

		standingsWidget.innerHTML = (`
			<opta-widget 
			widget="standings" 
			template="normal" 
			competition="${query['competition']}" 
			season="${query['season']}" 
			show_rank="true" 
			show_key="true" 
			sorting="true" 
			show_logo="false" 
			show_title="true" 
			breakpoints="460" 
			sport="afl"
			></opta-widget>
		`);
		break;
		/*AFL*/

		/*Basketball (NBL)*/
		case '5wdi9kmiurd2rjx2f7ew92wm6'://NBL
		fixturesWidget.innerHTML = (`
			<opta-widget 
			widget="scoreboard" 
			
			competition="${query['competition']}" 
			season="${query['season']}" 
			
			template="normal" 
			live="true" 
			show_venue="true" 
			grouping="date" 
			show_grouping="true" 
			show_date_picker="true" 
			navigation="tabs_scroll" 
			default_nav="1" 
			start_on_current="true" 
			order_by="date_ascending" 
			away_team_first="false" 
			show_crests="true" 
			date_format="dddd D MMMM YYYY" 
			time_format="HH:mm" 
			month_date_format="MMMM" 
			competition_naming="full" 
			team_naming="full" 
			team_link="basketball-rosters.html" 
			
			pre_match="10" 
			
			show_live="true" 
			show_logo="false" 
			show_title="true" 
			breakpoints="400" 
			sport="basketball"
			></opta-widget>
		`);
		// matchSummary.innerHTML=(``);
		standingsWidget.innerHTML = (`
			<opta-widget 
			widget="standings" 
			
			competition="${query['competition']}" 
			season="${query['season']}" 
			
			template="normal" 
			navigation="tabs" 
			default_nav="1" 
			show_categories="all" 
			show_rank="true" 
			show_key="true" 
			show_crests="true" 
			sorting="true" 
			team_naming="full" 
			team_link="basketball-rosters.html" 
			show_logo="false" 
			show_title="true" 
			breakpoints="460" 
			sport="basketball"></opta-widget>
		`);

		rostersWidget.innerHTML = (`
			<opta-widget 
			widget="rosters" 

			competition="${query['competition']}" 
			season="${query['season']}" 
			team="${query['team']}" 

			template="normal" 
			column_count="1" 
			show_position="true" 
			show_images="false" 
			show_country="true" 
			show_flags="true" 
			show_key="true" 
			show_forwards="true" 
			show_guards="true" 
			show_centres="true" 
			show_jersey_number="true" 
			show_height="true" 
			show_weight="true" 
			height_units="m" 
			weight_units="kg" 
			show_college="true" 
			show_birthplace="true" 
			order_by="jersey" 
			group_by_position="true" 
			team_naming="full" 
			player_naming="full" 
			show_logo="false" 
			show_title="true" 
			breakpoints="400" 
			sport="basketball"
			></opta-widget>
		`)
		break;
		/*Basketball (NBL)*/
		
		/*Cricket*/
		case '':
		fixturesWidget.innerHTML = (``);
		matchSummary.innerHTML=(``);
		standingsWidget.innerHTML=(``);
		break;
		/*Cricket*/

		/*Golf*/
		case '':
		fixturesWidget.innerHTML = (``);
		matchSummary.innerHTML=(``);
		standingsWidget.innerHTML=(``);
		break;
		/*Golf*/

		/*Motorsport*/
		case '':
		fixturesWidget.innerHTML = (``);
		matchSummary.innerHTML=(``);
		standingsWidget.innerHTML=(``);
		break;
		/*Motorsport*/

		/*Rugby League*/
		case '':
		fixturesWidget.innerHTML = (``);
		matchSummary.innerHTML=(``);
		standingsWidget.innerHTML=(``);
		break;
		/*Rugby League*/

		/*Rugby Union*/
		case '':
		fixturesWidget.innerHTML = (``);
		matchSummary.innerHTML=(``);
		standingsWidget.innerHTML=(``);
		break;
		/*Rugby Union*/

		/*Football*/
		case '':
		fixturesWidget.innerHTML = (``);
		matchSummary.innerHTML=(``);
		standingsWidget.innerHTML=(``);
		break;
		/*Football*/

		/*Tennis*/
		case '':
		fixturesWidget.innerHTML = (``);
		matchSummary.innerHTML=(``);
		standingsWidget.innerHTML=(``);
		break;
		/*Tennis*/
	}
}