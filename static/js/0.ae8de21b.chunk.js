(this.webpackJsonpmediconsent=this.webpackJsonpmediconsent||[]).push([[0],{47:function(e,t,n){"use strict";t.a={BLANK_LINK:"#!"}},61:function(e,t,n){"use strict";t.a={items:[{id:"navigation",title:"Navigation",type:"group",icon:"icon-navigation",children:[{id:"dashboard",title:"Accueil",type:"item",url:"/",icon:"feather icon-home"}]},{id:"chart",title:"Stats",type:"group",icon:"icon-charts",children:[{id:"charts",title:"Statistiques",type:"item",icon:"feather icon-pie-chart",url:"/charts/nvd3"}]},{id:"appointment",title:"Gestion",type:"group",icon:"icon-charts",children:[{id:"appointments",title:"Importation rendez-vous",type:"item",icon:"feather icon-calendar",url:"/appointments"},{id:"questions",title:"Questionnaire",type:"item",icon:"feather icon-clipboard",url:"/questions"}]},{id:"consent-opinion",title:"Consentements & Avis",type:"group",icon:"icon-charts",children:[{id:"consents",title:"Consentements",type:"item",icon:"feather icon-edit",url:"/consents"},{id:"opinions",title:"Avis",type:"item",icon:"feather icon-star",url:"/opinions"}]},{id:"deconnect",title:"Deconnexion",type:"group",icon:"icon-pages",children:[{id:"deconnect",title:"Deconnexion",type:"item",url:"/auth/signin-1",classes:"nav-item",icon:"feather icon-power",breadcrumbs:!1}]}]}},63:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(65),o=n(7),c=n(61),s=n(47),l=n(15);class p extends a.Component{constructor(...e){super(...e),this.state={main:[],item:[]},this.componentWillReceiveProps=()=>{c.a.items.map((e,t)=>(e.type&&"group"===e.type&&this.getCollapse(e),!1))},this.getCollapse=e=>{e.children&&e.children.filter(t=>(t.type&&"collapse"===t.type?this.getCollapse(t):t.type&&"item"===t.type&&document.location.pathname===o.a.basename+t.url&&this.setState({item:t,main:e}),!1))}}componentDidMount(){c.a.items.map((e,t)=>(e.type&&"group"===e.type&&this.getCollapse(e,t),!1))}render(){let e,t,n="",a="Bienvenue";return this.state.main&&"collapse"===this.state.main.type&&(e=i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement("a",{href:s.a.BLANK_LINK},this.state.main.title))),this.state.item&&"item"===this.state.item.type&&(a=this.state.item.title,t=i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement("a",{href:s.a.BLANK_LINK},a)),!1!==this.state.item.breadcrumbs&&(n=i.a.createElement("div",{className:"page-header"},i.a.createElement("div",{className:"page-block"},i.a.createElement("div",{className:"row align-items-center"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"page-header-title"},i.a.createElement("h5",{className:"m-b-10"},a)),i.a.createElement("ul",{className:"breadcrumb"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement(r.a,{to:"/"},i.a.createElement("i",{className:"feather icon-home"}))),e,t))))))),document.title=a+" | Mediconsent",i.a.createElement(l.a,null,n)}}t.a=p},65:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(1),o=n.n(r),c=n(4),s=n.n(c),l=n(17),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},h=function(e){function t(){var n,a;u(this,t);for(var i=arguments.length,r=Array(i),o=0;o<i;o++)r[o]=arguments[o];return n=a=m(this,e.call.apply(e,[this].concat(r))),a.handleClick=function(e){if(a.props.onClick&&a.props.onClick(e),!e.defaultPrevented&&0===e.button&&!a.props.target&&!f(e)){e.preventDefault();var t=a.context.router.history,n=a.props,i=n.replace,r=n.to;i?t.replace(r):t.push(r)}},m(a,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,a=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["replace","to","innerRef"]);s()(this.context.router,"You should not use <Link> outside a <Router>"),s()(void 0!==t,'You must specify the "to" property');var r=this.context.router.history,o="string"===typeof t?Object(l.b)(t,null,null,r.location):t,c=r.createHref(o);return i.a.createElement("a",p({},a,{onClick:this.handleClick,href:c,ref:n}))},t}(i.a.Component);h.propTypes={onClick:o.a.func,target:o.a.string,replace:o.a.bool,to:o.a.oneOfType([o.a.string,o.a.object]).isRequired,innerRef:o.a.oneOfType([o.a.string,o.a.func])},h.defaultProps={replace:!1},h.contextTypes={router:o.a.shape({history:o.a.shape({push:o.a.func.isRequired,replace:o.a.func.isRequired,createHref:o.a.func.isRequired}).isRequired}).isRequired},t.a=h},80:function(e,t,n){},99:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(1),o=n.n(r),c=n(38),s=n(65),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var u=function(e){var t=e.to,n=e.exact,a=e.strict,r=e.location,o=e.activeClassName,u=e.className,m=e.activeStyle,f=e.style,h=e.isActive,y=e["aria-current"],d=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","aria-current"]),b="object"===("undefined"===typeof t?"undefined":p(t))?t.pathname:t,v=b&&b.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1");return i.a.createElement(c.a,{path:v,exact:n,strict:a,location:r,children:function(e){var n=e.location,a=e.match,r=!!(h?h(a,n):a);return i.a.createElement(s.a,l({to:t,className:r?[u,o].filter((function(e){return e})).join(" "):u,style:r?l({},f,m):f,"aria-current":r&&y||null},d))}})};u.propTypes={to:s.a.propTypes.to,exact:o.a.bool,strict:o.a.bool,location:o.a.object,activeClassName:o.a.string,className:o.a.string,activeStyle:o.a.object,style:o.a.object,isActive:o.a.func,"aria-current":o.a.oneOf(["page","step","location","date","time","true"])},u.defaultProps={activeClassName:"active","aria-current":"page"},t.a=u}}]);
//# sourceMappingURL=0.ae8de21b.chunk.js.map