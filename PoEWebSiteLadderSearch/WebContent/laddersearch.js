/*
 * Defining our classes to store information
 */

var trans = {
	en : {
		leagueButton : {
			tooltip : {
				startsIn : "Starts in: ",
				EndsIn : "Ends in: ",
				RunningSince : "Running since: ",
				ended : "Ended ",
				ago : "ago",
				neverEnds : "Never ends"
			}
		},
		table : {
			on : "On",
			rank : "Rank",
			name : "Name",
			level : "Level",
			charClass : "Class",
			xp : "XP",
			xpToNextRank : "XP to next rank"
		},
		refreshEvery : "Refresh every",
		seconds : "seconds",
		tooltips : {
			autoRefreshButton : "You can toggle autorefresh here.",
			refreshSpinner : "Enter the PathOfExile ladderplace to which data should be loaded. (15000 is maximum)",
			delaySlider : "Use this slider to select the delay between autoupdates.",
			refreshButton : "Do a manual refresh.",
			defaultAndHarcoreButton : "This shows the Default and Harcore chars in one list!"
		},
		buttons : {
			refresh : "Refresh",
			autoRefresh : "Auto Refresh"
		},
		oLanguage : {
			sInfoThousands : ","
		},
		infoDialogHtml : "PathOfExile Ladder Search was made because I didn't find a site that worked and had the functionality I needed.<br />If you have anything I should add to it, feel free to contact me on the PathOfExile site: <a href='http://www.pathofexile.com/account/view-profile/speedprog' target='_blank'>Here</a>"

	},
	de : {
		leagueButton : {
			tooltip : {
				startsIn : "Startet in: ",
				EndsIn : "Endet in: ",
				RunningSince : "Läuft seit: ",
				ended : "Hörte vor ",
				ago : "auf",
				neverEnds : "Ended nie"
			}
		},
		table : {
			on : "On",
			rank : "Rang",
			name : "Name",
			level : "Level",
			charClass : "Klasse",
			xp : "EP",
			xpToNextRank : "EP bis zum nächsten Rang"
		},
		refreshEvery : "Alle",
		seconds : "Sekunden neuladen",
		tooltips : {
			autoRefreshButton : "Hier kanst du das automatische neuladen an- und abschalten.",
			refreshSpinner : "Gebe den Rang ein bis zu dem daten geladen werden sollen. (Höchstens 15000)",
			delaySlider : "Hier kannst du die wartezeit zwischen den neuladen einstellen.",
			refreshButton : "Führe ein manuelles neuladen aus.",
			defaultAndHarcoreButton : "This shows the Default and Harcore chars in one list!"
		},
		buttons : {
			refresh : "Neuladen",
			autoRefresh : "Automatisches Neuladen"
		},
		oLanguage : {
			oAria : {},
			oPaginate : {
				sFirst : "Erste",
				sLast : "Letzte",
				sNext : "Nächste",
				sPrevious : "Vorherige"

			},
			sEmptyTable : "Es sind keine Daten vorhanden",
			sInfo : "Es werden _TOTAL_ Einträge angezeigt (_START_ - _END_)",
			sInfoEmpty : "Es sinde keine Daten zur anzeige vorhanden",
			sInfoFiltered : " - aus _MAX_ einträgen gefiltert",
			sInfoThousands : ".",
			sLengthMenu : "Zeige _MENU_ Einträge",
			sSearch : "Suche:",
			sZeroRecords : "Sie haven alle Einträge ausgefiltert"
		},
		infoDialogHtml : "PathOfExile Ladder Search wurde erstellt da ich keine Seite gefunden habe die funktionierte und getboten hat was ich wollte.<br />Falls sie wissen wie ich die Seite verbessern könnte, können sie mich gerne auf der PathOfExile Seite kontaktieren: <a href='http://www.pathofexile.com/account/view-profile/speedprog' target='_blank'>Here</a>"
	},
	de1337 : {
		leagueButton : {
			tooltip : {
				startsIn : "574r737 1n: ",
				EndsIn : "3nd37 1n: ",
				RunningSince : "läuf7 5317: ",
				ended : "hör73 v0r ",
				ago : "4uf",
				neverEnds : "3nd3d n13"
			}
		},
		table : {
			on : "0n",
			rank : "r4n6",
			name : "n4m3",
			level : "l3v3l",
			charClass : "kl4553",
			xp : "3p",
			xpToNextRank : "3p b15 zum näch573n r4n6"
		},
		refreshEvery : "4ll3",
		seconds : "53kund3n n3ul4d3n",
		tooltips : {
			autoRefreshButton : "h13r k4n57 du d45 4u70m4715ch3 n3ul4d3n 4n- und 4b5ch4l73n.",
			refreshSpinner : "63b3 d3n r4n6 31n b15 zu d3m d473n 63l4d3n w3rd3n 50ll3n. (höch573n5 15000)",
			delaySlider : "h13r k4nn57 du d13 w4r73z317 zw15ch3n d3n n3ul4d3n 31n573ll3n.",
			refreshButton : "führ3 31n m4nu3ll35 n3ul4d3n 4u5.",
			defaultAndHarcoreButton : "This shows the Default and Harcore chars in one list!"
		},
		buttons : {
			refresh : "n3ul4d3n",
			autoRefresh : "4u70m4715ch35 n3ul4d3n"
		},
		oLanguage : {
			oAria : {},
			oPaginate : {
				sFirst : "3r573",
				sLast : "l37z73",
				sNext : "näch573",
				sPrevious : "v0rh3r163"
			},
			sEmptyTable : "35 51nd k31n3 d473n v0rh4nd3n",
			sInfo : "35 w3rd3n _TOTAL_ 31n7rä63 4n63z3167 (_START_ - _END_)",
			sInfoEmpty : "35 51nd3 k31n3 d473n zur 4nz3163 v0rh4nd3n",
			sInfoFiltered : "- 4u5 _m4x_ 31n7rä63n 63f1l73r7",
			sInfoThousands : ".",
			sLengthMenu : "z3163 _MENU_ 31n7rä63",
			sSearch : "5uch3:",
			sZeroRecords : "513 h4v3n 4ll3 31n7rä63 4u563f1l73r7"
		},
		infoDialogHtml : "PathOfExile Ladder Search was made because I didn't find a site that worked and had the functionality I needed.<br />If you have anything I should add to it, feel free to contact me on the PathOfExile site: <a href='http://www.pathofexile.com/account/view-profile/speedprog' target='_blank'>Here</a>"
	}
};
var defaultAndHardcoreId = "Default and Hardcore";
var usedLang = "en";
var entryTableVersion = 3;
function Ladder() {
	this.id = "";
	this.endAt = "";
	this.startAt = "";
	this.event = false;
	this.description = "";
}

function Character() {
	this.name = "";
	this.charClass = "";
	this.level = 0;
	this.experience = 0;
	this.expToNextRank = 0;
}

function Entry() {
	this.online = false;
	this.rank = 0;
	this.character = new Character();
	this.account = "";
}

function Account() {
	this.name = "";
}

function EntryTable() {
	this.entrysByRank = [];
	this.lastUpdate = 0;
	this.league = "";
	this.version = entryTableVersion;
}

function MergedEntryTable() {
	this.lastUpdate = 0;
	this.defaultLadder = new EntryTable();
	this.hardcoreLadder = new EntryTable();
	this.mergedLadder = new EntryTable();
	this.getExp = function(ladder, pos) {
		if (ladder === "default") {
			return this.defaultLadder.entrysByRank[pos].character.experience;
		} else {
			return this.hardcoreLadder.entrysByRank[pos].character.experience;
		}
	};
	this.getEntry = function(ladder, pos) {
		if (ladder === "default") {
			return this.defaultLadder.entrysByRank[pos];
		} else {
			return this.hardcoreLadder.entrysByRank[pos];
		}
	};
	this.merge = function() {
		var posDefault = 1, posHardcore = 1, posMerged = 1;
		var xpDefaultAtPos = 0, xpHardcoreAtPos = 0;
		if (this.defaultLadder.entrysByRank.length > 1) {
			xpDefaultAtPos = this.defaultLadder.entrysByRank[1].character.experience;
		}
		if (this.hardcoreLadder.entrysByRank.length > 1) {
			xpHardcoreAtPos = this.hardcoreLadder.entrysByRank[1].character.experience;
		}
		while ((posDefault < this.defaultLadder.entrysByRank.length || posHardcore < this.hardcoreLadder.entrysByRank.length)
				&& (xpDefaultAtPos !== -1 || xpHardcoreAtPos !== -1)) {
			if (xpDefaultAtPos > xpHardcoreAtPos) {
				this.mergedLadder.entrysByRank[posMerged] = this.getEntry(
						"default", posDefault);
				posDefault = posDefault + 1;
				if (posDefault < this.defaultLadder.entrysByRank.length) {
					xpDefaultAtPos = this.getExp("default", posDefault);
				} else {
					xpDefaultAtPos = -1;
				}
			} else {
				this.mergedLadder.entrysByRank[posMerged] = this.getEntry(
						"hardcore", posHardcore);
				posHardcore = posHardcore + 1;
				if (posHardcore < this.hardcoreLadder.entrysByRank.length) {
					xpHardcoreAtPos = this.getExp("hardcore", posHardcore);
				} else {
					xpHardcoreAtPos = -1;
				}
			}
			posMerged = posMerged + 1;
		}
	};
}

function loadEntryTable(name) {
	var table = JSON.parse(sessionStorage.getItem("entryTable" + name));
	if (table !== null && table.version !== null && table.league !== null) {
		if (table.version !== entryTableVersion) {
			table = new EntryTable();
			table.league = name;
		}
	} else {
		table = new EntryTable();
		table.league = name;
	}
	if (table.league !== name) {
		table = new EntryTable();
		table.league = name;
	}
	return table;
}

function saveEntryTable(table) {
	try {
		sessionStorage.setItem("entryTable" + table.league, JSON
				.stringify(table));
	} catch (err) {
		console.log("Your session storage is to small!");
	}
	return;
}
var mergedEntryTable = new MergedEntryTable();
var ladderArray = [];
var entryTable = loadEntryTable("Default");
var numberOfQuerys = 0;
var intervalId = 0;
var isRefreshing = false;
var createNewEntryTable = true;
var lastRefresh = 0;
/*
 * okay lets get going :) we us jquery here to get the data from poe website
 */
var startAt = 1;
var endAt = 100;
var limitTo = 200;

function getLadder(from, to, limit, league, table) {
	/*
	 * uncomment to skip loading window.clearInterval(intervalId); // now start
	 * the wait for all the callbacks intervalId =
	 * window.setInterval(waitForQuerys, 1000); return limit;
	 */
	from = from - 1;
	var numOfEntries = (to - from), toDo = numOfEntries;
	if (toDo < limit) {
		limit = toDo;
	}

	$
			.ajax(
					{
						url : 'http://api.pathofexile.com/ladders/' + league
								+ '?offset=' + (from + (numOfEntries - toDo))
								+ '&limit=' + limit,
						dataType : 'jsonp'
					})
			.done(
					function(ladder) {
						// console.log("numberOfQuerys: "+numberOfQuerys);
						// console.log("Callback started!");
						var isError = ladder.error, entries = {}, c = 0, jEntry = {}, entry = {}, jChar = {}, character = {}, current = 0, jAccount = {}, account = {};

						if (isError !== undefined) {
							console.log("We are trying to fast!");
						} else {
							// console.log(ladder);
							entries = ladder.entries;
							// console.log(entries);
							for (c = 0; c < entries.length; c = c + 1) {
								// console.log("Do entrynum: "+c);
								jEntry = entries[c];
								entry = new Entry();
								// console.log(jEntry);
								entry.online = jEntry.online;
								entry.rank = jEntry.rank;
								character = new Character();
								jChar = jEntry.character;
								// console.log(jChar);
								character.experience = jChar.experience;
								character.level = jChar.level;
								character.name = jChar.name;
								character.charClass = jChar['class'];
								entry.character = character;
								account = new Account();
								jAccount = jEntry.account;
								account.name = jAccount.name;
								entry.account = account;
								table.entrysByRank[entry.rank] = entry;
							}
						}
						current = $('#progressbar').progressbar("option",
								"value");
						$('#progressbar').progressbar("option", "value",
								(current + limit));
						numberOfQuerys -= 1;
						// updateTableWith(entryTable.entrysByRank);
						// console.log("numberOfQuerys: "+numberOfQuerys);
						// console.log("Callback ended!");
					});
	numberOfQuerys += 1;
	return limit;
}

function updateTableWith(eTable) {
	var data = [], c = 0, divOnline = '<div style="margin: auto; width:20px; height:20px; background-color:green"></span>', divOffline = '<div style="margin: auto; width:20px; height:20px; background-color:red"></span>', div = "", entry = {};
	for (c = 1; c < eTable.length; c = c + 1) {
		entry = eTable[c];
		div = entry.online ? divOnline : divOffline;

		data[c - 1] = [ div, entry.rank,
				entry.account.name + " : " + entry.character.name,
				entry.character.level, entry.character.charClass,
				entry.character.experience, entry.character.expToNextRank ];
	}
	$('#nameTable').dataTable().fnClearTable();
	$('#nameTable').dataTable().fnAddData(data);
}

function waitForQuerys() {
	var entry = {}, c = 1;
	if (numberOfQuerys === 0) {
		for (c = 1; c < entryTable.entrysByRank.length; c++) {
			entry = entryTable.entrysByRank[c];
			if (entry.rank > 1) {
				entry.character.expToNextRank = (entryTable.entrysByRank[(entry.rank - 1)].character.experience - entry.character.experience);
			} else {
				entry.character.expToNextRank = 0;
			}
		}
		$("#progressbar").progressbar("destroy");
		$('#pPercent').text("");
		var selectedLadder = $("#league :radio:checked").button("option",
				"label");
		try {
			sessionStorage.setItem("entryTable" + selectedLadder, JSON
					.stringify(entryTable));
		} catch (err) {
			console.log("Your session storage is to small!");
		}

		if (intervalId !== 0) {
			window.clearInterval(intervalId);
			intervalId = 0;
		}
		updateTableWith(entryTable.entrysByRank);
		isRefreshing = false;
	}
}

function waitForMergedQuerys() {
	var entry = {};
	if (numberOfQuerys === 0) {
		mergedEntryTable.merge();
		var table = mergedEntryTable.mergedLadder;
		// go and give them their new rank :)
		for ( var c = 1; c < table.entrysByRank.length; c = c + 1) {
			table.entrysByRank[c].rank = c;
			entry = table.entrysByRank[c];
			if (entry.rank > 1) {
				entry.character.expToNextRank = (table.entrysByRank[(entry.rank - 1)].character.experience - entry.character.experience);
			} else {
				entry.character.expToNextRank = 0;
			}
		}
		$("#progressbar").progressbar("destroy");
		$('#pPercent').text("");
		var selectedLadder = $("#league :radio:checked").button("option",
				"label");
		try {
			sessionStorage.setItem("entryTable" + selectedLadder, JSON
					.stringify(mergedEntryTable));
		} catch (err) {
			console.log("Your session storage is to small!");
		}

		if (intervalId !== 0) {
			window.clearInterval(intervalId);
			intervalId = 0;
		}
		updateTableWith(mergedEntryTable.mergedLadder.entrysByRank);
		isRefreshing = false;
	}
}

function updateLadder(league) {
	// TODO: continue here with the merged ladder table
	if (league === defaultAndHardcoreId) {
		forceMergedRefresh();
	} else {
		var now = Date.now();
		if (now - entryTable.lastUpdate > 180000) {
			var l = entryTable.league;
			entryTable = new EntryTable();
			entryTable.league = l;
			forceRefresh(l, entryTable);
		} else {
			updateTableWith(entryTable.entrysByRank);
			window.clearInterval(intervalId);
		}
	}
}

function forceMergedRefresh() {
	if (!isRefreshing) {
		isRefreshing = true;
		endAt = $('#refreshTill').spinner("value");
		if (endAt > 15000) {
			endAt = 15000;
		}
		$('#progressbar').progressbar({
			max : (endAt * 2),
			value : 0,
			change : progressChanged
		});
		$('#pPercent').text("0%");
		// TODO: it does not give him table here it gives a copy it seems
		intervalId = window.setInterval(function() {
			doForcedMergeRefresh(defaultAndHardcoreId, mergedEntryTable);
		}, 500);
	}
}

function doForcedMergeRefresh(league, table) {
	getLadder(startAt, endAt, limitTo, "Default", table.defaultLadder);
	startAt += getLadder(startAt, endAt, limitTo, "Hardcore",
			table.hardcoreLadder);
	if (endAt - startAt <= 0) {
		startAt = 1;
		window.clearInterval(intervalId);
		// now start the wait for all the callbacks
		intervalId = window.setInterval(waitForMergedQuerys, 1000);
		// update entryTable timestamp
		table.lastUpdate = Date.now();
	}
}

function doForcedRefresh(league, table) {
	startAt += getLadder(startAt, endAt, limitTo, league, table);
	if (endAt - startAt <= 0) {
		startAt = 1;
		window.clearInterval(intervalId);
		// now start the wait for all the callbacks
		intervalId = window.setInterval(waitForQuerys, 1000);
		// update entryTable timestamp
		table.lastUpdate = Date.now();
	}

}

function forceRefresh(league, table) {
	if (!isRefreshing) {
		isRefreshing = true;
		endAt = $('#refreshTill').spinner("value");
		if (endAt > 15000) {
			endAt = 15000;
		}
		$('#progressbar').progressbar({
			max : endAt,
			value : 0,
			change : progressChanged
		});
		$('#pPercent').text("0%");
		// TODO: it does not give him table here it gives a copy it seems
		intervalId = window.setInterval(function() {
			doForcedRefresh(league, table);
		}, 500);
	}
}

function ladderChanged() {
	// save old ladder
	saveEntryTable(entryTable);
	var ladderName = $(this).button("option", "label");
	if (ladderName !== defaultAndHardcoreId) {
		entryTable = loadEntryTable(ladderName);
	}
	updateLadder(ladderName);
}

function createLadderButtons() {
	var cLadder = 0, ladder = {}, leagues = document.getElementById("league"), input = {}, labeltxt = {}, label = {};
	// allright add a button for Hardcore and Default to be shown in one list :)
	// this will be interesting :D

	// add the mergedleague button, remember to add the tooltip too!
	input = document.createElement("input");
	input.setAttribute("type", "radio");
	input.setAttribute("id", defaultAndHardcoreId);
	input.setAttribute("name", "radio");
	if (cLadder === 0) {
		input.setAttribute("checked", "checked");
	}
	label = document.createElement("label");
	label.setAttribute("for", defaultAndHardcoreId);
	labeltxt = document.createTextNode(defaultAndHardcoreId);
	label.appendChild(labeltxt);
	leagues.appendChild(input);
	leagues.appendChild(label);
	for (cLadder = 0; cLadder < ladderArray.length; cLadder = cLadder + 1) {
		ladder = ladderArray[cLadder];
		input = document.createElement("input");
		input.setAttribute("type", "radio");
		input.setAttribute("id", ladder.id);
		input.setAttribute("name", "radio");
		if (cLadder === 0) {
			input.setAttribute("checked", "checked");
		}
		label = document.createElement("label");
		label.setAttribute("for", ladder.id);
		labeltxt = document.createTextNode(ladder.id);
		label.appendChild(labeltxt);
		leagues.appendChild(input);
		leagues.appendChild(label);
	}
	// now make a buttonset out of it
	$("#league").buttonset();
	$("#league :radio").click(ladderChanged);
	$("#league :radio").click(
			function() {
				_gaq.push([ '_trackEvent', 'ButtonClick',
						$(this).button("option", "label") ]);
			});

	// create the tooltip for the mergedleagues button!

	var label = (document.getElementById(defaultAndHardcoreId)).nextSibling;
	$(label).tooltip({
		content : trans[usedLang].tooltips.defaultAndHardcoreButton
	});
	for (cLadder = 0; cLadder < ladderArray.length; cLadder = cLadder + 1) {
		ladder = ladderArray[cLadder];
		var label = (document.getElementById(ladder.id)).nextSibling;
		$(label)
				.tooltip(
						{
							content : function() {
								var id = this.previousSibling.id, ladder = {};
								// search for the id;
								for ( var c = 0; c < ladderArray.length; c = c + 1) {
									if (ladderArray[c].id === id) {
										ladder = ladderArray[c];
										break;
									}
								}
								// running since and starts in
								var millToStart = Date.parse(ladder.startAt)
										- ((new Date()).getTime());
								var desc = ladder.description;
								if (millToStart > 0) {
									desc += "<br />"
											+ trans[usedLang].leagueButton.tooltip.startsIn
											+ millsToHMS(millToStart);
								} else {
									millToStart = millToStart * (-1);
									desc += "<br />"
											+ trans[usedLang].leagueButton.tooltip.RunningSince
											+ " " + millsToHMS(millToStart);
								}
								// ends in and never ends
								if (ladder.endAt !== null) {
									var millsToEnd = Date.parse(ladder.endAt)
											- ((new Date()).getTime());
									if (millsToEnd > 0) {
										desc += "<br />"
												+ trans[usedLang].leagueButton.tooltip.EndsIn
												+ millsToHMS(millsToEnd);
									} else {
										desc += "<br />"
												+ trans[usedLang].leagueButton.tooltip.Ended
												+ " "
												+ millsToHMS(millsToEnd * (-1))
												+ " "
												+ trans[usedLang].leagueButton.tooltip.ago;
									}
								} else {
									desc += "<br />"
											+ trans[usedLang].leagueButton.tooltip.neverEnds;
								}
								return desc;
							},
							items : "label"
						});
	}
}

function millsToHMS(mills) {
	var h = Math.floor(mills / 3600000);
	mills = mills % 3600000;
	var m = Math.floor(mills / 60000);
	var s = Math.floor((mills % 60000) / 1000);
	return (h + ":" + m + ":" + s);
}

function progressChanged(event, ui) {
	var val = $('#progressbar').progressbar("option", "value"), max = $(
			'#progressbar').progressbar("option", "max"), perc = Math
			.round((val / max) * 100);
	$('#pPercent').text(perc + "%");
}

function addToTable(data) {
	$('#nameTable').dataTable().fnAddData(data);
}

function doStuff() {
	var time = $("#refreshSpeed").slider("option", "value");
	if ((Date.now() - lastRefresh) > (time * 1000)
			&& document.getElementById("autoRefresh").checked) {
		var ladderName = $("#league :radio:checked").attr("id");
		if (ladderName != defaultAndHardcoreId) {
			forceRefresh(entryTable.league, entryTable);
		} else {
			forceMergedRefresh();
		}
		lastRefresh = Date.now();
	}
}

function getLadders() {
	$
			.ajax({
				url : 'http://api.pathofexile.com/leagues',
				dataType : 'jsonp'
			})
			.done(
					function(ladders) {
						var isError = (ladders.error === null), laddernum = 0, ladder = {}, sLadder = {};
						if (isError) {
							return;
						}
						for (laddernum = 0; laddernum < ladders.length; laddernum = laddernum + 1) {
							ladder = ladders[laddernum];
							sLadder = new Ladder();
							sLadder.id = ladder.id;
							sLadder.endAt = ladder.endAt;
							sLadder.startAt = ladder.startAt;
							sLadder.event = ladder.event;
							sLadder.description = ladder.description;
							var millToStart = Date.parse(ladder.startAt)
							- ((new Date()).getTime());
							if (millToStart < 43200000) { // 12h
								ladderArray.push(sLadder);
							}
						}
						// we go the ladders :) now start the other stuff!
						createLadderButtons();
						updateLadder("Default");
						window.setInterval(doStuff, 1000);
					});
}

function addSeparatorsNF(nStr, inD, outD) {
	nStr += '';
	var sep = trans[usedLang].oLanguage.sInfoThousands, dpos = nStr
			.indexOf(inD), nStrEnd = '', rgx = /(\d+)(\d{3})/;
	if (dpos !== -1) {
		nStrEnd = outD + nStr.substring(dpos + 1, nStr.length);
		nStr = nStr.substring(0, dpos);
	}

	while (rgx.test(nStr)) {
		nStr = nStr.replace(rgx, '$1' + sep + '$2');
	}
	return nStr + nStrEnd;
}

function getSelectedLang() {
	var langPara = location.hash.match(/lang=[a-zA-Z_\-0-9]+/);
	if (langPara !== null) {
		langPara = langPara[0];
		langPara = langPara.substring(5);
		if (trans[langPara] !== undefined && trans[langPara] !== null) {
			return langPara;
		}
	}
	return usedLang;
}

function languageChanged() {
	var sLang = $("select option:selected").val();
	if (trans[sLang] !== undefined && trans[sLang] !== null) {
		usedLang = sLang;
		location.hash = "lang=" + sLang;
		setLangUiElements();
	}
}

function setLangUiElements() {
	$('#refresh').button("option", "label", trans[usedLang].buttons.refresh);
	$('#refreshSpeedShow').text(
			trans[usedLang].refreshEvery + " " + $('#refreshSpeed').val() + " "
					+ trans[usedLang].seconds);
	$('#autoRefresh').button("option", "label",
			trans[usedLang].buttons.autoRefresh);
	$('#infoTextP').html(trans[usedLang].infoDialogHtml);
	$('#nameTable')
			.dataTable(
					{
						"oLanguage" : trans[usedLang].oLanguage,
						"aaData" : [],
						"aoColumns" : [
								{
									"sTitle" : trans[usedLang].table.On,
									"sType" : "html",
									"bSortable" : false,
									"sWidth" : "10px"
								},
								{
									"sTitle" : trans[usedLang].table.rank,
									"sType" : "numeric",
									"sWidth" : "40px"
								},
								{
									"sTitle" : trans[usedLang].table.name,
									"sType" : "string",
									"sWidth" : "100px",
									"mRender" : function(data, type, full) {
										var split = data.split(" : ");
										if (type === 'display') {
											var html = '<a target="_blank" href="http://www.pathofexile.com/account/view-profile/'
													+ split[0]
													+ '">'
													+ split[1]
													+ " ("
													+ split[0] + ")" + '</a>';
											return html;
										} else {
											return split[1] + " " + split[0];
										}
									}
								},
								{
									"sTitle" : trans[usedLang].table.level,
									"sType" : "numeric",
									"sWidth" : "20px"
								},
								{
									"sTitle" : trans[usedLang].table.charClass,
									"sType" : "string",
									"sWidth" : "100px"
								},
								{
									"sTitle" : trans[usedLang].table.xp,
									"sType" : "numeric",
									"sClass" : "alignRight",
									"sWidth" : "100px",
									"mRender" : function(data, type, full) {
										if (type === 'display') {
											return addSeparatorsNF(data, ".",
													".");
										}
										return data;
									}
								},
								{
									"sTitle" : trans[usedLang].table.xpToNextRank,
									"sType" : "numeric",
									"sClass" : "alignRight",
									"sWidth" : "100px",
									"mRender" : function(data, type, full) {
										if (type === 'display') {
											return addSeparatorsNF(data, ".",
													".");
										}
										return data;
									}
								} ],
						bJQueryUI : true,
						"sPaginationType" : "full_numbers",
						"bStateSave" : true,
						"bDeferRender" : true,
						"bProcessing" : true,
						"bAutoWidth" : false,
						"bDestroy" : true
					});
	updateTableWith(entryTable.entrysByRank);
}

$(window)
		.load(
				function() {
					usedLang = getSelectedLang();
					$("#language").change(languageChanged);
					$('#autoRefreshSettings').toggle();
					$('#info').click(function() {
						$("#infotext").dialog({
							height : "auto",
							modal : true
						});
					});
					$('#refresh').button({
						label : trans[usedLang].buttons.refresh
					});
					$('#refresh').click(
							function() {
								var ladderName = $("#league :radio:checked")
										.attr("id");
								if (ladderName !== defaultAndHardcoreId) {
									forceRefresh(ladderName, entryTable);
								}
								forceMergedRefresh();
							});
					$('#refresh').click(function() {
						_gaq.push([ '_trackEvent', 'ButtonClick', "Refresh" ]);
					});
					$('#nameTable')
							.dataTable(
									{
										"oLanguage" : trans[usedLang].oLanguage,
										"aaData" : [],
										"aoColumns" : [
												{
													"sTitle" : trans[usedLang].table.On,
													"sType" : "html",
													"bSortable" : false,
													"sWidth" : "10px"
												},
												{
													"sTitle" : trans[usedLang].table.rank,
													"sType" : "numeric",
													"sWidth" : "40px"
												},
												{
													"sTitle" : trans[usedLang].table.name,
													"sType" : "string",
													"sWidth" : "100px",
													"mRender" : function(data,
															type, full) {
														var split = data
																.split(" : ");
														if (type === 'display') {
															var html = '<a target="_blank" href="http://www.pathofexile.com/account/view-profile/'
																	+ split[0]
																	+ '">'
																	+ split[1]
																	+ " ("
																	+ split[0]
																	+ ")"
																	+ '</a>';
															return html;
														} else {
															return split[1]
																	+ " "
																	+ split[0];
														}
													}
												},
												{
													"sTitle" : trans[usedLang].table.level,
													"sType" : "numeric",
													"sWidth" : "20px"
												},
												{
													"sTitle" : trans[usedLang].table.charClass,
													"sType" : "string",
													"sWidth" : "100px"
												},
												{
													"sTitle" : trans[usedLang].table.xp,
													"sType" : "numeric",
													"sClass" : "alignRight",
													"sWidth" : "100px",
													"mRender" : function(data,
															type, full) {
														if (type === 'display') {
															return addSeparatorsNF(
																	data, ".",
																	".");
														}
														return data;
													}
												},
												{
													"sTitle" : trans[usedLang].table.xpToNextRank,
													"sType" : "numeric",
													"sClass" : "alignRight",
													"sWidth" : "100px",
													"mRender" : function(data,
															type, full) {
														if (type === 'display') {
															return addSeparatorsNF(
																	data, ".",
																	".");
														}
														return data;
													}
												} ],
										bJQueryUI : true,
										"sPaginationType" : "full_numbers",
										"bStateSave" : true,
										"bDeferRender" : true,
										"bProcessing" : true,
										"bAutoWidth" : false
									});
					$('#refreshTill').spinner({
						min : 100,
						max : 15000,
						step : 100,
						page : 10,
						incremental : true
					});
					$('#refreshSpeedShow').text(
							trans[usedLang].refreshEvery + " 60 "
									+ trans[usedLang].seconds);
					$('#autoRefresh').button({
						label : trans[usedLang].buttons.autoRefresh
					});
					$('#autoRefresh').click(function() {
						$('#autoRefreshSettings').toggle("fade");
					});
					$("#autoRefresh").click(
							function() {
								_gaq.push([
										'_trackEvent',
										'ButtonClick',
										"AutoRefresh",
										($(this).attr("checked")) ? "On"
												: "Off" ]);
							});
					document.getElementById("autoRefresh").checked = false;
					$('#refreshSpeed').slider(
							{
								min : 30,
								max : 3600,
								step : 10,
								value : 60,
								change : function(event, ui) {
									$('#refreshSpeedShow').text(
											trans[usedLang].refreshEvery + " "
													+ ui.value + " "
													+ trans[usedLang].seconds);
								}
							});
					$("#autoRefreshSettings").css({
						"width" : "500px"
					});
					$("#refreshSpeedShow").css({
						"width" : "100%"
					});
					$("label[for='autoRefresh']").tooltip({
						content : function() {
							return trans[usedLang].tooltips.autoRefreshButton;
						}
					});
					$("#autoRefreshSettings").tooltip({
						content : function() {
							return trans[usedLang].tooltips.delaySlider;
						}
					});
					$("#refresh").tooltip({
						content : function() {
							return trans[usedLang].tooltips.refreshButton;
						}
					});
					var rt = $("#refreshTill").parent();
					rt.attr("title", "-");
					rt.tooltip({
						content : function() {
							return trans[usedLang].tooltips.refreshSpinner;
						}
					});
					$('#infoTextP').html(trans[usedLang].infoDialogHtml);
					$('#info').tooltip();
					// This side was made because I didn't find a site that
					// worked and had the functionality I needed.<br />If you
					// have anything I should add to it, feel free to contact me
					// on the PathOfExile site: <a
					// href='http://www.pathofexile.com/account/view-profile/speedprog'
					// target='_blank'>Here</a>
					getLadders();
				});
