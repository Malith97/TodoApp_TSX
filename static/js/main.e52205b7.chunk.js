(this.webpackJsonptodotsx=this.webpackJsonptodotsx||[]).push([[0],{46:function(e,t,c){},74:function(e,t,c){},79:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(35),n=c.n(s),r=(c(74),c(65)),i=c(7),j=(c(46),c(75),c(83)),d=c(85),l=c(81),o=c(64),b=c(84),h=c(5),O=function(e){var t=e.task,c=e.completeTask,s=Object(a.useState)(!1),n=Object(i.a)(s,2),r=n[0],l=n[1];return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"bg-white rounded shadow p-6 m-4 ",children:Object(h.jsxs)(j.a,{children:[Object(h.jsx)(d.a,{span:2,children:Object(h.jsx)(b.a,{onChange:function(){l(!r)}})}),Object(h.jsx)(d.a,{span:18,children:Object(h.jsx)("h3",{className:r?"complete":"",children:t.taskName})}),Object(h.jsx)(d.a,{span:4,children:Object(h.jsx)(o.a,{type:"primary",danger:!0,onClick:function(){c(t.taskName)},children:"Delete"})})]})})})})};function m(){return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"bg-white rounded shadow p-6 m-4 ",children:[Object(h.jsx)("h1",{className:"header",children:"Hello Welcome to my TodoList"}),Object(h.jsx)("p",{children:"Developed By Malith Ileperuma"})]})})}var u=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)([]),b=Object(i.a)(n,2),u=b[0],x=b[1],p=function(e){x(u.filter((function(t){return t.taskName!=e})))};return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(m,{}),Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"bg-white rounded shadow p-6 m-4 ",children:Object(h.jsxs)(j.a,{children:[Object(h.jsx)(d.a,{span:16,children:Object(h.jsx)(l.a,{type:"text",placeholder:"Please Enter Your Task Here",name:"task",value:c,onChange:function(e){"task"===e.target.name&&s(e.target.value)}})}),Object(h.jsx)(d.a,{span:8,children:Object(h.jsx)(o.a,{type:"primary",block:!0,onClick:function(){var e={taskName:c};x([].concat(Object(r.a)(u),[e])),s("")},disabled:!c,children:"Add Task"})})]})})}),Object(h.jsx)("div",{className:"todoList",children:u.map((function(e,t){return Object(h.jsx)(O,{task:e,completeTask:p},t)}))})]})};n.a.render(Object(h.jsx)(u,{}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.e52205b7.chunk.js.map