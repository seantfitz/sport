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
let matchWidget = document.getElementById('match-widget')
let rostersWidget = document.getElementById('rosters-widget')
let squadsWidget = document.getElementById('squads-widget')
let startingFormationsWidget = document.getElementById('starting-formations-widget')
let liveScoresWidget = document.getElementById('live-scores-widget')
let scheduleWidget = document.getElementById('schedule-widget')
let calendarWidget = document.getElementById('calendar-widget')
let raceWidget = document.getElementById('race-widget')
let leaderboardWidget = document.getElementById('leaderboard-widget')
let scorecardWidget = document.getElementById('scorecard-widget')

//functions
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
					<a href="football.html?competition=379&season=2018">AFC Asian Cup</a>
					<a href="football.html?competition=731&season=2021">AFC Women's Asian Cup</a>
					<a href="football.html?competition=341&season=1000022">Asian World Cup Qualifiers</a>
					<a href="football.html?competition=214&season=2021">Australian A-League Men</a>
					<a href="football.html?competition=684&season=2021">Australian A-League Women</a>
					<a href="football.html?competition=5&season=2021">Champions League</a>
					<a href="football.html?competition=8&season=2021">English Premier League</a>
					<a href="football.html?competition=1009&season=2019">FFA Cup of Nations</a>
					<a href="football.html?competition=24&season=2021">French Ligue 1</a>
					<a href="football.html?competition=22&season=2021">German Bundesliga</a>
					<a href="football.html?competition=551&season=2022">Internationals Women</a>
					<a href="football.html?competition=88&season=2022">Internationals</a>
					<a href="football.html?competition=21&season=2021">Italian Serie A</a>
					<a href="football.html?competition=378&season=2021">Olympic Football Tournament</a>
					<a href="football.html?competition=734&season=2019">Olympic Women's Tournament Qualifying Asia</a>
					<a href="football.html?competition=578&season=2021">Olympic Women's Tournament</a>
					<a href="football.html?competition=1136&season=2020">Olympics Intercontinental Play-offs Women</a>
					<a href="football.html?competition=23&season=2021">Spanish La Liga</a>
					<a href="football.html?competition=1125&season=2021">UEFA Europa Conference League</a>
					<a href="football.html?competition=6&season=2021">UEFA Europa League</a>
					<a href="football.html?competition=3&season=2020">UEFA European Championship Finals</a>
					<a href="football.html?competition=408&season=2022">Women's World Cup</a>
					<a href="football.html?competition=4&season=2022">World Cup</a>
				</div>
			</div>
			
			<div class="dropdown">
				<button class="dropbtn">Basketball</button>
				<div class="dropdown-content">
					<a href="basketball.html?competition=5wdi9kmiurd2rjx2f7ew92wm6&season=4sjxxlpzq4fgth238gnebn3tg">NBL</a>
					<a href="nba.html">NBA</a>
				</div>
			</div>
			
			<div class="dropdown">
				<button class="dropbtn">Tennis</button>
				<div class="dropdown-content">
					<a href="tennis.html?competition=tennis&season=2022">Schedule</a>
				</div>
			</div>
			<div class="dropdown">
				<button class="dropbtn">Golf</button>
				<div class="dropdown-content">
					<a href="golf.html?competition=3c5msl8moic00eu49b06aumsp&season=405fzvlo157c392mbz8odw9p0">PGA Tour</a>
				</div>
			</div>
			<div class="dropdown">
				<button class="dropbtn">Cricket</button>
				<div class="dropdown-content">
					<a href="cricket.html?competition=all&season=0&fixtures_type=m">Men's Internatiionals</a>
					<a href="cricket.html?competition=all&season=0&fixtures_type=e">English Domestic</a>
					<a href="cricket.html?competition=all&season=0&fixtures_type=a">Australian Domestic</a>
					<a href="cricket.html?competition=all&season=0&fixtures_type=n">New Zealand Domestic</a>
					<a href="cricket.html?competition=all&season=0&fixtures_type=i">IPL</a>
					<a href="cricket.html?competition=all&season=0&fixtures_type=c">Champions League T20</a>
					<a href="cricket.html?competition=all&season=0&fixtures_type=w">Women's Internationals</a>
					<a href="cricket.html?competition=all&season=0&fixtures_type=sad">South African Domestic</a>
					<a href="cricket.html?competition=all&season=0&fixtures_type=und">Under Senior Age Group</a>
					<a href="cricket.html?competition=all&season=0&fixtures_type=ew">English Women</a>
					<a href="cricket.html?competition=all&season=0&fixtures_type=cpl">Carribean Premier League</a>
					<a href="cricket.html?competition=all&season=0&fixtures_type=o">Other Competitions</a>
				</div>
			</div>
			<div class="dropdown">
				<button class="dropbtn">Motorsport</button>
				<div class="dropdown-content">
					<a href="motorsport.html?competition=1m5x4n07f2kqkiczebja5etiq&season=3d2cd3uj88qgdlt4lyhr0cis4">FIA F1 World Championship</a>
					<a href="motorsport.html?competition=2e554vbpw7g0ykhl0rziuabxl&season=3j534o30hn9scfadkb0v9hkb8">FIM MotoGP World Championship</a>
					<a href="motorsport.html?competition=2ecsbewwstw5jn9h7kpv2joix&season=e9p0ngu4n2do5agfk6wt23f9w">V8 Supercars</a>
				</div>
			</div>
			<div class="dropdown">
				<button class="dropbtn">US Sports</button>
				<div class="dropdown-content">
					<a href="nfl.html">USA - NFL</a>
					<a href="nba.html">USA - NBA</a>
					<a href="mlb.html">USA - Major League Baseball</a>
				</div>
			</div>
			<!--<div class="dropdown">
				<button class="dropbtn">Olympics</button>
				<div class="dropdown-content"></div>
			</div>-->
			<div class="dropdown">
				<button class="dropbtn">Rugby Union</button>
				<div class="dropdown-content">
					<a href="rugbyunion.html?competition=3&season=2023">International</a>
					<a href="rugbyunion.html?competition=205&season=2022">Super Rugby Pacific</a>
					<a href="rugbyunion.html?competition=209&season=2022">Six Nations</a>
					<a href="rugbyunion.html?competition=210&season=2024">Rugby World Cup</a>
					<a href="rugbyunion.html?competition=214&season=2022">The Rugby Championship</a>
					<a href="rugbyunion.html?competition=221&season=2021">British & Irish Lions</a>
					<a href="rugbyunion.html?competition=249&season=2022">Women's Rugby World Cup</a>
				</div>
			</div>
			<div class="dropdown">
				<button class="dropbtn">Rugby League</button>
				<div class="dropdown-content">
					<a href="rugbyleague.html?competition=3&season=2022">National Rugby League</a>
					<a href="rugbyleague.html?competition=6&season=2021">State of Origin</a>
					<a href="rugbyleague.html?competition=86&season=2021">NRL Women's Premiership</a>
					<a href="rugbyleague.html?competition=87&season=2021">Women's State of Origin</a>
				</div>
			</div>
			<div class="dropdown">
				<button class="dropbtn">AFL</button>
				<div class="dropdown-content">
					<a href="afl.html?competition=11686&season=2022">AFL</a>
					<a href="afl.html?competition=11595&season=2022">AFLW</a>
				</div>
			</div>
		</div>
	`)
})
/*SET UP DROPDOWN NAV*/

document.onready = ()=>{

	switch(query['competition']){
		
		/*AFL*/
		case '11686'://AFL
		case '11595'://AFLW

		if(!!fixturesWidget){
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

				team_link="" 
				match_link="afl-match-summary.html" 
				pre_match="10" 
					
				show_logo="false" 
				show_title="true" 
				breakpoints="400" 
				sport="afl" 

				image_size="medium"

				></opta-widget>
			`)
			//team_link="afl-teams.html" 
		};

		if(!!matchWidget){
			matchWidget.innerHTML = (`
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

				team_link="" 
				player_link="" 

				show_title="true" 
				show_logo="false" 
				show_live="true" 
				breakpoints="400, 700" 
				sport="afl"
				></opta-widget>
			`)
			// team_link="afl-teams.html" 
			// player_link="afl-players.html" 
		};

		if(!!standingsWidget){
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
			`)
		};

		break;
		/*AFL*/

		/*Basketball (NBL)*/
		case '5wdi9kmiurd2rjx2f7ew92wm6'://NBL

		if(!!fixturesWidget){
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
				show_crests="false" 
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

				image_size="medium"
				></opta-widget>
			`);
			// matchWidget.innerHTML = (``);
		};

		if(!!standingsWidget){
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
				show_crests="false" 
				sorting="true" 
				team_naming="full" 
				team_link="basketball-rosters.html" 
				show_logo="false" 
				show_title="true" 
				breakpoints="460" 
				sport="basketball"></opta-widget>
			`);
		};

		if(!!rostersWidget){
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
		};

		break;
		/*Basketball (NBL)*/
		
		/*Cricket*/
		case 'all':
		case '2764':
		case '2971':
		case '2832'://KFC big bash 21/22//
		
		if(!!fixturesWidget){

			fixturesWidget.innerHTML = (`
				<opta-widget widget="fixtures" 
				
				fixtures_type="${query['fixtures_type']}" 

				competition="${query['competition']}" 
				season="${query['season']}" 
				
				template="normal" 
				live="true" 
				show_venue="true" 
				match_status="all" 
				grouping="month" 
				show_grouping="true" 
				
				navigation="dropdown" 
				
				default_nav="1" 
				start_on_current="true" 
				sub_grouping="date" 
				show_subgrouping="true" 
				order_by="date_ascending" 
				show_crests="true" 
				show_competition_name="true" 
				date_format="dddd D MMMM YYYY" 
				month_date_format="MMMM" 
				competition_naming="full" 
				team_naming="full" 
				match_link="cricket-match.html" 
				pre_match="false" 
				show_live="true" 
				show_logo="false" 
				
				title="Fixtures" 
				
				show_title="true" 
				breakpoints="400" 
				sport="cricket" 
				></opta-widget>
			`);
			//title="${title}" 
		};

		if(!!scorecardWidget){
			scorecardWidget.innerHTML = (`
				<opta-widget 
				widget="score_card" 
				
				competition="${query['competition']}" 
				season="${query['season']}" 
				match="${query['match']}" 
				
				template="normal" 
				live="true" 
				show_match_header="true" 
				show_crests="true" 
				show_competition_name="true" 
				show_match_description="true" 
				show_date="true" 
				date_format="dddd D MMMM YYYY HH:mm" 
				show_venue="true" 
				show_officials="all" 
				show_toss="true" 
				show_innings_breakdown="true" 
				show_current_batting="true" 
				show_best_batting="1" 
				show_best_bowling="1" 
				show_state_of_play="true" 
				navigation="tabs" 
				default_nav="1" 
				show_batting="true" 
				show_mins_batted="true" 
				show_fours="false" 
				show_sixes="false" 
				show_strike_rate="false" 
				show_bowling="true" 
				show_economy="false" 
				show_dot_balls="false" 
				show_bowling_extras="false" 
				show_fow="true" 
				show_partnerships="true" 
				show_unfinished_partnerships="true" 
				team_naming="full" 
				player_naming="last_name" 
				team_link="cricket-teams.html" 
				show_logo="false" 
				show_title="true" 
				breakpoints="400, 700" 
				sport="cricket"
				></opta-widget>
			`);
		};

		if(!!standingsWidget){

			if(!query['season']){
				query['season'] = '0'
			}

			standingsWidget.innerHTML = (`
				<opta-widget widget="standings" 
				template="normal" 
				live="true" 
				
				competition="all" 
				season="${query['season']}" 
				
				navigation="none" 
				default_nav="1" 
				show_key="true" 
				show_crests="true" 
				points_in_first_column="true" 
				competition_naming="full" 
				team_naming="full" 
				team_link="cricket-teams.html" 
				sorting="true" 
				show_live="true" 
				show_logo="false" 
				show_title="true" 
				breakpoints="400, 700" 
				sport="cricket"
				></opta-widget>
			`);
		};

		break;
		/*Cricket*/

		/*Golf*/
		case '3c5msl8moic00eu49b06aumsp':
		
		if(!!scheduleWidget){
			scheduleWidget.innerHTML = (`
				<opta-widget 
				widget="schedule" 
				template="normal" 
				
				competition="${query['competition']}" 
				season="${query['season']}" 
				
				order_by="date_ascending" 
				show_date="true" 
				date_format="D MMM" 
				show_dates_combined="false" 
				show_course_name="true" 
				show_winner="true" 
				tournament_link="golf-tournament.html" 
				show_logo="false" 
				show_title="true" 
				breakpoints="400" 
				sport="golf"
				></opta-widget>
			`);
		};

		if(!!matchWidget){
			matchWidget.innerHTML = (`
				<opta-widget 
				widget="team_match_play" 
				template="normal" 
				
				competition="${query['competition']}" 
				season="${query['season']}" 
				match="${query['tournament']}" 
				
				show_crests="false" 
				show_team_scores="true" 
				show_match_scores="true" 
				player_naming="full" 
				show_logo="true" 
				show_title="true" 
				breakpoints="400" 
				sport="golf"
				></opta-widget>
			`);
		};

		if(!!leaderboardWidget){
			leaderboardWidget.innerHTML = (`
				<opta-widget 
				widget="leaderboard" 
				template="normal" 
				
				competition="${query['competition']}" 
				season="${query['season']}" 
				match="${query['tournament']}" 
				
				live="true" 
				show_date="true" 
				date_format="D MMM" 
				show_dates_combined="false" 
				show_competition_name="false" 
				show_season_name="true" 
				show_course_name="true" 
				show_position="true" 
				show_rounds="true" 
				show_nationality="true" 
				player_highlighting="false" 
				player_naming="full" 
				show_live="true" 
				show_logo="false" 
				show_title="true" 
				breakpoints="400" 
				sport="golf"
				></opta-widget>
			`);
		};

		break;
		/*Golf*/

		/*Motorsport*/
		case '1m5x4n07f2kqkiczebja5etiq'://FIA F1 World Championship
		case '2e554vbpw7g0ykhl0rziuabxl'://FIM MotoGP World Championship
		case '2ecsbewwstw5jn9h7kpv2joix'://V8 Supercars

		if(!!calendarWidget){
			calendarWidget.innerHTML = (`
				<opta-widget 
				widget="calendar" 
				
				competition="${query['competition']}" 
				season="${query['season']}" 
				
				template="normal" 
				show_details="true" 
				order_by="date_ascending" 
				date_format="dddd D MMMM YYYY" 
				competition_naming="full" 
				team_naming="full" 
				player_naming="full" 
				race_link="motorsport-race.html" 
				show_logo="false" 
				show_title="true" 
				breakpoints="400" 
				sport="motorsport"
				></opta-widget>
			`);
		};

		if(!!raceWidget){

			let defaultNav = '3';

			if(query['competition'] != '1m5x4n07f2kqkiczebja5etiq'){
				defaultNav = '2';
			}

			raceWidget.innerHTML = (`
				<opta-widget 
				widget="live_race" 
				
				competition="${query['competition']}" 
				season="${query['season']}" 
				race="${query['race']}" 
				
				template="normal" 
				live="true" 
				show_live="true" 
				show_flags="true" 
				show_race_header="true" 
				show_laps="true" 
				show_competition_name="true" 
				competition_naming="full" 
				show_race_name="true" 
				race_naming="full" 
				navigation="tabs" 
				
				default_nav="${defaultNav}" 
				
				show_date="true" 
				date_format="dddd D MMMM YYYY HH:mm" 
				show_practices="true" 
				show_qualifying="true" 
				team_naming="full" 
				player_naming="full" 
				show_logo="false" 
				show_title="true" 
				breakpoints="400, 700" 
				sport="motorsport"
				></opta-widget>
			`);
			//navigation="dropdown" 
		};

		if(!!standingsWidget){
			standingsWidget.innerHTML = (`
				<opta-widget 
				widget="standings" 
				
				competition="${query['competition']}" 
				season="${query['season']}" 
				
				template="normal" 
				navigation="tabs" 
				default_nav="1" 
				show_drivers="true" 
				show_constructors="true" 
				show_wins="true" 
				team_naming="full" 
				driver_naming="full" 
				show_logo="false" 
				show_title="true" 
				breakpoints="460" 
				sport="motorsport"
				></opta-widget>
			`);
		};

		break;
		/*Motorsport*/

		/*Rugby League*/
		case '3'://National Rugby League
		case '6'://State of Origin
		case '86'://NRL Women's Premiership
		case '87'://Women's State of Origin
		
		if(document.location.href.indexOf('rugbyleague') >= 0){

			if(!!fixturesWidget){
				fixturesWidget.innerHTML = (`
					<opta-widget 
					widget="fixtures" 
					
					competition="${query['competition']}" 
					season="${query['season']}" 
					
					template="normal" 
					live="true" 

					days_before="" 
					days_ahead="" 

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
					month_date_format="MMMM" 
					competition_naming="full" 
					team_naming="full" 
					
					team_link="" 
					
					pre_match="false" 
					show_live="true" 
					show_logo="false" 
					show_title="true" 
					breakpoints="400" 

					image_size="medium" 

					sport="rugbyleague">
						<opta-widget sport="rugbyleague" 
						widget="match_summary" 
						template="normal" 
						live="true" 
						competition="" 
						season="" 
						match="" 
						show_match_header="true" 
						show_crests="true" 
						show_cards="true" 
						show_date="true" 
						date_format="dddd D MMMM YYYY" 
						show_competition_name="true" 
						competition_naming="full" 
						show_referee="true" 
						show_venue="true" 
						show_tooltips="true" 
						show_tries="true" 
						show_conversions="true" 
						show_penalties="true" 
						show_drop_goals="all" 
						show_subs="true" 
						show_cards="all" 
						team_link="" 
						
						player_link="" 
						
						team_naming="" 
						player_naming="last_name" 
						show_live="true" 
						show_logo="false" 
						title="" 
						show_title="true" 
						breakpoints="400"></opta-widget>
					</opta-widget>
				`);
				// navigation="tabs_scroll" 
				// team_link="rugbyleague-teams.html" 
				// player_link="rugbyleague-players.html" 
			};

			if(!!matchWidget){
				matchWidget.innerHTML = (``);
			};

			if(!!standingsWidget){
				standingsWidget.innerHTML = (`
					<opta-widget 
					widget="standings" 
					
					competition="${query['competition']}" 
					season="${query['season']}" 
					
					template="normal" 
					live="true" 
					navigation="tabs" 
					default_nav="1" 
					show_key="true" 
					show_crests="true" 
					points_in_first_column="false" 
					show_form="6" 
					competition_naming="full" 
					team_naming="full" 
					
					team_link="" 

					date_format="dddd D MMMM YYYY" 
					sorting="true" 
					show_live="true" 
					show_logo="false" 
					show_title="true" 
					breakpoints="400,700" 
					sport="rugbyleague"
					></opta-widget>
				`);
				// team_link="rugbyleague-teams.html" 
			};
			break;
		}
		/*Rugby League*/

		/*Rugby Union*/
		case '3'://International
		case '205'://Super Rugby Pacific
		case '209'://Six Nations
		case '210'://Rugby World Cup
		case '214'://The Rugby Championship
		case '221'://British & Irish Lions
		case '249'://Women's Rugby World Cup

		if(document.location.href.indexOf('rugbyunion') >= 0){

			if(!!fixturesWidget){
				fixturesWidget.innerHTML = (`
					<opta-widget 
					widget="fixtures" 
					
					competition="${query['competition']}" 
					season="${query['season']}" 
					
					template="normal" 
					live="true" 

					days_before="" 
					days_ahead="" 

					show_venue="true" 
					match_status="all" 
					
					grouping="month" 
					show_grouping="true" 
					
					navigation="dropdown" 
				
					default_nav="1" 
					start_on_current="true" 
					
					sub_grouping="date" 
					show_subgrouping="true" 
					
					order_by="date_ascending" 
					show_crests="true" 
					date_format="dddd D MMMM YYYY" 
					month_date_format="MMMM" 
					competition_naming="full" 
					team_naming="full" 

					team_link="rugbyunion-squads.html" 
					match_link="" 
					pre_match="false" 

					show_live="true" 
					show_logo="false" 
					show_title="true" 
					breakpoints="400" 

					image_size="medium" 

					sport="rugby">
						<opta-widget sport="rugby" 
						widget="match_summary" 
						template="normal" 
						live="true" 
						competition="" 
						season="" 
						match="" 
						show_match_header="true" 
						show_crests="true" 
						show_cards="true" 
						show_date="true" 
						date_format="dddd D MMMM YYYY" 
						show_competition_name="true" 
						competition_naming="full" 
						show_referee="true" 
						show_venue="true" 
						show_tooltips="true" 
						show_tries="true" 
						show_conversions="true" 
						show_penalties="true" 
						show_drop_goals="all" 
						show_subs="true" 
						show_cards="all" 

						team_link="rugbyunion-squads.html" 
						player_link="" 

						team_naming="" 
						player_naming="last_name" 
						show_live="true" 
						show_logo="false" 
						title="" 
						show_title="true" 
						breakpoints="400"></opta-widget>
					</opta-widget>
				`);
				//pre_match="10080" 
				//team_link="rugbyunion-squads.html" 
				//match_link="rugbyunion-match.html" 
				//player_link="rugbyunion-players.html" 
			};

			// if(!!matchWidget){
			// 	matchWidget.innerHTML = (`
			// 		<opta-widget 
			// 		widget="match_preview" 
					
			// 		competition="${query['competition']}" 
			// 		season="${query['season']}" 
			// 		match="${query['match']}" 
					
			// 		template="normal" 
			// 		navigation="tabs" 
			// 		default_nav="1" 
			// 		show_match_header="true" 
			// 		show_crests="false" 
			// 		show_competition_name="true" 
			// 		show_venue="true" 
			// 		show_date="true" 
			// 		date_format="dddd D MMMM YYYY" 
			// 		time_format="HH:mm" 
			// 		show_form="6" 
			// 		show_previous_meetings="6" 
			// 		show_tooltips="false" 
			// 		competition_naming="full" 
			// 		team_naming="full" 
			// 		team_link="rugbyunion-squads.html" 
			// 		show_logo="false" 
			// 		show_title="true" 
			// 		breakpoints="400, 700" sport="rugby"
			// 		></opta-widget>
			// 	`);
			// 	//navigation="dropdown" 
			// };

			if(!!standingsWidget){
				standingsWidget.innerHTML = (`
					<opta-widget 
					widget="standings" 
					
					competition="${query['competition']}" 
					season="${query['season']}" 
					
					template="normal" 
					live="true" 
					navigation="tabs" 
					default_nav="1" 
					show_key="true" 
					show_crests="true" 
					points_in_first_column="false" 
					show_form="6" 
					competition_naming="full" 
					team_naming="full" 
					
					team_link="rugbyunion-squads.html" 
					
					date_format="dddd D MMMM YYYY" 
					sorting="true" 
					show_live="true" 
					show_logo="false" 
					show_title="true" 
					breakpoints="400,700" 
					sport="rugby"
					></opta-widget>
				`);
			};

			if(!!squadsWidget){
				squadsWidget.innerHTML = (`
					<opta-widget 
					widget="squad" 
					
					competition="${query['competition']}" 
					season="${query['season']}" 
					team="${query['team']}" 
					
					template="normal" 
					column_count="1" 
					show_position="true" 
					show_images="false" 
					show_wingers="true" 
					show_full_backs="true" 
					show_centres="true" 
					show_fly_halves="true" 
					show_scrum_halves="true" 
					show_number_eights="true" 
					show_flankers="true" 
					show_locks="true" 
					show_hookers="true" 
					show_props="true" 
					order_by="name" 
					group_by_position="true" 
					team_naming="full" 
					player_naming="full" 
					show_logo="false" 
					show_title="true" 
					breakpoints="400" 
					sport="rugby">
						<opta-widget 
						sport="rugby" 
						widget="player_profile" 
						template="normal" 
						competition="" 
						season="" team="" 
						player="" 
						show_images="true" 
						show_country="true" 
						show_flags="true" 
						show_date_of_birth="true" 
						show_position="true" 
						show_height="true" 
						show_weight="true" 
						show_place_of_birth="true" 
						date_format="D MMMM YYYY" 
						height_units="m" 
						weight_units="kg" 
						breakpoints="400"></opta-widget>
					</opta-widget>
				`)
			}
			break;
		};
		/*Rugby Union*/

		/*Football*/
		
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
		case '684'://	Australian A-League Women	2021
		case '731'://	AFC Women's Asian Cup	2021
		case '734'://	Olympic Women's Tournament Qualifying Asia	2019
		case '1009'://	FFA Cup of Nations	2019
		case '1125'://	UEFA Europa Conference League	2021
		case '1136'://	Olympics Intercontinental Play-offs Women	2020

		if(!!fixturesWidget){
			fixturesWidget.innerHTML = (`
				<opta-widget 
				widget="fixtures" 
				
				competition="${query['competition']}" 
				season="${query['season']}" 
				
				template="normal" 
				live="true" 
				show_venue="true" 
				match_status="all" 
				grouping="month" 
				show_grouping="true" 
				
				navigation="tabs" 
				
				default_nav="1" 
				start_on_current="true" 
				sub_grouping="date" 
				show_subgrouping="true" 
				order_by="date_ascending" 
				show_crests="true" 
				date_format="dddd D MMMM YYYY" 
				time_format="HH:mm" 
				month_date_format="MMMM" 
				competition_naming="full" 
				team_naming="full" 
				team_link="football-squads.html" 
				match_link="football-match.html" 
				pre_match="1440" 
				show_live="true" 
				show_logo="false" 
				show_title="true" 
				breakpoints="400" 
				sport="football" 
				image_size="medium">
					<opta-widget 
					sport="football" 
					widget="match_summary" 
					template="normal" 
					live="true" 
					competition="" 
					season="" 
					match="" 
					show_match_header="true" 
					show_attendance="true" 
					show_cards="all" 
					show_crests="true" 
					show_goals="true" 
					show_goals_combined="false" 
					show_penalties_missed="false" 
					show_referee="true" 
					show_subs="true" 
					show_venue="true" 
					show_shootouts="false" 
					player_naming="last_name" 
					player_link="" 
					show_tooltips="true" 
					show_logo="false" 
					breakpoints="400">
					</opta-widget>
				</opta-widget>
			`);
			//pre_match="10080" 
		};
		
		if(!!matchWidget){
			matchWidget.innerHTML = (`
				<opta-widget 
				widget="match_preview" 
				
				competition="${query['competition']}" 
				season="${query['season']}" 
				match="${query['match']}" 
				
				template="normal" 
				navigation="tabs_more" 
				default_nav="2" 
				show_match_header="true" 
				show_crests="true" 
				show_competition_name="true" 
				show_venue="true" 
				show_date="true" 
				date_format="dddd D MMMM YYYY" 
				time_format="HH:mm" 
				show_form="6" 
				show_fixtures="6" 
				show_previous_meetings="6" 
				show_top_scorers="6" 
				show_tied_scorers="true" 
				show_images="false" 
				competition_naming="full" 
				team_naming="full" 
				player_naming="full" 
				team_link="football-squads.html" 
				show_logo="false" 
				show_title="true" 
				breakpoints="460, 700" 
				sport="football"
				></opta-widget>
			`);
		};

		if(!!startingFormationsWidget){
			startingFormationsWidget.innerHTML = (`
				<opta-widget 
				widget="starting_formations" 
				
				competition="${query['competition']}" 
				season="${query['season']}" 
				match="${query['match']}" 
				
				template="normal" 
				orientation="horizontal" 
				show_match_header="true" 
				show_team_sheets="false" 
				show_competition_name="true" 
				show_crests="true" 
				show_pitch_crests="true" 
				show_images="false" 
				show_subs="true" 
				side="both" 
				player_naming="full" 
				team_naming="full" 
				show_logo="true" 
				show_title="false" 
				breakpoints="400, 700" 
				sport="football"
				></opta-widget>
			`)
		};
		
		if(!!standingsWidget){
			standingsWidget.innerHTML = (`
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
			`);
		};

		if(!!squadsWidget){
			squadsWidget.innerHTML = (`
				<opta-widget 
				widget="squad" 
				
				competition="${query['competition']}" 
				season="${query['season']}" 
				team="${query['team']}" 
				
				template="headshots" 
				show_position="true" 
				show_images="true" 
				show_country="true" 
				show_flags="true" 
				squad_numbers_only="false" 
				show_goalkeepers="true" 
				show_defenders="true" 
				show_midfielders="true" 
				show_forwards="true" 
				show_managers="true" 
				show_transferred_players="false" 
				height_units="m" 
				weight_units="kg" 
				order_by="jersey" 
				group_by_position="true" 
				player_names_on_reverse="true" 
				show_reversed="false" 
				team_naming="full" 
				player_naming="full" 
				show_logo="false" 
				show_title="true" 
				breakpoints="400" 
				sport="football"
				></opta-widget>
			`)
		}

		break;
		/*Football*/

		/*Tennis*/
		case 'tennis'://Zhuhai Championships - Mens Singles/*ATP250*/

		if(!!liveScoresWidget){
			liveScoresWidget.innerHTML = (`
				<opta-widget 
				widget="live_scores" 
				
				competition="${query['competition']}" 
				season="${query['season']}" 
				
				template="normal" 
				live="true" 
				match_status="all" 
				grouping="round" 
				show_grouping="true" 
				limit="0" 
				navigation="tabs_scroll" 
				default_nav="1" 
				start_on_current="true" 
				sub_grouping="date" 
				show_subgrouping="true" 
				order_by="date_ascending" 
				show_nationality="true" 
				date_format="dddd D MMMM YYYY" 
				competition_naming="full" 
				player_naming="full" 
				show_live="true" 
				show_logo="false" 
				show_title="true" 
				breakpoints="400" 
				sport="tennis"
				></opta-widget>
			`)
		}else{

		};
		if(!!scheduleWidget){
			scheduleWidget.innerHTML = (`
				<opta-widget 
				widget="schedule" 
				template="normal" 
				
				competition="0" 
				season="${query['season']}" 
				
				grouping="month" 
				show_grouping="true" 
				sub_grouping="date" 
				show_subgrouping="true" 
				type="all" 
				
				navigation="dropdown" 
				
				default_nav="1" 
				start_on_current="true" 
				order_by="date_ascending" 
				show_date="true" 
				date_format="DD/MM/YYYY" 
				month_date_format="MMMM" 
				show_surface="true" 
				show_country="true" 
				show_internationals="true" 
				match_link="tennis-match.html" 
				pre_match="false" 
				show_logo="false" 
				show_title="true" 
				breakpoints="400" 
				sport="tennis"
				></opta-widget>
			`)
		};
		//competition="${query['competition']}" 
		break;
		/*Tennis*/
	}
}
var opta_settings = {
	subscription_id: 'b7b73f836f5975bc4752b7b54aced1da',
	language: 'en_GB',
	timezone: 'user',
};