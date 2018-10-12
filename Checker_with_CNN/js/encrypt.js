//===========replace jquery ....===========
var crypt = {}

crypt.extend = function(fs){

	for (f in fs){
		Object.defineProperty(crypt, f, {
                value: fs[f]
            })
	}

}

//=================s.d.b==============================================
!
function(e) {
	e.extend({
		gen: function(n, t) {
			var c, i, r, d = (d = n.trim()).trim().length,
				o = e.encrypt(n),
				m = e.encrypt(n) + t;
			for ((i = new Array)[0] = "ff8080815ed2f53b015f27c2b7b9783e", i[1] = "402880bd5c76166f015c903ee811504e", i[2] = "402880bd5c76166f015c9041698e5099", c = 0; c < i.length; ++c) r = i[c];
			//var u = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
			//	f = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
			//window size??? shit
			var u = 1024;
			var f = 960;
			return u * f <= 12e4 ? e.encrypt(o + m + r).toUpperCase() : e.encrypt(o + m + r + d).toUpperCase()
		}
	})
}(crypt);

//======q.b.a=======================================

crypt.bs = function(r) {
	function t(r, t) {
		var e = h.indexOf(r.charAt(t));
		if (-1 === e) throw "Cannot decode encrypt";
		return e
	}
	function e(r, t) {
		var e = r.charCodeAt(t);
		if (e > 255) throw "INVALID_CHARACTER_ERR: DOM Exception 5";
		return e
	}
	var n = "=",
		h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	return {
		decode: function(r) {
			var e, h, a = 0,
				c = r.length,
				o = [];
			if (r = String(r), 0 === c) return r;
			if (c % 4 != 0) throw "Cannot decode base";
			for (r.charAt(c - 1) === n && (a = 1, r.charAt(c - 2) === n && (a = 2), c -= 4), e = 0; e < c; e += 4) h = t(r, e) << 18 | t(r, e + 1) << 12 | t(r, e + 2) << 6 | t(r, e + 3), o.push(String.fromCharCode(h >> 16, h >> 8 & 255, 255 & h));
			switch (a) {
			case 1:
				h = t(r, e) << 18 | t(r, e + 1) << 12 | t(r, e + 2) << 6, o.push(String.fromCharCode(h >> 16, h >> 8 & 255));
				break;
			case 2:
				h = t(r, e) << 18 | t(r, e + 1) << 12, o.push(String.fromCharCode(h >> 16))
			}
			return o.join("")
		},
		encode: function(r) {
			if (1 !== arguments.length) throw "SyntaxError: exactly one argument required";
			var t, a, c = [],
				o = (r = String(r)).length - r.length % 3;
			if (0 === r.length) return r;
			for (t = 0; t < o; t += 3) a = e(r, t) << 16 | e(r, t + 1) << 8 | e(r, t + 2), c.push(h.charAt(a >> 18)), c.push(h.charAt(a >> 12 & 63)), c.push(h.charAt(a >> 6 & 63)), c.push(h.charAt(63 & a));
			switch (r.length - o) {
			case 1:
				a = e(r, t) << 16, c.push(h.charAt(a >> 18) + h.charAt(a >> 12 & 63) + n + n);
				break;
			case 2:
				a = e(r, t) << 16 | e(r, t + 1) << 8, c.push(h.charAt(a >> 18) + h.charAt(a >> 12 & 63) + h.charAt(a >> 6 & 63) + n)
			}
			return c.join("")
		},
		VERSION: "1.0"
	}
}(crypt);

//=====m.q.d=======================================


!
function(r) {
	var n = function(r, n) {
			return r << n | r >>> 32 - n
		},
		t = function(r, n) {
			var t, o, e, u, f;
			return e = 2147483648 & r, u = 2147483648 & n, t = 1073741824 & r, o = 1073741824 & n, f = (1073741823 & r) + (1073741823 & n), t & o ? 2147483648 ^ f ^ e ^ u : t | o ? 1073741824 & f ? 3221225472 ^ f ^ e ^ u : 1073741824 ^ f ^ e ^ u : f ^ e ^ u
		},
		o = function(r, n, t) {
			return r & n | ~r & t
		},
		e = function(r, n, t) {
			return r & t | n & ~t
		},
		u = function(r, n, t) {
			return r ^ n ^ t
		},
		f = function(r, n, t) {
			return n ^ (r | ~t)
		},
		i = function(r, e, u, f, i, a, c) {
			return r = t(r, t(t(o(e, u, f), i), c)), t(n(r, a), e)
		},
		a = function(r, o, u, f, i, a, c) {
			return r = t(r, t(t(e(o, u, f), i), c)), t(n(r, a), o)
		},
		c = function(r, o, e, f, i, a, c) {
			return r = t(r, t(t(u(o, e, f), i), c)), t(n(r, a), o)
		},
		C = function(r, o, e, u, i, a, c) {
			return r = t(r, t(t(f(o, e, u), i), c)), t(n(r, a), o)
		},
		g = function(r) {
			for (var n, t = r.length, o = t + 8, e = 16 * ((o - o % 64) / 64 + 1), u = Array(e - 1), f = 0, i = 0; i < t;) f = i % 4 * 8, u[n = (i - i % 4) / 4] = u[n] | r.charCodeAt(i) << f, i++;
			return n = (i - i % 4) / 4, f = i % 4 * 8, u[n] = u[n] | 128 << f, u[e - 2] = t << 3, u[e - 1] = t >>> 29, u
		},
		h = function(r) {
			var n, t = "",
				o = "";
			for (n = 0; n <= 3; n++) t += (o = "0" + (r >>> 8 * n & 255).toString(16)).substr(o.length - 2, 2);
			return t
		},
		d = function(r) {
			r = r.replace(/\x0d\x0a/g, "\n");
			for (var n = "", t = 0; t < r.length; t++) {
				var o = r.charCodeAt(t);
				o < 128 ? n += String.fromCharCode(o) : o > 127 && o < 2048 ? (n += String.fromCharCode(o >> 6 | 192), n += String.fromCharCode(63 & o | 128)) : (n += String.fromCharCode(o >> 12 | 224), n += String.fromCharCode(o >> 6 & 63 | 128), n += String.fromCharCode(63 & o | 128))
			}
			return n
		};
	crypt.extend({
		encrypt: function(r) {
			var n, o, e, u, f, v, S, m, l, y = Array();
			for (r = d(r), y = g(r), v = 1732584193, S = 4023233417, m = 2562383102, l = 271733878, n = 0; n < y.length; n += 16) o = v, e = S, u = m, f = l, v = i(v, S, m, l, y[n + 0], 7, 3614090360), l = i(l, v, S, m, y[n + 1], 12, 3905402710), m = i(m, l, v, S, y[n + 2], 17, 606105819), S = i(S, m, l, v, y[n + 3], 22, 3250441966), v = i(v, S, m, l, y[n + 4], 7, 4118548399), l = i(l, v, S, m, y[n + 5], 12, 1200080426), m = i(m, l, v, S, y[n + 6], 17, 2821735955), S = i(S, m, l, v, y[n + 7], 22, 4249261313), v = i(v, S, m, l, y[n + 8], 7, 1770035416), l = i(l, v, S, m, y[n + 9], 12, 2336552879), m = i(m, l, v, S, y[n + 10], 17, 4294925233), S = i(S, m, l, v, y[n + 11], 22, 2304563134), v = i(v, S, m, l, y[n + 12], 7, 1804603682), l = i(l, v, S, m, y[n + 13], 12, 4254626195), m = i(m, l, v, S, y[n + 14], 17, 2792965006), S = i(S, m, l, v, y[n + 15], 22, 1236535329), v = a(v, S, m, l, y[n + 1], 5, 4129170786), l = a(l, v, S, m, y[n + 6], 9, 3225465664), m = a(m, l, v, S, y[n + 11], 14, 643717713), S = a(S, m, l, v, y[n + 0], 20, 3921069994), v = a(v, S, m, l, y[n + 5], 5, 3593408605), l = a(l, v, S, m, y[n + 10], 9, 38016083), m = a(m, l, v, S, y[n + 15], 14, 3634488961), S = a(S, m, l, v, y[n + 4], 20, 3889429448), v = a(v, S, m, l, y[n + 9], 5, 568446438), l = a(l, v, S, m, y[n + 14], 9, 3275163606), m = a(m, l, v, S, y[n + 3], 14, 4107603335), S = a(S, m, l, v, y[n + 8], 20, 1163531501), v = a(v, S, m, l, y[n + 13], 5, 2850285829), l = a(l, v, S, m, y[n + 2], 9, 4243563512), m = a(m, l, v, S, y[n + 7], 14, 1735328473), S = a(S, m, l, v, y[n + 12], 20, 2368359562), v = c(v, S, m, l, y[n + 5], 4, 4294588738), l = c(l, v, S, m, y[n + 8], 11, 2272392833), m = c(m, l, v, S, y[n + 11], 16, 1839030562), S = c(S, m, l, v, y[n + 14], 23, 4259657740), v = c(v, S, m, l, y[n + 1], 4, 2763975236), l = c(l, v, S, m, y[n + 4], 11, 1272893353), m = c(m, l, v, S, y[n + 7], 16, 4139469664), S = c(S, m, l, v, y[n + 10], 23, 3200236656), v = c(v, S, m, l, y[n + 13], 4, 681279174), l = c(l, v, S, m, y[n + 0], 11, 3936430074), m = c(m, l, v, S, y[n + 3], 16, 3572445317), S = c(S, m, l, v, y[n + 6], 23, 76029189), v = c(v, S, m, l, y[n + 9], 4, 3654602809), l = c(l, v, S, m, y[n + 12], 11, 3873151461), m = c(m, l, v, S, y[n + 15], 16, 530742520), S = c(S, m, l, v, y[n + 2], 23, 3299628645), v = C(v, S, m, l, y[n + 0], 6, 4096336452), l = C(l, v, S, m, y[n + 7], 10, 1126891415), m = C(m, l, v, S, y[n + 14], 15, 2878612391), S = C(S, m, l, v, y[n + 5], 21, 4237533241), v = C(v, S, m, l, y[n + 12], 6, 1700485571), l = C(l, v, S, m, y[n + 3], 10, 2399980690), m = C(m, l, v, S, y[n + 10], 15, 4293915773), S = C(S, m, l, v, y[n + 1], 21, 2240044497), v = C(v, S, m, l, y[n + 8], 6, 1873313359), l = C(l, v, S, m, y[n + 15], 10, 4264355552), m = C(m, l, v, S, y[n + 6], 15, 2734768916), S = C(S, m, l, v, y[n + 13], 21, 1309151649), v = C(v, S, m, l, y[n + 4], 6, 4149444226), l = C(l, v, S, m, y[n + 11], 10, 3174756917), m = C(m, l, v, S, y[n + 2], 15, 718787259), S = C(S, m, l, v, y[n + 9], 21, 3951481745), v = t(v, o), S = t(S, e), m = t(m, u), l = t(l, f);
			return (h(v) + h(S) + h(m) + h(l)).toLowerCase()
		}
	})
}();

//=====t.q.d=======================================

!
function(n) {
	var e, r = function(n, r) {
			return e = "402880bd5c76166f015c903ee811504e", n << r | n >>> 32 - r
		},
		c = function(n, r, c) {
			return e = "402880bd5c76166", n & c | r & ~c
		};
	n.extend({
		ck: function(e, t, u, y, f, g) {
			null == u && (u = e, y = e, f = t);
			var o, p = c(t, e, u),
				d = n.encrypt(e + t + u),
				i = n.encrypt(y + f),
				a = r(e, t);
			p = 2147483648 & e, p += 2147483648 & t, p += o, p += o = 1073741824 & p, a = p = n.encrypt(e) + n.bs.encode(n.encrypt(t)) + u;
			var b = n.gen(p, a),
				v = n.encrypt(d) + i;
			return f == t ? n.gen(b + n.gen(e, a), i) : n.gen(b + n.gen(e, a) + v, i)
		}
	})
}(crypt);




function ck(e, t, u, y, f, g){
	return crypt.ck(e, t, u, y, f, g)
}