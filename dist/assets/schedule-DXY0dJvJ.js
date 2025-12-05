import{o as h,b as u,g as m,d as p,c as o,k as $,j as f}from"./app-dDW-M8-3.js";import"./site-navbar-DWh6iYwt.js";const y=["08:30","09:30","10:20","10:30","11:30","12:20","13:30","14:20","14:30","15:20","15:30","16:20","16:30","17:20"],n=["Mon","Tue","Wed","Thu","Fri"];function S(t){t=t.toString().padStart(4,"0");const a=t.slice(0,2),s=t.slice(2);return`${a}:${s}`}function b(){let t=`
    <table id="scheduleGrid">
      <thead>
        <tr>
          <th>Time</th>
          ${n.map(a=>`<th>${a}</th>`).join("")}
        </tr>
      </thead>
      <tbody>
  `;y.forEach(a=>{t+=`
      <tr>
        <td>${a}</td>
        ${n.map(s=>`<td class="day-td" data-day="${s}" data-time="${a}"></td>`).join("")}
      </tr>
    `}),t+=`
      </tbody>
    </table>
  `,document.getElementById("scheduleTable").innerHTML=t}function T(t,a,s){const d=S(a),e=document.querySelector(`td.day-td[data-day="${t}"][data-time="${d}"]`);e?(e.textContent=s,e.classList.add("classBG")):console.warn("Could not place class:",s,"→",d)}async function g(t){const s="set"+(await m(p(o,"users",t))).data().set.slice(-1).toUpperCase();b(),(await $(f(o,"schedules",s,"Class"))).forEach(e=>{const c=e.data(),i=`${e.id.split("_")[0]} ${c.type}`;Object.entries(c.days).forEach(([l,r])=>{T(l,r.start,i)})})}h(u,t=>{t&&g(t.uid)});
