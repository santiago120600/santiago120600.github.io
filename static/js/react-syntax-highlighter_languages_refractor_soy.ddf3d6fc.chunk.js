"use strict";(self.webpackChunkprogramundo=self.webpackChunkprogramundo||[]).push([[1423,3047],{595:function(e){function a(e){!function(e){function a(e,a){return"___"+e.toUpperCase()+a+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,t,r,l){if(n.language===t){var o=n.tokenStack=[];n.code=n.code.replace(r,(function(e){if("function"===typeof l&&!l(e))return e;for(var r,i=o.length;-1!==n.code.indexOf(r=a(t,i));)++i;return o[i]=e,r})),n.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(n,t){if(n.language===t&&n.tokenStack){n.grammar=e.languages[t];var r=0,l=Object.keys(n.tokenStack);!function o(i){for(var s=0;s<i.length&&!(r>=l.length);s++){var p=i[s];if("string"===typeof p||p.content&&"string"===typeof p.content){var u=l[r],c=n.tokenStack[u],g="string"===typeof p?p:p.content,d=a(t,u),f=g.indexOf(d);if(f>-1){++r;var m=g.substring(0,f),k=new e.Token(t,e.tokenize(c,n.grammar),"language-"+t,c),b=g.substring(f+d.length),h=[];m&&h.push.apply(h,o([m])),h.push(k),b&&h.push.apply(h,o([b])),"string"===typeof p?i.splice.apply(i,[s,1].concat(h)):p.content=h}}else p.content&&o(p.content)}return i}(n.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]},8768:function(e,a,n){var t=n(595);function r(e){e.register(t),function(e){var a=/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,n=/\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\b0x[\dA-F]+\b/;e.languages.soy={comment:[/\/\*[\s\S]*?\*\//,{pattern:/(\s)\/\/.*/,lookbehind:!0,greedy:!0}],"command-arg":{pattern:/({+\/?\s*(?:alias|call|delcall|delpackage|deltemplate|namespace|template)\s+)\.?[\w.]+/,lookbehind:!0,alias:"string",inside:{punctuation:/\./}},parameter:{pattern:/({+\/?\s*@?param\??\s+)\.?[\w.]+/,lookbehind:!0,alias:"variable"},keyword:[{pattern:/({+\/?[^\S\r\n]*)(?:\\[nrt]|alias|call|case|css|default|delcall|delpackage|deltemplate|else(?:if)?|fallbackmsg|for(?:each)?|if(?:empty)?|lb|let|literal|msg|namespace|nil|@?param\??|rb|sp|switch|template|xid)/,lookbehind:!0},/\b(?:any|as|attributes|bool|css|float|in|int|js|html|list|map|null|number|string|uri)\b/],delimiter:{pattern:/^{+\/?|\/?}+$/,alias:"punctuation"},property:/\w+(?==)/,variable:{pattern:/\$[^\W\d]\w*(?:\??(?:\.\w+|\[[^\]]+]))*/,inside:{string:{pattern:a,greedy:!0},number:n,punctuation:/[\[\].?]/}},string:{pattern:a,greedy:!0},function:[/\w+(?=\()/,{pattern:/(\|[^\S\r\n]*)\w+/,lookbehind:!0}],boolean:/\b(?:true|false)\b/,number:n,operator:/\?:?|<=?|>=?|==?|!=|[+*/%-]|\b(?:and|not|or)\b/,punctuation:/[{}()\[\]|.,:]/},e.hooks.add("before-tokenize",(function(a){var n=!1;e.languages["markup-templating"].buildPlaceholders(a,"soy",/{{.+?}}|{.+?}|\s\/\/.*|\/\*[\s\S]*?\*\//g,(function(e){return"{/literal}"===e&&(n=!1),!n&&("{literal}"===e&&(n=!0),!0)}))})),e.hooks.add("after-tokenize",(function(a){e.languages["markup-templating"].tokenizePlaceholders(a,"soy")}))}(e)}e.exports=r,r.displayName="soy",r.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_soy.ddf3d6fc.chunk.js.map