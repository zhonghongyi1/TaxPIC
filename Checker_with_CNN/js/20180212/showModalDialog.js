﻿


function ahmch(BfnP1) {
	var Y2 = $("\x23\x66\x70\x68\x6d\x6a\x79")["\x61\x74\x74\x72"]('\x63\x6c\x61\x73\x73');
	$("\x23\x66\x70\x68\x6d\x6a\x79")["\x72\x65\x6d\x6f\x76\x65\x43\x6c\x61\x73\x73"](Y2);
	if (!ahm(BfnP1)) {
		$("\x23\x66\x70\x68\x6d\x6a\x79")["\x61\x64\x64\x43\x6c\x61\x73\x73"]("\x74\x69\x70\x5f\x63\x6f\x6d\x6d\x6f\x6e\x5f\x77\x72\x6f\x6e\x67");
		$("\x23\x66\x70\x68\x6d\x6a\x79")["\x61\x64\x64\x43\x6c\x61\x73\x73"]("\x66\x6f\x6e\x74\x5f\x72\x65\x64");
		$("\x23\x66\x70\x68\x6d\x6a\x79")["\x68\x74\x6d\x6c"]("\u53d1\u7968\u53f7\u7801\u6709\u8bef\x21");
	} else {
		$("\x23\x66\x70\x68\x6d\x6a\x79")["\x61\x64\x64\x43\x6c\x61\x73\x73"]("\x74\x69\x70\x5f\x63\x6f\x6d\x6d\x6f\x6e\x5f\x72\x69\x67\x68\x74");
		$("\x23\x66\x70\x68\x6d\x6a\x79")["\x68\x74\x6d\x6c"]("\x26\x6e\x62\x73\x70\x3b");
	}
}


//(function() {
//eval(function(p,a,c,k,e,r){e=function(c){return c.toString(36)};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[0-9a-g]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('5.6=5.6||7(8){7 0(9,a){2 1;try{1=b[9](a)}catch(c){3 d.reject(c)}if(1.done){3 1.e}else{3 d.resolve(1.e).then(4,f)}}2 b=8();2 4=0.g(0,\'next\');2 f=0.g(0,\'throw\');3 4()};',[],17,'continuer|result|var|return|onFulfilled|window|spawn|function|gen|verb|arg|generator|err|Promise|value|onRejected|bind'.split('|'),0,{}))
//window.showModalDialog=window.showModalDialog||function(url,arg,opt,flag){url=url||'';arg=arg||null;opt=opt||'dialogWidth:300px;dialogHeight:200px';var caller=showModalDialog.caller.toString();var dialog=document.body.appendChild(document.createElement('dialog'));dialog.setAttribute('style',opt.replace(/dialog/gi,''));dialog.innerHTML='<iframe id="dialog-body" src="'+url+'" style="border: 0; width: 100%; height: 100%;"></iframe>';document.getElementById('dialog-body').contentWindow.dialogArguments=arg;dialog.showModal();if(flag){var ss=flag+' = dialog';eval(ss);var str=JSON.stringify(arg);sessionStorage["result"]=str}else{dalog=dialog}if(caller.indexOf('yield')>=0){return new Promise(function(resolve,reject){dialog.addEventListener('close',function(){var returnValue=document.getElementById('dialog-body').contentWindow.returnValue;document.body.removeChild(dialog);resolve(returnValue)})})}var isNext=false;var nextStmts=caller.split('\n').filter(function(stmt){if(isNext||stmt.indexOf('showModalDialog(')>=0)return isNext=true;return false});dialog.addEventListener('close',function(){var returnValue=document.getElementById('dialog-body').contentWindow.returnValue;document.body.removeChild(dialog);if(nextStmts[0].indexOf('cyjg.html')==-1){nextStmts[0]=nextStmts[0].replace(/(window\.)?showModalDialog\(.*\)/g,JSON.stringify(returnValue));eval('{\n'+nextStmts.join('\n'))}})}}
//)();

(function() {
	window.spawn = window.spawn ||
	function(gen) {
		function continuer(verb, arg) {
			var result;
			try {
				result = generator[verb](arg)
			} catch(err) {
				return Promise.reject(err)
			}
			if (result.done) {
				return result.value
			} else {
				return Promise.resolve(result.value).then(onFulfilled, onRejected)
			}
		}
		var generator = gen();
		var onFulfilled = continuer.bind(continuer, 'next');
		var onRejected = continuer.bind(continuer, 'throw');
		return onFulfilled()
	};

	window.showModalDialog = window.showModalDialog ||
	function(url, arg, opt, flag) {
		url = url || '';
		arg = arg || null;
		opt = opt || 'dialogWidth:300px;dialogHeight:200px';
		var caller = showModalDialog.caller.toString();
		var dialog = document.body.appendChild(document.createElement('dialog'));
		dialog.setAttribute('style', opt.replace(/dialog/gi, ''));
		dialog.innerHTML = '<iframe id="dialog-body" src="' + url + '" style="border: 0; width: 100%; height: 100%;"></iframe>';
		document.getElementById('dialog-body').contentWindow.dialogArguments = arg;
		dialog.showModal();
		if (flag) {
			var ss = flag + ' = dialog';
			eval(ss);
			var str = JSON.stringify(arg);
			sessionStorage["result"] = str
		} else {
			dalog = dialog
		}
		if (caller.indexOf('yield') >= 0) {
			return new Promise(function(resolve, reject) {
				dialog.addEventListener('close',
				function() {
					var returnValue = document.getElementById('dialog-body').contentWindow.returnValue;
					document.body.removeChild(dialog);
					resolve(returnValue)
				})
			})
		}
		var isNext = false;
		var nextStmts = caller.split('\n').filter(function(stmt) {
			if (isNext || stmt.indexOf('showModalDialog(') >= 0) return isNext = true;
			return false
		});
		dialog.addEventListener('close',
		function() {
			var returnValue = document.getElementById('dialog-body').contentWindow.returnValue;
			document.body.removeChild(dialog);
			if (nextStmts[0].indexOf('cyjg.html') == -1) {
				nextStmts[0] = nextStmts[0].replace(/(window\.)?showModalDialog\(.*\)/g, JSON.stringify(returnValue));
				eval('{\n' + nextStmts.join('\n'))
			}
		})
	}
})();



//eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('t n(3){5 9=$("#2").s(\'u\');6(3!=""&&3!=\'c\'){6(!w(3)){$("#2").b(9);$("#2").4("l");$("#2").4("m");5 g=v r();5 h=g.o();5 i=g.q()+1;5 j=g.p();5 d=h+""+i+j;6(3==d){$("#2").8("B!")}7{6(3==\'c\'){}7{$("#2").8("f!")}}}7{$("#2").b(9);6(3!=y(0)){$("#2").4("e");$("#2").8(" ");k=0}7{6(a=="x"||a=="A"||a=="C"){$("#2").4("e");$("#2").8(" ")}7{$("#2").4("l");$("#2").4("m");$("#2").8("f!");k=0}}}}7{$("#2").b(9);$("#2").4("z")}}',39,39,'||kprqjy|kprq|addClass|var|if|else|html|classInfo|fplx|removeClass|YYYYMMDD|dd|tip_common_right|开票日期有误|||||skxt|tip_common_wrong|font_red|kprqChange|getFullYear|getDate|getMonth|Date|attr|function|class|new|acq|04|ca|tip_common|10|当日开具发票次日查验|11'.split('|'),0,{}))

function kprqChange(kprq) {
	var classInfo = $("#kprqjy").attr('class');
	if (kprq != "" && kprq != 'YYYYMMDD') {
		if (!acq(kprq)) {
			$("#kprqjy").removeClass(classInfo);
			$("#kprqjy").addClass("tip_common_wrong");
			$("#kprqjy").addClass("font_red");
			var g = new Date();
			var h = g.getFullYear();
			var i = g.getMonth() + 1;
			var j = g.getDate();
			var dd = h + "" + i + j;
			if (kprq == dd) {
				$("#kprqjy").html("当日开具发票次日查验!")
			} else {
				if (kprq == 'YYYYMMDD') {} else {
					$("#kprqjy").html("开票日期有误!")
				}
			}
		} else {
			$("#kprqjy").removeClass(classInfo);
			if (kprq != ca(0)) {
				$("#kprqjy").addClass("tip_common_right");
				$("#kprqjy").html(" ");
				skxt = 0
			} else {
				if (fplx == "04" || fplx == "10" || fplx == "11") {
					$("#kprqjy").addClass("tip_common_right");
					$("#kprqjy").html(" ")
				} else {
					$("#kprqjy").addClass("tip_common_wrong");
					$("#kprqjy").addClass("font_red");
					$("#kprqjy").html("开票日期有误!");
					skxt = 0
				}
			}
		}
	} else {
		$("#kprqjy").removeClass(classInfo);
		$("#kprqjy").addClass("tip_common")
	}
}


//eval(function(p,a,c,k,e,r){e=function(c){return c.toString(36)};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[2-9a-hj-s]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('function show_dialog(3,8,2,d){4 e;a(3==j){$("#5").3(3);$("#5").8(8);e=k.l("5")}m{$("#6").3(3);$("#6").8(8);e=k.l("6")}a(2.9("?")!=-1){4 n=2.b(2.9("?")+1);4 7=n.split("&");4 f="";4 g="";for(i=0;i<7.length;i++){f=7[i].b(0,7[i].9("="));g=7[i].b(7[i].9("=")+1);o[f]=g}2=2.b(0,2.9("?"))}4 h;a(d!=""){h=JSON.stringify(d);o["result"]=h}a(3==j){$("#5").p("z-q",1);$("#5").r(2);$("#s").c();$("#5").c()}m{$("#6").p("z-q",1);$("#6").r(2);$("#s").c();$("#6").c()}}',[],29,'||url|width|var|floatwin1|floatwin|parm|height|indexOf|if|substr|show|obj|main_div|pname|pvalue|str||800|document|getElementById|else|parms|sessionStorage|attr|index|load|cover'.split('|'),0,{}))

function show_dialog(width, height, url, obj) {
	var main_div;
	if (width == 800) {
		$("#floatwin1").width(width);
		$("#floatwin1").height(height);
		main_div = document.getElementById("floatwin1")
	} else {
		$("#floatwin").width(width);
		$("#floatwin").height(height);
		main_div = document.getElementById("floatwin")
	}
	if (url.indexOf("?") != -1) {
		var parms = url.substr(url.indexOf("?") + 1);
		var parm = parms.split("&");
		var pname = "";
		var pvalue = "";
		for (i = 0; i < parm.length; i++) {
			pname = parm[i].substr(0, parm[i].indexOf("="));
			pvalue = parm[i].substr(parm[i].indexOf("=") + 1);
			sessionStorage[pname] = pvalue
		}
		url = url.substr(0, url.indexOf("?"))
	}
	var str;
	if (obj != "") {
		str = JSON.stringify(obj);
		sessionStorage["result"] = str
	}
	if (width == 800) {
		$("#floatwin1").attr("z-index", 1);
		$("#floatwin1").load(url);
		$("#cover").show();
		$("#floatwin1").show()
	} else {
		$("#floatwin").attr("z-index", 1);
		$("#floatwin").load(url);
		$("#cover").show();
		$("#floatwin").show()
	}
}