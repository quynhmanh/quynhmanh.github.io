(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var i=n("q1tI"),o=r(i),a=r(n("Gytx"));function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,c=[];function d(){u=e(c.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return u},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,c=[],e};var l=i.prototype;return l.shouldComponentUpdate=function(e){return!a(e,this.props)},l.componentWillMount=function(){c.push(this),d()},l.componentDidUpdate=function(){d()},l.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),d()},l.render=function(){return o.createElement(r,this.props)},i}(i.Component);return l(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),l(f,"canUseDOM",s),f}}},Gytx:function(e,t){e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var u=o[s];if(!l(u))return!1;var c=e[u],d=t[u];if(!1===(i=n?n.call(r,c,d,u):void 0)||void 0===i&&c!==d)return!1}return!0}},TJpk:function(e,t,n){t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=d(n("q1tI")),a=d(n("17x9")),l=d(n("8+s/")),s=d(n("bmMU")),u=n("v1p5"),c=n("hFT/");function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var T,E,p,v=(0,l.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),y=(T=v,p=E=function(e){function t(){return m(this,t),h(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,s.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case c.TAG_NAMES.SCRIPT:case c.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case c.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,i=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return r({},i,((t={})[n.type]=[].concat(i[n.type]||[],[r({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,i=e.child,o=e.newProps,a=e.newChildProps,l=e.nestedChildren;switch(i.type){case c.TAG_NAMES.TITLE:return r({},o,((t={})[i.type]=l,t.titleAttributes=r({},a),t));case c.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},a)});case c.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},a)})}return r({},o,((n={})[i.type]=r({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var i;n=r({},n,((i={})[t]=e[t],i))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=f(i,["children"]),l=(0,u.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(e,o),e.type){case c.TAG_NAMES.LINK:case c.TAG_NAMES.META:case c.TAG_NAMES.NOSCRIPT:case c.TAG_NAMES.SCRIPT:case c.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=f(e,["children"]),i=r({},n);return t&&(i=this.mapChildrenToProps(t,i)),o.default.createElement(T,i)},i(t,null,[{key:"canUseDOM",set:function(e){T.canUseDOM=e}}]),t}(o.default.Component),E.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},E.defaultProps={defer:!0,encodeSpecialCharacters:!0},E.peek=T.peek,E.rewind=function(){var e=T.rewind();return e||(e=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},p);y.renderStatic=y.rewind,t.Helmet=y,t.default=y},bmMU:function(e,t,n){"use strict";var r=Array.isArray,i=Object.keys,o=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var l,s,u,c=r(t),d=r(n);if(c&&d){if((s=t.length)!=n.length)return!1;for(l=s;0!=l--;)if(!e(t[l],n[l]))return!1;return!0}if(c!=d)return!1;var f=t instanceof Date,m=n instanceof Date;if(f!=m)return!1;if(f&&m)return t.getTime()==n.getTime();var h=t instanceof RegExp,T=n instanceof RegExp;if(h!=T)return!1;if(h&&T)return t.toString()==n.toString();var E=i(t);if((s=E.length)!==i(n).length)return!1;for(l=s;0!=l--;)if(!o.call(n,E[l]))return!1;if(a&&t instanceof Element&&n instanceof Element)return t===n;for(l=s;0!=l--;)if(!("_owner"===(u=E[l])&&t.$$typeof||e(t[u],n[u])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},eTiZ:function(e,t,n){},"hFT/":function(e,t){t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce((function(e,t){return e[r[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},ntAx:function(e,t,n){"use strict";var r=n("q1tI"),i=n.n(r),o=n("Wbzz"),a=n("TJpk"),l=n.n(a);n("eTiZ");function s(){return window.self!==window.top}var u,c=function(){var e=this;this.listeners=new Map,this.on=function(t,n){var r,i,o=null!==(i=null===(r=e.listeners.get(t))||void 0===r?void 0:r.add(n))&&void 0!==i?i:new Set([n]);e.listeners.set(t,o)},this.off=function(t,n){var r;null===(r=e.listeners.get(t))||void 0===r||r.delete(n)},this.emit=function(t,n){var r=e.listeners.get(t);r&&r.size>0&&r.forEach((function(e){e(n)}))},this.removeAllListeners=function(){e.listeners=new Map}};!function(e){e.ElementClicked="kontent-smart-link:element:clicked",e.Initialized="kontent-smart-link:initialized",e.Status="kontent-smart-link:status"}(u||(u={}));var d=function(){function e(){var e=this;this.addMessageListener=function(t,n){e.events.on(t,n)},this.removeMessageListener=function(t,n){e.events.off(t,n)},this.sendMessage=function(e,t){if(s()){var n={type:e,data:t};window.parent.postMessage(n,"*")}else console.error("Warning: can't send an iframe message, because the application is not hosted in an iframe")},this.onMessage=function(t){if(t.data){var n=t.data;e.events.emit(n.type,n.data)}},this.events=new c,window.addEventListener("message",this.onMessage,!0)}return e.prototype.destroy=function(){this.events.removeAllListeners(),window.removeEventListener("message",this.onMessage,!0)},e}(),f=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},m=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(l){i={error:l}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a},h={ElementCodename:"data-kontent-element-codename",ItemId:"data-kontent-item-id",LanguageCodename:"data-kontent-language-codename",ProjectId:"data-kontent-project-id"};function T(e){return e.replace(/^data-/,"").replace(/-./g,(function(e){return e.toUpperCase()[1]}))}function E(e,t){var n=(t.left+t.right)/2,r=(t.top+t.bottom)/2,i=document.elementFromPoint(n,r);return!e.isSameNode(i)&&!e.contains(i)}function p(e){var t=e.parentNode;return t instanceof HTMLElement?"relative"===window.getComputedStyle(t).getPropertyValue("position")?t:p(t):null}var v,y=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},g=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(l){i={error:l}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a},b="KONTENT-SMART-LINK-OVERLAY",A="KONTENT-SMART-LINK-ELEMENT",S=function(){function e(){var t=this;this.destroy=function(){t.clear(),t.defaultContainer.remove()},this.selectNode=function(e){var n=t.highlightByNode.get(e);n&&(e.classList.add("kontent-smart-link__node--selected"),n.classList.add("selected"))},this.deselectNode=function(e){var n=t.highlightByNode.get(e);n&&(e.classList.remove("kontent-smart-link__node--selected"),n.classList.remove("selected"))},this.render=function(e){var n,r,i,o,a,l,s;if(0===e.size)t.clear();else{var u=new Map;try{for(var c=y(e),d=c.next();!d.done;d=c.next()){var f=(C=d.value).getBoundingClientRect(),m=E(C,f),h=0===f.height||0===f.width;if(!m&&!h){var T=p(C),v=null!==(s=t.highlightByNode.get(C))&&void 0!==s?s:t.createHighlight(T);if(T){var b=T.getBoundingClientRect();v.style.top=f.top-b.top+"px",v.style.left=f.left-b.left+"px"}else v.style.top=f.top+window.pageYOffset+"px",v.style.left=f.left+window.pageXOffset+"px";v.style.width=f.width+"px",v.style.height=f.height+"px",u.set(C,v),t.highlightByNode.delete(C)}}}catch(O){n={error:O}}finally{try{d&&!d.done&&(r=c.return)&&r.call(c)}finally{if(n)throw n.error}}try{for(var A=y(t.highlightByNode.entries()),S=A.next();!S.done;S=A.next()){var w=g(S.value,2),C=w[0];(v=w[1]).remove(),t.highlightByNode.delete(C)}}catch(R){i={error:R}}finally{try{S&&!S.done&&(o=A.return)&&o.call(A)}finally{if(i)throw i.error}}try{for(var P=y(t.containerByParent.entries()),M=P.next();!M.done;M=P.next()){var _=g(M.value,2),I=_[0],L=_[1];0===L.children.length&&(L.remove(),t.containerByParent.delete(I))}}catch(N){a={error:N}}finally{try{M&&!M.done&&(l=P.return)&&l.call(P)}finally{if(a)throw a.error}}t.highlightByNode=u}},this.clear=function(){var e,n,r,i;try{for(var o=y(t.highlightByNode.entries()),a=o.next();!a.done;a=o.next()){var l=g(a.value,2),s=l[0];l[1].remove(),t.highlightByNode.delete(s)}}catch(m){e={error:m}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}try{for(var u=y(t.containerByParent.entries()),c=u.next();!c.done;c=u.next()){var d=g(c.value,2),f=d[0];d[1].remove(),t.containerByParent.delete(f)}}catch(h){r={error:h}}finally{try{c&&!c.done&&(i=u.return)&&i.call(u)}finally{if(r)throw r.error}}t.highlightByNode=new Map,t.containerByParent=new Map,t.defaultContainer.innerHTML=""},this.createHighlight=function(e){var n=document.createElement(A);return t.createContainerIfNotExist(e).appendChild(n),n},this.createContainerIfNotExist=function(e){if(!e)return t.defaultContainer;if(t.containerByParent.has(e))return t.containerByParent.get(e);var n=document.createElement(b);return e.appendChild(n),t.containerByParent.set(e,n),n},this.containerByParent=new Map,this.highlightByNode=new Map,this.defaultContainer=e.createDefaultContainer()}return e.createDefaultContainer=function(){var e=document.createElement(b);return window.document.body.appendChild(e),e},e}(),w=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};!function(e){e.ElementClicked="kontent-smart-link:element:clicked"}(v||(v={}));var C=function(){var e=this;this.enabled=!1,this.renderingTimeoutId=0,this.observedElements=new Set,this.visibleElements=new Set,this.destroy=function(){e.disable(),e.renderer.destroy()},this.addEventListener=function(t,n){e.events.on(t,n)},this.removeEventListener=function(t,n){e.events.off(t,n)},this.enable=function(){e.enabled||(e.startRenderingInterval(),e.listenToGlobalEvents(),e.observeDomMutations(),e.enabled=!0)},this.disable=function(){e.enabled&&(e.stopRenderingInterval(),e.unlistenToGlobalEvents(),e.disconnectObservers(),e.renderer.clear(),e.enabled=!1)},this.highlightVisibleElements=function(){requestAnimationFrame((function(){e.renderer.render(e.visibleElements)}))},this.startRenderingInterval=function(){e.highlightVisibleElements(),e.renderingTimeoutId=setTimeout(e.startRenderingInterval,1e3)},this.stopRenderingInterval=function(){e.renderingTimeoutId&&(clearTimeout(e.renderingTimeoutId),e.renderingTimeoutId=0)},this.listenToGlobalEvents=function(){window.addEventListener("scroll",e.highlightVisibleElements,{capture:!0}),window.addEventListener("resize",e.highlightVisibleElements,{passive:!0}),window.addEventListener("animationend",e.highlightVisibleElements,{passive:!0,capture:!0}),window.addEventListener("transitionend",e.highlightVisibleElements,{passive:!0,capture:!0}),window.addEventListener("click",e.onElementClick,{capture:!0})},this.unlistenToGlobalEvents=function(){window.removeEventListener("scroll",e.highlightVisibleElements,{capture:!0}),window.removeEventListener("resize",e.highlightVisibleElements),window.removeEventListener("animationend",e.highlightVisibleElements,{capture:!0}),window.removeEventListener("transitionend",e.highlightVisibleElements,{capture:!0}),window.removeEventListener("click",e.onElementClick,{capture:!0})},this.observeDomMutations=function(){e.enabled||(document.querySelectorAll("*["+h.ElementCodename+"]").forEach((function(t){t instanceof HTMLElement&&e.observeElementVisibility(t)})),e.mutationObserver.observe(window.document.body,{childList:!0,subtree:!0}))},this.disconnectObservers=function(){e.mutationObserver.disconnect(),e.intersectionObserver.disconnect(),e.observedElements.forEach((function(t){e.unobserveElementVisibility(t)})),e.observedElements=new Set,e.visibleElements=new Set},this.observeElementVisibility=function(t){e.observedElements.has(t)||(e.intersectionObserver.observe(t),e.observedElements.add(t),t.addEventListener("mousemove",e.onElementMouseEnter),t.addEventListener("mouseleave",e.onElementMouseLeave))},this.unobserveElementVisibility=function(t){e.observedElements.has(t)&&(e.intersectionObserver.unobserve(t),e.observedElements.delete(t),e.visibleElements.delete(t),t.removeEventListener("mousemove",e.onElementMouseEnter),t.removeEventListener("mouseleave",e.onElementMouseLeave))},this.onDomMutation=function(t){var n,r,i,o,a,l,s,u,c,d,f=T(h.ElementCodename),m=t.filter((function(e){return e.target instanceof Element&&"childList"===e.type&&![A,b].includes(e.target.tagName)&&Array.from(e.addedNodes).some((function(e){return e.tagName!==A}))&&Array.from(e.removedNodes).some((function(e){return e.tagName!==A}))}));try{for(var E=w(m),p=E.next();!p.done;p=E.next()){var v=p.value;try{for(var y=(i=void 0,w(v.addedNodes)),g=y.next();!g.done;g=y.next())if((_=g.value)instanceof HTMLElement){_.dataset[f]&&e.observeElementVisibility(_);try{for(var S=(a=void 0,w(_.querySelectorAll("*["+h.ElementCodename+"]"))),C=S.next();!C.done;C=S.next())(O=C.value)instanceof HTMLElement&&e.observeElementVisibility(O)}catch(R){a={error:R}}finally{try{C&&!C.done&&(l=S.return)&&l.call(S)}finally{if(a)throw a.error}}}}catch(N){i={error:N}}finally{try{g&&!g.done&&(o=y.return)&&o.call(y)}finally{if(i)throw i.error}}try{for(var P=(s=void 0,w(v.removedNodes)),M=P.next();!M.done;M=P.next()){var _;if((_=M.value)instanceof HTMLElement){_.dataset[f]&&e.unobserveElementVisibility(_);try{for(var I=(c=void 0,w(_.querySelectorAll("*["+h.ElementCodename+"]"))),L=I.next();!L.done;L=I.next()){var O;(O=L.value)instanceof HTMLElement&&e.unobserveElementVisibility(O)}}catch(k){c={error:k}}finally{try{L&&!L.done&&(d=I.return)&&d.call(I)}finally{if(c)throw c.error}}}}}catch(G){s={error:G}}finally{try{M&&!M.done&&(u=P.return)&&u.call(P)}finally{if(s)throw s.error}}}}catch(x){n={error:x}}finally{try{p&&!p.done&&(r=E.return)&&r.call(E)}finally{if(n)throw n.error}}m.length>0&&e.highlightVisibleElements()},this.onElementVisibilityChange=function(t){var n,r,i=t.filter((function(e){return e.target instanceof HTMLElement}));try{for(var o=w(i),a=o.next();!a.done;a=o.next()){var l=a.value,s=l.target;l.isIntersecting&&l.intersectionRatio>=.5?e.visibleElements.add(s):e.visibleElements.delete(s)}}catch(u){n={error:u}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}i.length>0&&e.highlightVisibleElements()},this.onElementClick=function(t){var n=function(e){var t,n,r,i,o=e.composedPath(),a=new Map;try{for(var l=f(o),s=l.next();!s.done;s=l.next()){var u=s.value;if(u instanceof HTMLElement)try{for(var c=(r=void 0,f(Object.entries(h))),d=c.next();!d.done;d=c.next()){var E=m(d.value,2)[1],p=T(E),v=u.dataset[p];v&&!a.has(E)&&a.set(E,v)}}catch(y){r={error:y}}finally{try{d&&!d.done&&(i=c.return)&&i.call(c)}finally{if(r)throw r.error}}}}catch(g){t={error:g}}finally{try{s&&!s.done&&(n=l.return)&&n.call(l)}finally{if(t)throw t.error}}return a}(t);n.has(h.ElementCodename)&&(t.preventDefault(),e.events.emit(v.ElementClicked,{projectId:n.get(h.ProjectId),languageCodename:n.get(h.LanguageCodename),itemId:n.get(h.ItemId),elementCodename:n.get(h.ElementCodename)}))},this.onElementMouseEnter=function(t){var n=t.currentTarget;e.renderer.selectNode(n)},this.onElementMouseLeave=function(t){var n=t.currentTarget;e.renderer.deselectNode(n)},this.mutationObserver=new MutationObserver(this.onDomMutation),this.intersectionObserver=new IntersectionObserver(this.onElementVisibilityChange,{threshold:[.5]}),this.events=new c,this.renderer=new S};var P=function(){return(P=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},M={queryTimerId:0},_={languageCodename:null,projectId:null,queryParam:"kontent-smart-link-enabled"},I=function(e){var t=this;this.destroy=function(){var e;t.unwatchQueryParams(),t.nodeSmartLinkProvider.destroy(),null===(e=t.iFrameCommunicator)||void 0===e||e.destroy()},this.updateConfiguration=function(e){t.configuration=P(P({},t.configuration),e)},this.updateState=function(e){t.state=P(P({},t.state),e)},this.initializeIFrameCommunication=function(){if(!s()||t.iFrameCommunicator)throw new Error("Cannot initialize iframe communication while not inside the iframe.");t.iFrameCommunicator=new d;var e,n=(e="kontent-smart-link:iframe-settings",{get:function(){var t=window.localStorage.getItem(e);return t?JSON.parse(t):null},set:function(t){var n=JSON.stringify(t);window.localStorage.setItem(e,n)},remove:function(){window.localStorage.removeItem(e)}}),r=n.get(),i=null===r||(null==r?void 0:r.enabled);i&&t.nodeSmartLinkProvider.enable(),t.iFrameCommunicator.addMessageListener(u.Status,(function(e){e&&t.nodeSmartLinkProvider&&(t.toggleNodeSmartLinkProvider(e.enabled),n.set({enabled:e.enabled}))})),t.iFrameCommunicator.sendMessage(u.Initialized,{projectId:t.configuration.projectId,languageCodename:t.configuration.languageCodename,enabled:i})},this.watchQueryParams=function(){if(s())throw new Error("No need to watch query params inside the iframe.");t.state.queryTimerId&&clearTimeout(t.state.queryTimerId);var e,n=(e=t.configuration.queryParam,new RegExp("[?&]"+e+"([=&]|$)","i").test(window.location.search));t.nodeSmartLinkProvider.enabled!==n&&t.toggleNodeSmartLinkProvider(n),t.updateState({queryTimerId:setTimeout(t.watchQueryParams,1e3)})},this.unwatchQueryParams=function(){clearTimeout(t.state.queryTimerId)},this.listenToHighlighterEvents=function(){t.nodeSmartLinkProvider.addEventListener(v.ElementClicked,t.onElementClick)},this.onElementClick=function(e){var n,r,i,o,a=P(P({},e),{projectId:e.projectId||t.configuration.projectId||void 0,languageCodename:e.languageCodename||t.configuration.languageCodename||void 0});if(function(e){var t=[];return e.projectId||t.push("Warning: project ID is required to handle element click."),e.languageCodename||t.push("Warning: language codename is required to handle element click."),e.itemId||t.push("Warning: item ID is required to handle element click."),e.elementCodename||t.push("Warning: element codename is required to handle element click."),t.forEach((function(e){console.error(e)})),0===t.length}(a))if(s()&&t.iFrameCommunicator)t.iFrameCommunicator.sendMessage(u.ElementClicked,a);else{var l=(n=a.projectId,r=a.languageCodename,i=a.itemId,o=a.elementCodename,function(e,t,n){return"https://app.kontent.ai/goto/edit-item/project/"+e+"/variant-codename/"+t+"/item/"+n}(n,r,i)+"/element/"+o);window.open(l,"_blank")}},this.toggleNodeSmartLinkProvider=function(e){(void 0!==e?e:!t.nodeSmartLinkProvider.enabled)?t.nodeSmartLinkProvider.enable():t.nodeSmartLinkProvider.disable()},this.nodeSmartLinkProvider=new C,this.state=M,this.configuration=P(P({},_),e),s()?this.initializeIFrameCommunication():this.watchQueryParams(),this.listenToHighlighterEvents()},L=function(){function e(){var e=this;this.plugin=null,this.destroy=function(){var t;null===(t=e.plugin)||void 0===t||t.destroy(),e.plugin=null},this.setConfiguration=function(t){if(!e.plugin)throw new Error("KontentSmartLink is not initialized or has already been destroyed.");e.plugin.updateConfiguration(t)}}return e.initializeOnLoad=function(t){return new Promise((function(n){window.addEventListener("load",(function(){n(e.initialize(t))}))}))},e.initialize=function(t){return e.instance||(e.instance=new e),e.instance.plugin||(e.instance.plugin=new I(t)),e.instance},e}();n("tY7s"),t.a=function(e){var t=e.children;return Object(r.useEffect)((function(){var e=L.initialize({queryParam:"preview-mode"});return function(){e.destroy()}})),i.a.createElement(o.StaticQuery,{query:"2688675029",render:function(e){return i.a.createElement("div",{className:"layout","data-kontent-project-id":e.sitePlugin.pluginOptions.projectId,"data-kontent-language-codename":e.sitePlugin.pluginOptions.languageCodenames[0]},i.a.createElement(l.a,{defaultTitle:"Blog by Quynh Nguyen"},i.a.createElement("link",{href:"/favicon.ico",rel:"shortcut icon",type:"image/x-icon"})),t)}})}},tY7s:function(e,t,n){},v1p5:function(e,t,n){(function(e){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=s(n("q1tI")),a=s(n("6qGY")),l=n("hFT/");function s(e){return e&&e.__esModule?e:{default:e}}var u,c=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=E(e,l.TAG_NAMES.TITLE),n=E(e,l.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=E(e,l.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},f=function(e){return E(e,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},m=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return i({},e,t)}),{})},h=function(e,t){return t.filter((function(e){return void 0!==e[l.TAG_NAMES.BASE]})).map((function(e){return e[l.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},T=function(e,t,n){var i={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&b("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var s=o[a],u=s.toLowerCase();-1===t.indexOf(u)||n===l.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===l.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(s)||s!==l.TAG_PROPERTIES.INNER_HTML&&s!==l.TAG_PROPERTIES.CSS_TEXT&&s!==l.TAG_PROPERTIES.ITEM_PROP||(n=s)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return i[n]||(i[n]={}),r[n]||(r[n]={}),!i[n][c]&&(r[n][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(r),s=0;s<o.length;s++){var u=o[s],c=(0,a.default)({},i[u],r[u]);i[u]=c}return e}),[]).reverse()},E=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},p=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){p(e)}),0)}),v=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||p:e.requestAnimationFrame||p,g="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||v:e.cancelAnimationFrame||v,b=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},A=null,S=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,s=e.noscriptTags,u=e.onChangeClientState,c=e.scriptTags,d=e.styleTags,f=e.title,m=e.titleAttributes;P(l.TAG_NAMES.BODY,r),P(l.TAG_NAMES.HTML,i),C(f,m);var h={baseTag:M(l.TAG_NAMES.BASE,n),linkTags:M(l.TAG_NAMES.LINK,o),metaTags:M(l.TAG_NAMES.META,a),noscriptTags:M(l.TAG_NAMES.NOSCRIPT,s),scriptTags:M(l.TAG_NAMES.SCRIPT,c),styleTags:M(l.TAG_NAMES.STYLE,d)},T={},E={};Object.keys(h).forEach((function(e){var t=h[e],n=t.newTags,r=t.oldTags;n.length&&(T[e]=n),r.length&&(E[e]=h[e].oldTags)})),t&&t(),u(e,T,E)},w=function(e){return Array.isArray(e)?e.join(""):e},C=function(e,t){void 0!==e&&document.title!==e&&(document.title=w(e)),P(l.TAG_NAMES.TITLE,t)},P=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(l.HELMET_ATTRIBUTE),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),s=0;s<a.length;s++){var u=a[s],c=t[u]||"";n.getAttribute(u)!==c&&n.setAttribute(u,c),-1===i.indexOf(u)&&i.push(u);var d=o.indexOf(u);-1!==d&&o.splice(d,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);i.length===o.length?n.removeAttribute(l.HELMET_ATTRIBUTE):n.getAttribute(l.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(l.HELMET_ATTRIBUTE,a.join(","))}},M=function(e,t){var n=document.head||document.querySelector(l.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+l.HELMET_ATTRIBUTE+"]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===l.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===l.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(l.HELMET_ATTRIBUTE,"true"),i.some((function(e,t){return a=t,n.isEqualNode(e)}))?i.splice(a,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},_=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[l.REACT_TAG_MAP[n]||n]=e[n],t}),t)},L=function(e,t,n){switch(e){case l.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[l.HELMET_ATTRIBUTE]=!0,i=I(n,r),[o.default.createElement(l.TAG_NAMES.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=_(n),o=w(t);return i?"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+i+">"+c(o,r)+"</"+e+">":"<"+e+" "+l.HELMET_ATTRIBUTE+'="true">'+c(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return I(t)},toString:function(){return _(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[l.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=l.REACT_TAG_MAP[e]||e;if(n===l.TAG_PROPERTIES.INNER_HTML||n===l.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),o.default.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===l.TAG_PROPERTIES.INNER_HTML||e===l.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+c(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===l.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[l.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){A&&g(A),e.defer?A=y((function(){S(e,(function(){A=null}))})):(S(e),A=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,s=e.noscriptTags,u=e.scriptTags,c=e.styleTags,d=e.title,f=void 0===d?"":d,m=e.titleAttributes;return{base:L(l.TAG_NAMES.BASE,t,r),bodyAttributes:L(l.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:L(l.ATTRIBUTE_NAMES.HTML,i,r),link:L(l.TAG_NAMES.LINK,o,r),meta:L(l.TAG_NAMES.META,a,r),noscript:L(l.TAG_NAMES.NOSCRIPT,s,r),script:L(l.TAG_NAMES.SCRIPT,u,r),style:L(l.TAG_NAMES.STYLE,c,r),title:L(l.TAG_NAMES.TITLE,{title:f,titleAttributes:m},r)}},t.reducePropsToState=function(e){return{baseTag:h([l.TAG_PROPERTIES.HREF],e),bodyAttributes:m(l.ATTRIBUTE_NAMES.BODY,e),defer:E(e,l.HELMET_PROPS.DEFER),encode:E(e,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:m(l.ATTRIBUTE_NAMES.HTML,e),linkTags:T(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],e),metaTags:T(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:T(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:T(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],e),styleTags:T(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:m(l.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=b}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-caf28343b091de806071.js.map