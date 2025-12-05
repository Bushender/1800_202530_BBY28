import{o as A,f as m,h as Y,d as r,c as o,g as E,i as M,j as D,u as v,q as C,w as F,k as R,m as S,n as U}from"./app-dDW-M8-3.js";import"./site-navbar-DWh6iYwt.js";A(m(),t=>{t?y(t):console.log("No user logged in")});const $=document.getElementById("addButton"),I=document.getElementById("assignmentForm"),q=document.getElementById("createBtn"),T=document.getElementById("cancelBtn"),h=document.getElementById("overlay"),k=document.getElementById("editForm"),V=document.getElementById("editCancelBtn"),b=document.getElementById("assignmentContainer"),H=document.getElementById("deleteBtn");let w=null;T.addEventListener("click",g);V.addEventListener("click",g);H.addEventListener("click",async()=>{await Y(r(o,"assignments",w)),y(m().currentUser),g()});function g(){I.style.display="none",k.style.display="none",h.style.display="none"}$.addEventListener("click",()=>{I.style.display="flex",h.style.display="block"});q.addEventListener("click",async()=>{const t=m().currentUser,s=document.getElementById("className").value,n=document.getElementById("assignmentName").value,e=document.getElementById("dueDate").value.trim();if(!x(e)){alert("Please enter a valid date in YYYY-MM-DD format.");return}const a=r(o,"users",t.uid),i=(await E(a)).data().set;await M(D(o,"assignments"),{className:s,name:n,dueDate:e,set:i}),g(),y(t)});async function P(t,s){const n=m().currentUser,e=r(o,"users",n.uid);s?await v(e,{done:S(t)}):await v(e,{done:U(t)})}function p(t,s,n=!1){const e=document.createElement("div");e.classList.add("assignmentItem"),e.dataset.id=t,n&&e.classList.add("assignment-done"),e.innerHTML=`
    <div class="checkboxContainer">
      <input class="checkbox" type="checkbox" id="check-${t}">
      <label class="circle" for="check-${t}"></label>
    </div>

    <div class="assignmentBox">
      <div class="top">${s.name}
        <button class="editBtn">
          <img src="images/edit_icon.png" alt="menu" class="edit">
        </button>
      </div>
      <div class="bottom">${s.className}
      <span class="dueDate">${s.dueDate}</span>
      </div>
    </div>
    `,b.appendChild(e);const a=e.querySelector(".checkbox");a.checked=n,a.addEventListener("change",async c=>{await P(t,c.target.checked),y(m().currentUser)})}async function y(t){const s=r(o,"users",t.uid),n=await E(s),e=n.data().set;n.data().done||await v(s,{done:[]});const a=n.data().done,c=C(D(o,"assignments"),F("set","==",e)),i=await R(c);let u=[],f=[];i.forEach(d=>{a.includes(d.id)?u.push(d):f.push(d)});const l=document.getElementById("assignmentContainer");l.innerHTML="",u.length==0&&f.length==0?l.innerHTML=`
    <div id="noneBox">
      <h1 id="noneText">No assignments have been added yet.</h1>
    </div>
    `:(f.forEach(d=>p(d.id,d.data())),u.forEach(d=>p(d.id,d.data(),!0)))}function x(t){if(!/^\d{4}-\d{2}-\d{2}$/.test(t))return!1;const[n,e,a]=t.split("-").map(Number);if(e<1||e>12||a<1||a>31)return!1;const c=new Date(n,e-1,a);return c.getFullYear()===n&&c.getMonth()===e-1&&c.getDate()===a}b.addEventListener("click",async t=>{const s=t.target,n=s.closest(".assignmentItem");if(!n)return;const e=n.dataset.id;if(s.closest(".editBtn")){w=e;const a=document.getElementById("classEdit"),c=document.getElementById("assignmentEdit"),i=document.getElementById("dateEdit"),u=r(o,"assignments",e),l=(await E(u)).data();k.style.display="flex",h.style.display="block",a.value=l.className,c.value=l.name,i.value=l.dueDate,document.getElementById("saveBtn").onclick=async()=>{const d=a.value,L=c.value,B=i.value.trim();if(!x(B)){alert("Please enter a valid date in YYYY-MM-DD format.");return}const N=r(o,"assignments",e);await v(N,{className:d,name:L,dueDate:B}),g(),y(m().currentUser)}}});
