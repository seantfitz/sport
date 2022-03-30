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
				<div class="dropdown-content">
					<a href="tennis.html?competition=7577&season=2022&i=${sub_id}">33rd Palermo Ladies Open - Womens Singles</a>
					<a href="tennis.html?competition=7343&season=2022&i=${sub_id}">ABN Amro World Tennis Tournament - Mens Singles</a>
					<a href="tennis.html?competition=7506&season=2022&i=${sub_id}">ATP Challenger 50 Oeiras II - Mens Singles</a>
					<a href="tennis.html?competition=7315&season=2022&i=${sub_id}">ATP Cup - Mens National_teams</a>
					<a href="tennis.html?competition=7267&season=2022&i=${sub_id}">Abierto Akron Zapopan - Womens Singles</a>
					<a href="tennis.html?competition=7467&season=2022&i=${sub_id}">Abierto GNP Seguros - Mens Singles</a>
					<a href="tennis.html?competition=7269&season=2022&i=${sub_id}">Abierto GNP Seguros 2022 - Womens Singles</a>
					<a href="tennis.html?competition=7383&season=2022&i=${sub_id}">Abierto Mexicano Telcel presentado por HSBC - Mens Singles</a>
					<a href="tennis.html?competition=7668&season=2022&i=${sub_id}">Abierto Tampico - Womens Singles</a>
					<a href="tennis.html?competition=7556&season=2022&i=${sub_id}">Abierto de Tenis Mifel - Mens Singles</a>
					<a href="tennis.html?competition=7357&season=2022&i=${sub_id}">Adelaide International 1 - Womens Singles</a>
					<a href="tennis.html?competition=7335&season=2022&i=${sub_id}">Adelaide International 1 - Mens Singles</a>
					<a href="tennis.html?competition=7313&season=2022&i=${sub_id}">Adelaide International 2 - Mens Singles</a>
					<a href="tennis.html?competition=7369&season=2022&i=${sub_id}">Adelaide International 2 - Womens Singles</a>
					<a href="tennis.html?competition=7538&season=2022&i=${sub_id}">Aguacalientes - Mens Singles</a>
					<a href="tennis.html?competition=7666&season=2022&i=${sub_id}">AnyTech365 Andalucia Open - Womens Singles</a>
					<a href="tennis.html?competition=7483&season=2022&i=${sub_id}">AnyTech365 Andalucia Open - Mens Singles</a>
					<a href="tennis.html?competition=7345&season=2022&i=${sub_id}">Argentina Open - Mens Singles</a>
					<a href="tennis.html?competition=7471&season=2022&i=${sub_id}">Arizona Tennis Classic - Mens Singles</a>
					<a href="tennis.html?competition=7578&season=2022&i=${sub_id}">Astana Open - Mens Singles</a>
					<a href="tennis.html?competition=7244&season=2022&i=${sub_id}">Australian Open - Mens Singles</a>
					<a href="tennis.html?competition=7246&season=2022&i=${sub_id}">Australian Open - Womens Singles</a>
					<a href="tennis.html?competition=7245&season=2022&i=${sub_id}">Australian Open - Mens Doubles</a>
					<a href="tennis.html?competition=7247&season=2022&i=${sub_id}">Australian Open - Womens Doubles</a>
					<a href="tennis.html?competition=7248&season=2022&i=${sub_id}">Australian Open - Mixed Doubles</a>
					<a href="tennis.html?competition=7652&season=2022&i=${sub_id}">BBVA Open Internacional De Valencia - Womens Singles</a>
					<a href="tennis.html?competition=7660&season=2022&i=${sub_id}">BCR Iasi Open - Womens Singles</a>
					<a href="tennis.html?competition=7403&season=2022&i=${sub_id}">BMW Open by American Express - Mens Singles</a>
					<a href="tennis.html?competition=7387&season=2022&i=${sub_id}">BNP Paribas Open - Mens Singles</a>
					<a href="tennis.html?competition=7388&season=2022&i=${sub_id}">BNP Paribas Open - Mens Doubles</a>
					<a href="tennis.html?competition=7273&season=2022&i=${sub_id}">BNP Paribas Open - Womens Singles</a>
					<a href="tennis.html?competition=7585&season=2022&i=${sub_id}">BNP Paribas Poland Open - Womens Singles</a>
					<a href="tennis.html?competition=7307&season=2022&i=${sub_id}">Bad Homburg Open presented by Engel & Volkers - Womens Singles</a>
					<a href="tennis.html?competition=7399&season=2022&i=${sub_id}">Barcelona Open Banc Sabadell - Mens Singles</a>
					<a href="tennis.html?competition=7510&season=2022&i=${sub_id}">Barletta - Mens Singles</a>
					<a href="tennis.html?competition=7347&season=2022&i=${sub_id}">Bendigo International - Mens Singles</a>
					<a href="tennis.html?competition=7375&season=2022&i=${sub_id}">Bengaluru Open 1 - Mens Singles</a>
					<a href="tennis.html?competition=7443&season=2022&i=${sub_id}">Bengaluru Open 2 - Mens Singles</a>
					<a href="tennis.html?competition=7303&season=2022&i=${sub_id}">Bett1 Open - Womens Singles</a>
					<a href="tennis.html?competition=7629&season=2022&i=${sub_id}">Bordeaux - Mens Singles</a>
					<a href="tennis.html?competition=7644&season=2022&i=${sub_id}">Budapest Open 125 - Womens Singles</a>
					<a href="tennis.html?competition=7540&season=2022&i=${sub_id}">Buenos Aires 2 - Mens Singles</a>
					<a href="tennis.html?competition=7672&season=2022&i=${sub_id}">Buenos Aires Open - Womens Singles</a>
					<a href="tennis.html?competition=7485&season=2022&i=${sub_id}">Challenger Banca stato Città di Lugano - Mens Singles</a>
					<a href="tennis.html?competition=7439&season=2022&i=${sub_id}">Challenger Cherbourg - La Manche - Mens Singles</a>
					<a href="tennis.html?competition=7469&season=2022&i=${sub_id}">Challenger Santiago Chile - Mens Singles</a>
					<a href="tennis.html?competition=7502&season=2022&i=${sub_id}">Challenger de Salinas I - Mens Singles</a>
					<a href="tennis.html?competition=7473&season=2022&i=${sub_id}">Challenger del Biobio - Mens Singles</a>
					<a href="tennis.html?competition=7603&season=2022&i=${sub_id}">Championnats Banque Nationale de Granby - Womens Singles</a>
					<a href="tennis.html?competition=7583&season=2022&i=${sub_id}">Chengdu Open - Mens Singles</a>
					<a href="tennis.html?competition=7385&season=2022&i=${sub_id}">Chile Dove Men+Care Open - Mens Singles</a>
					<a href="tennis.html?competition=7598&season=2022&i=${sub_id}">China Open - Mens Singles</a>
					<a href="tennis.html?competition=7421&season=2022&i=${sub_id}">Cinch Championships - Mens Singles</a>
					<a href="tennis.html?competition=7361&season=2022&i=${sub_id}">Circuito Dove Men Care - Mens Singles</a>
					<a href="tennis.html?competition=7500&season=2022&i=${sub_id}">Circuito Dove Men+Care Pereira - Mens Singles</a>
					<a href="tennis.html?competition=7558&season=2022&i=${sub_id}">Citi Open - Mens Singles</a>
					<a href="tennis.html?competition=7451&season=2022&i=${sub_id}">Citta' Di Forli' 1 - Mens Singles</a>
					<a href="tennis.html?competition=7359&season=2022&i=${sub_id}">Citta' Di Forli' 2 - Mens Singles</a>
					<a href="tennis.html?competition=7365&season=2022&i=${sub_id}">Citta' Di Forli' 3 - Mens Singles</a>
					<a href="tennis.html?competition=7445&season=2022&i=${sub_id}">Citta' Di Forli' 4 - Mens Singles</a>
					<a href="tennis.html?competition=7459&season=2022&i=${sub_id}">Citta' Di Forli' 5 - Mens Singles</a>
					<a href="tennis.html?competition=7373&season=2022&i=${sub_id}">Cleveland Open - Mens Singles</a>
					<a href="tennis.html?competition=7279&season=2022&i=${sub_id}">Copa Colsanitas presentado por Zurich - Womens Singles</a>
					<a href="tennis.html?competition=7695&season=2022&i=${sub_id}">Coquimbo - Mens Singles</a>
					<a href="tennis.html?competition=7337&season=2022&i=${sub_id}">Cordoba Open - Mens Singles</a>
					<a href="tennis.html?competition=7277&season=2022&i=${sub_id}">Credit One Charleston Open - Womens Singles</a>
					<a href="tennis.html?competition=7349&season=2022&i=${sub_id}">Dallas Open - Mens Singles</a>
					<a href="tennis.html?competition=7353&season=2022&i=${sub_id}">Delray Beach Open - Mens Singles</a>
					<a href="tennis.html?competition=7433&season=2022&i=${sub_id}">Dove Men+Care Challenger Bolivia - Mens Singles</a>
					<a href="tennis.html?competition=7494&season=2022&i=${sub_id}">Dove Men+Care Challenger Bolivia 2 - Mens Singles</a>
					<a href="tennis.html?competition=7363&season=2022&i=${sub_id}">Dove Men+Care Legion Sudamericana Concepcion - Mens Singles</a>
					<a href="tennis.html?competition=7355&season=2022&i=${sub_id}">Dove Men+Care Legion Sudamericana Tigre - Mens Singles</a>
					<a href="tennis.html?competition=7670&season=2022&i=${sub_id}">Dow Tennis Classic - Womens Singles</a>
					<a href="tennis.html?competition=7389&season=2022&i=${sub_id}">Dubai Duty Free Tennis Championships - Mens Singles</a>
					<a href="tennis.html?competition=7263&season=2022&i=${sub_id}">Dubai Duty Free Tennis Championships - Womens Singles</a>
					<a href="tennis.html?competition=7546&season=2022&i=${sub_id}">EFG Swiss Open Gstaad - Mens Singles</a>
					<a href="tennis.html?competition=7613&season=2022&i=${sub_id}">Erste Bank Open - Mens Singles</a>
					<a href="tennis.html?competition=7607&season=2022&i=${sub_id}">European Open - Mens Singles</a>
					<a href="tennis.html?competition=7520&season=2022&i=${sub_id}">Falkensteiner Punta Skala - Zadar Open - Mens Singles</a>
					<a href="tennis.html?competition=7393&season=2022&i=${sub_id}">Fayez Sarofim & Co. U.S. Men's Clay Court Championship - Mens Singles</a>
					<a href="tennis.html?competition=7481&season=2022&i=${sub_id}">FlowBank Challenger Biel/Bienne - Mens Singles</a>
					<a href="tennis.html?competition=7687&season=2022&i=${sub_id}">Francavilla - Mens Singles</a>
					<a href="tennis.html?competition=7295&season=2022&i=${sub_id}">French Open - Womens Singles</a>
					<a href="tennis.html?competition=7296&season=2022&i=${sub_id}">French Open - Womens Doubles</a>
					<a href="tennis.html?competition=7415&season=2022&i=${sub_id}">French Open - Mens Singles</a>
					<a href="tennis.html?competition=7416&season=2022&i=${sub_id}">French Open - Mens Doubles</a>
					<a href="tennis.html?competition=7432&season=2022&i=${sub_id}">French Open - Mixed Doubles</a>
					<a href="tennis.html?competition=7550&season=2022&i=${sub_id}">Generali Open - Mens Singles</a>
					<a href="tennis.html?competition=7411&season=2022&i=${sub_id}">Gonet Geneva Open - Mens Singles</a>
					<a href="tennis.html?competition=7488&season=2022&i=${sub_id}">Gran Canaria Challenger 1 - Mens Singles</a>
					<a href="tennis.html?competition=7658&season=2022&i=${sub_id}">Grand Est Open 88 - Womens Singles</a>
					<a href="tennis.html?competition=7291&season=2022&i=${sub_id}">Grand Prix De Sar La Princesse Lalla Meryem - Womens Singles</a>
					<a href="tennis.html?competition=7395&season=2022&i=${sub_id}">Grand Prix Hassan II - Mens Singles</a>
					<a href="tennis.html?competition=7575&season=2022&i=${sub_id}">Hamburg European Open - Womens Singles</a>
					<a href="tennis.html?competition=7548&season=2022&i=${sub_id}">Hamburg European Open - Mens Singles</a>
					<a href="tennis.html?competition=7631&season=2022&i=${sub_id}">Heilbronn - Mens Singles</a>
					<a href="tennis.html?competition=7573&season=2022&i=${sub_id}">Hungarian Grand Prix - Womens Singles</a>
					<a href="tennis.html?competition=7542&season=2022&i=${sub_id}">Infosys Hall of Fame Open - Mens Singles</a>
					<a href="tennis.html?competition=7289&season=2022&i=${sub_id}">Internationaux de Strasbourg - Womens Singles</a>
					<a href="tennis.html?competition=7409&season=2022&i=${sub_id}">Internazionali BNL d'Italia - Mens Singles</a>
					<a href="tennis.html?competition=7410&season=2022&i=${sub_id}">Internazionali BNL d'Italia - Mens Doubles</a>
					<a href="tennis.html?competition=7287&season=2022&i=${sub_id}">Internazionali BNL d'Italia - Womens Singles</a>
					<a href="tennis.html?competition=7618&season=2022&i=${sub_id}">Intesa Sanpaolo Next Gen ATP Finals - Mens Singles</a>
					<a href="tennis.html?competition=7640&season=2022&i=${sub_id}">L 'Open 35 de Saint-Malo - Womens Singles</a>
					<a href="tennis.html?competition=7569&season=2022&i=${sub_id}">Ladies Open Lausanne - Womens Singles</a>
					<a href="tennis.html?competition=7639&season=2022&i=${sub_id}">Laver Cup - Mens National_teams</a>
					<a href="tennis.html?competition=7417&season=2022&i=${sub_id}">Libema Open - Mens Singles</a>
					<a href="tennis.html?competition=7297&season=2022&i=${sub_id}">Libema Open - Womens Singles</a>
					<a href="tennis.html?competition=7648&season=2022&i=${sub_id}">Liqui Moly Open - Womens Singles</a>
					<a href="tennis.html?competition=7699&season=2022&i=${sub_id}">Little Rock Open - Mens Singles</a>
					<a href="tennis.html?competition=7581&season=2022&i=${sub_id}">Livesport Prague Open 2022 - Womens Singles</a>
					<a href="tennis.html?competition=7513&season=2022&i=${sub_id}">Madrid - Mens Singles</a>
					<a href="tennis.html?competition=7650&season=2022&i=${sub_id}">Makarska Open - Womens Singles</a>
					<a href="tennis.html?competition=7425&season=2022&i=${sub_id}">Mallorca Championships - Mens Singles</a>
					<a href="tennis.html?competition=7637&season=2022&i=${sub_id}">Mauthausen - Mens Singles</a>
					<a href="tennis.html?competition=7441&season=2022&i=${sub_id}">Melbourne Summer Set - Mens Singles</a>
					<a href="tennis.html?competition=7447&season=2022&i=${sub_id}">Melbourne Summer Set 1 - Womens Singles</a>
					<a href="tennis.html?competition=7449&season=2022&i=${sub_id}">Melbourne Summer Set 2 - Womens Singles</a>
					<a href="tennis.html?competition=7518&season=2022&i=${sub_id}">Mexico City - Mens Singles</a>
					<a href="tennis.html?competition=7275&season=2022&i=${sub_id}">Miami Open presented by Itau - Womens Singles</a>
					<a href="tennis.html?competition=7391&season=2022&i=${sub_id}">Miami Open presented by Itau - Mens Singles</a>
					<a href="tennis.html?competition=7392&season=2022&i=${sub_id}">Miami Open presented by Itau - Mens Doubles</a>
					<a href="tennis.html?competition=7405&season=2022&i=${sub_id}">Millennium Estoril Open - Mens Singles</a>
					<a href="tennis.html?competition=7674&season=2022&i=${sub_id}">Montevideo Open - Womens Singles</a>
					<a href="tennis.html?competition=7530&season=2022&i=${sub_id}">Morelos Challenger - Mens Singles</a>
					<a href="tennis.html?competition=7571&season=2022&i=${sub_id}">Moselle Open - Mens Singles</a>
					<a href="tennis.html?competition=7589&season=2022&i=${sub_id}">Mubadala Silicon Valley Classic - Womens Singles</a>
					<a href="tennis.html?competition=7504&season=2022&i=${sub_id}">Murcia Open - Mens Singles</a>
					<a href="tennis.html?competition=7407&season=2022&i=${sub_id}">Mutua Madrid Open - Mens Singles</a>
					<a href="tennis.html?competition=7408&season=2022&i=${sub_id}">Mutua Madrid Open - Mens Doubles</a>
					<a href="tennis.html?competition=7285&season=2022&i=${sub_id}">Mutua Madrid Open - Womens Singles</a>
					<a href="tennis.html?competition=7593&season=2022&i=${sub_id}">National Bank Open presented by Rogers - Womens Singles</a>
					<a href="tennis.html?competition=7560&season=2022&i=${sub_id}">National Bank Open presented by Rogers - Mens Singles</a>
					<a href="tennis.html?competition=7561&season=2022&i=${sub_id}">National Bank Open presented by Rogers - Mens Doubles</a>
					<a href="tennis.html?competition=7619&season=2022&i=${sub_id}">Nitto ATP Finals - Mens Singles</a>
					<a href="tennis.html?competition=7620&season=2022&i=${sub_id}">Nitto ATP Finals - Mens Doubles</a>
					<a href="tennis.html?competition=7656&season=2022&i=${sub_id}">Nordea Open - Womens Singles</a>
					<a href="tennis.html?competition=7544&season=2022&i=${sub_id}">Nordea Open - Mens Singles</a>
					<a href="tennis.html?competition=7664&season=2022&i=${sub_id}">Odlum Brown Vanopen - Womens Singles</a>
					<a href="tennis.html?competition=7496&season=2022&i=${sub_id}">Oeiras Challenger 1 - Mens Singles</a>
					<a href="tennis.html?competition=7377&season=2022&i=${sub_id}">Open 13 Provence - Mens Singles</a>
					<a href="tennis.html?competition=7271&season=2022&i=${sub_id}">Open 6ème Sens Métropole de Lyon - Womens Singles</a>
					<a href="tennis.html?competition=7676&season=2022&i=${sub_id}">Open Angers Arena Loire - Womens Singles</a>
					<a href="tennis.html?competition=7678&season=2022&i=${sub_id}">Open BLS de Limoges - Womens Singles</a>
					<a href="tennis.html?competition=7413&season=2022&i=${sub_id}">Open Parc Auvergne-Rhone-Alpes Lyon - Mens Singles</a>
					<a href="tennis.html?competition=7625&season=2022&i=${sub_id}">Open Pays d'Aix CEPAC - Mens Singles</a>
					<a href="tennis.html?competition=7370&season=2022&i=${sub_id}">Open Quimper Bretagne Occidentale - Mens Singles</a>
					<a href="tennis.html?competition=7498&season=2022&i=${sub_id}">Open Saint-Brieuc Harmonie Mutuelle - Mens Singles</a>
					<a href="tennis.html?competition=7339&season=2022&i=${sub_id}">Open Sud de France - Mens Singles</a>
					<a href="tennis.html?competition=7534&season=2022&i=${sub_id}">Ostrava - Mens Singles</a>
					<a href="tennis.html?competition=7552&season=2022&i=${sub_id}">Plava Laguna Croatia Open Umag - Mens Singles</a>
					<a href="tennis.html?competition=7477&season=2022&i=${sub_id}">Play In Challenger - Mens Singles</a>
					<a href="tennis.html?competition=7281&season=2022&i=${sub_id}">Porsche Tennis Grand Prix - Womens Singles</a>
					<a href="tennis.html?competition=7627&season=2022&i=${sub_id}">Prague 2 - Mens Singles</a>
					<a href="tennis.html?competition=7526&season=2022&i=${sub_id}">Prague I - Mens Singles</a>
					<a href="tennis.html?competition=7680&season=2022&i=${sub_id}">Puerto Vallarta Open - Womens Singles</a>
					<a href="tennis.html?competition=7379&season=2022&i=${sub_id}">Qatar ExxonMobil Open - Mens Singles</a>
					<a href="tennis.html?competition=7265&season=2022&i=${sub_id}">Qatar Total Energies Open - Womens Singles</a>
					<a href="tennis.html?competition=7605&season=2022&i=${sub_id}">Rakuten Japan Open Tennis Championships - Mens Singles</a>
					<a href="tennis.html?competition=7492&season=2022&i=${sub_id}">Regione Abruzzo Aterno Gas & Power Cup - Mens Singles</a>
					<a href="tennis.html?competition=7381&season=2022&i=${sub_id}">Rio Open presented by Claro - Mens Singles</a>
					<a href="tennis.html?competition=7397&season=2022&i=${sub_id}">Rolex Monte-Carlo Masters - Mens Singles</a>
					<a href="tennis.html?competition=7398&season=2022&i=${sub_id}">Rolex Monte-Carlo Masters - Mens Doubles</a>
					<a href="tennis.html?competition=7318&season=2022&i=${sub_id}">Rolex Paris Masters - Mens Singles</a>
					<a href="tennis.html?competition=7617&season=2022&i=${sub_id}">Rolex Paris Masters - Mens Doubles</a>
					<a href="tennis.html?competition=7621&season=2022&i=${sub_id}">Rolex Shanghai Masters - Mens Singles</a>
					<a href="tennis.html?competition=7622&season=2022&i=${sub_id}">Rolex Shanghai Masters - Mens Doubles</a>
					<a href="tennis.html?competition=7536&season=2022&i=${sub_id}">Rome 1 - Mens Singles</a>
					<a href="tennis.html?competition=7490&season=2022&i=${sub_id}">Roseto Degli Abruzzi 1 - Mens Singles</a>
					<a href="tennis.html?competition=7301&season=2022&i=${sub_id}">Rothesay Classic Birmingham - Womens Singles</a>
					<a href="tennis.html?competition=7427&season=2022&i=${sub_id}">Rothesay International Eastbourne - Mens Singles</a>
					<a href="tennis.html?competition=7305&season=2022&i=${sub_id}">Rothesay International Eastbourne - Womens Singles</a>
					<a href="tennis.html?competition=7299&season=2022&i=${sub_id}">Rothesay Open Nottingham - Womens Singles</a>
					<a href="tennis.html?competition=7693&season=2022&i=${sub_id}">Salvador De Bahia - Mens Singles</a>
					<a href="tennis.html?competition=7514&season=2022&i=${sub_id}">San Luis Potosi - Mens Singles</a>
					<a href="tennis.html?competition=7508&season=2022&i=${sub_id}">Sanremo - Mens Singles</a>
					<a href="tennis.html?competition=7516&season=2022&i=${sub_id}">Sarasota - Mens Singles</a>
					<a href="tennis.html?competition=7532&season=2022&i=${sub_id}">Savannah Challenger - Mens Singles</a>
					<a href="tennis.html?competition=7401&season=2022&i=${sub_id}">Serbia Open - Mens Singles</a>
					<a href="tennis.html?competition=7633&season=2022&i=${sub_id}">Shymkent Challenger - Mens Singles</a>
					<a href="tennis.html?competition=7683&season=2022&i=${sub_id}">Shymkent Challenger II - Mens Singles</a>
					<a href="tennis.html?competition=7587&season=2022&i=${sub_id}">Sofia Open - Mens Singles</a>
					<a href="tennis.html?competition=7623&season=2022&i=${sub_id}">Split - Mens Singles</a>
					<a href="tennis.html?competition=7261&season=2022&i=${sub_id}">St. Petersburg Ladies Trophy - Womens Singles</a>
					<a href="tennis.html?competition=7609&season=2022&i=${sub_id}">Stockholm Open - Mens Singles</a>
					<a href="tennis.html?competition=7691&season=2022&i=${sub_id}">Surbiton - Mens Singles</a>
					<a href="tennis.html?competition=7615&season=2022&i=${sub_id}">Swiss Indoors Basel - Mens Singles</a>
					<a href="tennis.html?competition=7455&season=2022&i=${sub_id}">Sydney Tennis Classic - Mens Singles</a>
					<a href="tennis.html?competition=7453&season=2022&i=${sub_id}">Sydney Tennis Classic - Womens Singles</a>
					<a href="tennis.html?competition=7283&season=2022&i=${sub_id}">TEB BNP Paribas Tennis Championship Istanbul - Womens Singles</a>
					<a href="tennis.html?competition=7524&season=2022&i=${sub_id}">Tallahassee Tennis Challenger - Mens Singles</a>
					<a href="tennis.html?competition=7341&season=2022&i=${sub_id}">Tata Open Maharashtra - Mens Singles</a>
					<a href="tennis.html?competition=7367&season=2022&i=${sub_id}">Tennis Ohio Championships - Mens Singles</a>
					<a href="tennis.html?competition=7597&season=2022&i=${sub_id}">Tennis in the Land - Womens Singles</a>
					<a href="tennis.html?competition=7457&season=2022&i=${sub_id}">Terega Open - Mens Singles</a>
					<a href="tennis.html?competition=7423&season=2022&i=${sub_id}">Terra Wortmann Open - Mens Singles</a>
					<a href="tennis.html?competition=7662&season=2022&i=${sub_id}">Thoreau Tennis Open 125 - Womens Singles</a>
					<a href="tennis.html?competition=7351&season=2022&i=${sub_id}">Traralgon International - Mens Singles</a>
					<a href="tennis.html?competition=7697&season=2022&i=${sub_id}">Troisdorf - Mens Singles</a>
					<a href="tennis.html?competition=7646&season=2022&i=${sub_id}">Trophee Lagardere - Womens Singles</a>
					<a href="tennis.html?competition=7554&season=2022&i=${sub_id}">Truist Atlanta Open presented by Fiserv - Mens Singles</a>
					<a href="tennis.html?competition=7685&season=2022&i=${sub_id}">Tunis Open - Mens Singles</a>
					<a href="tennis.html?competition=7522&season=2022&i=${sub_id}">Turin - Mens Singles</a>
					<a href="tennis.html?competition=7566&season=2022&i=${sub_id}">US Open - Mens Singles</a>
					<a href="tennis.html?competition=7567&season=2022&i=${sub_id}">US Open - Mens Doubles</a>
					<a href="tennis.html?competition=7568&season=2022&i=${sub_id}">US Open - Mixed Doubles</a>
					<a href="tennis.html?competition=7601&season=2022&i=${sub_id}">US Open - Womens Singles</a>
					<a href="tennis.html?competition=7602&season=2022&i=${sub_id}">US Open - Womens Doubles</a>
					<a href="tennis.html?competition=7654&season=2022&i=${sub_id}">Veneto Open Internazionali Confindustria Venezia E Rovigo - Womens Singles</a>
					<a href="tennis.html?competition=7689&season=2022&i=${sub_id}">Vicenza Challenger - Mens Singles</a>
					<a href="tennis.html?competition=7419&season=2022&i=${sub_id}">Weissenhof - Mens Singles</a>
					<a href="tennis.html?competition=7595&season=2022&i=${sub_id}">Western & Southern Open - Womens Singles</a>
					<a href="tennis.html?competition=7562&season=2022&i=${sub_id}">Western & Southern Open - Mens Singles</a>
					<a href="tennis.html?competition=7563&season=2022&i=${sub_id}">Western & Southern Open - Mens Doubles</a>
					<a href="tennis.html?competition=7309&season=2022&i=${sub_id}">Wimbledon - Womens Singles</a>
					<a href="tennis.html?competition=7310&season=2022&i=${sub_id}">Wimbledon - Womens Doubles</a>
					<a href="tennis.html?competition=7429&season=2022&i=${sub_id}">Wimbledon - Mens Singles</a>
					<a href="tennis.html?competition=7430&season=2022&i=${sub_id}">Wimbledon - Mens Doubles</a>
					<a href="tennis.html?competition=7431&season=2022&i=${sub_id}">Wimbledon - Mixed Doubles</a>
					<a href="tennis.html?competition=7564&season=2022&i=${sub_id}">Winston-Salem Open - Mens Singles</a>
					<a href="tennis.html?competition=7635&season=2022&i=${sub_id}">Zagreb Open - Mens Singles</a>
					<a href="tennis.html?competition=7642&season=2022&i=${sub_id}">Zavarovalnica Sava Portoroz - Womens Singles</a>
					<a href="tennis.html?competition=7591&season=2022&i=${sub_id}">Zhuhai Championships - Mens Singles</a>
				</div>
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
					<a href="cricket.html?competition=2722&season=0&i=${sub_id}">England&nbsp;v&nbsp;India&nbsp;Test&nbsp;Series&nbsp;2021/2022</a>
					<a href="cricket.html?competition=2780&season=0&i=${sub_id}">IPL 2021</a>
					<a href="cricket.html?competition=2781&season=0&i=${sub_id}">ICC World Test Championship Final 2021</a>
					<a href="cricket.html?competition=2784&season=0&i=${sub_id}">West Indies v England Twenty20 Series 2022</a>
					<a href="cricket.html?competition=2785&season=0&i=${sub_id}">West Indies v England Test Series 2022</a>
					<a href="cricket.html?competition=2813&season=0&i=${sub_id}">Australia v England Test Series 2021/2022</a>
					<a href="cricket.html?competition=2816&season=0&i=${sub_id}">Australia v Sri Lanka Twenty20 Series 2022</a>
					<a href="cricket.html?competition=2831&season=0&i=${sub_id}">Weber Women's Big Bash League 2021</a>
					<a href="cricket.html?competition=2832&season=0&i=${sub_id}">KFC T20 Big Bash League 2021/2022</a>
					<a href="cricket.html?competition=2852&season=0&i=${sub_id}">ICC Men's T20 World Cup 2021</a>
					<a href="cricket.html?competition=2856&season=0&i=${sub_id}">England v New Zealand Test Series 2022</a>
					<a href="cricket.html?competition=2857&season=0&i=${sub_id}">England v India Twenty20 Series 2022</a>
					<a href="cricket.html?competition=2858&season=0&i=${sub_id}">England v India ODI Series 2022</a>
					<a href="cricket.html?competition=2859&season=0&i=${sub_id}">England v South Africa ODI Series 2022</a>
					<a href="cricket.html?competition=2860&season=0&i=${sub_id}">England v South Africa Twenty20 Series 2022</a>
					<a href="cricket.html?competition=2861&season=0&i=${sub_id}">England v South Africa Test Series 2022</a>
					<a href="cricket.html?competition=2863&season=0&i=${sub_id}">South Africa v India Test Series 2021/2022</a>
					<a href="cricket.html?competition=2864&season=0&i=${sub_id}">South Africa v India ODI Series 2022</a>
					<a href="cricket.html?competition=2868&season=0&i=${sub_id}">South Africa v Bangladesh ODI Series 2022</a>
					<a href="cricket.html?competition=2869&season=0&i=${sub_id}">South Africa v Bangladesh Test Series 2022</a>
					<a href="cricket.html?competition=2878&season=0&i=${sub_id}">India v West Indies ODI Series 2022</a>
					<a href="cricket.html?competition=2879&season=0&i=${sub_id}">India v West Indies Twenty20 Series 2022</a>
					<a href="cricket.html?competition=2880&season=0&i=${sub_id}">India v Sri Lanka Test Series 2022</a>
					<a href="cricket.html?competition=2881&season=0&i=${sub_id}">India v Sri Lanka Twenty20 Series 2022</a>
					<a href="cricket.html?competition=2882&season=0&i=${sub_id}">India v South Africa Twenty20 Series 2022</a>
					<a href="cricket.html?competition=2886&season=0&i=${sub_id}">Netherlands v England ODI Series 2022</a>
					<a href="cricket.html?competition=2903&season=0&i=${sub_id}">Pakistan v Australia Test Series 2022</a>
					<a href="cricket.html?competition=2904&season=0&i=${sub_id}">Pakistan v Australia ODI Series 2022</a>
					<a href="cricket.html?competition=2905&season=0&i=${sub_id}">Pakistan v Australia Only Twenty20 2022</a>
					<a href="cricket.html?competition=2908&season=0&i=${sub_id}">New Zealand v Bangladesh Test Series 2022</a>
					<a href="cricket.html?competition=2911&season=0&i=${sub_id}">New Zealand v South Africa Test Series 2022</a>
					<a href="cricket.html?competition=2913&season=0&i=${sub_id}">New Zealand v Netherlands Only Twenty20 2022</a>
					<a href="cricket.html?competition=2914&season=0&i=${sub_id}">New Zealand v Netherlands ODI Series 2022</a>
					<a href="cricket.html?competition=2917&season=0&i=${sub_id}">West Indies v Ireland ODI Series 2022</a>
					<a href="cricket.html?competition=2920&season=0&i=${sub_id}">Afghanistan v Netherlands ODI Series in Qatar 2022</a>
					<a href="cricket.html?competition=2922&season=0&i=${sub_id}">Sri Lanka v Zimbabwe ODI Series 2022</a>
					<a href="cricket.html?competition=2934&season=0&i=${sub_id}">New Zealand in England Tour Matches 2022</a>
					<a href="cricket.html?competition=2938&season=0&i=${sub_id}">South Africa in England Tour Matches 2022</a>
					<a href="cricket.html?competition=2939&season=0&i=${sub_id}">India in England Tour Matches 2022</a>
					<a href="cricket.html?competition=2940&season=0&i=${sub_id}">ICC Men's T20 World Cup 2022</a>
					<a href="cricket.html?competition=2945&season=0&i=${sub_id}">Bangladesh v Afghanistan ODI Series 2022</a>
					<a href="cricket.html?competition=2946&season=0&i=${sub_id}">Bangladesh v Afghanistan Twenty20 Series 2022</a>
					<a href="cricket.html?competition=2953&season=0&i=${sub_id}">Netherlands v West Indies ODI Series 2022</a>
					<a href="cricket.html?competition=2954&season=0&i=${sub_id}">Ireland v India Twenty20 Series 2022</a>
					<a href="cricket.html?competition=2955&season=0&i=${sub_id}">Ireland v New Zealand ODI Series 2022</a>
					<a href="cricket.html?competition=2956&season=0&i=${sub_id}">Ireland v New Zealand Twenty20 Series 2022</a>
					<a href="cricket.html?competition=2957&season=0&i=${sub_id}">Ireland v South Africa Twenty20 Series in England 2022</a>
					<a href="cricket.html?competition=2960&season=0&i=${sub_id}">IPL 2022</a>
					<a href="cricket.html?competition=2966&season=0&i=${sub_id}">Nepal v Papua New Guinea ODI Series 2022</a>
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
				<div class="dropdown-content">
					<!--<a href="mlb.html?competition=n0amm59n1m59y0auuk93hexg&season=1jl9m4m9c863xko7es6a6ecr8&i=${sub_id}">USA - Major League Baseball</a>-->
				</div>
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

/*************************************************************************************************************************************************************/

/*FOOTBALL*/
if(document.location.href.indexOf('football.html') >= 0){//check that this is the football page

	switch(query['competition']){

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

/*BASKETBALL*/
if(document.location.href.indexOf('basketball.html') >= 0){
	switch(query['competition']){
		case '5wdi9kmiurd2rjx2f7ew92wm6'://NBL

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
			template="normal" navigation="tabs" default_nav="1" show_categories="all" show_rank="true" show_key="true" show_crests="true" sorting="true" team_naming="full" show_logo="false" show_title="true" breakpoints="460" sport="basketball"></opta-widget>
		`)

		break;
	}
}
/*BASKETBALL*/

/*TENNIS*/
if(document.location.href.indexOf('tennis.html') >= 0){
	switch(query['competition']){

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

		let fixturesTopLeft = document.getElementsByClassName('fixtures-top-left')[0]
		let matchSummary = document.getElementById('match-centre-top-left')
		let standingsWidget = document.getElementById('standings-widget')

		fixturesTopLeft.innerHTML = (`
			<opta-widget widget="live_scores" 
			competition="7244" 
			season="2022" 
			template="normal" live="true" match_status="all" grouping="round" show_grouping="true" limit="0" navigation="tabs_scroll" default_nav="1" start_on_current="true" sub_grouping="date" show_subgrouping="true" order_by="date_ascending" show_nationality="true" date_format="dddd D MMMM YYYY" competition_naming="full" player_naming="full" show_live="true" show_logo="false" show_title="true" breakpoints="400" 
			sport="tennis"
			></opta-widget>
		`)

		standingsWidget.innerHTML=(``)

		break;
	}
}
/*TENNIS*/

/*GOLF*/
if(document.location.href.indexOf('golf.html') >= 0){
	switch(query['competition']){
		case '3c5msl8moic00eu49b06aumsp'://PGA Tour

		let fixturesTopLeft = document.getElementsByClassName('fixtures-top-left')[0]
		let matchSummary = document.getElementById('match-centre-top-left')
		let standingsWidget = document.getElementById('standings-widget')

		fixturesTopLeft.innerHTML = (`

			<opta-widget widget="schedule" 
			template="normal" 
			competition="${query['competition']}" 
			season="${query['season']}" 
			order_by="date_ascending" show_date="true" date_format="D MMM" show_dates_combined="false" show_course_name="true" show_winner="true" show_logo="false" show_title="true" breakpoints="400" sport="golf"></opta-widget>
		`)

		standingsWidget.innerHTML=(``)

		break;
	}
}
/*GOLF*/

/*CRICKET*/
if(document.location.href.indexOf('cricket.html') >= 0){
	console.log(query['competition'])
	switch(query['competition']){
		case 2722://England v India Test Series 2021/2022
		case 2780://IPL 2021
		case 2781://ICC World Test Championship Final 2021
		case 2784://West Indies v England Twenty20 Series 2022
		case 2785://West Indies v England Test Series 2022
		case 2813://Australia v England Test Series 2021/2022
		case 2816://Australia v Sri Lanka Twenty20 Series 2022
		case 2831://Weber Women's Big Bash League 2021
		case 2832://KFC T20 Big Bash League 2021/2022
		case 2852://ICC Men's T20 World Cup 2021
		case 2856://England v New Zealand Test Series 2022
		case 2857://England v India Twenty20 Series 2022
		case 2858://England v India ODI Series 2022
		case 2859://England v South Africa ODI Series 2022
		case 2860://England v South Africa Twenty20 Series 2022
		case 2861://England v South Africa Test Series 2022
		case 2863://South Africa v India Test Series 2021/2022
		case 2864://South Africa v India ODI Series 2022
		case 2868://South Africa v Bangladesh ODI Series 2022
		case 2869://South Africa v Bangladesh Test Series 2022
		case 2878://India v West Indies ODI Series 2022
		case 2879://India v West Indies Twenty20 Series 2022
		case 2880://India v Sri Lanka Test Series 2022
		case 2881://India v Sri Lanka Twenty20 Series 2022
		case 2882://India v South Africa Twenty20 Series 2022
		case 2886://Netherlands v England ODI Series 2022
		case 2903://Pakistan v Australia Test Series 2022
		case 2904://Pakistan v Australia ODI Series 2022
		case 2905://Pakistan v Australia Only Twenty20 2022
		case 2908://New Zealand v Bangladesh Test Series 2022
		case 2911://New Zealand v South Africa Test Series 2022
		case 2913://New Zealand v Netherlands Only Twenty20 2022
		case 2914://New Zealand v Netherlands ODI Series 2022
		case 2917://West Indies v Ireland ODI Series 2022
		case 2920://Afghanistan v Netherlands ODI Series in Qatar 2022
		case 2922://Sri Lanka v Zimbabwe ODI Series 2022
		case 2934://New Zealand in England Tour Matches 2022
		case 2938://South Africa in England Tour Matches 2022
		case 2939://India in England Tour Matches 2022
		case 2940://ICC Men's T20 World Cup 2022
		case 2945://Bangladesh v Afghanistan ODI Series 2022
		case 2946://Bangladesh v Afghanistan Twenty20 Series 2022
		case 2953://Netherlands v West Indies ODI Series 2022
		case 2954://Ireland v India Twenty20 Series 2022
		case 2955://Ireland v New Zealand ODI Series 2022
		case 2956://Ireland v New Zealand Twenty20 Series 2022
		case 2957://Ireland v South Africa Twenty20 Series in England 2022
		case 2960://IPL 2022
		case 2966://Nepal v Papua New Guinea ODI Series 2022

		let fixturesTopLeft = document.getElementsByClassName('fixtures-top-left')[0]
		let matchSummary = document.getElementById('match-centre-top-left')
		let standingsWidget = document.getElementById('standings-widget')

		fixturesTopLeft.innerHTML = (`
			<opta-widget widget="fixtures" 
			fixtures_type="m" 
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
			show_competition_name="true" 
			date_format="dddd D MMMM YYYY" 
			month_date_format="MMMM" 
			competition_naming="full" 
			team_naming="full" 
			pre_match="false" 
			show_live="true" 
			show_logo="false" 
			show_title="true" 
			breakpoints="400" 
			sport="cricket"
			></opta-widget>
		`)
	}
}
/*CRICKET*/

/*MOTORSPORT*/
if(document.location.href.indexOf('motorsport.html') >= 0){
	switch(query['competition']){
		case '1m5x4n07f2kqkiczebja5etiq'://FIA F1 World Championship
		case '2e554vbpw7g0ykhl0rziuabxl'://FIM MotoGP World Championship
		case '2ecsbewwstw5jn9h7kpv2joix'://V8 Supercars

		let fixturesTopLeft = document.getElementsByClassName('fixtures-top-left')[0]
		let matchSummary = document.getElementById('match-centre-top-left')
		let standingsWidget = document.getElementById('standings-widget')

		// fixturesTopLeft.innerHTML = (`
		// 	<opta-widget widget="scoreboard" 
		// 	competition="${query['competition']}" 
		// 	season="${query['season']}" 
		// 	template="normal" live="true" show_venue="true" grouping="date" show_grouping="true" show_date_picker="true" navigation="tabs_scroll" default_nav="1" start_on_current="true" order_by="date_ascending" away_team_first="false" show_crests="true" date_format="dddd D MMMM YYYY" time_format="HH:mm" month_date_format="MMMM" competition_naming="full" team_naming="full" pre_match="false" show_live="true" show_logo="false" show_title="false" breakpoints="400" sport="basketball"></opta-widget>
		// `)

		fixturesTopLeft.innerHTML=(`
			<opta-widget widget="standings" 
			competition="${query['competition']}" 
			season="${query['season']}" 
			template="normal" navigation="tabs" default_nav="1" show_drivers="true" show_constructors="true" show_wins="true" team_naming="full" driver_naming="full" show_logo="false" limit="10" show_title="true" breakpoints="460" sport="motorsport"></opta-widget>
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

/*US Sports*/
if(document.location.href.indexOf('mlb.html') >= 0){//baseball
	let fixturesTopLeft = document.getElementsByClassName('fixtures-top-left')[0]
	let matchSummary = document.getElementById('match-centre-top-left')
	let standingsWidget = document.getElementById('standings-widget')
	fixturesTopLeft.innerHTML=(`
		<opta-widget widget="scoreboard" competition="n0amm59n1m59y0auuk93hexg" season="1jl9m4m9c863xko7es6a6ecr8" template="normal" live="true" show_venue="true" grouping="date" show_date_picker="true" navigation="tabs_scroll" default_nav="1" start_on_current="true" order_by="date_ascending" away_team_first="false" show_crests="false" show_date="true" date_format="dddd D MMMM YYYY" time_format="HH:mm" team_naming="full" pre_match="false" show_live="true" show_logo="false" show_title="true" breakpoints="400" sport="baseball"></opta-widget>
	`)
}
/*US Sports*/

/*Olympics*/

/*Olympics*/

/*RUGBY UNION*/
if(document.location.href.indexOf('rugbyunion.html') >= 0){
	switch(query['competition']){
		case '3'://International
		case '205'://Super Rugby Pacific
		case '209'://Six Nations
		case '210'://Rugby World Cup
		case '214'://The Rugby Championship
		case '221'://British & Irish Lions
		case '249'://Women's Rugby World Cup

		let fixturesTopLeft = document.getElementsByClassName('fixtures-top-left')[0]
		let matchSummary = document.getElementById('match-centre-top-left')
		let standingsWidget = document.getElementById('standings-widget')

		fixturesTopLeft.innerHTML = (`
			<opta-widget widget="fixtures" 
			competition="${query['competition']}" 
			season="${query['season']}" 
			template="normal" live="true" show_venue="true" match_status="all" grouping="date" show_grouping="true" navigation="tabs_more" default_nav="1" start_on_current="true" sub_grouping="date" show_subgrouping="false" order_by="date_ascending" show_crests="true" date_format="dddd D MMMM YYYY" month_date_format="MMMM" competition_naming="full" team_naming="full" pre_match="false" show_live="true" show_logo="false" show_title="true" breakpoints="400" 
			sport="rugby"
			><opta-widget sport="rugby" widget="match_summary" template="normal" live="" competition="" season="" match="" show_match_header="false" show_crests="false" show_cards="true" show_date="true" date_format="dddd D MMMM YYYY" show_competition_name="true" competition_naming="full" show_referee="true" show_venue="true" show_tooltips="false" show_tries="true" show_conversions="true" show_penalties="true" show_drop_goals="all" show_subs="true" show_cards="all" team_link="" player_link="" team_naming="" player_naming="last_name" show_live="false" show_logo="true" title="" show_title="true" breakpoints="400"></opta-widget></opta-widget>
		`)

		standingsWidget.innerHTML=(`
			<opta-widget widget="standings" 
			competition="3" 
			season="2023" 
			template="normal" live="true" navigation="tabs" default_nav="1" show_key="true" show_crests="false" points_in_first_column="false" show_form="6" competition_naming="full" team_naming="full" date_format="dddd D MMMM YYYY" sorting="true" show_live="true" show_logo="false" show_title="true" breakpoints="400,700" 
			sport="rugby"
			></opta-widget>`)

		break;
	}
}
/*RUGBY UNION*/

/*RUGBY LEAGUE*/
if(document.location.href.indexOf('rugbyleague.html') >= 0){
	switch(query['competition']){
		case '3'://National Rugby League
		case '6'://State of Origin
		case '86'://NRL Women's Premiership
		case '87'://Women's State of Origin

		let fixturesTopLeft = document.getElementsByClassName('fixtures-top-left')[0]
		let matchSummary = document.getElementById('match-centre-top-left')
		let standingsWidget = document.getElementById('standings-widget')

		fixturesTopLeft.innerHTML = (`
			<opta-widget widget="fixtures" 
			competition="${query['competition']}" 
			season="${query['season']}" 
			template="normal" live="true" show_venue="true" match_status="all" grouping="date" show_grouping="true" navigation="tabs_more" default_nav="1" start_on_current="true" sub_grouping="date" show_subgrouping="false" order_by="date_ascending" show_crests="true" date_format="dddd D MMMM YYYY" month_date_format="MMMM" competition_naming="full" team_naming="full" pre_match="false" show_live="true" show_logo="false" show_title="true" breakpoints="400" 
			sport="rugbyleague"
			><opta-widget sport="rugbyleague" widget="match_summary" template="normal" live="" competition="" season="" match="" show_match_header="false" show_crests="false" show_cards="true" show_date="true" date_format="dddd D MMMM YYYY" show_competition_name="true" competition_naming="full" show_referee="true" show_venue="true" show_tooltips="false" show_tries="true" show_conversions="true" show_penalties="true" show_drop_goals="all" show_subs="true" show_cards="all" team_link="" player_link="" team_naming="" player_naming="last_name" show_live="false" show_logo="true" title="" show_title="true" breakpoints="400"></opta-widget></opta-widget>
		`)

		standingsWidget.innerHTML=(`
			<opta-widget widget="standings" 
			competition="3" 
			season="2022" template="normal" live="true" navigation="tabs" default_nav="1" show_key="true" show_crests="false" points_in_first_column="false" show_form="6" competition_naming="full" team_naming="full" date_format="dddd D MMMM YYYY" sorting="true" show_live="true" show_logo="false" show_title="true" breakpoints="400,700" 
			sport="rugbyleague
			"></opta-widget>`)

		break;
	}
}
/*RUGBY LEAGUE*/
console.warn('1531')
/*AFL*/
if(document.location.href.indexOf('afl.html') >= 0){
	switch(query['competition']){
		case '11686'://AFL
		case '11595'://AFLW

		let fixturesTopLeft = document.getElementsByClassName('fixtures-top-left')[0]
		let matchSummary = document.getElementById('match-centre-top-left')
		let standingsWidget = document.getElementById('standings-widget')

		fixturesTopLeft.innerHTML = (`
			<opta-widget widget="fixtures" 
			template="normal" 
			competition="${query['competition']}" 
			season="${query['season']}" 
			show_venue="true" match_status="all" grouping="date" show_grouping="true" navigation="tabs_scroll" default_nav="1" show_date_picker="true" start_on_current="true" sub_grouping="date" show_subgrouping="false" order_by="date_ascending" away_team_first="false" show_crests="true" date_format="ll" time_format="HH:mm" month_date_format="MMMM" pre_match="false" show_logo="false" show_title="true" breakpoints="400" 
			sport="afl"
			></opta-widget>
		`)

		standingsWidget.innerHTML=(`
			<opta-widget widget="standings" 
			template="normal" 
			competition="${query['competition']}" 
			season="${query['season']}" 
			show_rank="true" show_key="true" sorting="true" show_logo="false" show_title="true" breakpoints="460" 
			sport="afl"
			></opta-widget>
		`)

		break;
	}
}
/*AFL*/

/*************************************************************************************************************************************************************/

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