(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{124:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return y}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=r,y=u["".concat(a,".").concat(f)]||u[f]||d[f]||c;return t?o.a.createElement(y,i(i({ref:n},s),{},{components:t})):o.a.createElement(y,i({ref:n},s))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var s=2;s<c;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},87:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(8),c=(t(0),t(124)),a={id:"lifecycle-hooks",title:"Lifecycle hooks"},i={unversionedId:"advanced/lifecycle-hooks",id:"advanced/lifecycle-hooks",isDocsHomePage:!1,title:"Lifecycle hooks",description:"There are two life cycle hooks in GraphQL Modules, one represents an incoming request and the other is called when the execution is done. Hooks are only available in Operation scoped Injector.",source:"@site/docs/advanced/lifecycle-hooks.md",slug:"/advanced/lifecycle-hooks",permalink:"/docs/advanced/lifecycle-hooks",editUrl:"https://github.com/Urigo/graphql-modules/edit/master/website/docs/advanced/lifecycle-hooks.md",version:"current",sidebar:"docs",previous:{title:"Execution Context",permalink:"/docs/advanced/execution-context"},next:{title:"Solve N+1 Using DataLoader",permalink:"/docs/recipes/dataloader"}},l=[],s={rightToc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"There are two life cycle hooks in GraphQL Modules, one represents an incoming request and the other is called when the execution is done. Hooks are only available in Operation scoped Injector."),Object(c.b)("p",null,"Every Operation scoped service is created for each incoing GraphQL operation, which means you can use the constructor as the initial hook."),Object(c.b)("p",null,"After Operation is resolved and the context about to be destroyed, GraphQL Modules call the ",Object(c.b)("inlineCode",{parentName:"p"},"onDestroy")," method on all operation-scoped services."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Injectable, Scope, OnDestroy } from 'graphql-modules';\n\n@Injectable({\n  scope: Scope.Operation,\n})\nexport class Data implements OnDestroy {\n  constructor() {\n    // incoming operation, here you can do your setup and preparation\n  }\n\n  onDestroy() {\n    // Operation is resolved\n    // Execution context is about to be disposed\n  }\n}\n")))}p.isMDXComponent=!0}}]);