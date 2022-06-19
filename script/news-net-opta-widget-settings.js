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

//function to fetch the JSON for navigation / menu curation
const loadNavCuration = ()=>{

	// let url = 'https://newsnet-bucket.s3.ap-southeast-2.amazonaws.com/sport-scoreboard/nav-curation.json';
	let url = 'script/nav-curation.json';
	
	let info = fetch(url,{
		method: 'get',
		headers: {'Content-Type': 'application/json'}
	})
	.then((response) => response.json())
	.then((response) => {
		Object.defineProperty(window, 'navList', {
			value: response,
			configurable: true,
			writable: true
		})
	})
	.then(constructNav);
};

//function to construct navigation menu - this has been edited to accommodate menu curation - updated 17/06/2022
const constructNav = ()=>{

	let newsnet_sport_nav_container = document.getElementsByClassName('newsnet_sport_nav_container')[0];

	if (!newsnet_sport_nav_container) {
		return;
	}

	newsnet_sport_nav_container.innerHTML = '<div class="sport_nav_title">Scoreboard</div>';

	for(let i of Object.keys(navList)){

		let l = navList[i];
		let string = 'Competition';

		if(l.length > 1){

			if(l[0][1] == 'golf' || l[0][1] == 'tennis'){
				string = 'Tournament';
			}

			let menuItem = `<div class="dropdown"><button name="${l[0][1]}">${l[0][l[0].length - 1]}</button><select name="${l[0][1]}" size="0"><option value="null" disabled selected>Select ${string}</option>`;

			for(let j of l){
				menuItem += `<option value="${j[0]}|${j[1]}|${j[2]}|${j[3]}|${j[4]}|${j[5]}|${j[6]}|${j[8]}">${j[7]}</option>`
			}

			menuItem += '</select></div>';

			newsnet_sport_nav_container.innerHTML += menuItem;
		}else if(l.length == 1){
			let j = l[0];
			newsnet_sport_nav_container.innerHTML += `<div class="dropdown"><button class="sport_button" name="${j[0]}|${j[1]}|${j[2]}|${j[3]}|${j[4]}|${j[5]}|${j[6]}|${j[8]}">${j[7]}</button></div>`;
		}
	}

	Opta('.newsnet_sport_nav_container .dropdown select').on('change',(e)=>{

		let val = e.target.value;//store the option value for later use
		let keys = val.split('|');//split the option value into array

		loadWidget({//define object keys as array values and pass to load function
			widget: keys[0],
			sport: keys[1],
			competition: keys[2],
			season: keys[3],
			match: keys[4],
			tournament: keys[5],
			race: keys[6],
			standings: keys[7]
		});

		Opta('.newsnet_sport_nav_container .dropdown select').prop('value','null');//reset all select elements
		e.target.value = val;//restore active select element to user selection
		e.target.blur();//remove focus from the select element - necessary for correct display in firefox browser
	});

	Opta('.sport_button').on('click',(e)=>{

		let keys = e.target.name.split('|');//split the name attribute into array

		loadWidget({//define object keys as array values and pass to load function
			widget: keys[0],
			sport: keys[1],
			competition: keys[2],
			season: keys[3],
			match: keys[4],
			tournament: keys[5],
			race: keys[6],
			standings: keys[7]
		});

		Opta('.newsnet_sport_nav_container .dropdown select').prop('value','null');//reset all select elements
	})
};
//end of function to construct navigation menu - the above has been edited to accommodate menu curation - updated 17/06/2022

//function to populate sports widgets
const loadWidget = (obj)=>{

	let sportWidgetWrapper = document.getElementById('sport-widget-wrapper');

	/*afl*/
	if(obj['sport'] == 'afl'){

		if(obj['widget'] == 'fixtures' && obj['standings'] == 'TRUE'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget widget="fixtures" 
				template="normal" 
				competition="${obj['competition']}" 
				season="${obj['season']}" 
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
				competition="${obj['competition']}" 
				season="${obj['season']}" 
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

		if(obj['widget'] == 'fixtures' && obj['standings'] != 'TRUE'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget widget="fixtures" 
				template="normal" 
				competition="${obj['competition']}" 
				season="${obj['season']}" 
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
			`
		}

		if(obj['widget'] == 'match_summary'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
				widget="match_summary" 
				template="normal" 
				competition="${obj['competition']}" 
				season="${obj['season']}" 
				match="${obj['match']}" 
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
	if(obj['sport'] == 'basketball'){

		if(obj['widget'] == 'scoreboard' && obj['standings'] == 'TRUE'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
				widget="scoreboard" 
				competition="${obj['competition']}" 
				season="${obj['season']}" 
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
				competition="${obj['competition']}" 
				season="${obj['season']}" 
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

		if(obj['widget'] == 'scoreboard' && obj['standings'] != 'TRUE'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
				widget="scoreboard" 
				competition="${obj['competition']}" 
				season="${obj['season']}" 
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
			`
		}

		if(obj['widget'] == 'rosters'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
				widget="rosters" 
				competition="${obj['competition']}" 
				season="${obj['season']}" 
				team="${obj['team']}" 
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
	if(obj['sport'] == 'cricket'){

		if(!obj['season'] || obj['season'] == undefined){
			obj['season'] = '0'
		}

		if(obj['widget'] == 'fixtures' && obj['standings'] == 'TRUE'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget widget="fixtures" 
				competition="${obj['competition']}" 
				season="${obj['season']}" 
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
				competition="${obj['competition']}" 
				season="${obj['season']}" 
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

		if(obj['widget'] == 'fixtures' && obj['standings'] != 'TRUE'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget widget="fixtures" 
				competition="${obj['competition']}" 
				season="${obj['season']}" 
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
			`
		}

		if(obj['widget'] == 'score_card'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
				widget="score_card" 
				competition="${obj['competition']}" 
				season="${obj['season']}" 
				match="${obj['match']}" 
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

	/*golf *** */
	if(obj['sport'] == 'golf'){

		if(obj['widget'] == 'leaderboard'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
				widget="leaderboard" 
				template="normal" 
				competition="${obj['competition']}" 
				season="${obj['season']}" 
				match="${obj['tournament']}" 
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

		if(obj['widget'] == 'schedule'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
				widget="schedule" 
				template="normal" 
				competition="${obj['competition']}" 
				season="${obj['season']}" 
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

		if(obj['widget'] == 'team_match_play'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
				widget="team_match_play" 
				template="normal" 
				competition="${obj['competition']}" 
				season="${obj['season']}" 
				match="${obj['tournament']}" 
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
	}

	/*motorsport*/
	if(obj['sport'] == 'motorsport'){

		let defaultNav = '2';

		if(obj['competition'] == '1m5x4n07f2kqkiczebja5etiq'){title = 'Formula 1'; defaultNav = '3'}
		if(obj['competition'] == '2e554vbpw7g0ykhl0rziuabxl'){title = 'MotoGP'}
		if(obj['competition'] == '2ecsbewwstw5jn9h7kpv2joix'){title = 'V8 Supercars'}

		if(obj['widget'] == 'calendar' && obj['standings'] == 'TRUE'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
				widget="calendar" 
				competition="${obj['competition']}" 
				season="${obj['season']}" 
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
				competition="${obj['competition']}" 
				season="${obj['season']}" 
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

		if(obj['widget'] == 'calendar' && obj['standings'] != 'TRUE'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
				widget="calendar" 
				competition="${obj['competition']}" 
				season="${obj['season']}" 
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
			`
		}

		if(obj['widget'] == 'live_race'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
				widget="live_race" 
				competition="${obj['competition']}" 
				season="${obj['season']}" 
				race="${obj['race']}" 
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
	if(obj['sport'] == 'rugbyleague'){

		if(obj['widget'] == 'fixtures' && obj['standings'] == 'TRUE'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
					widget="fixtures" 
					competition="${obj['competition']}" 
					season="${obj['season']}" 
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
				competition="${obj['competition']}" 
				season="${obj['season']}" 
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

		if(obj['widget'] == 'fixtures' && obj['standings'] != 'TRUE'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
					widget="fixtures" 
					competition="${obj['competition']}" 
					season="${obj['season']}" 
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
			`
		}

		if(obj['widget'] == 'match_summary'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget sport="rugbyleague" 
				widget="match_summary" 
				competition="${obj['competition']}" 
				season="${obj['season']}" 
				match="${obj['match']}" 
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
	if(obj['sport'] == 'rugby'){
		
		if(obj['widget'] == 'fixtures' && obj['standings'] == 'TRUE'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
				widget="fixtures" 
				competition="${obj['competition']}" 
				season="${obj['season']}" 
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
				competition="${obj['competition']}" 
				season="${obj['season']}" 
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

		if(obj['widget'] == 'fixtures' && obj['standings'] != 'TRUE'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
				widget="fixtures" 
				competition="${obj['competition']}" 
				season="${obj['season']}" 
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
			`
		}

		if(obj['widget'] == 'squad'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
				widget="squad" 
				competition="${obj['competition']}" 
				season="${obj['season']}" 
				team="${obj['team']}" 
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
	if(obj['sport'] == 'football'){

		if(obj['widget'] == 'fixtures' && obj['standings'] == 'TRUE'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
				widget="fixtures" 
				competition="${obj['competition']}" 
				season="${obj['season']}" 
				template="normal" 
				live="true" 
				show_venue="true" 
				match_status="all" 
				grouping="matchday" 
				show_grouping="true" 
				navigation="dropdown" 
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
				competition="${obj['competition']}"
				season="${obj['season']}"
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

		if(obj['widget'] == 'fixtures' && obj['standings'] != 'TRUE'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
				widget="fixtures" 
				competition="${obj['competition']}" 
				season="${obj['season']}" 
				template="normal" 
				live="true" 
				show_venue="true" 
				match_status="all" 
				grouping="matchday" 
				show_grouping="true" 
				navigation="dropdown" 
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
			`
		}
		
		if(obj['widget'] == 'match_preview'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
				widget="match_preview" 	
				competition="${obj['competition']}" 
				season="${obj['season']}" 
				match="${obj['match']}" 
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
				competition="${obj['competition']}" 
				season="${obj['season']}" 
				match="${obj['match']}" 
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

		if(obj['widget'] == 'squad'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
				widget="squad" 
				competition="${obj['competition']}" 
				season="${obj['season']}" 
				team="${obj['team']}" 
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

	/*tennis *** */
	if(obj['sport'] == 'tennis'){
		
		if(obj['widget'] == 'live_scores'){
			sportWidgetWrapper.innerHTML = `
			<div class="content">
				<opta-widget 
				widget="live_scores" 
				competition="${obj['competition']}" 
				season="${obj['season']}" 
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
			<!--<div class="content">
				<opta-widget 
				widget="schedule" 
				template="normal" 
				competition="0" 
				season="${obj['season']}" 
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
				></opta-widget>-->
			</div>
			`
		}
	}

	/*us-sports*/
	/*mlb*/
	if(obj['sport'] == 'mlb' && obj['standings'] == 'TRUE'){

		sportWidgetWrapper.innerHTML = `
		<div class="content">
			<iframe class="shs-baseball-frame" id="shs-baseball-scoreboard-frame" frameborder="0" style="min-width: 100%; min-height: 400px; margin-bottom: 30px;" src="https://newsnet-bucket.s3.ap-southeast-2.amazonaws.com/us-sports/mlb/scoreboard.html"></iframe>
		</div>
		<!--advertisement banner-->
		<div class="content">
			<iframe class="shs-baseball-frame" id="shs-baseball-standings-frame" frameborder="0" style="min-width: 100%; min-height: 400px; margin-bottom: 30px;" src="https://newsnet-bucket.s3.ap-southeast-2.amazonaws.com/us-sports/mlb/standings.html"></iframe>
		</div>
		<!--advertisement banner-->
		<div class="content">
			<iframe class="shs-baseball-frame" id="shs-baseball-league-schedule-frame" frameborder="0" style="min-width: 100%; min-height: 400px; margin-bottom: 30px;" src="https://newsnet-bucket.s3.ap-southeast-2.amazonaws.com/us-sports/mlb/schedule.html"></iframe>
		</div>
		`
		iFrameResize({log:false},'.shs-baseball-frame');
		return false;//exit the function before calling Opta.start() - it's not needed here
	}
	if(obj['sport'] == 'mlb' && obj['standings'] != 'TRUE'){

		sportWidgetWrapper.innerHTML = `
		<div class="content">
			<iframe class="shs-baseball-frame" id="shs-baseball-scoreboard-frame" frameborder="0" style="min-width: 100%; min-height: 400px; margin-bottom: 30px;" src="https://newsnet-bucket.s3.ap-southeast-2.amazonaws.com/us-sports/mlb/scoreboard.html"></iframe>
		</div>
		<!--advertisement banner-->
		<div class="content">
			<iframe class="shs-baseball-frame" id="shs-baseball-league-schedule-frame" frameborder="0" style="min-width: 100%; min-height: 400px; margin-bottom: 30px;" src="https://newsnet-bucket.s3.ap-southeast-2.amazonaws.com/us-sports/mlb/schedule.html"></iframe>
		</div>
		`
		iFrameResize({log:false},'.shs-baseball-frame');
		return false;//exit the function before calling Opta.start() - it's not needed here
	}

	/*nba*/
	if(obj['sport'] == 'nba' && obj['standings'] == 'TRUE'){

		sportWidgetWrapper.innerHTML = `
		<div class="content">
			<iframe class="shs-basketball-frame" id="shs-basketball-scoreboard-frame" frameborder="0" style="min-width: 100%; min-height: 400px; margin-bottom: 30px;" src="https://newsnet-bucket.s3.ap-southeast-2.amazonaws.com/us-sports/nba/scoreboard.html"></iframe>
		</div>
		<!--advertisement banner-->
		<div class="content">
			<iframe class="shs-basketball-frame" id="shs-basketball-standings-frame" frameborder="0" style="min-width: 100%; min-height: 400px; margin-bottom: 30px;" src="https://newsnet-bucket.s3.ap-southeast-2.amazonaws.com/us-sports/nba/standings.html"></iframe>
		</div>
		<!--advertisement banner-->
		<div class="content">
			<iframe class="shs-basketball-frame" id="shs-basketball-league-schedule-frame" frameborder="0" style="min-width: 100%; min-height: 400px; margin-bottom: 30px;" src="https://newsnet-bucket.s3.ap-southeast-2.amazonaws.com/us-sports/nba/schedule.html"></iframe>
		</div>
		`
		iFrameResize({log:false},'.shs-basketball-frame');
		return false;//exit the function before calling Opta.start() - it's not needed here
	}
	if(obj['sport'] == 'nba' && obj['standings'] != 'TRUE'){

		sportWidgetWrapper.innerHTML = `
		<div class="content">
			<iframe class="shs-basketball-frame" id="shs-basketball-scoreboard-frame" frameborder="0" style="min-width: 100%; min-height: 400px; margin-bottom: 30px;" src="https://newsnet-bucket.s3.ap-southeast-2.amazonaws.com/us-sports/nba/scoreboard.html"></iframe>
		</div>
		<!--advertisement banner-->
		<div class="content">
			<iframe class="shs-basketball-frame" id="shs-basketball-league-schedule-frame" frameborder="0" style="min-width: 100%; min-height: 400px; margin-bottom: 30px;" src="https://newsnet-bucket.s3.ap-southeast-2.amazonaws.com/us-sports/nba/schedule.html"></iframe>
		</div>
		`
		iFrameResize({log:false},'.shs-basketball-frame');
		return false;//exit the function before calling Opta.start() - it's not needed here
	}

	/*nfl*/
	if(obj['sport'] == 'nfl' && obj['standings'] == 'TRUE'){

		sportWidgetWrapper.innerHTML = `
		<div class="content">
			<iframe class="shs-football-frame" id="shs-football-scoreboard-frame" frameborder="0" style="min-width: 100%; min-height: 400px; margin-bottom: 30px;" src="https://newsnet-bucket.s3.ap-southeast-2.amazonaws.com/us-sports/nfl/scoreboard.html"></iframe>
		</div>
		<!--advertisement banner-->
		<div class="content">
			<iframe class="shs-football-frame" id="shs-football-standings-frame" frameborder="0" style="min-width: 100%; min-height: 400px; margin-bottom: 30px;" src="https://newsnet-bucket.s3.ap-southeast-2.amazonaws.com/us-sports/nfl/standings.html"></iframe>
		</div>
		<!--advertisement banner-->
		<div class="content">
			<iframe class="shs-football-frame" id="shs-football-league-schedule-frame" frameborder="0" style="min-width: 100%; min-height: 400px; margin-bottom: 30px;" src="https://newsnet-bucket.s3.ap-southeast-2.amazonaws.com/us-sports/nfl/schedule.html"></iframe>
		</div>
		`
		iFrameResize({log:false},'.shs-football-frame');
		return false;//exit the function before calling Opta.start() - it's not needed here
	}
	if(obj['sport'] == 'nfl' && obj['standings'] != 'TRUE'){

		sportWidgetWrapper.innerHTML = `
		<div class="content">
			<iframe class="shs-football-frame" id="shs-football-scoreboard-frame" frameborder="0" style="min-width: 100%; min-height: 400px; margin-bottom: 30px;" src="https://newsnet-bucket.s3.ap-southeast-2.amazonaws.com/us-sports/nfl/scoreboard.html"></iframe>
		</div>
		<!--advertisement banner-->
		<div class="content">
			<iframe class="shs-football-frame" id="shs-football-league-schedule-frame" frameborder="0" style="min-width: 100%; min-height: 400px; margin-bottom: 30px;" src="https://newsnet-bucket.s3.ap-southeast-2.amazonaws.com/us-sports/nfl/schedule.html"></iframe>
		</div>
		`
		iFrameResize({log:false},'.shs-football-frame');
		return false;//exit the function before calling Opta.start() - it's not needed here
	}

	Opta.start();//call this method to invoke Opta widgets
};
//end of function to populate sports widgets

Opta.events.subscribe('widget.drawn', (widget)=> {

	Opta(document).on('click','.Opta a',(e)=>{//catch click event on in-widget anchors
		e.preventDefault();//prevent changing url
		let sport = getQueryParams(e.target.href)['sport'];//store the sport name
		Opta(`select[name="${sport}"]`).prop('value','null');//use the stored sport name to reset the nav menu item
		loadWidget(getQueryParams(e.target.href));//pass the target href as an object to the load function
	})

	if(widget.widget.attr.sport === 'football') {
		Opta('.Opta-MatchLink').html('Match Preview');//customise link description
	}

	if(widget.widget.attr.sport === 'cricket') {
		Opta('.Opta-MatchLink').html('Scorecard');//customise link description
	}

	if(widget.widget.attr.sport === 'afl') {
		Opta('.Opta-MatchLink').html('Match Summary');//customise link description
	}
});

//settings for Opta widget initialisation - link_callback customises the behaviour of in-widget hyperlinks e.g. match-page, squads etc.
var opta_settings = {//MUST ber var NOT let - errors occur otherwise
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

loadNavCuration();