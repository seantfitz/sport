//declare variables
let widget;
let sport;
let competition;
let season;
let match;
let team;
let tournament;
let title;
let race;

//function to get query string parameters
const getQueryParams = (qs)=>{
	qs = qs.split('+').join(' ');

	let params = {},
	tokens,
	re = /[?&]?([^=]+)=([^&]*)/g;

	while (tokens = re.exec(qs)) {
		params[decodeURIComponent(tokens[1].replace(window.location.href + '?', ''))] = `${decodeURIComponent(tokens[2])}`;
	}
	return params;
};

//function to construct navigation menu - this will need to be edited to accommodate manual curation
const menuFootball = {

}

const navMenu = (e)=>{
	// console.log(e.target)
	// console.log(e.target.value)
	console.log(e.target.value.split('_'))

	widget = e.target.value.split('_')[0];
	sport = e.target.value.split('_')[1];
	competition = e.target.value.split('_')[2];
	season = e.target.value.split('_')[3];

	loadWidget();

	e.target.blur();
}

const constructNav = ()=>{
	// console.log('constructNav!')
	let newsnet_sport_nav_container = document.getElementsByClassName('newsnet_sport_nav_container')[0];

	if (!newsnet_sport_nav_container) {
		return;
	}

	newsnet_sport_nav_container.innerHTML = `
		<div class="sport_nav_title">
			Scoreboard
		</div>

		<div class="dropdown">
			<button name="football">Football</button>
			<select id="select_football" size="0">
				<option value="fixtures_football_8_2021">English Premier League</option>
				<option value="fixtures_football_5_2021">Champions League</option>
				<option value="fixtures_football_6_2021">UEFA Europa League</option>
				<option value="fixtures_football_4_2022">World Cup</option>
				<option value="fixtures_football_408_2022">Women's World Cup</option>
				<option value="fixtures_football_23_2021">Spanish La Liga</option>
				<option value="fixtures_football_21_2021">Italian Serie A</option>
				<option value="fixtures_football_22_2021">German Bundesliga</option>
				<option value="fixtures_football_24_2021">French Ligue 1</option>
				<option value="fixtures_football_1125_2021">UEFA Europa Conference League</option>
				<option value="fixtures_football_88_2022">Internationals</option>
				<option value="fixtures_football_551_2022">Internationals Women</option>
			</select>
		</div>
	`

	newsnet_sport_nav_container.addEventListener('change',navMenu);
};
constructNav();
//end of function to construct navigation menu - the above will need to be edited to accommodate manual curation

//function to populate sports widgets
const loadWidget = ()=>{
	let sportWidgetWrapper = document.getElementById('sport-widget-wrapper');
	console.log(widget,sport,competition,season)
	/*afl*/
	if(sport == 'afl'){

		if(widget == 'fixtures'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget widget="fixtures" 
				template="normal" 
				competition="${competition}" 
				season="${season}" 
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
				match_link="?sport=afl&widget=match_summary" 
				pre_match="10" 
				show_logo="false" 
				show_title="true" 
				breakpoints="400" 
				sport="afl" 
				image_size="medium"
				></opta-widget>
			</div>
			<!--advertisement banner-->
			<div class="content">
				<opta-widget 
				widget="standings" 
				template="normal" 
				competition="${competition}" 
				season="${season}" 
				show_rank="true" 
				show_key="true" 
				sorting="true" 
				show_logo="false" 
				show_title="true" 
				breakpoints="460" 
				sport="afl"
				></opta-widget>
			</div>
			`
		}

		if(widget == 'match_summary'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
				widget="match_summary" 
				template="normal" 
				competition="${competition}" 
				season="${season}" 
				match="${match}" 
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
			</div>
			`
		}
	}

	/*basketball (nbl)*/
	if(sport == ''){

		if(widget == 'fixtures'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
				widget="scoreboard" 
				competition="${competition}" 
				season="${season}" 
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
				team_link="?sport=basketball&widget=rosters" 
				pre_match="10" 
				show_live="true" 
				show_logo="false" 
				show_title="true" 
				breakpoints="400" 
				sport="basketball" 
				image_size="medium"
				></opta-widget>
			</div>
			<!--advertisement banner-->
			<div class="content">
			<opta-widget 
				widget="standings" 
				competition="${competition}" 
				season="${season}" 
				template="normal" 
				navigation="tabs" 
				default_nav="1" 
				show_categories="all" 
				show_rank="true" 
				show_key="true" 
				show_crests="false" 
				sorting="true" 
				team_naming="full" 
				team_link="?sport=basketball&widget=rosters" 
				show_logo="false" 
				show_title="true" 
				breakpoints="460" 
				sport="basketball"
				></opta-widget>
			</div>
			`
		}

		if(widget == 'rosters'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
				widget="rosters" 
				competition="${competition}" 
				season="${season}" 
				team="${team}" 
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
			</div>
			`
		}
	}

	/*cricket*/
	if(sport == 'cricket'){

		if(!season || season == undefined){
			season = '0'
		}

		if(widget == 'fixtures'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget widget="fixtures" 
				competition="${competition}" 
				season="${season}" 
				template="normal" 
				live="true" 
				show_venue="true" 
				match_status="all" 
				grouping="month" 
				show_grouping="true" 
				navigation="tabs_more" 
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
				match_link="?sport=cricket&widget=score_card" 
				pre_match="false" 
				show_live="true" 
				show_logo="false" 
				show_title="true" 
				breakpoints="400" 
				sport="cricket" 
				></opta-widget>
			</div>
			<!--advertisement banner-->
			<div class="content">
				<opta-widget widget="standings" 
				template="normal" 
				live="true" 
				competition="${competition}" 
				season="${season}" 
				navigation="none" 
				default_nav="1" 
				show_key="true" 
				show_crests="true" 
				points_in_first_column="true" 
				competition_naming="full" 
				team_naming="full" 
				sorting="true" 
				show_live="true" 
				show_logo="false" 
				show_title="true" 
				breakpoints="400, 700" 
				sport="cricket"
				></opta-widget>
			</div>
			`
		}

		if(widget == 'score_card'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
				widget="score_card" 
				competition="${competition}" 
				season="${season}" 
				match="${match}" 
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
				show_logo="false" 
				show_title="true" 
				breakpoints="400, 700" 
				sport="cricket"
				></opta-widget>
			</div>
			`
		}
	}

	/*golf*/
	if(sport == 'golf'){

		if(widget == 'schedule'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
				widget="schedule" 
				template="normal" 
				competition="${competition}" 
				season="${season}" 
				order_by="date_ascending" 
				show_date="true" 
				date_format="D MMM" 
				show_dates_combined="false" 
				show_course_name="true" 
				show_winner="true" 
				tournament_link="?sport=golf&widget=leaderboard" 
				show_logo="false" 
				show_title="true" 
				breakpoints="400" 
				sport="golf"
				></opta-widget>
			</div>
			`
		}

		if(widget == 'team_match_play'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
				widget="team_match_play" 
				template="normal" 
				competition="${competition}" 
				season="${season}" 
				match="${tournament}" 
				show_crests="false" 
				show_team_scores="true" 
				show_match_scores="true" 
				player_naming="full" 
				show_logo="true" 
				show_title="true" 
				breakpoints="400" 
				sport="golf"
				></opta-widget>
			</div>
			`
		}

		if(widget == 'leaderboard'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
				widget="leaderboard" 
				template="normal" 
				competition="${competition}" 
				season="${season}" 
				match="${tournament}" 
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
			</div>
			`
		}
	}

	/*motorsport*/
	if(sport == 'motorsport'){

		let defaultNav = '2';

		if(competition == '1m5x4n07f2kqkiczebja5etiq'){title = 'Formula 1'; defaultNav = '3'}
		if(competition == '2e554vbpw7g0ykhl0rziuabxl'){title = 'MotoGP'}
		if(competition == '2ecsbewwstw5jn9h7kpv2joix'){title = 'V8 Supercars'}

		if(widget == 'calendar'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
				widget="calendar" 
				competition="${competition}" 
				season="${season}" 
				template="normal" 
				show_details="true" 
				order_by="date_ascending" 
				date_format="dddd D MMMM YYYY" 
				competition_naming="full" 
				team_naming="full" 
				player_naming="full" 
				race_link="?sport=motorsport&widget=live_race" 
				show_logo="false" 
				title="${title} Calendar" 
				show_title="true" 
				breakpoints="400" 
				sport="motorsport"
				></opta-widget>
			</div>
			<!--advertisement banner-->
			<div class="content">
				<opta-widget 
				widget="standings" 
				competition="${competition}" 
				season="${season}" 
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
			</div>
			`
		}

		if(widget == 'live_race'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
				widget="live_race" 
				competition="${competition}" 
				season="${season}" 
				race="${race}" 
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
			</div>
			`
		}
	}

	/*rugby league*/
	if(sport == 'rugbyleague'){

		if(widget == 'fixtures'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
					widget="fixtures" 
					competition="${competition}" 
					season="${season}" 
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
						team_naming="" 
						player_naming="last_name" 
						show_live="true" 
						show_logo="false" 
						title="" 
						show_title="true" 
						breakpoints="400">
					</opta-widget>
				</opta-widget>
			</div>
			<!--advertisement banner-->
			<div class="content">
				<opta-widget 
				widget="standings" 
				competition="${competition}" 
				season="${season}" 
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
				date_format="dddd D MMMM YYYY" 
				sorting="true" 
				show_live="true" 
				show_logo="false" 
				show_title="true" 
				breakpoints="400,700" 
				sport="rugbyleague"
				></opta-widget>
			</div>
			`
		}

		if(widget == 'match_summary'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget sport="rugbyleague" 
				widget="match_summary" 
				competition="${competition}" 
				season="${season}" 
				match="${match}" 
				template="normal" 
				live="true" 
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
				team_naming="" 
				player_naming="last_name" 
				show_live="true" 
				show_logo="false" 
				title="" 
				show_title="true" 
				breakpoints="400">
				</opta-widget>
			</div>
			`
		}
	}

	/*rugby union*/
	if(sport == 'rugby'){
		
		if(widget == 'fixtures'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
				widget="fixtures" 
				competition="${competition}" 
				season="${season}" 
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
				team_link="?sport=rugby&widget=squad" 
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
					team_link="?sport=rugby&widget=squad" 
					team_naming="" 
					player_naming="last_name" 
					show_live="true" 
					show_logo="false" 
					title="" 
					show_title="true" 
					breakpoints="400">
					</opta-widget>
				</opta-widget>
			</div>
			<!--advertisement banner-->
			<div class="content">
				<opta-widget 
				widget="standings" 
				competition="${competition}" 
				season="${season}" 
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
				team_link="?sport=rugby&widget=squad" 
				date_format="dddd D MMMM YYYY" 
				sorting="true" 
				show_live="true" 
				show_logo="false" 
				show_title="true" 
				breakpoints="400,700" 
				sport="rugby"
				></opta-widget>
			</div>
			`
		}
		if(widget == 'squad'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
				widget="squad" 
				competition="${competition}" 
				season="${season}" 
				team="${team}" 
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
					breakpoints="400">
					</opta-widget>
				</opta-widget>
			</div>
			`
		}
	}

	/*football*/
	if(sport == 'football'){
		console.log('Hello!')
		if(widget == 'fixtures'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
				widget="fixtures" 
				competition="${competition}" 
				season="${season}" 
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
				team_link="?sport=football&widget=squad" 
				match_link="?sport=football&widget=match_preview" 
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
					show_tooltips="true" 
					show_logo="false" 
					breakpoints="400">
					</opta-widget>
				</opta-widget>
			</div>
			<!--advertisement banner-->
			<div class="content">
				<opta-widget
				widget="standings"
				competition="${competition}"
				season="${season}"
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
			</div>
			`
		}
		
		if(widget == 'match_preview'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
				widget="match_preview" 	
				competition="${competition}" 
				season="${season}" 
				match="${match}" 
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
				team_link="?sport=football&widget=squad" 
				show_logo="false" 
				show_title="true" 
				breakpoints="460, 700" 
				sport="football"
				></opta-widget>
			</div>
			<!--advertisement banner-->
			<div class="content">
				<opta-widget 
				widget="starting_formations" 
				competition="${competition}" 
				season="${season}" 
				match="${match}" 
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
			</div>
			`
		}

		if(widget == 'squad'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
				widget="squad" 
				competition="${competition}" 
				season="${season}" 
				team="${team}" 
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
			</div>
			`
		}
	}

	/*tennis*/
	if(sport == 'tennis'){
		
		if(widget == 'live_scores'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
				widget="live_scores" 
				competition="${competition}" 
				season="${season}" 
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
			</div>
			<!--advertisement banner-->
			<div class="content">
				<opta-widget 
				widget="schedule" 
				template="normal" 
				competition="0" 
				season="${season}" 
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
				match_link="?sport=tennis&widget=live_scores" 
				pre_match="false" 
				show_logo="false" 
				show_title="true" 
				breakpoints="400" 
				sport="tennis"
				></opta-widget>
			</div>
			`
		}
	}

	/*us-sports*/
	/*mlb*/
	if(sport == 'mlb'){

		sportWidgetWrapper.innerHTML = `
		<div class="content">
			<div id="shs-baseball-scoreboard" data-shs-league="mlb" data-shs-client-id="news"></div>
		</div>
		<!--advertisement banner-->
		<div class="content">
			<div class="one-col" id="shs-baseball-league-schedule" data-shs-league="mlb" data-shs-client-id="news"></div>
		</div>
		<!--advertisement banner-->
		<div class="content">
			<div class="one-col" id="shs-baseball-standings" data-shs-league="mlb" data-shs-client-id="news"></div>
		</div>
		`
	}

	/*nba*/
	if(sport == 'nba'){

		sportWidgetWrapper.innerHTML = `
		<div class="content">
			<div id="shs-basketball-scoreboard" data-shs-league="nba" data-shs-client-id="news"></div>
		</div>
		<!--advertisement banner-->
		<div class="content">
			<div id="shs-basketball-league-schedule" data-shs-league="nba" data-shs-client-id="news"></div>
		</div>
		<!--advertisement banner-->
		<div class="content">
			<div id="shs-basketball-standings" data-shs-league="nba" data-shs-client-id="news"></div>
		</div>
		`
	}

	/*nfl*/
	if(sport == 'nfl'){

		sportWidgetWrapper.innerHTML = `
		<div class="content">
			<div id="shs-football-scoreboard" data-shs-league="nfl" data-shs-client-id="news"></div>
		</div>
		<!--advertisement banner-->
		<div class="content">
			<div id="shs-football-league-schedule" data-shs-league="nfl" data-shs-client-id="news"></div>
		</div>
		<!--advertisement banner-->
		<div class="content">
			<div id="shs-football-standings" data-shs-league="nfl" data-shs-client-id="news"></div>
		</div>
		`
	}

	//


	Opta.start();
	// document.querySelector('.Opta a').style.fontWeight = 'bold'

	// jQuery('.Opta a').css({'color':'#0c0'})
};
//end of function to populate sports widgets

Opta.events.subscribe('widget.drawn', (widget)=> {
	console.log('aaaaa')
	// console.log(widget)

	// document.querySelectorAll('.Opta-Ext').style.color = 'blue'
	// document.querySelector('.Opta-Ext').style.color = 'blue'
	if (widget.widget.attr.widget === 'standings') {
		// do something...
	}

	// jQuery('.Opta-ext').css({'color':'#fc0'})
	// jQuery('.Opta a').css({'color':'#fc0'})


	// jQuery('.Opta-ext a').css({'color':'#00c'})
	// jQuery('.Opta a').css({'color':'#00c'})


	jQuery('.Opta a').on('click',(e)=>{
		e.preventDefault()
		// alert('CLICK')
		// console.log('clicked')
		// console.log(e.target.href)
		console.log(getQueryParams(e.target.href))
	})


});

//settings for Opta widget initialisation - link_callback customises the behaviour of in-widget hyperlinks e.g. match page, squads etc.
// let opta_settings = {
var opta_settings = {//changed from let to var as it has been declared earlier
	subscription_id: 'b7b73f836f5975bc4752b7b54aced1da',
	language: 'en_GB',
	timezone: 'user',
	link_callback: (e)=>{
		
		let link = e.base_url;

		if(!!e.sport){
			link += `&sport=${e.sport}`;
		};
		if(!!e.widget){
			link += `&widget=${e.widget}`;
		};
		if(!!e.competition){
			link += `&competition=${e.competition}`;
		};
		if(!!e.season){
			link += `&season=${e.season}`;
		};
		if(!!e.match){
			link += `&match=${e.match}`;
		};
		if(!!e.team){
			link += `&team=${e.team}`;
		};
		if(!!e.tournament){
			link += `&tournament=${e.tournament}`;
		};
		if(!!e.race){
			link += `&race=${e.race}`;
		};
		if(!!e.title){
			link += `&title=${e.title}`;
		};

		return link;
	}
};