import{S as Q,i as Y,s as Z,e as w,t as J,c as b,a as j,g as V,d as p,b as c,f as I,I as u,j as S,l as y,h as W,K as O,W as ae,R as q,v as P,w as D,x as z,p as H,n as $,A as T}from"../chunks/vendor-ca025d63.js";function x(h,e,t){const n=h.slice();return n[6]=e[t],n}function ee(h){let e,t;return{c(){e=w("span"),t=J("\u21E8"),this.h()},l(n){e=b(n,"SPAN",{class:!0});var a=j(e);t=V(a,"\u21E8"),a.forEach(p),this.h()},h(){c(e,"class","arrow svelte-1rzufn2")},m(n,a){I(n,e,a),u(e,t)},d(n){n&&p(e)}}}function te(h){let e,t;function n(l,_){return l[5]===void 0?le:se}let a=n(h),i=a(h);return{c(){e=w("div"),t=w("a"),i.c(),this.h()},l(l){e=b(l,"DIV",{class:!0});var _=j(e);t=b(_,"A",{href:!0});var g=j(t);i.l(g),g.forEach(p),_.forEach(p),this.h()},h(){c(t,"href",h[5]),c(e,"class","content-image svelte-1rzufn2")},m(l,_){I(l,e,_),u(e,t),i.m(t,null)},p(l,_){a===(a=n(l))&&i?i.p(l,_):(i.d(1),i=a(l),i&&(i.c(),i.m(t,null))),_&32&&c(t,"href",l[5])},d(l){l&&p(e),i.d()}}}function se(h){let e,t;return{c(){e=w("img"),this.h()},l(n){e=b(n,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){q(e.src,t=h[4])||c(e,"src",t),c(e,"alt","Image Not Availble"),c(e,"class","svelte-1rzufn2")},m(n,a){I(n,e,a)},p(n,a){a&16&&!q(e.src,t=n[4])&&c(e,"src",t)},d(n){n&&p(e)}}}function le(h){let e,t;return{c(){e=w("img"),this.h()},l(n){e=b(n,"IMG",{src:!0,alt:!0,onclick:!0,class:!0}),this.h()},h(){q(e.src,t=h[4])||c(e,"src",t),c(e,"alt","Image Not Availble"),c(e,"onclick","window.open(this.src)"),c(e,"class","svelte-1rzufn2")},m(n,a){I(n,e,a)},p(n,a){a&16&&!q(e.src,t=n[4])&&c(e,"src",t)},d(n){n&&p(e)}}}function ne(h){let e,t=h[6]+"",n,a;return{c(){e=w("li"),n=J(t),a=S(),this.h()},l(i){e=b(i,"LI",{class:!0});var l=j(e);n=V(l,t),a=y(l),l.forEach(p),this.h()},h(){c(e,"class","tech-list-item svelte-1rzufn2")},m(i,l){I(i,e,l),u(e,n),u(e,a)},p(i,l){l&4&&t!==(t=i[6]+"")&&W(n,t)},d(i){i&&p(e)}}}function ie(h){let e,t,n,a,i,l,_,g,d,k,C,M,G,A,v=h[3]!==void 0&&ee(),m=h[4]!==void 0&&te(h),R=h[2],f=[];for(let o=0;o<R.length;o+=1)f[o]=ne(x(h,R,o));return{c(){e=w("div"),t=w("div"),n=w("h3"),a=w("a"),i=J(h[0]),l=S(),v&&v.c(),_=S(),g=w("div"),m&&m.c(),d=S(),k=w("div"),C=w("p"),M=J(h[1]),G=S(),A=w("ul");for(let o=0;o<f.length;o+=1)f[o].c();this.h()},l(o){e=b(o,"DIV",{class:!0});var r=j(e);t=b(r,"DIV",{class:!0});var s=j(t);n=b(s,"H3",{class:!0});var E=j(n);a=b(E,"A",{href:!0,class:!0});var N=j(a);i=V(N,h[0]),l=y(N),v&&v.l(N),N.forEach(p),E.forEach(p),s.forEach(p),_=y(r),g=b(r,"DIV",{class:!0});var U=j(g);m&&m.l(U),d=y(U),k=b(U,"DIV",{class:!0});var B=j(k);C=b(B,"P",{class:!0});var K=j(C);M=V(K,h[1]),K.forEach(p),G=y(B),A=b(B,"UL",{class:!0});var X=j(A);for(let F=0;F<f.length;F+=1)f[F].l(X);X.forEach(p),B.forEach(p),U.forEach(p),r.forEach(p),this.h()},h(){c(a,"href",h[3]),c(a,"class","svelte-1rzufn2"),c(n,"class","title-name svelte-1rzufn2"),c(t,"class","title"),c(C,"class","content-desc"),c(A,"class","tech-list svelte-1rzufn2"),c(k,"class","content-text"),c(g,"class","content"),c(e,"class","project-container svelte-1rzufn2")},m(o,r){I(o,e,r),u(e,t),u(t,n),u(n,a),u(a,i),u(a,l),v&&v.m(a,null),u(e,_),u(e,g),m&&m.m(g,null),u(g,d),u(g,k),u(k,C),u(C,M),u(k,G),u(k,A);for(let s=0;s<f.length;s+=1)f[s].m(A,null)},p(o,[r]){if(r&1&&W(i,o[0]),o[3]!==void 0?v||(v=ee(),v.c(),v.m(a,null)):v&&(v.d(1),v=null),r&8&&c(a,"href",o[3]),o[4]!==void 0?m?m.p(o,r):(m=te(o),m.c(),m.m(g,d)):m&&(m.d(1),m=null),r&2&&W(M,o[1]),r&4){R=o[2];let s;for(s=0;s<R.length;s+=1){const E=x(o,R,s);f[s]?f[s].p(E,r):(f[s]=ne(E),f[s].c(),f[s].m(A,null))}for(;s<f.length;s+=1)f[s].d(1);f.length=R.length}},i:O,o:O,d(o){o&&p(e),v&&v.d(),m&&m.d(),ae(f,o)}}}function re(h,e,t){let{proj_name:n,proj_desc:a,techs:i,github_link:l,image:_,demo_link:g}=e;return h.$$set=d=>{"proj_name"in d&&t(0,n=d.proj_name),"proj_desc"in d&&t(1,a=d.proj_desc),"techs"in d&&t(2,i=d.techs),"github_link"in d&&t(3,l=d.github_link),"image"in d&&t(4,_=d.image),"demo_link"in d&&t(5,g=d.demo_link)},[n,a,i,l,_,g]}class L extends Q{constructor(e){super();Y(this,e,re,ie,Z,{proj_name:0,proj_desc:1,techs:2,github_link:3,image:4,demo_link:5})}}function oe(h){let e,t,n,a,i,l,_,g,d,k,C,M,G,A,v,m,R,f,o;return t=new L({props:{proj_name:"MeetMeInTheMiddle",proj_desc:"Created an Android and iPhone mobile application using the React Native along with teammate Alex Abraham as part of my Software Development Projects course. The application leverages the GoogleMapsAPI, including Location and Places services, to determine an equidistant point between two addresses and return points of interest for the users, displayed in a list.",techs:["React Native","Javascript","Google Maps API","Android/iOS Emulation"],image:"./MeetMeInTheMiddle.png",demo_link:"https://www.youtube.com/watch?v=nFGA5kceqFE&t=8s"}}),l=new L({props:{proj_name:"Shutter Plug",proj_desc:"As a member of a team for Software Development II, worked with external client to design and develop a business focused CRUD web application following the Agile methodology. Shutter Plug's goal was to show off local photographers portfolios and skills, offering profile creation and search, with the intention of connecting them with potential customers.",github_link:"https://github.com/rsmith37/ShutterPlugClone",techs:["ReactJS","Redux","NodeJs/Express","MongoDB","HTML","BootstrapCSS","Heroku"],image:"./ShutterPlug.png",demo_link:"https://www.youtube.com/watch?v=BXEuS-EflOk&feature=youtu.be"}}),k=new L({props:{proj_name:"GGC Study",proj_desc:"Worked independently as part of Information Technology Research course to create GGC Study, a reactive CRUD web application that allows students to schedule and view study group meetings. Built using the MERN stack, along with Redux for state management and deployed into production using Heroku.",github_link:"https://github.com/rsmith37/GGCStudy",techs:["ReactJS","Redux","NodeJs/Express","MongoDB","HTML","BootstrapCSS","Heroku"],image:"./GGCStudy.png"}}),A=new L({props:{proj_name:"AR Chem: Shared Augmented Reality (AR) Experience of 3D Molecules for Chemistry Students",proj_desc:"As an undergraduate research assistant, worked with team to pair Augmented Reality (AR) and Machine Learning (ML) in an AR molecule viewing mobile app. Utilized a combination of Unity 3D, Google ARCore and Google Firebase to create the integrated learning experience. Culminated in abstract and poster presentation: Georgia Gwinnett College School of Science and Technology STaRS, April 2019 (1st Place Poster Contest) & Consortium for Computer Sciences in Colleges Central Plains Conference, April 2019 (2nd Place Research Contest)",techs:["C#","Unity 3D","Google AR Core","Google Firebase"],image:"./ARChem.png"}}),f=new L({props:{proj_name:"Digital Mapping Project",proj_desc:"Collaborated with Software Development I team to develop an interactive mapping application using the Angular framework following the Waterfall and Agile methodologies. Utlized Google Maps API to display static location markers that would display information when selected by user.",techs:["Angular","TypeScript","HTML","CSS","Google Maps API","Java"],github_link:"https://github.com/rsmith37/AngularGoogleMaps",image:"./AngularMaps.png",demo_link:"https://ggcmaps.wpengine.com/interactive-digital-mapping-in-itec-3860/"}}),{c(){e=w("div"),P(t.$$.fragment),n=S(),a=w("hr"),i=S(),P(l.$$.fragment),_=S(),g=w("hr"),d=S(),P(k.$$.fragment),C=S(),M=w("hr"),G=S(),P(A.$$.fragment),v=S(),m=w("hr"),R=S(),P(f.$$.fragment),this.h()},l(r){e=b(r,"DIV",{class:!0});var s=j(e);D(t.$$.fragment,s),n=y(s),a=b(s,"HR",{class:!0}),i=y(s),D(l.$$.fragment,s),_=y(s),g=b(s,"HR",{class:!0}),d=y(s),D(k.$$.fragment,s),C=y(s),M=b(s,"HR",{class:!0}),G=y(s),D(A.$$.fragment,s),v=y(s),m=b(s,"HR",{class:!0}),R=y(s),D(f.$$.fragment,s),s.forEach(p),this.h()},h(){c(a,"class","svelte-gp47oi"),c(g,"class","svelte-gp47oi"),c(M,"class","svelte-gp47oi"),c(m,"class","svelte-gp47oi"),c(e,"class","root-container svelte-gp47oi")},m(r,s){I(r,e,s),z(t,e,null),u(e,n),u(e,a),u(e,i),z(l,e,null),u(e,_),u(e,g),u(e,d),z(k,e,null),u(e,C),u(e,M),u(e,G),z(A,e,null),u(e,v),u(e,m),u(e,R),z(f,e,null),o=!0},p:O,i(r){o||(H(t.$$.fragment,r),H(l.$$.fragment,r),H(k.$$.fragment,r),H(A.$$.fragment,r),H(f.$$.fragment,r),o=!0)},o(r){$(t.$$.fragment,r),$(l.$$.fragment,r),$(k.$$.fragment,r),$(A.$$.fragment,r),$(f.$$.fragment,r),o=!1},d(r){r&&p(e),T(t),T(l),T(k),T(A),T(f)}}}class ue extends Q{constructor(e){super();Y(this,e,null,oe,Z,{})}}export{ue as default};