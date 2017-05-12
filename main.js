function log(msg) {
    "undefined" != typeof console && console.log(msg)
}

function onYouTubeIframeAPIReady() {
    M5.Model.onYouTubeIframeAPIReady()
}! function() {
    for (var method, noop = function() {}, methods = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], length = methods.length, console = window.console = window.console || {}; length--;) method = methods[length], console[method] || (console[method] = noop)
}();
var userAgent = navigator.userAgent.toLowerCase(),
    canTouch = "ontouchstart" in window,
    prefix = cssPref = "",
    requestAnimFrame, cancelAnimFrame;
/webkit/gi.test(userAgent) ? (prefix = "-webkit-", cssPref = "Webkit") : /msie/gi.test(userAgent) ? (prefix = "-ms-", cssPref = "ms") : /mozilla/gi.test(userAgent) ? (prefix = "-moz-", cssPref = "Moz") : /opera/gi.test(userAgent) ? (prefix = "-o-", cssPref = "O") : prefix = "", requestAnimFrame = function() {
        return window[cssPref + "RequestAnimationFrame"] || function(callback) {
            window.setTimeout(callback, 17)
        }
    }(), cancelAnimFrame = function() {
        return window[cssPref + "CancelRequestAnimationFrame"] || clearTimeout
    }(),
    function() {
        var initializing = !1,
            fnTest = /xyz/.test(function() {
                xyz
            }) ? /\b_super\b/ : /.*/;
        this.Class = function() {}, Class.extend = function(prop) {
            function Class() {
                !initializing && this.init && this.init.apply(this, arguments)
            }
            var _super = this.prototype;
            initializing = !0;
            var prototype = new this;
            initializing = !1;
            for (var name in prop) prototype[name] = "function" == typeof prop[name] && "function" == typeof _super[name] && fnTest.test(prop[name]) ? function(name, fn) {
                return function() {
                    var tmp = this._super;
                    this._super = _super[name];
                    var ret = fn.apply(this, arguments);
                    return this._super = tmp, ret
                }
            }(name, prop[name]) : prop[name];
            return Class.prototype = prototype, Class.prototype.constructor = Class, Class.extend = arguments.callee, Class
        }
    }(), (window._gsQueue || (window._gsQueue = [])).push(function() {
        _gsDefine("plugins.ScrollToPlugin", ["plugins.TweenPlugin"], function(TweenPlugin) {
            var ScrollToPlugin = function(props, priority) {
                    TweenPlugin.call(this, "scrollTo"), this._overwriteProps.pop()
                },
                p = ScrollToPlugin.prototype = new TweenPlugin("scrollTo"),
                _doc = document.documentElement,
                _window = window,
                _max = ScrollToPlugin.max = function(element, axis) {
                    var dim = "x" === axis ? "Width" : "Height",
                        scroll = "scroll" + dim,
                        client = "client" + dim,
                        body = document.body;
                    return element === _window || element === _doc || element === body ? Math.max(_doc[scroll], body[scroll]) - Math.max(_doc[client], body[client]) : element[scroll] - element["offset" + dim]
                },
                _setRatio = TweenPlugin.prototype.setRatio;
            return p.constructor = ScrollToPlugin, ScrollToPlugin.API = 2, p._onInitTween = function(target, value, tween) {
                return this._wdw = target === _window, this._target = target, this._tween = tween, "object" != typeof value && (value = {
                    y: value
                }), this._autoKill = value.autoKill, this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != value.x ? this._addTween(this, "x", this.x, "max" === value.x ? _max(target, "x") : value.x, "scrollTo_x", !0) : this.skipX = !0, null != value.y ? this._addTween(this, "y", this.y, "max" === value.y ? _max(target, "y") : value.y, "scrollTo_y", !0) : this.skipY = !0, !0
            }, p.getX = function() {
                return this._wdw ? null != _window.pageXOffset ? _window.pageXOffset : null != _doc.scrollLeft ? _doc.scrollLeft : document.body.scrollLeft : this._target.scrollLeft
            }, p.getY = function() {
                return this._wdw ? null != _window.pageYOffset ? _window.pageYOffset : null != _doc.scrollTop ? _doc.scrollTop : document.body.scrollTop : this._target.scrollTop
            }, p._kill = function(lookup) {
                return lookup.scrollTo_x && (this.skipX = !0), lookup.scrollTo_y && (this.skipY = !0), TweenPlugin.prototype._kill.call(this, lookup)
            }, p._checkAutoKill = function() {
                this._autoKill && this.skipX && this.skipY && this._tween.kill()
            }, p.setRatio = function(v) {
                _setRatio.call(this, v);
                var x = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                    y = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                    yDif = y - this.yPrev,
                    xDif = x - this.xPrev;
                !this.skipX && (xDif > 7 || -7 > xDif) && (this.skipX = !0, this._checkAutoKill()), !this.skipY && (yDif > 7 || -7 > yDif) && (this.skipY = !0, this._checkAutoKill()), this._wdw ? _window.scrollTo(this.skipX ? x : this.x, this.skipY ? y : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
            }, TweenPlugin.activate([ScrollToPlugin]), ScrollToPlugin
        }, !0)
    }), window._gsDefine && _gsQueue.pop()(), "object" != typeof JSON && (JSON = {}),
    function() {
        "use strict";

        function f(n) {
            return 10 > n ? "0" + n : n
        }

        function quote(string) {
            return escapable.lastIndex = 0, escapable.test(string) ? '"' + string.replace(escapable, function(a) {
                var c = meta[a];
                return "string" == typeof c ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + string + '"'
        }

        function str(key, holder) {
            var i, k, v, length, partial, mind = gap,
                value = holder[key];
            switch (value && "object" == typeof value && "function" == typeof value.toJSON && (value = value.toJSON(key)), "function" == typeof rep && (value = rep.call(holder, key, value)), typeof value) {
                case "string":
                    return quote(value);
                case "number":
                    return isFinite(value) ? String(value) : "null";
                case "boolean":
                case "null":
                    return String(value);
                case "object":
                    if (!value) return "null";
                    if (gap += indent, partial = [], "[object Array]" === Object.prototype.toString.apply(value)) {
                        for (length = value.length, i = 0; length > i; i += 1) partial[i] = str(i, value) || "null";
                        return v = 0 === partial.length ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]", gap = mind, v
                    }
                    if (rep && "object" == typeof rep)
                        for (length = rep.length, i = 0; length > i; i += 1) "string" == typeof rep[i] && (k = rep[i], v = str(k, value), v && partial.push(quote(k) + (gap ? ": " : ":") + v));
                    else
                        for (k in value) Object.prototype.hasOwnProperty.call(value, k) && (v = str(k, value), v && partial.push(quote(k) + (gap ? ": " : ":") + v));
                    return v = 0 === partial.length ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}", gap = mind, v
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(key) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(key) {
            return this.valueOf()
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;
        "function" != typeof JSON.stringify && (JSON.stringify = function(value, replacer, space) {
            var i;
            if (gap = "", indent = "", "number" == typeof space)
                for (i = 0; space > i; i += 1) indent += " ";
            else "string" == typeof space && (indent = space);
            if (rep = replacer, replacer && "function" != typeof replacer && ("object" != typeof replacer || "number" != typeof replacer.length)) throw new Error("JSON.stringify");
            return str("", {
                "": value
            })
        }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && "object" == typeof value)
                    for (k in value) Object.prototype.hasOwnProperty.call(value, k) && (v = walk(value, k), void 0 !== v ? value[k] = v : delete value[k]);
                return reviver.call(holder, key, value)
            }
            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(),
    function(window, undefined) {
        "use strict";
        var History = window.History = window.History || {},
            jQuery = window.jQuery;
        if ("undefined" != typeof History.Adapter) throw new Error("History.js Adapter has already been loaded...");
        History.Adapter = {
            bind: function(el, event, callback) {
                jQuery(el).bind(event, callback)
            },
            trigger: function(el, event, extra) {
                jQuery(el).trigger(event, extra)
            },
            extractEventData: function(key, event, extra) {
                var result = event && event.originalEvent && event.originalEvent[key] || extra && extra[key] || undefined;
                return result
            },
            onDomLoad: function(callback) {
                jQuery(callback)
            }
        }, "undefined" != typeof History.init && History.init()
    }(window),
    function(window, undefined) {
        "use strict";
        var document = window.document,
            setTimeout = window.setTimeout || setTimeout,
            clearTimeout = window.clearTimeout || clearTimeout,
            setInterval = window.setInterval || setInterval,
            History = window.History = window.History || {};
        if ("undefined" != typeof History.initHtml4) throw new Error("History.js HTML4 Support has already been loaded...");
        History.initHtml4 = function() {
            return "undefined" != typeof History.initHtml4.initialized ? !1 : (History.initHtml4.initialized = !0, History.enabled = !0, History.savedHashes = [], History.isLastHash = function(newHash) {
                var isLast, oldHash = History.getHashByIndex();
                return isLast = newHash === oldHash
            }, History.isHashEqual = function(newHash, oldHash) {
                return newHash = encodeURIComponent(newHash).replace(/%25/g, "%"), oldHash = encodeURIComponent(oldHash).replace(/%25/g, "%"), newHash === oldHash
            }, History.saveHash = function(newHash) {
                return History.isLastHash(newHash) ? !1 : (History.savedHashes.push(newHash), !0)
            }, History.getHashByIndex = function(index) {
                var hash = null;
                return hash = "undefined" == typeof index ? History.savedHashes[History.savedHashes.length - 1] : 0 > index ? History.savedHashes[History.savedHashes.length + index] : History.savedHashes[index]
            }, History.discardedHashes = {}, History.discardedStates = {}, History.discardState = function(discardedState, forwardState, backState) {
                var discardObject, discardedStateHash = History.getHashByState(discardedState);
                return discardObject = {
                    discardedState: discardedState,
                    backState: backState,
                    forwardState: forwardState
                }, History.discardedStates[discardedStateHash] = discardObject, !0
            }, History.discardHash = function(discardedHash, forwardState, backState) {
                var discardObject = {
                    discardedHash: discardedHash,
                    backState: backState,
                    forwardState: forwardState
                };
                return History.discardedHashes[discardedHash] = discardObject, !0
            }, History.discardedState = function(State) {
                var discarded, StateHash = History.getHashByState(State);
                return discarded = History.discardedStates[StateHash] || !1
            }, History.discardedHash = function(hash) {
                var discarded = History.discardedHashes[hash] || !1;
                return discarded
            }, History.recycleState = function(State) {
                var StateHash = History.getHashByState(State);
                return History.discardedState(State) && delete History.discardedStates[StateHash], !0
            }, History.emulated.hashChange && (History.hashChangeInit = function() {
                History.checkerFunction = null;
                var iframeId, iframe, lastIframeHash, checkerRunning, lastDocumentHash = "",
                    startedWithHash = Boolean(History.getHash());
                return History.isInternetExplorer() ? (iframeId = "historyjs-iframe", iframe = document.createElement("iframe"), iframe.setAttribute("id", iframeId), iframe.setAttribute("src", "#"), iframe.style.display = "none", document.body.appendChild(iframe), iframe.contentWindow.document.open(), iframe.contentWindow.document.close(), lastIframeHash = "", checkerRunning = !1, History.checkerFunction = function() {
                    if (checkerRunning) return !1;
                    checkerRunning = !0;
                    var documentHash = History.getHash(),
                        iframeHash = History.getHash(iframe.contentWindow.document);
                    return documentHash !== lastDocumentHash ? (lastDocumentHash = documentHash, iframeHash !== documentHash && (lastIframeHash = iframeHash = documentHash, iframe.contentWindow.document.open(), iframe.contentWindow.document.close(), iframe.contentWindow.document.location.hash = History.escapeHash(documentHash)), History.Adapter.trigger(window, "hashchange")) : iframeHash !== lastIframeHash && (lastIframeHash = iframeHash, startedWithHash && "" === iframeHash ? History.back() : History.setHash(iframeHash, !1)), checkerRunning = !1, !0
                }) : History.checkerFunction = function() {
                    var documentHash = History.getHash() || "";
                    return documentHash !== lastDocumentHash && (lastDocumentHash = documentHash, History.Adapter.trigger(window, "hashchange")), !0
                }, History.intervalList.push(setInterval(History.checkerFunction, History.options.hashChangeInterval)), !0
            }, History.Adapter.onDomLoad(History.hashChangeInit)), History.emulated.pushState && (History.onHashChange = function(event) {
                var discardObject, currentUrl = event && event.newURL || History.getLocationHref(),
                    currentHash = History.getHashByUrl(currentUrl),
                    currentState = null,
                    currentStateHash = null;
                return History.isLastHash(currentHash) ? (History.busy(!1), !1) : (History.doubleCheckComplete(), History.saveHash(currentHash), currentHash && History.isTraditionalAnchor(currentHash) ? (History.Adapter.trigger(window, "anchorchange"), History.busy(!1), !1) : (currentState = History.extractState(History.getFullUrl(currentHash || History.getLocationHref()), !0), History.isLastSavedState(currentState) ? (History.busy(!1), !1) : (currentStateHash = History.getHashByState(currentState), (discardObject = History.discardedState(currentState)) ? (History.getHashByIndex(-2) === History.getHashByState(discardObject.forwardState) ? History.back(!1) : History.forward(!1), !1) : (History.pushState(currentState.data, currentState.title, encodeURI(currentState.url), !1), !0))))
            }, History.Adapter.bind(window, "hashchange", History.onHashChange), History.pushState = function(data, title, url, queue) {
                if (url = encodeURI(url).replace(/%25/g, "%"), History.getHashByUrl(url)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                if (queue !== !1 && History.busy()) return History.pushQueue({
                    scope: History,
                    callback: History.pushState,
                    args: arguments,
                    queue: queue
                }), !1;
                History.busy(!0);
                var newState = History.createStateObject(data, title, url),
                    newStateHash = History.getHashByState(newState),
                    oldState = History.getState(!1),
                    oldStateHash = History.getHashByState(oldState),
                    html4Hash = History.getHash(),
                    wasExpected = History.expectedStateId == newState.id;
                return History.storeState(newState), History.expectedStateId = newState.id, History.recycleState(newState), History.setTitle(newState), newStateHash === oldStateHash ? (History.busy(!1), !1) : (History.saveState(newState), wasExpected || History.Adapter.trigger(window, "statechange"), History.isHashEqual(newStateHash, html4Hash) || History.isHashEqual(newStateHash, History.getShortUrl(History.getLocationHref())) || History.setHash(newStateHash, !1), History.busy(!1), !0)
            }, History.replaceState = function(data, title, url, queue) {
                if (url = encodeURI(url).replace(/%25/g, "%"), History.getHashByUrl(url)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                if (queue !== !1 && History.busy()) return History.pushQueue({
                    scope: History,
                    callback: History.replaceState,
                    args: arguments,
                    queue: queue
                }), !1;
                History.busy(!0);
                var newState = History.createStateObject(data, title, url),
                    newStateHash = History.getHashByState(newState),
                    oldState = History.getState(!1),
                    oldStateHash = History.getHashByState(oldState),
                    previousState = History.getStateByIndex(-2);
                return History.discardState(oldState, newState, previousState), newStateHash === oldStateHash ? (History.storeState(newState), History.expectedStateId = newState.id, History.recycleState(newState), History.setTitle(newState), History.saveState(newState), History.Adapter.trigger(window, "statechange"), History.busy(!1)) : History.pushState(newState.data, newState.title, newState.url, !1), !0
            }), void(History.emulated.pushState && History.getHash() && !History.emulated.hashChange && History.Adapter.onDomLoad(function() {
                History.Adapter.trigger(window, "hashchange")
            })))
        }, "undefined" != typeof History.init && History.init()
    }(window),
    function(window, undefined) {
        "use strict";
        var console = window.console || undefined,
            document = window.document,
            navigator = window.navigator,
            sessionStorage = !1,
            setTimeout = window.setTimeout,
            clearTimeout = window.clearTimeout,
            setInterval = window.setInterval,
            clearInterval = window.clearInterval,
            JSON = window.JSON,
            alert = window.alert,
            History = window.History = window.History || {},
            history = window.history;
        try {
            sessionStorage = window.sessionStorage, sessionStorage.setItem("TEST", "1"), sessionStorage.removeItem("TEST")
        } catch (e) {
            sessionStorage = !1
        }
        if (JSON.stringify = JSON.stringify || JSON.encode, JSON.parse = JSON.parse || JSON.decode, "undefined" != typeof History.init) throw new Error("History.js Core has already been loaded...");
        History.init = function(options) {
            return "undefined" == typeof History.Adapter ? !1 : ("undefined" != typeof History.initCore && History.initCore(), "undefined" != typeof History.initHtml4 && History.initHtml4(), !0)
        }, History.initCore = function(options) {
            if ("undefined" != typeof History.initCore.initialized) return !1;
            if (History.initCore.initialized = !0, History.options = History.options || {}, History.options.hashChangeInterval = History.options.hashChangeInterval || 100, History.options.safariPollInterval = History.options.safariPollInterval || 500, History.options.doubleCheckInterval = History.options.doubleCheckInterval || 500, History.options.disableSuid = History.options.disableSuid || !1, History.options.storeInterval = History.options.storeInterval || 1e3, History.options.busyDelay = History.options.busyDelay || 250, History.options.debug = History.options.debug || !1, History.options.initialTitle = History.options.initialTitle || document.title, History.options.html4Mode = History.options.html4Mode || !1, History.options.delayInit = History.options.delayInit || !1, History.intervalList = [], History.clearAllIntervals = function() {
                    var i, il = History.intervalList;
                    if ("undefined" != typeof il && null !== il) {
                        for (i = 0; i < il.length; i++) clearInterval(il[i]);
                        History.intervalList = null
                    }
                }, History.debug = function() {
                    History.options.debug && History.log.apply(History, arguments)
                }, History.log = function() {
                    var message, i, n, args, arg, consoleExists = !("undefined" == typeof console || "undefined" == typeof console.log || "undefined" == typeof console.log.apply),
                        textarea = document.getElementById("log");
                    for (consoleExists ? (args = Array.prototype.slice.call(arguments), message = args.shift(), "undefined" != typeof console.debug ? console.debug.apply(console, [message, args]) : console.log.apply(console, [message, args])) : message = "\n" + arguments[0] + "\n", i = 1, n = arguments.length; n > i; ++i) {
                        if (arg = arguments[i], "object" == typeof arg && "undefined" != typeof JSON) try {
                            arg = JSON.stringify(arg)
                        } catch (Exception) {}
                        message += "\n" + arg + "\n"
                    }
                    return textarea ? (textarea.value += message + "\n-----\n", textarea.scrollTop = textarea.scrollHeight - textarea.clientHeight) : consoleExists || alert(message), !0
                }, History.getInternetExplorerMajorVersion = function() {
                    var result = History.getInternetExplorerMajorVersion.cached = "undefined" != typeof History.getInternetExplorerMajorVersion.cached ? History.getInternetExplorerMajorVersion.cached : function() {
                        for (var v = 3, div = document.createElement("div"), all = div.getElementsByTagName("i");
                            (div.innerHTML = "<!--[if gt IE " + ++v + "]><i></i><![endif]-->") && all[0];);
                        return v > 4 ? v : !1
                    }();
                    return result
                }, History.isInternetExplorer = function() {
                    var result = History.isInternetExplorer.cached = "undefined" != typeof History.isInternetExplorer.cached ? History.isInternetExplorer.cached : Boolean(History.getInternetExplorerMajorVersion());
                    return result
                }, History.options.html4Mode ? History.emulated = {
                    pushState: !0,
                    hashChange: !0
                } : History.emulated = {
                    pushState: !Boolean(window.history && window.history.pushState && window.history.replaceState && !(/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(navigator.userAgent) || /AppleWebKit\/5([0-2]|3[0-2])/i.test(navigator.userAgent))),
                    hashChange: Boolean(!("onhashchange" in window || "onhashchange" in document) || History.isInternetExplorer() && History.getInternetExplorerMajorVersion() < 8)
                }, History.enabled = !History.emulated.pushState, History.bugs = {
                    setHash: Boolean(!History.emulated.pushState && "Apple Computer, Inc." === navigator.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(navigator.userAgent)),
                    safariPoll: Boolean(!History.emulated.pushState && "Apple Computer, Inc." === navigator.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(navigator.userAgent)),
                    ieDoubleCheck: Boolean(History.isInternetExplorer() && History.getInternetExplorerMajorVersion() < 8),
                    hashEscape: Boolean(History.isInternetExplorer() && History.getInternetExplorerMajorVersion() < 7)
                }, History.isEmptyObject = function(obj) {
                    for (var name in obj)
                        if (obj.hasOwnProperty(name)) return !1;
                    return !0
                }, History.cloneObject = function(obj) {
                    var hash, newObj;
                    return obj ? (hash = JSON.stringify(obj), newObj = JSON.parse(hash)) : newObj = {}, newObj
                }, History.getRootUrl = function() {
                    var rootUrl = document.location.protocol + "//" + (document.location.hostname || document.location.host);
                    return document.location.port && (rootUrl += ":" + document.location.port), rootUrl += "/"
                }, History.getBaseHref = function() {
                    var baseElements = document.getElementsByTagName("base"),
                        baseElement = null,
                        baseHref = "";
                    return 1 === baseElements.length && (baseElement = baseElements[0], baseHref = baseElement.href.replace(/[^\/]+$/, "")), baseHref = baseHref.replace(/\/+$/, ""), baseHref && (baseHref += "/"), baseHref
                }, History.getBaseUrl = function() {
                    var baseUrl = History.getBaseHref() || History.getBasePageUrl() || History.getRootUrl();
                    return baseUrl
                }, History.getPageUrl = function() {
                    var pageUrl, State = History.getState(!1, !1),
                        stateUrl = (State || {}).url || History.getLocationHref();
                    return pageUrl = stateUrl.replace(/\/+$/, "").replace(/[^\/]+$/, function(part, index, string) {
                        return /\./.test(part) ? part : part + "/"
                    })
                }, History.getBasePageUrl = function() {
                    var basePageUrl = History.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function(part, index, string) {
                        return /[^\/]$/.test(part) ? "" : part
                    }).replace(/\/+$/, "") + "/";
                    return basePageUrl
                }, History.getFullUrl = function(url, allowBaseHref) {
                    var fullUrl = url,
                        firstChar = url.substring(0, 1);
                    return allowBaseHref = "undefined" == typeof allowBaseHref ? !0 : allowBaseHref, /[a-z]+\:\/\//.test(url) || (fullUrl = "/" === firstChar ? History.getRootUrl() + url.replace(/^\/+/, "") : "#" === firstChar ? History.getPageUrl().replace(/#.*/, "") + url : "?" === firstChar ? History.getPageUrl().replace(/[\?#].*/, "") + url : allowBaseHref ? History.getBaseUrl() + url.replace(/^(\.\/)+/, "") : History.getBasePageUrl() + url.replace(/^(\.\/)+/, "")), fullUrl.replace(/\#$/, "")
                }, History.getShortUrl = function(url) {
                    var shortUrl = url,
                        baseUrl = History.getBaseUrl(),
                        rootUrl = History.getRootUrl();
                    return History.emulated.pushState && (shortUrl = shortUrl.replace(baseUrl, "")), shortUrl = shortUrl.replace(rootUrl, "/"), History.isTraditionalAnchor(shortUrl) && (shortUrl = "./" + shortUrl), shortUrl = shortUrl.replace(/^(\.\/)+/g, "./").replace(/\#$/, "")
                }, History.getLocationHref = function(doc) {
                    return doc = doc || document, doc.URL === doc.location.href ? doc.location.href : doc.location.href === decodeURIComponent(doc.URL) ? doc.URL : doc.location.hash && decodeURIComponent(doc.location.href.replace(/^[^#]+/, "")) === doc.location.hash ? doc.location.href : -1 == doc.URL.indexOf("#") && -1 != doc.location.href.indexOf("#") ? doc.location.href : doc.URL || doc.location.href
                }, History.store = {}, History.idToState = History.idToState || {}, History.stateToId = History.stateToId || {}, History.urlToId = History.urlToId || {}, History.storedStates = History.storedStates || [], History.savedStates = History.savedStates || [], History.normalizeStore = function() {
                    History.store.idToState = History.store.idToState || {}, History.store.urlToId = History.store.urlToId || {}, History.store.stateToId = History.store.stateToId || {}
                }, History.getState = function(friendly, create) {
                    "undefined" == typeof friendly && (friendly = !0), "undefined" == typeof create && (create = !0);
                    var State = History.getLastSavedState();
                    return !State && create && (State = History.createStateObject()), friendly && (State = History.cloneObject(State), State.url = State.cleanUrl || State.url), State
                }, History.getIdByState = function(newState) {
                    var str, id = History.extractId(newState.url);
                    if (!id)
                        if (str = History.getStateString(newState), "undefined" != typeof History.stateToId[str]) id = History.stateToId[str];
                        else if ("undefined" != typeof History.store.stateToId[str]) id = History.store.stateToId[str];
                    else {
                        for (;;)
                            if (id = (new Date).getTime() + String(Math.random()).replace(/\D/g, ""), "undefined" == typeof History.idToState[id] && "undefined" == typeof History.store.idToState[id]) break;
                        History.stateToId[str] = id, History.idToState[id] = newState
                    }
                    return id
                }, History.normalizeState = function(oldState) {
                    var newState, dataNotEmpty;
                    return oldState && "object" == typeof oldState || (oldState = {}), "undefined" != typeof oldState.normalized ? oldState : (oldState.data && "object" == typeof oldState.data || (oldState.data = {}), newState = {}, newState.normalized = !0, newState.title = oldState.title || "", newState.url = History.getFullUrl(oldState.url ? oldState.url : History.getLocationHref()), newState.hash = History.getShortUrl(newState.url), newState.data = History.cloneObject(oldState.data), newState.id = History.getIdByState(newState), newState.cleanUrl = newState.url.replace(/\??\&_suid.*/, ""), newState.url = newState.cleanUrl, dataNotEmpty = !History.isEmptyObject(newState.data), (newState.title || dataNotEmpty) && History.options.disableSuid !== !0 && (newState.hash = History.getShortUrl(newState.url).replace(/\??\&_suid.*/, ""), /\?/.test(newState.hash) || (newState.hash += "?"), newState.hash += "&_suid=" + newState.id), newState.hashedUrl = History.getFullUrl(newState.hash), (History.emulated.pushState || History.bugs.safariPoll) && History.hasUrlDuplicate(newState) && (newState.url = newState.hashedUrl), newState)
                }, History.createStateObject = function(data, title, url) {
                    var State = {
                        data: data,
                        title: title,
                        url: url
                    };
                    return State = History.normalizeState(State)
                }, History.getStateById = function(id) {
                    id = String(id);
                    var State = History.idToState[id] || History.store.idToState[id] || undefined;
                    return State
                }, History.getStateString = function(passedState) {
                    var State, cleanedState, str;
                    return State = History.normalizeState(passedState), cleanedState = {
                        data: State.data,
                        title: passedState.title,
                        url: passedState.url
                    }, str = JSON.stringify(cleanedState)
                }, History.getStateId = function(passedState) {
                    var State, id;
                    return State = History.normalizeState(passedState), id = State.id
                }, History.getHashByState = function(passedState) {
                    var State, hash;
                    return State = History.normalizeState(passedState), hash = State.hash
                }, History.extractId = function(url_or_hash) {
                    var id, parts, url, tmp;
                    return tmp = -1 != url_or_hash.indexOf("#") ? url_or_hash.split("#")[0] : url_or_hash, parts = /(.*)\&_suid=([0-9]+)$/.exec(tmp), url = parts ? parts[1] || url_or_hash : url_or_hash, id = parts ? String(parts[2] || "") : "", id || !1
                }, History.isTraditionalAnchor = function(url_or_hash) {
                    var isTraditional = !/[\/\?\.]/.test(url_or_hash);
                    return isTraditional
                }, History.extractState = function(url_or_hash, create) {
                    var id, url, State = null;
                    return create = create || !1, id = History.extractId(url_or_hash), id && (State = History.getStateById(id)), State || (url = History.getFullUrl(url_or_hash), id = History.getIdByUrl(url) || !1, id && (State = History.getStateById(id)), State || !create || History.isTraditionalAnchor(url_or_hash) || (State = History.createStateObject(null, null, url))), State
                }, History.getIdByUrl = function(url) {
                    var id = History.urlToId[url] || History.store.urlToId[url] || undefined;
                    return id
                }, History.getLastSavedState = function() {
                    return History.savedStates[History.savedStates.length - 1] || undefined
                }, History.getLastStoredState = function() {
                    return History.storedStates[History.storedStates.length - 1] || undefined
                }, History.hasUrlDuplicate = function(newState) {
                    var oldState, hasDuplicate = !1;
                    return oldState = History.extractState(newState.url), hasDuplicate = oldState && oldState.id !== newState.id
                }, History.storeState = function(newState) {
                    return History.urlToId[newState.url] = newState.id, History.storedStates.push(History.cloneObject(newState)), newState
                }, History.isLastSavedState = function(newState) {
                    var newId, oldState, oldId, isLast = !1;
                    return History.savedStates.length && (newId = newState.id, oldState = History.getLastSavedState(), oldId = oldState.id, isLast = newId === oldId), isLast
                }, History.saveState = function(newState) {
                    return History.isLastSavedState(newState) ? !1 : (History.savedStates.push(History.cloneObject(newState)), !0)
                }, History.getStateByIndex = function(index) {
                    var State = null;
                    return State = "undefined" == typeof index ? History.savedStates[History.savedStates.length - 1] : 0 > index ? History.savedStates[History.savedStates.length + index] : History.savedStates[index]
                }, History.getCurrentIndex = function() {
                    var index = null;
                    return index = History.savedStates.length < 1 ? 0 : History.savedStates.length - 1
                }, History.getHash = function(doc) {
                    var hash, url = History.getLocationHref(doc);
                    return hash = History.getHashByUrl(url)
                }, History.unescapeHash = function(hash) {
                    var result = History.normalizeHash(hash);
                    return result = decodeURIComponent(result)
                }, History.normalizeHash = function(hash) {
                    var result = hash.replace(/[^#]*#/, "").replace(/#.*/, "");
                    return result
                }, History.setHash = function(hash, queue) {
                    var State, pageUrl;
                    return queue !== !1 && History.busy() ? (History.pushQueue({
                        scope: History,
                        callback: History.setHash,
                        args: arguments,
                        queue: queue
                    }), !1) : (History.busy(!0), State = History.extractState(hash, !0), State && !History.emulated.pushState ? History.pushState(State.data, State.title, State.url, !1) : History.getHash() !== hash && (History.bugs.setHash ? (pageUrl = History.getPageUrl(), History.pushState(null, null, pageUrl + "#" + hash, !1)) : document.location.hash = hash), History)
                }, History.escapeHash = function(hash) {
                    var result = History.normalizeHash(hash);
                    return result = window.encodeURIComponent(result), History.bugs.hashEscape || (result = result.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), result
                }, History.getHashByUrl = function(url) {
                    var hash = String(url).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
                    return hash = History.unescapeHash(hash)
                }, History.setTitle = function(newState) {
                    var firstState, title = newState.title;
                    title || (firstState = History.getStateByIndex(0), firstState && firstState.url === newState.url && (title = firstState.title || History.options.initialTitle));
                    try {
                        document.getElementsByTagName("title")[0].innerHTML = title.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
                    } catch (Exception) {}
                    return document.title = title, History
                }, History.queues = [], History.busy = function(value) {
                    if ("undefined" != typeof value ? History.busy.flag = value : "undefined" == typeof History.busy.flag && (History.busy.flag = !1), !History.busy.flag) {
                        clearTimeout(History.busy.timeout);
                        var fireNext = function() {
                            var i, queue, item;
                            if (!History.busy.flag)
                                for (i = History.queues.length - 1; i >= 0; --i) queue = History.queues[i], 0 !== queue.length && (item = queue.shift(), History.fireQueueItem(item), History.busy.timeout = setTimeout(fireNext, History.options.busyDelay))
                        };
                        History.busy.timeout = setTimeout(fireNext, History.options.busyDelay)
                    }
                    return History.busy.flag
                }, History.busy.flag = !1, History.fireQueueItem = function(item) {
                    return item.callback.apply(item.scope || History, item.args || [])
                }, History.pushQueue = function(item) {
                    return History.queues[item.queue || 0] = History.queues[item.queue || 0] || [], History.queues[item.queue || 0].push(item), History
                }, History.queue = function(item, queue) {
                    return "function" == typeof item && (item = {
                        callback: item
                    }), "undefined" != typeof queue && (item.queue = queue), History.busy() ? History.pushQueue(item) : History.fireQueueItem(item), History
                }, History.clearQueue = function() {
                    return History.busy.flag = !1, History.queues = [], History
                }, History.stateChanged = !1, History.doubleChecker = !1, History.doubleCheckComplete = function() {
                    return History.stateChanged = !0, History.doubleCheckClear(), History
                }, History.doubleCheckClear = function() {
                    return History.doubleChecker && (clearTimeout(History.doubleChecker), History.doubleChecker = !1), History
                }, History.doubleCheck = function(tryAgain) {
                    return History.stateChanged = !1, History.doubleCheckClear(), History.bugs.ieDoubleCheck && (History.doubleChecker = setTimeout(function() {
                        return History.doubleCheckClear(), History.stateChanged || tryAgain(), !0
                    }, History.options.doubleCheckInterval)), History
                }, History.safariStatePoll = function() {
                    var newState, urlState = History.extractState(History.getLocationHref());
                    if (!History.isLastSavedState(urlState)) return newState = urlState, newState || (newState = History.createStateObject()), History.Adapter.trigger(window, "popstate"), History
                }, History.back = function(queue) {
                    return queue !== !1 && History.busy() ? (History.pushQueue({
                        scope: History,
                        callback: History.back,
                        args: arguments,
                        queue: queue
                    }), !1) : (History.busy(!0), History.doubleCheck(function() {
                        History.back(!1)
                    }), history.go(-1), !0)
                }, History.forward = function(queue) {
                    return queue !== !1 && History.busy() ? (History.pushQueue({
                        scope: History,
                        callback: History.forward,
                        args: arguments,
                        queue: queue
                    }), !1) : (History.busy(!0), History.doubleCheck(function() {
                        History.forward(!1)
                    }), history.go(1), !0)
                }, History.go = function(index, queue) {
                    var i;
                    if (index > 0)
                        for (i = 1; index >= i; ++i) History.forward(queue);
                    else {
                        if (!(0 > index)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                        for (i = -1; i >= index; --i) History.back(queue)
                    }
                    return History
                }, History.emulated.pushState) {
                var emptyFunction = function() {};
                History.pushState = History.pushState || emptyFunction, History.replaceState = History.replaceState || emptyFunction
            } else History.onPopState = function(event, extra) {
                var currentHash, currentState, stateId = !1,
                    newState = !1;
                return History.doubleCheckComplete(), (currentHash = History.getHash()) ? (currentState = History.extractState(currentHash || History.getLocationHref(), !0), currentState ? History.replaceState(currentState.data, currentState.title, currentState.url, !1) : (History.Adapter.trigger(window, "anchorchange"), History.busy(!1)), History.expectedStateId = !1, !1) : (stateId = History.Adapter.extractEventData("state", event, extra) || !1, newState = stateId ? History.getStateById(stateId) : History.expectedStateId ? History.getStateById(History.expectedStateId) : History.extractState(History.getLocationHref()), newState || (newState = History.createStateObject(null, null, History.getLocationHref())), History.expectedStateId = !1, History.isLastSavedState(newState) ? (History.busy(!1), !1) : (History.storeState(newState), History.saveState(newState), History.setTitle(newState), History.Adapter.trigger(window, "statechange"), History.busy(!1), !0))
            }, History.Adapter.bind(window, "popstate", History.onPopState), History.pushState = function(data, title, url, queue) {
                if (History.getHashByUrl(url) && History.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (queue !== !1 && History.busy()) return History.pushQueue({
                    scope: History,
                    callback: History.pushState,
                    args: arguments,
                    queue: queue
                }), !1;
                History.busy(!0);
                var newState = History.createStateObject(data, title, url);
                return History.isLastSavedState(newState) ? History.busy(!1) : (History.storeState(newState), History.expectedStateId = newState.id, history.pushState(newState.id, newState.title, newState.url), History.Adapter.trigger(window, "popstate")), !0
            }, History.replaceState = function(data, title, url, queue) {
                if (History.getHashByUrl(url) && History.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (queue !== !1 && History.busy()) return History.pushQueue({
                    scope: History,
                    callback: History.replaceState,
                    args: arguments,
                    queue: queue
                }), !1;
                History.busy(!0);
                var newState = History.createStateObject(data, title, url);
                return History.isLastSavedState(newState) ? History.busy(!1) : (History.storeState(newState), History.expectedStateId = newState.id, history.replaceState(newState.id, newState.title, newState.url), History.Adapter.trigger(window, "popstate")), !0
            };
            if (sessionStorage) {
                try {
                    History.store = JSON.parse(sessionStorage.getItem("History.store")) || {}
                } catch (err) {
                    History.store = {}
                }
                History.normalizeStore()
            } else History.store = {}, History.normalizeStore();
            History.Adapter.bind(window, "unload", History.clearAllIntervals), History.saveState(History.storeState(History.extractState(History.getLocationHref(), !0))), sessionStorage && (History.onUnload = function() {
                var currentStore, item, currentStoreString;
                try {
                    currentStore = JSON.parse(sessionStorage.getItem("History.store")) || {}
                } catch (err) {
                    currentStore = {}
                }
                currentStore.idToState = currentStore.idToState || {}, currentStore.urlToId = currentStore.urlToId || {}, currentStore.stateToId = currentStore.stateToId || {};
                for (item in History.idToState) History.idToState.hasOwnProperty(item) && (currentStore.idToState[item] = History.idToState[item]);
                for (item in History.urlToId) History.urlToId.hasOwnProperty(item) && (currentStore.urlToId[item] = History.urlToId[item]);
                for (item in History.stateToId) History.stateToId.hasOwnProperty(item) && (currentStore.stateToId[item] = History.stateToId[item]);
                History.store = currentStore, History.normalizeStore(), currentStoreString = JSON.stringify(currentStore);
                try {
                    sessionStorage.setItem("History.store", currentStoreString)
                } catch (e) {
                    if (e.code !== DOMException.QUOTA_EXCEEDED_ERR) throw e;
                    sessionStorage.length && (sessionStorage.removeItem("History.store"), sessionStorage.setItem("History.store", currentStoreString))
                }
            }, History.intervalList.push(setInterval(History.onUnload, History.options.storeInterval)), History.Adapter.bind(window, "beforeunload", History.onUnload), History.Adapter.bind(window, "unload", History.onUnload)), History.emulated.pushState || (History.bugs.safariPoll && History.intervalList.push(setInterval(History.safariStatePoll, History.options.safariPollInterval)), ("Apple Computer, Inc." === navigator.vendor || "Mozilla" === (navigator.appCodeName || "")) && (History.Adapter.bind(window, "hashchange", function() {
                History.Adapter.trigger(window, "popstate")
            }), History.getHash() && History.Adapter.onDomLoad(function() {
                History.Adapter.trigger(window, "hashchange")
            })))
        }, History.options && History.options.delayInit || History.init()
    }(window), (window._gsQueue || (window._gsQueue = [])).push(function() {
        "use strict";
        window._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = [].slice,
                    r = function(t, e, s) {
                        i.call(this, t, e, s), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render
                    },
                    n = 1e-10,
                    a = i._internals.isSelector,
                    o = i._internals.isArray,
                    h = r.prototype = i.to({}, .1, {}),
                    l = [];
                r.version = "1.11.2", h.constructor = r, h.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.ticker = i.ticker, h.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, h.updateTo = function(t, e) {
                    var s, r = this.ratio;
                    e && this.timeline && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (s in t) this.vars[s] = t[s];
                    if (this._initted)
                        if (e) this._initted = !1;
                        else if (this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var n = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(n, !0, !1)
                    } else if (this._time > 0) {
                        this._initted = !1, this._init();
                        for (var a, o = 1 / (1 - r), h = this._firstPT; h;) a = h.s + h.c, h.c *= o, h.s = a - h.c, h = h._next
                    }
                    return this
                }, h.render = function(t, e, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var s, r, a, o, h, _, u, p, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        c = this._time,
                        m = this._totalTime,
                        d = this._cycle,
                        g = this._duration;
                    if (t >= f ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete"), 0 === g && (p = this._rawPrevTime, (0 === t || 0 > p || p === n) && p !== t && (i = !0, p > n && (r = "onReverseComplete")), this._rawPrevTime = p = !e || t ? t : n)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === g && this._rawPrevTime > n) && (r = "onReverseComplete", s = this._reversed), 0 > t ? (this._active = !1, 0 === g && (this._rawPrevTime >= 0 && (i = !0), this._rawPrevTime = p = !e || t ? t : n)) : this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (o = g + this._repeatDelay, this._cycle = this._totalTime / o >> 0, 0 !== this._cycle && this._cycle === this._totalTime / o && this._cycle--, this._time = this._totalTime - this._cycle * o, this._yoyo && 0 !== (1 & this._cycle) && (this._time = g - this._time), this._time > g ? this._time = g : 0 > this._time && (this._time = 0)), this._easeType ? (h = this._time / g, _ = this._easeType, u = this._easePower, (1 === _ || 3 === _ && h >= .5) && (h = 1 - h), 3 === _ && (h *= 2), 1 === u ? h *= h : 2 === u ? h *= h * h : 3 === u ? h *= h * h * h : 4 === u && (h *= h * h * h * h), this.ratio = 1 === _ ? 1 - h : 2 === _ ? h : .5 > this._time / g ? h / 2 : 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / g)), c === this._time && !i && d === this._cycle) return void(m !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || l)));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / g) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._active || !this._paused && this._time !== c && t >= 0 && (this._active = !0), 0 === m && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === g) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || l))), a = this._firstPT; a;) a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || l)), this._cycle !== d && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || l)), r && (this._gc || (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || l), 0 === g && this._rawPrevTime === n && p !== n && (this._rawPrevTime = 0)))
                }, r.to = function(t, e, i) {
                    return new r(t, e, i)
                }, r.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i)
                }, r.fromTo = function(t, e, i, s) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new r(t, e, s)
                }, r.staggerTo = r.allTo = function(t, e, n, h, _, u, p) {
                    h = h || 0;
                    var f, c, m, d, g = n.delay || 0,
                        v = [],
                        y = function() {
                            n.onComplete && n.onComplete.apply(n.onCompleteScope || this, arguments), _.apply(p || this, u || l)
                        };
                    for (o(t) || ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = s.call(t, 0))), f = t.length, m = 0; f > m; m++) {
                        c = {};
                        for (d in n) c[d] = n[d];
                        c.delay = g, m === f - 1 && _ && (c.onComplete = y), v[m] = new r(t[m], e, c), g += h
                    }
                    return v
                }, r.staggerFrom = r.allFrom = function(t, e, i, s, n, a, o) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, s, n, a, o)
                }, r.staggerFromTo = r.allFromTo = function(t, e, i, s, n, a, o, h) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, s, n, a, o, h)
                }, r.delayedCall = function(t, e, i, s, n) {
                    return new r(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        onCompleteScope: s,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        onReverseCompleteScope: s,
                        immediateRender: !1,
                        useFrames: n,
                        overwrite: 0
                    })
                }, r.set = function(t, e) {
                    return new r(t, 0, e)
                }, r.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var _ = function(t, e) {
                        for (var s = [], r = 0, n = t._first; n;) n instanceof i ? s[r++] = n : (e && (s[r++] = n), s = s.concat(_(n, e)), r = s.length), n = n._next;
                        return s
                    },
                    u = r.getAllTweens = function(e) {
                        return _(t._rootTimeline, e).concat(_(t._rootFramesTimeline, e))
                    };
                r.killAll = function(t, i, s, r) {
                    null == i && (i = !0), null == s && (s = !0);
                    var n, a, o, h = u(0 != r),
                        l = h.length,
                        _ = i && s && r;
                    for (o = 0; l > o; o++) a = h[o], (_ || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && (t ? a.totalTime(a.totalDuration()) : a._enabled(!1, !1))
                }, r.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var n, h, l, _, u, p = i._tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = s(t, 0)), o(t))
                            for (_ = t.length; --_ > -1;) r.killChildTweensOf(t[_], e);
                        else {
                            n = [];
                            for (l in p)
                                for (h = p[l].target.parentNode; h;) h === t && (n = n.concat(p[l].tweens)), h = h.parentNode;
                            for (u = n.length, _ = 0; u > _; _++) e && n[_].totalTime(n[_].totalDuration()), n[_]._enabled(!1, !1)
                        }
                    }
                };
                var p = function(t, i, s, r) {
                    i = i !== !1, s = s !== !1, r = r !== !1;
                    for (var n, a, o = u(r), h = i && s && r, l = o.length; --l > -1;) a = o[l], (h || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && a.paused(t)
                };
                return r.pauseAll = function(t, e, i) {
                    p(!0, t, e, i)
                }, r.resumeAll = function(t, e, i) {
                    p(!1, t, e, i)
                }, r.globalTimeScale = function(e) {
                    var s = t._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length ? (e = e || n, s._startTime = r - (r - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, r = i.ticker.frame, s._startTime = r - (r - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale
                }, h.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, h.totalProgress = function(t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                }, h.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, h.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, h.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, h.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, h.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, h.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, r
            }, !0), window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, s, r = this.vars;
                        for (s in r) i = r[s], a(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
                        a(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    r = 1e-10,
                    n = i._internals.isSelector,
                    a = i._internals.isArray,
                    o = [],
                    h = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    l = function(t, e, i, s) {
                        t._timeline.pause(t._startTime), e && e.apply(s || t._timeline, i || o)
                    },
                    _ = o.slice,
                    u = s.prototype = new e;
                return s.version = "1.11.0", u.constructor = s, u.kill()._gc = !1, u.to = function(t, e, s, r) {
                    return e ? this.add(new i(t, e, s), r) : this.set(t, s, r)
                }, u.from = function(t, e, s, r) {
                    return this.add(i.from(t, e, s), r)
                }, u.fromTo = function(t, e, s, r, n) {
                    return e ? this.add(i.fromTo(t, e, s, r), n) : this.set(t, r, n)
                }, u.staggerTo = function(t, e, r, a, o, l, u, p) {
                    var f, c = new s({
                        onComplete: l,
                        onCompleteParams: u,
                        onCompleteScope: p
                    });
                    for ("string" == typeof t && (t = i.selector(t) || t), n(t) && (t = _.call(t, 0)), a = a || 0, f = 0; t.length > f; f++) r.startAt && (r.startAt = h(r.startAt)), c.to(t[f], e, h(r), f * a);
                    return this.add(c, o)
                }, u.staggerFrom = function(t, e, i, s, r, n, a, o) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o)
                }, u.staggerFromTo = function(t, e, i, s, r, n, a, o, h) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, h)
                }, u.call = function(t, e, s, r) {
                    return this.add(i.delayedCall(0, t, e, s), r)
                }, u.set = function(t, e, s) {
                    return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s)
                }, s.exportRoot = function(t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, n, a = new s(t),
                        o = a._timeline;
                    for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n;
                    return o.add(a, 0), a
                }, u.add = function(r, n, o, h) {
                    var l, _, u, p, f, c;
                    if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
                        if (r instanceof Array || r && r.push && a(r)) {
                            for (o = o || "normal", h = h || 0, l = n, _ = r.length, u = 0; _ > u; u++) a(p = r[u]) && (p = new s({
                                tweens: p
                            })), this.add(p, l), "string" != typeof p && "function" != typeof p && ("sequence" === o ? l = p._startTime + p.totalDuration() / p._timeScale : "start" === o && (p._startTime -= p.delay())), l += h;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r) return this.addLabel(r, n);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = i.delayedCall(0, r)
                    }
                    if (e.prototype.add.call(this, r, n), this._gc && !this._paused && this._duration < this.duration())
                        for (f = this, c = f.rawTime() > r._startTime; f._gc && f._timeline;) f._timeline.smoothChildTiming && c ? f.totalTime(f._totalTime, !0) : f._enabled(!0, !1), f = f._timeline;
                    return this
                }, u.remove = function(e) {
                    if (e instanceof t) return this._remove(e, !1);
                    if (e instanceof Array || e && e.push && a(e)) {
                        for (var i = e.length; --i > -1;) this.remove(e[i]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, u._remove = function(t, i) {
                    e.prototype._remove.call(this, t, i);
                    var s = this._last;
                    return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = 0, this
                }, u.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, u.insert = u.insertMultiple = function(t, e, i, s) {
                    return this.add(t, e || 0, i, s)
                }, u.appendMultiple = function(t, e, i, s) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
                }, u.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, u.addPause = function(t, e, i, s) {
                    return this.call(l, ["{self}", e, i, s], this, t)
                }, u.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, u.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, u._parseTimeOrLabel = function(e, i, s, r) {
                    var n;
                    if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && a(r)))
                        for (n = r.length; --n > -1;) r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (n = e.indexOf("="), -1 === n) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration()
                    }
                    return Number(e) + i
                }, u.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                }, u.stop = function() {
                    return this.paused(!0)
                }, u.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, u.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, u.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, n, a, h, l, _ = this._dirty ? this.totalDuration() : this._totalDuration,
                        u = this._time,
                        p = this._startTime,
                        f = this._timeScale,
                        c = this._paused;
                    if (t >= _ ? (this._totalTime = this._time = _, this._reversed || this._hasPausedChild() || (n = !0, h = "onComplete", 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > r && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t ? t : r, t = _ + 1e-6) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== u || 0 === this._duration && (this._rawPrevTime > r || 0 > t && this._rawPrevTime >= 0)) && (h = "onReverseComplete", n = this._reversed), 0 > t ? (this._active = !1, 0 === this._duration && this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t ? t : r, t = 0, this._initted || (l = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== u && this._first || i || l) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== u && t > 0 && (this._active = !0), 0 === u && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || o)), this._time >= u)
                            for (s = this._first; s && (a = s._next, !this._paused || c);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                        else
                            for (s = this._last; s && (a = s._prev, !this._paused || c);)(s._active || u >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                        this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || o)), h && (this._gc || (p === this._startTime || f !== this._timeScale) && (0 === this._time || _ >= this.totalDuration()) && (n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this.vars[h].apply(this.vars[h + "Scope"] || this, this.vars[h + "Params"] || o)))
                    }
                }, u._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, u.getChildren = function(t, e, s, r) {
                    r = r || -9999999999;
                    for (var n = [], a = this._first, o = 0; a;) r > a._startTime || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next;
                    return n
                }, u.getTweensOf = function(t, e) {
                    for (var s = i.getTweensOf(t), r = s.length, n = [], a = 0; --r > -1;)(s[r].timeline === this || e && this._contains(s[r])) && (n[a++] = s[r]);
                    return n
                }, u._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, u.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var s, r = this._first, n = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (s in n) n[s] >= i && (n[s] += t);
                    return this._uncache(!0)
                }, u._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) i[s]._kill(t, e) && (r = !0);
                    return r
                }, u.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return t !== !1 && (this._labels = {}), this._uncache(!0)
                }, u.invalidate = function() {
                    for (var t = this._first; t;) t.invalidate(), t = t._next;
                    return this
                }, u._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var s = this._first; s;) s._enabled(t, !0), s = s._next;
                    return e.prototype._enabled.call(this, t, i)
                }, u.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, u.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, s = 0, r = this._last, n = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, 0 > r._startTime && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e;
                            this._duration = this._totalDuration = s, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
                }, u.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, u.rawTime = function() {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, s
            }, !0), window._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var s = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    r = 1e-10,
                    n = [],
                    a = new i(null, null, 1, 0),
                    o = s.prototype = new t;
                return o.constructor = s, o.kill()._gc = !1, s.version = "1.11.0", o.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, o.addCallback = function(t, i, s, r) {
                    return this.add(e.delayedCall(0, t, s, r), i)
                }, o.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > -1;) i[s]._startTime === r && i[s]._enabled(!1, !1);
                    return this
                }, o.tweenTo = function(t, i) {
                    i = i || {};
                    var s, r, o = {
                        ease: a,
                        overwrite: 2,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (s in i) o[s] = i[s];
                    return o.time = this._parseTimeOrLabel(t), r = new e(this, Math.abs(Number(o.time) - this._time) / this._timeScale || .001, o), o.onStart = function() {
                        r.target.paused(!0), r.vars.time !== r.target.time() && r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || r, i.onStartParams || n)
                    }, r
                }, o.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        onCompleteScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var s = this.tweenTo(e, i);
                    return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
                }, o.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, a, o, h, l, _, u = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._duration,
                        f = this._time,
                        c = this._totalTime,
                        m = this._startTime,
                        d = this._timeScale,
                        g = this._rawPrevTime,
                        v = this._paused,
                        y = this._cycle;
                    if (t >= u ? (this._locked || (this._totalTime = u, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (a = !0, h = "onComplete", 0 === this._duration && (0 === t || 0 > g || g === r) && g !== t && this._first && (l = !0, g > r && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = p, t = p + 1e-6)) : 1e-7 > t ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== f || 0 === p && (g > r || 0 > t && g >= 0) && !this._locked) && (h = "onReverseComplete", a = this._reversed), 0 > t ? (this._active = !1, 0 === p && g >= 0 && this._first && (l = !0), this._rawPrevTime = t) : (this._rawPrevTime = p || !e || t ? t : r, t = 0, this._initted || (l = !0))) : (0 === p && 0 > g && (l = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (_ = p + this._repeatDelay, this._cycle = this._totalTime / _ >> 0, 0 !== this._cycle && this._cycle === this._totalTime / _ && this._cycle--, this._time = this._totalTime - this._cycle * _, this._yoyo && 0 !== (1 & this._cycle) && (this._time = p - this._time), this._time > p ? (this._time = p, t = p + 1e-6) : 0 > this._time ? this._time = t = 0 : t = this._time))), this._cycle !== y && !this._locked) {
                        var T = this._yoyo && 0 !== (1 & y),
                            w = T === (this._yoyo && 0 !== (1 & this._cycle)),
                            x = this._totalTime,
                            b = this._cycle,
                            P = this._rawPrevTime,
                            S = this._time;
                        if (this._totalTime = y * p, y > this._cycle ? T = !T : this._totalTime += p, this._time = f, this._rawPrevTime = 0 === p ? g - 1e-5 : g, this._cycle = y, this._locked = !0, f = T ? 0 : p, this.render(f, e, 0 === p), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || n), w && (f = T ? p + 1e-6 : -1e-6, this.render(f, !0, !1)), this._locked = !1, this._paused && !v) return;
                        this._time = S, this._totalTime = x, this._cycle = b, this._rawPrevTime = P
                    }
                    if (!(this._time !== f && this._first || i || l)) return void(c !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n)));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== c && t > 0 && (this._active = !0), 0 === c && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || n)), this._time >= f)
                        for (s = this._first; s && (o = s._next, !this._paused || v);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = o;
                    else
                        for (s = this._last; s && (o = s._prev, !this._paused || v);)(s._active || f >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = o;
                    this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n)), h && (this._locked || this._gc || (m === this._startTime || d !== this._timeScale) && (0 === this._time || u >= this.totalDuration()) && (a && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this.vars[h].apply(this.vars[h + "Scope"] || this, this.vars[h + "Params"] || n)))
                }, o.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var s, r, n = [],
                        a = this.getChildren(t, e, i),
                        o = 0,
                        h = a.length;
                    for (s = 0; h > s; s++) r = a[s], r.isActive() && (n[o++] = r);
                    return n
                }, o.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        s = i.length;
                    for (e = 0; s > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, o.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (t > e[i].time) return e[i].name;
                    return null
                }, o.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, o.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, o.totalProgress = function(t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                }, o.totalDuration = function(e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, o.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, o.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, o.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, o.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, o.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, s
            }, !0),
            function() {
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    s = [],
                    r = {},
                    n = function(t, e, i, s) {
                        this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t
                    },
                    a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    o = function(t, e, i, s) {
                        var r = {
                                a: t
                            },
                            n = {},
                            a = {},
                            o = {
                                c: s
                            },
                            h = (t + e) / 2,
                            l = (e + i) / 2,
                            _ = (i + s) / 2,
                            u = (h + l) / 2,
                            p = (l + _) / 2,
                            f = (p - u) / 8;
                        return r.b = h + (t - h) / 4, n.b = u + f, r.c = n.a = (r.b + n.b) / 2, n.c = a.a = (u + p) / 2, a.b = p - f, o.b = _ + (s - _) / 4, a.c = o.a = (a.b + o.b) / 2, [r, n, a, o]
                    },
                    h = function(t, r, n, a, h) {
                        var l, _, u, p, f, c, m, d, g, v, y, T, w, x = t.length - 1,
                            b = 0,
                            P = t[0].a;
                        for (l = 0; x > l; l++) f = t[b], _ = f.a, u = f.d, p = t[b + 1].d, h ? (y = e[l], T = i[l], w = .25 * (T + y) * r / (a ? .5 : s[l] || .5), c = u - (u - _) * (a ? .5 * r : 0 !== y ? w / y : 0), m = u + (p - u) * (a ? .5 * r : 0 !== T ? w / T : 0), d = u - (c + ((m - c) * (3 * y / (y + T) + .5) / 4 || 0))) : (c = u - .5 * (u - _) * r, m = u + .5 * (p - u) * r, d = u - (c + m) / 2), c += d, m += d, f.c = g = c, f.b = 0 !== l ? P : P = f.a + .6 * (f.c - f.a), f.da = u - _, f.ca = g - _, f.ba = P - _, n ? (v = o(_, P, g, u), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++, P = m;
                        f = t[b], f.b = P, f.c = P + .4 * (f.d - P), f.da = f.d - f.a, f.ca = f.c - f.a, f.ba = P - f.a, n && (v = o(f.a, P, f.c, f.d), t.splice(b, 1, v[0], v[1], v[2], v[3]))
                    },
                    l = function(t, s, r, a) {
                        var o, h, l, _, u, p, f = [];
                        if (a)
                            for (t = [a].concat(t), h = t.length; --h > -1;) "string" == typeof(p = t[h][s]) && "=" === p.charAt(1) && (t[h][s] = a[s] + Number(p.charAt(0) + p.substr(2)));
                        if (o = t.length - 2, 0 > o) return f[0] = new n(t[0][s], 0, 0, t[-1 > o ? 0 : 1][s]), f;
                        for (h = 0; o > h; h++) l = t[h][s], _ = t[h + 1][s], f[h] = new n(l, 0, 0, _), r && (u = t[h + 2][s], e[h] = (e[h] || 0) + (_ - l) * (_ - l), i[h] = (i[h] || 0) + (u - _) * (u - _));
                        return f[h] = new n(t[h][s], 0, 0, t[h + 1][s]), f
                    },
                    _ = function(t, n, o, _, u, p) {
                        var f, c, m, d, g, v, y, T, w = {},
                            x = [],
                            b = p || t[0];
                        u = "string" == typeof u ? "," + u + "," : a, null == n && (n = 1);
                        for (c in t[0]) x.push(c);
                        if (t.length > 1) {
                            for (T = t[t.length - 1], y = !0, f = x.length; --f > -1;)
                                if (c = x[f], Math.abs(b[c] - T[c]) > .05) {
                                    y = !1;
                                    break
                                }
                            y && (t = t.concat(), p && t.unshift(p), t.push(t[1]), p = t[t.length - 3])
                        }
                        for (e.length = i.length = s.length = 0, f = x.length; --f > -1;) c = x[f], r[c] = -1 !== u.indexOf("," + c + ","), w[c] = l(t, c, r[c], p);
                        for (f = e.length; --f > -1;) e[f] = Math.sqrt(e[f]), i[f] = Math.sqrt(i[f]);
                        if (!_) {
                            for (f = x.length; --f > -1;)
                                if (r[c])
                                    for (m = w[x[f]], v = m.length - 1, d = 0; v > d; d++) g = m[d + 1].da / i[d] + m[d].da / e[d], s[d] = (s[d] || 0) + g * g;
                            for (f = s.length; --f > -1;) s[f] = Math.sqrt(s[f])
                        }
                        for (f = x.length, d = o ? 4 : 1; --f > -1;) c = x[f], m = w[c], h(m, n, o, _, r[c]), y && (m.splice(0, d), m.splice(m.length - d, d));
                        return w
                    },
                    u = function(t, e, i) {
                        e = e || "soft";
                        var s, r, a, o, h, l, _, u, p, f, c, m = {},
                            d = "cubic" === e ? 3 : 2,
                            g = "soft" === e,
                            v = [];
                        if (g && i && (t = [i].concat(t)), null == t || d + 1 > t.length) throw "invalid Bezier data";
                        for (p in t[0]) v.push(p);
                        for (l = v.length; --l > -1;) {
                            for (p = v[l], m[p] = h = [], f = 0, u = t.length, _ = 0; u > _; _++) s = null == i ? t[_][p] : "string" == typeof(c = t[_][p]) && "=" === c.charAt(1) ? i[p] + Number(c.charAt(0) + c.substr(2)) : Number(c), g && _ > 1 && u - 1 > _ && (h[f++] = (s + h[f - 2]) / 2), h[f++] = s;
                            for (u = f - d + 1, f = 0, _ = 0; u > _; _ += d) s = h[_], r = h[_ + 1], a = h[_ + 2], o = 2 === d ? 0 : h[_ + 3], h[f++] = c = 3 === d ? new n(s, r, a, o) : new n(s, (2 * r + s) / 3, (2 * r + a) / 3, a);
                            h.length = f
                        }
                        return m
                    },
                    p = function(t, e, i) {
                        for (var s, r, n, a, o, h, l, _, u, p, f, c = 1 / i, m = t.length; --m > -1;)
                            for (p = t[m],
                                n = p.a, a = p.d - n, o = p.c - n, h = p.b - n, s = r = 0, _ = 1; i >= _; _++) l = c * _, u = 1 - l, s = r - (r = (l * l * a + 3 * u * (l * o + u * h)) * l), f = m * i + _ - 1, e[f] = (e[f] || 0) + s * s
                    },
                    f = function(t, e) {
                        e = e >> 0 || 6;
                        var i, s, r, n, a = [],
                            o = [],
                            h = 0,
                            l = 0,
                            _ = e - 1,
                            u = [],
                            f = [];
                        for (i in t) p(t[i], a, e);
                        for (r = a.length, s = 0; r > s; s++) h += Math.sqrt(a[s]), n = s % e, f[n] = h, n === _ && (l += h, n = s / e >> 0, u[n] = f, o[n] = l, h = 0, f = []);
                        return {
                            length: l,
                            lengths: o,
                            segments: u
                        }
                    },
                    c = window._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        API: 2,
                        global: !0,
                        init: function(t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var s, r, n, a, o, h = e.values || [],
                                l = {},
                                p = h[0],
                                c = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = c ? c instanceof Array ? c : [
                                ["x", "y", "rotation", c === !0 ? 0 : Number(c) || 0]
                            ] : null;
                            for (s in p) this._props.push(s);
                            for (n = this._props.length; --n > -1;) s = this._props[n], this._overwriteProps.push(s), r = this._func[s] = "function" == typeof t[s], l[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), o || l[s] !== h[0][s] && (o = l);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? _(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : u(h, e.type, l), this._segCount = this._beziers[s].length, this._timeRes) {
                                var m = f(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (c = this._autoRotate)
                                for (c[0] instanceof Array || (this._autoRotate = c = [c]), n = c.length; --n > -1;)
                                    for (a = 0; 3 > a; a++) s = c[n][a], this._func[s] = "function" == typeof t[s] ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)] : !1;
                            return !0
                        },
                        set: function(e) {
                            var i, s, r, n, a, o, h, l, _, u, p = this._segCount,
                                f = this._func,
                                c = this._target;
                            if (this._timeRes) {
                                if (_ = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && p - 1 > r) {
                                    for (l = p - 1; l > r && e >= (this._l2 = _[++r]););
                                    this._l1 = _[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0]
                                } else if (this._l1 > e && r > 0) {
                                    for (; r > 0 && (this._l1 = _[--r]) >= e;);
                                    0 === r && this._l1 > e ? this._l1 = 0 : r++, this._l2 = _[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                                }
                                if (i = r, e -= this._l1, r = this._si, e > this._s2 && u.length - 1 > r) {
                                    for (l = u.length - 1; l > r && e >= (this._s2 = u[++r]););
                                    this._s1 = u[r - 1], this._si = r
                                } else if (this._s1 > e && r > 0) {
                                    for (; r > 0 && (this._s1 = u[--r]) >= e;);
                                    0 === r && this._s1 > e ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r
                                }
                                o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > e ? 0 : e >= 1 ? p - 1 : p * e >> 0, o = (e - i * (1 / p)) * p;
                            for (s = 1 - o, r = this._props.length; --r > -1;) n = this._props[r], a = this._beziers[n][i], h = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a, this._round[n] && (h = h + (h > 0 ? .5 : -.5) >> 0), f[n] ? c[n](h) : c[n] = h;
                            if (this._autoRotate) {
                                var m, d, g, v, y, T, w, x = this._autoRotate;
                                for (r = x.length; --r > -1;) n = x[r][2], T = x[r][3] || 0, w = x[r][4] === !0 ? 1 : t, a = this._beziers[x[r][0]], m = this._beziers[x[r][1]], a && m && (a = a[i], m = m[i], d = a.a + (a.b - a.a) * o, v = a.b + (a.c - a.b) * o, d += (v - d) * o, v += (a.c + (a.d - a.c) * o - v) * o, g = m.a + (m.b - m.a) * o, y = m.b + (m.c - m.b) * o, g += (y - g) * o, y += (m.c + (m.d - m.c) * o - y) * o, h = Math.atan2(y - g, v - d) * w + T, f[n] ? c[n](h) : c[n] = h)
                            }
                        }
                    }),
                    m = c.prototype;
                c.bezierThrough = _, c.cubicToQuadratic = o, c._autoCSS = !0, c.quadraticToCubic = function(t, e, i) {
                    return new n(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, c._cssRegister = function() {
                    var t = window._gsDefine.globals.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            s = e._setPluginRatio,
                            r = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function(t, e, n, a, o, h) {
                                e instanceof Array && (e = {
                                    values: e
                                }), h = new c;
                                var l, _, u, p = e.values,
                                    f = p.length - 1,
                                    m = [],
                                    d = {};
                                if (0 > f) return o;
                                for (l = 0; f >= l; l++) u = i(t, p[l], a, o, h, f !== l), m[l] = u.end;
                                for (_ in e) d[_] = e[_];
                                return d.values = m, o = new r(t, "bezier", 0, 0, u.pt, 2), o.data = u, o.plugin = h, o.setRatio = s, 0 === d.autoRotate && (d.autoRotate = !0), !d.autoRotate || d.autoRotate instanceof Array || (l = d.autoRotate === !0 ? 0 : Number(d.autoRotate), d.autoRotate = null != u.end.left ? [
                                    ["left", "top", "rotation", l, !1]
                                ] : null != u.end.x ? [
                                    ["x", "y", "rotation", l, !1]
                                ] : !1), d.autoRotate && (a._transform || a._enableTransforms(!1), u.autoRotate = a._target._gsTransform), h._onInitTween(u.proxy, d, a._tween), o
                            }
                        })
                    }
                }, m._roundProps = function(t, e) {
                    for (var i = this._overwriteProps, s = i.length; --s > -1;)(t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e)
                }, m._kill = function(t) {
                    var e, i, s = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) s[i] === e && s.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
            }(), window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, s, r, n, a = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                    },
                    o = {},
                    h = a.prototype = new t("css");
                h.constructor = a, a.version = "1.11.2", a.API = 2, a.defaultTransformPerspective = 0, h = "px", a.suffixMap = {
                    top: h,
                    right: h,
                    bottom: h,
                    left: h,
                    width: h,
                    height: h,
                    fontSize: h,
                    padding: h,
                    margin: h,
                    perspective: h
                };
                var l, _, u, p, f, c, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    d = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    g = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    v = /[^\d\-\.]/g,
                    y = /(?:\d|\-|\+|=|#|\.)*/g,
                    T = /opacity *= *([^)]*)/,
                    w = /opacity:([^;]*)/,
                    x = /alpha\(opacity *=.+?\)/i,
                    b = /^(rgb|hsl)/,
                    P = /([A-Z])/g,
                    S = /-([a-z])/gi,
                    k = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    R = function(t, e) {
                        return e.toUpperCase()
                    },
                    A = /(?:Left|Right|Width)/i,
                    C = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    D = /,(?=[^\)]*(?:\(|$))/gi,
                    M = Math.PI / 180,
                    I = 180 / Math.PI,
                    E = {},
                    F = document,
                    N = F.createElement("div"),
                    L = F.createElement("img"),
                    X = a._internals = {
                        _specialProps: o
                    },
                    z = navigator.userAgent,
                    U = function() {
                        var t, e = z.indexOf("Android"),
                            i = F.createElement("div");
                        return u = -1 !== z.indexOf("Safari") && -1 === z.indexOf("Chrome") && (-1 === e || Number(z.substr(e + 8, 1)) > 3), f = u && 6 > Number(z.substr(z.indexOf("Version/") + 8, 1)), p = -1 !== z.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(z) && (c = parseFloat(RegExp.$1)), i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", t = i.getElementsByTagName("a")[0], t ? /^0.55/.test(t.style.opacity) : !1
                    }(),
                    Y = function(t) {
                        return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    j = function(t) {
                        window.console && console.log(t)
                    },
                    B = "",
                    q = "",
                    V = function(t, e) {
                        e = e || N;
                        var i, s, r = e.style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === r[i[s] + t];);
                        return s >= 0 ? (q = 3 === s ? "ms" : i[s], B = "-" + q.toLowerCase() + "-", q + t) : null
                    },
                    Z = F.defaultView ? F.defaultView.getComputedStyle : function() {},
                    G = a.getStyle = function(t, e, i, s, r) {
                        var n;
                        return U || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || Z(t, null)) ? (t = i.getPropertyValue(e.replace(P, "-$1").toLowerCase()), n = t || i.length ? t : i[e]) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : Y(t)
                    },
                    $ = function(t, e, i, s, r) {
                        if ("px" === s || !s) return i;
                        if ("auto" === s || !i) return 0;
                        var n, a = A.test(e),
                            o = t,
                            h = N.style,
                            l = 0 > i;
                        return l && (i = -i), "%" === s && -1 !== e.indexOf("border") ? n = i / 100 * (a ? t.clientWidth : t.clientHeight) : (h.cssText = "border:0 solid red;position:" + G(t, "position") + ";line-height:0;", "%" !== s && o.appendChild ? h[a ? "borderLeftWidth" : "borderTopWidth"] = i + s : (o = t.parentNode || F.body, h[a ? "width" : "height"] = i + s), o.appendChild(N), n = parseFloat(N[a ? "offsetWidth" : "offsetHeight"]), o.removeChild(N), 0 !== n || r || (n = $(t, e, i, s, !0))), l ? -n : n
                    },
                    Q = function(t, e, i) {
                        if ("absolute" !== G(t, "position", i)) return 0;
                        var s = "left" === e ? "Left" : "Top",
                            r = G(t, "margin" + s, i);
                        return t["offset" + s] - ($(t, e, parseFloat(r), r.replace(y, "")) || 0)
                    },
                    W = function(t, e) {
                        var i, s, r = {};
                        if (e = e || Z(t, null))
                            if (i = e.length)
                                for (; --i > -1;) r[e[i].replace(S, R)] = e.getPropertyValue(e[i]);
                            else
                                for (i in e) r[i] = e[i];
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 !== r[i] && (r[i.replace(S, R)] = e[i]);
                        return U || (r.opacity = Y(t)), s = be(t, e, !1), r.rotation = s.rotation, r.skewX = s.skewX, r.scaleX = s.scaleX, r.scaleY = s.scaleY, r.x = s.x, r.y = s.y, xe && (r.z = s.z, r.rotationX = s.rotationX, r.rotationY = s.rotationY, r.scaleZ = s.scaleZ), r.filters && delete r.filters, r
                    },
                    H = function(t, e, i, s, r) {
                        var n, a, o, h = {},
                            l = t.style;
                        for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (h[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(v, "") ? n : 0 : Q(t, a), void 0 !== l[a] && (o = new ue(l, a, l[a], o)));
                        if (s)
                            for (a in s) "className" !== a && (h[a] = s[a]);
                        return {
                            difs: h,
                            firstMPT: o
                        }
                    },
                    K = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    J = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    te = function(t, e, i) {
                        var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = K[e],
                            n = r.length;
                        for (i = i || Z(t, null); --n > -1;) s -= parseFloat(G(t, "padding" + r[n], i, !0)) || 0, s -= parseFloat(G(t, "border" + r[n] + "Width", i, !0)) || 0;
                        return s
                    },
                    ee = function(t, e) {
                        (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                        var i = t.split(" "),
                            s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return null == r ? r = "0" : "center" === r && (r = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(v, "")), e.oy = parseFloat(r.replace(v, ""))), s + " " + r + (i.length > 2 ? " " + i[2] : "")
                    },
                    ie = function(t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                    },
                    se = function(t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * Number(t.substr(2)) + e : parseFloat(t)
                    },
                    re = function(t, e, i, s) {
                        var r, n, a, o, h = 1e-6;
                        return null == t ? o = e : "number" == typeof t ? o = t : (r = 360, n = t.split("_"), a = Number(n[0].replace(v, "")) * (-1 === t.indexOf("rad") ? 1 : I) - ("=" === t.charAt(1) ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && (a %= r, a !== a % (r / 2) && (a = 0 > a ? a + r : a - r)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (0 | a / r) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (0 | a / r) * r)), o = e + a), h > o && o > -h && (o = 0), o
                    },
                    ne = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    ae = function(t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
                    },
                    oe = function(t) {
                        var e, i, s, r, n, a;
                        return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ne[t] ? ne[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), s = t.charAt(3), t = "#" + e + e + i + i + s + s), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(m), r = Number(t[0]) % 360 / 360, n = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (n + 1) : a + n - a * n, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = ae(r + 1 / 3, e, i), t[1] = ae(r, e, i), t[2] = ae(r - 1 / 3, e, i), t) : (t = t.match(m) || ne.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : ne.black
                    },
                    he = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (h in ne) he += "|" + h + "\\b";
                he = RegExp(he + ")", "gi");
                var le = function(t, e, i, s) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var r, n = e ? (t.match(he) || [""])[0] : "",
                            a = t.split(n).join("").match(g) || [],
                            o = t.substr(0, t.indexOf(a[0])),
                            h = ")" === t.charAt(t.length - 1) ? ")" : "",
                            l = -1 !== t.indexOf(" ") ? " " : ",",
                            _ = a.length,
                            u = _ > 0 ? a[0].replace(m, "") : "";
                        return _ ? r = e ? function(t) {
                            var e, p, f, c;
                            if ("number" == typeof t) t += u;
                            else if (s && D.test(t)) {
                                for (c = t.replace(D, "|").split("|"), f = 0; c.length > f; f++) c[f] = r(c[f]);
                                return c.join(",")
                            }
                            if (e = (t.match(he) || [n])[0], p = t.split(e).join("").match(g) || [], f = p.length, _ > f--)
                                for (; _ > ++f;) p[f] = i ? p[0 | (f - 1) / 2] : a[f];
                            return o + p.join(l) + l + e + h + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, n, p;
                            if ("number" == typeof t) t += u;
                            else if (s && D.test(t)) {
                                for (n = t.replace(D, "|").split("|"), p = 0; n.length > p; p++) n[p] = r(n[p]);
                                return n.join(",")
                            }
                            if (e = t.match(g) || [], p = e.length, _ > p--)
                                for (; _ > ++p;) e[p] = i ? e[0 | (p - 1) / 2] : a[p];
                            return o + e.join(l) + h
                        } : function(t) {
                            return t
                        }
                    },
                    _e = function(t) {
                        return t = t.split(","),
                            function(e, i, s, r, n, a, o) {
                                var h, l = (i + "").split(" ");
                                for (o = {}, h = 0; 4 > h; h++) o[t[h]] = l[h] = l[h] || l[(h - 1) / 2 >> 0];
                                return r.parse(e, o, n, a)
                            }
                    },
                    ue = (X._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, s, r, n = this.data, a = n.proxy, o = n.firstMPT, h = 1e-6; o;) e = a[o.v], o.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : h > e && e > -h && (e = 0), o.t[o.p] = e, o = o._next;
                        if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t)
                            for (o = n.firstMPT; o;) {
                                if (i = o.t, i.type) {
                                    if (1 === i.type) {
                                        for (r = i.xs0 + i.s + i.xs1, s = 1; i.l > s; s++) r += i["xn" + s] + i["xs" + (s + 1)];
                                        i.e = r
                                    }
                                } else i.e = i.s + i.xs0;
                                o = o._next
                            }
                    }, function(t, e, i, s, r) {
                        this.t = t, this.p = e, this.v = i, this.r = r, s && (s._prev = this, this._next = s)
                    }),
                    pe = (X._parseToProxy = function(t, e, i, s, r, n) {
                        var a, o, h, l, _, u = s,
                            p = {},
                            f = {},
                            c = i._transform,
                            m = E;
                        for (i._transform = null, E = e, s = _ = i.parse(t, e, s, r), E = m, n && (i._transform = c, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u;) {
                            if (1 >= s.type && (o = s.p, f[o] = s.s + s.c, p[o] = s.s, n || (l = new ue(s, "s", o, l, s.r), s.c = 0), 1 === s.type))
                                for (a = s.l; --a > 0;) h = "xn" + a, o = s.p + "_" + h, f[o] = s.data[h], p[o] = s[h], n || (l = new ue(s, h, o, l, s.rxp[h]));
                            s = s._next
                        }
                        return {
                            proxy: p,
                            end: f,
                            firstMPT: l,
                            pt: _
                        }
                    }, X.CSSPropTween = function(t, e, s, r, a, o, h, l, _, u, p) {
                        this.t = t, this.p = e, this.s = s, this.c = r, this.n = h || e, t instanceof pe || n.push(this.n), this.r = l, this.type = o || 0, _ && (this.pr = _, i = !0), this.b = void 0 === u ? s : u, this.e = void 0 === p ? s + r : p, a && (this._next = a, a._prev = this)
                    }),
                    fe = a.parseComplex = function(t, e, i, s, r, n, a, o, h, _) {
                        i = i || n || "", a = new pe(t, e, 0, 0, a, _ ? 2 : 1, null, !1, o, i, s), s += "";
                        var u, p, f, c, g, v, y, T, w, x, P, S, k = i.split(", ").join(",").split(" "),
                            R = s.split(", ").join(",").split(" "),
                            A = k.length,
                            C = l !== !1;
                        for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (k = k.join(" ").replace(D, ", ").split(" "), R = R.join(" ").replace(D, ", ").split(" "), A = k.length), A !== R.length && (k = (n || "").split(" "), A = k.length), a.plugin = h, a.setRatio = _, u = 0; A > u; u++)
                            if (c = k[u], g = R[u], T = parseFloat(c), T || 0 === T) a.appendXtra("", T, ie(g, T), g.replace(d, ""), C && -1 !== g.indexOf("px"), !0);
                            else if (r && ("#" === c.charAt(0) || ne[c] || b.test(c))) S = "," === g.charAt(g.length - 1) ? ")," : ")", c = oe(c), g = oe(g), w = c.length + g.length > 6, w && !U && 0 === g[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(R[u]).join("transparent")) : (U || (w = !1), a.appendXtra(w ? "rgba(" : "rgb(", c[0], g[0] - c[0], ",", !0, !0).appendXtra("", c[1], g[1] - c[1], ",", !0).appendXtra("", c[2], g[2] - c[2], w ? "," : S, !0), w && (c = 4 > c.length ? 1 : c[3], a.appendXtra("", c, (4 > g.length ? 1 : g[3]) - c, S, !1)));
                        else if (v = c.match(m)) {
                            if (y = g.match(d), !y || y.length !== v.length) return a;
                            for (f = 0, p = 0; v.length > p; p++) P = v[p], x = c.indexOf(P, f), a.appendXtra(c.substr(f, x - f), Number(P), ie(y[p], P), "", C && "px" === c.substr(x + P.length, 2), 0 === p), f = x + P.length;
                            a["xs" + a.l] += c.substr(f)
                        } else a["xs" + a.l] += a.l ? " " + c : c;
                        if (-1 !== s.indexOf("=") && a.data) {
                            for (S = a.xs0 + a.data.s, u = 1; a.l > u; u++) S += a["xs" + u] + a.data["xn" + u];
                            a.e = S + a["xs" + u]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                    },
                    ce = 9;
                for (h = pe.prototype, h.l = h.pr = 0; --ce > 0;) h["xn" + ce] = 0, h["xs" + ce] = "";
                h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(t, e, i, s, r, n) {
                    var a = this,
                        o = a.l;
                    return a["xs" + o] += n && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new pe(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                        s: e + i
                    }, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (s || ""), a)
                };
                var me = function(t, e) {
                        e = e || {}, this.p = e.prefix ? V(t) || t : t, o[t] = o[this.p] = this, this.format = e.formatter || le(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    de = X._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var s, r, n = t.split(","),
                            a = e.defaultValue;
                        for (i = i || [a], s = 0; n.length > s; s++) e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || a, r = new me(n[s], e)
                    },
                    ge = function(t) {
                        if (!o[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            de(t, {
                                parser: function(t, i, s, r, n, a, h) {
                                    var l = (window.GreenSockGlobals || window).com.greensock.plugins[e];
                                    return l ? (l._cssRegister(), o[s].parse(t, i, s, r, n, a, h)) : (j("Error: " + e + " js file not loaded."), n)
                                }
                            })
                        }
                    };
                h = me.prototype, h.parseComplex = function(t, e, i, s, r, n) {
                    var a, o, h, l, _, u, p = this.keyword;
                    if (this.multi && (D.test(i) || D.test(e) ? (o = e.replace(D, "|").split("|"), h = i.replace(D, "|").split("|")) : p && (o = [e], h = [i])), h) {
                        for (l = h.length > o.length ? h.length : o.length, a = 0; l > a; a++) e = o[a] = o[a] || this.dflt, i = h[a] = h[a] || this.dflt, p && (_ = e.indexOf(p), u = i.indexOf(p), _ !== u && (i = -1 === u ? h : o, i[a] += " " + p));
                        e = o.join(", "), i = h.join(", ")
                    }
                    return fe(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
                }, h.parse = function(t, e, i, s, n, a) {
                    return this.parseComplex(t.style, this.format(G(t, this.p, r, !1, this.dflt)), this.format(e), n, a)
                }, a.registerSpecialProp = function(t, e, i) {
                    de(t, {
                        parser: function(t, s, r, n, a, o) {
                            var h = new pe(t, r, 0, 0, a, 2, r, !1, i);
                            return h.plugin = o, h.setRatio = e(t, s, n._tween, r), h
                        },
                        priority: i
                    })
                };
                var ve = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),
                    ye = V("transform"),
                    Te = B + "transform",
                    we = V("transformOrigin"),
                    xe = null !== V("perspective"),
                    be = function(t, e, i, s) {
                        if (t._gsTransform && i && !s) return t._gsTransform;
                        var r, n, o, h, l, _, u, p, f, c, m, d, g, v = i ? t._gsTransform || {
                                skewY: 0
                            } : {
                                skewY: 0
                            },
                            y = 0 > v.scaleX,
                            T = 2e-5,
                            w = 1e5,
                            x = 179.99,
                            b = x * M,
                            P = xe ? parseFloat(G(t, we, e, !1, "0 0 0").split(" ")[2]) || v.zOrigin || 0 : 0;
                        for (ye ? r = G(t, Te, e, !0) : t.currentStyle && (r = t.currentStyle.filter.match(C), r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), v.x || 0, v.y || 0].join(",") : ""), n = (r || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], o = n.length; --o > -1;) h = Number(n[o]), n[o] = (l = h - (h |= 0)) ? (0 | l * w + (0 > l ? -.5 : .5)) / w + h : h;
                        if (16 === n.length) {
                            var S = n[8],
                                k = n[9],
                                R = n[10],
                                A = n[12],
                                O = n[13],
                                D = n[14];
                            if (v.zOrigin && (D = -v.zOrigin, A = S * D - n[12], O = k * D - n[13], D = R * D + v.zOrigin - n[14]), !i || s || null == v.rotationX) {
                                var E, F, N, L, X, z, U, Y = n[0],
                                    j = n[1],
                                    B = n[2],
                                    q = n[3],
                                    V = n[4],
                                    Z = n[5],
                                    $ = n[6],
                                    Q = n[7],
                                    W = n[11],
                                    H = Math.atan2($, R),
                                    K = -b > H || H > b;
                                v.rotationX = H * I, H && (L = Math.cos(-H), X = Math.sin(-H), E = V * L + S * X, F = Z * L + k * X, N = $ * L + R * X, S = V * -X + S * L, k = Z * -X + k * L, R = $ * -X + R * L, W = Q * -X + W * L, V = E, Z = F, $ = N), H = Math.atan2(S, Y), v.rotationY = H * I, H && (z = -b > H || H > b, L = Math.cos(-H), X = Math.sin(-H), E = Y * L - S * X, F = j * L - k * X, N = B * L - R * X, k = j * X + k * L, R = B * X + R * L, W = q * X + W * L, Y = E, j = F, B = N), H = Math.atan2(j, Z), v.rotation = H * I, H && (U = -b > H || H > b, L = Math.cos(-H), X = Math.sin(-H), Y = Y * L + V * X, F = j * L + Z * X, Z = j * -X + Z * L, $ = B * -X + $ * L, j = F), U && K ? v.rotation = v.rotationX = 0 : U && z ? v.rotation = v.rotationY = 0 : z && K && (v.rotationY = v.rotationX = 0), v.scaleX = (0 | Math.sqrt(Y * Y + j * j) * w + .5) / w, v.scaleY = (0 | Math.sqrt(Z * Z + k * k) * w + .5) / w, v.scaleZ = (0 | Math.sqrt($ * $ + R * R) * w + .5) / w, v.skewX = 0, v.perspective = W ? 1 / (0 > W ? -W : W) : 0, v.x = A, v.y = O, v.z = D
                            }
                        } else if (!(xe && !s && n.length && v.x === n[4] && v.y === n[5] && (v.rotationX || v.rotationY) || void 0 !== v.x && "none" === G(t, "display", e))) {
                            var J = n.length >= 6,
                                te = J ? n[0] : 1,
                                ee = n[1] || 0,
                                ie = n[2] || 0,
                                se = J ? n[3] : 1;
                            v.x = n[4] || 0, v.y = n[5] || 0, _ = Math.sqrt(te * te + ee * ee), u = Math.sqrt(se * se + ie * ie), p = te || ee ? Math.atan2(ee, te) * I : v.rotation || 0, f = ie || se ? Math.atan2(ie, se) * I + p : v.skewX || 0, c = _ - Math.abs(v.scaleX || 0), m = u - Math.abs(v.scaleY || 0), Math.abs(f) > 90 && 270 > Math.abs(f) && (y ? (_ *= -1, f += 0 >= p ? 180 : -180, p += 0 >= p ? 180 : -180) : (u *= -1, f += 0 >= f ? 180 : -180)), d = (p - v.rotation) % 180, g = (f - v.skewX) % 180, (void 0 === v.skewX || c > T || -T > c || m > T || -T > m || d > -x && x > d && !1 | d * w || g > -x && x > g && !1 | g * w) && (v.scaleX = _, v.scaleY = u, v.rotation = p, v.skewX = f), xe && (v.rotationX = v.rotationY = v.z = 0, v.perspective = parseFloat(a.defaultTransformPerspective) || 0, v.scaleZ = 1)
                        }
                        v.zOrigin = P;
                        for (o in v) T > v[o] && v[o] > -T && (v[o] = 0);
                        return i && (t._gsTransform = v), v
                    },
                    Pe = function(t) {
                        var e, i, s = this.data,
                            r = -s.rotation * M,
                            n = r + s.skewX * M,
                            a = 1e5,
                            o = (0 | Math.cos(r) * s.scaleX * a) / a,
                            h = (0 | Math.sin(r) * s.scaleX * a) / a,
                            l = (0 | Math.sin(n) * -s.scaleY * a) / a,
                            _ = (0 | Math.cos(n) * s.scaleY * a) / a,
                            u = this.t.style,
                            p = this.t.currentStyle;
                        if (p) {
                            i = h, h = -l, l = -i, e = p.filter, u.filter = "";
                            var f, m, d = this.t.offsetWidth,
                                g = this.t.offsetHeight,
                                v = "absolute" !== p.position,
                                w = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + h + ", M21=" + l + ", M22=" + _,
                                x = s.x,
                                b = s.y;
                            if (null != s.ox && (f = (s.oxp ? .01 * d * s.ox : s.ox) - d / 2, m = (s.oyp ? .01 * g * s.oy : s.oy) - g / 2, x += f - (f * o + m * h), b += m - (f * l + m * _)), v ? (f = d / 2, m = g / 2, w += ", Dx=" + (f - (f * o + m * h) + x) + ", Dy=" + (m - (f * l + m * _) + b) + ")") : w += ", sizingMethod='auto expand')", u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(O, w) : w + " " + e, (0 === t || 1 === t) && 1 === o && 0 === h && 0 === l && 1 === _ && (v && -1 === w.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter")), !v) {
                                var P, S, k, R = 8 > c ? 1 : -1;
                                for (f = s.ieOffsetX || 0, m = s.ieOffsetY || 0, s.ieOffsetX = Math.round((d - ((0 > o ? -o : o) * d + (0 > h ? -h : h) * g)) / 2 + x), s.ieOffsetY = Math.round((g - ((0 > _ ? -_ : _) * g + (0 > l ? -l : l) * d)) / 2 + b), ce = 0; 4 > ce; ce++) S = J[ce], P = p[S], i = -1 !== P.indexOf("px") ? parseFloat(P) : $(this.t, S, parseFloat(P), P.replace(y, "")) || 0, k = i !== s[S] ? 2 > ce ? -s.ieOffsetX : -s.ieOffsetY : 2 > ce ? f - s.ieOffsetX : m - s.ieOffsetY, u[S] = (s[S] = Math.round(i - k * (0 === ce || 2 === ce ? 1 : R))) + "px"
                            }
                        }
                    },
                    Se = function() {
                        var t, e, i, s, r, n, a, o, h, l, _, u, f, c, m, d, g, v, y, T, w, x, b, P = this.data,
                            S = this.t.style,
                            k = P.rotation * M,
                            R = P.scaleX,
                            A = P.scaleY,
                            C = P.scaleZ,
                            O = P.perspective;
                        if (p) {
                            var D = 1e-4;
                            D > R && R > -D && (R = C = 2e-5), D > A && A > -D && (A = C = 2e-5), !O || P.z || P.rotationX || P.rotationY || (O = 0)
                        }
                        if (k || P.skewX) v = Math.cos(k), y = Math.sin(k), t = v, r = y, P.skewX && (k -= P.skewX * M, v = Math.cos(k), y = Math.sin(k)), e = -y, n = v;
                        else {
                            if (!(P.rotationY || P.rotationX || 1 !== C || O)) return void(S[ye] = "translate3d(" + P.x + "px," + P.y + "px," + P.z + "px)" + (1 !== R || 1 !== A ? " scale(" + R + "," + A + ")" : ""));
                            t = n = 1, e = r = 0
                        }
                        _ = 1, i = s = a = o = h = l = u = f = c = 0, m = O ? -1 / O : 0, d = P.zOrigin, g = 1e5, k = P.rotationY * M, k && (v = Math.cos(k), y = Math.sin(k), h = _ * -y, f = m * -y, i = t * y, a = r * y, _ *= v, m *= v, t *= v, r *= v), k = P.rotationX * M, k && (v = Math.cos(k), y = Math.sin(k), T = e * v + i * y, w = n * v + a * y, x = l * v + _ * y, b = c * v + m * y, i = e * -y + i * v, a = n * -y + a * v, _ = l * -y + _ * v, m = c * -y + m * v, e = T, n = w, l = x, c = b), 1 !== C && (i *= C, a *= C, _ *= C, m *= C), 1 !== A && (e *= A, n *= A, l *= A, c *= A), 1 !== R && (t *= R, r *= R, h *= R, f *= R), d && (u -= d, s = i * u, o = a * u, u = _ * u + d), s = (T = (s += P.x) - (s |= 0)) ? (0 | T * g + (0 > T ? -.5 : .5)) / g + s : s, o = (T = (o += P.y) - (o |= 0)) ? (0 | T * g + (0 > T ? -.5 : .5)) / g + o : o, u = (T = (u += P.z) - (u |= 0)) ? (0 | T * g + (0 > T ? -.5 : .5)) / g + u : u, S[ye] = "matrix3d(" + [(0 | t * g) / g, (0 | r * g) / g, (0 | h * g) / g, (0 | f * g) / g, (0 | e * g) / g, (0 | n * g) / g, (0 | l * g) / g, (0 | c * g) / g, (0 | i * g) / g, (0 | a * g) / g, (0 | _ * g) / g, (0 | m * g) / g, s, o, u, O ? 1 + -u / O : 1].join(",") + ")"
                    },
                    ke = function() {
                        var t, e, i, s, r, n, a, o, h, l = this.data,
                            _ = this.t,
                            u = _.style;
                        p && (t = u.top ? "top" : u.bottom ? "bottom" : parseFloat(G(_, "top", null, !1)) ? "bottom" : "top", e = G(_, t, null, !1), i = parseFloat(e) || 0, s = e.substr((i + "").length) || "px", l._ffFix = !l._ffFix, u[t] = (l._ffFix ? i + .05 : i - .05) + s), l.rotation || l.skewX ? (r = l.rotation * M, n = r - l.skewX * M, a = 1e5, o = l.scaleX * a, h = l.scaleY * a, u[ye] = "matrix(" + (0 | Math.cos(r) * o) / a + "," + (0 | Math.sin(r) * o) / a + "," + (0 | Math.sin(n) * -h) / a + "," + (0 | Math.cos(n) * h) / a + "," + l.x + "," + l.y + ")") : u[ye] = "matrix(" + l.scaleX + ",0,0," + l.scaleY + "," + l.x + "," + l.y + ")"
                    };
                de("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D", {
                    parser: function(t, e, i, s, n, a, o) {
                        if (s._transform) return n;
                        var h, l, _, u, p, f, c, m = s._transform = be(t, r, !0, o.parseTransform),
                            d = t.style,
                            g = 1e-6,
                            v = ve.length,
                            y = o,
                            T = {};
                        if ("string" == typeof y.transform && ye) _ = d.cssText, d[ye] = y.transform, d.display = "block", h = be(t, null, !1), d.cssText = _;
                        else if ("object" == typeof y) {
                            if (h = {
                                    scaleX: se(null != y.scaleX ? y.scaleX : y.scale, m.scaleX),
                                    scaleY: se(null != y.scaleY ? y.scaleY : y.scale, m.scaleY),
                                    scaleZ: se(null != y.scaleZ ? y.scaleZ : y.scale, m.scaleZ),
                                    x: se(y.x, m.x),
                                    y: se(y.y, m.y),
                                    z: se(y.z, m.z),
                                    perspective: se(y.transformPerspective, m.perspective)
                                }, c = y.directionalRotation, null != c)
                                if ("object" == typeof c)
                                    for (_ in c) y[_] = c[_];
                                else y.rotation = c;
                            h.rotation = re("rotation" in y ? y.rotation : "shortRotation" in y ? y.shortRotation + "_short" : "rotationZ" in y ? y.rotationZ : m.rotation, m.rotation, "rotation", T), xe && (h.rotationX = re("rotationX" in y ? y.rotationX : "shortRotationX" in y ? y.shortRotationX + "_short" : m.rotationX || 0, m.rotationX, "rotationX", T), h.rotationY = re("rotationY" in y ? y.rotationY : "shortRotationY" in y ? y.shortRotationY + "_short" : m.rotationY || 0, m.rotationY, "rotationY", T)), h.skewX = null == y.skewX ? m.skewX : re(y.skewX, m.skewX), h.skewY = null == y.skewY ? m.skewY : re(y.skewY, m.skewY), (l = h.skewY - m.skewY) && (h.skewX += l, h.rotation += l)
                        }
                        for (null != y.force3D && (m.force3D = y.force3D, f = !0), p = m.force3D || m.z || m.rotationX || m.rotationY || h.z || h.rotationX || h.rotationY || h.perspective, p || null == y.scale || (h.scaleZ = 1); --v > -1;) i = ve[v], u = h[i] - m[i], (u > g || -g > u || null != E[i]) && (f = !0, n = new pe(m, i, m[i], u, n), i in T && (n.e = T[i]), n.xs0 = 0, n.plugin = a, s._overwriteProps.push(n.n));
                        return u = y.transformOrigin, (u || xe && p && m.zOrigin) && (ye ? (f = !0, i = we, u = (u || G(t, i, r, !1, "50% 50%")) + "", n = new pe(d, i, 0, 0, n, -1, "transformOrigin"), n.b = d[i], n.plugin = a, xe ? (_ = m.zOrigin, u = u.split(" "), m.zOrigin = (u.length > 2 && (0 === _ || "0px" !== u[2]) ? parseFloat(u[2]) : _) || 0, n.xs0 = n.e = d[i] = u[0] + " " + (u[1] || "50%") + " 0px", n = new pe(m, "zOrigin", 0, 0, n, -1, n.n), n.b = _, n.xs0 = n.e = m.zOrigin) : n.xs0 = n.e = d[i] = u) : ee(u + "", m)), f && (s._transformType = p || 3 === this._transformType ? 3 : 2), n
                    },
                    prefix: !0
                }), de("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), de("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, n, a) {
                        e = this.format(e);
                        var o, h, l, _, u, p, f, c, m, d, g, v, y, T, w, x, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            P = t.style;
                        for (m = parseFloat(t.offsetWidth), d = parseFloat(t.offsetHeight), o = e.split(" "), h = 0; b.length > h; h++) this.p.indexOf("border") && (b[h] = V(b[h])), u = _ = G(t, b[h], r, !1, "0px"), -1 !== u.indexOf(" ") && (_ = u.split(" "), u = _[0], _ = _[1]), p = l = o[h], f = parseFloat(u), v = u.substr((f + "").length), y = "=" === p.charAt(1), y ? (c = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), c *= parseFloat(p), g = p.substr((c + "").length - (0 > c ? 1 : 0)) || "") : (c = parseFloat(p), g = p.substr((c + "").length)), "" === g && (g = s[i] || v), g !== v && (T = $(t, "borderLeft", f, v), w = $(t, "borderTop", f, v), "%" === g ? (u = 100 * (T / m) + "%", _ = 100 * (w / d) + "%") : "em" === g ? (x = $(t, "borderLeft", 1, "em"), u = T / x + "em", _ = w / x + "em") : (u = T + "px", _ = w + "px"), y && (p = parseFloat(u) + c + g, l = parseFloat(_) + c + g)), a = fe(P, b[h], u + " " + _, p + " " + l, !1, "0px", a);
                        return a
                    },
                    prefix: !0,
                    formatter: le("0px 0px 0px 0px", !1, !0)
                }), de("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, s, n, a) {
                        var o, h, l, _, u, p, f = "background-position",
                            m = r || Z(t, null),
                            d = this.format((m ? c ? m.getPropertyValue(f + "-x") + " " + m.getPropertyValue(f + "-y") : m.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            g = this.format(e);
                        if (-1 !== d.indexOf("%") != (-1 !== g.indexOf("%")) && (p = G(t, "backgroundImage").replace(k, ""), p && "none" !== p)) {
                            for (o = d.split(" "), h = g.split(" "), L.setAttribute("src", p), l = 2; --l > -1;) d = o[l], _ = -1 !== d.indexOf("%"), _ !== (-1 !== h[l].indexOf("%")) && (u = 0 === l ? t.offsetWidth - L.width : t.offsetHeight - L.height, o[l] = _ ? parseFloat(d) / 100 * u + "px" : 100 * (parseFloat(d) / u) + "%");
                            d = o.join(" ")
                        }
                        return this.parseComplex(t.style, d, g, n, a)
                    },
                    formatter: ee
                }), de("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: ee
                }), de("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), de("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), de("transformStyle", {
                    prefix: !0
                }), de("backfaceVisibility", {
                    prefix: !0
                }), de("userSelect", {
                    prefix: !0
                }), de("margin", {
                    parser: _e("marginTop,marginRight,marginBottom,marginLeft")
                }), de("padding", {
                    parser: _e("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), de("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, s, n, a) {
                        var o, h, l;
                        return 9 > c ? (h = t.currentStyle, l = 8 > c ? " " : ",", o = "rect(" + h.clipTop + l + h.clipRight + l + h.clipBottom + l + h.clipLeft + ")", e = this.format(e).split(",").join(l)) : (o = this.format(G(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a)
                    }
                }), de("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), de("autoRound,strictUnits", {
                    parser: function(t, e, i, s, r) {
                        return r
                    }
                }), de("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, s, n, a) {
                        return this.parseComplex(t.style, this.format(G(t, "borderTopWidth", r, !1, "0px") + " " + G(t, "borderTopStyle", r, !1, "solid") + " " + G(t, "borderTopColor", r, !1, "#000")), this.format(e), n, a)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(he) || ["#000"])[0]
                    }
                }), de("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, s, r) {
                        var n = t.style,
                            a = "cssFloat" in n ? "cssFloat" : "styleFloat";
                        return new pe(n, a, 0, 0, r, -1, i, !1, 0, n[a], e)
                    }
                });
                var Re = function(t) {
                    var e, i = this.t,
                        s = i.filter || G(this.data, "filter"),
                        r = 0 | this.s + this.c * t;
                    100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !G(this.data, "filter")) : (i.filter = s.replace(x, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("opacity") ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") : i.filter = s.replace(T, "opacity=" + r))
                };
                de("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, s, n, a) {
                        var o = parseFloat(G(t, "opacity", r, !1, "1")),
                            h = t.style,
                            l = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), l && 1 === o && "hidden" === G(t, "visibility", r) && 0 !== e && (o = 0), U ? n = new pe(h, "opacity", o, e - o, n) : (n = new pe(h, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = l ? 1 : 0, h.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Re), l && (n = new pe(h, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", s._overwriteProps.push(n.n), s._overwriteProps.push(i)), n
                    }
                });
                var Ae = function(t, e) {
                        e && (t.removeProperty ? t.removeProperty(e.replace(P, "-$1").toLowerCase()) : t.removeAttribute(e))
                    },
                    Ce = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.className = 0 === t ? this.b : this.e;
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Ae(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.className !== this.e && (this.t.className = this.e)
                    };
                de("className", {
                    parser: function(t, e, s, n, a, o, h) {
                        var l, _, u, p, f, c = t.className,
                            m = t.style.cssText;
                        if (a = n._classNamePT = new pe(t, s, 0, 0, a, 2), a.setRatio = Ce, a.pr = -11, i = !0, a.b = c, _ = W(t, r), u = t._gsClassPT) {
                            for (p = {}, f = u.data; f;) p[f.p] = 1, f = f._next;
                            u.setRatio(1)
                        }
                        return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : c.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), n._tween._duration && (t.className = a.e, l = H(t, _, W(t), h, p), t.className = c, a.data = l.firstMPT, t.style.cssText = m, a = a.xfirst = n.parse(t, l.difs, a, o)), a
                    }
                });
                var Oe = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, s, r, n = this.t.style,
                            a = o.transform.parse;
                        if ("all" === this.e) n.cssText = "", r = !0;
                        else
                            for (e = this.e.split(","), s = e.length; --s > -1;) i = e[s], o[i] && (o[i].parse === a ? r = !0 : i = "transformOrigin" === i ? we : o[i].p), Ae(n, i);
                        r && (Ae(n, ye), this.t._gsTransform && delete this.t._gsTransform)
                    }
                };
                for (de("clearProps", {
                        parser: function(t, e, s, r, n) {
                            return n = new pe(t, s, 0, 0, n, 2), n.setRatio = Oe, n.e = e, n.pr = -10, n.data = r._tween, i = !0, n
                        }
                    }), h = "bezier,throwProps,physicsProps,physics2D".split(","), ce = h.length; ce--;) ge(h[ce]);
                h = a.prototype, h._firstPT = null, h._onInitTween = function(t, e, o) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = o, this._vars = e, l = e.autoRound, i = !1, s = e.suffixMap || a.suffixMap, r = Z(t, ""), n = this._overwriteProps;
                    var h, p, c, m, d, g, v, y, T, x = t.style;
                    if (_ && "" === x.zIndex && (h = G(t, "zIndex", r), ("auto" === h || "" === h) && (x.zIndex = 0)), "string" == typeof e && (m = x.cssText, h = W(t, r), x.cssText = m + ";" + e, h = H(t, h, W(t)).difs, !U && w.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, x.cssText = m), this._firstPT = p = this.parse(t, e, null), this._transformType) {
                        for (T = 3 === this._transformType, ye ? u && (_ = !0, "" === x.zIndex && (v = G(t, "zIndex", r), ("auto" === v || "" === v) && (x.zIndex = 0)), f && (x.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (T ? "visible" : "hidden"))) : x.zoom = 1, c = p; c && c._next;) c = c._next;
                        y = new pe(t, "transform", 0, 0, null, 2), this._linkCSSP(y, null, c), y.setRatio = T && xe ? Se : ye ? ke : Pe, y.data = this._transform || be(t, r, !0), n.pop()
                    }
                    if (i) {
                        for (; p;) {
                            for (g = p._next, c = m; c && c.pr > p.pr;) c = c._next;
                            (p._prev = c ? c._prev : d) ? p._prev._next = p: m = p, (p._next = c) ? c._prev = p : d = p, p = g
                        }
                        this._firstPT = m
                    }
                    return !0
                }, h.parse = function(t, e, i, n) {
                    var a, h, _, u, p, f, c, m, d, g, v = t.style;
                    for (a in e) f = e[a], h = o[a], h ? i = h.parse(t, f, a, this, i, n, e) : (p = G(t, a, r) + "", d = "string" == typeof f, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || d && b.test(f) ? (d || (f = oe(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = fe(v, a, p, f, !0, "transparent", i, 0, n)) : !d || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (_ = parseFloat(p), c = _ || 0 === _ ? p.substr((_ + "").length) : "", ("" === p || "auto" === p) && ("width" === a || "height" === a ? (_ = te(t, a, r), c = "px") : "left" === a || "top" === a ? (_ = Q(t, a, r), c = "px") : (_ = "opacity" !== a ? 0 : 1, c = "")), g = d && "=" === f.charAt(1), g ? (u = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), u *= parseFloat(f), m = f.replace(y, "")) : (u = parseFloat(f), m = d ? f.substr((u + "").length) || "" : ""), "" === m && (m = s[a] || c), f = u || 0 === u ? (g ? u + _ : u) + m : e[a], c !== m && "" !== m && (u || 0 === u) && (_ || 0 === _) && (_ = $(t, a, _, c), "%" === m ? (_ /= $(t, a, 100, "%") / 100, _ > 100 && (_ = 100), e.strictUnits !== !0 && (p = _ + "%")) : "em" === m ? _ /= $(t, a, 1, "em") : (u = $(t, a, u, m), m = "px"), g && (u || 0 === u) && (f = u + _ + m)), g && (u += _), !_ && 0 !== _ || !u && 0 !== u ? void 0 !== v[a] && (f || "NaN" != f + "" && null != f) ? (i = new pe(v, a, u || _ || 0, 0, i, -1, a, !1, 0, p, f), i.xs0 = "none" !== f || "display" !== a && -1 === a.indexOf("Style") ? f : p) : j("invalid " + a + " tween value: " + e[a]) : (i = new pe(v, a, _, u - _, i, 0, a, l !== !1 && ("px" === m || "zIndex" === a), 0, p, f), i.xs0 = m)) : i = fe(v, a, p, f, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
                    return i
                }, h.setRatio = function(t) {
                    var e, i, s, r = this._firstPT,
                        n = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : n > e && e > -n && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (s = r.l, 2 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                                    r.t[r.p] = i
                                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next
                            } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                        else
                            for (; r;) 2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t), r = r._next
                }, h._enableTransforms = function(t) {
                    this._transformType = t || 3 === this._transformType ? 3 : 2, this._transform = this._transform || be(this._target, r, !0)
                }, h._linkCSSP = function(t, e, i, s) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, h._kill = function(e) {
                    var i, s, r, n = e;
                    if (e.autoAlpha || e.alpha) {
                        n = {};
                        for (s in e) n[s] = e[s];
                        n.opacity = 1, n.autoAlpha && (n.visibility = 1)
                    }
                    return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, n)
                };
                var De = function(t, e, i) {
                    var s, r, n, a;
                    if (t.slice)
                        for (r = t.length; --r > -1;) De(t[r], e, i);
                    else
                        for (s = t.childNodes, r = s.length; --r > -1;) n = s[r], a = n.type, n.style && (e.push(W(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || De(n, e, i)
                };
                return a.cascadeTo = function(t, i, s) {
                    var r, n, a, o = e.to(t, i, s),
                        h = [o],
                        l = [],
                        _ = [],
                        u = [],
                        p = e._internals.reservedProps;
                    for (t = o._targets || o.target, De(t, l, u), o.render(i, !0), De(t, _), o.render(0, !0), o._enabled(!0), r = u.length; --r > -1;)
                        if (n = H(u[r], l[r], _[r]), n.firstMPT) {
                            n = n.difs;
                            for (a in s) p[a] && (n[a] = s[a]);
                            h.push(e.to(u[r], i, n))
                        }
                    return h
                }, t.activate([a]), a
            }, !0),
            function() {
                var t = window._gsDefine.plugin({
                        propName: "roundProps",
                        priority: -1,
                        API: 2,
                        init: function(t, e, i) {
                            return this._tween = i, !0
                        }
                    }),
                    e = t.prototype;
                e._onInitAllProps = function() {
                    for (var t, e, i, s = this._tween, r = s.vars.roundProps instanceof Array ? s.vars.roundProps : s.vars.roundProps.split(","), n = r.length, a = {}, o = s._propLookup.roundProps; --n > -1;) a[r[n]] = 1;
                    for (n = r.length; --n > -1;)
                        for (t = r[n], e = s._firstPT; e;) i = e._next, e.pg ? e.t._roundProps(a, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : s._firstPT === e && (s._firstPT = i), e._next = e._prev = null, s._propLookup[t] = o), e = i;
                    return !1
                }, e._add = function(t, e, i, s) {
                    this._addTween(t, e, i, i + s, e, !0), this._overwriteProps.push(e)
                }
            }(), window._gsDefine.plugin({
                propName: "attr",
                API: 2,
                init: function(t, e) {
                    var i;
                    if ("function" != typeof t.setAttribute) return !1;
                    this._target = t, this._proxy = {};
                    for (i in e) this._addTween(this._proxy, i, parseFloat(t.getAttribute(i)), e[i], i) && this._overwriteProps.push(i);
                    return !0
                },
                set: function(t) {
                    this._super.setRatio.call(this, t);
                    for (var e, i = this._overwriteProps, s = i.length; --s > -1;) e = i[s], this._target.setAttribute(e, this._proxy[e] + "")
                }
            }), window._gsDefine.plugin({
                propName: "directionalRotation",
                API: 2,
                init: function(t, e) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var i, s, r, n, a, o, h = e.useRadians === !0 ? 2 * Math.PI : 360,
                        l = 1e-6;
                    for (i in e) "useRadians" !== i && (o = (e[i] + "").split("_"), s = o[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), n = this.finals[i] = "string" == typeof s && "=" === s.charAt(1) ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, a = n - r, o.length && (s = o.join("_"), -1 !== s.indexOf("short") && (a %= h, a !== a % (h / 2) && (a = 0 > a ? a + h : a - h)), -1 !== s.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * h) % h - (0 | a / h) * h : -1 !== s.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * h) % h - (0 | a / h) * h)), (a > l || -l > a) && (this._addTween(t, i, r, r + a, i), this._overwriteProps.push(i)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, window._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, s, r = window.GreenSockGlobals || window,
                    n = r.com.greensock,
                    a = 2 * Math.PI,
                    o = Math.PI / 2,
                    h = n._class,
                    l = function(e, i) {
                        var s = h("easing." + e, function() {}, !0),
                            r = s.prototype = new t;
                        return r.constructor = s, r.getRatio = i, s
                    },
                    _ = t.register || function() {},
                    u = function(t, e, i, s) {
                        var r = h("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new s
                        }, !0);
                        return _(r, t), r
                    },
                    p = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    f = function(e, i) {
                        var s = h("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = s.prototype = new t;
                        return r.constructor = s, r.getRatio = i, r.config = function(t) {
                            return new s(t)
                        }, s
                    },
                    c = u("Back", f("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), f("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), f("BackInOut", function(t) {
                        return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    m = h("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    d = m.prototype = new t;
                return d.constructor = m, d.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, m.ease = new m(.7, .7), d.config = m.config = function(t, e, i) {
                    return new m(t, e, i)
                }, e = h("easing.SteppedEase", function(t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), d = e.prototype = new t, d.constructor = e, d.getRatio = function(t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, d.config = e.config = function(t) {
                    return new e(t)
                }, i = h("easing.RoughEase", function(e) {
                    e = e || {};
                    for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), f = u, c = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = c ? Math.random() : 1 / u * f, s = d ? d.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), c ? s += Math.random() * r - .5 * r : f % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), l[_++] = {
                        x: i,
                        y: s
                    };
                    for (l.sort(function(t, e) {
                            return t.x - e.x
                        }), o = new p(1, 1, null), f = u; --f > -1;) a = l[f], o = new p(a.x, a.y, o);
                    this._prev = new p(0, 0, 0 !== o.t ? o : o.next)
                }, !0), d = i.prototype = new t, d.constructor = i, d.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && e.t >= t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, d.config = function(t) {
                    return new i(t)
                }, i.ease = new i, u("Bounce", l("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), l("BounceIn", function(t) {
                    return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), l("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), u("Circ", l("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), l("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), l("CircInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), s = function(e, i, s) {
                    var r = h("easing." + e, function(t, e) {
                            this._p1 = t || 1, this._p2 = e || s, this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0)
                        }, !0),
                        n = r.prototype = new t;
                    return n.constructor = r, n.getRatio = i, n.config = function(t, e) {
                        return new r(t, e)
                    }, r
                }, u("Elastic", s("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1
                }, .3), s("ElasticIn", function(t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2))
                }, .3), s("ElasticInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) + 1
                }, .45)), u("Expo", l("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), l("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), l("ExpoInOut", function(t) {
                    return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), u("Sine", l("SineOut", function(t) {
                    return Math.sin(t * o)
                }), l("SineIn", function(t) {
                    return -Math.cos(t * o) + 1
                }), l("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), h("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), c
            }, !0)
    }),
    function(t) {
        "use strict";
        var e = t.GreenSockGlobals || t;
        if (!e.TweenLite) {
            var i, s, r, n, a, o = function(t) {
                    var i, s = t.split("."),
                        r = e;
                    for (i = 0; s.length > i; i++) r[s[i]] = r = r[s[i]] || {};
                    return r
                },
                h = o("com.greensock"),
                l = 1e-10,
                _ = [].slice,
                u = function() {},
                p = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e
                    }
                }(),
                f = {},
                c = function(i, s, r, n) {
                    this.sc = f[i] ? f[i].sc : [], f[i] = this, this.gsClass = null, this.func = r;
                    var a = [];
                    this.check = function(h) {
                        for (var l, _, u, p, m = s.length, d = m; --m > -1;)(l = f[s[m]] || new c(s[m], [])).gsClass ? (a[m] = l.gsClass, d--) : h && l.sc.push(this);
                        if (0 === d && r)
                            for (_ = ("com.greensock." + i).split("."), u = _.pop(), p = o(_.join("."))[u] = this.gsClass = r.apply(r, a), n && (e[u] = p, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + i.split(".").join("/"), [], function() {
                                    return p
                                }) : "undefined" != typeof module && module.exports && (module.exports = p)), m = 0; this.sc.length > m; m++) this.sc[m].check()
                    }, this.check(!0)
                },
                m = t._gsDefine = function(t, e, i, s) {
                    return new c(t, e, i, s)
                },
                d = h._class = function(t, e, i) {
                    return e = e || function() {}, m(t, [], function() {
                        return e
                    }, i), e
                };
            m.globals = e;
            var g = [0, 0, 1, 1],
                v = [],
                y = d("easing.Ease", function(t, e, i, s) {
                    this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? g.concat(e) : g
                }, !0),
                T = y.map = {},
                w = y.register = function(t, e, i, s) {
                    for (var r, n, a, o, l = e.split(","), _ = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;)
                        for (n = l[_], r = s ? d("easing." + n, null, !0) : h.easing[n] || {}, a = u.length; --a > -1;) o = u[a], T[n + "." + o] = T[o + n] = r[o] = t.getRatio ? t : t[o] || new t
                };
            for (r = y.prototype, r._calcEnd = !1, r.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
                }, i = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], s = i.length; --s > -1;) r = i[s] + ",Power" + s, w(new y(null, null, 1, s), r, "easeOut", !0), w(new y(null, null, 2, s), r, "easeIn" + (0 === s ? ",easeNone" : "")), w(new y(null, null, 3, s), r, "easeInOut");
            T.linear = h.easing.Linear.easeIn, T.swing = h.easing.Quad.easeInOut;
            var x = d("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            r = x.prototype, r.addEventListener = function(t, e, i, s, r) {
                r = r || 0;
                var o, h, l = this._listeners[t],
                    _ = 0;
                for (null == l && (this._listeners[t] = l = []), h = l.length; --h > -1;) o = l[h], o.c === e && o.s === i ? l.splice(h, 1) : 0 === _ && r > o.pr && (_ = h + 1);
                l.splice(_, 0, {
                    c: e,
                    s: i,
                    up: s,
                    pr: r
                }), this !== n || a || n.wake()
            }, r.removeEventListener = function(t, e) {
                var i, s = this._listeners[t];
                if (s)
                    for (i = s.length; --i > -1;)
                        if (s[i].c === e) return void s.splice(i, 1)
            }, r.dispatchEvent = function(t) {
                var e, i, s, r = this._listeners[t];
                if (r)
                    for (e = r.length, i = this._eventTarget; --e > -1;) s = r[e], s.up ? s.c.call(s.s || i, {
                        type: t,
                        target: i
                    }) : s.c.call(s.s || i)
            };
            var b = t.requestAnimationFrame,
                P = t.cancelAnimationFrame,
                S = Date.now || function() {
                    return (new Date).getTime()
                },
                k = S();
            for (i = ["ms", "moz", "webkit", "o"], s = i.length; --s > -1 && !b;) b = t[i[s] + "RequestAnimationFrame"], P = t[i[s] + "CancelAnimationFrame"] || t[i[s] + "CancelRequestAnimationFrame"];
            d("Ticker", function(t, e) {
                var i, s, r, o, h, l = this,
                    _ = S(),
                    p = e !== !1 && b,
                    f = function(t) {
                        k = S(), l.time = (k - _) / 1e3;
                        var e, n = l.time - h;
                        (!i || n > 0 || t === !0) && (l.frame++, h += n + (n >= o ? .004 : o - n), e = !0), t !== !0 && (r = s(f)), e && l.dispatchEvent("tick")
                    };
                x.call(l), l.time = l.frame = 0, l.tick = function() {
                    f(!0)
                }, l.sleep = function() {
                    null != r && (p && P ? P(r) : clearTimeout(r), s = u, r = null, l === n && (a = !1))
                }, l.wake = function() {
                    null !== r && l.sleep(), s = 0 === i ? u : p && b ? b : function(t) {
                        return setTimeout(t, 0 | 1e3 * (h - l.time) + 1)
                    }, l === n && (a = !0), f(2)
                }, l.fps = function(t) {
                    return arguments.length ? (i = t, o = 1 / (i || 60), h = this.time + o, void l.wake()) : i
                }, l.useRAF = function(t) {
                    return arguments.length ? (l.sleep(), p = t, void l.fps(i)) : p
                }, l.fps(t), setTimeout(function() {
                    p && (!r || 5 > l.frame) && l.useRAF(!1)
                }, 1500)
            }), r = h.Ticker.prototype = new h.events.EventDispatcher, r.constructor = h.Ticker;
            var R = d("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, U) {
                    a || n.wake();
                    var i = this.vars.useFrames ? z : U;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            n = R.ticker = new h.Ticker, r = R.prototype, r._dirty = r._gc = r._initted = r._paused = !1, r._totalTime = r._time = 0, r._rawPrevTime = -1, r._next = r._last = r._onUpdate = r._timeline = r.timeline = null, r._paused = !1;
            var A = function() {
                a && S() - k > 2e3 && n.wake(), setTimeout(A, 2e3)
            };
            A(), r.play = function(t, e) {
                return arguments.length && this.seek(t, e), this.reversed(!1).paused(!1)
            }, r.pause = function(t, e) {
                return arguments.length && this.seek(t, e), this.paused(!0)
            }, r.resume = function(t, e) {
                return arguments.length && this.seek(t, e), this.paused(!1)
            }, r.seek = function(t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, r.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, r.reverse = function(t, e) {
                return arguments.length && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, r.render = function() {}, r.invalidate = function() {
                return this
            }, r.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
            }, r._enabled = function(t, e) {
                return a || n.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, r._kill = function() {
                return this._enabled(!1, !1)
            }, r.kill = function(t, e) {
                return this._kill(t, e), this
            }, r._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, r._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, r.eventCallback = function(t, e, i, s) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = p(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, r.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, r.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, r.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, r.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, r.totalTime = function(t, e, i) {
                if (a || n.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var s = this._totalDuration,
                            r = this._timeline;
                        if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && this.render(t, e, !1)
                }
                return this
            }, r.progress = r.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
            }, r.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, r.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || l, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, r.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._totalTime, !0)), this) : this._reversed
            }, r.paused = function(t) {
                if (!arguments.length) return this._paused;
                if (t != this._paused && this._timeline) {
                    a || t || n.wake();
                    var e = this._timeline,
                        i = e.rawTime(),
                        s = i - this._pauseTime;
                    !t && e.smoothChildTiming && (this._startTime += s, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== s && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
                }
                return this._gc && !t && this._enabled(!0, !1), this
            };
            var C = d("core.SimpleTimeline", function(t) {
                R.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            r = C.prototype = new R, r.constructor = C, r.kill()._gc = !1, r._first = r._last = null, r._sortChildren = !1, r.add = r.insert = function(t, e) {
                var i, s;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (s = t._startTime; i && i._startTime > s;) i = i._prev;
                return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._timeline && this._uncache(!0), this
            }, r._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t.timeline = null, t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), this._timeline && this._uncache(!0)), this
            }, r.render = function(t, e, i) {
                var s, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) s = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s
            }, r.rawTime = function() {
                return a || n.wake(), this._totalTime
            };
            var O = d("TweenLite", function(e, i, s) {
                    if (R.call(this, i, s), this.render = O.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : O.selector(e) || e;
                    var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        h = this.vars.overwrite;
                    if (this._overwrite = h = null == h ? X[O.defaultOverwrite] : "number" == typeof h ? h >> 0 : X[h], (o || e instanceof Array || e.push && p(e)) && "number" != typeof e[0])
                        for (this._targets = a = _.call(e, 0), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++) n = a[r], n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(_.call(n, 0))) : (this._siblings[r] = Y(n, this, !1), 1 === h && this._siblings[r].length > 1 && j(n, this, null, 1, this._siblings[r])) : (n = a[r--] = O.selector(n), "string" == typeof n && a.splice(r + 1, 1)) : a.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = Y(e, this, !1), 1 === h && this._siblings.length > 1 && j(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && this.render(-this._delay, !1, !0)
                }, !0),
                D = function(e) {
                    return e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                M = function(t, e) {
                    var i, s = {};
                    for (i in t) L[i] || i in e && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!E[i] || E[i] && E[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                    t.css = s
                };
            r = O.prototype = new R, r.constructor = O, r.kill()._gc = !1, r.ratio = 0, r._firstPT = r._targets = r._overwrittenProps = r._startAt = null, r._notifyPluginsOfEnabled = !1, O.version = "1.11.2", O.defaultEase = r._ease = new y(null, null, 1, 1), O.defaultOverwrite = "auto", O.ticker = n, O.autoSleep = !0, O.selector = t.$ || t.jQuery || function(e) {
                return t.$ ? (O.selector = t.$, t.$(e)) : t.document ? t.document.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e
            };
            var I = O._internals = {
                    isArray: p,
                    isSelector: D
                },
                E = O._plugins = {},
                F = O._tweenLookup = {},
                N = 0,
                L = I.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1
                },
                X = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                z = R._rootFramesTimeline = new C,
                U = R._rootTimeline = new C;
            U._startTime = n.time, z._startTime = n.frame, U._active = z._active = !0, R._updateRoot = function() {
                if (U.render((n.time - U._startTime) * U._timeScale, !1, !1), z.render((n.frame - z._startTime) * z._timeScale, !1, !1), !(n.frame % 120)) {
                    var t, e, i;
                    for (i in F) {
                        for (e = F[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete F[i]
                    }
                    if (i = U._first, (!i || i._paused) && O.autoSleep && !z._first && 1 === n._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || n.sleep()
                    }
                }
            }, n.addEventListener("tick", R._updateRoot);
            var Y = function(t, e, i) {
                    var s, r, n = t._gsTweenID;
                    if (F[n || (t._gsTweenID = n = "t" + N++)] || (F[n] = {
                            target: t,
                            tweens: []
                        }), e && (s = F[n].tweens, s[r = s.length] = e, i))
                        for (; --r > -1;) s[r] === e && s.splice(r, 1);
                    return F[n].tweens
                },
                j = function(t, e, i, s, r) {
                    var n, a, o, h;
                    if (1 === s || s >= 4) {
                        for (h = r.length, n = 0; h > n; n++)
                            if ((o = r[n]) !== e) o._gc || o._enabled(!1, !1) && (a = !0);
                            else if (5 === s) break;
                        return a
                    }
                    var _, u = e._startTime + l,
                        p = [],
                        f = 0,
                        c = 0 === e._duration;
                    for (n = r.length; --n > -1;)(o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (_ = _ || B(e, 0, c), 0 === B(o, _, c) && (p[f++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale + l > u && ((c || !o._initted) && 2e-10 >= u - o._startTime || (p[f++] = o)));
                    for (n = f; --n > -1;) o = p[n], 2 === s && o._kill(i, t) && (a = !0), (2 !== s || !o._firstPT && o._initted) && o._enabled(!1, !1) && (a = !0);
                    return a
                },
                B = function(t, e, i) {
                    for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline;) {
                        if (n += s._startTime, r *= s._timeScale, s._paused) return -100;
                        s = s._timeline
                    }
                    return n /= r, n > e ? n - e : i && n === e || !t._initted && 2 * l > n - e ? l : (n += t.totalDuration() / t._timeScale / r) > e + l ? 0 : n - e - l
                };
            r._init = function() {
                var t, e, i, s, r = this.vars,
                    n = this._overwrittenProps,
                    a = this._duration,
                    o = r.immediateRender,
                    h = r.ease;
                if (r.startAt) {
                    if (this._startAt && this._startAt.render(-1, !0), r.startAt.overwrite = 0, r.startAt.immediateRender = !0, this._startAt = O.to(this.target, 0, r.startAt), o)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== a) return
                } else if (r.runBackwards && 0 !== a)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt = null;
                    else {
                        i = {};
                        for (s in r) L[s] && "autoCSS" !== s || (i[s] = r[s]);
                        if (i.overwrite = 0, i.data = "isFromStart", this._startAt = O.to(this.target, 0, i), r.immediateRender) {
                            if (0 === this._time) return
                        } else this._startAt.render(-1, !0)
                    }
                if (this._ease = h ? h instanceof y ? r.easeParams instanceof Array ? h.config.apply(h, r.easeParams) : h : "function" == typeof h ? new y(h, r.easeParams) : T[h] || O.defaultEase : O.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], n ? n[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, n);
                if (e && O._onPluginEvent("_onInitAllProps", this), n && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = r.onUpdate, this._initted = !0
            }, r._initProps = function(e, i, s, r) {
                var n, a, o, h, l, _;
                if (null == e) return !1;
                this.vars.css || e.style && e !== t && e.nodeType && E.css && this.vars.autoCSS !== !1 && M(this.vars, e);
                for (n in this.vars) {
                    if (_ = this.vars[n], L[n]) _ && (_ instanceof Array || _.push && p(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this));
                    else if (E[n] && (h = new E[n])._onInitTween(e, this.vars[n], this)) {
                        for (this._firstPT = l = {
                                _next: this._firstPT,
                                t: h,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: n,
                                pg: !0,
                                pr: h._priority
                            }, a = h._overwriteProps.length; --a > -1;) i[h._overwriteProps[a]] = this._firstPT;
                        (h._priority || h._onInitAllProps) && (o = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = i[n] = l = {
                        _next: this._firstPT,
                        t: e,
                        p: n,
                        f: "function" == typeof e[n],
                        n: n,
                        pg: !1,
                        pr: 0
                    }, l.s = l.f ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]), l.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - l.s || 0;
                    l && l._next && (l._next._prev = l)
                }
                return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && j(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r)) : o
            }, r.render = function(t, e, i) {
                var s, r, n, a, o = this._time,
                    h = this._duration;
                if (t >= h) this._totalTime = this._time = h, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete"), 0 === h && (a = this._rawPrevTime, (0 === t || 0 > a || a === l) && a !== t && (i = !0, a > l && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t ? t : l);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === h && this._rawPrevTime > l) && (r = "onReverseComplete", s = this._reversed), 0 > t ? (this._active = !1, 0 === h && (this._rawPrevTime >= 0 && (i = !0), this._rawPrevTime = a = !e || t ? t : l)) : this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var _ = t / h,
                        u = this._easeType,
                        p = this._easePower;
                    (1 === u || 3 === u && _ >= .5) && (_ = 1 - _), 3 === u && (_ *= 2), 1 === p ? _ *= _ : 2 === p ? _ *= _ * _ : 3 === p ? _ *= _ * _ * _ : 4 === p && (_ *= _ * _ * _ * _), this.ratio = 1 === u ? 1 - _ : 2 === u ? _ : .5 > t / h ? _ / 2 : 1 - _ / 2
                } else this.ratio = this._ease.getRatio(t / h);
                if (this._time !== o || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / h) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === h) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || v))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || i && 0 === this._time && 0 === o || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || v)), r && (this._gc || (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || v), 0 === h && this._rawPrevTime === l && a !== l && (this._rawPrevTime = 0)))
                }
            }, r._kill = function(t, e) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : O.selector(e) || e;
                var i, s, r, n, a, o, h, l;
                if ((p(e) || D(e)) && "number" != typeof e[0])
                    for (i = e.length; --i > -1;) this._kill(t, e[i]) && (o = !0);
                else {
                    if (this._targets) {
                        for (i = this._targets.length; --i > -1;)
                            if (e === this._targets[i]) {
                                a = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        a = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        h = t || a, l = t !== s && "all" !== s && t !== a && ("object" != typeof t || !t._tempKill);
                        for (r in h)(n = a[r]) && (n.pg && n.t._kill(h) && (o = !0), n.pg && 0 !== n.t._overwriteProps.length || (n._prev ? n._prev._next = n._next : n === this._firstPT && (this._firstPT = n._next), n._next && (n._next._prev = n._prev), n._next = n._prev = null), delete a[r]), l && (s[r] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return o
            }, r.invalidate = function() {
                return this._notifyPluginsOfEnabled && O._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
            }, r._enabled = function(t, e) {
                if (a || n.wake(), t && this._gc) {
                    var i, s = this._targets;
                    if (s)
                        for (i = s.length; --i > -1;) this._siblings[i] = Y(s[i], this, !0);
                    else this._siblings = Y(this.target, this, !0)
                }
                return R.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? O._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
            }, O.to = function(t, e, i) {
                return new O(t, e, i)
            }, O.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new O(t, e, i)
            }, O.fromTo = function(t, e, i, s) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new O(t, e, s)
            }, O.delayedCall = function(t, e, i, s, r) {
                return new O(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    onCompleteScope: s,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    onReverseCompleteScope: s,
                    immediateRender: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, O.set = function(t, e) {
                return new O(t, 0, e)
            }, O.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : O.selector(t) || t;
                var i, s, r, n;
                if ((p(t) || D(t)) && "number" != typeof t[0]) {
                    for (i = t.length, s = []; --i > -1;) s = s.concat(O.getTweensOf(t[i], e));
                    for (i = s.length; --i > -1;)
                        for (n = s[i], r = i; --r > -1;) n === s[r] && s.splice(i, 1)
                } else
                    for (s = Y(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
                return s
            }, O.killTweensOf = O.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var s = O.getTweensOf(t, e), r = s.length; --r > -1;) s[r]._kill(i, t)
            };
            var q = d("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = q.prototype
            }, !0);
            if (r = q.prototype, q.version = "1.10.1", q.API = 2, r._firstPT = null, r._addTween = function(t, e, i, s, r, n) {
                    var a, o;
                    return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = {
                        _next: this._firstPT,
                        t: t,
                        p: e,
                        s: i,
                        c: a,
                        f: "function" == typeof t[e],
                        n: r || e,
                        r: n
                    }, o._next && (o._next._prev = o), o) : void 0
                }, r.setRatio = function(t) {
                    for (var e, i = this._firstPT, s = 1e-6; i;) e = i.c * t + i.s, i.r ? e = 0 | e + (e > 0 ? .5 : -.5) : s > e && e > -s && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
                }, r._kill = function(t) {
                    var e, i = this._overwriteProps,
                        s = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                    return !1
                }, r._roundProps = function(t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                }, O._onPluginEvent = function(t, e) {
                    var i, s, r, n, a, o = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; o;) {
                            for (a = o._next, s = r; s && s.pr > o.pr;) s = s._next;
                            (o._prev = s ? s._prev : n) ? o._prev._next = o: r = o, (o._next = s) ? s._prev = o : n = o, o = a
                        }
                        o = e._firstPT = r
                    }
                    for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                    return i
                }, q.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === q.API && (E[(new t[e])._propName] = t[e]);
                    return !0
                }, m.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        s = t.priority || 0,
                        r = t.overwriteProps,
                        n = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        a = d("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            q.call(this, i, s), this._overwriteProps = r || []
                        }, t.global === !0),
                        o = a.prototype = new q(i);
                    o.constructor = a, a.API = t.API;
                    for (e in n) "function" == typeof t[e] && (o[n[e]] = t[e]);
                    return a.version = t.version, q.activate([a]), a
                }, i = t._gsQueue) {
                for (s = 0; i.length > s; s++) i[s]();
                for (r in f) f[r].func || t.console.log("GSAP encountered missing dependency: com.greensock." + r)
            }
            a = !1
        }
    }(window), window.M5 = window.M5 || {}, M5.UtilClass = Class.extend({
        init: function() {},
        buildBox: function(id, $container, text, w, h, d, colors, alpha) {
            var c = colors || ["#eee", "#333", "#666", "#666", "#999", "#999"],
                a = alpha || 1,
                $box = $('<div id="' + id + '"></div>');
            return $container.append($box), $box.css({
                width: w + "px",
                height: h + "px",
                "-webkit-transform-style": "preserve-3d",
                "-moz-transform-style": "preserve-3d",
                "transform-style": "preserve-3d",
                margin: "0",
                padding: "0",
                position: "absolute"
            }), $box.append(this.buildFace("back", w, h, 0, 0, d / 2, 180, 0, c[1], a)), $box.append(this.buildFace("left", d, h, (w - d) / 2, 0, w / 2, 0, -90, c[2], a)), $box.append(this.buildFace("right", d, h, (w - d) / 2, 0, w / 2, 0, 90, c[3], a)), $box.append(this.buildFace("top", w, d, 0, (h - d) / 2, h / 2, 90, 0, c[4], a)), $box.append(this.buildFace("bottom", w, d, 0, (h - d) / 2, h / 2, -90, 0, c[5], a)), $box.append(this.buildFace("front", w, h, 0, 0, d / 2, 0, 0, c[0], a)), $box
        },
        buildFace: function(faceName, w, h, tx, ty, tz, rx, ry, color, a) {
            var $face = $("<div></div>");
            $face.data("face", faceName), $face.css({
                width: w + "px",
                height: h + "px",
                margin: "0",
                padding: "0",
                position: "absolute",
                opacity: a
            });
            var transform = "rotateX(" + rx + "deg) rotateY(" + ry + "deg) translateX(" + tx + "px) translateY(" + ty + "px) translateZ(" + tz + "px)";
            $face.css({
                "-webkit-transform": transform
            }), $face.css({
                "-moz-transform": transform
            }), $face.css({
                "-ms-transform": transform
            }), $face.css({
                transform: transform
            }), $face.addClass("face"), $face.addClass(faceName);
            var $faceInner = $('<div class="face-inner"></div>');
            return $faceInner.css({
                width: w + "px",
                height: h + "px",
                margin: "0",
                padding: "0",
                position: "absolute",
                "background-color": color
            }), $face.append($faceInner), $face
        },
        build3DTester: function($obj3D, pos) {
            function buildRangeInput($e, index, min, max) {
                var top = 30 * index,
                    val = position[index],
                    minimum = min || -180,
                    maximum = max || 180,
                    $i = $('<input type="range" min="' + minimum + '" max="' + maximum + '" value="' + val + '" step="1" style="position:absolute;top:' + top + 'px;" />'),
                    $o = $('<output style="color:#ffffff;position:absolute;top:' + top + 'px;left:150px;"></output>');
                $e.append($i), $e.append($o), $i.on("change", function() {
                    $o.html($(this).val()), update3DTester(index, $(this).val())
                })
            }

            function update3DTester(index, val) {
                position[index] = val, TweenMax.to($obj3D, .2, {
                    css: {
                        rotationX: position[0],
                        rotationZ: position[1],
                        rotationY: position[2],
                        left: position[3],
                        top: position[4],
                        z: position[5]
                    },
                    delay: 0,
                    ease: Cubic.easeOut
                })
            }
            var position = pos || [0, 0, 0, 0, 0, 0];
            try {
                $("#demo-controls").remove()
            } catch (e) {}
            var $controls = $('<div id="demo-controls"></div>');
            $("body").append($controls);
            for (var i = 0; i < pos.length; i++) i == pos.length - 1 ? buildRangeInput($controls, i, -1e3, 1e3) : buildRangeInput($controls, i);
            $controls.css({
                position: "absolute",
                "z-index": 1e4,
                bottom: "200px",
                right: "200px"
            })
        },
        buildInfoItem: function(_$info, _data, _class, _defaultLabel) {
            var label = _data.label || _defaultLabel;
            _$info.find("." + _class + "-label").html(label);
            var text = _data.url ? '<a href="' + _data.url + '" target="_blank">' + _data.text + "</a>" : _data.text;
            _$info.find("." + _class + "-text").html(text);
            var me = this,
                $videoLink = _$info.find("a.video");
            $videoLink.length > 0 && $videoLink.click(function() {
                me.scrollToVideo()
            })
        },
        buildMedia: function(_$media, _videoPlayers, data, mobile) {
            _$media.empty();
            for (var media = data.media, i = 0; i < media.length; i++) {
                var item = media[i];
                "video" == item.type ? this.buildVideo(_$media, item) : this.buildImage(_$media, item, mobile)
            }
        },
        buildImage: function(_$media, _item, mobile) {
            window.setTimeout(function() {
                var buildLink = _item.link ? !0 : !1;
                mobile && _item.noMobile && (buildLink = !1);
                var $row = "";
                buildLink && ($row += '<a href="' + _item.link + '" target="_blank">'), $row += '<div class="media-row media-image"><img src="' + _item.src + '"  /></div>', buildLink && ($row += "</a>"), _$media.append($row);
                var $image = _$media.find("img");
                $image.on("load", function() {
                    $(this).addClass("loaded")
                }), $image[0].complete && $image.load()
            }, 600)
        },
        buildVideo: function(_$media, _item) {
            this.stopAllVideos();
            $(".media-row.video-container").remove(), this.videoTimeoutID = window.setTimeout(function() {
                var id = "video-player",
                    $row = '<div class="media-row video-container"><div class="video"><div id="' + id + '"></div></div></div>';
                if (_$media.append($row), window.YT_API_READY) {
                    var player = new YT.Player(id, {
                        height: "auto",
                        width: "100%",
                        videoId: _item.src,
                        playerVars: {
                            autoplay: 0,
                            controls: 1,
                            modestbranding: 1,
                            showinfo: 0,
                            theme: "light",
                            rel: 0
                        },
                        events: {}
                    });
                    window.videoPlayer = player
                }
            }, 1e3)
        },
        stopAllVideos: function() {
            if (window.videoPlayer) try {
                window.videoPlayer.pauseVideo(), window.videoPlayer.destroy()
            } catch (e) {
                console.log(e)
            }
        },
        scrollToVideo: function() {
            var $video = $("#video-player"),
                _y = $video.offset().top;
            TweenMax.to(window, 1, {
                scrollTo: {
                    y: _y,
                    x: 0
                },
                ease: Cubic.easeInOut,
                onComplete: function() {
                    window.videoPlayer.playVideo()
                }
            })
        },
        slugify: function(text) {
            return text.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        },
        shareOnFacebook: function() {
            var url = document.URL,
                title = document.title;
            this.popUpWindow({
                url: "http://www.facebook.com/share.php?u=" + encodeURIComponent(url) + "&title=" + encodeURIComponent(title),
                width: 600,
                height: 430,
                scrollbars: !1
            })
        },
        shareOnTwitter: function() {
            var url = document.URL,
                title = document.title;
            this.popUpWindow({
                url: "http://twitter.com/share?text=" + encodeURIComponent(title) + "&url=" + encodeURIComponent(url),
                width: 600,
                height: 430,
                scrollbars: !1
            })
        },
        shareOnEmail: function() {
            var title = document.title,
                url = document.URL;
            window.open("mailto:?subject=" + title + "&body=" + encodeURIComponent(url), "emailWindow")
        },
        popUpWindow: function(config) {
            var width = config.width,
                height = config.height,
                left = (screen.width - width) / 2,
                top = (screen.height - height) / 2,
                params = "width=" + width + ", height=" + height;
            return params += ", top=" + top + ", left=" + left, params += ", directories=no", params += ", location=no", params += ", menubar=no", params += ", resizable=no", params += ", scrollbars=" + (config.scrollbars ? "yes" : "no"), params += ", status=no", params += ", toolbar=no", this.openWindow(config.url, params), !1
        },
        openWindow: function($url, $params) {
            var newwin;
            newwin = $params ? window.open($url, "shareWindow", $params) : window.open($url), window.focus && newwin.focus()
        },
        domainOK: function(whitelist) {
            for (var host = location.host, i = 0; i < whitelist.length; i++) {
                var h = whitelist[i];
                if (host.indexOf(h) > -1) return !0
            }
            return !1
        },
        trackPage: function() {
            var page = window.location.pathname;
            ga("send", "pageview", page), ga("set", "page", page)
        }
    }), M5.Util = new M5.UtilClass, window.M5 = window.M5 || {}, M5.View = Class.extend({
        init: function() {},
        update: function() {}
    }), window.M5 = window.M5 || {}, M5.Events = {
        UPDATE_SECTION: "updateSection"
    }, window.M5 = window.M5 || {}, M5.Transitions = [{
        name: "home",
        camera: [{
            t: 2,
            top: 220,
            d: 0
        }],
        navBox: [{
            t: 1,
            x: 0,
            y: 0,
            z: 0,
            rX: 210,
            rY: -20,
            rZ: 10,
            d: .5,
            aA: 1
        }],
        front: [{
            t: 1,
            aA: .7,
            x: 0,
            y: 0,
            z: 0,
            rX: 0,
            rY: 0,
            rZ: 0
        }],
        back: [{
            t: 1,
            aA: .7,
            x: 0,
            y: 0,
            z: 0,
            rX: 0,
            rY: 0,
            rZ: 0
        }],
        left: [{
            t: 1,
            aA: .7,
            x: 0,
            y: 0,
            z: 0,
            rX: 0,
            rY: 0,
            rZ: 0,
            d: 0
        }],
        right: [{
            t: 1,
            aA: .7,
            x: 0,
            y: 0,
            z: 0,
            rX: 0,
            rY: 0,
            rZ: 0,
            d: 0
        }],
        top: [{
            t: 1,
            aA: .7,
            x: 0,
            y: 0,
            z: 0,
            rX: 0,
            rY: 0,
            rZ: 0,
            d: 0
        }],
        bottom: [{
            t: 1,
            aA: .7,
            x: 0,
            y: 0,
            z: 0,
            rX: 0,
            rY: 0,
            rZ: 0,
            d: 0
        }]
    }, {
        name: "about",
        camera: [{
            t: 2,
            top: 200,
            d: 0
        }],
        navBox: [{
            t: 1,
            x: 0,
            y: 10,
            z: 400,
            rX: 0,
            rY: 220,
            rZ: 15,
            d: 0,
            aA: 1,
            ease: Cubic.easeIn
        }, {
            t: 1,
            x: 0,
            y: 20,
            z: 800,
            rX: 0,
            rY: 360,
            rZ: 30,
            d: 0,
            aA: 1,
            ease: Cubic.easeOut
        }],
        front: [{
            t: .5,
            aA: .7,
            x: 0,
            y: 0,
            z: 0,
            rX: 10,
            rY: 0,
            rZ: 0
        }],
        back: [{
            t: .5,
            aA: .7,
            x: 0,
            y: 0,
            z: 0,
            rX: -5,
            rY: 0,
            rZ: 0
        }],
        left: [{
            t: .5,
            aA: 0,
            x: 0,
            y: 0,
            z: 0,
            rX: 0,
            rY: 90,
            rZ: 0,
            tO: "right top"
        }],
        right: [{
            t: .5,
            aA: 0,
            x: 0,
            y: 0,
            z: 0,
            rX: 0,
            rY: -90,
            rZ: 0,
            tO: "left top"
        }],
        top: [{
            t: .5,
            aA: 0,
            x: 0,
            y: 0,
            z: 0,
            rX: -90,
            rY: 0,
            rZ: 0,
            tO: "left bottom"
        }],
        bottom: [{
            t: 1,
            aA: .7,
            x: 0,
            y: 150,
            z: 0,
            rX: -90,
            rY: 0,
            rZ: 0,
            tO: "left top"
        }]
    }, {
        name: "work",
        camera: [{
            t: 2,
            top: 400,
            d: 0
        }],
        navBox: [{
            t: .1
        }, {
            t: 1,
            x: 0,
            y: 0,
            z: 0,
            rX: 45,
            rY: 45,
            rZ: 0,
            d: 0,
            aA: 1
        }],
        front: [{
            t: 2,
            aA: .7,
            x: 0,
            y: 0,
            z: 500,
            rX: 0,
            rY: 0,
            rZ: 0
        }],
        back: [{
            t: 2,
            aA: .4,
            x: 0,
            y: 0,
            z: 500,
            rX: 0,
            rY: 0,
            rZ: 0
        }],
        left: [{
            t: 2,
            aA: .7,
            x: 500,
            y: 0,
            z: 0,
            rX: 0,
            rY: 0,
            rZ: 0
        }],
        right: [{
            t: 2,
            aA: .7,
            x: -500,
            y: 0,
            z: 0,
            rX: 0,
            rY: 0,
            rZ: 0
        }],
        top: [{
            t: 2,
            aA: .3,
            x: 0,
            y: -500,
            z: 0,
            rX: 0,
            rY: 0,
            rZ: 0
        }],
        bottom: [{
            t: 2,
            aA: .3,
            x: 0,
            y: 500,
            z: 0,
            rX: 0,
            rY: 0,
            rZ: 0
        }]
    }, {
        name: "capabilities",
        camera: [{
            t: 2,
            top: 400,
            d: 0
        }],
        navBox: [{
            t: 1.5,
            x: 0,
            y: 0,
            z: 0,
            rX: 10,
            rY: 20,
            rZ: 0,
            d: 0,
            aA: 1
        }],
        front: [{
            t: 1,
            aA: .7,
            x: 0,
            y: 0,
            z: 200,
            rX: 0,
            rY: 0,
            rZ: 0,
            d: 0
        }, {
            t: .5,
            z: 1e3,
            aA: 0,
            ease: Cubic.easeIn
        }],
        back: [{
            t: 1,
            aA: .7,
            x: 0,
            y: 0,
            z: 200,
            rX: 0,
            rY: 0,
            rZ: 0,
            d: 0
        }, {
            t: .5,
            z: 1e3,
            aA: 0,
            ease: Cubic.easeIn
        }],
        left: [{
            t: 1,
            aA: .5,
            x: 0,
            y: 0,
            z: 100,
            rX: 0,
            rY: 0,
            rZ: 0,
            d: 0
        }, {
            t: .5,
            z: 1e3,
            aA: 0,
            ease: Cubic.easeIn
        }],
        right: [{
            t: 1,
            aA: .7,
            x: 0,
            y: 0,
            z: 100,
            rX: 0,
            rY: 0,
            rZ: 0,
            d: 0
        }, {
            t: .5,
            z: 1e3,
            aA: 0,
            ease: Cubic.easeIn
        }],
        top: [{
            t: 1,
            aA: .7,
            x: 0,
            y: 0,
            z: 100,
            rX: 0,
            rY: 0,
            rZ: 0,
            d: 0
        }, {
            t: .5,
            z: 1e3,
            aA: 0,
            ease: Cubic.easeIn
        }],
        bottom: [{
            t: 1,
            aA: .7,
            x: 0,
            y: 0,
            z: 100,
            rX: 0,
            rY: 0,
            rZ: 0,
            d: 0
        }, {
            t: .5,
            z: 1e3,
            aA: 0,
            ease: Cubic.easeIn
        }]
    }, {
        name: "contact",
        camera: [{
            t: 2,
            top: 220,
            d: 0
        }],
        navBox: [{
            t: 1,
            x: 0,
            y: 0,
            z: 1040,
            rX: 390,
            rY: 30,
            rZ: 0,
            d: .5,
            aA: 1
        }],
        front: [{
            t: 1,
            aA: .2,
            x: 0,
            y: 0,
            z: 0,
            rX: 0,
            rY: 0,
            rZ: 0
        }],
        back: [{
            t: 1,
            aA: 0,
            x: 0,
            y: 0,
            z: 0,
            rX: 0,
            rY: 0,
            rZ: 0
        }],
        left: [{
            t: 1,
            aA: .5,
            x: 0,
            y: 0,
            z: 0,
            rX: 0,
            rY: 0,
            rZ: 0,
            d: 0
        }],
        right: [{
            t: 1,
            aA: .7,
            x: 0,
            y: 0,
            z: 0,
            rX: 0,
            rY: 0,
            rZ: 0,
            d: 0
        }],
        top: [{
            t: 1,
            aA: .3,
            x: 0,
            y: 0,
            z: 0,
            rX: 0,
            rY: 0,
            rZ: 0,
            d: 0
        }],
        bottom: [{
            t: 1,
            aA: .2,
            x: 0,
            y: 0,
            z: 0,
            rX: 0,
            rY: 0,
            rZ: 0,
            d: 0
        }]
    }, {
        name: "share",
        camera: [{
            t: 1.5,
            top: 0,
            d: 0
        }],
        navBox: [{
            t: 1.5,
            x: 0,
            y: -100,
            z: 570,
            rX: -55,
            rY: 0,
            rZ: -2,
            d: 0,
            aA: 1
        }],
        front: [{
            t: 1.4,
            aA: .1,
            x: 0,
            y: -10,
            z: 0,
            rX: 90,
            rY: 0,
            rZ: 0
        }],
        back: [{
            t: 1.6,
            aA: .1,
            x: 0,
            y: 40,
            z: -300,
            rX: -90,
            rY: 0,
            rZ: 0
        }],
        left: [{
            t: 1.2,
            aA: .1,
            x: 150,
            y: 72,
            z: -300,
            rX: 90,
            rY: 0,
            rZ: 0,
            tO: "right top"
        }],
        right: [{
            t: 1.8,
            aA: .1,
            x: -150,
            y: 160,
            z: 0,
            rX: -90,
            rY: 0,
            rZ: 0,
            tO: "left top"
        }],
        top: [{
            t: 1,
            aA: .1,
            x: 0,
            y: 150,
            z: -20,
            rX: 0,
            rY: 0,
            rZ: 0,
            tO: "left bottom"
        }],
        bottom: [{
            t: 2,
            aA: .1,
            x: 0,
            y: -150,
            z: -130,
            rX: 0,
            rY: 0,
            rZ: 0,
            tO: "left top"
        }]
    }], window.M5 = window.M5 || {}, M5.ClientsModel = [{
        title: "Gramercy Square",
        client: {
            text: "Pentagram",
            url: "http://www.pentagram.com"
        },
        technology: {
            text: "HTML5/Javascript/PHP"
        },
        description: {
            text: 'Working with Luke Hayman\'s team at Pentagram, I developed a responsive site for these new residential buildings in NYC\'s Gramercy Park neighborhood. The site allows users to get a feel for the condominiums as well as the neighborhood with slideshows and maps. Using a CMS, the realtor can update availability, pricing, floor plans, etc. <a href="http://gs.mstudio.com/" target="_blank">View the site.</a> (Full site launching soon).'
        },
        media: [{
            type: "image",
            src: "/img/clients/gs-01.png",
            link: "http://gs.mstudio.com/"
        }]
    }, {
        title: "Lancome USA",
        client: {
            text: "Lancome USA",
            url: "http://www.lancome-usa.com"
        },
        technology: {
            text: "Grunt/HTML5/Javascript"
        },
        description: {
            text: 'A series of microsites were developed for Lancome USA products. The microsites were built to be easily incorporated within the Lancome USA framework which runs on the Demandware platform. <a href="http://www.mstudio.com/archive/lancome/ae/" target="_blank" class="no-mobile">View the site.</a>'
        },
        media: [{
            type: "image",
            src: "/img/clients/lancome-01.png",
            link: "http://www.mstudio.com/archive/lancome/ae/"
        }, {
            type: "image",
            src: "/img/clients/lancome-02.png",
            link: "http://www.mstudio.com/archive/lancome/ae/"
        }]
    }, {
        title: "500 W21",
        client: {
            text: "Pentagram",
            url: "http://www.pentagram.com/"
        },
        technology: {
            text: "HTML5/Javascript"
        },
        description: {
            text: "Working with Luke Hayman's team at Pentagram, I helped to create a responsive site for a new luxury condominium adjacent to New York's High Line. A CMS allows content-managers to update the property's availability, prices and floor plans."
        },
        media: [{
            type: "image",
            src: "/img/clients/500w21-01.png"
        }]
    }, {
        title: "NYC Fund for Public Schools",
        client: {
            text: "Pentagram",
            url: "http://www.pentagram.com"
        },
        technology: {
            text: "HTML5/Javascript"
        },
        description: {
            text: 'Working with Luke Hayman\'s team at Pentagram, I developed an online Annual Report for New York City\'s Fund for Public Schools. The site uses infographics, maps and animation to explain the importance of the Fund and outline its financial performance for the year. <a href="http://www.mstudio.com/archive/ffps/main.html" target="_blank" class="no-mobile">View the site.</a>'
        },
        media: [{
            type: "image",
            src: "/img/clients/ffps-01.png",
            link: "http://www.mstudio.com/archive/ffps/main.html",
            link: "http://www.mstudio.com/archive/ffps/main.html",
            noMobile: !0
        }]
    }, {
        title: "Giorgio Armani",
        client: {
            text: "Lancome USA",
            url: "http://www.lancome-usa.com"
        },
        technology: {
            text: "HTML5/Javascript"
        },
        description: {
            text: 'A series of microsites were developed for Giorgio Armani products. The microsites were built to be easily incorporated within the Giorgio Armani framework which runs on the Demandware platform. <a href="http://www.mstudio.com/archive/armani/prive/" target="_blank" class="no-mobile">View the Armani/Prive site.</a>'
        },
        media: [{
            type: "image",
            src: "/img/clients/armani-01.png",
            link: "http://www.mstudio.com/archive/armani/prive/",
            noMobile: !0
        }, {
            type: "image",
            src: "/img/clients/armani-02.png",
            link: "http://www.mstudio.com/archive/armani/prive/",
            noMobile: !0
        }]
    }, {
        title: "Paramount Pictures",
        client: {
            text: "Sisu",
            url: "http://www.sisumedia.com"
        },
        technology: {
            text: "AS3"
        },
        description: {
            text: "Lorem Ipsum"
        }
    }, {
        title: "Spero Health",
        client: {
            text: "Rita Myers",
            url: "http://www.ritamyers.com"
        },
        technology: {
            text: "HTML5/Javascript/PHP"
        },
        description: {
            text: 'This site showcases Spero Health\'s unique healthcare model and technology platform which increases positive health outcomes, improves patient care and lowers costs for vulnerable populations. The site includes a CMS which allows the client to modify all text and images. <a href="http://www.sperohealth.org/" target="_blank" class="no-mobile">View the site.</a>'
        },
        media: [{
            type: "image",
            src: "/img/clients/spero-01.png",
            link: "http://www.sperohealth.org/",
            noMobile: !0
        }, {
            type: "image",
            src: "/img/clients/spero-02.png",
            link: "http://www.sperohealth.org/",
            noMobile: !0
        }]
    }, {
        title: "Luana Design",
        client: {
            text: "Alex Motzenbecker",
            url: ""
        },
        technology: {
            text: "AS3/PHP"
        },
        description: {
            text: 'For Winsor Loudon, a high-end NYC kitchen designer, I designed and developed a site used to showcase his company\'s portfolio of work and product line. The design is very minimal, allowing the photographs to highlight the designer\'s unique work. <a href="http://www.mstudio.com/archive/luana/" target="_blank" no-mobile="true">View the site. (flash)</a> <a href="#" class="video no-mobile">or watch the video.</a>'
        },
        media: [{
            type: "image",
            src: "/img/clients/luana-01.png",
            link: "http://www.mstudio.com/archive/luana/",
            noMobile: !0
        }, {
            type: "image",
            src: "/img/clients/luana-02.png",
            link: "http://www.mstudio.com/archive/luana/",
            noMobile: !0
        }, {
            type: "video",
            src: "h03GCdSV-wA"
        }]
    }, {
        title: "Sony",
        client: {
            text: "Sisu",
            url: "http://www.sisumedia.com/"
        },
        technology: {
            text: "AS3/PHP"
        },
        description: {
            text: "Lorem Ipsum"
        }
    }, {
        title: "Western Union",
        client: {
            text: "Sisu",
            url: "http://www.sisumedia.com/"
        },
        technology: {
            text: "HTML5/Javascript/PHP using AWS EC2 and RDS"
        },
        description: {
            text: 'We developed quite a few web applications for Western Union on both the front and back end. The Fraud Quiz is an interactive, animated game where users test their knowledge of online scams. <a href="https://www.westernunion.com/us/en/fraudawareness/fraud-quiz.html" target="_blank" class="no-mobile">View the Fraud Quiz.</a> <br /><br />My WU is a loyalty card program active in over a dozen countries around the world. Users can sign up for a loyalty card, redeem points and enter sweepstakes through the site. <a href="https://www.mywu.com/" target="_blank">View MyWU.com.</a>'
        },
        media: [{
            type: "image",
            src: "/img/clients/wu-01.png",
            link: "https://www.westernunion.com/us/en/fraudawareness/fraud-quiz.html",
            noMobile: !0
        }, {
            type: "image",
            src: "/img/clients/wu-02.png",
            link: "https://www.mywu.com/"
        }]
    }, {
        title: "Vigo USA",
        client: {
            text: "Sisu",
            url: "http://www.sisumedia.com/"
        },
        technology: {
            text: "HTML5/Javascript"
        },
        description: {
            text: 'Working with Sisu, I developed a responsive site for Vigo, a money transfer service. In addition to the site, we created a currency calculator which allows users to find the least expensive transfer service. One interesting challenge was adding the ability to embed the calculator in any Vigo website with a single line of Javascript. <a href="http://www.vigousa.com/index.en.html" target="_blank">View the site.</a>'
        },
        media: [{
            type: "image",
            src: "/img/clients/vigo-01.png",
            link: "http://www.vigousa.com/index.en.html"
        }, {
            type: "image",
            src: "/img/clients/vigo-02.png",
            link: "http://www.vigousa.com/index.en.html"
        }]
    }, {
        title: "Athlete Health Organization",
        client: {
            text: "Rita Myers ",
            url: "http://www.ritamyers.com/"
        },
        technology: {
            text: "HTML5/Javascript/PHP"
        },
        description: {
            text: 'The Athlete Health Organization is a volunteer-based group providing free health screenings for student athletes in underserved areas. In addition to providing the students with information about healthy living, AHO has identified life threatening diagnoses for several student athletes. The WordPress-driven website is used to recruit volunteers and alert schools about the annual event in Philadelphia.  <a href="http://athletehealth.org/" target="_blank" no-mobile="true">View the site.</a>'
        },
        media: [{
            type: "image",
            src: "/img/clients/aho-01.png",
            link: "http://athletehealth.org/",
            noMobile: !0
        }]
    }, {
        title: "Cobalt Data Centers",
        client: {
            text: "Pentagram",
            url: "http://www.pentagram.com/"
        },
        technology: {
            text: "HTML5/Javascript/PHP"
        },
        description: {
            text: 'Working with Luke Hayman\'s team at Pentagram, I developed a responsive site for Cobalt Data Centers. The site is driven by a WordPress CMS. <a href="http://cobalt.mstudio.com/" target="_blank">View the site.</a>'
        },
        media: [{
            type: "image",
            src: "/img/clients/cobalt-01.png",
            link: "http://cobalt.mstudio.com/"
        }]
    }, {
        title: "Sundance Preserve"
    }, {
        title: "McGraw-Hill",
        client: {
            text: "Alexander Design Associates",
            url: "http://www.alexanderdesign.com/"
        },
        technology: {
            text: "AS3"
        },
        description: {
            text: 'I developed an immersive 3D experience for McGraw-Hill\'s educational products. Users can navigate the catalog by zooming/scrolling and can filter products by category such as phonics or vocabulary. <a href="http://www.mstudio.com/archive/mmh/" target="_blank" class="no-mobile">View the site (flash)</a>  <a href="#" class="video no-mobile">or watch the video.</a>'
        },
        media: [{
            type: "image",
            src: "/img/clients/mmh-01.png",
            link: "http://www.mstudio.com/archive/mmh/",
            noMobile: !0
        }, {
            type: "video",
            src: "WheEcyWvvQY"
        }]
    }, {
        title: "Softcard",
        client: {
            text: "Softcard"
        },
        technology: {
            text: "Android/NFC"
        },
        description: {
            text: "For Softcard, I created a prototype app for Android phones. The app allows users to purchase items with credit/loyalty cards using NFC (Near Field Communication). A user can tap his/her phone on a register or coupon and make the transaction. Credit/loyalty cards and offers are all stored on the device with their respective balances."
        },
        media: [{
            type: "image",
            src: "/img/clients/softcard-01.png"
        }]
    }, {
        title: "Hearst"
    }, {
        title: "Rodale"
    }, {
        title: "Airbus Group",
        client: {
            text: "Imperial Trading Co.",
            url: "http://imperialtradingco.com/"
        },
        technology: {
            text: "AS3/HTML5"
        },
        description: {
            text: 'This standalone presentation was developed for EADS (now Airbus Group) as a multimedia display at the Paris Airshow. The piece highlights the group\'s latest automotive advancements with text, images and video. One of the interesting technical challenges on this piece was simulating a scaling "viewport," allowing the entire presentation (images, video, text) to scale up/down depending on the size of the display.'
        },
        media: [{
            type: "image",
            src: "/img/clients/airbus-01.png"
        }, {
            type: "image",
            src: "/img/clients/airbus-02.png"
        }]
    }, {
        title: "Nonesuch Records"
    }, {
        title: "Sparkplug Learning",
        client: {
            text: "Sparkplug Learning",
            url: "http://www.sparkpluglearning.com"
        },
        technology: {
            text: "HTML5/Canvas"
        },
        description: {
            text: 'For Sparkplug Learning, we developed an online science lesson using Canvas and the EaselJS library. First grade students learn about the parts of a plant using videos and interactive modules. Students can use a magnifying glass, play a matching game and draw a picture, all prompted by a narrator. The lesson was designed for use on desktop and iPad. <a href="http://www.mstudio.com/archive/mgh/" target="_blank" no-mobile="true">View the site.</a>'
        },
        media: [{
            type: "image",
            src: "/img/clients/sparkplug-01.png",
            link: "http://www.mstudio.com/archive/mgh/",
            noMobile: !0
        }, {
            type: "image",
            src: "/img/clients/sparkplug-02.png",
            link: "http://www.mstudio.com/client/mgh/",
            noMobile: !0
        }]
    }, {
        title: "Rita Myers",
        client: {
            text: "Rita Myers",
            url: "http://www.ritamyers.com"
        },
        technology: {
            text: "HTML5/Javascript/PHP/Gulp"
        },
        description: {
            text: 'For Rita Myers, I developed a single page application which gracefully transitions from section to section, allowing the user to easily navigate through the designer\'s work without page reloads. The back-end uses WordPress where the client can upload new work and edit content. <a href="http://www.ritamyers.com/" target="_blank" no-mobile="true">View the site.</a>'
        },
        media: [{
            type: "image",
            src: "/img/clients/rita-myers-01.png",
            link: "http://www.ritamyers.com"
        }]
    }], window.M5 = window.M5 || {}, M5.WorkModel = [{
        title: "Facebook @Scale",
        client: {
            text: "Sisu",
            url: "http://www.sisumedia.com"
        },
        technology: {
            text: "HTML5/Javascript/Node/PHP"
        },
        description: {
            text: 'This site was developed for Facebook\'s year-round @Scale conferences, which focus on software engineering that scales to millions or even billions of people. The front-end Javascript was written in ES6 and the back-end is a custom theme integrated with WordPress VIP. <a href="http://www.atscaleconference.com/" target="_blank">View the site.</a> '
        },
        media: [{
            type: "image",
            src: "/img/clients/atscale.png",
            link: "http://www.atscaleconference.com"
        }]
    }, {
        title: "Everspan",
        client: {
            label: "Designer",
            text: "Sisu ",
            url: "http://www.sisumedia.com"
        },
        technology: {
            text: "HTML5/Javascript/Node/PHP"
        },
        description: {
            text: 'This project is a single page application for Sony\'s new optical disk archival system, Everspan. Animation was used to illustrate product\'s attributes and enhance the usability of the site. The Javascript for this responsive site was written entirely in ES6, using Babel for transpilation. <a href="http://www.everspan.com/" target="_blank">View the site.</a> Additional development by <a href="http://jarretgabel.com" target="_blank">Jarret Gabel</a>.'
        },
        media: [{
            type: "image",
            src: "/img/clients/everspan.png",
            link: "http://www.everspan.com"
        }]
    }, {
        title: "Processing",
        client: {
            label: "Client",
            text: "Ogilvy & Mather ",
            url: "http://www.ogilvy.com"
        },
        technology: {
            text: "Processing/Xbox Kinect Camera"
        },
        description: {
            text: 'I created an interactive lobby installation using an XBox Kinect camera, Processing and the SimpleOpenNI Library. The screen displays a 3D visualization based on where the user is standing in the space. The installation uses depth map information from the infrared projector/sensor to figure out where the user is standing within the space. One of the more interesting technical challenges with this project was maximizing frame rate using threads. <a href="#" class="video no-mobile">Watch the video.</a>'
        },
        media: [{
            type: "image",
            src: "/img/clients/installation.png"
        }, {
            type: "video",
            src: "MbIDUtBqCpg"
        }]
    }], window.M5 = window.M5 || {}, M5.ModelClass = Class.extend({
        init: function() {
            this.boxColors = ["#f6c435", "#d11d29", "#000", "#53777a", "#542437", "#e16622"], this.cs = 0, this.ps = 0, window.YT_API_READY, this.sections = [], this.views = [], this.MAX_WIDTH = 1600, this.initSections(), this.initHistoryListener(), this.initVideoAPI(), this.pageTitle = document.getElementsByTagName("title")[0].innerHTML
        },
        initHistoryListener: function() {
            var me = this;
            History.Adapter.bind(window, "statechange", function() {
                var section = window.location.pathname.split("/")[1];
                M5.Util.trackPage(), M5.Util.stopAllVideos(), me.ps = me.cs, me.cs = me.getSectionNumByName(section), me.cs != me.ps && me.updateViews(M5.Events.UPDATE_SECTION)
            })
        },
        updateViews: function(event) {
            for (var i = 0; i < this.views.length; i++) this.views[i].update(event)
        },
        initSections: function() {
            var me = this;
            $("#left-nav a").each(function() {
                me.sections.push($(this).attr("href").split("/")[1])
            })
        },
        appendViews: function(view) {
            this.views.push(view)
        },
        getSectionNumByName: function(section) {
            for (var s = 0, i = 0; i < this.sections.length; i++) this.sections[i] == section && (s = i);
            return s
        },
        initVideoAPI: function() {
            var tag = document.createElement("script");
            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName("script")[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
        },
        onYouTubeIframeAPIReady: function() {
            window.YT_API_READY = !0
        }
    }), M5.Model = new M5.ModelClass, window.M5 = window.M5 || {}, M5.Nav = M5.View.extend({
        init: function() {
            this.boxSize = 300, this.cameraTopPosition = 180, this.mouseSpin = !0, this.transition_tl, this.boxColors = M5.Model.boxColors, this.sides = ["front", "back", "left", "right", "top", "bottom"], this.links = ["about", "clients", "", "share", "contact", "work"], this.sectionColors = [this.boxColors[2], this.boxColors[0], this.boxColors[5], this.boxColors[1], this.boxColors[4], this.boxColors[3]], this.transitionElements = [], this.vX = 0, this.vY = 0, this.rXi = 210, this.rYi = -20, this.rZi = 10, this.rX = this.rXi, this.rY = this.rYi, this.initDOMVars(), this.initResponder(), this.buildNavBox(), this.initNav(), this.initMouseMove(), this.introLeftNav(), this.introRotate(), this.initClickHandlers()
        },
        update: function(event) {
            switch (event) {
                case M5.Events.UPDATE_SECTION:
                    this.updateSection()
            }
        },
        initDOMVars: function() {
            this.$body = $("body"), this.$container = $("#threed-container"), this.$navBoxMask = $("#nav-box-mask"), this.$camera = $("#threed-section-0 .camera"), this.$navBox = $("#nav-box"), this.$leftNavContainer = $("#left-nav-container"), this.$nav = $("#left-nav"), this.$navHeaderBlock = this.$nav.find("li.header"), this.$navStandardBlocks = this.$nav.find("li.standard"), this.transitionElements.camera = this.$camera, this.$maskLeft = $("#mask-left"), this.$maskRight = $("#mask-right"), this.$content = $(".content")
        },
        initClickHandlers: function() {
            var me = this;
            this.$navBox.find(".face").click(function(e) {
                if (0 == M5.Model.cs) {
                    var face = $(this).data("face"),
                        i = me.sides.indexOf(face),
                        link = me.links[i],
                        url = "/" + link;
                    History.pushState({
                        state: url
                    }, "", url), e.preventDefault()
                }
            })
        },
        initResponder: function() {
            var me = this;
            $(window).resize(function() {
                me.updateResponder()
            }), this.updateResponder()
        },
        updateResponder: function() {
            if (this.updateSiteLayout(), this.mobileCheck(), this.mouseSpin) {
                var cw = this.$container.width(),
                    offset = Math.round(.05 * cw) + 250,
                    w = cw - offset,
                    cameraLeft = Math.round(w / 2 - this.boxSize / 2 + offset);
                this.$camera.css({
                    top: this.cameraTopPosition + "px",
                    left: cameraLeft + "px"
                })
            }
        },
        mobileCheck: function() {
            $(window).width() < 800 && (window.location = "/m/")
        },
        updateSiteLayout: function() {
            var pad = 40,
                ww = $(window).width(),
                navLeft = this.getSiteMargin(pad);
            this.$leftNavContainer.css({
                left: navLeft + "px"
            });
            var contentWidth = ww <= M5.Model.MAX_WIDTH ? ww - pad : M5.Model.MAX_WIDTH - 2 * pad;
            this.$content.css({
                left: navLeft + "px",
                width: contentWidth + "px"
            }), this.$maskLeft.css("width", navLeft + "px");
            var maskRight = ww <= M5.Model.MAX_WIDTH ? 0 : navLeft;
            this.$maskRight.css("width", maskRight + "px")
        },
        getSiteMargin: function(pad) {
            var ww = $(window).width();
            return ww <= M5.Model.MAX_WIDTH ? pad : Math.round((ww - M5.Model.MAX_WIDTH) / 2 + pad)
        },
        buildNavBox: function() {
            this.$navBox = $("#nav-box"), this.transitionElements.navBox = this.$navBox, M5.Util.buildBox("nav-box-inner", this.$navBox, "", this.boxSize, this.boxSize, this.boxSize, this.boxColors), this.transitionElements.front = this.$navBox.find(".front .face-inner"), this.transitionElements.back = this.$navBox.find(".back .face-inner"), this.transitionElements.left = this.$navBox.find(".left .face-inner"), this.transitionElements.right = this.$navBox.find(".right .face-inner"), this.transitionElements.top = this.$navBox.find(".top .face-inner"), this.transitionElements.bottom = this.$navBox.find(".bottom .face-inner")
        },
        initMouseMove: function() {
            var me = this;
            $(document).mousemove(function(e) {
                var xa = e.pageX,
                    offset = (e.pageY, me.$camera.offset()),
                    x = -(xa - parseInt(offset.left) - parseInt(me.$camera.css("width")) / 2),
                    y = me.rYi;
                me.updateVector(x, y)
            })
        },
        initNav: function() {
            this.$nav.find("a").click(function(e) {
                var url = $(this).attr("href");
                History.pushState({
                    state: url
                }, M5.Model.pageTitle, url), e.preventDefault()
            })
        },
        updateNav: function() {
            this.$navStandardBlocks.each(function(i) {
                var s = i + 1;
                s == M5.Model.cs ? $(this).addClass("active") : $(this).removeClass("active")
            })
        },
        setNavBoxPosition: function() {
            this.$navBox.css("top", "80px")
        },
        updateSection: function() {
            this.setNavBoxPosition(), this.updateBodySection(), this.mouseSpin = !1, $(".face").addClass("moz-preserve-3d"), TweenMax.killTweensOf(this.$navBox), this.$camera.show(), this.updateNav();
            var section_vo = M5.Transitions[M5.Model.cs];
            0 == M5.Model.cs ? (this.rX = section_vo.navBox[0].rX, this.rY = section_vo.navBox[0].rY, this.$navBox.find(".face").removeClass("inactive")) : this.$navBox.find(".face").addClass("inactive"), this.clearTimeline(this.transition_tl), this.transition_tl = new TimelineMax({
                onComplete: this.initView,
                onCompleteScope: this
            });
            for (var $e in this.transitionElements)
                if (this.transitionElements.hasOwnProperty($e)) {
                    var transitions_arr = section_vo[$e];
                    if (transitions_arr) {
                        var timeline = new TimelineMax;
                        timeline.add(TweenMax.to(this.transitionElements[$e], .1, {}));
                        for (var i = 0; i < transitions_arr.length; i++) {
                            var vo = transitions_arr[i],
                                color = this.transitionElements[$e].hasClass("face-inner") ? this.getBoxColor($e) : "auto",
                                tween = TweenMax.to(this.transitionElements[$e], vo.t, {
                                    css: {
                                        x: vo.x,
                                        y: vo.y,
                                        z: vo.z,
                                        rotationX: vo.rX,
                                        rotationZ: vo.rZ,
                                        rotationY: vo.rY,
                                        autoAlpha: vo.aA,
                                        backgroundColor: color,
                                        transformOrigin: vo.tO
                                    },
                                    ease: vo.ease || Cubic.easeInOut,
                                    delay: vo.d
                                });
                            timeline.add(tween)
                        }
                        this.transition_tl.add(timeline, 0)
                    }
                }
        },
        updateBodySection: function() {
            for (var i = 0; i <= M5.Model.sections.length; i++) {
                var s = "section-" + i;
                i == M5.Model.cs ? this.$body.addClass(s) : this.$body.removeClass(s)
            }
        },
        initUI: function() {
            this.mouseSpin = !0, this.hideNavBoxMask(), requestAnimFrame($.proxy(function() {
                this.updateNavBox()
            }, this))
        },
        hideNavBoxMask: function() {
            this.$navBoxMask.hide()
        },
        updateVector: function(x, y) {
            var dampen = .02,
                max = 1;
            this.vX = x * dampen, this.vY = y * dampen, this.vX > max && (this.vX = max), this.vX < -max && (this.vX = -max), this.vY > max && (this.vY = max), this.vY < -max && (this.vY = -max)
        },
        updateNavBox: function() {
            this.rY += this.vX, this.rX += this.vY, this.rY = this.setAngle(this.rY), this.rX = this.setAngle(this.rX), this.rotate(this.$navBox, this.rX, this.rY, this.rZi), this.mouseSpin && requestAnimFrame($.proxy(function() {
                this.updateNavBox()
            }, this))
        },
        setAngle: function(a) {
            return a > 360 && (a -= 360), 0 > a && (a = 360 + a), a
        },
        rotate: function($container, rx, ry, rz) {
            this.mouseSpin && TweenMax.to($container, 0, {
                css: {
                    rotationX: rx,
                    rotationY: ry,
                    rotationZ: rz
                },
                ease: Linear.easeNone
            })
        },
        introLeftNav: function() {
            TweenMax.to(this.$leftNavContainer, 1, {
                css: {
                    autoAlpha: 1
                },
                ease: Cubic.easeOut
            })
        },
        introRotate: function() {
            TweenMax.to(this.$navBox, 0, {
                css: {
                    rotationX: this.rXi + 360,
                    rotationZ: this.rZi + 45,
                    rotationY: this.rYi + 0,
                    top: "300px",
                    autoAlpha: 1
                }
            }), TweenMax.to(this.$navBoxMask, 3, {
                css: {
                    autoAlpha: 0
                },
                ease: Linear.easeNone
            }), TweenMax.to(this.$navBox, 3, {
                css: {
                    rotationX: this.rXi,
                    rotationZ: this.rZi,
                    rotationY: this.rYi,
                    top: "80px"
                },
                ease: Cubic.easeOut,
                onComplete: this.initUI,
                onCompleteScope: this
            });
            var $faces = this.$navBox.find(".face-inner");
            TweenMax.allTo($faces, 2, {
                css: {
                    autoAlpha: .7
                },
                delay: 1,
                ease: Linear.easeNone
            })
        },
        initView: function() {
            0 == M5.Model.cs && (log("init ui..."), this.initUI());
        },
        getSectionNumBySide: function(side) {
            return this.sides.indexOf(side)
        },
        getBoxColor: function($face) {
            return 0 == M5.Model.cs ? this.boxColors[this.getSectionNumBySide($face)] : this.sectionColors[M5.Model.cs]
        },
        clearTimeline: function(tl) {
            tl && (tl.stop(), tl.kill(), tl.clear())
        }
    }), window.M5 = window.M5 || {}, M5.Section = Class.extend({
        init: function(s) {
            this.s = s, this.$e = $("#section-" + s), this.$3de = $("#threed-section-" + s), this.$camera = this.$3de.find(".camera"), this.transition_tl
        },
        clearTimeline: function() {
            this.transition_tl && (this.transition_tl.stop(), this.transition_tl.kill(), this.transition_tl.clear())
        },
        clearScene: function() {
            this.$scene && this.$scene.empty()
        },
        buildSubnav: function(items) {
            var list = "";
            $.each(items, function(count, item) {
                list += '<li><a href="' + item[1] + '"><div class="text">' + item[0] + "</div></a></li>"
            }), $("<ul class='subnav' />").html(list).appendTo(this.$e)
        },
        destroySubnav: function() {
            this.$e.find("ul.subnav").remove()
        }
    }), window.M5 = window.M5 || {}, M5.About = M5.Section.extend({
        init: function(s) {
            this._super(s), this.$camera = this.$e.find(".camera")
        },
        update: function(event) {
            switch (event) {
                case M5.Events.UPDATE_SECTION:
                    this.updateSection()
            }
        },
        updateSection: function() {
            M5.Model.cs == this.s && this.buildScene(), M5.Model.ps == this.s && this.hideScene()
        },
        buildScene: function() {
            this.clearTimeline(), this.transition_tl = new TimelineMax, this.transition_tl.add(TweenMax.fromTo(this.$e, .5, {
                css: {
                    alpha: 0,
                    display: "block"
                }
            }, {
                css: {
                    alpha: 1
                },
                delay: 2
            }), 0)
        },
        hideScene: function() {
            this.clearTimeline(), this.destroySubnav(), this.$e.hide()
        }
    }), window.M5 = window.M5 || {}, M5.Work = M5.Section.extend({
        init: function(s) {
            this._super(s), this.state = "all", this.sceneReady = !1, this.sectionName = "work", this.$camera = this.$e.find(".camera"), this.$nav = this.$e.find("nav"), this.initSubNav(), this.$workContent = this.$e.find(".work-content"), this.$info = this.$workContent.find(".info"), this.$media = this.$workContent.find(".media"), this.buildCloseButton(), this.initSubNavPositions(), this.initNavBoxPositions(), this.videoTimeoutID = 0, this.initHistoryListener()
        },
        initHistoryListener: function() {
            var me = this;
            History.Adapter.bind(window, "statechange", function() {
                me.onHistoryUpdate()
            })
        },
        onHistoryUpdate: function() {
            var section = window.location.pathname.split("/")[1];
            if ("work" == section) {
                this.state = window.location.pathname.split("/")[2];
                var s = this.state,
                    result = $.grep(M5.WorkModel, function(e) {
                        return e.id == s
                    });
                0 == result.length && (this.state = "all"), this.updateView()
            }
        },
        updateView: function() {
            this.sceneReady && ("all" == this.state ? this.closeWorkDetail() : this.showWorkDetail())
        },
        initSubNavPositions: function() {
            this.positions = [
                [11, -5, -36, 124, 36, 200],
                [11, 4, 16, 148, -31, 284],
                [4, 2, -41, 121, -0, 152],
                [-26, 0, -28, 59, -14, 226]
            ], this.positionIndex = 0
        },
        initNavBoxPositions: function() {
            this.navBoxPositions = [
                [45, 0, 45, 0, 80, 0],
                [55, 84, -24, -180, 80, 198],
                [4, -2, -29, 160, 80, 535],
                [-48, 76, 9, 87, 80, 348]
            ], this.navBoxPositionIndex = 0
        },
        update: function(event) {
            switch (event) {
                case M5.Events.UPDATE_SECTION:
                    this.updateSection()
            }
        },
        updateSection: function() {
            M5.Model.cs == this.s && this.buildScene(), M5.Model.ps == this.s && this.hideScene()
        },
        initSubNav: function() {
            for (var $nav = $("#work-nav"), data = M5.WorkModel, i = 0; i < data.length; i++) data[i].id = M5.Util.slugify(data[i].title), $nav.append('<li data-id="' + data[i].id + '"><span>' + data[i].title + "</span></li>");
            this.$li = this.$nav.find("ul li"), this.$li.each(function(i) {
                $(this).prepend('<div class="block"></div>'), $(this).prepend('<div class="bg"></div>')
            });
            var me = this;
            this.$li.click(function() {
                var id = $(this).attr("data-id"),
                    url = "/" + me.sectionName + "/" + id;
                History.pushState({
                    state: url
                }, M5.Model.pageTitle, url)
            })
        },
        buildCloseButton: function() {
            this.$close = $('<a href="/work"><div class="close"><span>X</span></div></a>'), this.$e.append(this.$close);
            this.$close.click(function(e) {
                var url = $(this).attr("href");
                History.pushState({
                    state: url
                }, M5.Model.pageTitle, url), e.preventDefault()
            }), this.$close.hide()
        },
        hideScene: function() {
            this.positionIndex = 0, this.navBoxPositionIndex = 0, this.resetBars(), this.closeWorkDetail(), this.clearTimeline(), this.$e.hide(), this.$3de.hide()
        },
        resetBars: function() {
            this.$li.each(function(i) {
                var $bg = $(this).find(".bg");
                TweenMax.to($bg, 0, {
                    css: {
                        autoAlpha: .5
                    },
                    delay: 0
                }), TweenMax.to(this, 0, {
                    css: {
                        top: 110 * i,
                        rotationX: 0,
                        rotationZ: 0,
                        rotationY: 0,
                        autoAlpha: 1,
                        width: 500,
                        z: 0
                    }
                })
            })
        },
        buildScene: function() {
            this.sceneReady = !1;
            var me = this;
            setTimeout(function() {
                me.sceneReady = !0
            }, 500), this.clearTimeline(), this.transition_tl = new TimelineMax({
                onComplete: this.buildComplete,
                onCompleteScope: this
            }), this.transition_tl.add(TweenMax.fromTo(this.$e, .5, {
                css: {
                    alpha: 0,
                    display: "block"
                }
            }, {
                css: {
                    alpha: 1
                },
                delay: 1
            }), 0);
            var me = this,
                navTween = this.getSubNavPosition(!0);
            this.transition_tl.add(navTween, 1), this.$li.each(function(i) {
                TweenMax.to(this, 0, {
                    css: {
                        top: 110 * i,
                        left: 0,
                        rotationX: 0,
                        rotationY: 0,
                        autoAlpha: 0,
                        z: -1e3
                    },
                    ease: Cubic.easeInOut
                });
                var $bg = $(this).find(".bg");
                TweenMax.to($bg, 1, {
                    css: {
                        autoAlpha: .5
                    },
                    ease: Cubic.easeInOut
                });
                var itemTween = TweenMax.to(this, 1, {
                    css: {
                        top: 110 * i,
                        rotationX: 0,
                        rotationZ: 0,
                        rotationY: 0,
                        autoAlpha: 1,
                        z: 0
                    },
                    delay: .2 * i,
                    ease: Cubic.easeOut
                });
                me.transition_tl.add(itemTween, 1)
            })
        },
        buildComplete: function() {},
        closeWorkDetail: function() {
            TweenMax.to(window, 1, {
                scrollTo: {
                    y: 0,
                    x: 0
                },
                ease: Cubic.easeOut
            }), clearInterval(this.videoTimeoutID), this.stopAllVideos();
            var me = this;
            this.$close.hide(), this.clearTimeline(), this.transition_tl = new TimelineMax;
            var navBoxTween = this.getNavBoxPosition(),
                navTween = this.getSubNavPosition(),
                contentTween = TweenMax.to(this.$workContent, 0, {
                    css: {
                        autoAlpha: 0
                    },
                    ease: Cubic.easeInOut
                });
            this.$li.each(function(i) {
                var $bg = $(this).find(".bg");
                TweenMax.to($bg, 1, {
                    css: {
                        autoAlpha: .5
                    },
                    delay: 0,
                    ease: Cubic.easeInOut
                });
                var itemTween = TweenMax.to(this, 1, {
                    css: {
                        top: 110 * i,
                        rotationX: 0,
                        rotationZ: 0,
                        rotationY: 0,
                        autoAlpha: 1,
                        width: 500,
                        z: 0
                    },
                    ease: Cubic.easeOut
                });
                me.transition_tl.add(itemTween, 0)
            }), this.transition_tl.add(navTween, 0), this.transition_tl.add(navBoxTween, 0), this.transition_tl.add(contentTween, 0)
        },
        getSubNavPosition: function(init) {
            this.positionIndex = init ? 0 : this.positionIndex + 1, this.positionIndex >= this.positions.length && (this.positionIndex = 0);
            var pos = this.positions[this.positionIndex],
                tween = TweenMax.to(this.$e.find("nav"), 1, {
                    css: {
                        left: pos[3],
                        top: pos[4],
                        rotationX: pos[0],
                        rotationZ: pos[1],
                        rotationY: pos[2],
                        autoAlpha: 1,
                        scale: .8,
                        z: pos[5]
                    },
                    delay: 0,
                    ease: Cubic.easeOut
                });
            return tween
        },
        getNavBoxPosition: function() {
            this.navBoxPositionIndex++, this.navBoxPositionIndex >= this.navBoxPositions.length && (this.navBoxPositionIndex = 0);
            var pos = this.navBoxPositions[this.navBoxPositionIndex],
                tween = TweenMax.to("#nav-box", 1, {
                    css: {
                        x: pos[3],
                        top: "80px",
                        rotationX: pos[0],
                        rotationZ: pos[1],
                        rotationY: pos[2],
                        autoAlpha: 1,
                        z: pos[5]
                    },
                    delay: 0,
                    ease: Cubic.easeOut
                });
            return tween
        },
        showWorkDetail: function() {
            this.clearTimeline(), this.transition_tl = new TimelineMax;
            var me = this;
            this.$close.fadeIn(1e3), this.buildContent();
            var navTween = TweenMax.to(this.$e.find("nav"), 1, {
                    css: {
                        left: 0,
                        top: -199,
                        rotationX: 0,
                        rotationZ: 0,
                        rotationY: 0,
                        autoAlpha: 1,
                        scale: 1,
                        z: 0
                    },
                    delay: 0,
                    ease: Cubic.easeInOut
                }),
                contentTween = TweenMax.to(this.$workContent, .5, {
                    css: {
                        autoAlpha: 1
                    },
                    ease: Cubic.easeInOut
                });
            this.$li.each(function(i) {
                var $bg = ($(this).find(".block"), $(this).find(".bg")),
                    bgAlpha = .5;
                if (me.state == $(this).attr("data-id")) {
                    bgAlpha = 0;
                    var itemTween = TweenMax.to(this, 1, {
                        css: {
                            top: 0,
                            rotationX: 0,
                            rotationZ: 0,
                            rotationY: 0,
                            autoAlpha: 1,
                            width: 1400,
                            z: 0
                        },
                        delay: 0,
                        ease: Cubic.easeInOut
                    })
                } else var itemTween = TweenMax.to(this, 1, {
                    css: {
                        top: 0,
                        rotationX: 0,
                        rotationZ: 0,
                        rotationY: -180,
                        autoAlpha: 0,
                        z: -500
                    },
                    delay: 0,
                    ease: Cubic.easeInOut
                });
                var bgTween = TweenMax.to($bg, 1, {
                    css: {
                        autoAlpha: bgAlpha
                    },
                    ease: Cubic.easeInOut
                });
                me.transition_tl.add(itemTween, 0), me.transition_tl.add(bgTween, 0)
            }), this.transition_tl.add(navTween, 0), this.transition_tl.add(contentTween, 1)
        },
        buildContent: function() {
            var data = this.getDatabyID(this.state);
            M5.Util.buildInfoItem(this.$info, data.client, "client", "Client/Designer"), M5.Util.buildInfoItem(this.$info, data.technology, "technology", "Technology"), M5.Util.buildInfoItem(this.$info, data.description, "description", "Description"), M5.Util.buildMedia(this.$media, this.videoPlayers, data)
        },
        stopAllVideos: function(_videoPlayers) {
            if (_videoPlayers)
                for (var i = 0; i < _videoPlayers.length; i++) {
                    var player = _videoPlayers[i];
                    player.stopVideo()
                }
        },
        getDatabyID: function(id) {
            var o = {
                title: "no data found"
            };
            return $.each(M5.WorkModel, function(count, item) {
                id == item.id && (o = item)
            }), o
        }
    }), window.M5 = window.M5 || {}, M5.Clients = M5.Section.extend({
        init: function(s) {
            this._super(s), this.cc = null, this.sectionName = "clients", this.activeClients = [], this.clientW = 250, this.clientH = 100, this.border = 20, this.columns = 2, this.state = "all", this.$camera = this.$e.find(".camera"), this.cameraW = this.$camera.width(), this.$scene = this.$camera.find("nav"), this.sceneReady = !1, this.sortByTitle(M5.ClientsModel), this.initHistoryListener(), this.initResponder(), this.$clientContent = this.$e.find(".clients-content"), this.$info = this.$clientContent.find(".info"), this.$media = this.$clientContent.find(".media"), this.videoPlayers = [], this.buildCloseButton()
        },
        update: function(event) {
            switch (event) {
                case M5.Events.UPDATE_SECTION:
                    this.updateSection()
            }
        },
        updateSection: function() {
            M5.Model.cs == this.s && this.buildScene(), M5.Model.ps == this.s && this.hideScene()
        },
        initHistoryListener: function() {
            var me = this;
            History.Adapter.bind(window, "statechange", function() {
                me.onHistoryUpdate()
            })
        },
        onHistoryUpdate: function(event) {
            var section = window.location.pathname.split("/")[1];
            if ("clients" == section) {
                this.state = window.location.pathname.split("/")[2];
                var s = this.state,
                    result = $.grep(M5.ClientsModel, function(e) {
                        return e.id == s
                    });
                0 == result.length && (this.state = "all"), this.updateView()
            }
        },
        updateView: function(resize) {
            this.updateColumns(), this.sceneReady && ("all" == this.state ? this.showAllClients() : this.showSingleClient(resize))
        },
        showSingleClient: function(resize) {
            this.$camera.addClass("no-interaction"), TweenMax.to(window, 1, {
                scrollTo: {
                    y: 0,
                    x: 0
                },
                ease: Cubic.easeOut
            }), this.clearTimeline(), this.transition_tl = new TimelineMax, this.moveCamera(300, 1, 0);
            var me = this,
                d = 0;
            this.$close.fadeIn(1e3), resize || this.buildContent();
            var contentTween = TweenMax.to(this.$clientContent, .5, {
                css: {
                    autoAlpha: 1
                },
                ease: Cubic.easeInOut
            });
            this.$clientList.each(function() {
                var $client = $(this),
                    item = $client.data("item");
                if (item)
                    if (item.id == me.state) {
                        me.cc = me.state;
                        var begin = {
                            x: 0,
                            y: -100,
                            z: 0,
                            rotationY: 0,
                            rotationX: 0,
                            width: 1400,
                            opacity: 1
                        };
                        me.transition_tl.add(TweenMax.to($client, 1, {
                            css: begin,
                            ease: Cubic.easeInOut
                        }), 0);
                        var font = {
                            fontSize: "1.625em",
                            top: 32,
                            left: 40
                        };
                        me.transition_tl.add(TweenMax.to($client.find("span"), 1, {
                            css: font,
                            ease: Cubic.easeInOut
                        }), 0);
                        var bg = {
                            autoAlpha: 0
                        };
                        me.transition_tl.add(TweenMax.to($client.find(".bg"), 1, {
                            css: bg,
                            ease: Cubic.easeInOut,
                            delay: .5
                        }), 0)
                    } else {
                        var begin = {
                            z: -500,
                            x: 0,
                            rotationY: 180,
                            autoAlpha: 0
                        };
                        me.transition_tl.add(TweenMax.to($client, 1, {
                            css: begin,
                            ease: Cubic.easeOut
                        }), d), d += .02
                    }
            });
            var sceneCSS = {
                rotationX: 0,
                rotationY: 0,
                opacity: 1,
                z: 0
            };
            me.transition_tl.add(TweenMax.to(this.$scene, .5, {
                css: sceneCSS
            }), 0), me.transition_tl.add(contentTween, 1)
        },
        showAllClients: function() {
            this.$camera.removeClass("no-interaction"), TweenMax.to(window, 1, {
                scrollTo: {
                    y: 0,
                    x: 0
                },
                ease: Cubic.easeOut
            }), this.closeClientDetail(), this.clearTimeline(), this.transition_tl = new TimelineMax;
            var row = 0,
                col = 0,
                d = this.firstRun ? 1.5 : 0,
                dx = (this.firstRun, .05),
                t = this.firstRun ? 1 : 1.5;
            this.firstRun && (this.firstRun = !1);
            var me = this;
            this.$clientList.each(function() {
                var $client = $(this),
                    item = $client.data("item"),
                    aa = ($client.data("client-content"), .8),
                    to = {
                        autoAlpha: aa,
                        x: col * (me.clientW + me.border) - me.columns * me.clientW / 2 + Math.round(me.cameraW / 2),
                        y: row * (me.clientH + me.border) - 50,
                        width: 250,
                        rotationY: 0,
                        z: 0
                    };
                d += dx, col++, col >= me.columns && (col = 0, row++), $client.data("ix", to.x), $client.data("iy", to.y), $client.data("ia", aa);
                var font = {
                        fontSize: "1em",
                        top: 18,
                        left: 30
                    },
                    bg = {
                        autoAlpha: .5
                    };
                if (item.id == me.cc) {
                    var toUp = {
                        y: -400,
                        z: 1e3
                    };
                    me.transition_tl.add(TweenMax.to($client, .2, {
                        css: toUp,
                        delay: 0,
                        ease: Cubic.easeOut
                    }), 0), me.transition_tl.add(TweenMax.to($client.find("span"), .5, {
                        css: font,
                        delay: d,
                        ease: Cubic.easeOut
                    }), 0), me.transition_tl.add(TweenMax.to($client.find(".bg"), .5, {
                        css: bg,
                        delay: d,
                        ease: Cubic.easeOut
                    }), 0), me.transition_tl.add(TweenMax.to($client, 1, {
                        css: to,
                        delay: 0,
                        ease: Cubic.easeInOut
                    }), .2)
                } else me.transition_tl.add(TweenMax.to($client, t, {
                    css: to,
                    delay: d,
                    ease: Quart.easeOut
                }), 0), me.transition_tl.add(TweenMax.to($client.find("span"), t, {
                    css: font,
                    delay: d,
                    ease: Cubic.easeInOut
                }), 0), me.transition_tl.add(TweenMax.to($client.find(".bg"), t, {
                    css: bg,
                    delay: d,
                    ease: Cubic.easeInOut
                }), 0)
            });
            var h = row * (this.border + this.clientH);
            this.$scene.css("height", h + "px")
        },
        buildScene: function() {
            this.sceneReady = !1, this.state = "all", this.cid = null, this.firstRun = !0, this.initSceneRotation(), this.clearTimeline(), this.$3de.show(), this.transition_tl = new TimelineMax({
                onComplete: this.buildComplete,
                onCompleteScope: this
            });
            var me = this;
            this.$clients = this.$scene.find("ul"), $.each(M5.ClientsModel, function(count, item) {
                var $client = $('<li class="client"><div class="bg"></div><div class="block"></div><span>' + item.title + "</span></li>");
                me.$clients.append($client), item.$client = $client, item.id = M5.Util.slugify(item.title), $client.data("item", item), $client.data("client-id", item.id), item.media && $client.data("client-content", item.media);
                var begin = {
                    x: 0,
                    y: 400,
                    z: 1500,
                    rotationX: 0,
                    rotationZ: 0,
                    rotationY: 0,
                    autoAlpha: 0
                };
                me.transition_tl.add(TweenMax.to($client, 0, {
                    css: begin
                }), 0), item.media && me.toggleButtonState($client, !0)
            }), this.$clientList = this.$clients.find(".client");
            var sceneCSS = {
                rotationX: 15,
                rotationY: 15,
                y: -200,
                z: 0,
                autoAlpha: 1
            };
            TweenMax.to(this.$scene, 1, {
                css: sceneCSS
            }), this.introTween = TweenMax.fromTo(this.$e, .5, {
                css: {
                    alpha: 0,
                    display: "block"
                }
            }, {
                css: {
                    alpha: 1
                },
                delay: 2
            })
        },
        buildComplete: function() {
            this.sceneReady = !0, this.updateView()
        },
        initSceneRotation: function() {
            this.updateRotationDelegate = $.proxy(this.updateRotation, this), $(document).bind("mousemove.proxy" + this.s, this.updateRotationDelegate)
        },
        updateRotation: function(e) {
            if ("all" == this.state) {
                var xa = e.pageX,
                    ya = e.pageY,
                    offset = this.$camera.offset(),
                    y = xa - parseInt(offset.left) - parseInt(this.$camera.css("width")) / 2,
                    x = ya - parseInt(offset.top) - parseInt(this.$camera.css("height")) / 2;
                y = -y / 10, x /= 10, y = this.limit(y, 30), x = this.limit(x, 30), y > 15 && (y = 15);
                TweenMax.to(this.$scene, 2, {
                    css: {
                        rotationX: .3 * x,
                        rotationY: .3 * y,
                        transformOrigin: "50% 50%"
                    },
                    ease: Cubic.easeOut
                })
            }
        },
        hideScene: function() {
            $(document).unbind("mousemove.proxy" + this.s, this.updateRotationDelegate), this.destroySubnav(), this.clearTimeline(), this.closeClientDetail(), this.transition_tl = new TimelineMax({
                onComplete: this.destroyView,
                onCompleteScope: this
            });
            var me = this,
                sceneCSS = {
                    rotationX: 90,
                    rotationY: 20,
                    z: -300,
                    autoAlpha: 0
                };
            me.transition_tl.add(TweenMax.to(this.$scene, .5, {
                css: sceneCSS,
                ease: Cubic.easeIn
            }), 0)
        },
        destroyView: function() {
            this.cc = null, this.clearTimeline(), this.$clients && this.$clients.empty(), this.introTween.kill(), this.$e.hide(), console.log("destroy clients id: " + this.$e.attr("id") + " vis: " + this.$e.css("display"));
            var test = this.$e;
            setTimeout(function() {
                console.log("later vis: " + test.css("display"))
            }, 1500)
        },
        toggleButtonState: function($client, active) {
            var me = this;
            active ? ($client.addClass("clickable"), $client.hover(function() {}, function() {}), $client.click(function() {
                var id = $(this).data("client-id"),
                    url = "/" + me.sectionName + "/" + id;
                History.pushState({
                    state: url
                }, M5.Model.pageTitle, url)
            })) : ($client.removeClass("clickable"), $client.unbind("mouseenter mouseleave click"))
        },
        limit: function(val, max) {
            return val > max ? max : -max > val ? -max : val
        },
        sortByTitle: function(arr) {
            arr.sort(function(a, b) {
                return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : b.title.toLowerCase() > a.title.toLowerCase() ? -1 : 0
            })
        },
        initResponder: function() {
            var me = this;
            $(window).resize(function() {
                me.updateView(!0)
            }), this.updateView()
        },
        updateColumns: function() {
            var w = $(window).width();
            this.columns = 2;
            var cameraLeft = 400;
            w >= 1500 ? (this.columns = 4, cameraLeft = 660) : w > 1200 && 1500 > w && (this.columns = 3, cameraLeft = 540), this.moveCamera(cameraLeft, .3, 0)
        },
        moveCamera: function(cameraLeft, t, d) {
            TweenMax.to(this.$camera, t, {
                css: {
                    left: cameraLeft + "px"
                },
                ease: Cubic.easeInOut,
                delay: d
            })
        },
        buildCloseButton: function() {
            this.$close = $('<a href="/clients"><div class="close"><span>X</span></div></a>'), this.$e.append(this.$close);
            this.$close.click(function(e) {
                var url = $(this).attr("href");
                History.pushState({
                    state: url
                }, M5.Model.pageTitle, url), e.preventDefault()
            }), this.$close.hide()
        },
        closeClientDetail: function() {
            this.$close.hide(), TweenMax.to(this.$clientContent, 0, {
                css: {
                    autoAlpha: 0
                },
                ease: Cubic.easeInOut
            })
        },
        buildContent: function() {
            var data = this.getDatabyID(this.state);
            M5.Util.buildInfoItem(this.$info, data.client, "client", "Designer"), M5.Util.buildInfoItem(this.$info, data.technology, "technology", "Technology"), M5.Util.buildInfoItem(this.$info, data.description, "description", "Description"), M5.Util.buildMedia(this.$media, this.videoPlayers, data)
        },
        stopAllVideos: function(_videoPlayers) {
            if (_videoPlayers)
                for (var i = 0; i < _videoPlayers.length; i++) {
                    var player = _videoPlayers[i];
                    player.stopVideo()
                }
        },
        getDatabyID: function(id) {
            var o = {
                title: "no data found"
            };
            return $.each(M5.ClientsModel, function(count, item) {
                id == item.id && (o = item)
            }), o
        }
    }), window.M5 = window.M5 || {}, M5.Contact = M5.Section.extend({
        init: function(s) {
            this._super(s), this.$contactScreen = $("#contact-screen")
        },
        update: function(event) {
            switch (event) {
                case M5.Events.UPDATE_SECTION:
                    this.updateSection()
            }
        },
        updateSection: function() {
            M5.Model.cs == this.s && this.buildScene(), M5.Model.ps == this.s && this.hideScene()
        },
        buildElement: function($phone, name, x, y, z, rX, rY, rZ) {
            this["$" + name] = $('<div class="element ' + name + '"></div>'), $phone = $phone || this.$phone, $phone.append(this["$" + name]), TweenMax.to(this["$" + name], 0, {
                css: {
                    x: x,
                    y: y,
                    z: z,
                    rotationX: rX,
                    rotationY: rY,
                    rotationZ: rZ,
                    opacity: 0
                }
            })
        },
        animateElement: function($e, t, x, y, z, o, d) {
            var tw = TweenMax.to($e, t, {
                css: {
                    x: x,
                    y: y,
                    z: z,
                    opacity: o
                },
                delay: d,
                ease: Expo.easeOut
            });
            this.transition_tl.add(tw, 0)
        },
        buildNewPhone: function() {
            this.$phone = $('<div class="phone"></div>'), this.$scene.append(this.$phone), this.buildElement(this.$phone, "front", 0, 0, 500), this.buildElement(this.$phone, "back", 0, 0, -500), this.buildElement(this.$phone, "left", -500, 0, 0, 0, 90), this.buildElement(this.$phone, "right", 500, 0, 0, 0, 90), this.buildElement(this.$phone, "top", 0, -500, 0, 90), this.buildElement(this.$phone, "bottom", 0, 500, 0, 90), this.buildElement(this.$phone, "screen", 0, 0, 500), this.buildElement(this.$phone, "button", 100, 520, 500), this.buildElement(this.$phone, "vol_up", -500, 80, 0, 0, 90), this.buildElement(this.$phone, "vol_down", -500, 160, 0, 0, 90), this.buildElement(this.$phone, "power", 0, -500, 0, 90)
        },
        buildOldPhone: function() {
            this.$oldPhone = $('<div class="old-phone"></div>'), this.$scene.append(this.$oldPhone), this.buildElement(this.$oldPhone, "front2", 0, 0, 500), this.buildElement(this.$oldPhone, "back2", 0, 0, -500), this.buildElement(this.$oldPhone, "left2", -500, 0, 0, 0, 90), this.buildElement(this.$oldPhone, "right2", 500, 0, 0, 0, 90), this.buildElement(this.$oldPhone, "top2", 0, -500, 0, 90), this.buildElement(this.$oldPhone, "bottom2", 0, 500, 0, 90), this.buildElement(this.$oldPhone, "antenna2", 0, 0, 500), this.buildElement(this.$oldPhone, "ear1", 0, 0, 500), this.buildElement(this.$oldPhone, "ear2", 0, 0, 500), this.buildElement(this.$oldPhone, "ear3", 0, 0, 500), this.buildElement(this.$oldPhone, "screen2", 0, 0, 500);
            for (var i = 0; 12 > i; i++) this.buildElement(this.$oldPhone, "key" + i, 0, 0, 500);
            this.buildElement(this.$oldPhone, "speaker", 0, 0, 500), this.buildElement(this.$oldPhone, "button2", 100, 520, 500);
            this.$button.click(function() {}), this.$button2.click(function() {})
        },
        assembleNewPhone: function() {
            this.clearTimeline(), this.transition_tl = new TimelineMax;
            var animTime = 1,
                bgc = "#cc1e65",
                delay = 1;
            this.animateElement(this.$front, animTime, 0, 0, 20, .3, delay + .05, bgc), this.animateElement(this.$back, animTime, 0, 0, -20, .2, delay + .1, bgc), this.animateElement(this.$left, animTime, -20, 0, 0, .1, delay + .15, bgc), this.animateElement(this.$right, animTime, 280, 0, 0, .2, delay + .2, bgc), this.animateElement(this.$top, animTime, 0, -20, 0, .4, delay + .25, bgc), this.animateElement(this.$bottom, animTime, 0, 580, 0, .6, delay + .3, bgc), this.animateElement(this.$screen, animTime, 20, 20, 25, 1, delay + .35, bgc), this.animateElement(this.$vol_up, animTime, -5, 80, 0, .5, delay + .4, bgc), this.animateElement(this.$vol_down, animTime, -5, 160, 0, .5, delay + .45, bgc), this.animateElement(this.$button, animTime, 100, 550, 25, 1, delay + .5, bgc), this.animateElement(this.$power, animTime, 220, -5, 0, .6, delay + .6, bgc)
        },
        buildScene: function() {
            this.clearScene(), this.initSceneRotation(), this.$3de.show(), this.$camera.show(), this.$scene = this.$camera.find(".scene"), this.buildNewPhone(), this.$scene.find(".screen").css("overflow", "hidden"), this.$scene.find(".screen").append(this.$contactScreen), this.clearTimeline(), this.transition_tl = new TimelineMax({
                onComplete: this.initView,
                onCompleteScope: this,
                delay: 1
            }), TweenMax.to(this.$phone, 0, {
                css: {
                    rotationY: 0
                }
            }), this.assembleNewPhone(), this.$contactScreen.show(), TweenMax.to(this.$contactScreen, 0, {
                css: {
                    top: 500,
                    autoAlpha: 0
                }
            });
            var screenTween = TweenMax.to(this.$contactScreen, 1, {
                css: {
                    top: 0,
                    autoAlpha: 1
                },
                ease: Cubic.easeInOut
            });
            this.transition_tl.add(screenTween, 1.2);
            var sceneTween = TweenMax.to(this.$scene, 0, {
                css: {
                    x: 0,
                    y: 0,
                    z: 0,
                    top: 60,
                    rotationX: 30,
                    rotationZ: 0,
                    rotationY: 30,
                    autoAlpha: 1
                },
                ease: Cubic.easeInOut
            });
            this.transition_tl.add(sceneTween, 0)
        },
        initView: function() {},
        initSceneRotation: function() {
            this.updateRotationDelegate = $.proxy(this.updateRotation, this), $(document).bind("mousemove.proxy" + this.s, this.updateRotationDelegate)
        },
        updateRotation: function(e) {
            var xa = e.pageX,
                ya = e.pageY,
                offset = this.$camera.offset(),
                y = xa - parseInt(offset.left) - parseInt(this.$camera.css("width")) / 2,
                x = ya - parseInt(offset.top) - parseInt(this.$camera.css("height")) / 2;
            y = -y / 10, x /= 10, y = this.limit(y, 30), x = this.limit(x, 30), y > 15 && (y = 15), TweenMax.to(this.$scene, 2, {
                css: {
                    rotationX: x,
                    rotationY: y
                },
                ease: Cubic.easeOut
            })
        },
        hideScene: function() {
            $(document).unbind("mousemove.proxy" + this.s, this.updateRotationDelegate), this.clearTimeline(), this.transition_tl = new TimelineMax({
                onComplete: this.destroyView,
                onCompleteScope: this
            }), this.explodeNewPhone()
        },
        explodeNewPhone: function() {
            var animTime = 2;
            this.animateElement(this.$front, animTime, 0, 0, 1e3, 0, 0), this.animateElement(this.$back, animTime, 0, 0, -1e3, 0, 0), this.animateElement(this.$left, animTime, -1e3, 0, 0, 0, 0), this.animateElement(this.$right, animTime, 1e3, 0, 0, 0, 0), this.animateElement(this.$top, animTime, 0, -1e3, 0, 0, 0), this.animateElement(this.$bottom, animTime, 0, 1e3, 0, 0, 0), this.animateElement(this.$screen, animTime, 20, 20, 1e3, 0, 0), this.animateElement(this.$vol_up, animTime, -1e3, 80, 0, 0, 0), this.animateElement(this.$vol_down, animTime, -1e3, 160, 0, 0, 0), this.animateElement(this.$button, animTime, 100, 550, 1e3, 0, 0), this.animateElement(this.$power, animTime, 0, -1e3, 0, 0, 0)
        },
        destroyView: function() {
            this.clearTimeline(), this.clearScene(), this.$3de.hide()
        },
        limit: function(val, max) {
            return val > max ? max : -max > val ? -max : val
        }
    }), window.M5 = window.M5 || {}, M5.Share = M5.Section.extend({
        init: function(s) {
            this._super(s), this.$scene = this.$camera.find(".scene"), this.initButtons()
        },
        update: function(event) {
            switch (event) {
                case M5.Events.UPDATE_SECTION:
                    this.updateSection()
            }
        },
        updateSection: function() {
            M5.Model.cs == this.s && this.buildScene(), M5.Model.ps == this.s && this.hideScene()
        },
        initButtons: function() {
            this.$email = this.$scene.find(".email"), this.$twitter = this.$scene.find(".twitter"), this.$facebook = this.$scene.find(".facebook"), this.$facebook.click(function() {
                M5.Util.shareOnFacebook()
            }), this.$twitter.click(function() {
                M5.Util.shareOnTwitter()
            }), this.$email.click(function() {
                M5.Util.shareOnEmail()
            })
        },
        buildScene: function() {
            this.$3de.show(), this.$camera.show(), this.clearTimeline(), this.transition_tl = new TimelineMax({
                onComplete: this.initView,
                onCompleteScope: this,
                delay: 1
            }), TweenMax.to(this.$scene, 0, {
                css: {
                    x: 0,
                    y: 0,
                    z: 1200,
                    rotationX: 30,
                    rotationZ: -180,
                    rotationY: 0,
                    autoAlpha: 0
                }
            });
            var sceneTween = TweenMax.to(this.$scene, 2, {
                css: {
                    x: 0,
                    y: 0,
                    z: 0,
                    rotationX: 30,
                    rotationZ: -2,
                    rotationY: 0,
                    autoAlpha: 1
                },
                ease: Cubic.easeInOut
            });
            TweenMax.to(this.$email, 0, {
                css: {
                    x: 0,
                    y: 0,
                    z: 0,
                    rotationX: 180,
                    rotationZ: 0,
                    rotationY: 0,
                    autoAlpha: 1,
                    transformOrigin: "center bottom"
                }
            });
            var emailTween = TweenMax.to(this.$email, 2, {
                delay: 0,
                css: {
                    x: 0,
                    y: -12,
                    z: 0,
                    rotationX: 0,
                    rotationZ: 0,
                    rotationY: 0,
                    autoAlpha: 1,
                    transformOrigin: "center bottom"
                },
                ease: Cubic.easeInOut
            });
            TweenMax.to(this.$twitter, 0, {
                css: {
                    x: 0,
                    y: 0,
                    z: 0,
                    rotationX: -180,
                    rotationZ: 0,
                    rotationY: 0,
                    autoAlpha: 1,
                    transformOrigin: "center top"
                }
            });
            var twitterTween = TweenMax.to(this.$twitter, 2, {
                delay: .2,
                css: {
                    x: 0,
                    y: 12,
                    z: 0,
                    rotationX: 0,
                    rotationZ: 0,
                    rotationY: 0,
                    autoAlpha: 1,
                    transformOrigin: "center top"
                },
                ease: Cubic.easeInOut
            });
            this.transition_tl.add(sceneTween, 0), this.transition_tl.add(emailTween, 0), this.transition_tl.add(twitterTween, 0)
        },
        hideScene: function() {
            this.clearTimeline();
            var t = .75,
                sceneTween = TweenMax.to(this.$scene, t, {
                    css: {
                        x: 0,
                        y: 0,
                        z: 500,
                        rotationX: 0,
                        rotationZ: 0,
                        rotationY: 0,
                        autoAlpha: 0
                    },
                    ease: Cubic.easeInOut
                }),
                emailTween = TweenMax.to(this.$email, t, {
                    delay: 0,
                    css: {
                        x: 0,
                        y: 0,
                        z: 0,
                        rotationX: 180,
                        rotationZ: 0,
                        rotationY: 0,
                        autoAlpha: 1,
                        transformOrigin: "center bottom"
                    },
                    ease: Cubic.easeInOut
                }),
                twitterTween = TweenMax.to(this.$twitter, t, {
                    delay: 0,
                    css: {
                        x: 0,
                        y: 0,
                        z: 0,
                        rotationX: -180,
                        rotationZ: 0,
                        rotationY: 0,
                        autoAlpha: 1,
                        transformOrigin: "center top"
                    },
                    ease: Cubic.easeInOut
                });
            this.transition_tl = new TimelineMax({
                onComplete: this.destroyView,
                onCompleteScope: this
            }), this.transition_tl.add(sceneTween, 0), this.transition_tl.add(emailTween, 0), this.transition_tl.add(twitterTween, 0)
        },
        destroyView: function() {
            this.clearTimeline(), this.$3de.hide()
        }
    }), window.M5 = window.M5 || {}, M5.Main = Class.extend({
        init: function() {
            this.buildViews(), this.initLinkTracking()
        },
        buildViews: function() {
            M5.Model.appendViews(new M5.Nav), M5.Util.domainOK(["mstu", "loca"]) && (M5.Model.appendViews(new M5.About(1)), M5.Model.appendViews(new M5.Work(2)), M5.Model.appendViews(new M5.Clients(3)), M5.Model.appendViews(new M5.Contact(4)), M5.Model.appendViews(new M5.Share(5)))
        },
        initLinkTracking: function() {
            $('a[target*="_blank"]').click(function() {
                _gaq.push(["_trackPageview", "/outgoing/" + $(this).attr("href")])
            })
        }
    }), $(document).ready(function() {
        new M5.Main
    });