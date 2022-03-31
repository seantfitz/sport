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
					<a href="cricket.html?competition=2722&season=0">England&nbsp;v&nbsp;India&nbsp;Test&nbsp;Series&nbsp;2021/2022</a>
					<a href="cricket.html?competition=2780&season=0">IPL 2021</a>
					<a href="cricket.html?competition=2781&season=0">ICC World Test Championship Final 2021</a>
					<a href="cricket.html?competition=2784&season=0">West Indies v England Twenty20 Series 2022</a>
					<a href="cricket.html?competition=2785&season=0">West Indies v England Test Series 2022</a>
					<a href="cricket.html?competition=2813&season=0">Australia v England Test Series 2021/2022</a>
					<a href="cricket.html?competition=2816&season=0">Australia v Sri Lanka Twenty20 Series 2022</a>
					<a href="cricket.html?competition=2831&season=0">Weber Women's Big Bash League 2021</a>
					<a href="cricket.html?competition=2832&season=0">KFC T20 Big Bash League 2021/2022</a>
					<a href="cricket.html?competition=2852&season=0">ICC Men's T20 World Cup 2021</a>
					<a href="cricket.html?competition=2856&season=0">England v New Zealand Test Series 2022</a>
					<a href="cricket.html?competition=2857&season=0">England v India Twenty20 Series 2022</a>
					<a href="cricket.html?competition=2858&season=0">England v India ODI Series 2022</a>
					<a href="cricket.html?competition=2859&season=0">England v South Africa ODI Series 2022</a>
					<a href="cricket.html?competition=2860&season=0">England v South Africa Twenty20 Series 2022</a>
					<a href="cricket.html?competition=2861&season=0">England v South Africa Test Series 2022</a>
					<a href="cricket.html?competition=2863&season=0">South Africa v India Test Series 2021/2022</a>
					<a href="cricket.html?competition=2864&season=0">South Africa v India ODI Series 2022</a>
					<a href="cricket.html?competition=2868&season=0">South Africa v Bangladesh ODI Series 2022</a>
					<a href="cricket.html?competition=2869&season=0">South Africa v Bangladesh Test Series 2022</a>
					<a href="cricket.html?competition=2878&season=0">India v West Indies ODI Series 2022</a>
					<a href="cricket.html?competition=2879&season=0">India v West Indies Twenty20 Series 2022</a>
					<a href="cricket.html?competition=2880&season=0">India v Sri Lanka Test Series 2022</a>
					<a href="cricket.html?competition=2881&season=0">India v Sri Lanka Twenty20 Series 2022</a>
					<a href="cricket.html?competition=2882&season=0">India v South Africa Twenty20 Series 2022</a>
					<a href="cricket.html?competition=2886&season=0">Netherlands v England ODI Series 2022</a>
					<a href="cricket.html?competition=2903&season=0">Pakistan v Australia Test Series 2022</a>
					<a href="cricket.html?competition=2904&season=0">Pakistan v Australia ODI Series 2022</a>
					<a href="cricket.html?competition=2905&season=0">Pakistan v Australia Only Twenty20 2022</a>
					<a href="cricket.html?competition=2908&season=0">New Zealand v Bangladesh Test Series 2022</a>
					<a href="cricket.html?competition=2911&season=0">New Zealand v South Africa Test Series 2022</a>
					<a href="cricket.html?competition=2913&season=0">New Zealand v Netherlands Only Twenty20 2022</a>
					<a href="cricket.html?competition=2914&season=0">New Zealand v Netherlands ODI Series 2022</a>
					<a href="cricket.html?competition=2917&season=0">West Indies v Ireland ODI Series 2022</a>
					<a href="cricket.html?competition=2920&season=0">Afghanistan v Netherlands ODI Series in Qatar 2022</a>
					<a href="cricket.html?competition=2922&season=0">Sri Lanka v Zimbabwe ODI Series 2022</a>
					<a href="cricket.html?competition=2934&season=0">New Zealand in England Tour Matches 2022</a>
					<a href="cricket.html?competition=2938&season=0">South Africa in England Tour Matches 2022</a>
					<a href="cricket.html?competition=2939&season=0">India in England Tour Matches 2022</a>
					<a href="cricket.html?competition=2940&season=0">ICC Men's T20 World Cup 2022</a>
					<a href="cricket.html?competition=2945&season=0">Bangladesh v Afghanistan ODI Series 2022</a>
					<a href="cricket.html?competition=2946&season=0">Bangladesh v Afghanistan Twenty20 Series 2022</a>
					<a href="cricket.html?competition=2953&season=0">Netherlands v West Indies ODI Series 2022</a>
					<a href="cricket.html?competition=2954&season=0">Ireland v India Twenty20 Series 2022</a>
					<a href="cricket.html?competition=2955&season=0">Ireland v New Zealand ODI Series 2022</a>
					<a href="cricket.html?competition=2956&season=0">Ireland v New Zealand Twenty20 Series 2022</a>
					<a href="cricket.html?competition=2957&season=0">Ireland v South Africa Twenty20 Series in England 2022</a>
					<a href="cricket.html?competition=2960&season=0">IPL 2022</a>
					<a href="cricket.html?competition=2966&season=0">Nepal v Papua New Guinea ODI Series 2022</a>
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
		`);
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

			team_link="" 
			player_link="" 

			show_title="true" 
			show_logo="false" 
			show_live="true" 
			breakpoints="400, 700" 
			sport="afl"
			></opta-widget>
		`);
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
		case '3'://National Rugby League
		case '6'://State of Origin
		case '86'://NRL Women's Premiership
		case '87'://Women's State of Origin
	if(document.location.href.indexOf('rugbyleague') >= 0){
		console.log('rugbyleague')
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
			navigation="tabs_more" 
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
		// team_link="rugbyleague-teams.html" 
		// player_link="rugbyleague-players.html" 
		matchSummary.innerHTML=(``);
		standingsWidget.innerHTML=(`
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
		break;
	}
		/*Rugby League*/

		/*Rugby Union*/
		case '3':
		alert('union')
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
// console.log(sub_id)
var opta_settings = {
	subscription_id: 'b7b73f836f5975bc4752b7b54aced1da',
	language: 'en_GB',
	timezone: 'user',
};
