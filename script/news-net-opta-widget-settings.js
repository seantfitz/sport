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
				</div>
			</div>
			
			<div class="dropdown">
				<button class="dropbtn">Tennis</button>
				<div class="dropdown-content">
					<a href="tennis.html?competition=7577&season=2022">33rd Palermo Ladies Open - Womens Singles</a>
					<a href="tennis.html?competition=7343&season=2022">ABN Amro World Tennis Tournament - Mens Singles</a>
					<a href="tennis.html?competition=7506&season=2022">ATP Challenger 50 Oeiras II - Mens Singles</a>
					<a href="tennis.html?competition=7315&season=2022">ATP Cup - Mens National_teams</a>
					<a href="tennis.html?competition=7267&season=2022">Abierto Akron Zapopan - Womens Singles</a>
					<a href="tennis.html?competition=7467&season=2022">Abierto GNP Seguros - Mens Singles</a>
					<a href="tennis.html?competition=7269&season=2022">Abierto GNP Seguros 2022 - Womens Singles</a>
					<a href="tennis.html?competition=7383&season=2022">Abierto Mexicano Telcel presentado por HSBC - Mens Singles</a>
					<a href="tennis.html?competition=7668&season=2022">Abierto Tampico - Womens Singles</a>
					<a href="tennis.html?competition=7556&season=2022">Abierto de Tenis Mifel - Mens Singles</a>
					<a href="tennis.html?competition=7357&season=2022">Adelaide International 1 - Womens Singles</a>
					<a href="tennis.html?competition=7335&season=2022">Adelaide International 1 - Mens Singles</a>
					<a href="tennis.html?competition=7313&season=2022">Adelaide International 2 - Mens Singles</a>
					<a href="tennis.html?competition=7369&season=2022">Adelaide International 2 - Womens Singles</a>
					<a href="tennis.html?competition=7538&season=2022">Aguacalientes - Mens Singles</a>
					<a href="tennis.html?competition=7666&season=2022">AnyTech365 Andalucia Open - Womens Singles</a>
					<a href="tennis.html?competition=7483&season=2022">AnyTech365 Andalucia Open - Mens Singles</a>
					<a href="tennis.html?competition=7345&season=2022">Argentina Open - Mens Singles</a>
					<a href="tennis.html?competition=7471&season=2022">Arizona Tennis Classic - Mens Singles</a>
					<a href="tennis.html?competition=7578&season=2022">Astana Open - Mens Singles</a>
					<a href="tennis.html?competition=7244&season=2022">Australian Open - Mens Singles</a>
					<a href="tennis.html?competition=7246&season=2022">Australian Open - Womens Singles</a>
					<a href="tennis.html?competition=7245&season=2022">Australian Open - Mens Doubles</a>
					<a href="tennis.html?competition=7247&season=2022">Australian Open - Womens Doubles</a>
					<a href="tennis.html?competition=7248&season=2022">Australian Open - Mixed Doubles</a>
					<a href="tennis.html?competition=7652&season=2022">BBVA Open Internacional De Valencia - Womens Singles</a>
					<a href="tennis.html?competition=7660&season=2022">BCR Iasi Open - Womens Singles</a>
					<a href="tennis.html?competition=7403&season=2022">BMW Open by American Express - Mens Singles</a>
					<a href="tennis.html?competition=7387&season=2022">BNP Paribas Open - Mens Singles</a>
					<a href="tennis.html?competition=7388&season=2022">BNP Paribas Open - Mens Doubles</a>
					<a href="tennis.html?competition=7273&season=2022">BNP Paribas Open - Womens Singles</a>
					<a href="tennis.html?competition=7585&season=2022">BNP Paribas Poland Open - Womens Singles</a>
					<a href="tennis.html?competition=7307&season=2022">Bad Homburg Open presented by Engel & Volkers - Womens Singles</a>
					<a href="tennis.html?competition=7399&season=2022">Barcelona Open Banc Sabadell - Mens Singles</a>
					<a href="tennis.html?competition=7510&season=2022">Barletta - Mens Singles</a>
					<a href="tennis.html?competition=7347&season=2022">Bendigo International - Mens Singles</a>
					<a href="tennis.html?competition=7375&season=2022">Bengaluru Open 1 - Mens Singles</a>
					<a href="tennis.html?competition=7443&season=2022">Bengaluru Open 2 - Mens Singles</a>
					<a href="tennis.html?competition=7303&season=2022">Bett1 Open - Womens Singles</a>
					<a href="tennis.html?competition=7629&season=2022">Bordeaux - Mens Singles</a>
					<a href="tennis.html?competition=7644&season=2022">Budapest Open 125 - Womens Singles</a>
					<a href="tennis.html?competition=7540&season=2022">Buenos Aires 2 - Mens Singles</a>
					<a href="tennis.html?competition=7672&season=2022">Buenos Aires Open - Womens Singles</a>
					<a href="tennis.html?competition=7485&season=2022">Challenger Banca stato Città di Lugano - Mens Singles</a>
					<a href="tennis.html?competition=7439&season=2022">Challenger Cherbourg - La Manche - Mens Singles</a>
					<a href="tennis.html?competition=7469&season=2022">Challenger Santiago Chile - Mens Singles</a>
					<a href="tennis.html?competition=7502&season=2022">Challenger de Salinas I - Mens Singles</a>
					<a href="tennis.html?competition=7473&season=2022">Challenger del Biobio - Mens Singles</a>
					<a href="tennis.html?competition=7603&season=2022">Championnats Banque Nationale de Granby - Womens Singles</a>
					<a href="tennis.html?competition=7583&season=2022">Chengdu Open - Mens Singles</a>
					<a href="tennis.html?competition=7385&season=2022">Chile Dove Men+Care Open - Mens Singles</a>
					<a href="tennis.html?competition=7598&season=2022">China Open - Mens Singles</a>
					<a href="tennis.html?competition=7421&season=2022">Cinch Championships - Mens Singles</a>
					<a href="tennis.html?competition=7361&season=2022">Circuito Dove Men Care - Mens Singles</a>
					<a href="tennis.html?competition=7500&season=2022">Circuito Dove Men+Care Pereira - Mens Singles</a>
					<a href="tennis.html?competition=7558&season=2022">Citi Open - Mens Singles</a>
					<a href="tennis.html?competition=7451&season=2022">Citta' Di Forli' 1 - Mens Singles</a>
					<a href="tennis.html?competition=7359&season=2022">Citta' Di Forli' 2 - Mens Singles</a>
					<a href="tennis.html?competition=7365&season=2022">Citta' Di Forli' 3 - Mens Singles</a>
					<a href="tennis.html?competition=7445&season=2022">Citta' Di Forli' 4 - Mens Singles</a>
					<a href="tennis.html?competition=7459&season=2022">Citta' Di Forli' 5 - Mens Singles</a>
					<a href="tennis.html?competition=7373&season=2022">Cleveland Open - Mens Singles</a>
					<a href="tennis.html?competition=7279&season=2022">Copa Colsanitas presentado por Zurich - Womens Singles</a>
					<a href="tennis.html?competition=7695&season=2022">Coquimbo - Mens Singles</a>
					<a href="tennis.html?competition=7337&season=2022">Cordoba Open - Mens Singles</a>
					<a href="tennis.html?competition=7277&season=2022">Credit One Charleston Open - Womens Singles</a>
					<a href="tennis.html?competition=7349&season=2022">Dallas Open - Mens Singles</a>
					<a href="tennis.html?competition=7353&season=2022">Delray Beach Open - Mens Singles</a>
					<a href="tennis.html?competition=7433&season=2022">Dove Men+Care Challenger Bolivia - Mens Singles</a>
					<a href="tennis.html?competition=7494&season=2022">Dove Men+Care Challenger Bolivia 2 - Mens Singles</a>
					<a href="tennis.html?competition=7363&season=2022">Dove Men+Care Legion Sudamericana Concepcion - Mens Singles</a>
					<a href="tennis.html?competition=7355&season=2022">Dove Men+Care Legion Sudamericana Tigre - Mens Singles</a>
					<a href="tennis.html?competition=7670&season=2022">Dow Tennis Classic - Womens Singles</a>
					<a href="tennis.html?competition=7389&season=2022">Dubai Duty Free Tennis Championships - Mens Singles</a>
					<a href="tennis.html?competition=7263&season=2022">Dubai Duty Free Tennis Championships - Womens Singles</a>
					<a href="tennis.html?competition=7546&season=2022">EFG Swiss Open Gstaad - Mens Singles</a>
					<a href="tennis.html?competition=7613&season=2022">Erste Bank Open - Mens Singles</a>
					<a href="tennis.html?competition=7607&season=2022">European Open - Mens Singles</a>
					<a href="tennis.html?competition=7520&season=2022">Falkensteiner Punta Skala - Zadar Open - Mens Singles</a>
					<a href="tennis.html?competition=7393&season=2022">Fayez Sarofim & Co. U.S. Men's Clay Court Championship - Mens Singles</a>
					<a href="tennis.html?competition=7481&season=2022">FlowBank Challenger Biel/Bienne - Mens Singles</a>
					<a href="tennis.html?competition=7687&season=2022">Francavilla - Mens Singles</a>
					<a href="tennis.html?competition=7295&season=2022">French Open - Womens Singles</a>
					<a href="tennis.html?competition=7296&season=2022">French Open - Womens Doubles</a>
					<a href="tennis.html?competition=7415&season=2022">French Open - Mens Singles</a>
					<a href="tennis.html?competition=7416&season=2022">French Open - Mens Doubles</a>
					<a href="tennis.html?competition=7432&season=2022">French Open - Mixed Doubles</a>
					<a href="tennis.html?competition=7550&season=2022">Generali Open - Mens Singles</a>
					<a href="tennis.html?competition=7411&season=2022">Gonet Geneva Open - Mens Singles</a>
					<a href="tennis.html?competition=7488&season=2022">Gran Canaria Challenger 1 - Mens Singles</a>
					<a href="tennis.html?competition=7658&season=2022">Grand Est Open 88 - Womens Singles</a>
					<a href="tennis.html?competition=7291&season=2022">Grand Prix De Sar La Princesse Lalla Meryem - Womens Singles</a>
					<a href="tennis.html?competition=7395&season=2022">Grand Prix Hassan II - Mens Singles</a>
					<a href="tennis.html?competition=7575&season=2022">Hamburg European Open - Womens Singles</a>
					<a href="tennis.html?competition=7548&season=2022">Hamburg European Open - Mens Singles</a>
					<a href="tennis.html?competition=7631&season=2022">Heilbronn - Mens Singles</a>
					<a href="tennis.html?competition=7573&season=2022">Hungarian Grand Prix - Womens Singles</a>
					<a href="tennis.html?competition=7542&season=2022">Infosys Hall of Fame Open - Mens Singles</a>
					<a href="tennis.html?competition=7289&season=2022">Internationaux de Strasbourg - Womens Singles</a>
					<a href="tennis.html?competition=7409&season=2022">Internazionali BNL d'Italia - Mens Singles</a>
					<a href="tennis.html?competition=7410&season=2022">Internazionali BNL d'Italia - Mens Doubles</a>
					<a href="tennis.html?competition=7287&season=2022">Internazionali BNL d'Italia - Womens Singles</a>
					<a href="tennis.html?competition=7618&season=2022">Intesa Sanpaolo Next Gen ATP Finals - Mens Singles</a>
					<a href="tennis.html?competition=7640&season=2022">L 'Open 35 de Saint-Malo - Womens Singles</a>
					<a href="tennis.html?competition=7569&season=2022">Ladies Open Lausanne - Womens Singles</a>
					<a href="tennis.html?competition=7639&season=2022">Laver Cup - Mens National_teams</a>
					<a href="tennis.html?competition=7417&season=2022">Libema Open - Mens Singles</a>
					<a href="tennis.html?competition=7297&season=2022">Libema Open - Womens Singles</a>
					<a href="tennis.html?competition=7648&season=2022">Liqui Moly Open - Womens Singles</a>
					<a href="tennis.html?competition=7699&season=2022">Little Rock Open - Mens Singles</a>
					<a href="tennis.html?competition=7581&season=2022">Livesport Prague Open 2022 - Womens Singles</a>
					<a href="tennis.html?competition=7513&season=2022">Madrid - Mens Singles</a>
					<a href="tennis.html?competition=7650&season=2022">Makarska Open - Womens Singles</a>
					<a href="tennis.html?competition=7425&season=2022">Mallorca Championships - Mens Singles</a>
					<a href="tennis.html?competition=7637&season=2022">Mauthausen - Mens Singles</a>
					<a href="tennis.html?competition=7441&season=2022">Melbourne Summer Set - Mens Singles</a>
					<a href="tennis.html?competition=7447&season=2022">Melbourne Summer Set 1 - Womens Singles</a>
					<a href="tennis.html?competition=7449&season=2022">Melbourne Summer Set 2 - Womens Singles</a>
					<a href="tennis.html?competition=7518&season=2022">Mexico City - Mens Singles</a>
					<a href="tennis.html?competition=7275&season=2022">Miami Open presented by Itau - Womens Singles</a>
					<a href="tennis.html?competition=7391&season=2022">Miami Open presented by Itau - Mens Singles</a>
					<a href="tennis.html?competition=7392&season=2022">Miami Open presented by Itau - Mens Doubles</a>
					<a href="tennis.html?competition=7405&season=2022">Millennium Estoril Open - Mens Singles</a>
					<a href="tennis.html?competition=7674&season=2022">Montevideo Open - Womens Singles</a>
					<a href="tennis.html?competition=7530&season=2022">Morelos Challenger - Mens Singles</a>
					<a href="tennis.html?competition=7571&season=2022">Moselle Open - Mens Singles</a>
					<a href="tennis.html?competition=7589&season=2022">Mubadala Silicon Valley Classic - Womens Singles</a>
					<a href="tennis.html?competition=7504&season=2022">Murcia Open - Mens Singles</a>
					<a href="tennis.html?competition=7407&season=2022">Mutua Madrid Open - Mens Singles</a>
					<a href="tennis.html?competition=7408&season=2022">Mutua Madrid Open - Mens Doubles</a>
					<a href="tennis.html?competition=7285&season=2022">Mutua Madrid Open - Womens Singles</a>
					<a href="tennis.html?competition=7593&season=2022">National Bank Open presented by Rogers - Womens Singles</a>
					<a href="tennis.html?competition=7560&season=2022">National Bank Open presented by Rogers - Mens Singles</a>
					<a href="tennis.html?competition=7561&season=2022">National Bank Open presented by Rogers - Mens Doubles</a>
					<a href="tennis.html?competition=7619&season=2022">Nitto ATP Finals - Mens Singles</a>
					<a href="tennis.html?competition=7620&season=2022">Nitto ATP Finals - Mens Doubles</a>
					<a href="tennis.html?competition=7656&season=2022">Nordea Open - Womens Singles</a>
					<a href="tennis.html?competition=7544&season=2022">Nordea Open - Mens Singles</a>
					<a href="tennis.html?competition=7664&season=2022">Odlum Brown Vanopen - Womens Singles</a>
					<a href="tennis.html?competition=7496&season=2022">Oeiras Challenger 1 - Mens Singles</a>
					<a href="tennis.html?competition=7377&season=2022">Open 13 Provence - Mens Singles</a>
					<a href="tennis.html?competition=7271&season=2022">Open 6ème Sens Métropole de Lyon - Womens Singles</a>
					<a href="tennis.html?competition=7676&season=2022">Open Angers Arena Loire - Womens Singles</a>
					<a href="tennis.html?competition=7678&season=2022">Open BLS de Limoges - Womens Singles</a>
					<a href="tennis.html?competition=7413&season=2022">Open Parc Auvergne-Rhone-Alpes Lyon - Mens Singles</a>
					<a href="tennis.html?competition=7625&season=2022">Open Pays d'Aix CEPAC - Mens Singles</a>
					<a href="tennis.html?competition=7370&season=2022">Open Quimper Bretagne Occidentale - Mens Singles</a>
					<a href="tennis.html?competition=7498&season=2022">Open Saint-Brieuc Harmonie Mutuelle - Mens Singles</a>
					<a href="tennis.html?competition=7339&season=2022">Open Sud de France - Mens Singles</a>
					<a href="tennis.html?competition=7534&season=2022">Ostrava - Mens Singles</a>
					<a href="tennis.html?competition=7552&season=2022">Plava Laguna Croatia Open Umag - Mens Singles</a>
					<a href="tennis.html?competition=7477&season=2022">Play In Challenger - Mens Singles</a>
					<a href="tennis.html?competition=7281&season=2022">Porsche Tennis Grand Prix - Womens Singles</a>
					<a href="tennis.html?competition=7627&season=2022">Prague 2 - Mens Singles</a>
					<a href="tennis.html?competition=7526&season=2022">Prague I - Mens Singles</a>
					<a href="tennis.html?competition=7680&season=2022">Puerto Vallarta Open - Womens Singles</a>
					<a href="tennis.html?competition=7379&season=2022">Qatar ExxonMobil Open - Mens Singles</a>
					<a href="tennis.html?competition=7265&season=2022">Qatar Total Energies Open - Womens Singles</a>
					<a href="tennis.html?competition=7605&season=2022">Rakuten Japan Open Tennis Championships - Mens Singles</a>
					<a href="tennis.html?competition=7492&season=2022">Regione Abruzzo Aterno Gas & Power Cup - Mens Singles</a>
					<a href="tennis.html?competition=7381&season=2022">Rio Open presented by Claro - Mens Singles</a>
					<a href="tennis.html?competition=7397&season=2022">Rolex Monte-Carlo Masters - Mens Singles</a>
					<a href="tennis.html?competition=7398&season=2022">Rolex Monte-Carlo Masters - Mens Doubles</a>
					<a href="tennis.html?competition=7318&season=2022">Rolex Paris Masters - Mens Singles</a>
					<a href="tennis.html?competition=7617&season=2022">Rolex Paris Masters - Mens Doubles</a>
					<a href="tennis.html?competition=7621&season=2022">Rolex Shanghai Masters - Mens Singles</a>
					<a href="tennis.html?competition=7622&season=2022">Rolex Shanghai Masters - Mens Doubles</a>
					<a href="tennis.html?competition=7536&season=2022">Rome 1 - Mens Singles</a>
					<a href="tennis.html?competition=7490&season=2022">Roseto Degli Abruzzi 1 - Mens Singles</a>
					<a href="tennis.html?competition=7301&season=2022">Rothesay Classic Birmingham - Womens Singles</a>
					<a href="tennis.html?competition=7427&season=2022">Rothesay International Eastbourne - Mens Singles</a>
					<a href="tennis.html?competition=7305&season=2022">Rothesay International Eastbourne - Womens Singles</a>
					<a href="tennis.html?competition=7299&season=2022">Rothesay Open Nottingham - Womens Singles</a>
					<a href="tennis.html?competition=7693&season=2022">Salvador De Bahia - Mens Singles</a>
					<a href="tennis.html?competition=7514&season=2022">San Luis Potosi - Mens Singles</a>
					<a href="tennis.html?competition=7508&season=2022">Sanremo - Mens Singles</a>
					<a href="tennis.html?competition=7516&season=2022">Sarasota - Mens Singles</a>
					<a href="tennis.html?competition=7532&season=2022">Savannah Challenger - Mens Singles</a>
					<a href="tennis.html?competition=7401&season=2022">Serbia Open - Mens Singles</a>
					<a href="tennis.html?competition=7633&season=2022">Shymkent Challenger - Mens Singles</a>
					<a href="tennis.html?competition=7683&season=2022">Shymkent Challenger II - Mens Singles</a>
					<a href="tennis.html?competition=7587&season=2022">Sofia Open - Mens Singles</a>
					<a href="tennis.html?competition=7623&season=2022">Split - Mens Singles</a>
					<a href="tennis.html?competition=7261&season=2022">St. Petersburg Ladies Trophy - Womens Singles</a>
					<a href="tennis.html?competition=7609&season=2022">Stockholm Open - Mens Singles</a>
					<a href="tennis.html?competition=7691&season=2022">Surbiton - Mens Singles</a>
					<a href="tennis.html?competition=7615&season=2022">Swiss Indoors Basel - Mens Singles</a>
					<a href="tennis.html?competition=7455&season=2022">Sydney Tennis Classic - Mens Singles</a>
					<a href="tennis.html?competition=7453&season=2022">Sydney Tennis Classic - Womens Singles</a>
					<a href="tennis.html?competition=7283&season=2022">TEB BNP Paribas Tennis Championship Istanbul - Womens Singles</a>
					<a href="tennis.html?competition=7524&season=2022">Tallahassee Tennis Challenger - Mens Singles</a>
					<a href="tennis.html?competition=7341&season=2022">Tata Open Maharashtra - Mens Singles</a>
					<a href="tennis.html?competition=7367&season=2022">Tennis Ohio Championships - Mens Singles</a>
					<a href="tennis.html?competition=7597&season=2022">Tennis in the Land - Womens Singles</a>
					<a href="tennis.html?competition=7457&season=2022">Terega Open - Mens Singles</a>
					<a href="tennis.html?competition=7423&season=2022">Terra Wortmann Open - Mens Singles</a>
					<a href="tennis.html?competition=7662&season=2022">Thoreau Tennis Open 125 - Womens Singles</a>
					<a href="tennis.html?competition=7351&season=2022">Traralgon International - Mens Singles</a>
					<a href="tennis.html?competition=7697&season=2022">Troisdorf - Mens Singles</a>
					<a href="tennis.html?competition=7646&season=2022">Trophee Lagardere - Womens Singles</a>
					<a href="tennis.html?competition=7554&season=2022">Truist Atlanta Open presented by Fiserv - Mens Singles</a>
					<a href="tennis.html?competition=7685&season=2022">Tunis Open - Mens Singles</a>
					<a href="tennis.html?competition=7522&season=2022">Turin - Mens Singles</a>
					<a href="tennis.html?competition=7566&season=2022">US Open - Mens Singles</a>
					<a href="tennis.html?competition=7567&season=2022">US Open - Mens Doubles</a>
					<a href="tennis.html?competition=7568&season=2022">US Open - Mixed Doubles</a>
					<a href="tennis.html?competition=7601&season=2022">US Open - Womens Singles</a>
					<a href="tennis.html?competition=7602&season=2022">US Open - Womens Doubles</a>
					<a href="tennis.html?competition=7654&season=2022">Veneto Open Internazionali Confindustria Venezia E Rovigo - Womens Singles</a>
					<a href="tennis.html?competition=7689&season=2022">Vicenza Challenger - Mens Singles</a>
					<a href="tennis.html?competition=7419&season=2022">Weissenhof - Mens Singles</a>
					<a href="tennis.html?competition=7595&season=2022">Western & Southern Open - Womens Singles</a>
					<a href="tennis.html?competition=7562&season=2022">Western & Southern Open - Mens Singles</a>
					<a href="tennis.html?competition=7563&season=2022">Western & Southern Open - Mens Doubles</a>
					<a href="tennis.html?competition=7309&season=2022">Wimbledon - Womens Singles</a>
					<a href="tennis.html?competition=7310&season=2022">Wimbledon - Womens Doubles</a>
					<a href="tennis.html?competition=7429&season=2022">Wimbledon - Mens Singles</a>
					<a href="tennis.html?competition=7430&season=2022">Wimbledon - Mens Doubles</a>
					<a href="tennis.html?competition=7431&season=2022">Wimbledon - Mixed Doubles</a>
					<a href="tennis.html?competition=7564&season=2022">Winston-Salem Open - Mens Singles</a>
					<a href="tennis.html?competition=7635&season=2022">Zagreb Open - Mens Singles</a>
					<a href="tennis.html?competition=7642&season=2022">Zavarovalnica Sava Portoroz - Womens Singles</a>
					<a href="tennis.html?competition=7591&season=2022">Zhuhai Championships - Mens Singles</a>
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
					<!--<a href="mlb.html?competition=n0amm59n1m59y0auuk93hexg&season=1jl9m4m9c863xko7es6a6ecr8">USA - Major League Baseball</a>-->
				</div>
			</div>
			<div class="dropdown">
				<button class="dropbtn">Olympics</button>
				<div class="dropdown-content"></div>
			</div>
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
				
				competition="${query['competition']}" 
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
					
					grouping="date" 
					show_grouping="true" 
					
					navigation="dropdown" 
				
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

					team_link="rugbyunion-squads.html" 
					match_link="" 
					pre_match="1440" 

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

			if(!!matchWidget){
				matchWidget.innerHTML = (`
					<opta-widget 
					widget="match_preview" 
					
					competition="${query['competition']}" 
					season="${query['season']}" 
					match="${query['match']}" 
					
					template="normal" 
					navigation="tabs" 
					default_nav="1" 
					show_match_header="true" 
					show_crests="false" 
					show_competition_name="true" 
					show_venue="true" 
					show_date="true" 
					date_format="dddd D MMMM YYYY" 
					time_format="HH:mm" 
					show_form="6" 
					show_previous_meetings="6" 
					show_tooltips="false" 
					competition_naming="full" 
					team_naming="full" 
					team_link="rugbyunion-squads.html" 
					show_logo="false" 
					show_title="true" 
					breakpoints="400, 700" sport="rugby"
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
		case '7577'://33rd Palermo Ladies Open - Womens Singles/*WTA 250*/
		case '7343'://ABN Amro World Tennis Tournament - Mens Singles/*ATP500*/
		case '7506'://ATP Challenger 50 Oeiras II - Mens Singles/*ATP Challenger Tour*/
		case '7315'://ATP Cup - Mens National_teams/*Team Tournament*/
		case '7267'://Abierto Akron Zapopan - Womens Singles/*WTA 250*/
		case '7467'://Abierto GNP Seguros - Mens Singles/*ATP Challenger Tour*/
		case '7269'://Abierto GNP Seguros 2022 - Womens Singles/*WTA 250*/
		case '7383'://Abierto Mexicano Telcel presentado por HSBC - Mens Singles/*ATP500*/
		case '7668'://Abierto Tampico - Womens Singles/*WTA 125K Series*/
		case '7556'://Abierto de Tenis Mifel - Mens Singles/*ATP250*/
		case '7357'://Adelaide International 1 - Womens Singles/*WTA 500*/
		case '7335'://Adelaide International 1 - Mens Singles/*ATP250*/
		case '7313'://Adelaide International 2 - Mens Singles/*ATP250*/
		case '7369'://Adelaide International 2 - Womens Singles/*WTA 250*/
		case '7538'://Aguacalientes - Mens Singles/*ATP Challenger Tour*/
		case '7666'://AnyTech365 Andalucia Open - Womens Singles/*WTA 125K Series*/
		case '7483'://AnyTech365 Andalucia Open - Mens Singles/*ATP Challenger Tour*/
		case '7345'://Argentina Open - Mens Singles/*ATP250*/
		case '7471'://Arizona Tennis Classic - Mens Singles/*ATP Challenger Tour*/
		case '7578'://Astana Open - Mens Singles/*ATP250*/
		case '7244'://Australian Open - Mens Singles/*Grand Slam*/
		case '7246'://Australian Open - Womens Singles/*Grand Slam*/
		case '7245'://Australian Open - Mens Doubles/*Grand Slam*/
		case '7247'://Australian Open - Womens Doubles/*Grand Slam*/
		case '7248'://Australian Open - Mixed Doubles/*Grand Slam*/
		case '7652'://BBVA Open Internacional De Valencia - Womens Singles/*WTA 125K Series*/
		case '7660'://BCR Iasi Open - Womens Singles/*WTA 125K Series*/
		case '7403'://BMW Open by American Express - Mens Singles/*ATP250*/
		case '7387'://BNP Paribas Open - Mens Singles/*Masters*/
		case '7388'://BNP Paribas Open - Mens Doubles/*Masters*/
		case '7273'://BNP Paribas Open - Womens Singles/*WTA 1000*/
		case '7585'://BNP Paribas Poland Open - Womens Singles/*WTA 250*/
		case '7307'://Bad Homburg Open presented by Engel & Volkers - Womens Singles/*WTA 250*/
		case '7399'://Barcelona Open Banc Sabadell - Mens Singles/*ATP500*/
		case '7510'://Barletta - Mens Singles/*ATP Challenger Tour*/
		case '7347'://Bendigo International - Mens Singles/*ATP Challenger Tour*/
		case '7375'://Bengaluru Open 1 - Mens Singles/*ATP Challenger Tour*/
		case '7443'://Bengaluru Open 2 - Mens Singles/*ATP Challenger Tour*/
		case '7303'://Bett1 Open - Womens Singles/*WTA 500*/
		case '7629'://Bordeaux - Mens Singles/*ATP Challenger Tour*/
		case '7644'://Budapest Open 125 - Womens Singles/*WTA 125K Series*/
		case '7540'://Buenos Aires 2 - Mens Singles/*ATP Challenger Tour*/
		case '7672'://Buenos Aires Open - Womens Singles/*WTA 125K Series*/
		case '7485'://Challenger Banca stato Città di Lugano - Mens Singles/*ATP Challenger Tour*/
		case '7439'://Challenger Cherbourg - La Manche - Mens Singles/*ATP Challenger Tour*/
		case '7469'://Challenger Santiago Chile - Mens Singles/*ATP Challenger Tour*/
		case '7502'://Challenger de Salinas I - Mens Singles/*ATP Challenger Tour*/
		case '7473'://Challenger del Biobio - Mens Singles/*ATP Challenger Tour*/
		case '7603'://Championnats Banque Nationale de Granby - Womens Singles/*WTA 250*/
		case '7583'://Chengdu Open - Mens Singles/*ATP250*/
		case '7385'://Chile Dove Men+Care Open - Mens Singles/*ATP250*/
		case '7598'://China Open - Mens Singles/*ATP500*/
		case '7421'://Cinch Championships - Mens Singles/*ATP500*/
		case '7361'://Circuito Dove Men Care - Mens Singles/*ATP Challenger Tour*/
		case '7500'://Circuito Dove Men+Care Pereira - Mens Singles/*ATP Challenger Tour*/
		case '7558'://Citi Open - Mens Singles/*ATP500*/
		case '7451'://Citta' Di Forli' 1 - Mens Singles/*ATP Challenger Tour*/
		case '7359'://Citta' Di Forli' 2 - Mens Singles/*ATP Challenger Tour*/
		case '7365'://Citta' Di Forli' 3 - Mens Singles/*ATP Challenger Tour*/
		case '7445'://Citta' Di Forli' 4 - Mens Singles/*ATP Challenger Tour*/
		case '7459'://Citta' Di Forli' 5 - Mens Singles/*ATP Challenger Tour*/
		case '7373'://Cleveland Open - Mens Singles/*ATP Challenger Tour*/
		case '7279'://Copa Colsanitas presentado por Zurich - Womens Singles/*WTA 250*/
		case '7695'://Coquimbo - Mens Singles/*ATP Challenger Tour*/
		case '7337'://Cordoba Open - Mens Singles/*ATP250*/
		case '7277'://Credit One Charleston Open - Womens Singles/*WTA 500*/
		case '7349'://Dallas Open - Mens Singles/*ATP250*/
		case '7353'://Delray Beach Open - Mens Singles/*ATP250*/
		case '7433'://Dove Men+Care Challenger Bolivia - Mens Singles/*ATP Challenger Tour*/
		case '7494'://Dove Men+Care Challenger Bolivia 2 - Mens Singles/*ATP Challenger Tour*/
		case '7363'://Dove Men+Care Legion Sudamericana Concepcion - Mens Singles/*ATP Challenger Tour*/
		case '7355'://Dove Men+Care Legion Sudamericana Tigre - Mens Singles/*ATP Challenger Tour*/
		case '7670'://Dow Tennis Classic - Womens Singles/*WTA 125K Series*/
		case '7389'://Dubai Duty Free Tennis Championships - Mens Singles/*ATP500*/
		case '7263'://Dubai Duty Free Tennis Championships - Womens Singles/*WTA 500*/
		case '7546'://EFG Swiss Open Gstaad - Mens Singles/*ATP250*/
		case '7613'://Erste Bank Open - Mens Singles/*ATP500*/
		case '7607'://European Open - Mens Singles/*ATP250*/
		case '7520'://Falkensteiner Punta Skala - Zadar Open - Mens Singles/*ATP Challenger Tour*/
		case '7393'://Fayez Sarofim & Co. U.S. Men's Clay Court Championship - Mens Singles/*ATP250*/
		case '7481'://FlowBank Challenger Biel/Bienne - Mens Singles/*ATP Challenger Tour*/
		case '7687'://Francavilla - Mens Singles/*ATP Challenger Tour*/
		case '7295'://French Open - Womens Singles/*Grand Slam*/
		case '7296'://French Open - Womens Doubles/*Grand Slam*/
		case '7415'://French Open - Mens Singles/*Grand Slam*/
		case '7416'://French Open - Mens Doubles/*Grand Slam*/
		case '7432'://French Open - Mixed Doubles/*Grand Slam*/
		case '7550'://Generali Open - Mens Singles/*ATP250*/
		case '7411'://Gonet Geneva Open - Mens Singles/*ATP250*/
		case '7488'://Gran Canaria Challenger 1 - Mens Singles/*ATP Challenger Tour*/
		case '7658'://Grand Est Open 88 - Womens Singles/*WTA 125K Series*/
		case '7291'://Grand Prix De Sar La Princesse Lalla Meryem - Womens Singles/*WTA 250*/
		case '7395'://Grand Prix Hassan II - Mens Singles/*ATP250*/
		case '7575'://Hamburg European Open - Womens Singles/*WTA 250*/
		case '7548'://Hamburg European Open - Mens Singles/*ATP500*/
		case '7631'://Heilbronn - Mens Singles/*ATP Challenger Tour*/
		case '7573'://Hungarian Grand Prix - Womens Singles/*WTA 250*/
		case '7542'://Infosys Hall of Fame Open - Mens Singles/*ATP250*/
		case '7289'://Internationaux de Strasbourg - Womens Singles/*WTA 250*/
		case '7409'://Internazionali BNL d'Italia - Mens Singles/*Masters*/
		case '7410'://Internazionali BNL d'Italia - Mens Doubles/*Masters*/
		case '7287'://Internazionali BNL d'Italia - Womens Singles/*WTA 1000*/
		case '7618'://Intesa Sanpaolo Next Gen ATP Finals - Mens Singles/*Normal*/
		case '7640'://L 'Open 35 de Saint-Malo - Womens Singles/*WTA 125K Series*/
		case '7569'://Ladies Open Lausanne - Womens Singles/*WTA 250*/
		case '7639'://Laver Cup - Mens National_teams/*Team Tournament*/
		case '7417'://Libema Open - Mens Singles/*ATP250*/
		case '7297'://Libema Open - Womens Singles/*WTA 250*/
		case '7648'://Liqui Moly Open - Womens Singles/*WTA 125K Series*/
		case '7699'://Little Rock Open - Mens Singles/*ATP Challenger Tour*/
		case '7581'://Livesport Prague Open 2022 - Womens Singles/*WTA 250*/
		case '7513'://Madrid - Mens Singles/*ATP Challenger Tour*/
		case '7650'://Makarska Open - Womens Singles/*WTA 125K Series*/
		case '7425'://Mallorca Championships - Mens Singles/*ATP250*/
		case '7637'://Mauthausen - Mens Singles/*ATP Challenger Tour*/
		case '7441'://Melbourne Summer Set - Mens Singles/*ATP250*/
		case '7447'://Melbourne Summer Set 1 - Womens Singles/*WTA 250*/
		case '7449'://Melbourne Summer Set 2 - Womens Singles/*WTA 250*/
		case '7518'://Mexico City - Mens Singles/*ATP Challenger Tour*/
		case '7275'://Miami Open presented by Itau - Womens Singles/*WTA 1000*/
		case '7391'://Miami Open presented by Itau - Mens Singles/*Masters*/
		case '7392'://Miami Open presented by Itau - Mens Doubles/*Masters*/
		case '7405'://Millennium Estoril Open - Mens Singles/*ATP250*/
		case '7674'://Montevideo Open - Womens Singles/*WTA 125K Series*/
		case '7530'://Morelos Challenger - Mens Singles/*ATP Challenger Tour*/
		case '7571'://Moselle Open - Mens Singles/*ATP250*/
		case '7589'://Mubadala Silicon Valley Classic - Womens Singles/*WTA 500*/
		case '7504'://Murcia Open - Mens Singles/*ATP Challenger Tour*/
		case '7407'://Mutua Madrid Open - Mens Singles/*Masters*/
		case '7408'://Mutua Madrid Open - Mens Doubles/*Masters*/
		case '7285'://Mutua Madrid Open - Womens Singles/*WTA 1000*/
		case '7593'://National Bank Open presented by Rogers - Womens Singles/*WTA 1000*/
		case '7560'://National Bank Open presented by Rogers - Mens Singles/*Masters*/
		case '7561'://National Bank Open presented by Rogers - Mens Doubles/*Masters*/
		case '7619'://Nitto ATP Finals - Mens Singles/*World Championship*/
		case '7620'://Nitto ATP Finals - Mens Doubles/*World Championship*/
		case '7656'://Nordea Open - Womens Singles/*WTA 125K Series*/
		case '7544'://Nordea Open - Mens Singles/*ATP250*/
		case '7664'://Odlum Brown Vanopen - Womens Singles/*WTA 125K Series*/
		case '7496'://Oeiras Challenger 1 - Mens Singles/*ATP Challenger Tour*/
		case '7377'://Open 13 Provence - Mens Singles/*ATP250*/
		case '7271'://Open 6ème Sens Métropole de Lyon - Womens Singles/*WTA 250*/
		case '7676'://Open Angers Arena Loire - Womens Singles/*WTA 125K Series*/
		case '7678'://Open BLS de Limoges - Womens Singles/*WTA 125K Series*/
		case '7413'://Open Parc Auvergne-Rhone-Alpes Lyon - Mens Singles/*ATP250*/
		case '7625'://Open Pays d'Aix CEPAC - Mens Singles/*ATP Challenger Tour*/
		case '7370'://Open Quimper Bretagne Occidentale - Mens Singles/*ATP Challenger Tour*/
		case '7498'://Open Saint-Brieuc Harmonie Mutuelle - Mens Singles/*ATP Challenger Tour*/
		case '7339'://Open Sud de France - Mens Singles/*ATP250*/
		case '7534'://Ostrava - Mens Singles/*ATP Challenger Tour*/
		case '7552'://Plava Laguna Croatia Open Umag - Mens Singles/*ATP250*/
		case '7477'://Play In Challenger - Mens Singles/*ATP Challenger Tour*/
		case '7281'://Porsche Tennis Grand Prix - Womens Singles/*WTA 500*/
		case '7627'://Prague 2 - Mens Singles/*ATP Challenger Tour*/
		case '7526'://Prague I - Mens Singles/*ATP Challenger Tour*/
		case '7680'://Puerto Vallarta Open - Womens Singles/*WTA 125K Series*/
		case '7379'://Qatar ExxonMobil Open - Mens Singles/*ATP250*/
		case '7265'://Qatar Total Energies Open - Womens Singles/*WTA 1000*/
		case '7605'://Rakuten Japan Open Tennis Championships - Mens Singles/*ATP500*/
		case '7492'://Regione Abruzzo Aterno Gas & Power Cup - Mens Singles/*ATP Challenger Tour*/
		case '7381'://Rio Open presented by Claro - Mens Singles/*ATP500*/
		case '7397'://Rolex Monte-Carlo Masters - Mens Singles/*Masters*/
		case '7398'://Rolex Monte-Carlo Masters - Mens Doubles/*Masters*/
		case '7318'://Rolex Paris Masters - Mens Singles/*Masters*/
		case '7617'://Rolex Paris Masters - Mens Doubles/*Masters*/
		case '7621'://Rolex Shanghai Masters - Mens Singles/*Masters*/
		case '7622'://Rolex Shanghai Masters - Mens Doubles/*Masters*/
		case '7536'://Rome 1 - Mens Singles/*ATP Challenger Tour*/
		case '7490'://Roseto Degli Abruzzi 1 - Mens Singles/*ATP Challenger Tour*/
		case '7301'://Rothesay Classic Birmingham - Womens Singles/*WTA 250*/
		case '7427'://Rothesay International Eastbourne - Mens Singles/*ATP250*/
		case '7305'://Rothesay International Eastbourne - Womens Singles/*WTA 500*/
		case '7299'://Rothesay Open Nottingham - Womens Singles/*WTA 250*/
		case '7693'://Salvador De Bahia - Mens Singles/*ATP Challenger Tour*/
		case '7514'://San Luis Potosi - Mens Singles/*ATP Challenger Tour*/
		case '7508'://Sanremo - Mens Singles/*ATP Challenger Tour*/
		case '7516'://Sarasota - Mens Singles/*ATP Challenger Tour*/
		case '7532'://Savannah Challenger - Mens Singles/*ATP Challenger Tour*/
		case '7401'://Serbia Open - Mens Singles/*ATP250*/
		case '7633'://Shymkent Challenger - Mens Singles/*ATP Challenger Tour*/
		case '7683'://Shymkent Challenger II - Mens Singles/*ATP Challenger Tour*/
		case '7587'://Sofia Open - Mens Singles/*ATP250*/
		case '7623'://Split - Mens Singles/*ATP Challenger Tour*/
		case '7261'://St. Petersburg Ladies Trophy - Womens Singles/*WTA 500*/
		case '7609'://Stockholm Open - Mens Singles/*ATP250*/
		case '7691'://Surbiton - Mens Singles/*ATP Challenger Tour*/
		case '7615'://Swiss Indoors Basel - Mens Singles/*ATP500*/
		case '7455'://Sydney Tennis Classic - Mens Singles/*ATP250*/
		case '7453'://Sydney Tennis Classic - Womens Singles/*WTA 500*/
		case '7283'://TEB BNP Paribas Tennis Championship Istanbul - Womens Singles/*WTA 250*/
		case '7524'://Tallahassee Tennis Challenger - Mens Singles/*ATP Challenger Tour*/
		case '7341'://Tata Open Maharashtra - Mens Singles/*ATP250*/
		case '7367'://Tennis Ohio Championships - Mens Singles/*ATP Challenger Tour*/
		case '7597'://Tennis in the Land - Womens Singles/*WTA 250*/
		case '7457'://Terega Open - Mens Singles/*ATP Challenger Tour*/
		case '7423'://Terra Wortmann Open - Mens Singles/*ATP500*/
		case '7662'://Thoreau Tennis Open 125 - Womens Singles/*WTA 125K Series*/
		case '7351'://Traralgon International - Mens Singles/*ATP Challenger Tour*/
		case '7697'://Troisdorf - Mens Singles/*ATP Challenger Tour*/
		case '7646'://Trophee Lagardere - Womens Singles/*WTA 125K Series*/
		case '7554'://Truist Atlanta Open presented by Fiserv - Mens Singles/*ATP250*/
		case '7685'://Tunis Open - Mens Singles/*ATP Challenger Tour*/
		case '7522'://Turin - Mens Singles/*ATP Challenger Tour*/
		case '7566'://US Open - Mens Singles/*Grand Slam*/
		case '7567'://US Open - Mens Doubles/*Grand Slam*/
		case '7568'://US Open - Mixed Doubles/*Grand Slam*/
		case '7601'://US Open - Womens Singles/*Grand Slam*/
		case '7602'://US Open - Womens Doubles/*Grand Slam*/
		case '7654'://Veneto Open Internazionali Confindustria Venezia E Rovigo - Womens Singles/*WTA 125K Series*/
		case '7689'://Vicenza Challenger - Mens Singles/*ATP Challenger Tour*/
		case '7419'://Weissenhof - Mens Singles/*ATP250*/
		case '7595'://Western & Southern Open - Womens Singles/*WTA 1000*/
		case '7562'://Western & Southern Open - Mens Singles/*Masters*/
		case '7563'://Western & Southern Open - Mens Doubles/*Masters*/
		case '7309'://Wimbledon - Womens Singles/*Grand Slam*/
		case '7310'://Wimbledon - Womens Doubles/*Grand Slam*/
		case '7429'://Wimbledon - Mens Singles/*Grand Slam*/
		case '7430'://Wimbledon - Mens Doubles/*Grand Slam*/
		case '7431'://Wimbledon - Mixed Doubles/*Grand Slam*/
		case '7564'://Winston-Salem Open - Mens Singles/*ATP250*/
		case '7635'://Zagreb Open - Mens Singles/*ATP Challenger Tour*/
		case '7642'://Zavarovalnica Sava Portoroz - Womens Singles/*WTA 125K Series*/
		case '7591'://Zhuhai Championships - Mens Singles/*ATP250*/

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
				how_internationals="true" 
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
