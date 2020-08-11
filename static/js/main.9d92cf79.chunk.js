(this.webpackJsonpcoronatracker=this.webpackJsonpcoronatracker||[]).push([[0],{196:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(70),c=a.n(l),o=a(25),s=a(26),u=a(28),m=a(27),i=a(9),p=a(2),d=(a(81),a(4)),E=a.n(d),b=a(12),h=a(29),f=a.n(h),v=function(e){var t=e.data,a=t.confirmed,n=t.recovered,l=t.deaths,c=t.lastUpdate;return a?r.a.createElement("div",{className:"text-center container"},r.a.createElement("span",{style:{fontSize:"40px"}},"Covid-19"),r.a.createElement("small",null,"Current Data"),r.a.createElement("div",{className:"grid-3"},r.a.createElement("div",{className:"card",style:{border:"transparent",borderBottom:"10px  solid blue"}},r.a.createElement("span",null,r.a.createElement("b",null,"Confirmed Cases: ")),r.a.createElement("br",null),r.a.createElement(f.a,{style:{fontSize:"35px"},start:0,end:a.value,separator:",",duration:2.5}),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("b",null,"Date: ")),r.a.createElement("span",null,new Date(c).toDateString()),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("b",null,"Numbers of Active cases of covid 19"))),r.a.createElement("div",{className:"card",style:{border:"transparent",borderBottom:"10px  solid green"}},r.a.createElement("span",null,r.a.createElement("b",null,"Recovered Cases: ")),r.a.createElement("br",null),r.a.createElement(f.a,{style:{fontSize:"35px"},start:0,end:n.value,separator:",",duration:2.5}),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("b",null,"Date: ")),r.a.createElement("span",null,new Date(c).toDateString()),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("b",null,"Numbers of Recovered cases of covid 19"))),r.a.createElement("div",{className:"card",style:{border:"transparent",borderBottom:"10px  solid red"}},r.a.createElement("span",null,r.a.createElement("b",null,"Deaths Rate: ")),r.a.createElement("br",null),r.a.createElement(f.a,{style:{fontSize:"35px"},start:0,end:l.value,separator:",",duration:2.5}),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("b",null,"Date: ")),r.a.createElement("span",null,new Date(c).toDateString()),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("b",null,"Numbers of Death Rate of covid 19"))))):""},g=a(71),x=function(e){var t=e.data,a=t.confirmed,n=t.recovered,l=t.deaths,c=e.country;""===c&&(c="World");var o=a?r.a.createElement(g.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,n.value,l.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current data of ".concat(c)}}}):null;return r.a.createElement("div",{className:"container",style:{marginBottom:"50px"}},o)},y=a(30),N=a.n(y),k="https://covid19.mathdro.id/api",w=function(){var e=Object(b.a)(E.a.mark((function e(t){var a,n,r,l,c,o,s;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=k,t&&(a="".concat(k,"/countries/").concat(t)),e.prev=2,e.next=5,N.a.get(a);case 5:return n=e.sent,r=n.data,l=r.confirmed,c=r.recovered,o=r.deaths,s=r.lastUpdate,e.abrupt("return",{confirmed:l,recovered:c,deaths:o,lastUpdate:s});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(b.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(k,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),C=a(75),O=function(e){var t=e.handlecountrychange,a=Object(n.useState)([]),l=Object(C.a)(a,2),c=l[0],o=l[1];return Object(n.useEffect)((function(){(function(){var e=Object(b.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,j();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]),r.a.createElement("div",{className:"container"},r.a.createElement("select",{defaultValue:"",onChange:function(e){return t(e.target.value)},className:"all-center",style:{marginBottom:"40px",width:"320px",border:"0px",borderBottom:"2px solid black",marginTop:"20px",background:"transparent"}},r.a.createElement("option",{value:""},"World"),c.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},D=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handlecountrychange=function(){var t=Object(b.a)(E.a.mark((function t(a){var n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(b.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",null,r.a.createElement(v,{data:t}),r.a.createElement(O,{handlecountrychange:this.handlecountrychange}),r.a.createElement(x,{data:t,country:a}))}}]),a}(n.Component),S=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"grid-2"},r.a.createElement("div",{className:"card",style:{border:"transparent"}},r.a.createElement("h3",null,r.a.createElement("b",null,"Developer")),r.a.createElement("p",null,"Name: Himanshu Singh"),r.a.createElement("p",null,"Student: B.tech(Computer Science Engineering)"),r.a.createElement("p",null,"Batch 2017-2021"),r.a.createElement("p",null,"Technology Used: reactjs"),r.a.createElement("p",null,"From: GB Pant Govt. Engineering College"),r.a.createElement("p",null,"Gmail: hs882677@gmail.com"),r.a.createElement("p",null,"Contact: https://www.linkedin.com/in/himanshu-singh-216978172/"),r.a.createElement("p",null,"Github: https://github.com/Himanshusinghofficial")),r.a.createElement("div",{className:"card",style:{border:"transparent"}},r.a.createElement("h3",null,r.a.createElement("b",null,"about this app")),r.a.createElement("p",null,"app is used to track covid data"),r.a.createElement("p",null,"version: 1.0.0"),r.a.createElement("p",null,"Used Covid API"))))},B=function(){return r.a.createElement("div",{className:"navbar bg-sucess bg-dark ",style:{padding:"5px 50px 5px 50px"}},r.a.createElement(i.b,{to:"/home",style:{padding:"0px"}},r.a.createElement("h1",null,r.a.createElement("i",{class:"fas fa-thermometer-full"})," Covid Tracker")),r.a.createElement("ul",{className:"text-center"},r.a.createElement("li",null,r.a.createElement(i.b,{to:"/home"},r.a.createElement("i",{class:"fas fa-home"}," ")," Home")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/about"},r.a.createElement("i",{class:"fas fa-address-card"})," About")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/login/himanshu_singh"},r.a.createElement("i",{class:"fas fa-sign-in-alt"})," Himanshu"))))},T=a(74),_=a.n(T),A=function(){return r.a.createElement("div",{className:"text-center",style:{marginTop:"100px"}},r.a.createElement(n.Fragment,null,r.a.createElement("h1",null,"Not Found"),r.a.createElement("p",{className:"lead"},"page you are looking for does not exists")))},H=function(){return r.a.createElement("div",{className:"container text-cneter"},r.a.createElement("div",{className:"card",style:{border:"transparent"}},r.a.createElement("h1",null,r.a.createElement("i",{class:"fas fa-sign-in-alt"})," Login"),r.a.createElement("p",{style:{marginTop:"5px"}},"Logged In as ",r.a.createElement("b",null,"Himanshu Singh")),r.a.createElement("p",{style:{marginTop:"5px"}},r.a.createElement("i",{class:"fas fa-check-circle"}),r.a.createElement("b",null,"Verified Account")),r.a.createElement("p",{style:{marginTop:"5px"}},r.a.createElement("i",{class:"fas fa-info-circle"}),r.a.createElement("b",null,"Chech Details")),r.a.createElement(i.b,{to:"/about"},r.a.createElement("button",{className:"btn-success btn:hover",style:{padding:"3px 25px 3px 25px",marginTop:"5px",border:"transparent",borderRadius:"5px"}},"About")),r.a.createElement("p",{style:{marginTop:"10px"}},r.a.createElement("i",{class:"fas fa-home"}),r.a.createElement("b",null,"Go to Home")),r.a.createElement(i.b,{to:"/home"},r.a.createElement("button",{className:"btn-primary btn:hover",style:{padding:"3px 25px 3px 25px",marginTop:"5px",border:"transparent",borderRadius:"5px"}},"Home"))))},R=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:_.a},r.a.createElement(B,null),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/Covid-Tracker",component:D}),r.a.createElement(p.a,{exact:!0,path:"/home",component:D}),r.a.createElement(p.a,{exact:!0,path:"/about",component:S}),r.a.createElement(p.a,{exact:!0,path:"/login/himanshu_singh",component:H}),r.a.createElement(p.a,{component:A}))))}}]),a}(n.Component);c.a.render(r.a.createElement(R,null),document.getElementById("root"))},74:function(e,t,a){e.exports={container:"App_container__1yjOh",image:"App_image__2hs6F",h1:"App_h1__hBW8b"}},76:function(e,t,a){e.exports=a(196)},81:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.9d92cf79.chunk.js.map