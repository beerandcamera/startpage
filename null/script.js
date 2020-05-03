document.addEventListener("keydown", event => {
	if (![8, 9, 20, 32, 37, 38, 39, 40].includes(event.keyCode)) {
		document.getElementById('search').focus();
	}
	if (event.keyCode == 27) {
		document.getElementById('search').value = '';
	}
});

function linkup(val) {
	const sites = [
		'thehiddenbay'
		,'facebook'
		,'twitter'
		,'linkedin'
		,'youtube'
		,'github'
		,'instagram'
		,'reddit'
		,'couchsurfing'
		,'airbnb'
		,'indeed'
		,'pdfdrive'
		,'trademe.nz'
		,'mega.nz'
		,'invidio.us'
		,'libgen.is'
	];
	
	let website,domain;
	for (site of sites) {
		if (site.indexOf(val) > -1) {website=site; break;}
	}
	
	//	if website: goto website
	//	else if board: goto board
	//	else search on ddg
	if (website) {
		domain = website.indexOf(".") == -1 ? ".com" : "";
		url = `https://${website+domain}`;
		window.open(url);
	} else if (val[0] == "/") {
		console.log("testing chan");
		window.open(`https://4chan.org${val}catalog`);
	} else {
		window.open(`https://bing.com/?q=${val}&PC=U531`);
	}
}

function search(e) {
	console.log("testing anything");
	if (e.keyCode == 13) {
		var val = document.getElementById("search").value;
		if (val.trim().indexOf(".") > -1 && val.indexOf(" ") == -1) {
			window.open(`https://${val.trim()}`);
		} else {
			linkup(val);
		}
		return 1;
	}
}

document.getElementById("search").focus();
document.getElementById("search").addEventListener("keypress", (e) => search(e));