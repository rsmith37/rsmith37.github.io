import{S as K,i as X,s as Q,e as p,t as J,c as _,a as j,g as V,d as v,b as u,f as P,I as r,R as Y,j as S,l as C,h as F,K as W,W as ae,v as I,w as D,x as H,p as $,n as z,A as T}from"../chunks/vendor-ca025d63.js";function Z(d,e,t){const a=d.slice();return a[6]=e[t],a}function ee(d){let e,t;return{c(){e=p("span"),t=J("\u21E8"),this.h()},l(a){e=_(a,"SPAN",{class:!0});var s=j(e);t=V(s,"\u21E8"),s.forEach(v),this.h()},h(){u(e,"class","arrow svelte-1rzufn2")},m(a,s){P(a,e,s),r(e,t)},d(a){a&&v(e)}}}function te(d){let e,t,a,s;return{c(){e=p("div"),t=p("a"),a=p("img"),this.h()},l(c){e=_(c,"DIV",{class:!0});var i=j(e);t=_(i,"A",{href:!0});var A=j(t);a=_(A,"IMG",{src:!0,alt:!0,class:!0}),A.forEach(v),i.forEach(v),this.h()},h(){Y(a.src,s=d[4])||u(a,"src",s),u(a,"alt","Image Not Availble"),u(a,"class","svelte-1rzufn2"),u(t,"href",d[5]),u(e,"class","content-image svelte-1rzufn2")},m(c,i){P(c,e,i),r(e,t),r(t,a)},p(c,i){i&16&&!Y(a.src,s=c[4])&&u(a,"src",s),i&32&&u(t,"href",c[5])},d(c){c&&v(e)}}}function ne(d){let e,t=d[6]+"",a,s;return{c(){e=p("li"),a=J(t),s=S(),this.h()},l(c){e=_(c,"LI",{class:!0});var i=j(e);a=V(i,t),s=C(i),i.forEach(v),this.h()},h(){u(e,"class","tech-list-item svelte-1rzufn2")},m(c,i){P(c,e,i),r(e,a),r(e,s)},p(c,i){i&4&&t!==(t=c[6]+"")&&F(a,t)},d(c){c&&v(e)}}}function se(d){let e,t,a,s,c,i,A,w,f,b,R,M,E,k,g=d[3]!==void 0&&ee(),m=d[4]!==void 0&&te(d),y=d[2],h=[];for(let o=0;o<y.length;o+=1)h[o]=ne(Z(d,y,o));return{c(){e=p("div"),t=p("div"),a=p("h3"),s=p("a"),c=J(d[0]),i=S(),g&&g.c(),A=S(),w=p("div"),m&&m.c(),f=S(),b=p("div"),R=p("p"),M=J(d[1]),E=S(),k=p("ul");for(let o=0;o<h.length;o+=1)h[o].c();this.h()},l(o){e=_(o,"DIV",{class:!0});var l=j(e);t=_(l,"DIV",{class:!0});var n=j(t);a=_(n,"H3",{class:!0});var G=j(a);s=_(G,"A",{href:!0,class:!0});var N=j(s);c=V(N,d[0]),i=C(N),g&&g.l(N),N.forEach(v),G.forEach(v),n.forEach(v),A=C(l),w=_(l,"DIV",{class:!0});var U=j(w);m&&m.l(U),f=C(U),b=_(U,"DIV",{class:!0});var B=j(b);R=_(B,"P",{class:!0});var x=j(R);M=V(x,d[1]),x.forEach(v),E=C(B),k=_(B,"UL",{class:!0});var O=j(k);for(let q=0;q<h.length;q+=1)h[q].l(O);O.forEach(v),B.forEach(v),U.forEach(v),l.forEach(v),this.h()},h(){u(s,"href",d[3]),u(s,"class","svelte-1rzufn2"),u(a,"class","title-name svelte-1rzufn2"),u(t,"class","title"),u(R,"class","content-desc"),u(k,"class","tech-list svelte-1rzufn2"),u(b,"class","content-text"),u(w,"class","content"),u(e,"class","project-container svelte-1rzufn2")},m(o,l){P(o,e,l),r(e,t),r(t,a),r(a,s),r(s,c),r(s,i),g&&g.m(s,null),r(e,A),r(e,w),m&&m.m(w,null),r(w,f),r(w,b),r(b,R),r(R,M),r(b,E),r(b,k);for(let n=0;n<h.length;n+=1)h[n].m(k,null)},p(o,[l]){if(l&1&&F(c,o[0]),o[3]!==void 0?g||(g=ee(),g.c(),g.m(s,null)):g&&(g.d(1),g=null),l&8&&u(s,"href",o[3]),o[4]!==void 0?m?m.p(o,l):(m=te(o),m.c(),m.m(w,f)):m&&(m.d(1),m=null),l&2&&F(M,o[1]),l&4){y=o[2];let n;for(n=0;n<y.length;n+=1){const G=Z(o,y,n);h[n]?h[n].p(G,l):(h[n]=ne(G),h[n].c(),h[n].m(k,null))}for(;n<h.length;n+=1)h[n].d(1);h.length=y.length}},i:W,o:W,d(o){o&&v(e),g&&g.d(),m&&m.d(),ae(h,o)}}}function le(d,e,t){let{proj_name:a,proj_desc:s,techs:c,github_link:i,image:A,demo_link:w}=e;return d.$$set=f=>{"proj_name"in f&&t(0,a=f.proj_name),"proj_desc"in f&&t(1,s=f.proj_desc),"techs"in f&&t(2,c=f.techs),"github_link"in f&&t(3,i=f.github_link),"image"in f&&t(4,A=f.image),"demo_link"in f&&t(5,w=f.demo_link)},[a,s,c,i,A,w]}class L extends K{constructor(e){super();X(this,e,le,se,Q,{proj_name:0,proj_desc:1,techs:2,github_link:3,image:4,demo_link:5})}}function ie(d){let e,t,a,s,c,i,A,w,f,b,R,M,E,k,g,m,y,h,o;return t=new L({props:{proj_name:"MeetMeInTheMiddle",proj_desc:"Created an Android and iPhone mobile application using the React Native along with teammate Alex Abraham as part of my Software Development Projects course. The application leverages the GoogleMapsAPI, including Location and Places services, to determine an equidistant point between two addresses and return points of interest for the users, displayed in a list.",techs:["React Native","Javascript","Google Maps API","Android/iOS Emulation"],image:"./MeetMeInTheMiddle.png",demo_link:"https://www.youtube.com/watch?v=nFGA5kceqFE&t=8s"}}),i=new L({props:{proj_name:"Shutter Plug",proj_desc:"As a member of a team for Software Development II, worked with external client to design and develop a business focused CRUD web application following the Agile methodology. Shutter Plug's goal was to show off local photographers portfolios and skills, offering profile creation and search, with the intention of connecting them with potential customers.",github_link:"https://github.com/rsmith37/ShutterPlugClone",techs:["ReactJS","Redux","NodeJs/Express","MongoDB","HTML","BootstrapCSS","Heroku"],image:"./ShutterPlug.png",demo_link:"https://www.youtube.com/watch?v=BXEuS-EflOk&feature=youtu.be"}}),b=new L({props:{proj_name:"GGC Study",proj_desc:"Worked independently as part of Information Technology Research course to create GGC Study, a reactive CRUD web application that allows students to schedule and view study group meetings. Built using the MERN stack, along with Redux for state management and deployed into production using Heroku.",github_link:"https://github.com/rsmith37/GGCStudy",techs:["ReactJS","Redux","NodeJs/Express","MongoDB","HTML","BootstrapCSS","Heroku"],image:"./GGCStudy.png"}}),k=new L({props:{proj_name:"AR Chem: Shared Augmented Reality (AR) Experience of 3D Molecules for Chemistry Students",proj_desc:"As an undergraduate research assistant, worked with team to pair Augmented Reality (AR) and Machine Learning (ML) in an AR molecule viewing mobile app. Utilized a combination of Unity 3D, Google ARCore and Google Firebase to create the integrated learning experience. Culminated in abstract and poster presentation: Georgia Gwinnett College School of Science and Technology STaRS, April 2019. (1st Place Poster Contest) & Consortium for Computer Sciences in Colleges Central Plains Conference, April 2019 (2nd Place Research Contest)",techs:["C#","Unity 3D","Google AR Core","Google Firebase"],image:"./ARChem.png",demo_link:"https://rsmith37.github.io/ARChem.png"}}),h=new L({props:{proj_name:"Digital Mapping Project",proj_desc:"Collaborated with Software Development I team to develop an interactive mapping application using the Angular framework following the Waterfall and Agile methodologies. Utlized Google Maps API to display static location markers that would display information when selected by user.",techs:["Angular","TypeScript","HTML","CSS","Google Maps API","Java"],github_link:"https://github.com/rsmith37/AngularGoogleMaps",image:"./AngularMaps.png",demo_link:"https://ggcmaps.wpengine.com/interactive-digital-mapping-in-itec-3860/"}}),{c(){e=p("div"),I(t.$$.fragment),a=S(),s=p("hr"),c=S(),I(i.$$.fragment),A=S(),w=p("hr"),f=S(),I(b.$$.fragment),R=S(),M=p("hr"),E=S(),I(k.$$.fragment),g=S(),m=p("hr"),y=S(),I(h.$$.fragment),this.h()},l(l){e=_(l,"DIV",{class:!0});var n=j(e);D(t.$$.fragment,n),a=C(n),s=_(n,"HR",{class:!0}),c=C(n),D(i.$$.fragment,n),A=C(n),w=_(n,"HR",{class:!0}),f=C(n),D(b.$$.fragment,n),R=C(n),M=_(n,"HR",{class:!0}),E=C(n),D(k.$$.fragment,n),g=C(n),m=_(n,"HR",{class:!0}),y=C(n),D(h.$$.fragment,n),n.forEach(v),this.h()},h(){u(s,"class","svelte-gp47oi"),u(w,"class","svelte-gp47oi"),u(M,"class","svelte-gp47oi"),u(m,"class","svelte-gp47oi"),u(e,"class","root-container svelte-gp47oi")},m(l,n){P(l,e,n),H(t,e,null),r(e,a),r(e,s),r(e,c),H(i,e,null),r(e,A),r(e,w),r(e,f),H(b,e,null),r(e,R),r(e,M),r(e,E),H(k,e,null),r(e,g),r(e,m),r(e,y),H(h,e,null),o=!0},p:W,i(l){o||($(t.$$.fragment,l),$(i.$$.fragment,l),$(b.$$.fragment,l),$(k.$$.fragment,l),$(h.$$.fragment,l),o=!0)},o(l){z(t.$$.fragment,l),z(i.$$.fragment,l),z(b.$$.fragment,l),z(k.$$.fragment,l),z(h.$$.fragment,l),o=!1},d(l){l&&v(e),T(t),T(i),T(b),T(k),T(h)}}}class re extends K{constructor(e){super();X(this,e,null,ie,Q,{})}}export{re as default};
