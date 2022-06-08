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
					<a href="football.html?competition=8&season=2021">English Premier League</a>
					<a href="football.html?competition=5&season=2021">Champions League</a>
					<a href="football.html?competition=6&season=2021">UEFA Europa League</a>

					<a href="football.html?competition=4&season=2022">World Cup</a>
					<a href="football.html?competition=408&season=2022">Women's World Cup</a>

					<a href="football.html?competition=23&season=2021">Spanish La Liga</a>
					<a href="football.html?competition=21&season=2021">Italian Serie A</a>
					<a href="football.html?competition=22&season=2021">German Bundesliga</a>
					<a href="football.html?competition=24&season=2021">French Ligue 1</a>
					<a href="football.html?competition=1125&season=2021">UEFA Europa Conference League</a>

					<a href="football.html?competition=88&season=2022">Internationals</a>
					<a href="football.html?competition=551&season=2022">Internationals Women</a>
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
					<a class="from_1640908800 to_1643500800" href="tennis.html?competition=7315&season=2022">ATP Cup - Mens National_teams</a>
					<a class="from_1640995200 to_1643500800" href="tennis.html?competition=7347&season=2022">Bendigo International - Mens Singles</a>
					<a class="from_1641081600 to_1643500800" href="tennis.html?competition=7335&season=2022">Adelaide International 1 - Mens Singles</a>
					<a class="from_1641081600 to_1643500800" href="tennis.html?competition=7357&season=2022">Adelaide International 1 - Womens Singles</a>
					<a class="from_1641081600 to_1643500800" href="tennis.html?competition=7451&season=2022">Citta' Di Forli' 1 - Mens Singles</a>
					<a class="from_1641081600 to_1643500800" href="tennis.html?competition=7355&season=2022">Dove Men+Care Legion Sudamericana Tigre - Mens Singles</a>
					<a class="from_1641081600 to_1643500800" href="tennis.html?competition=7351&season=2022">Traralgon International - Mens Singles</a>
					<a class="from_1641168000 to_1643500800" href="tennis.html?competition=7441&season=2022">Melbourne Summer Set - Mens Singles</a>
					<a class="from_1641168000 to_1643500800" href="tennis.html?competition=7447&season=2022">Melbourne Summer Set 1 - Womens Singles</a>
					<a class="from_1641168000 to_1643500800" href="tennis.html?competition=7449&season=2022">Melbourne Summer Set 2 - Womens Singles</a>
					<a class="from_1641600000 to_1643500800" href="tennis.html?competition=7313&season=2022">Adelaide International 2 - Mens Singles</a>
					<a class="from_1641600000 to_1643500800" href="tennis.html?competition=7369&season=2022">Adelaide International 2 - Womens Singles</a>
					<a class="from_1641686400 to_1644278400" href="tennis.html?competition=7245&season=2022">Australian Open - Mens Doubles</a>
					<a class="from_1641686400 to_1644278400" href="tennis.html?competition=7244&season=2022">Australian Open - Mens Singles</a>
					<a class="from_1641686400 to_1644278400" href="tennis.html?competition=7248&season=2022">Australian Open - Mixed Doubles</a>
					<a class="from_1641686400 to_1644278400" href="tennis.html?competition=7247&season=2022">Australian Open - Womens Doubles</a>
					<a class="from_1641686400 to_1644278400" href="tennis.html?competition=7246&season=2022">Australian Open - Womens Singles</a>
					<a class="from_1641686400 to_1644710400" href="tennis.html?competition=7361&season=2022">Circuito Dove Men Care - Mens Singles</a>
					<a class="from_1641686400 to_1644710400" href="tennis.html?competition=7359&season=2022">Citta' Di Forli' 2 - Mens Singles</a>
					<a class="from_1641686400 to_1644710400" href="tennis.html?competition=7455&season=2022">Sydney Tennis Classic - Mens Singles</a>
					<a class="from_1641686400 to_1644710400" href="tennis.html?competition=7453&season=2022">Sydney Tennis Classic - Womens Singles</a>
					<a class="from_1642291200 to_1644710400" href="tennis.html?competition=7365&season=2022">Citta' Di Forli' 3 - Mens Singles</a>
					<a class="from_1642291200 to_1644710400" href="tennis.html?competition=7363&season=2022">Dove Men+Care Legion Sudamericana Concepcion - Mens Singles</a>
					<a class="from_1642896000 to_1644710400" href="tennis.html?competition=7433&season=2022">Dove Men+Care Challenger Bolivia - Mens Singles</a>
					<a class="from_1642896000 to_1644710400" href="tennis.html?competition=7370&season=2022">Open Quimper Bretagne Occidentale - Mens Singles</a>
					<a class="from_1642896000 to_1644710400" href="tennis.html?competition=7367&season=2022">Tennis Ohio Championships - Mens Singles</a>
					<a class="from_1643328000 to_1644710400" href="tennis.html?competition=7339&season=2022">Open Sud de France - Mens Singles</a>
					<a class="from_1643414400 to_1644710400" href="tennis.html?competition=7337&season=2022">Cordoba Open - Mens Singles</a>
					<a class="from_1643500800 to_1644710400" href="tennis.html?competition=7373&season=2022">Cleveland Open - Mens Singles</a>
					<a class="from_1643500800 to_1644710400" href="tennis.html?competition=7341&season=2022">Tata Open Maharashtra - Mens Singles</a>
					<a class="from_1644019200 to_1645142400" href="tennis.html?competition=7343&season=2022">ABN Amro World Tennis Tournament - Mens Singles</a>
					<a class="from_1644019200 to_1645142400" href="tennis.html?competition=7345&season=2022">Argentina Open - Mens Singles</a>
					<a class="from_1644019200 to_1645833600" href="tennis.html?competition=7261&season=2022">St. Petersburg Ladies Trophy - Womens Singles</a>
					<a class="from_1644105600 to_1645833600" href="tennis.html?competition=7375&season=2022">Bengaluru Open 1 - Mens Singles</a>
					<a class="from_1644105600 to_1645833600" href="tennis.html?competition=7439&season=2022">Challenger Cherbourg - La Manche - Mens Singles</a>
					<a class="from_1644105600 to_1645833600" href="tennis.html?competition=7349&season=2022">Dallas Open - Mens Singles</a>
					<a class="from_1644624000 to_1645833600" href="tennis.html?competition=7353&season=2022">Delray Beach Open - Mens Singles</a>
					<a class="from_1644624000 to_1645833600" href="tennis.html?competition=7263&season=2022">Dubai Duty Free Tennis Championships - Womens Singles</a>
					<a class="from_1644624000 to_1645833600" href="tennis.html?competition=7379&season=2022">Qatar ExxonMobil Open - Mens Singles</a>
					<a class="from_1644624000 to_1645833600" href="tennis.html?competition=7381&season=2022">Rio Open presented by Claro - Mens Singles</a>
					<a class="from_1644710400 to_1645833600" href="tennis.html?competition=7443&season=2022">Bengaluru Open 2 - Mens Singles</a>
					<a class="from_1644710400 to_1645833600" href="tennis.html?competition=7445&season=2022">Citta' Di Forli' 4 - Mens Singles</a>
					<a class="from_1644710400 to_1645833600" href="tennis.html?competition=7377&season=2022">Open 13 Provence - Mens Singles</a>
					<a class="from_1645142400 to_1647129600" href="tennis.html?competition=7383&season=2022">Abierto Mexicano Telcel presentado por HSBC - Mens Singles</a>
					<a class="from_1645142400 to_1647129600" href="tennis.html?competition=7265&season=2022">Qatar Total Energies Open - Womens Singles</a>
					<a class="from_1645228800 to_1647129600" href="tennis.html?competition=7267&season=2022">Abierto Akron Zapopan - Womens Singles</a>
					<a class="from_1645228800 to_1647129600" href="tennis.html?competition=7385&season=2022">Chile Dove Men+Care Open - Mens Singles</a>
					<a class="from_1645228800 to_1647129600" href="tennis.html?competition=7389&season=2022">Dubai Duty Free Tennis Championships - Mens Singles</a>
					<a class="from_1645315200 to_1647129600" href="tennis.html?competition=7459&season=2022">Citta' Di Forli' 5 - Mens Singles</a>
					<a class="from_1645315200 to_1647129600" href="tennis.html?competition=7457&season=2022">Terega Open - Mens Singles</a>
					<a class="from_1645747200 to_1647129600" href="tennis.html?competition=7522&season=2022">Turin - Mens Singles</a>
					<a class="from_1645833600 to_1647129600" href="tennis.html?competition=7269&season=2022">Abierto GNP Seguros 2022 - Womens Singles</a>
					<a class="from_1645833600 to_1647129600" href="tennis.html?competition=7271&season=2022">Open 6ème Sens Métropole de Lyon - Womens Singles</a>
					<a class="from_1645920000 to_1647129600" href="tennis.html?competition=7488&season=2022">Gran Canaria Challenger 1 - Mens Singles</a>
					<a class="from_1646524800 to_1648857600" href="tennis.html?competition=7467&season=2022">Abierto GNP Seguros - Mens Singles</a>
					<a class="from_1646524800 to_1648857600" href="tennis.html?competition=7469&season=2022">Challenger Santiago Chile - Mens Singles</a>
					<a class="from_1646524800 to_1648857600" href="tennis.html?competition=7490&season=2022">Roseto Degli Abruzzi 1 - Mens Singles</a>
					<a class="from_1646611200 to_1648857600" href="tennis.html?competition=7387&season=2022">BNP Paribas Open - Mens Singles</a>
					<a class="from_1646611200 to_1648857600" href="tennis.html?competition=7273&season=2022">BNP Paribas Open - Womens Singles</a>
					<a class="from_1646697600 to_1648857600" href="tennis.html?competition=7388&season=2022">BNP Paribas Open - Mens Doubles</a>
					<a class="from_1647129600 to_1648857600" href="tennis.html?competition=7473&season=2022">Challenger del Biobio - Mens Singles</a>
					<a class="from_1647129600 to_1648857600" href="tennis.html?competition=7492&season=2022">Regione Abruzzo Aterno Gas & Power Cup - Mens Singles</a>
					<a class="from_1647216000 to_1648857600" href="tennis.html?competition=7471&season=2022">Arizona Tennis Classic - Mens Singles</a>
					<a class="from_1647734400 to_1648857600" href="tennis.html?competition=7494&season=2022">Dove Men+Care Challenger Bolivia 2 - Mens Singles</a>
					<a class="from_1647734400 to_1648857600" href="tennis.html?competition=7520&season=2022">Falkensteiner Punta Skala - Zadar Open - Mens Singles</a>
					<a class="from_1647734400 to_1648857600" href="tennis.html?competition=7481&season=2022">FlowBank Challenger Biel/Bienne - Mens Singles</a>
					<a class="from_1647734400 to_1648857600" href="tennis.html?competition=7477&season=2022">Play In Challenger - Mens Singles</a>
					<a class="from_1647820800 to_1650153600" href="tennis.html?competition=7392&season=2022">Miami Open presented by Itau - Mens Doubles</a>
					<a class="from_1647820800 to_1650153600" href="tennis.html?competition=7391&season=2022">Miami Open presented by Itau - Mens Singles</a>
					<a class="from_1647820800 to_1650153600" href="tennis.html?competition=7275&season=2022">Miami Open presented by Itau - Womens Singles</a>
					<a class="from_1648339200 to_1650153600" href="tennis.html?competition=7483&season=2022">AnyTech365 Andalucia Open - Mens Singles</a>
					<a class="from_1648339200 to_1650153600" href="tennis.html?competition=7485&season=2022">Challenger Banca stato Città di Lugano - Mens Singles</a>
					<a class="from_1648339200 to_1650153600" href="tennis.html?competition=7500&season=2022">Circuito Dove Men+Care Pereira - Mens Singles</a>
					<a class="from_1648339200 to_1650153600" href="tennis.html?competition=7496&season=2022">Oeiras Challenger 1 - Mens Singles</a>
					<a class="from_1648339200 to_1650153600" href="tennis.html?competition=7498&season=2022">Open Saint-Brieuc Harmonie Mutuelle - Mens Singles</a>
					<a class="from_1648425600 to_1650153600" href="tennis.html?competition=7666&season=2022">AnyTech365 Andalucia Open - Womens Singles</a>
					<a class="from_1648857600 to_1650153600" href="tennis.html?competition=7279&season=2022">Copa Colsanitas presentado por Zurich - Womens Singles</a>
					<a class="from_1648857600 to_1650153600" href="tennis.html?competition=7277&season=2022">Credit One Charleston Open - Womens Singles</a>
					<a class="from_1648857600 to_1650153600" href="tennis.html?competition=7393&season=2022">Fayez Sarofim & Co. U.S. Men's Clay Court Championship - Mens Singles</a>
					<a class="from_1648944000 to_1650153600" href="tennis.html?competition=7502&season=2022">Challenger de Salinas Copa Banco Guayaquil - Mens Singles</a>
					<a class="from_1648944000 to_1650153600" href="tennis.html?competition=7504&season=2022">Costa Cálida Región de Murcia - Mens Singles</a>
					<a class="from_1648944000 to_1650153600" href="tennis.html?competition=7395&season=2022">Grand Prix Hassan II - Mens Singles</a>
					<a class="from_1648944000 to_1650153600" href="tennis.html?competition=7518&season=2022">Mexico City Open - Mens Singles</a>
					<a class="from_1648944000 to_1650153600" href="tennis.html?competition=7506&season=2022">Oeiras 2 - Mens Singles</a>
					<a class="from_1648944000 to_1650153600" href="tennis.html?competition=7508&season=2022">Sanremo Challenger - Mens Singles</a>
					<a class="from_1649462400 to_1651276800" href="tennis.html?competition=7398&season=2022">Rolex Monte-Carlo Masters - Mens Doubles</a>
					<a class="from_1649462400 to_1651276800" href="tennis.html?competition=7397&season=2022">Rolex Monte-Carlo Masters - Mens Singles</a>
					<a class="from_1649548800 to_1651276800" href="tennis.html?competition=7516&season=2022">Elizabeth Moore Sarasota Open - Mens Singles</a>
					<a class="from_1649548800 to_1651276800" href="tennis.html?competition=7510&season=2022">Open Citta Della Disfida - Mens Singles</a>
					<a class="from_1649548800 to_1651276800" href="tennis.html?competition=7513&season=2022">Open Comunidad de Madrid - Mens Singles</a>
					<a class="from_1649548800 to_1651276800" href="tennis.html?competition=7514&season=2022">San Luis Open BMW - Mens Singles</a>
					<a class="from_1650067200 to_1651276800" href="tennis.html?competition=7399&season=2022">Barcelona Open Banc Sabadell - Mens Singles</a>
					<a class="from_1650067200 to_1651276800" href="tennis.html?competition=7281&season=2022">Porsche Tennis Grand Prix - Womens Singles</a>
					<a class="from_1650153600 to_1651276800" href="tennis.html?competition=7538&season=2022">San Marcos Open Aguascalientes - Mens Singles</a>
					<a class="from_1650153600 to_1651276800" href="tennis.html?competition=7401&season=2022">Serbia Open - Mens Singles</a>
					<a class="from_1650153600 to_1651276800" href="tennis.html?competition=7623&season=2022">Split Open - Mens Singles</a>
					<a class="from_1650153600 to_1651276800" href="tennis.html?competition=7524&season=2022">Tallahassee Tennis Challenger - Mens Singles</a>
					<a class="from_1650153600 to_1651276800" href="tennis.html?competition=7283&season=2022">TEB BNP Paribas Tennis Championship Istanbul - Womens Singles</a>
					<a class="from_1650153600 to_1651276800" href="tennis.html?competition=7526&season=2022">TK Sparta Prague Open - Mens Singles</a>
					<a class="from_1650672000 to_1651276800" href="tennis.html?competition=7403&season=2022">BMW Open by American Express - Mens Singles</a>
					<a class="from_1650672000 to_1651276800" href="tennis.html?competition=7405&season=2022">Millennium Estoril Open - Mens Singles</a>
					<a class="from_1650758400 to_1651276800" href="tennis.html?competition=7540&season=2022">Dove Men+Care Challenger Buenos Aires 2 - Mens Singles</a>
					<a class="from_1650758400 to_1651276800" href="tennis.html?competition=7530&season=2022">Morelos Open - Mens Singles</a>
					<a class="from_1650758400 to_1651276800" href="tennis.html?competition=7534&season=2022">Ostra Group Open by Moneta - Mens Singles</a>
					<a class="from_1650758400 to_1651276800" href="tennis.html?competition=7536&season=2022">Rome Garden Open - Mens Singles</a>
					<a class="from_1650758400 to_1651276800" href="tennis.html?competition=7532&season=2022">Savannah Challenger presented by St. Joseph's/Candler - Mens Singles</a>
					<a class="from_1650931200 to_1652572800" href="tennis.html?competition=7407&season=2022">Mutua Madrid Open - Mens Singles</a>
					<a class="from_1650931200 to_1652572800" href="tennis.html?competition=7285&season=2022">Mutua Madrid Open - Womens Singles</a>
					<a class="from_1651276800 to_1652572800" href="tennis.html?competition=7408&season=2022">Mutua Madrid Open - Mens Doubles</a>
					<a class="from_1651363200 to_1654387200" href="tennis.html?competition=7637&season=2022">Danube Upper Austria Open - Mens Singles</a>
					<a class="from_1651363200 to_1654387200" href="tennis.html?competition=7693&season=2022">Dove Men+Care Salvador De Bahia - Mens Singles</a>
					<a class="from_1651363200 to_1654387200" href="tennis.html?competition=7627&season=2022">I.CLTK Prague Open - Mens Singles</a>
					<a class="from_1651363200 to_1654387200" href="tennis.html?competition=7640&season=2022">L 'Open 35 de Saint Malo - Womens Singles</a>
					<a class="from_1651363200 to_1654387200" href="tennis.html?competition=7625&season=2022">Open Pays d'Aix CEPAC - Mens Singles</a>
					<a class="from_1651795200 to_1654387200" href="tennis.html?competition=7695&season=2022">Dove Men+Care Coquimbo - Mens Singles</a>
					<a class="from_1651881600 to_1654387200" href="tennis.html?competition=7410&season=2022">Internazionali BNL d'Italia - Mens Doubles</a>
					<a class="from_1651881600 to_1654387200" href="tennis.html?competition=7409&season=2022">Internazionali BNL d'Italia - Mens Singles</a>
					<a class="from_1651881600 to_1654387200" href="tennis.html?competition=7287&season=2022">Internazionali BNL d'Italia - Womens Singles</a>
					<a class="from_1651968000 to_1654387200" href="tennis.html?competition=7629&season=2022">BNP Paribas Primrose - Mens Singles</a>
					<a class="from_1651968000 to_1654387200" href="tennis.html?competition=7631&season=2022">Neckarcup Heilbronn - Mens Singles</a>
					<a class="from_1651968000 to_1654387200" href="tennis.html?competition=7633&season=2022">Shymkent 1 - Mens Singles</a>
					<a class="from_1651968000 to_1654387200" href="tennis.html?competition=7635&season=2022">Zagreb Open - Mens Singles</a>
					<a class="from_1652054400 to_1654387200" href="tennis.html?competition=7646&season=2022">Trophee Lagardere - Womens Singles</a>
					<a class="from_1652140800 to_1654387200" href="tennis.html?competition=7648&season=2022">Liqui Moly Open - Womens Singles</a>
					<a class="from_1652313600 to_1654387200" href="tennis.html?competition=7411&season=2022">Gonet Geneva Open - Mens Singles</a>
					<a class="from_1652313600 to_1654387200" href="tennis.html?competition=7291&season=2022">Grand Prix Sar La Princesse Lalla Meryem - Womens Singles</a>
					<a class="from_1652313600 to_1654387200" href="tennis.html?competition=7289&season=2022">Internationaux de Strasbourg - Womens Singles</a>
					<a class="from_1652313600 to_1654387200" href="tennis.html?competition=7413&season=2022">Open Parc Auvergne-Rhone-Alpes Lyon - Mens Singles</a>
					<a class="from_1652400000 to_1654387200" href="tennis.html?competition=7687&season=2022">Challenger Francavilla al Mare - Mens Singles</a>
					<a class="from_1652400000 to_1654387200" href="tennis.html?competition=7683&season=2022">Shymkent Challenger II - Mens Singles</a>
					<a class="from_1652400000 to_1654387200" href="tennis.html?competition=7685&season=2022">Tunis Open - Mens Singles</a>
					<a class="from_1652572800 to_1654992000" href="tennis.html?competition=7416&season=2022">French Open - Mens Doubles</a>
					<a class="from_1652572800 to_1654992000" href="tennis.html?competition=7415&season=2022">French Open - Mens Singles</a>
					<a class="from_1652572800 to_1654992000" href="tennis.html?competition=7432&season=2022">French Open - Mixed Doubles</a>
					<a class="from_1652572800 to_1654992000" href="tennis.html?competition=7296&season=2022">French Open - Womens Doubles</a>
					<a class="from_1652572800 to_1654992000" href="tennis.html?competition=7295&season=2022">French Open - Womens Singles</a>
					<a class="from_1653004800 to_1654992000" href="tennis.html?competition=7689&season=2022">Internazionali di Tennis - Citta di Vicenza - Mens Singles</a>
					<a class="from_1653004800 to_1654992000" href="tennis.html?competition=7697&season=2022">Saturn Oil Open - Mens Singles</a>
					<a class="from_1653609600 to_1654992000" href="tennis.html?competition=7699&season=2022">Baptist Health Little Rock Open - Mens Singles</a>
					<a class="from_1653609600 to_1654992000" href="tennis.html?competition=7727&season=2022">Forli 6 - Mens Singles</a>
					<a class="from_1653609600 to_1654992000" href="tennis.html?competition=7719&season=2022">Poznan Open - Mens Singles</a>
					<a class="from_1653609600 to_1654992000" href="tennis.html?competition=7691&season=2022">Surbiton Trophy - Mens Singles</a>
					<a class="from_1653609600 to_1654992000" href="tennis.html?competition=7717&season=2022">Unicredit Czech Open - Mens Singles</a>
					<a class="from_1653696000 to_1654992000" href="tennis.html?competition=7650&season=2022">Makarska Open - Womens Singles</a>
					<a class="from_1654214400 to_1655596800" href="tennis.html?competition=7652&season=2022">BBVA Open Internacional De Valencia - Womens Singles</a>
					<a class="from_1654214400 to_1655596800" href="tennis.html?competition=7703&season=2022">Internazionali di Tennis - Città di Perugia - Mens Singles</a>
					<a class="from_1654214400 to_1655596800" href="tennis.html?competition=7707&season=2022">Kooperativa Bratislava Open - Mens Singles</a>
					<a class="from_1654214400 to_1655596800" href="tennis.html?competition=7417&season=2022">Libema Open - Mens Singles</a>
					<a class="from_1654214400 to_1655596800" href="tennis.html?competition=7297&season=2022">Libema Open - Womens Singles</a>
					<a class="from_1654214400 to_1655596800" href="tennis.html?competition=7705&season=2022">Open Sopra Steria de Lyon - Mens Singles</a>
					<a class="from_1654214400 to_1655596800" href="tennis.html?competition=7709&season=2022">Orlando Open - Mens Singles</a>
					<a class="from_1654214400 to_1655769600" href="tennis.html?competition=7701&season=2022">Rothesay Open Nottingham - Mens Singles</a>
					<a class="from_1654214400 to_1655769600" href="tennis.html?competition=7299&season=2022">Rothesay Open Nottingham - Womens Singles</a>
					<a class="from_1654214400 to_1655769600" href="tennis.html?competition=7419&season=2022">Weissenhof - Mens Singles</a>
					<a class="from_1654819200 to_1655769600" href="tennis.html?competition=7303&season=2022">Bett1 Open - Womens Singles</a>
					<a class="from_1654819200 to_1655769600" href="tennis.html?competition=7713&season=2022">Blois Challenger - Mens Singles</a>
					<a class="from_1654819200 to_1655769600" href="tennis.html?competition=7421&season=2022">Cinch Championships - Mens Singles</a>
					<a class="from_1654819200 to_1655769600" href="tennis.html?competition=7721&season=2022">Corrientes Challenger - Mens Singles</a>
					<a class="from_1654819200 to_1655769600" href="tennis.html?competition=7711&season=2022">Ilkley Challenger - Mens Singles</a>
					<a class="from_1654819200 to_1655769600" href="tennis.html?competition=7301&season=2022">Rothesay Classic Birmingham - Womens Singles</a>
					<a class="from_1654819200 to_1655769600" href="tennis.html?competition=7423&season=2022">Terra Wortmann Open - Mens Singles</a>
					<a class="from_1654819200 to_1655769600" href="tennis.html?competition=7654&season=2022">Veneto Open Internazionali Confindustria Venezia E Rovigo - Womens Singles</a>
					<a class="from_1655337600 to_1655769600" href="tennis.html?competition=7307&season=2022">Bad Homburg Open presented by Engel & Volkers - Womens Singles</a>
					<a class="from_1655337600 to_1655769600" href="tennis.html?competition=7425&season=2022">Mallorca Championships - Mens Singles</a>
					<a class="from_1655337600 to_1655769600" href="tennis.html?competition=7305&season=2022">Rothesay International Eastbourne - Womens Singles</a>
					<a class="from_1655424000 to_1655769600" href="tennis.html?competition=7715&season=2022">Milan - Mens Singles</a>
					<a class="from_1655424000 to_1655769600" href="tennis.html?competition=7723&season=2022">Oeiras 3 - Mens Singles</a>
					<a class="from_1655424000 to_1655769600" href="tennis.html?competition=7427&season=2022">Rothesay International Eastbourne - Mens Singles</a>
					<a class="from_1655424000 to_1655769600" href="tennis.html?competition=7729&season=2022">Villa Allende - Mens Singles</a>
					<a class="from_1655769600 to_1656374400" href="tennis.html?competition=7430&season=2022">Wimbledon - Mens Doubles</a>
					<a class="from_1655769600 to_1656374400" href="tennis.html?competition=7429&season=2022">Wimbledon - Mens Singles</a>
					<a class="from_1655769600 to_1656374400" href="tennis.html?competition=7431&season=2022">Wimbledon - Mixed Doubles</a>
					<a class="from_1655769600 to_1656374400" href="tennis.html?competition=7310&season=2022">Wimbledon - Womens Doubles</a>
					<a class="from_1655769600 to_1656374400" href="tennis.html?competition=7309&season=2022">Wimbledon - Womens Singles</a>
					<a class="from_1656028800 to_1659225600" href="tennis.html?competition=7725&season=2022">Luedenscheid - Mens Singles</a>
					<a class="from_1656028800 to_1659225600" href="tennis.html?competition=7731&season=2022">Malaga Open - Mens Singles</a>
					<a class="from_1656028800 to_1659225600" href="tennis.html?competition=7733&season=2022">Troyes - Mens Singles</a>
					<a class="from_1656633600 to_1659225600" href="tennis.html?competition=7658&season=2022">Grand Est Open 88 - Womens Singles</a>
					<a class="from_1656633600 to_1659225600" href="tennis.html?competition=7656&season=2022">Nordea Open - Womens Singles</a>
					<a class="from_1657238400 to_1659225600" href="tennis.html?competition=7573&season=2022">Hungarian Grand Prix - Womens Singles</a>
					<a class="from_1657238400 to_1659225600" href="tennis.html?competition=7542&season=2022">Infosys Hall of Fame Open - Mens Singles</a>
					<a class="from_1657238400 to_1659225600" href="tennis.html?competition=7569&season=2022">Ladies Open Lausanne - Womens Singles</a>
					<a class="from_1657238400 to_1659225600" href="tennis.html?competition=7544&season=2022">Nordea Open - Mens Singles</a>
					<a class="from_1657756800 to_1659225600" href="tennis.html?competition=7575&season=2022">Hamburg European Open - Womens Singles</a>
					<a class="from_1657843200 to_1659225600" href="tennis.html?competition=7577&season=2022">33rd Palermo Ladies Open - Womens Singles</a>
					<a class="from_1657843200 to_1659225600" href="tennis.html?competition=7546&season=2022">EFG Swiss Open Gstaad - Mens Singles</a>
					<a class="from_1657843200 to_1659225600" href="tennis.html?competition=7548&season=2022">Hamburg European Open - Mens Singles</a>
					<a class="from_1658448000 to_1659830400" href="tennis.html?competition=7585&season=2022">BNP Paribas Poland Open - Womens Singles</a>
					<a class="from_1658448000 to_1659830400" href="tennis.html?competition=7550&season=2022">Generali Open - Mens Singles</a>
					<a class="from_1658448000 to_1659830400" href="tennis.html?competition=7581&season=2022">Livesport Prague Open 2022 - Womens Singles</a>
					<a class="from_1658448000 to_1659830400" href="tennis.html?competition=7552&season=2022">Plava Laguna Croatia Open Umag - Mens Singles</a>
					<a class="from_1658448000 to_1662854400" href="tennis.html?competition=7554&season=2022">Truist Atlanta Open presented by Fiserv - Mens Singles</a>
					<a class="from_1659052800 to_1662854400" href="tennis.html?competition=7556&season=2022">Abierto de Tenis Mifel - Mens Singles</a>
					<a class="from_1659052800 to_1662854400" href="tennis.html?competition=7660&season=2022">BCR Iasi Open - Womens Singles</a>
					<a class="from_1659052800 to_1662854400" href="tennis.html?competition=7558&season=2022">Citi Open - Mens Singles</a>
					<a class="from_1659052800 to_1662854400" href="tennis.html?competition=7589&season=2022">Mubadala Silicon Valley Classic - Womens Singles</a>
					<a class="from_1659571200 to_1662854400" href="tennis.html?competition=7561&season=2022">National Bank Open presented by Rogers - Mens Doubles</a>
					<a class="from_1659657600 to_1662854400" href="tennis.html?competition=7560&season=2022">National Bank Open presented by Rogers - Mens Singles</a>
					<a class="from_1659657600 to_1662854400" href="tennis.html?competition=7593&season=2022">National Bank Open presented by Rogers - Womens Singles</a>
					<a class="from_1659657600 to_1662854400" href="tennis.html?competition=7662&season=2022">Thoreau Tennis Open 125 - Womens Singles</a>
					<a class="from_1660176000 to_1662854400" href="tennis.html?competition=7664&season=2022">Odlum Brown Vanopen - Womens Singles</a>
					<a class="from_1660176000 to_1662854400" href="tennis.html?competition=7563&season=2022">Western & Southern Open - Mens Doubles</a>
					<a class="from_1660262400 to_1662854400" href="tennis.html?competition=7562&season=2022">Western & Southern Open - Mens Singles</a>
					<a class="from_1660262400 to_1662854400" href="tennis.html?competition=7595&season=2022">Western & Southern Open - Womens Singles</a>
					<a class="from_1660780800 to_1662854400" href="tennis.html?competition=7603&season=2022">Championnats Banque Nationale de Granby - Womens Singles</a>
					<a class="from_1660780800 to_1662854400" href="tennis.html?competition=7597&season=2022">Tennis in the Land - Womens Singles</a>
					<a class="from_1660780800 to_1662854400" href="tennis.html?competition=7564&season=2022">Winston-Salem Open - Mens Singles</a>
					<a class="from_1661126400 to_1663459200" href="tennis.html?competition=7567&season=2022">US Open - Mens Doubles</a>
					<a class="from_1661126400 to_1663459200" href="tennis.html?competition=7566&season=2022">US Open - Mens Singles</a>
					<a class="from_1661126400 to_1663459200" href="tennis.html?competition=7568&season=2022">US Open - Mixed Doubles</a>
					<a class="from_1661126400 to_1663459200" href="tennis.html?competition=7602&season=2022">US Open - Womens Doubles</a>
					<a class="from_1661126400 to_1663459200" href="tennis.html?competition=7601&season=2022">US Open - Womens Singles</a>
					<a class="from_1662681600 to_1665878400" href="tennis.html?competition=7642&season=2022">Zavarovalnica Sava Portoroz - Womens Singles</a>
					<a class="from_1663286400 to_1665878400" href="tennis.html?competition=7578&season=2022">Astana Open - Mens Singles</a>
					<a class="from_1663286400 to_1665878400" href="tennis.html?competition=7644&season=2022">Budapest Open 125 - Womens Singles</a>
					<a class="from_1663286400 to_1665878400" href="tennis.html?competition=7571&season=2022">Moselle Open - Mens Singles</a>
					<a class="from_1663804800 to_1665878400" href="tennis.html?competition=7639&season=2022">Laver Cup - Mens National_teams</a>
					<a class="from_1663891200 to_1665878400" href="tennis.html?competition=7583&season=2022">Chengdu Open - Mens Singles</a>
					<a class="from_1663891200 to_1665878400" href="tennis.html?competition=7587&season=2022">Sofia Open - Mens Singles</a>
					<a class="from_1663891200 to_1665878400" href="tennis.html?competition=7591&season=2022">Zhuhai Championships - Mens Singles</a>
					<a class="from_1664496000 to_1665878400" href="tennis.html?competition=7598&season=2022">China Open - Mens Singles</a>
					<a class="from_1664496000 to_1665878400" href="tennis.html?competition=7605&season=2022">Rakuten Japan Open Tennis Championships - Mens Singles</a>
					<a class="from_1665014400 to_1666483200" href="tennis.html?competition=7622&season=2022">Rolex Shanghai Masters - Mens Doubles</a>
					<a class="from_1665014400 to_1666483200" href="tennis.html?competition=7621&season=2022">Rolex Shanghai Masters - Mens Singles</a>
					<a class="from_1665705600 to_1672444800" href="tennis.html?competition=7607&season=2022">European Open - Mens Singles</a>
					<a class="from_1665705600 to_1672444800" href="tennis.html?competition=7609&season=2022">Stockholm Open - Mens Singles</a>
					<a class="from_1666310400 to_1672444800" href="tennis.html?competition=7668&season=2022">Abierto Tampico - Womens Singles</a>
					<a class="from_1666310400 to_1672444800" href="tennis.html?competition=7613&season=2022">Erste Bank Open - Mens Singles</a>
					<a class="from_1666310400 to_1672444800" href="tennis.html?competition=7615&season=2022">Swiss Indoors Basel - Mens Singles</a>
					<a class="from_1666915200 to_1672444800" href="tennis.html?competition=7670&season=2022">Dow Tennis Classic - Womens Singles</a>
					<a class="from_1666915200 to_1672444800" href="tennis.html?competition=7680&season=2022">Puerto Vallarta Open - Womens Singles</a>
					<a class="from_1666915200 to_1672444800" href="tennis.html?competition=7617&season=2022">Rolex Paris Masters - Mens Doubles</a>
					<a class="from_1666915200 to_1672444800" href="tennis.html?competition=7318&season=2022">Rolex Paris Masters - Mens Singles</a>
					<a class="from_1667520000 to_1672444800" href="tennis.html?competition=7672&season=2022">Buenos Aires Open - Womens Singles</a>
					<a class="from_1667779200 to_1672444800" href="tennis.html?competition=7618&season=2022">Intesa Sanpaolo Next Gen ATP Finals - Mens Singles</a>
					<a class="from_1668124800 to_1672444800" href="tennis.html?competition=7674&season=2022">Montevideo Open - Womens Singles</a>
					<a class="from_1668211200 to_1672444800" href="tennis.html?competition=7620&season=2022">Nitto ATP Finals - Mens Doubles</a>
					<a class="from_1668211200 to_1672444800" href="tennis.html?competition=7619&season=2022">Nitto ATP Finals - Mens Singles</a>
					<a class="from_1669939200 to_1672444800" href="tennis.html?competition=7676&season=2022">Open Angers Arena Loire - Womens Singles</a>
					<a class="from_1670544000 to_1672444800" href="tennis.html?competition=7678&season=2022">Open BLS de Limoges - Womens Singles</a>
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
				<div class="dropdown-content" id="cricketDropdownMenu">

				</div>
			</div>
			<div class="dropdown">
				<button class="dropbtn">Motorsport</button>
				<div class="dropdown-content">
					<a href="motorsport.html?competition=1m5x4n07f2kqkiczebja5etiq&season=3d2cd3uj88qgdlt4lyhr0cis4">Formula 1</a>
					<a href="motorsport.html?competition=2e554vbpw7g0ykhl0rziuabxl&season=3j534o30hn9scfadkb0v9hkb8">MotoGP</a>
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
	
	/*CURATE TENNIS MENU*/
	/*filter out tournaments that have not started yet or finished 7 or more days ago*/
	let fromDate = [142291200,164142400,164774400,164819200,164954800,165136320,165633600,165965600,166449600,652572800,1640908800,1640995200,1641081600,1641168000,1641600000,1641686400,1642291200,1642896000,1643328000,1643414400,1643500800,1644019200,1644105600,1644624000,1644710400,1645142400,1645228800,1645315200,1645747200,1645833600,1645920000,1646524800,1646611200,1646697600,1647129600,1647216000,1647734400,1647820800,1648339200,1648425600,1648857600,1648944000,1649462400,1649548800,1650067200,1650153600,1650672000,1650758400,1650931200,1651276800,1651363200,1651795200,1651881600,1651968000,1652054400,1652140800,1652313600,1652400000,1652572800,1653004800,1653609600,1653696000,1654214400,1654819200,1655337600,1655424000,1655769600,1656028800,1656633600,1657238400,1657756800,1657843200,1658448000,1659052800,1659571200,1659657600,1660176000,1660262400,1660780800,1661126400,1662681600,1663286400,1663804800,1663891200,1664496000,1665014400,1665705600,1666310400,1666915200,1667520000,1667779200,1668124800,1668211200,1669939200,1670544000]
	let toDate = [1643500800,1644278400,1644710400,1645142400,1645833600,1647129600,1648857600,1650153600,1651276800,1652572800,1654387200,1654992000,1655596800,1655769600,1656374400,1659225600,1659830400,1662854400,1663459200,1665878400,1666483200,1672444800]
	let now = Math.floor(new Date().getTime() / 1000)//round down to 10 digits

	for(let i of fromDate){

		if(now < i){
			$(`.from_${i}`).remove()
		}
	}

	for(let i of toDate){
		if(now >= i){
			$(`.to_${i}`).remove()
		}
	}
	/*filter out tournaments that have not started yet or finished 7 or more days ago*/
	/*CURATE TENNIS MENU*/


	/*CURATE CRICKET MENU*/
	let cricketArray = [
		["2781","ICC World Test Championship Final 2021",["Friday 18 June 2021"]],
		["2722","England v India Test Series _2021/2022",["Wednesday 4 August 2021","Thursday 12 August 2021","Wednesday 25 August 2021","Thursday 2 September 2021","Friday 1 July 2022"]],
		["2780","IPL 2021",["Monday 20 September 2021","Tuesday 21 September 2021","Wednesday 22 September 2021","Thursday 23 September 2021","Friday 24 September 2021","Saturday 25 September 2021","Sunday 26 September 2021","Monday 27 September 2021","Tuesday 28 September 2021","Wednesday 29 September 2021","Thursday 30 September 2021","Friday 1 October 2021","Saturday 2 October 2021","Sunday 3 October 2021","Monday 4 October 2021","Tuesday 5 October 2021","Wednesday 6 October 2021","Thursday 7 October 2021","Friday 8 October 2021","Saturday 9 October 2021","Monday 11 October 2021","Tuesday 12 October 2021","Thursday 14 October 2021","Saturday 16 October 2021"]],
		["2831","Weber Women's Big Bash League 2021",["Thursday 14 October 2021","Saturday 16 October 2021","Sunday 17 October 2021","Tuesday 19 October 2021","Wednesday 20 October 2021","Saturday 23 October 2021","Sunday 24 October 2021","Tuesday 26 October 2021","Wednesday 27 October 2021","Saturday 30 October 2021","Sunday 31 October 2021","Wednesday 3 November 2021","Saturday 6 November 2021","Sunday 7 November 2021","Tuesday 9 November 2021","Wednesday 10 November 2021","Thursday 11 November 2021","Saturday 13 November 2021","Sunday 14 November 2021","Wednesday 17 November 2021","Friday 19 November 2021","Saturday 20 November 2021","Sunday 21 November 2021","Wednesday 24 November 2021","Thursday 25 November 2021","Saturday 27 November 2021"]],
		["2852","ICC Men's T20 World Cup 2021",["Sunday 17 October 2021","Monday 18 October 2021","Tuesday 19 October 2021","Wednesday 20 October 2021","Thursday 21 October 2021","Friday 22 October 2021","Saturday 23 October 2021","Sunday 24 October 2021","Monday 25 October 2021","Tuesday 26 October 2021","Wednesday 27 October 2021","Thursday 28 October 2021","Friday 29 October 2021","Saturday 30 October 2021","Sunday 31 October 2021","Monday 1 November 2021","Tuesday 2 November 2021","Wednesday 3 November 2021","Thursday 4 November 2021","Friday 5 November 2021","Saturday 6 November 2021","Sunday 7 November 2021","Monday 8 November 2021","Tuesday 9 November 2021","Thursday 11 November 2021","Friday 12 November 2021","Monday 15 November 2021"]],
		["2832","KFC T20 Big Bash League _2021/2022",["Sunday 5 December 2021","Monday 6 December 2021","Tuesday 7 December 2021","Wednesday 8 December 2021","Thursday 9 December 2021","Friday 10 December 2021","Saturday 11 December 2021","Sunday 12 December 2021","Monday 13 December 2021","Tuesday 14 December 2021","Wednesday 15 December 2021","Sunday 19 December 2021","Monday 20 December 2021","Tuesday 21 December 2021","Wednesday 22 December 2021","Thursday 23 December 2021","Friday 24 December 2021","Sunday 26 December 2021","Monday 27 December 2021","Tuesday 28 December 2021","Wednesday 29 December 2021","Friday 31 December 2021","Saturday 1 January 2022","Sunday 2 January 2022","Monday 3 January 2022","Tuesday 4 January 2022","Wednesday 5 January 2022","Thursday 6 January 2022","Saturday 8 January 2022","Sunday 9 January 2022","Monday 10 January 2022","Tuesday 11 January 2022","Wednesday 12 January 2022","Thursday 13 January 2022","Friday 14 January 2022","Saturday 15 January 2022","Sunday 16 January 2022","Monday 17 January 2022","Tuesday 18 January 2022","Wednesday 19 January 2022","Friday 21 January 2022","Saturday 22 January 2022","Sunday 23 January 2022","Wednesday 26 January 2022","Friday 28 January 2022"]],
		["2813","Australia v England Test Series _2021/2022",["Wednesday 8 December 2021","Thursday 16 December 2021","Sunday 26 December 2021","Wednesday 5 January 2022","Friday 14 January 2022"]],
		["2863","South Africa v India Test Series _2021/2022",["Sunday 26 December 2021","Monday 3 January 2022","Tuesday 11 January 2022"]],
		["2908","New Zealand v Bangladesh Test Series 2022",["Saturday 1 January 2022","Sunday 9 January 2022"]],
		// ["2917","West Indies v Ireland ODI Series 2022",["Sunday 9 January 2022","Friday 14 January 2022","Monday 17 January 2022"]],
		["2922","Sri Lanka v Zimbabwe ODI Series 2022",["Sunday 16 January 2022","Tuesday 18 January 2022","Friday 21 January 2022"]],
		["2864","South Africa v India ODI Series 2022",["Wednesday 19 January 2022","Friday 21 January 2022","Sunday 23 January 2022"]],
		// ["2920","Afghanistan v Netherlands ODI Series in Qatar 2022",["Friday 21 January 2022","Sunday 23 January 2022","Tuesday 25 January 2022"]],
		["2784","West Indies v England Twenty20 Series 2022",["Sunday 23 January 2022","Monday 24 January 2022","Thursday 27 January 2022","Sunday 30 January 2022","Monday 31 January 2022"]],
		["2878","India v West Indies ODI Series 2022",["Sunday 6 February 2022","Wednesday 9 February 2022","Friday 11 February 2022"]],
		["2816","Australia v Sri Lanka Twenty20 Series 2022",["Friday 11 February 2022","Sunday 13 February 2022","Tuesday 15 February 2022","Friday 18 February 2022","Sunday 20 February 2022"]],
		["2879","India v West Indies Twenty20 Series 2022",["Thursday 17 February 2022","Saturday 19 February 2022","Monday 21 February 2022"]],
		["2911","New Zealand v South Africa Test Series 2022",["Thursday 17 February 2022","Friday 25 February 2022"]],
		// ["2945","Bangladesh v Afghanistan ODI Series 2022",["Wednesday 23 February 2022","Friday 25 February 2022","Monday 28 February 2022"]],
		["2881","India v Sri Lanka Twenty20 Series 2022",["Friday 25 February 2022","Sunday 27 February 2022","Monday 28 February 2022"]],
		// ["2946","Bangladesh v Afghanistan Twenty20 Series 2022",["Thursday 3 March 2022","Saturday 5 March 2022"]],
		["2880","India v Sri Lanka Test Series 2022",["Friday 4 March 2022","Saturday 12 March 2022"]],
		["2903","Pakistan v Australia Test Series 2022",["Friday 4 March 2022","Saturday 12 March 2022","Monday 21 March 2022"]],
		["2785","West Indies v England Test Series 2022",["Wednesday 9 March 2022","Thursday 17 March 2022","Friday 25 March 2022"]],
		["2868","South Africa v Bangladesh ODI Series 2022",["Friday 18 March 2022","Sunday 20 March 2022","Wednesday 23 March 2022"]],
		// ["2913","New Zealand v Netherlands Only Twenty20 2022",["Friday 25 March 2022"]],
		["2966","Nepal v Papua New Guinea ODI Series 2022",["Friday 25 March 2022","Saturday 26 March 2022"]],
		["2960","IPL 2022",["Sunday 27 March 2022","Monday 28 March 2022","Tuesday 29 March 2022","Wednesday 30 March 2022","Thursday 31 March 2022","Friday 1 April 2022","Saturday 2 April 2022","Sunday 3 April 2022","Monday 4 April 2022","Tuesday 5 April 2022","Wednesday 6 April 2022","Thursday 7 April 2022","Friday 8 April 2022","Saturday 9 April 2022","Sunday 10 April 2022","Monday 11 April 2022","Tuesday 12 April 2022","Wednesday 13 April 2022","Thursday 14 April 2022","Friday 15 April 2022","Saturday 16 April 2022","Sunday 17 April 2022","Monday 18 April 2022","Tuesday 19 April 2022","Wednesday 20 April 2022","Thursday 21 April 2022","Friday 22 April 2022","Saturday 23 April 2022","Sunday 24 April 2022","Monday 25 April 2022","Tuesday 26 April 2022","Wednesday 27 April 2022","Thursday 28 April 2022","Friday 29 April 2022","Saturday 30 April 2022","Sunday 1 May 2022","Monday 2 May 2022","Tuesday 3 May 2022","Wednesday 4 May 2022","Thursday 5 May 2022","Friday 6 May 2022","Saturday 7 May 2022","Sunday 8 May 2022","Monday 9 May 2022","Tuesday 10 May 2022","Wednesday 11 May 2022","Thursday 12 May 2022","Friday 13 May 2022","Saturday 14 May 2022","Sunday 15 May 2022","Monday 16 May 2022","Tuesday 17 May 2022","Wednesday 18 May 2022","Thursday 19 May 2022","Friday 20 May 2022","Saturday 21 May 2022","Sunday 22 May 2022","Monday 23 May 2022","Wednesday 25 May 2022","Thursday 26 May 2022","Saturday 28 May 2022","Monday 30 May 2022"]],
		["2904","Pakistan v Australia ODI Series 2022",["Tuesday 29 March 2022","Thursday 31 March 2022","Saturday 2 April 2022"]],
		// ["2914","New Zealand v Netherlands ODI Series 2022",["Tuesday 29 March 2022","Saturday 2 April 2022","Monday 4 April 2022"]],
		["2869","South Africa v Bangladesh Test Series 2022",["Thursday 31 March 2022","Friday 8 April 2022"]],
		["2905","Pakistan v Australia Only Twenty20 2022",["Wednesday 6 April 2022"]],
		["2978","Bangladesh v Sri Lanka Test Series 2022",["Sunday 15 May 2022","Monday 23 May 2022"]],
		["2934","New Zealand in England Tour Matches 2022",["Friday 20 May 2022","Thursday 26 May 2022"]],
		// ["2953","Netherlands v West Indies ODI Series 2022",["Tuesday 31 May 2022","Thursday 2 June 2022","Saturday 4 June 2022"]],
		["2856","England v New Zealand Test Series 2022",["Thursday 2 June 2022","Friday 10 June 2022","Thursday 23 June 2022"]],
		["2970","Sri Lanka v Australia Twenty20 Series 2022",["Tuesday 7 June 2022","Wednesday 8 June 2022","Saturday 11 June 2022"]],
		["2882","India v South Africa Twenty20 Series 2022",["Thursday 9 June 2022","Sunday 12 June 2022","Tuesday 14 June 2022","Friday 17 June 2022","Sunday 19 June 2022"]],
		["2971","Sri Lanka v Australia ODI Series 2022",["Tuesday 14 June 2022","Thursday 16 June 2022","Sunday 19 June 2022","Tuesday 21 June 2022","Friday 24 June 2022"]],
		// ["2886","Netherlands v England ODI Series 2022",["Friday 17 June 2022","Sunday 19 June 2022","Wednesday 22 June 2022"]],
		["2939","India in England Tour Matches 2022",["Thursday 23 June 2022","Saturday 2 July 2022","Monday 4 July 2022"]],
		// ["2954","Ireland v India Twenty20 Series 2022",["Monday 27 June 2022","Wednesday 29 June 2022"]],
		["2972","Sri Lanka v Australia Test Series 2022",["Wednesday 29 June 2022","Friday 8 July 2022"]],
		["2857","England v India Twenty20 Series 2022",["Friday 8 July 2022","Saturday 9 July 2022","Sunday 10 July 2022"]],
		// ["2955","Ireland v New Zealand ODI Series 2022",["Sunday 10 July 2022","Tuesday 12 July 2022","Friday 15 July 2022"]],
		["2858","England v India ODI Series 2022",["Tuesday 12 July 2022","Thursday 14 July 2022","Sunday 17 July 2022"]],
		["2938","South Africa in England Tour Matches 2022",["Tuesday 12 July 2022","Thursday 14 July 2022","Tuesday 9 August 2022"]],
		["2859","England v South Africa ODI Series 2022",["Tuesday 19 July 2022","Friday 22 July 2022","Sunday 24 July 2022"]],
		// ["2956","Ireland v New Zealand Twenty20 Series 2022",["Tuesday 19 July 2022","Thursday 21 July 2022","Saturday 23 July 2022"]],
		["2860","England v South Africa Twenty20 Series 2022",["Thursday 28 July 2022","Friday 29 July 2022","Sunday 31 July 2022"]],
		["2975","Scotland v New Zealand Twenty20 Series 2022",["Thursday 28 July 2022","Saturday 30 July 2022"]],
		["2976","Scotland v New Zealand Only ODI 2022",["Sunday 31 July 2022"]],
		// ["2957","Ireland v South Africa Twenty20 Series in England 2022",["Thursday 4 August 2022","Saturday 6 August 2022"]],
		// ["2969","Ireland v Afghanistan Twenty20 Series 2022",["Wednesday 10 August 2022","Friday 12 August 2022","Saturday 13 August 2022","Tuesday 16 August 2022","Thursday 18 August 2022"]],
		// ["2986","Netherlands v Pakistan ODI Series 2022",["Tuesday 16 August 2022","Thursday 18 August 2022","Sunday 21 August 2022"]],
		["2861","England v South Africa Test Series 2022",["Wednesday 17 August 2022","Thursday 25 August 2022","Thursday 8 September 2022"]],
		["2940","ICC Men's T20 World Cup 2022",["Sunday 16 October 2022","Monday 17 October 2022","Tuesday 18 October 2022","Wednesday 19 October 2022","Thursday 20 October 2022","Friday 21 October 2022","Saturday 22 October 2022","Sunday 23 October 2022","Monday 24 October 2022","Tuesday 25 October 2022","Wednesday 26 October 2022","Thursday 27 October 2022","Friday 28 October 2022","Saturday 29 October 2022","Sunday 30 October 2022","Monday 31 October 2022","Tuesday 1 November 2022","Wednesday 2 November 2022","Thursday 3 November 2022","Friday 4 November 2022","Saturday 5 November 2022","Sunday 6 November 2022","Wednesday 9 November 2022","Thursday 10 November 2022","Sunday 13 November 2022"]]
	]

	now = new Date().getTime()
	let cricketDates = {}

	for(let i of cricketArray){

		let d = i[2]

		for(let j of d){

			let before = new Date(j).getTime() - 2419200000;//four weeks before now
			let after = new Date(j).getTime() + 2419200000;//four weeks after now

			if(now >= before && now <= after){
				cricketDates[i[0]] = i[1]
			}
		}
	}

	for(let i of Object.keys(cricketDates)){
		$('#cricketDropdownMenu').append(`<a href="cricket.html?competition=${i}&season=0">${cricketDates[i]}</a>`)
	}
	/*CURATE CRICKET MENU*/
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
		// case '2764':
		// case '2971':
		// case '2832'://KFC big bash 21/22//
		case '2780':
		case '2781':
		case '2784':
		case '2785':
		case '2813':
		case '2816':
		case '2831':
		case '2832':
		case '2852':
		case '2856':
		case '2857':
		case '2858':
		case '2859':
		case '2860':
		case '2861':
		case '2863':
		case '2864':
		case '2868':
		case '2869':
		case '2878':
		case '2879':
		case '2880':
		case '2881':
		case '2882':
		case '2886':
		case '2903':
		case '2904':
		case '2905':
		case '2908':
		case '2911':
		case '2913':
		case '2914':
		case '2917':
		case '2920':
		case '2922':
		case '2934':
		case '2938':
		case '2939':
		case '2940':
		case '2945':
		case '2946':
		case '2953':
		case '2954':
		case '2955':
		case '2956':
		case '2957':
		case '2960':
		case '2966':
		case '2969':
		case '2970':
		case '2971':
		case '2972':
		case '2975':
		case '2976':
		case '2978':
		case '2986':
		
		if(!!fixturesWidget){
//fixtures_type="${query['fixtures_type']}" 
			fixturesWidget.innerHTML = (`
				<opta-widget widget="fixtures" 

				competition="${query['competition']}" 
				season="${query['season']}" 

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
				match_link="cricket-match.html" 
				pre_match="false" 
				show_live="true" 
				show_logo="false" 
				

				
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
				
				show_logo="false" 
				show_title="true" 
				breakpoints="400, 700" 
				sport="cricket"
				></opta-widget>
			`);
			//team_link="cricket-teams.html" 
		};

		if(!!standingsWidget){

			if(!query['season']){
				query['season'] = '0'
			}

			standingsWidget.innerHTML = (`
				<opta-widget widget="standings" 
				template="normal" 
				live="true" 
				
				competition="${query['competition']}" 
				season="${query['season']}" 
				
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
			`);
			//team_link="cricket-teams.html" 
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

		let title;

		if(query['competition'] == '1m5x4n07f2kqkiczebja5etiq'){title = 'FIA F1 World Championship'}
		if(query['competition'] == '2e554vbpw7g0ykhl0rziuabxl'){title = 'FIM MotoGP World Championship'}
		if(query['competition'] == '2ecsbewwstw5jn9h7kpv2joix'){title = 'V8 Supercars'}

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
				title="${title} Calendar" 
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
		case "7315"://ATP Cup - Mens National_teams
		case "7347"://Bendigo International - Mens Singles
		case "7335"://Adelaide International 1 - Mens Singles
		case "7357"://Adelaide International 1 - Womens Singles
		case "7451"://Citta' Di Forli' 1 - Mens Singles
		case "7355"://Dove Men+Care Legion Sudamericana Tigre - Mens Singles
		case "7351"://Traralgon International - Mens Singles
		case "7441"://Melbourne Summer Set - Mens Singles
		case "7447"://Melbourne Summer Set 1 - Womens Singles
		case "7449"://Melbourne Summer Set 2 - Womens Singles
		case "7313"://Adelaide International 2 - Mens Singles
		case "7369"://Adelaide International 2 - Womens Singles
		case "7245"://Australian Open - Mens Doubles
		case "7244"://Australian Open - Mens Singles
		case "7248"://Australian Open - Mixed Doubles
		case "7247"://Australian Open - Womens Doubles
		case "7246"://Australian Open - Womens Singles
		case "7361"://Circuito Dove Men Care - Mens Singles
		case "7359"://Citta' Di Forli' 2 - Mens Singles
		case "7455"://Sydney Tennis Classic - Mens Singles
		case "7453"://Sydney Tennis Classic - Womens Singles
		case "7365"://Citta' Di Forli' 3 - Mens Singles
		case "7363"://Dove Men+Care Legion Sudamericana Concepcion - Mens Singles
		case "7433"://Dove Men+Care Challenger Bolivia - Mens Singles
		case "7370"://Open Quimper Bretagne Occidentale - Mens Singles
		case "7367"://Tennis Ohio Championships - Mens Singles
		case "7339"://Open Sud de France - Mens Singles
		case "7337"://Cordoba Open - Mens Singles
		case "7373"://Cleveland Open - Mens Singles
		case "7341"://Tata Open Maharashtra - Mens Singles
		case "7343"://ABN Amro World Tennis Tournament - Mens Singles
		case "7345"://Argentina Open - Mens Singles
		case "7261"://St. Petersburg Ladies Trophy - Womens Singles
		case "7375"://Bengaluru Open 1 - Mens Singles
		case "7439"://Challenger Cherbourg - La Manche - Mens Singles
		case "7349"://Dallas Open - Mens Singles
		case "7353"://Delray Beach Open - Mens Singles
		case "7263"://Dubai Duty Free Tennis Championships - Womens Singles
		case "7379"://Qatar ExxonMobil Open - Mens Singles
		case "7381"://Rio Open presented by Claro - Mens Singles
		case "7443"://Bengaluru Open 2 - Mens Singles
		case "7445"://Citta' Di Forli' 4 - Mens Singles
		case "7377"://Open 13 Provence - Mens Singles
		case "7383"://Abierto Mexicano Telcel presentado por HSBC - Mens Singles
		case "7265"://Qatar Total Energies Open - Womens Singles
		case "7267"://Abierto Akron Zapopan - Womens Singles
		case "7385"://Chile Dove Men+Care Open - Mens Singles
		case "7389"://Dubai Duty Free Tennis Championships - Mens Singles
		case "7459"://Citta' Di Forli' 5 - Mens Singles
		case "7457"://Terega Open - Mens Singles
		case "7522"://Turin - Mens Singles
		case "7269"://Abierto GNP Seguros 2022 - Womens Singles
		case "7271"://Open 6ème Sens Métropole de Lyon - Womens Singles
		case "7488"://Gran Canaria Challenger 1 - Mens Singles
		case "7467"://Abierto GNP Seguros - Mens Singles
		case "7469"://Challenger Santiago Chile - Mens Singles
		case "7490"://Roseto Degli Abruzzi 1 - Mens Singles
		case "7387"://BNP Paribas Open - Mens Singles
		case "7273"://BNP Paribas Open - Womens Singles
		case "7388"://BNP Paribas Open - Mens Doubles
		case "7473"://Challenger del Biobio - Mens Singles
		case "7492"://Regione Abruzzo Aterno Gas & Power Cup - Mens Singles
		case "7471"://Arizona Tennis Classic - Mens Singles
		case "7494"://Dove Men+Care Challenger Bolivia 2 - Mens Singles
		case "7520"://Falkensteiner Punta Skala - Zadar Open - Mens Singles
		case "7481"://FlowBank Challenger Biel/Bienne - Mens Singles
		case "7477"://Play In Challenger - Mens Singles
		case "7392"://Miami Open presented by Itau - Mens Doubles
		case "7391"://Miami Open presented by Itau - Mens Singles
		case "7275"://Miami Open presented by Itau - Womens Singles
		case "7483"://AnyTech365 Andalucia Open - Mens Singles
		case "7485"://Challenger Banca stato Città di Lugano - Mens Singles
		case "7500"://Circuito Dove Men+Care Pereira - Mens Singles
		case "7496"://Oeiras Challenger 1 - Mens Singles
		case "7498"://Open Saint-Brieuc Harmonie Mutuelle - Mens Singles
		case "7666"://AnyTech365 Andalucia Open - Womens Singles
		case "7279"://Copa Colsanitas presentado por Zurich - Womens Singles
		case "7277"://Credit One Charleston Open - Womens Singles
		case "7393"://Fayez Sarofim & Co. U.S. Men's Clay Court Championship - Mens Singles
		case "7502"://Challenger de Salinas Copa Banco Guayaquil - Mens Singles
		case "7504"://Costa Cálida Región de Murcia - Mens Singles
		case "7395"://Grand Prix Hassan II - Mens Singles
		case "7518"://Mexico City Open - Mens Singles
		case "7506"://Oeiras 2 - Mens Singles
		case "7508"://Sanremo Challenger - Mens Singles
		case "7398"://Rolex Monte-Carlo Masters - Mens Doubles
		case "7397"://Rolex Monte-Carlo Masters - Mens Singles
		case "7516"://Elizabeth Moore Sarasota Open - Mens Singles
		case "7510"://Open Citta Della Disfida - Mens Singles
		case "7513"://Open Comunidad de Madrid - Mens Singles
		case "7514"://San Luis Open BMW - Mens Singles
		case "7399"://Barcelona Open Banc Sabadell - Mens Singles
		case "7281"://Porsche Tennis Grand Prix - Womens Singles
		case "7538"://San Marcos Open Aguascalientes - Mens Singles
		case "7401"://Serbia Open - Mens Singles
		case "7623"://Split Open - Mens Singles
		case "7524"://Tallahassee Tennis Challenger - Mens Singles
		case "7283"://TEB BNP Paribas Tennis Championship Istanbul - Womens Singles
		case "7526"://TK Sparta Prague Open - Mens Singles
		case "7403"://BMW Open by American Express - Mens Singles
		case "7405"://Millennium Estoril Open - Mens Singles
		case "7540"://Dove Men+Care Challenger Buenos Aires 2 - Mens Singles
		case "7530"://Morelos Open - Mens Singles
		case "7534"://Ostra Group Open by Moneta - Mens Singles
		case "7536"://Rome Garden Open - Mens Singles
		case "7532"://Savannah Challenger presented by St. Joseph's/Candler - Mens Singles
		case "7407"://Mutua Madrid Open - Mens Singles
		case "7285"://Mutua Madrid Open - Womens Singles
		case "7408"://Mutua Madrid Open - Mens Doubles
		case "7637"://Danube Upper Austria Open - Mens Singles
		case "7693"://Dove Men+Care Salvador De Bahia - Mens Singles
		case "7627"://I.CLTK Prague Open - Mens Singles
		case "7640"://L 'Open 35 de Saint Malo - Womens Singles
		case "7625"://Open Pays d'Aix CEPAC - Mens Singles
		case "7695"://Dove Men+Care Coquimbo - Mens Singles
		case "7410"://Internazionali BNL d'Italia - Mens Doubles
		case "7409"://Internazionali BNL d'Italia - Mens Singles
		case "7287"://Internazionali BNL d'Italia - Womens Singles
		case "7629"://BNP Paribas Primrose - Mens Singles
		case "7631"://Neckarcup Heilbronn - Mens Singles
		case "7633"://Shymkent 1 - Mens Singles
		case "7635"://Zagreb Open - Mens Singles
		case "7646"://Trophee Lagardere - Womens Singles
		case "7648"://Liqui Moly Open - Womens Singles
		case "7411"://Gonet Geneva Open - Mens Singles
		case "7291"://Grand Prix Sar La Princesse Lalla Meryem - Womens Singles
		case "7289"://Internationaux de Strasbourg - Womens Singles
		case "7413"://Open Parc Auvergne-Rhone-Alpes Lyon - Mens Singles
		case "7687"://Challenger Francavilla al Mare - Mens Singles
		case "7683"://Shymkent Challenger II - Mens Singles
		case "7685"://Tunis Open - Mens Singles
		case "7416"://French Open - Mens Doubles
		case "7415"://French Open - Mens Singles
		case "7432"://French Open - Mixed Doubles
		case "7296"://French Open - Womens Doubles
		case "7295"://French Open - Womens Singles
		case "7689"://Internazionali di Tennis - Citta di Vicenza - Mens Singles
		case "7697"://Saturn Oil Open - Mens Singles
		case "7699"://Baptist Health Little Rock Open - Mens Singles
		case "7727"://Forli 6 - Mens Singles
		case "7719"://Poznan Open - Mens Singles
		case "7691"://Surbiton Trophy - Mens Singles
		case "7717"://Unicredit Czech Open - Mens Singles
		case "7650"://Makarska Open - Womens Singles
		case "7652"://BBVA Open Internacional De Valencia - Womens Singles
		case "7703"://Internazionali di Tennis - Città di Perugia - Mens Singles
		case "7707"://Kooperativa Bratislava Open - Mens Singles
		case "7417"://Libema Open - Mens Singles
		case "7297"://Libema Open - Womens Singles
		case "7705"://Open Sopra Steria de Lyon - Mens Singles
		case "7709"://Orlando Open - Mens Singles
		case "7701"://Rothesay Open Nottingham - Mens Singles
		case "7299"://Rothesay Open Nottingham - Womens Singles
		case "7419"://Weissenhof - Mens Singles
		case "7303"://Bett1 Open - Womens Singles
		case "7713"://Blois Challenger - Mens Singles
		case "7421"://Cinch Championships - Mens Singles
		case "7721"://Corrientes Challenger - Mens Singles
		case "7711"://Ilkley Challenger - Mens Singles
		case "7301"://Rothesay Classic Birmingham - Womens Singles
		case "7423"://Terra Wortmann Open - Mens Singles
		case "7654"://Veneto Open Internazionali Confindustria Venezia E Rovigo - Womens Singles
		case "7307"://Bad Homburg Open presented by Engel & Volkers - Womens Singles
		case "7425"://Mallorca Championships - Mens Singles
		case "7305"://Rothesay International Eastbourne - Womens Singles
		case "7715"://Milan - Mens Singles
		case "7723"://Oeiras 3 - Mens Singles
		case "7427"://Rothesay International Eastbourne - Mens Singles
		case "7729"://Villa Allende - Mens Singles
		case "7430"://Wimbledon - Mens Doubles
		case "7429"://Wimbledon - Mens Singles
		case "7431"://Wimbledon - Mixed Doubles
		case "7310"://Wimbledon - Womens Doubles
		case "7309"://Wimbledon - Womens Singles
		case "7725"://Luedenscheid - Mens Singles
		case "7731"://Malaga Open - Mens Singles
		case "7733"://Troyes - Mens Singles
		case "7658"://Grand Est Open 88 - Womens Singles
		case "7656"://Nordea Open - Womens Singles
		case "7573"://Hungarian Grand Prix - Womens Singles
		case "7542"://Infosys Hall of Fame Open - Mens Singles
		case "7569"://Ladies Open Lausanne - Womens Singles
		case "7544"://Nordea Open - Mens Singles
		case "7575"://Hamburg European Open - Womens Singles
		case "7577"://33rd Palermo Ladies Open - Womens Singles
		case "7546"://EFG Swiss Open Gstaad - Mens Singles
		case "7548"://Hamburg European Open - Mens Singles
		case "7585"://BNP Paribas Poland Open - Womens Singles
		case "7550"://Generali Open - Mens Singles
		case "7581"://Livesport Prague Open 2022 - Womens Singles
		case "7552"://Plava Laguna Croatia Open Umag - Mens Singles
		case "7554"://Truist Atlanta Open presented by Fiserv - Mens Singles
		case "7556"://Abierto de Tenis Mifel - Mens Singles
		case "7660"://BCR Iasi Open - Womens Singles
		case "7558"://Citi Open - Mens Singles
		case "7589"://Mubadala Silicon Valley Classic - Womens Singles
		case "7561"://National Bank Open presented by Rogers - Mens Doubles
		case "7560"://National Bank Open presented by Rogers - Mens Singles
		case "7593"://National Bank Open presented by Rogers - Womens Singles
		case "7662"://Thoreau Tennis Open 125 - Womens Singles
		case "7664"://Odlum Brown Vanopen - Womens Singles
		case "7563"://Western & Southern Open - Mens Doubles
		case "7562"://Western & Southern Open - Mens Singles
		case "7595"://Western & Southern Open - Womens Singles
		case "7603"://Championnats Banque Nationale de Granby - Womens Singles
		case "7597"://Tennis in the Land - Womens Singles
		case "7564"://Winston-Salem Open - Mens Singles
		case "7567"://US Open - Mens Doubles
		case "7566"://US Open - Mens Singles
		case "7568"://US Open - Mixed Doubles
		case "7602"://US Open - Womens Doubles
		case "7601"://US Open - Womens Singles
		case "7642"://Zavarovalnica Sava Portoroz - Womens Singles
		case "7578"://Astana Open - Mens Singles
		case "7644"://Budapest Open 125 - Womens Singles
		case "7571"://Moselle Open - Mens Singles
		case "7639"://Laver Cup - Mens National_teams
		case "7583"://Chengdu Open - Mens Singles
		case "7587"://Sofia Open - Mens Singles
		case "7591"://Zhuhai Championships - Mens Singles
		case "7598"://China Open - Mens Singles
		case "7605"://Rakuten Japan Open Tennis Championships - Mens Singles
		case "7622"://Rolex Shanghai Masters - Mens Doubles
		case "7621"://Rolex Shanghai Masters - Mens Singles
		case "7607"://European Open - Mens Singles
		case "7609"://Stockholm Open - Mens Singles
		case "7668"://Abierto Tampico - Womens Singles
		case "7613"://Erste Bank Open - Mens Singles
		case "7615"://Swiss Indoors Basel - Mens Singles
		case "7670"://Dow Tennis Classic - Womens Singles
		case "7680"://Puerto Vallarta Open - Womens Singles
		case "7617"://Rolex Paris Masters - Mens Doubles
		case "7318"://Rolex Paris Masters - Mens Singles
		case "7672"://Buenos Aires Open - Womens Singles
		case "7618"://Intesa Sanpaolo Next Gen ATP Finals - Mens Singles
		case "7674"://Montevideo Open - Womens Singles
		case "7620"://Nitto ATP Finals - Mens Doubles
		case "7619"://Nitto ATP Finals - Mens Singles
		case "7676"://Open Angers Arena Loire - Womens Singles
		case "7678"://Open BLS de Limoges - Womens Singles

		if(!!liveScoresWidget){
			// console.log('aaa')
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

				pre_match="false" 
				show_logo="false" 
				show_title="true" 
				breakpoints="400" 
				sport="tennis"
				></opta-widget>
			`)
		};
		//competition="${query['competition']}" 
		//match_link="tennis-match.html"
		break;
		/*Tennis*/
	}
}
var opta_settings = {
	subscription_id: 'b7b73f836f5975bc4752b7b54aced1da',
	language: 'en_GB',
	timezone: 'user',
};