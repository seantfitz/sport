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

//function to construct navigation menu - this will need to be edited to accommodate menu curation
const constructNav = ()=>{

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
			<select name="football" size="0">
				<option value="null" disabled selected>Select Competition</option>
				<option value="fixtures|football|8|2021">English Premier League</option>
				<option value="fixtures|football|5|2021">Champions League</option>
				<option value="fixtures|football|6|2021">UEFA Europa League</option>
				<option value="fixtures|football|4|2022">World Cup</option>
				<option value="fixtures|football|408|2022">Women's World Cup</option>
				<option value="fixtures|football|23|2021">Spanish La Liga</option>
				<option value="fixtures|football|21|2021">Italian Serie A</option>
				<option value="fixtures|football|22|2021">German Bundesliga</option>
				<option value="fixtures|football|24|2021">French Ligue 1</option>
				<option value="fixtures|football|1125|2021">UEFA Europa Conference League</option>
				<option value="fixtures|football|88|2022">Internationals</option>
				<option value="fixtures|football|551|2022">Internationals Women</option>
			</select>
		</div>

		<div class="dropdown"><button class="sport_button" name="nfl">NFL</button></div>
		<div class="dropdown"><button class="sport_button" name="nba">NBA</button></div>
		<div class="dropdown"><button class="sport_button" name="mlb">Baseball</button></div>

		<div class="dropdown">
			<button name="golf">PGA Tour</button>
			<select name="golf" size="0">
				<option value="null" disabled selected>Select Tournament</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|18yplyv63nvempg754v3n7ro">Fortinet Championship 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|4w92lfpwekuw4540bcn7e02dw">Sanderson Farms Championship 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|c7zprf6boimr76qyg7o5f9o9g">Shriners Children's Open 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|cqp7zwj2e8p57tzzor78pjaqc">CJ Cup 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|3p8r0uf7hnuzogcx3yfj1n85w">Zozo Championship 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|2xn6tvp73zj7mi74iwcvtp6hg">Bermuda Championship 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|9yvf32hknprfayygf74v0cis4">World Wide Technology Championship at Mayakoba 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|3fj3ql60p10jr6it2xtgncmxg">Houston Open 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|diki72qkk78m9bk20i3sefxn8">The RSM Classic 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|55md7quoblp1d05o5s7ibfaj8">Hero World Challenge 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|1are53lbn6a3yp9k8m8gb52c4">Sentry Tournament of Champions 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|1t6fz5nnv6trhcvu5efiikcgk">Sony Open in Hawaii 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|6z9hwz0wihtcz75a0wlposl5g">The American Express 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|clfuxmmehe2g2j2ld9wkfzi8k">Farmers Insurance Open 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|2pgnfiojm9o23rb1j4y8o7ml0">AT&T Pebble Beach Pro-Am 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|7d86vgb3joqox4q3ztov7kqhg">Waste Management Phoenix Open 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|f36l5by9jzdyrabdifq5yp0r8">The Genesis Invitational 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|46du9wjcwnvohuonz8xvktvro">The Honda Classic 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|4eo03r63w2ykotbu6hod314wk">Arnold Palmer Invitational 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|ep8g33afkpoa84b33da26rvh0">Puerto Rico Open 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|8ah1du618msplo7p5b1naxmhg">The Players Championship 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|eysv5tdrpt0xnugzg8c0b766s">Valspar Championship 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|3tqp680ctuk1s8x5k9gn05bmc">WGC-Dell Technologies Match Play 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|15hb1vel355hhodiw43f2nhg4">Corales Puntacana Resort and Club Championship 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|4oczsvupjte5u83djscpczris">Valero Texas Open 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|8o7k7pbhrhdpv224fl89sosgk">Masters Tournament 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|955jibmkjd5tgbdxo4fmcij9w">RBC Heritage 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|e7qpx9px6yg3lfpi59o7edo9g">Zurich Classic of New Orleans 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|ew5tl4zk2xsp01xpgnjy9adxw">Mexico Open 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|9wrdi1o1paqgq080xo0exbb4k">Wells Fargo Championship 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|crd8burydrctmv517xt8dzoyc">AT&T Byron Nelson 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|dbcc0412nrwd7lnyrg5a56wb8">PGA Championship 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|1i1h8r7d59xjl4z0d37lp0kr8">Charles Schwab Challenge 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|4m7a502dp035tsapx8iyaoowk">The Memorial Tournament 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|9j80xw60xr2etrramc4co82dw">RBC Canadian Open 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|dijjsnn1fr964fgzg46n99u6s">U.S. Open 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|1mfegwhd4ews9in2uqw5lxiqc">Travelers Championship 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|6b6del617ytlmhxljhsxs8glw">John Deere Classic 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|6xmro8ccq7xw8pmz5ccmk8x78">Genesis Scottish Open 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|9nefpl4p8n551epci1b7is4yc">Barbasol Championship 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|3k6d0a2ty05upi8pjuxmc0sus">Barracuda Championship 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|7qw75iise1342nmpu9mldak9g">The Open Championship 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|322i6wv14woi9pmsibpnwoq38">3M Open 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|cp4ij4htuazb7tyzydephdyqc">Rocket Mortgage Classic 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|l9z0trpgbfuddhlqts5ffn6c">Wyndham Championship 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|2g740je2hc3f9k5liu9mg6ec4">FedEx St. Jude Championship 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|879rrcxp93of3e20987zcu0ic">BMW Championship 2022</option>
				<option value="schedule|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|bn7hb6s6zqaowc77bndzyr9ck">TOUR Championship 2022</option>
			</select>
		</div>

		<div class="dropdown">
			<button name="tennis">Tennis</button>
			<select name="tennis" size="0">
				<option value="null" disabled selected>Select Tournament</option>

				<option class="from_1640908800 to_1643500800" value="live_scores|tennis|7315|2022">ATP Cup - Mens National_teams</option>
				<option class="from_1640995200 to_1643500800" value="live_scores|tennis|7347|2022">Bendigo International - Mens Singles</option>
				<option class="from_1641081600 to_1643500800" value="live_scores|tennis|7335|2022">Adelaide International 1 - Mens Singles</option>
				<option class="from_1641081600 to_1643500800" value="live_scores|tennis|7357|2022">Adelaide International 1 - Womens Singles</option>
				<option class="from_1641081600 to_1643500800" value="live_scores|tennis|7451|2022">Citta' Di Forli' 1 - Mens Singles</option>
				<option class="from_1641081600 to_1643500800" value="live_scores|tennis|7355|2022">Dove Men+Care Legion Sudamericana Tigre - Mens Singles</option>
				<option class="from_1641081600 to_1643500800" value="live_scores|tennis|7351|2022">Traralgon International - Mens Singles</option>
				<option class="from_1641168000 to_1643500800" value="live_scores|tennis|7441|2022">Melbourne Summer Set - Mens Singles</option>
				<option class="from_1641168000 to_1643500800" value="live_scores|tennis|7447|2022">Melbourne Summer Set 1 - Womens Singles</option>
				<option class="from_1641168000 to_1643500800" value="live_scores|tennis|7449|2022">Melbourne Summer Set 2 - Womens Singles</option>
				<option class="from_1641600000 to_1643500800" value="live_scores|tennis|7313|2022">Adelaide International 2 - Mens Singles</option>
				<option class="from_1641600000 to_1643500800" value="live_scores|tennis|7369|2022">Adelaide International 2 - Womens Singles</option>
				<option class="from_1641686400 to_1644278400" value="live_scores|tennis|7245|2022">Australian Open - Mens Doubles</option>
				<option class="from_1641686400 to_1644278400" value="live_scores|tennis|7244|2022">Australian Open - Mens Singles</option>
				<option class="from_1641686400 to_1644278400" value="live_scores|tennis|7248|2022">Australian Open - Mixed Doubles</option>
				<option class="from_1641686400 to_1644278400" value="live_scores|tennis|7247|2022">Australian Open - Womens Doubles</option>
				<option class="from_1641686400 to_1644278400" value="live_scores|tennis|7246|2022">Australian Open - Womens Singles</option>
				<option class="from_1641686400 to_1644710400" value="live_scores|tennis|7361|2022">Circuito Dove Men Care - Mens Singles</option>
				<option class="from_1641686400 to_1644710400" value="live_scores|tennis|7359|2022">Citta' Di Forli' 2 - Mens Singles</option>
				<option class="from_1641686400 to_1644710400" value="live_scores|tennis|7455|2022">Sydney Tennis Classic - Mens Singles</option>
				<option class="from_1641686400 to_1644710400" value="live_scores|tennis|7453|2022">Sydney Tennis Classic - Womens Singles</option>
				<option class="from_1642291200 to_1644710400" value="live_scores|tennis|7365|2022">Citta' Di Forli' 3 - Mens Singles</option>
				<option class="from_1642291200 to_1644710400" value="live_scores|tennis|7363|2022">Dove Men+Care Legion Sudamericana Concepcion - Mens Singles</option>
				<option class="from_1642896000 to_1644710400" value="live_scores|tennis|7433|2022">Dove Men+Care Challenger Bolivia - Mens Singles</option>
				<option class="from_1642896000 to_1644710400" value="live_scores|tennis|7370|2022">Open Quimper Bretagne Occidentale - Mens Singles</option>
				<option class="from_1642896000 to_1644710400" value="live_scores|tennis|7367|2022">Tennis Ohio Championships - Mens Singles</option>
				<option class="from_1643328000 to_1644710400" value="live_scores|tennis|7339|2022">Open Sud de France - Mens Singles</option>
				<option class="from_1643414400 to_1644710400" value="live_scores|tennis|7337|2022">Cordoba Open - Mens Singles</option>
				<option class="from_1643500800 to_1644710400" value="live_scores|tennis|7373|2022">Cleveland Open - Mens Singles</option>
				<option class="from_1643500800 to_1644710400" value="live_scores|tennis|7341|2022">Tata Open Maharashtra - Mens Singles</option>
				<option class="from_1644019200 to_1645142400" value="live_scores|tennis|7343|2022">ABN Amro World Tennis Tournament - Mens Singles</option>
				<option class="from_1644019200 to_1645142400" value="live_scores|tennis|7345|2022">Argentina Open - Mens Singles</option>
				<option class="from_1644019200 to_1645833600" value="live_scores|tennis|7261|2022">St. Petersburg Ladies Trophy - Womens Singles</option>
				<option class="from_1644105600 to_1645833600" value="live_scores|tennis|7375|2022">Bengaluru Open 1 - Mens Singles</option>
				<option class="from_1644105600 to_1645833600" value="live_scores|tennis|7439|2022">Challenger Cherbourg - La Manche - Mens Singles</option>
				<option class="from_1644105600 to_1645833600" value="live_scores|tennis|7349|2022">Dallas Open - Mens Singles</option>
				<option class="from_1644624000 to_1645833600" value="live_scores|tennis|7353|2022">Delray Beach Open - Mens Singles</option>
				<option class="from_1644624000 to_1645833600" value="live_scores|tennis|7263|2022">Dubai Duty Free Tennis Championships - Womens Singles</option>
				<option class="from_1644624000 to_1645833600" value="live_scores|tennis|7379|2022">Qatar ExxonMobil Open - Mens Singles</option>
				<option class="from_1644624000 to_1645833600" value="live_scores|tennis|7381|2022">Rio Open presented by Claro - Mens Singles</option>
				<option class="from_1644710400 to_1645833600" value="live_scores|tennis|7443|2022">Bengaluru Open 2 - Mens Singles</option>
				<option class="from_1644710400 to_1645833600" value="live_scores|tennis|7445|2022">Citta' Di Forli' 4 - Mens Singles</option>
				<option class="from_1644710400 to_1645833600" value="live_scores|tennis|7377|2022">Open 13 Provence - Mens Singles</option>
				<option class="from_1645142400 to_1647129600" value="live_scores|tennis|7383|2022">Abierto Mexicano Telcel presentado por HSBC - Mens Singles</option>
				<option class="from_1645142400 to_1647129600" value="live_scores|tennis|7265|2022">Qatar Total Energies Open - Womens Singles</option>
				<option class="from_1645228800 to_1647129600" value="live_scores|tennis|7267|2022">Abierto Akron Zapopan - Womens Singles</option>
				<option class="from_1645228800 to_1647129600" value="live_scores|tennis|7385|2022">Chile Dove Men+Care Open - Mens Singles</option>
				<option class="from_1645228800 to_1647129600" value="live_scores|tennis|7389|2022">Dubai Duty Free Tennis Championships - Mens Singles</option>
				<option class="from_1645315200 to_1647129600" value="live_scores|tennis|7459|2022">Citta' Di Forli' 5 - Mens Singles</option>
				<option class="from_1645315200 to_1647129600" value="live_scores|tennis|7457|2022">Terega Open - Mens Singles</option>
				<option class="from_1645747200 to_1647129600" value="live_scores|tennis|7522|2022">Turin - Mens Singles</option>
				<option class="from_1645833600 to_1647129600" value="live_scores|tennis|7269|2022">Abierto GNP Seguros 2022 - Womens Singles</option>
				<option class="from_1645833600 to_1647129600" value="live_scores|tennis|7271|2022">Open 6ème Sens Métropole de Lyon - Womens Singles</option>
				<option class="from_1645920000 to_1647129600" value="live_scores|tennis|7488|2022">Gran Canaria Challenger 1 - Mens Singles</option>
				<option class="from_1646524800 to_1648857600" value="live_scores|tennis|7467|2022">Abierto GNP Seguros - Mens Singles</option>
				<option class="from_1646524800 to_1648857600" value="live_scores|tennis|7469|2022">Challenger Santiago Chile - Mens Singles</option>
				<option class="from_1646524800 to_1648857600" value="live_scores|tennis|7490|2022">Roseto Degli Abruzzi 1 - Mens Singles</option>
				<option class="from_1646611200 to_1648857600" value="live_scores|tennis|7387|2022">BNP Paribas Open - Mens Singles</option>
				<option class="from_1646611200 to_1648857600" value="live_scores|tennis|7273|2022">BNP Paribas Open - Womens Singles</option>
				<option class="from_1646697600 to_1648857600" value="live_scores|tennis|7388|2022">BNP Paribas Open - Mens Doubles</option>
				<option class="from_1647129600 to_1648857600" value="live_scores|tennis|7473|2022">Challenger del Biobio - Mens Singles</option>
				<option class="from_1647129600 to_1648857600" value="live_scores|tennis|7492|2022">Regione Abruzzo Aterno Gas & Power Cup - Mens Singles</option>
				<option class="from_1647216000 to_1648857600" value="live_scores|tennis|7471|2022">Arizona Tennis Classic - Mens Singles</option>
				<option class="from_1647734400 to_1648857600" value="live_scores|tennis|7494|2022">Dove Men+Care Challenger Bolivia 2 - Mens Singles</option>
				<option class="from_1647734400 to_1648857600" value="live_scores|tennis|7520|2022">Falkensteiner Punta Skala - Zadar Open - Mens Singles</option>
				<option class="from_1647734400 to_1648857600" value="live_scores|tennis|7481|2022">FlowBank Challenger Biel/Bienne - Mens Singles</option>
				<option class="from_1647734400 to_1648857600" value="live_scores|tennis|7477|2022">Play In Challenger - Mens Singles</option>
				<option class="from_1647820800 to_1650153600" value="live_scores|tennis|7392|2022">Miami Open presented by Itau - Mens Doubles</option>
				<option class="from_1647820800 to_1650153600" value="live_scores|tennis|7391|2022">Miami Open presented by Itau - Mens Singles</option>
				<option class="from_1647820800 to_1650153600" value="live_scores|tennis|7275|2022">Miami Open presented by Itau - Womens Singles</option>
				<option class="from_1648339200 to_1650153600" value="live_scores|tennis|7483|2022">AnyTech365 Andalucia Open - Mens Singles</option>
				<option class="from_1648339200 to_1650153600" value="live_scores|tennis|7485|2022">Challenger Banca stato Città di Lugano - Mens Singles</option>
				<option class="from_1648339200 to_1650153600" value="live_scores|tennis|7500|2022">Circuito Dove Men+Care Pereira - Mens Singles</option>
				<option class="from_1648339200 to_1650153600" value="live_scores|tennis|7496|2022">Oeiras Challenger 1 - Mens Singles</option>
				<option class="from_1648339200 to_1650153600" value="live_scores|tennis|7498|2022">Open Saint-Brieuc Harmonie Mutuelle - Mens Singles</option>
				<option class="from_1648425600 to_1650153600" value="live_scores|tennis|7666|2022">AnyTech365 Andalucia Open - Womens Singles</option>
				<option class="from_1648857600 to_1650153600" value="live_scores|tennis|7279|2022">Copa Colsanitas presentado por Zurich - Womens Singles</option>
				<option class="from_1648857600 to_1650153600" value="live_scores|tennis|7277|2022">Credit One Charleston Open - Womens Singles</option>
				<option class="from_1648857600 to_1650153600" value="live_scores|tennis|7393|2022">Fayez Sarofim & Co. U.S. Men's Clay Court Championship - Mens Singles</option>
				<option class="from_1648944000 to_1650153600" value="live_scores|tennis|7502|2022">Challenger de Salinas Copa Banco Guayaquil - Mens Singles</option>
				<option class="from_1648944000 to_1650153600" value="live_scores|tennis|7504|2022">Costa Cálida Región de Murcia - Mens Singles</option>
				<option class="from_1648944000 to_1650153600" value="live_scores|tennis|7395|2022">Grand Prix Hassan II - Mens Singles</option>
				<option class="from_1648944000 to_1650153600" value="live_scores|tennis|7518|2022">Mexico City Open - Mens Singles</option>
				<option class="from_1648944000 to_1650153600" value="live_scores|tennis|7506|2022">Oeiras 2 - Mens Singles</option>
				<option class="from_1648944000 to_1650153600" value="live_scores|tennis|7508|2022">Sanremo Challenger - Mens Singles</option>
				<option class="from_1649462400 to_1651276800" value="live_scores|tennis|7398|2022">Rolex Monte-Carlo Masters - Mens Doubles</option>
				<option class="from_1649462400 to_1651276800" value="live_scores|tennis|7397|2022">Rolex Monte-Carlo Masters - Mens Singles</option>
				<option class="from_1649548800 to_1651276800" value="live_scores|tennis|7516|2022">Elizabeth Moore Sarasota Open - Mens Singles</option>
				<option class="from_1649548800 to_1651276800" value="live_scores|tennis|7510|2022">Open Citta Della Disfida - Mens Singles</option>
				<option class="from_1649548800 to_1651276800" value="live_scores|tennis|7513|2022">Open Comunidad de Madrid - Mens Singles</option>
				<option class="from_1649548800 to_1651276800" value="live_scores|tennis|7514|2022">San Luis Open BMW - Mens Singles</option>
				<option class="from_1650067200 to_1651276800" value="live_scores|tennis|7399|2022">Barcelona Open Banc Sabadell - Mens Singles</option>
				<option class="from_1650067200 to_1651276800" value="live_scores|tennis|7281|2022">Porsche Tennis Grand Prix - Womens Singles</option>
				<option class="from_1650153600 to_1651276800" value="live_scores|tennis|7538|2022">San Marcos Open Aguascalientes - Mens Singles</option>
				<option class="from_1650153600 to_1651276800" value="live_scores|tennis|7401|2022">Serbia Open - Mens Singles</option>
				<option class="from_1650153600 to_1651276800" value="live_scores|tennis|7623|2022">Split Open - Mens Singles</option>
				<option class="from_1650153600 to_1651276800" value="live_scores|tennis|7524|2022">Tallahassee Tennis Challenger - Mens Singles</option>
				<option class="from_1650153600 to_1651276800" value="live_scores|tennis|7283|2022">TEB BNP Paribas Tennis Championship Istanbul - Womens Singles</option>
				<option class="from_1650153600 to_1651276800" value="live_scores|tennis|7526|2022">TK Sparta Prague Open - Mens Singles</option>
				<option class="from_1650672000 to_1651276800" value="live_scores|tennis|7403|2022">BMW Open by American Express - Mens Singles</option>
				<option class="from_1650672000 to_1651276800" value="live_scores|tennis|7405|2022">Millennium Estoril Open - Mens Singles</option>
				<option class="from_1650758400 to_1651276800" value="live_scores|tennis|7540|2022">Dove Men+Care Challenger Buenos Aires 2 - Mens Singles</option>
				<option class="from_1650758400 to_1651276800" value="live_scores|tennis|7530|2022">Morelos Open - Mens Singles</option>
				<option class="from_1650758400 to_1651276800" value="live_scores|tennis|7534|2022">Ostra Group Open by Moneta - Mens Singles</option>
				<option class="from_1650758400 to_1651276800" value="live_scores|tennis|7536|2022">Rome Garden Open - Mens Singles</option>
				<option class="from_1650758400 to_1651276800" value="live_scores|tennis|7532|2022">Savannah Challenger presented by St. Joseph's/Candler - Mens Singles</option>
				<option class="from_1650931200 to_1652572800" value="live_scores|tennis|7407|2022">Mutua Madrid Open - Mens Singles</option>
				<option class="from_1650931200 to_1652572800" value="live_scores|tennis|7285|2022">Mutua Madrid Open - Womens Singles</option>
				<option class="from_1651276800 to_1652572800" value="live_scores|tennis|7408|2022">Mutua Madrid Open - Mens Doubles</option>
				<option class="from_1651363200 to_1654387200" value="live_scores|tennis|7637|2022">Danube Upper Austria Open - Mens Singles</option>
				<option class="from_1651363200 to_1654387200" value="live_scores|tennis|7693|2022">Dove Men+Care Salvador De Bahia - Mens Singles</option>
				<option class="from_1651363200 to_1654387200" value="live_scores|tennis|7627|2022">I.CLTK Prague Open - Mens Singles</option>
				<option class="from_1651363200 to_1654387200" value="live_scores|tennis|7640|2022">L 'Open 35 de Saint Malo - Womens Singles</option>
				<option class="from_1651363200 to_1654387200" value="live_scores|tennis|7625|2022">Open Pays d'Aix CEPAC - Mens Singles</option>
				<option class="from_1651795200 to_1654387200" value="live_scores|tennis|7695|2022">Dove Men+Care Coquimbo - Mens Singles</option>
				<option class="from_1651881600 to_1654387200" value="live_scores|tennis|7410|2022">Internazionali BNL d'Italia - Mens Doubles</option>
				<option class="from_1651881600 to_1654387200" value="live_scores|tennis|7409|2022">Internazionali BNL d'Italia - Mens Singles</option>
				<option class="from_1651881600 to_1654387200" value="live_scores|tennis|7287|2022">Internazionali BNL d'Italia - Womens Singles</option>
				<option class="from_1651968000 to_1654387200" value="live_scores|tennis|7629|2022">BNP Paribas Primrose - Mens Singles</option>
				<option class="from_1651968000 to_1654387200" value="live_scores|tennis|7631|2022">Neckarcup Heilbronn - Mens Singles</option>
				<option class="from_1651968000 to_1654387200" value="live_scores|tennis|7633|2022">Shymkent 1 - Mens Singles</option>
				<option class="from_1651968000 to_1654387200" value="live_scores|tennis|7635|2022">Zagreb Open - Mens Singles</option>
				<option class="from_1652054400 to_1654387200" value="live_scores|tennis|7646|2022">Trophee Lagardere - Womens Singles</option>
				<option class="from_1652140800 to_1654387200" value="live_scores|tennis|7648|2022">Liqui Moly Open - Womens Singles</option>
				<option class="from_1652313600 to_1654387200" value="live_scores|tennis|7411|2022">Gonet Geneva Open - Mens Singles</option>
				<option class="from_1652313600 to_1654387200" value="live_scores|tennis|7291|2022">Grand Prix Sar La Princesse Lalla Meryem - Womens Singles</option>
				<option class="from_1652313600 to_1654387200" value="live_scores|tennis|7289|2022">Internationaux de Strasbourg - Womens Singles</option>
				<option class="from_1652313600 to_1654387200" value="live_scores|tennis|7413|2022">Open Parc Auvergne-Rhone-Alpes Lyon - Mens Singles</option>
				<option class="from_1652400000 to_1654387200" value="live_scores|tennis|7687|2022">Challenger Francavilla al Mare - Mens Singles</option>
				<option class="from_1652400000 to_1654387200" value="live_scores|tennis|7683|2022">Shymkent Challenger II - Mens Singles</option>
				<option class="from_1652400000 to_1654387200" value="live_scores|tennis|7685|2022">Tunis Open - Mens Singles</option>
				<option class="from_1652572800 to_1654992000" value="live_scores|tennis|7416|2022">French Open - Mens Doubles</option>
				<option class="from_1652572800 to_1654992000" value="live_scores|tennis|7415|2022">French Open - Mens Singles</option>
				<option class="from_1652572800 to_1654992000" value="live_scores|tennis|7432|2022">French Open - Mixed Doubles</option>
				<option class="from_1652572800 to_1654992000" value="live_scores|tennis|7296|2022">French Open - Womens Doubles</option>
				<option class="from_1652572800 to_1654992000" value="live_scores|tennis|7295|2022">French Open - Womens Singles</option>
				<option class="from_1653004800 to_1654992000" value="live_scores|tennis|7689|2022">Internazionali di Tennis - Citta di Vicenza - Mens Singles</option>
				<option class="from_1653004800 to_1654992000" value="live_scores|tennis|7697|2022">Saturn Oil Open - Mens Singles</option>
				<option class="from_1653609600 to_1654992000" value="live_scores|tennis|7699|2022">Baptist Health Little Rock Open - Mens Singles</option>
				<option class="from_1653609600 to_1654992000" value="live_scores|tennis|7727|2022">Forli 6 - Mens Singles</option>
				<option class="from_1653609600 to_1654992000" value="live_scores|tennis|7719|2022">Poznan Open - Mens Singles</option>
				<option class="from_1653609600 to_1654992000" value="live_scores|tennis|7691|2022">Surbiton Trophy - Mens Singles</option>
				<option class="from_1653609600 to_1654992000" value="live_scores|tennis|7717|2022">Unicredit Czech Open - Mens Singles</option>
				<option class="from_1653696000 to_1654992000" value="live_scores|tennis|7650|2022">Makarska Open - Womens Singles</option>
				<option class="from_1654214400 to_1655596800" value="live_scores|tennis|7652|2022">BBVA Open Internacional De Valencia - Womens Singles</option>
				<option class="from_1654214400 to_1655596800" value="live_scores|tennis|7703|2022">Internazionali di Tennis - Città di Perugia - Mens Singles</option>
				<option class="from_1654214400 to_1655596800" value="live_scores|tennis|7707|2022">Kooperativa Bratislava Open - Mens Singles</option>
				<option class="from_1654214400 to_1655596800" value="live_scores|tennis|7417|2022">Libema Open - Mens Singles</option>
				<option class="from_1654214400 to_1655596800" value="live_scores|tennis|7297|2022">Libema Open - Womens Singles</option>
				<option class="from_1654214400 to_1655596800" value="live_scores|tennis|7705|2022">Open Sopra Steria de Lyon - Mens Singles</option>
				<option class="from_1654214400 to_1655596800" value="live_scores|tennis|7709|2022">Orlando Open - Mens Singles</option>
				<option class="from_1654214400 to_1655769600" value="live_scores|tennis|7701|2022">Rothesay Open Nottingham - Mens Singles</option>
				<option class="from_1654214400 to_1655769600" value="live_scores|tennis|7299|2022">Rothesay Open Nottingham - Womens Singles</option>
				<option class="from_1654214400 to_1655769600" value="live_scores|tennis|7419|2022">Weissenhof - Mens Singles</option>
				<option class="from_1654819200 to_1655769600" value="live_scores|tennis|7303|2022">Bett1 Open - Womens Singles</option>
				<option class="from_1654819200 to_1655769600" value="live_scores|tennis|7713|2022">Blois Challenger - Mens Singles</option>
				<option class="from_1654819200 to_1655769600" value="live_scores|tennis|7421|2022">Cinch Championships - Mens Singles</option>
				<option class="from_1654819200 to_1655769600" value="live_scores|tennis|7721|2022">Corrientes Challenger - Mens Singles</option>
				<option class="from_1654819200 to_1655769600" value="live_scores|tennis|7711|2022">Ilkley Challenger - Mens Singles</option>
				<option class="from_1654819200 to_1655769600" value="live_scores|tennis|7301|2022">Rothesay Classic Birmingham - Womens Singles</option>
				<option class="from_1654819200 to_1655769600" value="live_scores|tennis|7423|2022">Terra Wortmann Open - Mens Singles</option>
				<option class="from_1654819200 to_1655769600" value="live_scores|tennis|7654|2022">Veneto Open Internazionali Confindustria Venezia E Rovigo - Womens Singles</option>
				<option class="from_1655337600 to_1655769600" value="live_scores|tennis|7307|2022">Bad Homburg Open presented by Engel & Volkers - Womens Singles</option>
				<option class="from_1655337600 to_1655769600" value="live_scores|tennis|7425|2022">Mallorca Championships - Mens Singles</option>
				<option class="from_1655337600 to_1655769600" value="live_scores|tennis|7305|2022">Rothesay International Eastbourne - Womens Singles</option>
				<option class="from_1655424000 to_1655769600" value="live_scores|tennis|7715|2022">Milan - Mens Singles</option>
				<option class="from_1655424000 to_1655769600" value="live_scores|tennis|7723|2022">Oeiras 3 - Mens Singles</option>
				<option class="from_1655424000 to_1655769600" value="live_scores|tennis|7427|2022">Rothesay International Eastbourne - Mens Singles</option>
				<option class="from_1655424000 to_1655769600" value="live_scores|tennis|7729|2022">Villa Allende - Mens Singles</option>
				<option class="from_1655769600 to_1656374400" value="live_scores|tennis|7430|2022">Wimbledon - Mens Doubles</option>
				<option class="from_1655769600 to_1656374400" value="live_scores|tennis|7429|2022">Wimbledon - Mens Singles</option>
				<option class="from_1655769600 to_1656374400" value="live_scores|tennis|7431|2022">Wimbledon - Mixed Doubles</option>
				<option class="from_1655769600 to_1656374400" value="live_scores|tennis|7310|2022">Wimbledon - Womens Doubles</option>
				<option class="from_1655769600 to_1656374400" value="live_scores|tennis|7309|2022">Wimbledon - Womens Singles</option>
				<option class="from_1656028800 to_1659225600" value="live_scores|tennis|7725|2022">Luedenscheid - Mens Singles</option>
				<option class="from_1656028800 to_1659225600" value="live_scores|tennis|7731|2022">Malaga Open - Mens Singles</option>
				<option class="from_1656028800 to_1659225600" value="live_scores|tennis|7733|2022">Troyes - Mens Singles</option>
				<option class="from_1656633600 to_1659225600" value="live_scores|tennis|7658|2022">Grand Est Open 88 - Womens Singles</option>
				<option class="from_1656633600 to_1659225600" value="live_scores|tennis|7656|2022">Nordea Open - Womens Singles</option>
				<option class="from_1657238400 to_1659225600" value="live_scores|tennis|7573|2022">Hungarian Grand Prix - Womens Singles</option>
				<option class="from_1657238400 to_1659225600" value="live_scores|tennis|7542|2022">Infosys Hall of Fame Open - Mens Singles</option>
				<option class="from_1657238400 to_1659225600" value="live_scores|tennis|7569|2022">Ladies Open Lausanne - Womens Singles</option>
				<option class="from_1657238400 to_1659225600" value="live_scores|tennis|7544|2022">Nordea Open - Mens Singles</option>
				<option class="from_1657756800 to_1659225600" value="live_scores|tennis|7575|2022">Hamburg European Open - Womens Singles</option>
				<option class="from_1657843200 to_1659225600" value="live_scores|tennis|7577|2022">33rd Palermo Ladies Open - Womens Singles</option>
				<option class="from_1657843200 to_1659225600" value="live_scores|tennis|7546|2022">EFG Swiss Open Gstaad - Mens Singles</option>
				<option class="from_1657843200 to_1659225600" value="live_scores|tennis|7548|2022">Hamburg European Open - Mens Singles</option>
				<option class="from_1658448000 to_1659830400" value="live_scores|tennis|7585|2022">BNP Paribas Poland Open - Womens Singles</option>
				<option class="from_1658448000 to_1659830400" value="live_scores|tennis|7550|2022">Generali Open - Mens Singles</option>
				<option class="from_1658448000 to_1659830400" value="live_scores|tennis|7581|2022">Livesport Prague Open 2022 - Womens Singles</option>
				<option class="from_1658448000 to_1659830400" value="live_scores|tennis|7552|2022">Plava Laguna Croatia Open Umag - Mens Singles</option>
				<option class="from_1658448000 to_1662854400" value="live_scores|tennis|7554|2022">Truist Atlanta Open presented by Fiserv - Mens Singles</option>
				<option class="from_1659052800 to_1662854400" value="live_scores|tennis|7556|2022">Abierto de Tenis Mifel - Mens Singles</option>
				<option class="from_1659052800 to_1662854400" value="live_scores|tennis|7660|2022">BCR Iasi Open - Womens Singles</option>
				<option class="from_1659052800 to_1662854400" value="live_scores|tennis|7558|2022">Citi Open - Mens Singles</option>
				<option class="from_1659052800 to_1662854400" value="live_scores|tennis|7589|2022">Mubadala Silicon Valley Classic - Womens Singles</option>
				<option class="from_1659571200 to_1662854400" value="live_scores|tennis|7561|2022">National Bank Open presented by Rogers - Mens Doubles</option>
				<option class="from_1659657600 to_1662854400" value="live_scores|tennis|7560|2022">National Bank Open presented by Rogers - Mens Singles</option>
				<option class="from_1659657600 to_1662854400" value="live_scores|tennis|7593|2022">National Bank Open presented by Rogers - Womens Singles</option>
				<option class="from_1659657600 to_1662854400" value="live_scores|tennis|7662|2022">Thoreau Tennis Open 125 - Womens Singles</option>
				<option class="from_1660176000 to_1662854400" value="live_scores|tennis|7664|2022">Odlum Brown Vanopen - Womens Singles</option>
				<option class="from_1660176000 to_1662854400" value="live_scores|tennis|7563|2022">Western & Southern Open - Mens Doubles</option>
				<option class="from_1660262400 to_1662854400" value="live_scores|tennis|7562|2022">Western & Southern Open - Mens Singles</option>
				<option class="from_1660262400 to_1662854400" value="live_scores|tennis|7595|2022">Western & Southern Open - Womens Singles</option>
				<option class="from_1660780800 to_1662854400" value="live_scores|tennis|7603|2022">Championnats Banque Nationale de Granby - Womens Singles</option>
				<option class="from_1660780800 to_1662854400" value="live_scores|tennis|7597|2022">Tennis in the Land - Womens Singles</option>
				<option class="from_1660780800 to_1662854400" value="live_scores|tennis|7564|2022">Winston-Salem Open - Mens Singles</option>
				<option class="from_1661126400 to_1663459200" value="live_scores|tennis|7567|2022">US Open - Mens Doubles</option>
				<option class="from_1661126400 to_1663459200" value="live_scores|tennis|7566|2022">US Open - Mens Singles</option>
				<option class="from_1661126400 to_1663459200" value="live_scores|tennis|7568|2022">US Open - Mixed Doubles</option>
				<option class="from_1661126400 to_1663459200" value="live_scores|tennis|7602|2022">US Open - Womens Doubles</option>
				<option class="from_1661126400 to_1663459200" value="live_scores|tennis|7601|2022">US Open - Womens Singles</option>
				<option class="from_1662681600 to_1665878400" value="live_scores|tennis|7642|2022">Zavarovalnica Sava Portoroz - Womens Singles</option>
				<option class="from_1663286400 to_1665878400" value="live_scores|tennis|7578|2022">Astana Open - Mens Singles</option>
				<option class="from_1663286400 to_1665878400" value="live_scores|tennis|7644|2022">Budapest Open 125 - Womens Singles</option>
				<option class="from_1663286400 to_1665878400" value="live_scores|tennis|7571|2022">Moselle Open - Mens Singles</option>
				<option class="from_1663804800 to_1665878400" value="live_scores|tennis|7639|2022">Laver Cup - Mens National_teams</option>
				<option class="from_1663891200 to_1665878400" value="live_scores|tennis|7583|2022">Chengdu Open - Mens Singles</option>
				<option class="from_1663891200 to_1665878400" value="live_scores|tennis|7587|2022">Sofia Open - Mens Singles</option>
				<option class="from_1663891200 to_1665878400" value="live_scores|tennis|7591|2022">Zhuhai Championships - Mens Singles</option>
				<option class="from_1664496000 to_1665878400" value="live_scores|tennis|7598|2022">China Open - Mens Singles</option>
				<option class="from_1664496000 to_1665878400" value="live_scores|tennis|7605|2022">Rakuten Japan Open Tennis Championships - Mens Singles</option>
				<option class="from_1665014400 to_1666483200" value="live_scores|tennis|7622|2022">Rolex Shanghai Masters - Mens Doubles</option>
				<option class="from_1665014400 to_1666483200" value="live_scores|tennis|7621|2022">Rolex Shanghai Masters - Mens Singles</option>
				<option class="from_1665705600 to_1672444800" value="live_scores|tennis|7607|2022">European Open - Mens Singles</option>
				<option class="from_1665705600 to_1672444800" value="live_scores|tennis|7609|2022">Stockholm Open - Mens Singles</option>
				<option class="from_1666310400 to_1672444800" value="live_scores|tennis|7668|2022">Abierto Tampico - Womens Singles</option>
				<option class="from_1666310400 to_1672444800" value="live_scores|tennis|7613|2022">Erste Bank Open - Mens Singles</option>
				<option class="from_1666310400 to_1672444800" value="live_scores|tennis|7615|2022">Swiss Indoors Basel - Mens Singles</option>
				<option class="from_1666915200 to_1672444800" value="live_scores|tennis|7670|2022">Dow Tennis Classic - Womens Singles</option>
				<option class="from_1666915200 to_1672444800" value="live_scores|tennis|7680|2022">Puerto Vallarta Open - Womens Singles</option>
				<option class="from_1666915200 to_1672444800" value="live_scores|tennis|7617|2022">Rolex Paris Masters - Mens Doubles</option>
				<option class="from_1666915200 to_1672444800" value="live_scores|tennis|7318|2022">Rolex Paris Masters - Mens Singles</option>
				<option class="from_1667520000 to_1672444800" value="live_scores|tennis|7672|2022">Buenos Aires Open - Womens Singles</option>
				<option class="from_1667779200 to_1672444800" value="live_scores|tennis|7618|2022">Intesa Sanpaolo Next Gen ATP Finals - Mens Singles</option>
				<option class="from_1668124800 to_1672444800" value="live_scores|tennis|7674|2022">Montevideo Open - Womens Singles</option>
				<option class="from_1668211200 to_1672444800" value="live_scores|tennis|7620|2022">Nitto ATP Finals - Mens Doubles</option>
				<option class="from_1668211200 to_1672444800" value="live_scores|tennis|7619|2022">Nitto ATP Finals - Mens Singles</option>
				<option class="from_1669939200 to_1672444800" value="live_scores|tennis|7676|2022">Open Angers Arena Loire - Womens Singles</option>
				<option class="from_1670544000 to_1672444800" value="live_scores|tennis|7678|2022">Open BLS de Limoges - Womens Singles</option>
			</select>
		</div>

		<div class="dropdown">
			<button name="basketball">Basketball</button>
			<select name="basketball" size="0">
				<option value="null" disabled selected>Select Competition</option>
				
				<option value="undefined|nba">NBA</option>
				<option value="scoreboard|basketball|5wdi9kmiurd2rjx2f7ew92wm6|4sjxxlpzq4fgth238gnebn3tg">NBL</option>
			</select>
		</div>

		<div class="dropdown">
			<button name="motorsport">Motorsport</button>
			<select name="motorsport" size="0">
				<option value="null" disabled selected>Select Competition</option>
				
				<option value="calendar|motorsport|1m5x4n07f2kqkiczebja5etiq|3d2cd3uj88qgdlt4lyhr0cis4">Formula 1</option>
				<option value="calendar|motorsport|2e554vbpw7g0ykhl0rziuabxl|3j534o30hn9scfadkb0v9hkb8">MotoGP</option>
				<option value="calendar|motorsport|2ecsbewwstw5jn9h7kpv2joix|e9p0ngu4n2do5agfk6wt23f9w">V8 Supercars</option>
			</select>
		</div>

		<div class="dropdown">
			<button name="cricket">Cricket</button>
			<select name="cricket" size="0" id="selectCricket">
				<option value="null" disabled selected>Select Competition</option>
			</select>
		</div>

		<div class="dropdown">
			<button name="rugby">Rugby Union</button>
			<select name="rugby" size="0">
				<option value="null" disabled selected>Select Competition</option>

				<option value="fixtures|rugby|3|2023">International</option>
				<option value="fixtures|rugby|205|2022">Super Rugby Pacific</option>
				<option value="fixtures|rugby|209|2022">Six Nations</option>
				<option value="fixtures|rugby|210|2024">Rugby World Cup</option>
				<option value="fixtures|rugby|214|2022">The Rugby Championship</option>
				<option value="fixtures|rugby|221|2021">British & Irish Lions</option>
				<option value="fixtures|rugby|249|2022">Women's Rugby World Cup</option>
			</select>
		</div>

		<div class="dropdown">
			<button name="rugbyleague">Rugby League</button>
			<select name="rugbyleague" size="0">
				<option value="null" disabled selected>Select Competition</option>

				<option value="fixtures|rugbyleague|3|2022">National Rugby League</option>
				<option value="fixtures|rugbyleague|86|2022">NRL Women's Premiership</option>
				<option value="fixtures|rugbyleague|6|2022">State of Origin</option>
				<option value="fixtures|rugbyleague|87|2022">Women's State of Origin</option>
			</select>
		</div>

		<div class="dropdown">
			<button name="afl">AFL</button>
			<select name="afl" size="0">
				<option value="null" disabled selected>Select Competition</option>

				<option value="fixtures|afl|11686|2022">AFL</option>
				<option value="fixtures|afl|11595|2022">AFLW</option>
			</select>
		</div>
	`

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
		["2922","Sri Lanka v Zimbabwe ODI Series 2022",["Sunday 16 January 2022","Tuesday 18 January 2022","Friday 21 January 2022"]],
		["2864","South Africa v India ODI Series 2022",["Wednesday 19 January 2022","Friday 21 January 2022","Sunday 23 January 2022"]],
		["2784","West Indies v England Twenty20 Series 2022",["Sunday 23 January 2022","Monday 24 January 2022","Thursday 27 January 2022","Sunday 30 January 2022","Monday 31 January 2022"]],
		["2878","India v West Indies ODI Series 2022",["Sunday 6 February 2022","Wednesday 9 February 2022","Friday 11 February 2022"]],
		["2816","Australia v Sri Lanka Twenty20 Series 2022",["Friday 11 February 2022","Sunday 13 February 2022","Tuesday 15 February 2022","Friday 18 February 2022","Sunday 20 February 2022"]],
		["2879","India v West Indies Twenty20 Series 2022",["Thursday 17 February 2022","Saturday 19 February 2022","Monday 21 February 2022"]],
		["2911","New Zealand v South Africa Test Series 2022",["Thursday 17 February 2022","Friday 25 February 2022"]],
		["2881","India v Sri Lanka Twenty20 Series 2022",["Friday 25 February 2022","Sunday 27 February 2022","Monday 28 February 2022"]],
		["2880","India v Sri Lanka Test Series 2022",["Friday 4 March 2022","Saturday 12 March 2022"]],
		["2903","Pakistan v Australia Test Series 2022",["Friday 4 March 2022","Saturday 12 March 2022","Monday 21 March 2022"]],
		["2785","West Indies v England Test Series 2022",["Wednesday 9 March 2022","Thursday 17 March 2022","Friday 25 March 2022"]],
		["2868","South Africa v Bangladesh ODI Series 2022",["Friday 18 March 2022","Sunday 20 March 2022","Wednesday 23 March 2022"]],
		["2966","Nepal v Papua New Guinea ODI Series 2022",["Friday 25 March 2022","Saturday 26 March 2022"]],
		["2960","IPL 2022",["Sunday 27 March 2022","Monday 28 March 2022","Tuesday 29 March 2022","Wednesday 30 March 2022","Thursday 31 March 2022","Friday 1 April 2022","Saturday 2 April 2022","Sunday 3 April 2022","Monday 4 April 2022","Tuesday 5 April 2022","Wednesday 6 April 2022","Thursday 7 April 2022","Friday 8 April 2022","Saturday 9 April 2022","Sunday 10 April 2022","Monday 11 April 2022","Tuesday 12 April 2022","Wednesday 13 April 2022","Thursday 14 April 2022","Friday 15 April 2022","Saturday 16 April 2022","Sunday 17 April 2022","Monday 18 April 2022","Tuesday 19 April 2022","Wednesday 20 April 2022","Thursday 21 April 2022","Friday 22 April 2022","Saturday 23 April 2022","Sunday 24 April 2022","Monday 25 April 2022","Tuesday 26 April 2022","Wednesday 27 April 2022","Thursday 28 April 2022","Friday 29 April 2022","Saturday 30 April 2022","Sunday 1 May 2022","Monday 2 May 2022","Tuesday 3 May 2022","Wednesday 4 May 2022","Thursday 5 May 2022","Friday 6 May 2022","Saturday 7 May 2022","Sunday 8 May 2022","Monday 9 May 2022","Tuesday 10 May 2022","Wednesday 11 May 2022","Thursday 12 May 2022","Friday 13 May 2022","Saturday 14 May 2022","Sunday 15 May 2022","Monday 16 May 2022","Tuesday 17 May 2022","Wednesday 18 May 2022","Thursday 19 May 2022","Friday 20 May 2022","Saturday 21 May 2022","Sunday 22 May 2022","Monday 23 May 2022","Wednesday 25 May 2022","Thursday 26 May 2022","Saturday 28 May 2022","Monday 30 May 2022"]],
		["2904","Pakistan v Australia ODI Series 2022",["Tuesday 29 March 2022","Thursday 31 March 2022","Saturday 2 April 2022"]],
		["2869","South Africa v Bangladesh Test Series 2022",["Thursday 31 March 2022","Friday 8 April 2022"]],
		["2905","Pakistan v Australia Only Twenty20 2022",["Wednesday 6 April 2022"]],
		["2978","Bangladesh v Sri Lanka Test Series 2022",["Sunday 15 May 2022","Monday 23 May 2022"]],
		["2934","New Zealand in England Tour Matches 2022",["Friday 20 May 2022","Thursday 26 May 2022"]],
		["2856","England v New Zealand Test Series 2022",["Thursday 2 June 2022","Friday 10 June 2022","Thursday 23 June 2022"]],
		["2970","Sri Lanka v Australia Twenty20 Series 2022",["Tuesday 7 June 2022","Wednesday 8 June 2022","Saturday 11 June 2022"]],
		["2882","India v South Africa Twenty20 Series 2022",["Thursday 9 June 2022","Sunday 12 June 2022","Tuesday 14 June 2022","Friday 17 June 2022","Sunday 19 June 2022"]],
		["2971","Sri Lanka v Australia ODI Series 2022",["Tuesday 14 June 2022","Thursday 16 June 2022","Sunday 19 June 2022","Tuesday 21 June 2022","Friday 24 June 2022"]],
		["2939","India in England Tour Matches 2022",["Thursday 23 June 2022","Saturday 2 July 2022","Monday 4 July 2022"]],
		["2972","Sri Lanka v Australia Test Series 2022",["Wednesday 29 June 2022","Friday 8 July 2022"]],
		["2857","England v India Twenty20 Series 2022",["Friday 8 July 2022","Saturday 9 July 2022","Sunday 10 July 2022"]],
		["2858","England v India ODI Series 2022",["Tuesday 12 July 2022","Thursday 14 July 2022","Sunday 17 July 2022"]],
		["2938","South Africa in England Tour Matches 2022",["Tuesday 12 July 2022","Thursday 14 July 2022","Tuesday 9 August 2022"]],
		["2859","England v South Africa ODI Series 2022",["Tuesday 19 July 2022","Friday 22 July 2022","Sunday 24 July 2022"]],
		["2860","England v South Africa Twenty20 Series 2022",["Thursday 28 July 2022","Friday 29 July 2022","Sunday 31 July 2022"]],
		["2975","Scotland v New Zealand Twenty20 Series 2022",["Thursday 28 July 2022","Saturday 30 July 2022"]],
		["2976","Scotland v New Zealand Only ODI 2022",["Sunday 31 July 2022"]],
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
		Opta('select[name="cricket"]').append(`<option value="fixtures|cricket|${i}|0">${cricketDates[i].replace(/_/g,'')}</option>`)
	}
	/*CURATE CRICKET MENU*/

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
		});

		Opta('.newsnet_sport_nav_container .dropdown select').prop('value','null');//reset all select elements
		e.target.value = val;//restore active select element to user selection
		e.target.blur();//remove focus from the select element - necessary for correct display in firefox browser
	});

	Opta('.sport_button').on('click',(e)=>{
		console.log({sport: e.target.name})
		loadWidget({sport: e.target.name})
	})
};

constructNav();
//end of function to construct navigation menu - the above will need to be edited to accommodate menu curation

//function to populate sports widgets
const loadWidget = (obj)=>{
	console.log(obj)
	let sportWidgetWrapper = document.getElementById('sport-widget-wrapper');

	/*afl*/
	if(obj['sport'] == 'afl'){

		if(obj['widget'] == 'fixtures'){
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

		if(obj['widget'] == 'scoreboard'){
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

		if(obj['widget'] == 'fixtures'){
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

	/*golf*/
	if(obj['sport'] == 'golf'){

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
	}

	/*motorsport*/
	if(obj['sport'] == 'motorsport'){

		let defaultNav = '2';

		if(obj['competition'] == '1m5x4n07f2kqkiczebja5etiq'){title = 'Formula 1'; defaultNav = '3'}
		if(obj['competition'] == '2e554vbpw7g0ykhl0rziuabxl'){title = 'MotoGP'}
		if(obj['competition'] == '2ecsbewwstw5jn9h7kpv2joix'){title = 'V8 Supercars'}

		if(obj['widget'] == 'calendar'){
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

		if(obj['widget'] == 'fixtures'){

			if(obj['competition'] == '3' || obj['competition'] == '86'){
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

			if(obj['competition'] == '6' || obj['competition'] == '87'){
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
		
		if(obj['widget'] == 'fixtures'){
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

		if(obj['widget'] == 'fixtures'){
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

	/*tennis*/
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
	if(obj['sport'] == 'mlb'){

		sportWidgetWrapper.innerHTML = `
		<div class="content">
			<div id="shs-baseball-scoreboard" data-shs-league="mlb" data-shs-client-id="news">
				<script type="text/javascript" src="https://widgets-assets.stats.com/js/baseball-scoreboard.standalone.min.js"></script>
				<img src="assets/images/loader.svg">
			</div>
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
	if(obj['sport'] == 'nba'){

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
	if(obj['sport'] == 'nfl'){

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

	Opta.start();//call this method to invoke widgets
};
//end of function to populate sports widgets

Opta.events.subscribe('widget.drawn', (widget)=> {

	// Opta('.Opta a').on('click',(e)=>{
	// 	e.preventDefault();
	// 	loadWidget(getQueryParams(e.target.href))
		
	// 	console.log(getQueryParams(e.target.href))
	// 	let sport = getQueryParams(e.target.href)['sport'];
	// 	Opta(`select[name="${sport}"]`).prop('value','null');
	// })

	Opta('a.Opta-TeamLink.Opta-Ext').on('click',(e)=>{
		e.preventDefault();
		loadWidget(getQueryParams(e.target.href))
		
		console.log(getQueryParams(e.target.href))
		let sport = getQueryParams(e.target.href)['sport'];
		Opta(`select[name="${sport}"]`).prop('value','null');
	})

	if(widget.widget.attr.sport === 'football') {
		Opta('.Opta-MatchLink').html('Match preview')
	}
});

//settings for Opta widget initialisation - link_callback customises the behaviour of in-widget hyperlinks e.g. match-page, squads etc.
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