import{E as ge,S as W,i as X,s as Z,e as f,t as B,j as M,F as Y,c as _,a as i,g as D,d as a,l as I,G,b as e,H as V,f as Q,I as t,J as me,K as H,u as Le,L as ze,v as he,M as we,w as fe,x as _e,N as be,O as Ce,P as Ee,p as ee,n as te,A as pe,Q as ye}from"../chunks/vendor-ca025d63.js";const xe=()=>{const c=ge("__svelte__");return{page:{subscribe:c.page.subscribe},navigating:{subscribe:c.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:c.navigating.subscribe}},session:c.session}},Ae={subscribe(c){return xe().page.subscribe(c)}};function $e(c){let r,d,u,l,o,v,z,m,p,w,n,s,h,L,g,j,N,k,C,b,O,A,R,E,y,T,S,F,U,P;return{c(){r=f("nav"),d=f("div"),u=f("div"),l=f("div"),o=f("a"),v=B("Richard Smith"),z=M(),m=f("button"),p=Y("svg"),w=Y("path"),n=M(),s=f("div"),h=f("ul"),L=f("li"),g=f("a"),j=B("About"),k=M(),C=f("li"),b=f("a"),O=B("Experience"),R=M(),E=f("li"),y=f("a"),T=B("Projects"),this.h()},l(x){r=_(x,"NAV",{class:!0});var $=i(r);d=_($,"DIV",{class:!0});var J=i(d);u=_(J,"DIV",{class:!0});var K=i(u);l=_(K,"DIV",{class:!0});var se=i(l);o=_(se,"A",{id:!0,href:!0,class:!0});var ae=i(o);v=D(ae,"Richard Smith"),ae.forEach(a),se.forEach(a),z=I(K),m=_(K,"BUTTON",{type:!0,id:!0,class:!0});var re=i(m);p=G(re,"svg",{xmlns:!0,id:!0,x:!0,y:!0,viewBox:!0,class:!0});var le=i(p);w=G(le,"path",{d:!0}),i(w).forEach(a),le.forEach(a),re.forEach(a),K.forEach(a),n=I(J),s=_(J,"DIV",{id:!0,class:!0});var ne=i(s);h=_(ne,"UL",{class:!0});var q=i(h);L=_(q,"LI",{class:!0});var ie=i(L);g=_(ie,"A",{href:!0,class:!0});var oe=i(g);j=D(oe,"About"),oe.forEach(a),ie.forEach(a),k=I(q),C=_(q,"LI",{class:!0});var ce=i(C);b=_(ce,"A",{href:!0,class:!0});var ue=i(b);O=D(ue,"Experience"),ue.forEach(a),ce.forEach(a),R=I(q),E=_(q,"LI",{class:!0});var ve=i(E);y=_(ve,"A",{href:!0,class:!0});var de=i(y);T=D(de,"Projects"),de.forEach(a),ve.forEach(a),q.forEach(a),ne.forEach(a),J.forEach(a),$.forEach(a),this.h()},h(){e(o,"id","navbar-brand-name"),e(o,"href","/"),e(o,"class","svelte-z8z2ir"),e(l,"class","navbar-brand svelte-z8z2ir"),e(w,"d","M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"),e(p,"xmlns","http://www.w3.org/2000/svg"),e(p,"id","svg-icon"),e(p,"x","0px"),e(p,"y","0px"),e(p,"viewBox","0 0 24 24"),e(p,"class","svelte-z8z2ir"),e(m,"type","button"),e(m,"id","nav-button"),e(m,"class","svelte-z8z2ir"),e(u,"class","menu svelte-z8z2ir"),e(g,"href","/about"),e(g,"class","svelte-z8z2ir"),e(L,"class",N=""+(V(c[0]==="/about"?"current":"")+" svelte-z8z2ir")),e(b,"href","/experience"),e(b,"class","svelte-z8z2ir"),e(C,"class",A=""+(V(c[0]==="/experience"?"current":"")+" svelte-z8z2ir")),e(y,"href","/projects"),e(y,"class","svelte-z8z2ir"),e(E,"class",S=""+(V(c[0]==="/projects"?"current":"")+" svelte-z8z2ir")),e(h,"class",F=""+(V(`navbar-list${c[1]?" mobile":""}`)+" svelte-z8z2ir")),e(s,"id","link-container"),e(s,"class","svelte-z8z2ir"),e(d,"class","navbar-container svelte-z8z2ir"),e(r,"class","svelte-z8z2ir")},m(x,$){Q(x,r,$),t(r,d),t(d,u),t(u,l),t(l,o),t(o,v),t(u,z),t(u,m),t(m,p),t(p,w),t(d,n),t(d,s),t(s,h),t(h,L),t(L,g),t(g,j),t(h,k),t(h,C),t(C,b),t(b,O),t(h,R),t(h,E),t(E,y),t(y,T),U||(P=me(m,"click",c[2]),U=!0)},p(x,[$]){$&1&&N!==(N=""+(V(x[0]==="/about"?"current":"")+" svelte-z8z2ir"))&&e(L,"class",N),$&1&&A!==(A=""+(V(x[0]==="/experience"?"current":"")+" svelte-z8z2ir"))&&e(C,"class",A),$&1&&S!==(S=""+(V(x[0]==="/projects"?"current":"")+" svelte-z8z2ir"))&&e(E,"class",S),$&2&&F!==(F=""+(V(`navbar-list${x[1]?" mobile":""}`)+" svelte-z8z2ir"))&&e(h,"class",F)},i:H,o:H,d(x){x&&a(r),U=!1,P()}}}function Me(c,r,d){let{selected:u}=r,l=!1;const o=()=>d(1,l=!l),v=z=>{z.matches||d(1,l=!1)};return Le(()=>{window.matchMedia("(max-width: 960px)").addEventListener("change",v)}),c.$$set=z=>{"selected"in z&&d(0,u=z.selected)},[u,l,o]}class Ie extends W{constructor(r){super();X(this,r,Me,$e,Z,{selected:0})}}function Ne(c){let r,d,u,l,o,v,z,m,p,w,n,s,h,L,g,j,N,k;return{c(){r=f("footer"),d=f("div"),u=f("ul"),l=f("li"),o=f("a"),v=Y("svg"),z=Y("path"),m=M(),p=f("li"),w=f("a"),n=Y("svg"),s=Y("path"),h=M(),L=f("div"),g=f("p"),j=B("Copyright \xA9"),N=B(c[0]),k=B(" All rights reserved"),this.h()},l(C){r=_(C,"FOOTER",{class:!0});var b=i(r);d=_(b,"DIV",{class:!0});var O=i(d);u=_(O,"UL",{class:!0});var A=i(u);l=_(A,"LI",{});var R=i(l);o=_(R,"A",{href:!0,class:!0});var E=i(o);v=G(E,"svg",{id:!0,xmlns:!0,x:!0,y:!0,width:!0,height:!0,viewBox:!0,class:!0});var y=i(v);z=G(y,"path",{d:!0}),i(z).forEach(a),y.forEach(a),E.forEach(a),R.forEach(a),m=I(A),p=_(A,"LI",{});var T=i(p);w=_(T,"A",{href:!0,class:!0});var S=i(w);n=G(S,"svg",{id:!0,xmlns:!0,x:!0,y:!0,width:!0,height:!0,viewBox:!0,class:!0});var F=i(n);s=G(F,"path",{d:!0}),i(s).forEach(a),F.forEach(a),S.forEach(a),T.forEach(a),A.forEach(a),O.forEach(a),h=I(b),L=_(b,"DIV",{class:!0});var U=i(L);g=_(U,"P",{class:!0});var P=i(g);j=D(P,"Copyright \xA9"),N=D(P,c[0]),k=D(P," All rights reserved"),P.forEach(a),U.forEach(a),b.forEach(a),this.h()},h(){e(z,"d","M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"),e(v,"id","linkedin-icon"),e(v,"xmlns","http://www.w3.org/2000/svg"),e(v,"x","0px"),e(v,"y","0px"),e(v,"width","50"),e(v,"height","50"),e(v,"viewBox","0 0 50 50"),e(v,"class","svelte-1vrd03w"),e(o,"href","https://www.linkedin.com/in/richard-smith-9585b1196/"),e(o,"class","svelte-1vrd03w"),e(s,"d","M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"),e(n,"id","github-icon"),e(n,"xmlns","http://www.w3.org/2000/svg"),e(n,"x","0px"),e(n,"y","0px"),e(n,"width","30"),e(n,"height","30"),e(n,"viewBox","0 0 30 30"),e(n,"class","svelte-1vrd03w"),e(w,"href","https://github.com/rsmith37"),e(w,"class","svelte-1vrd03w"),e(u,"class","svelte-1vrd03w"),e(d,"class","social-links svelte-1vrd03w"),e(g,"class","footer-text svelte-1vrd03w"),e(L,"class","copyright-text"),e(r,"class","svelte-1vrd03w")},m(C,b){Q(C,r,b),t(r,d),t(d,u),t(u,l),t(l,o),t(o,v),t(v,z),t(u,m),t(u,p),t(p,w),t(w,n),t(n,s),t(r,h),t(r,L),t(L,g),t(g,j),t(g,N),t(g,k)},p:H,i:H,o:H,d(C){C&&a(r)}}}function Be(c){return[new Date().getFullYear()]}class De extends W{constructor(r){super();X(this,r,Be,Ne,Z,{})}}function Ve(c){let r,d,u,l,o,v,z,m,p;o=new Ie({props:{selected:c[0].url.pathname}});const w=c[2].default,n=ze(w,c,c[1],null);return m=new De({}),{c(){r=f("style"),d=B("@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap');"),u=M(),l=f("div"),he(o.$$.fragment),v=M(),n&&n.c(),z=M(),he(m.$$.fragment),this.h()},l(s){const h=we('[data-svelte="svelte-4dwp7k"]',document.head);r=_(h,"STYLE",{});var L=i(r);d=D(L,"@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap');"),L.forEach(a),h.forEach(a),u=I(s),l=_(s,"DIV",{class:!0});var g=i(l);fe(o.$$.fragment,g),v=I(g),n&&n.l(g),z=I(g),fe(m.$$.fragment,g),g.forEach(a),this.h()},h(){document.title="Richard Smith | Portfolio",e(l,"class","container svelte-19d3pei")},m(s,h){t(document.head,r),t(r,d),Q(s,u,h),Q(s,l,h),_e(o,l,null),t(l,v),n&&n.m(l,null),t(l,z),_e(m,l,null),p=!0},p(s,[h]){const L={};h&1&&(L.selected=s[0].url.pathname),o.$set(L),n&&n.p&&(!p||h&2)&&be(n,w,s,s[1],p?Ee(w,s[1],h,null):Ce(s[1]),null)},i(s){p||(ee(o.$$.fragment,s),ee(n,s),ee(m.$$.fragment,s),p=!0)},o(s){te(o.$$.fragment,s),te(n,s),te(m.$$.fragment,s),p=!1},d(s){a(r),s&&a(u),s&&a(l),pe(o),n&&n.d(s),pe(m)}}}function je(c,r,d){let u;ye(c,Ae,v=>d(0,u=v));let{$$slots:l={},$$scope:o}=r;return c.$$set=v=>{"$$scope"in v&&d(1,o=v.$$scope)},[u,o,l]}class Se extends W{constructor(r){super();X(this,r,je,Ve,Z,{})}}export{Se as default};