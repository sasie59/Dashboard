(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(1),c=s.n(n),i=s(8),l=s.n(i),r=(s(15),s(2)),d=s(3),o=s(5),j=s(4),b=(s(16),s.p+"static/media/toggle.c2422745.png");function h(){return Object(a.jsxs)("div",{className:"HelloBlock",children:[Object(a.jsxs)("div",{className:"hello",children:[Object(a.jsx)("h1",{children:"Hello ShihWei"}),Object(a.jsx)("h3",{children:"welcome to your Dashboard"})]}),Object(a.jsx)("div",{className:"toggle",children:Object(a.jsx)("img",{src:b,alt:""})})]})}var u=s(9),O=(s(17),s.p+"static/media/sun.6b93d9fd.jpg"),m=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).handleChangeTemp=function(t,s){e.setState(Object(u.a)({},t,e.state[t]+s))},e.handleAdd=function(){e.setState({percent:(e.state.percent+10)%110})},e.state={low:27,top:36,percent:10},e}return Object(d.a)(s,[{key:"render",value:function(){var e=this.state,t=e.low,s=e.top,n=e.percent;return Object(a.jsxs)("div",{className:"WeatherBlock",children:[Object(a.jsx)("div",{className:"out",children:Object(a.jsx)("img",{className:"sun",src:O,alt:"\u592a\u967d"})}),Object(a.jsx)("div",{className:"county",children:"i-Lan"}),Object(a.jsxs)("div",{className:"door",children:[Object(a.jsxs)("div",{className:"temperature",children:[Object(a.jsxs)("div",{onClick:this.handleChangeTemp.bind(this,"low",-1),id:"low",children:[t,"\xb0"]}),Object(a.jsxs)("div",{onClick:this.handleChangeTemp.bind(this,"top",1),id:"top",children:[s,"\xb0"]})]}),Object(a.jsx)("div",{className:"space"}),Object(a.jsxs)("div",{className:"rainChance",onClick:this.handleAdd,children:[n,"%"]})]})]})}}]),s}(n.Component),k=(s(18),s.p+"static/media/book.7ef86c83.png"),x=s.p+"static/media/ball.af13833f.png",v=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).handleClick=function(t){e.setState({action:t})},e.state={action:"book"},e}return Object(d.a)(s,[{key:"render",value:function(){var e=this.state.action;return Object(a.jsxs)("div",{className:"ActionBlock",children:[Object(a.jsx)("div",{onClick:this.handleClick.bind(this,"book"),className:"planA ".concat("book"===e?"gray":"white"),children:Object(a.jsx)("img",{className:"book",src:k,width:"50%",alt:"book"})}),Object(a.jsx)("div",{className:"space"}),Object(a.jsx)("div",{onClick:this.handleClick.bind(this,"ball"),className:"planB ".concat("ball"===e?"gray":"white"),children:Object(a.jsx)("img",{className:"ball",src:x,width:"50%",alt:"ball"})})]})}}]),s}(n.Component),f=(s(19),function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).handleClick=function(){e.setState({status:!e.state.status})},e.state={status:!0},e}return Object(d.a)(s,[{key:"render",value:function(){var e=this.state.status;return Object(a.jsxs)("div",{className:"date ".concat(e?"selected":""),onClick:this.handleClick,children:[Object(a.jsx)("h3",{className:"name",children:this.props.name}),Object(a.jsx)("h4",{className:"number",children:this.props.number}),Object(a.jsx)("div",{className:"ball"})]})}}]),s}(n.Component));function p(){return Object(a.jsxs)("div",{className:"WeekBlock",children:[Object(a.jsx)(f,{name:"Sun",number:"8"}),Object(a.jsx)(f,{name:"Mon",number:"9"}),Object(a.jsx)(f,{name:"Tue",number:"10"}),Object(a.jsx)(f,{name:"Wed",number:"11"}),Object(a.jsx)(f,{name:"The",number:"12"}),Object(a.jsx)(f,{name:"Fri",number:"13"}),Object(a.jsx)(f,{name:"Sat",number:"14"})]})}var N=s(6);s(20),s(21);function C(e){return Object(a.jsxs)("div",{className:"Power",children:[Object(a.jsxs)("div",{className:"number",children:["Power ",e.number]}),Object(a.jsx)("div",{className:"space"}),Object(a.jsx)("div",{className:"bar",children:Object(a.jsx)("div",{className:"grayLine",children:Object(a.jsx)("div",{className:"hotdog",style:{width:"".concat(e.lv,"%"),height:"100%"}})})})]})}var g=[50,50,50,50,50],w=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).handleRand=function(){e.setState({powerList:Object(N.a)(Array(5).keys()).map((function(){return 100*Math.random()}))})},e.handleReset=function(){e.setState({powerList:[].concat(g)})},e.state={powerList:[].concat(g)},e}return Object(d.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"PowerBlock",children:[this.state.powerList.map((function(e,t){return Object(a.jsx)(C,{lv:e,number:t+1},t)})),Object(a.jsxs)("div",{className:"ctrl",children:[Object(a.jsx)("div",{className:"ran",onClick:this.handleRand,children:"Random"}),Object(a.jsx)("div",{className:"space"}),Object(a.jsx)("div",{className:"res",onClick:this.handleReset,children:"Reset"})]})]})}}]),s}(n.Component),y=(s(22),function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).handleClick=function(t){var s=e.state.todoList,a=s.findIndex((function(e){return e.id===t}));s[a].isDone=!s[a].isDone,e.setState({todoList:s})},e.handleDelete=function(t){var s=e.state.todoList,a=s.findIndex((function(e){return e.id===t}));e.setState({todoList:[].concat(Object(N.a)(s.slice(0,a)),Object(N.a)(s.slice(a+1)))})},e.handleChangeTab=function(t){e.setState({tab:t})},e.state={tab:"all",todoList:[{id:1,text:"task 1 task 1 task 1 task 1 task 1 task 1",isDone:!1},{id:2,text:"task 2 task 2 task 2 task 2 task 2 task 2",isDone:!0},{id:3,text:"task 3 task 3 task 3 task 3 task 3 task 3",isDone:!1},{id:4,text:"task 4 task 4 task 4 task 4 task 4 task 4",isDone:!0},{id:5,text:"task 5 task 5 task 5 task 5 task 5 task 5",isDone:!1},{id:6,text:"task 6 task 6 task 6 task 6 task 6 task 6",isDone:!0}]},e}return Object(d.a)(s,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"ToDoListBlock",children:[Object(a.jsxs)("div",{className:"title ".concat(this.state.tab),children:[Object(a.jsx)("div",{onClick:this.handleChangeTab.bind(this,"all"),children:"All Task"}),Object(a.jsx)("div",{onClick:this.handleChangeTab.bind(this,"done"),children:"Done"}),Object(a.jsx)("div",{onClick:this.handleChangeTab.bind(this,"active"),children:"Active"})]}),Object(a.jsx)("div",{className:"list",children:this.state.todoList.filter((function(t){return"done"===e.state.tab?t.isDone:"active"!==e.state.tab||!t.isDone})).map((function(t){return Object(a.jsxs)("div",{className:"name ".concat(t.isDone?"line":""),children:[Object(a.jsx)("span",{onClick:e.handleClick.bind(e,t.id),children:t.text}),Object(a.jsx)("div",{style:{display:"inline-Block",width:"10px"}}),Object(a.jsx)("button",{className:"del",onClick:e.handleDelete.bind(e,t.id),children:"Delete"})]},t.id)}))})]})}}]),s}(n.Component)),D=(s(23),function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).state={},e}return Object(d.a)(s,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"dashboard",children:Object(a.jsxs)("div",{className:"outside",children:[Object(a.jsxs)("div",{className:"left",children:[Object(a.jsx)(h,{}),Object(a.jsx)(m,{}),Object(a.jsx)(v,{})]}),Object(a.jsx)("div",{className:"space"}),Object(a.jsxs)("div",{className:"right",children:[Object(a.jsx)(p,{}),Object(a.jsx)(w,{}),Object(a.jsx)(y,{})]})]})})}}]),s}(n.Component));l.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(D,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.f3557c7c.chunk.js.map