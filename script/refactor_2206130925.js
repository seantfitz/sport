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
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|18yplyv63nvempg754v3n7ro">Fortinet Championship 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|4w92lfpwekuw4540bcn7e02dw">Sanderson Farms Championship 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|c7zprf6boimr76qyg7o5f9o9g">Shriners Children's Open 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|cqp7zwj2e8p57tzzor78pjaqc">CJ Cup 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|3p8r0uf7hnuzogcx3yfj1n85w">Zozo Championship 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|2xn6tvp73zj7mi74iwcvtp6hg">Bermuda Championship 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|9yvf32hknprfayygf74v0cis4">World Wide Technology Championship at Mayakoba 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|3fj3ql60p10jr6it2xtgncmxg">Houston Open 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|diki72qkk78m9bk20i3sefxn8">The RSM Classic 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|55md7quoblp1d05o5s7ibfaj8">Hero World Challenge 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|1are53lbn6a3yp9k8m8gb52c4">Sentry Tournament of Champions 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|1t6fz5nnv6trhcvu5efiikcgk">Sony Open in Hawaii 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|6z9hwz0wihtcz75a0wlposl5g">The American Express 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|clfuxmmehe2g2j2ld9wkfzi8k">Farmers Insurance Open 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|2pgnfiojm9o23rb1j4y8o7ml0">AT&T Pebble Beach Pro-Am 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|7d86vgb3joqox4q3ztov7kqhg">Waste Management Phoenix Open 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|f36l5by9jzdyrabdifq5yp0r8">The Genesis Invitational 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|46du9wjcwnvohuonz8xvktvro">The Honda Classic 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|4eo03r63w2ykotbu6hod314wk">Arnold Palmer Invitational 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|ep8g33afkpoa84b33da26rvh0">Puerto Rico Open 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|8ah1du618msplo7p5b1naxmhg">The Players Championship 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|eysv5tdrpt0xnugzg8c0b766s">Valspar Championship 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|3tqp680ctuk1s8x5k9gn05bmc">WGC-Dell Technologies Match Play 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|15hb1vel355hhodiw43f2nhg4">Corales Puntacana Resort and Club Championship 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|4oczsvupjte5u83djscpczris">Valero Texas Open 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|8o7k7pbhrhdpv224fl89sosgk">Masters Tournament 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|955jibmkjd5tgbdxo4fmcij9w">RBC Heritage 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|e7qpx9px6yg3lfpi59o7edo9g">Zurich Classic of New Orleans 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|ew5tl4zk2xsp01xpgnjy9adxw">Mexico Open 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|9wrdi1o1paqgq080xo0exbb4k">Wells Fargo Championship 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|crd8burydrctmv517xt8dzoyc">AT&T Byron Nelson 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|dbcc0412nrwd7lnyrg5a56wb8">PGA Championship 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|1i1h8r7d59xjl4z0d37lp0kr8">Charles Schwab Challenge 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|4m7a502dp035tsapx8iyaoowk">The Memorial Tournament 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|9j80xw60xr2etrramc4co82dw">RBC Canadian Open 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|dijjsnn1fr964fgzg46n99u6s">U.S. Open 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|1mfegwhd4ews9in2uqw5lxiqc">Travelers Championship 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|6b6del617ytlmhxljhsxs8glw">John Deere Classic 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|6xmro8ccq7xw8pmz5ccmk8x78">Genesis Scottish Open 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|9nefpl4p8n551epci1b7is4yc">Barbasol Championship 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|3k6d0a2ty05upi8pjuxmc0sus">Barracuda Championship 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|7qw75iise1342nmpu9mldak9g">The Open Championship 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|322i6wv14woi9pmsibpnwoq38">3M Open 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|cp4ij4htuazb7tyzydephdyqc">Rocket Mortgage Classic 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|l9z0trpgbfuddhlqts5ffn6c">Wyndham Championship 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|2g740je2hc3f9k5liu9mg6ec4">FedEx St. Jude Championship 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|879rrcxp93of3e20987zcu0ic">BMW Championship 2022</option>
				<option value="leaderboard|golf|3c5msl8moic00eu49b06aumsp|405fzvlo157c392mbz8odw9p0|undefined|bn7hb6s6zqaowc77bndzyr9ck">TOUR Championship 2022</option>
			</select>
		</div>

		<div class="dropdown">
			<button name="tennis">Tennis</button>
			<select name="tennis" size="0">
				<option value="null" disabled selected>Select Tournament</option>
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

	var now = new Date().getTime()

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
	let cricketDates = {};

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

	/*CURATE TENNIS MENU*/
	var now10 = Math.floor(now/1000)
	let tennisArray = [
		["7315","ATP Cup - Mens National_teams",[1640908800,1641686400]],
		["7347","Bendigo International - Mens Singles",[1640995200,1641686400]],
		["7335","Adelaide International 1 - Mens Singles",[1641081600,1641686400]],
		["7357","Adelaide International 1 - Womens Singles",[1641081600,1641686400]],
		["7451","Citta' Di Forli' 1 - Mens Singles",[1641081600,1641686400]],
		["7355","Dove Men+Care Legion Sudamericana Tigre - Mens Singles",[1641081600,1641686400]],
		["7351","Traralgon International - Mens Singles",[1641081600,1641686400]],
		["7441","Melbourne Summer Set - Mens Singles",[1641168000,1641686400]],
		["7447","Melbourne Summer Set 1 - Womens Singles",[1641168000,1641686400]],
		["7449","Melbourne Summer Set 2 - Womens Singles",[1641168000,1641686400]],
		["7313","Adelaide International 2 - Mens Singles",[1641600000,1642204800]],
		["7369","Adelaide International 2 - Womens Singles",[1641600000,1642204800]],
		["7245","Australian Open - Mens Doubles",[1641686400,1643500800]],
		["7244","Australian Open - Mens Singles",[1641686400,1643500800]],
		["7248","Australian Open - Mixed Doubles",[1641686400,1643500800]],
		["7247","Australian Open - Womens Doubles",[1641686400,1643500800]],
		["7246","Australian Open - Womens Singles",[1641686400,1643500800]],
		["7361","Circuito Dove Men Care - Mens Singles",[1641686400,1642291200]],
		["7359","Citta' Di Forli' 2 - Mens Singles",[1641686400,1642291200]],
		["7455","Sydney Tennis Classic - Mens Singles",[1641686400,1642204800]],
		["7453","Sydney Tennis Classic - Womens Singles",[1641686400,1642204800]],
		["7365","Citta' Di Forli' 3 - Mens Singles",[1642291200,1642896000]],
		["7363","Dove Men+Care Legion Sudamericana Concepcion - Mens Singles",[1642291200,1642896000]],
		["7433","Dove Men+Care Challenger Bolivia - Mens Singles",[1642896000,1643414400]],
		["7370","Open Quimper Bretagne Occidentale - Mens Singles",[1642896000,1643500800]],
		["7367","Tennis Ohio Championships - Mens Singles",[1642896000,1643500800]],
		["7339","Open Sud de France - Mens Singles",[1643328000,1644105600]],
		["7337","Cordoba Open - Mens Singles",[1643414400,1644105600]],
		["7373","Cleveland Open - Mens Singles",[1643500800,1644105600]],
		["7341","Tata Open Maharashtra - Mens Singles",[1643500800,1644105600]],
		["7343","ABN Amro World Tennis Tournament - Mens Singles",[1644019200,1644710400]],
		["7345","Argentina Open - Mens Singles",[1644019200,1644710400]],
		["7261","St. Petersburg Ladies Trophy - Womens Singles",[1644019200,1644710400]],
		["7375","Bengaluru Open 1 - Mens Singles",[1644105600,1644710400]],
		["7439","Challenger Cherbourg - La Manche - Mens Singles",[1644105600,1644710400]],
		["7349","Dallas Open - Mens Singles",[1644105600,1644710400]],
		["7353","Delray Beach Open - Mens Singles",[1644624000,1645315200]],
		["7263","Dubai Duty Free Tennis Championships - Womens Singles",[1644624000,1645228800]],
		["7379","Qatar ExxonMobil Open - Mens Singles",[1644624000,1645228800]],
		["7381","Rio Open presented by Claro - Mens Singles",[1644624000,1645315200]],
		["7443","Bengaluru Open 2 - Mens Singles",[1644710400,1645315200]],
		["7445","Citta' Di Forli' 4 - Mens Singles",[1644710400,1645315200]],
		["7377","Open 13 Provence - Mens Singles",[1644710400,1645315200]],
		["7383","Abierto Mexicano Telcel presentado por HSBC - Mens Singles",[1645142400,1645833600]],
		["7265","Qatar Total Energies Open - Womens Singles",[1645142400,1645833600]],
		["7267","Abierto Akron Zapopan - Womens Singles",[1645228800,1646006400]],
		["7385","Chile Dove Men+Care Open - Mens Singles",[1645228800,1645920000]],
		["7389","Dubai Duty Free Tennis Championships - Mens Singles",[1645228800,1645833600]],
		["7459","Citta' Di Forli' 5 - Mens Singles",[1645315200,1645920000]],
		["7457","Terega Open - Mens Singles",[1645315200,1645920000]],
		["7522","Turin - Mens Singles",[1645747200,1646524800]],
		["7269","Abierto GNP Seguros 2022 - Womens Singles",[1645833600,1646524800]],
		["7271","Open 6ème Sens Métropole de Lyon - Womens Singles",[1645833600,1646524800]],
		["7488","Gran Canaria Challenger 1 - Mens Singles",[1645920000,1646524800]],
		["7467","Abierto GNP Seguros - Mens Singles",[1646524800,1647043200]],
		["7469","Challenger Santiago Chile - Mens Singles",[1646524800,1647129600]],
		["7490","Roseto Degli Abruzzi 1 - Mens Singles",[1646524800,1647129600]],
		["7387","BNP Paribas Open - Mens Singles",[1646611200,1647734400]],
		["7273","BNP Paribas Open - Womens Singles",[1646611200,1647734400]],
		["7388","BNP Paribas Open - Mens Doubles",[1646697600,1647734400]],
		["7473","Challenger del Biobio - Mens Singles",[1647129600,1647734400]],
		["7492","Regione Abruzzo Aterno Gas & Power Cup - Mens Singles",[1647129600,1647734400]],
		["7471","Arizona Tennis Classic - Mens Singles",[1647216000,1647734400]],
		["7494","Dove Men+Care Challenger Bolivia 2 - Mens Singles",[1647734400,1648339200]],
		["7520","Falkensteiner Punta Skala - Zadar Open - Mens Singles",[1647734400,1648339200]],
		["7481","FlowBank Challenger Biel/Bienne - Mens Singles",[1647734400,1648339200]],
		["7477","Play In Challenger - Mens Singles",[1647734400,1648339200]],
		["7392","Miami Open presented by Itau - Mens Doubles",[1647820800,1648944000]],
		["7391","Miami Open presented by Itau - Mens Singles",[1647820800,1648857600]],
		["7275","Miami Open presented by Itau - Womens Singles",[1647820800,1648857600]],
		["7483","AnyTech365 Andalucia Open - Mens Singles",[1648339200,1648944000]],
		["7485","Challenger Banca stato Città di Lugano - Mens Singles",[1648339200,1648944000]],
		["7500","Circuito Dove Men+Care Pereira - Mens Singles",[1648339200,1648944000]],
		["7496","Oeiras Challenger 1 - Mens Singles",[1648339200,1648944000]],
		["7498","Open Saint-Brieuc Harmonie Mutuelle - Mens Singles",[1648339200,1648944000]],
		["7666","AnyTech365 Andalucia Open - Womens Singles",[1648425600,1648944000]],
		["7279","Copa Colsanitas presentado por Zurich - Womens Singles",[1648857600,1649548800]],
		["7277","Credit One Charleston Open - Womens Singles",[1648857600,1649548800]],
		["7393","Fayez Sarofim & Co. U.S. Men's Clay Court Championship - Mens Singles",[1648857600,1649548800]],
		["7502","Challenger de Salinas Copa Banco Guayaquil - Mens Singles",[1648944000,1649462400]],
		["7504","Costa Cálida Región de Murcia - Mens Singles",[1648944000,1649548800]],
		["7395","Grand Prix Hassan II - Mens Singles",[1648944000,1649548800]],
		["7518","Mexico City Open - Mens Singles",[1648944000,1649462400]],
		["7506","Oeiras 2 - Mens Singles",[1648944000,1649548800]],
		["7508","Sanremo Challenger - Mens Singles",[1648944000,1649462400]],
		["7398","Rolex Monte-Carlo Masters - Mens Doubles",[1649462400,1650153600]],
		["7397","Rolex Monte-Carlo Masters - Mens Singles",[1649462400,1650153600]],
		["7516","Elizabeth Moore Sarasota Open - Mens Singles",[1649548800,1650153600]],
		["7510","Open Citta Della Disfida - Mens Singles",[1649548800,1650153600]],
		["7513","Open Comunidad de Madrid - Mens Singles",[1649548800,1650153600]],
		["7514","San Luis Open BMW - Mens Singles",[1649548800,1650153600]],
		["7399","Barcelona Open Banc Sabadell - Mens Singles",[1650067200,1650758400]],
		["7281","Porsche Tennis Grand Prix - Womens Singles",[1650067200,1650758400]],
		["7538","San Marcos Open Aguascalientes - Mens Singles",[1650153600,1650758400]],
		["7401","Serbia Open - Mens Singles",[1650153600,1650758400]],
		["7623","Split Open - Mens Singles",[1650153600,1650758400]],
		["7524","Tallahassee Tennis Challenger - Mens Singles",[1650153600,1650758400]],
		["7283","TEB BNP Paribas Tennis Championship Istanbul - Womens Singles",[1650153600,1650758400]],
		["7526","TK Sparta Prague Open - Mens Singles",[1650153600,1650758400]],
		["7403","BMW Open by American Express - Mens Singles",[1650672000,1651363200]],
		["7405","Millennium Estoril Open - Mens Singles",[1650672000,1651363200]],
		["7540","Dove Men+Care Challenger Buenos Aires 2 - Mens Singles",[1650758400,1651363200]],
		["7530","Morelos Open - Mens Singles",[1650758400,1651363200]],
		["7534","Ostra Group Open by Moneta - Mens Singles",[1650758400,1651363200]],
		["7536","Rome Garden Open - Mens Singles",[1650758400,1651363200]],
		["7532","Savannah Challenger presented by St. Joseph's/Candler - Mens Singles",[1650758400,1651363200]],
		["7407","Mutua Madrid Open - Mens Singles",[1650931200,1651881600]],
		["7285","Mutua Madrid Open - Womens Singles",[1650931200,1651881600]],
		["7408","Mutua Madrid Open - Mens Doubles",[1651276800,1651968000]],
		["7637","Danube Upper Austria Open - Mens Singles",[1651363200,1651968000]],
		["7693","Dove Men+Care Salvador De Bahia - Mens Singles",[1651363200,1651968000]],
		["7627","I.CLTK Prague Open - Mens Singles",[1651363200,1651968000]],
		["7640","L 'Open 35 de Saint Malo - Womens Singles",[1651363200,1651968000]],
		["7625","Open Pays d'Aix CEPAC - Mens Singles",[1651363200,1651968000]],
		["7695","Dove Men+Care Coquimbo - Mens Singles",[1651795200,1652572800]],
		["7410","Internazionali BNL d'Italia - Mens Doubles",[1651881600,1652572800]],
		["7409","Internazionali BNL d'Italia - Mens Singles",[1651881600,1652572800]],
		["7287","Internazionali BNL d'Italia - Womens Singles",[1651881600,1652572800]],
		["7629","BNP Paribas Primrose - Mens Singles",[1651968000,1652572800]],
		["7631","Neckarcup Heilbronn - Mens Singles",[1651968000,1652572800]],
		["7633","Shymkent 1 - Mens Singles",[1651968000,1652572800]],
		["7635","Zagreb Open - Mens Singles",[1651968000,1652572800]],
		["7646","Trophee Lagardere - Womens Singles",[1652054400,1652572800]],
		["7648","Liqui Moly Open - Womens Singles",[1652140800,1652572800]],
		["7411","Gonet Geneva Open - Mens Singles",[1652313600,1653091200]],
		["7291","Grand Prix Sar La Princesse Lalla Meryem - Womens Singles",[1652313600,1653091200]],
		["7289","Internationaux de Strasbourg - Womens Singles",[1652313600,1653091200]],
		["7413","Open Parc Auvergne-Rhone-Alpes Lyon - Mens Singles",[1652313600,1653091200]],
		["7687","Challenger Francavilla al Mare - Mens Singles",[1652400000,1653177600]],
		["7683","Shymkent Challenger II - Mens Singles",[1652400000,1653177600]],
		["7685","Tunis Open - Mens Singles",[1652400000,1653177600]],
		["7416","French Open - Mens Doubles",[1652572800,1654387200]],
		["7415","French Open - Mens Singles",[1652572800,1654387200]],
		["7432","French Open - Mixed Doubles",[1652572800,1654387200]],
		["7296","French Open - Womens Doubles",[1652572800,1654387200]],
		["7295","French Open - Womens Singles",[1652572800,1654387200]],
		["7689","Internazionali di Tennis - Citta di Vicenza - Mens Singles",[1653004800,1653782400]],
		["7697","Saturn Oil Open - Mens Singles",[1653004800,1653782400]],
		["7699","Baptist Health Little Rock Open - Mens Singles",[1653609600,1654387200]],
		["7727","Forli 6 - Mens Singles",[1653609600,1654387200]],
		["7719","Poznan Open - Mens Singles",[1653609600,1654387200]],
		["7691","Surbiton Trophy - Mens Singles",[1653609600,1654387200]],
		["7717","Unicredit Czech Open - Mens Singles",[1653609600,1654387200]],
		["7650","Makarska Open - Womens Singles",[1653696000,1654387200]],
		["7652","BBVA Open Internacional De Valencia - Womens Singles",[1654214400,1654992000]],
		["7703","Internazionali di Tennis - Città di Perugia - Mens Singles",[1654214400,1654992000]],
		["7707","Kooperativa Bratislava Open - Mens Singles",[1654214400,1654992000]],
		["7417","Libema Open - Mens Singles",[1654214400,1654992000]],
		["7297","Libema Open - Womens Singles",[1654214400,1654992000]],
		["7705","Open Sopra Steria de Lyon - Mens Singles",[1654214400,1654992000]],
		["7709","Orlando Open - Mens Singles",[1654214400,1654992000]],
		["7701","Rothesay Open Nottingham - Mens Singles",[1654214400,1654992000]],
		["7299","Rothesay Open Nottingham - Womens Singles",[1654214400,1654992000]],
		["7419","Weissenhof - Mens Singles",[1654214400,1654992000]],
		["7303","Bett1 Open - Womens Singles",[1654819200,1655596800]],
		["7713","Blois Challenger - Mens Singles",[1654819200,1655596800]],
		["7421","Cinch Championships - Mens Singles",[1654819200,1655596800]],
		["7721","Corrientes Challenger - Mens Singles",[1654819200,1655596800]],
		["7711","Ilkley Challenger - Mens Singles",[1654819200,1655596800]],
		["7301","Rothesay Classic Birmingham - Womens Singles",[1654819200,1655596800]],
		["7423","Terra Wortmann Open - Mens Singles",[1654819200,1655596800]],
		["7654","Veneto Open Internazionali Confindustria Venezia E Rovigo - Womens Singles",[1654819200,1655596800]],
		["7307","Bad Homburg Open presented by Engel & Volkers - Womens Singles",[1655337600,1656115200]],
		["7425","Mallorca Championships - Mens Singles",[1655337600,1656115200]],
		["7305","Rothesay International Eastbourne - Womens Singles",[1655337600,1656115200]],
		["7715","Milan - Mens Singles",[1655424000,1656201600]],
		["7723","Oeiras 3 - Mens Singles",[1655424000,1656201600]],
		["7427","Rothesay International Eastbourne - Mens Singles",[1655424000,1656115200]],
		["7729","Villa Allende - Mens Singles",[1655424000,1656201600]],
		["7430","Wimbledon - Mens Doubles",[1655769600,1657411200]],
		["7429","Wimbledon - Mens Singles",[1655769600,1657411200]],
		["7431","Wimbledon - Mixed Doubles",[1655769600,1657411200]],
		["7310","Wimbledon - Womens Doubles",[1655769600,1657411200]],
		["7309","Wimbledon - Womens Singles",[1655769600,1657411200]],
		["7725","Luedenscheid - Mens Singles",[1656028800,1656806400]],
		["7731","Malaga Open - Mens Singles",[1656028800,1656806400]],
		["7733","Troyes - Mens Singles",[1656028800,1656806400]],
		["7658","Grand Est Open 88 - Womens Singles",[1656633600,1657411200]],
		["7656","Nordea Open - Womens Singles",[1656633600,1657324800]],
		["7573","Hungarian Grand Prix - Womens Singles",[1657238400,1658016000]],
		["7542","Infosys Hall of Fame Open - Mens Singles",[1657238400,1658016000]],
		["7569","Ladies Open Lausanne - Womens Singles",[1657238400,1658016000]],
		["7544","Nordea Open - Mens Singles",[1657238400,1658016000]],
		["7575","Hamburg European Open - Womens Singles",[1657756800,1658534400]],
		["7577","33rd Palermo Ladies Open - Womens Singles",[1657843200,1658620800]],
		["7546","EFG Swiss Open Gstaad - Mens Singles",[1657843200,1658620800]],
		["7548","Hamburg European Open - Mens Singles",[1657843200,1658620800]],
		["7585","BNP Paribas Poland Open - Womens Singles",[1658448000,1659225600]],
		["7550","Generali Open - Mens Singles",[1658448000,1659139200]],
		["7581","Livesport Prague Open 2022 - Womens Singles",[1658448000,1659225600]],
		["7552","Plava Laguna Croatia Open Umag - Mens Singles",[1658448000,1659225600]],
		["7554","Truist Atlanta Open presented by Fiserv - Mens Singles",[1658448000,1659225600]],
		["7556","Abierto de Tenis Mifel - Mens Singles",[1659052800,1659744000]],
		["7660","BCR Iasi Open - Womens Singles",[1659052800,1659830400]],
		["7558","Citi Open - Mens Singles",[1659052800,1659830400]],
		["7589","Mubadala Silicon Valley Classic - Womens Singles",[1659052800,1659830400]],
		["7561","National Bank Open presented by Rogers - Mens Doubles",[1659571200,1660435200]],
		["7560","National Bank Open presented by Rogers - Mens Singles",[1659657600,1660435200]],
		["7593","National Bank Open presented by Rogers - Womens Singles",[1659657600,1660435200]],
		["7662","Thoreau Tennis Open 125 - Womens Singles",[1659657600,1660435200]],
		["7664","Odlum Brown Vanopen - Womens Singles",[1660176000,1661040000]],
		["7563","Western & Southern Open - Mens Doubles",[1660176000,1661040000]],
		["7562","Western & Southern Open - Mens Singles",[1660262400,1661040000]],
		["7595","Western & Southern Open - Womens Singles",[1660262400,1661040000]],
		["7603","Championnats Banque Nationale de Granby - Womens Singles",[1660780800,1661558400]],
		["7597","Tennis in the Land - Womens Singles",[1660780800,1661558400]],
		["7564","Winston-Salem Open - Mens Singles",[1660780800,1661558400]],
		["7567","US Open - Mens Doubles",[1661126400,1662854400]],
		["7566","US Open - Mens Singles",[1661126400,1662854400]],
		["7568","US Open - Mixed Doubles",[1661126400,1662854400]],
		["7602","US Open - Womens Doubles",[1661126400,1662854400]],
		["7601","US Open - Womens Singles",[1661126400,1662854400]],
		["7642","Zavarovalnica Sava Portoroz - Womens Singles",[1662681600,1663459200]],
		["7578","Astana Open - Mens Singles",[1663286400,1664064000]],
		["7644","Budapest Open 125 - Womens Singles",[1663286400,1664064000]],
		["7571","Moselle Open - Mens Singles",[1663286400,1664064000]],
		["7639","Laver Cup - Mens National_teams",[1663804800,1664064000]],
		["7583","Chengdu Open - Mens Singles",[1663891200,1664668800]],
		["7587","Sofia Open - Mens Singles",[1663891200,1664668800]],
		["7591","Zhuhai Championships - Mens Singles",[1663891200,1664668800]],
		["7598","China Open - Mens Singles",[1664496000,1665273600]],
		["7605","Rakuten Japan Open Tennis Championships - Mens Singles",[1664496000,1665273600]],
		["7622","Rolex Shanghai Masters - Mens Doubles",[1665014400,1665878400]],
		["7621","Rolex Shanghai Masters - Mens Singles",[1665014400,1665878400]],
		["7607","European Open - Mens Singles",[1665705600,1666483200]],
		["7609","Stockholm Open - Mens Singles",[1665705600,1666483200]],
		["7668","Abierto Tampico - Womens Singles",[1666310400,1667088000]],
		["7613","Erste Bank Open - Mens Singles",[1666310400,1667088000]],
		["7615","Swiss Indoors Basel - Mens Singles",[1666310400,1667088000]],
		["7670","Dow Tennis Classic - Womens Singles",[1666915200,1667692800]],
		["7680","Puerto Vallarta Open - Womens Singles",[1666915200,1667692800]],
		["7617","Rolex Paris Masters - Mens Doubles",[1666915200,1667692800]],
		["7318","Rolex Paris Masters - Mens Singles",[1666915200,1667692800]],
		["7672","Buenos Aires Open - Womens Singles",[1667520000,1668297600]],
		["7618","Intesa Sanpaolo Next Gen ATP Finals - Mens Singles",[1667779200,1668211200]],
		["7674","Montevideo Open - Womens Singles",[1668124800,1668902400]],
		["7620","Nitto ATP Finals - Mens Doubles",[1668211200,1668902400]],
		["7619","Nitto ATP Finals - Mens Singles",[1668211200,1668902400]],
		["7676","Open Angers Arena Loire - Womens Singles",[1669939200,1670716800]],
		["7678","Open BLS de Limoges - Womens Singles",[1670544000,1671321600]]
	]
	let tennisDates = {};

	for(let i of tennisArray){

		let d = i[2]
		
		if((now10 >= d[0]) && (now10 <= (d[1] + (2419200 / 2)))){//From start date to two weeks after conclusion
			tennisDates[i[0]] = i[1]
		}
	}

	for(let i of Object.keys(tennisDates)){
		Opta('select[name="tennis"]').append(`<option value="live_scores|tennis|${i}|2022">${tennisDates[i].replace(/_/g,'')}</option>`)
	}
	/*CURATE TENNIS MENU*/

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
		loadWidget({sport: e.target.name})
	})
};

constructNav();
//end of function to construct navigation menu - the above will need to be edited to accommodate menu curation

//function to populate sports widgets
const loadWidget = (obj)=>{

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
			<!--<div class="banner-wr mar-40-0">
				<div class="banner">
					<div class="banner__img">
						<div id="div-1" data-google-query-id="CK7s14yrmvgCFRGT5god468JZQ">
							<div id="google_ads_iframe_/135062774/newsnet.index_0__container__" style="border: 0pt none; margin: auto; text-align: center;">
								<iframe id="google_ads_iframe_/135062774/newsnet.index_0" name="google_ads_iframe_/135062774/newsnet.index_0" title="3rd party ad content" width="970" height="250" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" role="region" aria-label="Advertisement" tabindex="0" srcdoc="" style="border: 0px; vertical-align: bottom;" data-google-container-id="1" data-gtm-yt-inspected-4="true" data-load-complete="true"></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>-->
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