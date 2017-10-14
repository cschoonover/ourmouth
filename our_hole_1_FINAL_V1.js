(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.MouthPoses = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#53112E").s().p("Au/AvMg6MAAAQgyAAgjghQgjggAAgxQAAgyAjggQAjghAyAAMA7VAAAIN/jhINgDhMA7jAAAQAyAAAjAhQAjAgAAAyQAAAxgjAgQgjAhgyAAMg58AAAIvkFpg");
	this.shape.setTransform(769.6,1028.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EA212D").s().p("Egv/AogQx/iuwuj3QiNghhbhxQhahyAAiRMAAAgmAIAEAAIAAvxQAAiHBPhuQBRhtCBgqQKNjQLaixQROkLQMiEQDEgZD1AuQClAfEcBYQFNBoB5AdQEBA/DHAAQDgAAEgg9QB6gZGChmQE6hSC7gcQEQgpDZAfQPTCJQGD9QKxCqJlDEQCCAqBQBtQBQBuAACHIAAPxIAEAAMAAAAmJQAACOhXBwQhYBxiKAjQvBD3wYCsQ5pEN17AAQ3fAA8ZkRg");
	this.shape_1.setTransform(770.5,1016.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EA212D").s().p("EhQdAQbQuyiNt5ipQm9hVj/g5MAAAgg1MDwJAAAMAAAAg1QjjA5mOBVQsdCptZCNUgq4AHEgkRAAAUgmgAAAgvSgHEg");
	this.shape_2.setTransform(770,1196.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA212D").s().p("Eh3/AX/IAA/rQJMi0OyjbQdjm1b+jEQEMgdFPA2QDjAlGDBnQHJB5CmAjQFeBKESAAQEyAAGLhIQCngeIQh3QGthgEAghQF1gvEpAjQasDNb1GhQN7DRIlCoIAAfrg");
	this.shape_3.setTransform(770,829.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FDFCDE").s().p("AoXO3Qh4AAhUhVQhVhVAAh4IAA0pQAAh4BVhVQBUhVB4AAIQvAAQB3AABVBVQBVBVAAB4IAAUpQAAB4hVBVQhVBVh3AAg");
	this.shape_4.setTransform(101.1,925.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FDFCDE").s().p("AoXO3Qh4AAhUhVQhVhVAAh4IAA0pQAAh4BVhVQBUhVB4AAIQvAAQB4AABVBVQBUBVAAB4IAAUpQAAB4hUBVQhVBVh4AAg");
	this.shape_5.setTransform(299.1,925.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FDFCDE").s().p("AoXO3Qh3AAhVhVQhVhVAAh4IAA0pQAAh4BVhVQBVhVB3AAIQvAAQB4AABVBVQBUBVAAB4IAAUpQAAB4hUBVQhVBVh4AAg");
	this.shape_6.setTransform(497,925.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FDFCDE").s().p("AoXO3Qh4AAhUhVQhVhVAAh4IAA0pQAAh4BVhVQBUhVB4AAIQvAAQB3AABVBVQBVBVAAB4IAAUpQAAB4hVBVQhVBVh3AAg");
	this.shape_7.setTransform(677,933.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FDFCDE").s().p("AoXO3Qh4AAhUhVQhWhVAAh4IAA0pQAAh4BWhVQBUhVB4AAIQuAAQB5AABUBVQBVBVABB4IAAUpQgBB4hVBVQhUBVh5AAg");
	this.shape_8.setTransform(1443.5,925.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FDFCDE").s().p("AoXO3Qh4AAhUhVQhVhVAAh4IAA0pQAAh4BVhVQBUhVB4AAIQvAAQB4AABVBVQBUBVAAB4IAAUpQAAB4hUBVQhVBVh4AAg");
	this.shape_9.setTransform(1266.5,929.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FDFCDE").s().p("AoXO3Qh3AAhVhVQhVhVAAh4IAA0pQAAh4BVhVQBVhVB3AAIQvAAQB4AABVBVQBUBVAAB4IAAUpQAAB4hUBVQhVBVh4AAg");
	this.shape_10.setTransform(1073.7,928.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FDFCDE").s().p("AoXO3Qh4AAhUhVQhVhVAAh4IAA0pQAAh4BVhVQBUhVB4AAIQvAAQB3AABVBVQBVBVAAB4IAAUpQAAB4hVBVQhVBVh3AAg");
	this.shape_11.setTransform(873,926.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#53112E").s().p("EAjYAhIQ5lgTpOAAQpIAA5zATQ04AQrggLQwxgQsHhKQuHhXqUi0MAAAg3/QKQiyOLhLQL6g+Q+ABQJlABWzAiQWWAhMlAAQMpAAWKghQWkgiJagBQQugBLwA+QN/BKKOCzMAACA3/QqTC0t7BXQr8BKwiAQQkoAFmKAAQo+AAsPgKg");
	this.shape_12.setTransform(769.8,1016.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EA212D").s().p("Eh3/AX/IAA/sQJMizOyjbQdjm1b+jEQEMgdFPA2QDjAlGDBnQHKB5ClAiQFeBKESAAQEyAAGLhHQCngeIQh3QGthhEAggQF1gwEpAkQasDMb1GiQN7DQIlCoIAAfsg");
	this.shape_13.setTransform(770,492.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EA212D").s().p("EhQeAQbQuwiNt4ipQm7hVj+g5MAAAgg1MDv/AAAMAAAAg1QjiA5mNBVQsbCptXCNUgqzAHEgkXAAAUgmkAAAgvPgHEg");
	this.shape_14.setTransform(768,1500);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FDFCDE").s().p("AoXO3Qh4AAhUhVQhVhVAAh4IAA0pQAAh4BVhVQBUhVB4AAIQvAAQB3AABVBVQBVBVAAB4IAAUpQAAB4hVBVQhVBVh3AAg");
	this.shape_15.setTransform(101.1,678.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FDFCDE").s().p("AoXO3Qh4AAhUhVQhVhVAAh4IAA0pQAAh4BVhVQBUhVB4AAIQvAAQB4AABVBVQBUBVAAB4IAAUpQAAB4hUBVQhVBVh4AAg");
	this.shape_16.setTransform(299.1,678.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FDFCDE").s().p("AoXO3Qh3AAhVhVQhVhVAAh4IAA0pQAAh4BVhVQBVhVB3AAIQvAAQB4AABVBVQBUBVAAB4IAAUpQAAB4hUBVQhVBVh4AAg");
	this.shape_17.setTransform(497,678.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FDFCDE").s().p("AoXO3Qh4AAhUhVQhVhVAAh4IAA0pQAAh4BVhVQBUhVB4AAIQvAAQB3AABVBVQBVBVAAB4IAAUpQAAB4hVBVQhVBVh3AAg");
	this.shape_18.setTransform(677,686.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FDFCDE").s().p("AoXO3Qh4AAhUhVQhWhVAAh4IAA0pQAAh4BWhVQBUhVB4AAIQuAAQB5AABUBVQBVBVABB4IAAUpQgBB4hVBVQhUBVh5AAg");
	this.shape_19.setTransform(1443.5,678.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FDFCDE").s().p("AoXO3Qh4AAhUhVQhVhVAAh4IAA0pQAAh4BVhVQBUhVB4AAIQvAAQB4AABVBVQBUBVAAB4IAAUpQAAB4hUBVQhVBVh4AAg");
	this.shape_20.setTransform(1266.5,682.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FDFCDE").s().p("AoXO3Qh3AAhVhVQhVhVAAh4IAA0pQAAh4BVhVQBVhVB3AAIQvAAQB4AABVBVQBUBVAAB4IAAUpQAAB4hUBVQhVBVh4AAg");
	this.shape_21.setTransform(1073.7,681.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FDFCDE").s().p("AoXO3Qh4AAhUhVQhVhVAAh4IAA0pQAAh4BVhVQBUhVB4AAIQvAAQB3AABVBVQBVBVAAB4IAAUpQAAB4hVBVQhVBVh3AAg");
	this.shape_22.setTransform(873,679.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FC1368").s().p("EhYDAn3QjonPh4m5Qh/nQAAmvQAApeBinnQCdsUGdnjQFjmfIojGQEwhtF3guQEugmF7AAQCXAACcAMQMQA6QfFDQIQCiFyCWIEphuQFziGFuh1QSUl5KxhPQCugUCJAAQMIAAJZDiQIhDNFzF+QG3HFC3KyQCBHjAAJXQAAHaijIZQiaH7klIhg");
	this.shape_23.setTransform(774,1185);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#53112E").s().p("AvRR9QwflEsQg5QBzncEJmbQEFmVF5ktQF8kvHJijQHYioH6gBQHqAAHKCfQG8CYF2EeQFzEaEIGAQEMGECDHFQqyBPyUF5QluB1lzCFIkoBvQlziWoQiig");
	this.shape_24.setTransform(768.3,867.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#84224C").s().p("EhBFAJ5QD6pNGUnyQGSnvIKltQIQlyJhjPMAtiAAAQJVDLIIFoQIBFkGQHhQGRHlD+I8QEEJMBVJ/QpZjisIAAQiJAAiuATQiCnEkNmFQkImAlykaQl3kdm7iZQnLienqAAQn5AAnZCpQnICil9EvQl5EtkFGVQkJGchyHcQicgMiXAAQl7AAkuAlQl3AvkwBtQBIqPEApcg");
	this.shape_25.setTransform(769.4,773.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9E2E5E").s().p("EgkYAX/QAAztHtx8QHcxWNjtRMAsFAAAQpgDPoRFyQoJFtmSHvQmUHzj5JNQkAJbhJKPQonDFljGgQmdHjieMUQiKqBAAqSg");
	this.shape_26.setTransform(391.3,867.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9E2E5E").s().p("AZRYcQlzl+ohjNQhVp+kDpLQj/o+mQnkQmQnioBljQoIlppVjKMAsFAAAQNiNRHdRVQHtR8AATtQAAIShaIEQi2qym4nFg");
	this.shape_27.setTransform(1148.7,854.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#BF4278").s().p("EgGqBC4QEmohCYn7QCjoZAAnZQAApZiAniQBZoFAAoSQAAzrnsx9QncxWtjtRMAgXAAAQJ4OmFPQxQFZRVAASTQAASQlWRQQlLQtpzOjg");
	this.shape_28.setTransform(1367.1,1012.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#BF4278").s().p("EgGHBC4QpyuklMwsQlWxQAAyQQAAyTFaxVQFOwxJ4umMAgXAAAQtjNRncRWQnsR9AATrQAAKTCKKBQhhHnAAJeQAAGvB+HRQB4G4DoHPg");
	this.shape_29.setTransform(172.8,1012.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#DB518D").s().p("EgKLBC4QJzukFKwsQFWxQAAyQQAAyTlZxVQlOwxp4umIUvAAMgABCFvg");
	this.shape_30.setTransform(1471.5,1012.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DB518D").s().p("EgKcBC4MAAAiFvIU5AAQp4OmlNQxQlZRVAASTQgBSQFXRQQFKQtJyOjg");
	this.shape_31.setTransform(67.9,1012.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EA212D").s().p("EhQeAQbQuxiNt2ipQm7hVj/g5MAAAgg1MDv/AAAMAAAAg1QjiA5mNBVQsaCptZCNUgqyAHEgkXAAAUgmkAAAgvPgHEg");
	this.shape_32.setTransform(769.5,1872);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FC1368").s().p("EgL3BITQnEiSoAkVQwZo3vYuQQwYvLprwVQqzyNAAv7QAA95PTrqQGFkpIuh6QGphdJIAAQMwAASrFhQJWCwGzCwIFjiDQG4idGkiCQVCmjKFAAQSJAALsHwQRvLvAAcAQAAPPqeSrQpeQ5v2QHQvLPcv4JlQn4Exm9CiQnNColoAAQlpAAnSiYg");
	this.shape_33.setTransform(774,1407.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#53112E").s().p("EgRtAp9QoMjdmTmTQmTmUjeoLQjlodAApRQAApQDlodQDeoMGTmTQGTmTIMjdQIdjlJQgBQJRABIeDlQILDdGTGTQGTGTDeIMQDlIdAAJQQAAJRjlIdQjeILmTGUQmTGToLDdQoeDmpRAAQpQAAodjmg");
	this.shape_34.setTransform(770,1012.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#84224C").s().p("EgbhBBNQstlYpzpzQpzpylXstQlktKAAuZQAAuZFktJQFXstJzpyQJzpzMtlYQNJljOYAAQOZAANKFjQMsFYJzJzQJzJyFXMtQFkNJAAOZQAAOZlkNKQlXMtpzJyQpzJzssFYQtKFjuZAAQuYAAtJljg");
	this.shape_35.setTransform(770,1012.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#9E2E5E").s().p("EglLBYDQxKnQtOtPQtPtOnQxKQnhxwAAzcQAAzbHhxxQHQxJNPtPQNOtNRKnRQRwngTbgBQTcABRxHgQRJHRNPNNQNONPHQRJQHhRxAATbQAATcnhRwQnQRKtONOQtPNPxJHQQxxHgzcAAQzbAAxwngg");
	this.shape_36.setTransform(770,1020.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#BF4278").s().p("EgumBuVQ1fpGwlwkQwkwlpG1gQpa2PAA4XQAA4WJa2PQJG1gQkwkQQlwlVfpGQWQpaYWAAQYXAAWQJaQVfJGQlQlQQkQkJGVgQJaWPAAYWQAAYXpaWPQpGVgwkQlQwlQk1fJGQ2QJa4XAAQ4WAA2Qpag");
	this.shape_37.setTransform(770,1012.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#DB518D").s().p("EAzwCMXQmXgHqBggIxGg3Qp/gcnuAAQntAAqBAcIxNA3QqJAgmcAHQozAKnAgdQwxhDsHk7QuHlvqUr2MAAAjsOQKQryOLk6QL6kHQ+AHQGyADJBAuQEnAXL+BLQK0BEGZAdQJtArIBAAQIDAAJqgrQGYgdKuhEQL5hLEfgXQI7guGrgDQQugHLwEHQN/E5KOLzMAACDsOQqTL2t7FvQr8E7wiBDQlLAWmMAAQiEAAiMgDg");
	this.shape_38.setTransform(769.8,1033.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_12},{t:this.shape_11,p:{x:873,y:926.2}},{t:this.shape_10,p:{x:1073.7,y:928.9}},{t:this.shape_9,p:{x:1266.5,y:929.7}},{t:this.shape_8,p:{x:1443.5,y:925.2}},{t:this.shape_7,p:{x:677,y:933.2}},{t:this.shape_6,p:{x:497,y:925.2}},{t:this.shape_5,p:{x:299.1,y:925.2}},{t:this.shape_4,p:{x:101.1,y:925.2}},{t:this.shape_3,p:{y:829.5}},{t:this.shape_2}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{y:679.1}},{t:this.shape_21,p:{y:681.9}},{t:this.shape_20,p:{y:682.6}},{t:this.shape_19,p:{y:678.1}},{t:this.shape_18,p:{y:686.1}},{t:this.shape_17,p:{y:678.1}},{t:this.shape_16,p:{y:678.1}},{t:this.shape_15,p:{y:678.1}},{t:this.shape_11,p:{x:877.5,y:1350.9}},{t:this.shape_10,p:{x:1078.2,y:1348.9}},{t:this.shape_9,p:{x:1271,y:1349.6}},{t:this.shape_8,p:{x:1448,y:1345.1}},{t:this.shape_7,p:{x:681.5,y:1353.1}},{t:this.shape_6,p:{x:501.5,y:1345.1}},{t:this.shape_5,p:{x:303.6,y:1345.1}},{t:this.shape_4,p:{x:105.6,y:1345.1}},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_22,p:{y:340.2}},{t:this.shape_21,p:{y:342.9}},{t:this.shape_20,p:{y:343.7}},{t:this.shape_19,p:{y:339.2}},{t:this.shape_18,p:{y:347.2}},{t:this.shape_17,p:{y:339.2}},{t:this.shape_16,p:{y:339.2}},{t:this.shape_15,p:{y:339.2}},{t:this.shape_11,p:{x:873,y:1722.9}},{t:this.shape_10,p:{x:1073.7,y:1720.9}},{t:this.shape_9,p:{x:1266.5,y:1721.6}},{t:this.shape_8,p:{x:1443.5,y:1717.1}},{t:this.shape_7,p:{x:677,y:1725.1}},{t:this.shape_6,p:{x:497,y:1717.1}},{t:this.shape_5,p:{x:299.1,y:1717.1}},{t:this.shape_4,p:{x:101.1,y:1717.1}},{t:this.shape_3,p:{y:153.5}},{t:this.shape_32}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(209,730.1,1123,573);


// stage content:
(lib.our_hole_1_FINAL_V1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	var shush = function(event) { 
		createjs.Sound.stop(); 
		var shushInstance = createjs.Sound.play("shush");
		this.gotoAndStop(6839);
		this.shushComplete = function(){
			this.gotoAndPlay(0);
		};
		shushInstance.on("complete",this.shushComplete, this);			
	};
	document.getElementsByTagName("body")[0].addEventListener("click", shush.bind(this) );
	// timeline functions:
	this.frame_0 = function() {
		/* 
		
		responsive scale code as expressed by @davegamez 
		and modified by @josephLabrecque 
		
		*/
		
		
		var page_body = document.getElementsByTagName("body")[0];
		page_body.style.backgroundColor = "#3C0600";
		page_body.style.overflow = "hidden";
		page_body.style.position = "fixed";
		
		var page_canvas = document.getElementsByTagName("canvas")[0];
		stageWidth = page_canvas.width;
		stageHeight = page_canvas.height;
		
		var viewport = document.querySelector('meta[name=viewport]');
		var viewportContent = 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no';
		
		if (viewport === null) {
			var head = document.getElementsByTagName('head')[0];
			viewport = document.createElement('meta');
			viewport.setAttribute('name', 'viewport');
			head.appendChild(viewport);
		}
		
		viewport.setAttribute('content', viewportContent);
		
		function onResize() {
			var newWidth = window.innerWidth;
			var newHeight = window.innerHeight;
			page_canvas.style.height = newHeight + "px";
			page_canvas.style.width = newWidth + "px";
			stage.width = newWidth;
			stage.height = newHeight;
		}
		
		window.onresize = function () {
			onResize();			
		}
		
		var instance = createjs.Sound.play("ourhole");
		onResize();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6840));

	// Layer 1
	this.instance = new lib.MouthPoses("single",1);
	this.instance.parent = this;
	this.instance.setTransform(768.5,1022,1,1,0,0,0,769.2,1011.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(85).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(2).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:3},0).wait(3).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(14).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(4).to({startPosition:3},0).wait(6).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(19).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(5).to({startPosition:2},0).wait(2).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(7).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:3},0).wait(4).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(25).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:3},0).wait(4).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(6).to({startPosition:1},0).wait(8).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(5).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(6).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(20).to({startPosition:2},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:3},0).wait(3).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(14).to({startPosition:2},0).wait(3).to({startPosition:3},0).wait(4).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(6).to({startPosition:2},0).wait(9).to({startPosition:1},0).wait(21).to({startPosition:2},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(3).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(10).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(6).to({startPosition:1},0).wait(11).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(11).to({startPosition:2},0).wait(6).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(8).to({startPosition:1},0).wait(18).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(8).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(7).to({startPosition:1},0).wait(9).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(7).to({startPosition:1},0).wait(8).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(12).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(17).to({startPosition:2},0).wait(5).to({startPosition:3},0).wait(4).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(20).to({startPosition:2},0).wait(4).to({startPosition:3},0).wait(4).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(7).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(7).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(5).to({startPosition:3},0).wait(6).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(25).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(10).to({startPosition:1},0).wait(11).to({startPosition:2},0).wait(2).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(10).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(5).to({startPosition:2},0).wait(2).to({startPosition:3},0).wait(4).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(5).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(19).to({startPosition:2},0).wait(3).to({startPosition:3},0).wait(3).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(5).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(2).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:3},0).wait(6).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(9).to({startPosition:1},0).wait(26).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(22).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(5).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(6).to({startPosition:1},0).wait(9).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(7).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(26).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(14).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(9).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(5).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(21).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(16).to({startPosition:2},0).wait(2).to({startPosition:3},0).wait(7).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(34).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(16).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(9).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(5).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(8).to({startPosition:1},0).wait(8).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(3).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(5).to({startPosition:2},0).wait(6).to({startPosition:1},0).wait(27).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(14).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(8).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(10).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(5).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(7).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(21).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(5).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(6).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(22).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(11).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(6).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(10).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(11).to({startPosition:1},0).wait(7).to({startPosition:2},0).wait(6).to({startPosition:1},0).wait(15).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(8).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(9).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(21).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(5).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(8).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(9).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(6).to({startPosition:2},0).wait(7).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(7).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(26).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(5).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(10).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(5).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(5).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(10).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(4).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(19).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(5).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(6).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(17).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(11).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(6).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(15).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(8).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(18).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(6).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(10).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(12).to({startPosition:2},0).wait(6).to({startPosition:1},0).wait(10).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(19).to({startPosition:2},0).wait(3).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(3).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(9).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(12).to({startPosition:2},0).wait(8).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(7).to({startPosition:1},0).wait(12).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(6).to({startPosition:1},0).wait(10).to({startPosition:2},0).wait(10).to({startPosition:1},0).wait(6).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(8).to({startPosition:1},0).wait(34).to({startPosition:2},0).wait(6).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(3).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(8).to({startPosition:1},0).wait(10).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(22).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(7).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(7).to({startPosition:1},0).wait(5).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(7).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(9).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(4).to({startPosition:2},0).wait(2).to({startPosition:3},0).wait(8).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(16).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(6).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(6).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(22).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(5).to({startPosition:2},0).wait(7).to({startPosition:1},0).wait(9).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(5).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(5).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(11).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(14).to({startPosition:2},0).wait(3).to({startPosition:3},0).wait(223).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(168).to({startPosition:2},0).wait(3).to({startPosition:3},0).wait(189).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(194).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(26).to({startPosition:1},0).wait(5).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(11).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(10).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(9).to({startPosition:1},0).wait(109).to({startPosition:2},0).wait(3).to({startPosition:3},0).wait(358).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(385).to({startPosition:2},0).wait(3).to({startPosition:3},0).wait(185).to({startPosition:2},0).wait(8).to({startPosition:1},0).wait(7).to({startPosition:2},0).wait(7).to({startPosition:3},0).wait(7).to({startPosition:2},0).wait(7).to({startPosition:1},0).wait(7).to({startPosition:2},0).wait(6).to({startPosition:3},0).wait(7).to({startPosition:2},0).wait(7).to({startPosition:1},0).wait(16).to({startPosition:2},0).wait(8).to({startPosition:1},0).wait(7).to({startPosition:2},0).wait(7).to({startPosition:3},0).wait(7).to({startPosition:2},0).wait(7).to({startPosition:1},0).wait(7).to({startPosition:2},0).wait(6).to({startPosition:3},0).wait(7).to({startPosition:2},0).wait(7).to({startPosition:1},0).wait(102).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(5).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(25).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(5).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(12).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(13).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(126).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(219).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(23).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(174).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(6).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(133).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(510).to({startPosition:3},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:3},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(4).to({startPosition:3},0).wait(4).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(4).to({startPosition:3},0).wait(4).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(12).to({startPosition:2},0).wait(17).to({startPosition:3},0).wait(112).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(9).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(10).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(33).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(768.8,1710.9,1537,671);
// library properties:
lib.properties = {
	id: 'BC999E11B9BB4B0C9A54F2FD0FEB8F96',
	width: 1536,
	height: 2048,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['BC999E11B9BB4B0C9A54F2FD0FEB8F96'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;