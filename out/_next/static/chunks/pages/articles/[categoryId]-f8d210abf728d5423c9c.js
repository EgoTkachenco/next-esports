(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[324],{9526:function(e,a,t){"use strict";var r=t(5893),c=t(7294);a.Z=function(){var e=[{title:"Home page",url:"#"},{title:"Feed",url:"#"},{title:"Current place",url:"#"}];return(0,r.jsx)("div",{className:"breadcrumbs",children:e.map((function(a,t){return(0,r.jsxs)(c.Fragment,{children:[(0,r.jsx)("div",{className:"breadcrumbs__item",url:a.url,children:a.title}),t!==e.length-1&&(0,r.jsx)("svg",{className:"breadcrumbs__triangle",viewBox:"0 0 4 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M0 6V0L4 3L0 6Z",fill:"#8CC63F"})})]},t)}))})}},9799:function(e,a,t){"use strict";t.r(a),t.d(a,{__N_SSG:function(){return d}});var r=t(5893),c=t(5675),s=t(9008),l=t(1664),i=t(9526);var n=function(e){var a=e.article,t=e.category;return(0,r.jsxs)("div",{className:"category-page-article",children:[(0,r.jsx)("div",{className:"category-page-article__preview",children:(0,r.jsx)(c.default,{src:a.image,layout:"fill",alt:a.title})}),(0,r.jsxs)("div",{className:"category-page-article-content",children:[(0,r.jsx)("div",{className:"category-page-article__title",children:a.title}),(0,r.jsx)("div",{className:"category-page-article__text",dangerouslySetInnerHTML:{__html:a.content.match(/<p>.*?<\/p>/g)[0]}}),(0,r.jsxs)("div",{className:"category-page-article-bottom",children:[(0,r.jsx)("div",{className:"category-page-article__author",children:a.author}),(0,r.jsx)("div",{className:"category-page-article__date",children:a.date}),(0,r.jsx)(l.default,{href:"/articles/".concat(t,"/").concat(a.id),passHref:!0,children:(0,r.jsxs)("div",{className:"category-page-article__more",children:["Read more",(0,r.jsx)("svg",{viewBox:"0 0 10 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M0 15V0L10 7.5L0 15Z",fill:"#8CC63F"})})]})})]})]})]})},d=!0;a.default=function(e){var a=e.articles,t=e.category;return t?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.default,{}),(0,r.jsx)("div",{className:"content",children:(0,r.jsxs)("div",{className:"category-page",children:[(0,r.jsx)("div",{className:"category__back",children:(0,r.jsx)(c.default,{src:t.image,layout:"responsive",width:"1920",height:"400",alt:"back"})}),(0,r.jsx)(i.Z,{}),(0,r.jsx)("div",{className:"category-page__title",children:t.title}),(0,r.jsx)("div",{className:"category-page__articles",children:a.map((function(e,a){return(0,r.jsx)(n,{article:e,category:t.id},a)}))})]})})]}):(0,r.jsx)("div",{className:"content"})}},48:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/[categoryId]",function(){return t(9799)}])}},function(e){e.O(0,[774,888,179],(function(){return a=48,e(e.s=a);var a}));var a=e.O();_N_E=a}]);