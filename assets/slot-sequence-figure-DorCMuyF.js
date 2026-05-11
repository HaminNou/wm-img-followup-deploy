import"./modulepreload-polyfill-B5Qt9EMX.js";const c=["M","S","S","M","M","S","M","S"],p="#767676",m=[{label:"star-only",mapping:{M:"square",S:"star"}},{label:"dot-only",mapping:{M:"dot",S:"square"}},{label:"tone-only",mapping:{M:"tone",S:"square"}},{label:"star-dot (dual)",mapping:{M:"dot",S:"star"}},{label:"star-tone (dual)",mapping:{M:"tone",S:"star"}}];function u(){const e=document.createElement("style");e.textContent=`
    #slot-sequence-figure {
      width: 1880px;
      margin: 0 auto;
      padding: 28px 30px;
      font-family: "Times New Roman", Times, serif;
      color: #111;
    }

    .slot-shell {
      border: 1.5px solid #111;
      background: #fff;
      padding: 26px 30px 24px;
    }

    .slot-title {
      margin: 0 0 14px;
      text-align: center;
      font-size: 30px;
      line-height: 1.1;
      font-weight: 600;
    }

    .slot-row {
      display: grid;
      grid-template-columns: 240px 1fr;
      gap: 20px;
      align-items: center;
      margin-bottom: 18px;
    }

    .slot-row:last-child {
      margin-bottom: 0;
    }

    .slot-row-header {
      margin-bottom: 8px;
    }

    .slot-label {
      font-size: 30px;
      font-weight: 700;
      line-height: 1.08;
      text-align: left;
    }

    .slot-header-strip {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      gap: 0;
      padding: 0 12px;
    }

    .slot-header-cell {
      text-align: center;
      font-size: 22px;
      font-weight: 600;
      line-height: 1;
    }

    .slot-lane {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      gap: 0;
      border: 1.4px solid #222;
      border-radius: 24px;
      background: #fbfbfb;
      overflow: hidden;
      min-height: 96px;
    }

    .slot-cell {
      display: grid;
      justify-items: center;
      align-items: center;
      padding: 18px 6px;
      border-right: 1px solid #d2d2d2;
    }

    .slot-cell:last-child {
      border-right: none;
    }

    .slot-icon {
      width: 52px;
      height: 52px;
      display: grid;
      place-items: center;
    }
  `,document.head.appendChild(e)}function i(e,t={}){const n=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.entries(t).forEach(([o,l])=>n.setAttribute(o,String(l))),n}function h(e,t,n,o=n*.42){const l=[];for(let a=0;a<10;a++){const r=a%2===0?n:o,s=-Math.PI/2+a*Math.PI/5;l.push(`${e+r*Math.cos(s)},${t+r*Math.sin(s)}`)}return l.join(" ")}function d(e){const t=i("svg",{viewBox:"0 0 52 52",width:52,height:52,"aria-hidden":"true"});return e(t),t}function g(){return d(e=>{e.appendChild(i("circle",{cx:26,cy:26,r:8.5,fill:"#111"}))})}function f(){return d(e=>{e.appendChild(i("rect",{x:17,y:17,width:18,height:18,fill:"none",stroke:p,"stroke-width":2.6}))})}function x(){return d(e=>{e.appendChild(i("polygon",{points:h(26,26,11.5),fill:"#111"}))})}function w(){return d(e=>{e.appendChild(i("rect",{x:11,y:19,width:8,height:14,fill:"#111"})),e.appendChild(i("polygon",{points:"19,17 30,10 30,42 19,35",fill:"#111"})),e.appendChild(i("path",{d:"M33 20 Q39 26 33 32",fill:"none",stroke:"#111","stroke-width":2.4,"stroke-linecap":"round"})),e.appendChild(i("path",{d:"M37 15 Q47 26 37 37",fill:"none",stroke:"#111","stroke-width":2.4,"stroke-linecap":"round"}))})}function b(e){if(e==="dot")return g();if(e==="square")return f();if(e==="star")return x();if(e==="tone")return w();throw new Error(`Unknown slot icon kind: ${e}`)}function E(e){const t=document.createElement("div");t.className="slot-row";const n=document.createElement("div");n.className="slot-label",n.textContent=e.label;const o=document.createElement("div");return o.className="slot-lane",c.forEach(l=>{const a=e.mapping[l],r=document.createElement("div");r.className="slot-cell";const s=document.createElement("div");s.className="slot-icon",s.appendChild(b(a)),r.append(s),o.appendChild(r)}),t.append(n,o),t}function y(){const e=document.createElement("div");e.className="slot-row slot-row-header";const t=document.createElement("div"),n=document.createElement("div");n.className="slot-header-strip";for(let o=1;o<=8;o++){const l=document.createElement("div");l.className="slot-header-cell",l.textContent=String(o),n.appendChild(l)}return e.append(t,n),e}function C(){u();const e=document.getElementById("slot-sequence-figure"),t=document.createElement("div");t.className="slot-shell";const n=document.createElement("div");n.className="slot-title",n.textContent="Illustrative Eight-Slot Event Sequence by Trial Type",t.append(n),t.appendChild(y()),m.forEach(o=>t.appendChild(E(o))),e.appendChild(t),document.body.dataset.captureReady="true"}C();
//# sourceMappingURL=slot-sequence-figure-DorCMuyF.js.map
