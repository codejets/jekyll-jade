/**
 * Dubiously created by Adrian Cooney
 * http://dunxrion.github.io
 */
(function(e) {
    "use strict";

    function n(e, t) {
        return {
            string: "+",
            style: "font-size: 1px; padding: " + Math.floor(t / 2) + "px " + Math.floor(e / 2) + "px; line-height: " + t + "px;"
        }
    }

    function r(e, t, n, r, o) {
        n = n.toUpperCase();
        if (n.length < 24) {
            var u = Math.max(0, n.length - 12),
                a = 70 + u * -3;
            i(e, a, n, r / 2, o)
        } else if (n.length < 29) i(e, 40, n, r / 2, o);
        else {
            var f = s(n, 27);
            f.forEach(function(n, s) {
                i(e, 40, n, r / 2, t == "lower" ? o - (f.length - 1) * 40 + s * 40 : o + s * 40)
            })
        }
    }

    function i(e, t, n, r, i) {
        e.font = "bold " + t + "px Impact";
        e.fillStyle = "#fff";
        e.textAlign = "center";
        e.textBaseline = "middle";
        e.lineWidth = 7;
        e.strokeStyle = "#000";
        e.strokeText(n, r, i);
        e.fillText(n, r, i)
    }

    function s(e, t) {
        var n = [],
            r = e.split(" "),
            i = [];
        for (var s = 0, o = r.length; s < o; s++)
            if ((i + r[s]).length < t) i.push(r[s]);
            else {
                n.push(i.join(" "));
                i.length = 0;
                i.push(r[s])
            }
        n.push(i.join(" "));
        return n
    }
    var t = {
        "10 Guy": "//i.imgur.com/LaENqOV.jpg"
    };
    e.meme = function(n, i, s, o, u) {
        n || e.error("Yo, you forgot the text for the upper part of the meme. The bit at the top. Yeah, that bit.");
        i || e.error("You forgot the text for the bottom of the meme, stupid.");
        s || e.error("Dude, you forgot the meme type or url for the background image (CORS enabled, *hint* imgur *hint*). To see a list of supported memes, hit `console.meme()`");
        if (!n && !i && !s) return e.log("> " + Object.keys(t).join("\n> "));
        var a = document.createElement("canvas"),
            f = a.getContext("2d"),
            o = o || 500,
            u = o || 500,
            l = 500,
            c = 500,
            h = new Image;
        h.setAttribute("crossOrigin", "anonymous");
        h.onload = function() {
            a.width = o;
            a.height = u;
            var t = n.toUpperCase();
            f.scale(o / 500, u / 500);
            f.drawImage(this, 0, 0, l, c);
            r(f, "upper", n, l, 50);
            r(f, "lower", i, l, c - 50);
            e.image(a.toDataURL())
        };
        if (t[s]) var p = t[s];
        else var p = s;
        h.src = p
    };
    e.image = function(t, r) {
        r = r || 1;
        var i = new Image;
        i.onload = function() {
            var i = n(this.width * r, this.height * r);
            e.log("%c" + i.string, i.style + "background: url(" + t + "); color: transparent;")
        };
        i.src = t;
        i.style.background = "url(" + t + ")"
    }
})(console);
