import{S as J,i as U,s as W,e as p,t as V,c as v,a as b,g as q,d,b as f,f as z,I as h,R as K,j as I,l as E,h as N,K as R,W as le,v as O,w as B,x as Q,p as X,n as Y,A as Z}from"../chunks/vendor-ca025d63.js";function x(c,e,t){const a=c.slice();return a[6]=e[t],a}function $(c){let e,t;return{c(){e=p("span"),t=V("\u21E8"),this.h()},l(a){e=v(a,"SPAN",{class:!0});var l=b(e);t=q(l,"\u21E8"),l.forEach(d),this.h()},h(){f(e,"class","arrow svelte-1rzufn2")},m(a,l){z(a,e,l),h(e,t)},d(a){a&&d(e)}}}function ee(c){let e,t,a,l;return{c(){e=p("div"),t=p("a"),a=p("img"),this.h()},l(n){e=v(n,"DIV",{class:!0});var s=b(e);t=v(s,"A",{href:!0});var j=b(t);a=v(j,"IMG",{src:!0,alt:!0,class:!0}),j.forEach(d),s.forEach(d),this.h()},h(){K(a.src,l=c[4])||f(a,"src",l),f(a,"alt","Image Not Availble"),f(a,"class","svelte-1rzufn2"),f(t,"href",c[5]),f(e,"class","content-image svelte-1rzufn2")},m(n,s){z(n,e,s),h(e,t),h(t,a)},p(n,s){s&16&&!K(a.src,l=n[4])&&f(a,"src",l),s&32&&f(t,"href",n[5])},d(n){n&&d(e)}}}function te(c){let e,t=c[6]+"",a,l;return{c(){e=p("li"),a=V(t),l=I(),this.h()},l(n){e=v(n,"LI",{class:!0});var s=b(e);a=q(s,t),l=E(s),s.forEach(d),this.h()},h(){f(e,"class","tech-list-item svelte-1rzufn2")},m(n,s){z(n,e,s),h(e,a),h(e,l)},p(n,s){s&4&&t!==(t=n[6]+"")&&N(a,t)},d(n){n&&d(e)}}}function se(c){let e,t,a,l,n,s,j,o,i,w,M,D,C,A,g=c[3]!==void 0&&$(),_=c[4]!==void 0&&ee(c),P=c[2],m=[];for(let r=0;r<P.length;r+=1)m[r]=te(x(c,P,r));return{c(){e=p("div"),t=p("div"),a=p("h3"),l=p("a"),n=V(c[0]),s=I(),g&&g.c(),j=I(),o=p("div"),_&&_.c(),i=I(),w=p("div"),M=p("p"),D=V(c[1]),C=I(),A=p("ul");for(let r=0;r<m.length;r+=1)m[r].c();this.h()},l(r){e=v(r,"DIV",{class:!0});var k=b(e);t=v(k,"DIV",{class:!0});var u=b(t);a=v(u,"H3",{class:!0});var y=b(a);l=v(y,"A",{href:!0,class:!0});var S=b(l);n=q(S,c[0]),s=E(S),g&&g.l(S),S.forEach(d),y.forEach(d),u.forEach(d),j=E(k),o=v(k,"DIV",{class:!0});var G=b(o);_&&_.l(G),i=E(G),w=v(G,"DIV",{class:!0});var T=b(w);M=v(T,"P",{class:!0});var H=b(M);D=q(H,c[1]),H.forEach(d),C=E(T),A=v(T,"UL",{class:!0});var F=b(A);for(let L=0;L<m.length;L+=1)m[L].l(F);F.forEach(d),T.forEach(d),G.forEach(d),k.forEach(d),this.h()},h(){f(l,"href",c[3]),f(l,"class","svelte-1rzufn2"),f(a,"class","title-name svelte-1rzufn2"),f(t,"class","title"),f(M,"class","content-desc"),f(A,"class","tech-list svelte-1rzufn2"),f(w,"class","content-text"),f(o,"class","content"),f(e,"class","project-container svelte-1rzufn2")},m(r,k){z(r,e,k),h(e,t),h(t,a),h(a,l),h(l,n),h(l,s),g&&g.m(l,null),h(e,j),h(e,o),_&&_.m(o,null),h(o,i),h(o,w),h(w,M),h(M,D),h(w,C),h(w,A);for(let u=0;u<m.length;u+=1)m[u].m(A,null)},p(r,[k]){if(k&1&&N(n,r[0]),r[3]!==void 0?g||(g=$(),g.c(),g.m(l,null)):g&&(g.d(1),g=null),k&8&&f(l,"href",r[3]),r[4]!==void 0?_?_.p(r,k):(_=ee(r),_.c(),_.m(o,i)):_&&(_.d(1),_=null),k&2&&N(D,r[1]),k&4){P=r[2];let u;for(u=0;u<P.length;u+=1){const y=x(r,P,u);m[u]?m[u].p(y,k):(m[u]=te(y),m[u].c(),m[u].m(A,null))}for(;u<m.length;u+=1)m[u].d(1);m.length=P.length}},i:R,o:R,d(r){r&&d(e),g&&g.d(),_&&_.d(),le(m,r)}}}function ne(c,e,t){let{proj_name:a,proj_desc:l,techs:n,github_link:s,image:j,demo_link:o}=e;return c.$$set=i=>{"proj_name"in i&&t(0,a=i.proj_name),"proj_desc"in i&&t(1,l=i.proj_desc),"techs"in i&&t(2,n=i.techs),"github_link"in i&&t(3,s=i.github_link),"image"in i&&t(4,j=i.image),"demo_link"in i&&t(5,o=i.demo_link)},[a,l,n,s,j,o]}class ae extends J{constructor(e){super();U(this,e,ne,se,W,{proj_name:0,proj_desc:1,techs:2,github_link:3,image:4,demo_link:5})}}function ie(c){let e,t,a,l,n,s,j;return t=new ae({props:{proj_name:"MeetMeInTheMiddle",proj_desc:"Created an Android and iPhone mobile application using the React Native along with teammate Alex Abraham as part of my Software Development Projects course. The application leverages the GoogleMapsAPI, including Location and Places services, to determine an equidistant point between two addresses and return points of interest for the users, displayed in a list.",techs:["React Native","Javascript","Google Maps API","Android/iOS Emulation"],image:"./MeetMeInTheMiddle.png",demo_link:"https://www.youtube.com/watch?v=nFGA5kceqFE&t=8s"}}),s=new ae({props:{proj_name:"Digital Mapping Project",proj_desc:"Collaborated with Software Development Technology I team to develop an interactive mapping application using the Angular framework following the Waterfall and Agile methodologies. Utlized Google Maps API to display static location markers that would display information when selected by user.",techs:["Angular","TypeScript","HTML","CSS","Google Maps API","Java"],github_link:"https://github.com/rsmith37/AngularGoogleMaps",image:"./AngularMaps.png",demo_link:"https://ggcmaps.wpengine.com/interactive-digital-mapping-in-itec-3860/"}}),{c(){e=p("div"),O(t.$$.fragment),a=I(),l=p("hr"),n=I(),O(s.$$.fragment),this.h()},l(o){e=v(o,"DIV",{class:!0});var i=b(e);B(t.$$.fragment,i),a=E(i),l=v(i,"HR",{class:!0}),n=E(i),B(s.$$.fragment,i),i.forEach(d),this.h()},h(){f(l,"class","svelte-gp47oi"),f(e,"class","root-container svelte-gp47oi")},m(o,i){z(o,e,i),Q(t,e,null),h(e,a),h(e,l),h(e,n),Q(s,e,null),j=!0},p:R,i(o){j||(X(t.$$.fragment,o),X(s.$$.fragment,o),j=!0)},o(o){Y(t.$$.fragment,o),Y(s.$$.fragment,o),j=!1},d(o){o&&d(e),Z(t),Z(s)}}}class oe extends J{constructor(e){super();U(this,e,null,ie,W,{})}}export{oe as default};