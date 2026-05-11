import"./modulepreload-polyfill-B5Qt9EMX.js";import{c as R,i as S,j as D,d as M,e as O,f as z,s as q,k as T,o as $}from"./pattern-DJ2cpVq8.js";import{c as A}from"./config-ChtrjH38.js";const I="./assets/rotation-arrow.png",k="#34d399",_=188,w=188,P=1.97,B="rgba(255, 255, 255, 0.7)",L="rgba(255, 255, 255, 0.88)",U="rgba(255, 255, 255, 0.86)",Q="rgba(255, 255, 255, 0.72)",G=2.2,X=2.1,Y=2.7,j=44,H=7,W=54,K=4,V=-10;function J(){const e=document.createElement("style");e.textContent=`
    #figure-board {
      width: 2720px;
      margin: 0 auto;
      padding: 28px 28px 24px;
      font-family: "Times New Roman", Times, serif;
      color: #111;
    }

    .figure-shell {
      border: 1.5px solid #111;
      background: #fff;
    }

    .figure-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 920px 920px;
    }

    .figure-panel {
      position: relative;
      padding: 18px 18px 16px;
      overflow: hidden;
    }

    .figure-panel.panel-right {
      border-left: 1.5px solid #111;
    }

    .figure-panel.panel-bottom {
      border-top: 1.5px solid #111;
    }

    .panel-title {
      position: absolute;
      top: 12px;
      left: 18px;
      right: 18px;
      text-align: center;
      font-size: 32px;
      line-height: 1.1;
      font-weight: 600;
    }

    .panel-mark {
      position: absolute;
      left: 8px;
      bottom: 4px;
      font-size: 56px;
      line-height: 1;
      font-weight: 700;
    }

    .panel-canvas {
      position: absolute;
      inset: 72px 14px 16px 14px;
    }

    .divider {
      position: absolute;
      left: 0;
      right: 0;
      height: 1px;
      background: #bebebe;
    }

    .row-label {
      position: absolute;
      left: 0;
      font-size: 25px;
      font-weight: 700;
      line-height: 1.1;
      white-space: nowrap;
      z-index: 50;
      background: rgba(255, 255, 255, 0.96);
      padding: 0 2px;
    }

    .row-label-dual {
      font-size: 22px;
      line-height: 1.05;
      white-space: normal;
    }

    .timing,
    .annotation,
    .fine-note,
    .mapping {
      position: absolute;
      line-height: 1.18;
      text-align: center;
      z-index: 30;
    }

    .timing {
      font-size: 24px;
      font-weight: 600;
    }

    .annotation {
      font-size: 21px;
    }

    .fine-note {
      font-size: 19px;
    }

    .mapping {
      font-size: 24px;
      text-align: left;
    }

    .keyline {
      margin: 0 0 12px;
    }

    .screen-card {
      position: absolute;
      width: ${_}px;
      height: ${w}px;
      background: #000;
      border: 1.5px solid #000;
      box-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.18);
      overflow: hidden;
      --mm: ${P}px;
      z-index: 1;
    }

    .screen-mount {
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
    }

    .tone-badge {
      position: absolute;
      top: 8px;
      right: 8px;
      padding: 2px 8px 3px;
      border: 1px solid #bdbdbd;
      background: rgba(255, 255, 255, 0.94);
      color: #111;
      border-radius: 999px;
      font-size: 13px;
      letter-spacing: 0.02em;
      text-transform: lowercase;
    }

    .card-stack {
      position: absolute;
    }

    .tiny-gap-note {
      position: absolute;
      font-size: 18px;
      line-height: 1.15;
      text-align: center;
    }

    .cue-arrow {
      position: absolute;
      top: 50%;
      left: 50%;
      width: ${A.imagery.rotation_arrow_size_px*.78}px;
      height: ${A.imagery.rotation_arrow_size_px*.78}px;
      transform: translate(-50%, -50%) rotate(45deg);
      pointer-events: none;
      user-select: none;
      z-index: 10;
    }
  `,document.head.appendChild(e)}function g(e,n,t){return e.style.left=`${n}px`,e.style.top=`${t}px`,e}function d(e,n,t,o,r){const a=document.createElement("div");return a.className=e,a.innerHTML=n.replace(/\n/g,"<br>"),g(a,t,o),r!=null&&(a.style.width=`${r}px`),a}function y(e,n,t=""){const o=document.createElement("section");o.className=`figure-panel ${t}`.trim();const r=document.createElement("div");r.className="panel-title",r.textContent=n;const a=document.createElement("div");a.className="panel-mark",a.textContent=e;const s=document.createElement("div");return s.className="panel-canvas",o.append(r,s,a),{panel:o,canvas:s}}function Z(e,n=45){const t=document.createElement("img");t.className="cue-arrow",t.src=I,t.alt="rotation cue",t.style.transform=`translate(-50%, -50%) rotate(${n}deg)`,e.wrapper.appendChild(t)}function h(e){return Number(e).toFixed(3).replace(/\.?0+$/,"")}function N(e,n){if(!e)return;const t=Number(e.getAttribute("r"));Number.isFinite(t)&&e.setAttribute("r",h(t*n))}function v(e,n,t=1.15){if(!e)return;const o=Number(e.getAttribute("x")),r=Number(e.getAttribute("y")),a=Number(e.getAttribute("width")),s=Number(e.getAttribute("height"));if(![o,r,a,s].every(Number.isFinite))return;const c=o+a/2,u=r+s/2,l=a*n,p=s*n;e.setAttribute("x",h(c-l/2)),e.setAttribute("y",h(u-p/2)),e.setAttribute("width",h(l)),e.setAttribute("height",h(p));const b=Number(e.getAttribute("stroke-width"));Number.isFinite(b)&&e.setAttribute("stroke-width",h(b*t))}function ee(e,n){if(!e)return;const t=e.getAttribute("points");if(!t)return;const o=t.trim().split(/\s+/).map(l=>l.split(",").map(Number)).filter(([l,p])=>Number.isFinite(l)&&Number.isFinite(p));if(!o.length)return;const r=o.map(([l])=>l),a=o.map(([,l])=>l),s=(Math.min(...r)+Math.max(...r))/2,c=(Math.min(...a)+Math.max(...a))/2,u=o.map(([l,p])=>`${h(s+(l-s)*n)},${h(c+(p-c)*n)}`).join(" ");e.setAttribute("points",u)}function te(e){const n=e.wrapper.querySelector(".grid-bullseye-ring");n&&(n.setAttribute("stroke",B),n.setAttribute("stroke-width","0.78")),e.centerDot&&(e.centerDot.setAttribute("fill",L),N(e.centerDot,1.35)),e.fixationEl&&(e.fixationEl.setAttribute("fill",U),e.fixationEl.setAttribute("font-size","10.4")),e.wrapper.querySelectorAll(".dot").forEach(t=>N(t,G)),e.wrapper.querySelectorAll(".dummy-open-square").forEach(t=>{v(t,X,1.35),t.setAttribute("stroke",Q)}),e.wrapper.querySelectorAll(".star").forEach(t=>ee(t,Y))}function i({rotation_deg:e=0,fixation:n="",show_pattern:t=!1,dot_cell:o=null,dot_color:r="#fff",square_cell:a=null,star_cell:s=null,star_color:c="#fff",arrow_deg:u=null}={}){return l=>{const p=R({rotation_deg:e,fixation:n});return l.appendChild(p.wrapper),t&&(S(p),D(p)),typeof o=="number"&&M(p,o,{color:r}),typeof a=="number"&&O(p,a),typeof s=="number"&&z(p,s,{color:c}),typeof u=="number"&&Z(p,u),te(p),p}}function f(e,{badge:n=""}={}){const t=document.createElement("div");t.className="screen-card";const o=document.createElement("div");if(o.className="screen-mount",t.appendChild(o),e(o),n){const r=document.createElement("div");r.className="tone-badge",r.textContent=n,t.appendChild(r)}return t}function m(e,n,t,o,r={}){const a=f(n,r);return g(a,t,o),e.append(a),a}function x(e){const n=document.createElement("div");n.className="card-stack";let t=0,o=0,r=_,a=w;return e.forEach((s,c)=>{const u=s.kind??"stim",l=u==="frame"?V:0,p=t+(s.offsetX??0),b=o+(s.offsetY??l),C=f(s.scene,{badge:s.badge??""});if(g(C,p,b),n.appendChild(C),r=Math.max(r,p+_),a=Math.max(a,b+w),c<e.length-1){const F=e[c+1].kind??"stim",E=u==="frame"||F==="frame";t+=E?W:j,o+=E?K:H}}),n.style.width=`${r}px`,n.style.height=`${a}px`,n}function ne(e,n,t){const o=document.createElement("div");o.className="divider",o.style.top="398px",e.appendChild(o),e.appendChild(d("row-label","Dot-only",2,156,102)),e.appendChild(d("timing","Both-arrow start",132,6,188)),e.appendChild(d("timing","2000 ms",1048,8,126)),e.appendChild(d("timing","3 yes/no probes",1148,40,164)),m(e,i(),132,48),m(e,i({dot_cell:n[0]}),372,48),m(e,i({square_cell:t[0]}),612,48);const r=x([{scene:i({dot_cell:t[5]})},{scene:i({square_cell:n[4]})},{scene:i({dot_cell:n[8]})},{scene:i({fixation:"?"}),kind:"frame"},{scene:i({fixation:"?",dot_cell:n[2]}),kind:"frame"}]);g(r,848,48),e.append(r),e.appendChild(d("fine-note","3 dots (1000 ms + 500-ms ISI) and 3 open-square placeholders (3000 ms + 500-ms offset)",178,306,520)),e.appendChild(d("fine-note","3000-ms onsets + 500-ms offsets",858,306,280)),e.appendChild(d("row-label","Tone-only",2,560,112)),e.appendChild(d("timing","Both-arrow start",132,432,188)),e.appendChild(d("timing","2000 ms",1048,434,126)),e.appendChild(d("timing","3 yes/no probes",1148,466,164)),m(e,i(),132,474),m(e,i(),372,474,{badge:"tone"}),m(e,i({square_cell:t[7]}),612,474);const a=x([{scene:i(),badge:"tone"},{scene:i({square_cell:n[10]})},{scene:i(),badge:"tone"},{scene:i({fixation:"?"}),kind:"frame"},{scene:i({fixation:"?"}),badge:"tone",kind:"frame"}]);g(a,848,474),e.append(a),e.appendChild(d("fine-note","3 tones (350 ms + 1150-ms silence) and 3 open-square placeholders (3000 ms + 500-ms offset)",174,734,520)),e.appendChild(d("fine-note","3000-ms onsets + 500-ms offsets",858,734,280))}function ie(e,n,t){e.appendChild(d("timing","Periodic reminder<br>4000 ms",24,6,208)),e.appendChild(d("timing","Rotation cue<br>2000 ms",274,6,184)),e.appendChild(d("timing","Both-arrow gate",520,6,188)),e.appendChild(d("timing","Star sequence",852,6,276)),m(e,i({show_pattern:!0}),30,102),m(e,i({arrow_deg:45}),278,102),m(e,i(),526,102);const o=x([{scene:i({rotation_deg:45,star_cell:n[5]})},{scene:i({rotation_deg:45,square_cell:t[1]})},{scene:i({rotation_deg:45,star_cell:t[6]})},{scene:i({rotation_deg:45,square_cell:n[11]})},{scene:i({rotation_deg:45,star_cell:n[2]})}]);g(o,806,102),e.append(o),e.appendChild(d("annotation","3 stars and 3 open-square placeholders<br>3000-ms onsets + 500-ms offsets; no retention or recognition test",836,390,410)),e.appendChild(d("fine-note","The reminder did not appear on every imagery trial. It was shown before imagery segments and then every 8 trials thereafter.",220,698,780))}function oe(e,n,t){const o=document.createElement("div");o.className="divider",o.style.top="398px",e.appendChild(o),e.appendChild(d("row-label row-label-dual","Star-dot<br>(dual)",2,154,96)),e.appendChild(d("timing","Pattern reminder",116,6,188)),e.appendChild(d("timing","Rotation cue",364,6,170)),e.appendChild(d("timing","Both-arrow gate",612,6,188)),e.appendChild(d("timing","2000 ms",1104,8,124)),e.appendChild(d("timing","3 yes/no probes",1188,40,146)),m(e,i({show_pattern:!0}),116,102),m(e,i({arrow_deg:45}),364,102),m(e,i(),612,102);const r=x([{scene:i({dot_cell:n[1]})},{scene:i({rotation_deg:45,star_cell:n[5]})},{scene:i({dot_cell:t[4]})},{scene:i({rotation_deg:45,star_cell:t[6]})},{scene:i({dot_cell:n[9]})},{scene:i({fixation:"?"}),kind:"frame"},{scene:i({fixation:"?",dot_cell:t[3]}),kind:"frame"}]);g(r,860,102),e.append(r),e.appendChild(d("fine-note","3 dots and 3 stars",774,344,228)),e.appendChild(d("fine-note","3000-ms onsets + 500-ms offsets",1020,344,292)),e.appendChild(d("row-label row-label-dual","Star-tone<br>(dual)",2,562,102)),e.appendChild(d("timing","Pattern reminder",116,436,188)),e.appendChild(d("timing","Rotation cue",364,436,170)),e.appendChild(d("timing","Both-arrow gate",612,436,188)),e.appendChild(d("timing","2000 ms",1104,438,124)),e.appendChild(d("timing","3 yes/no probes",1188,470,146)),m(e,i({show_pattern:!0}),116,514),m(e,i({arrow_deg:45}),364,514),m(e,i(),612,514);const a=x([{scene:i(),badge:"tone"},{scene:i({rotation_deg:45,star_cell:n[4]})},{scene:i(),badge:"tone"},{scene:i({rotation_deg:45,star_cell:t[9]})},{scene:i(),badge:"tone"},{scene:i({fixation:"?"}),kind:"frame"},{scene:i({fixation:"?"}),badge:"tone",kind:"frame"}]);g(a,860,514),e.append(a),e.appendChild(d("fine-note","3 tones and 3 stars",774,756,228)),e.appendChild(d("fine-note","3000-ms onsets + 500-ms offsets",1020,756,292))}function re(e,n,t){const o=f(i({square_cell:t[0]})),r=f(i({rotation_deg:45,star_cell:n[5]})),a=f(i({fixation:"?",dot_cell:t[4],dot_color:k})),s=f(u=>{const l=R({rotation_deg:0,fixation:"?"});u.appendChild(l.wrapper),q(l,"?",{color:k})});g(o,40,72),g(r,296,72),g(a,40,368),g(s,296,368),e.append(o,r,a,s),e.appendChild(d("annotation","Placeholder to ignore",20,272,236)),e.appendChild(d("annotation","Star judgment on the<br>rotated pattern",276,272,236)),e.appendChild(d("annotation","Visual-memory feedback",20,568,236)),e.appendChild(d("annotation","Auditory-memory feedback",276,568,236));const c=document.createElement("div");c.className="mapping",g(c,610,98),c.style.width="560px",c.innerHTML=`
    <div class="keyline"><strong>Memory probes</strong><br>Yes = studied<br>No = new</div>
    <div class="keyline"><strong>Star judgments</strong><br>On-pattern = on the rotated pattern<br>Not on-pattern = off the rotated pattern</div>
    <div class="keyline"><strong>Feedback rule</strong><br>Only answered stars and answered memory probes were recoloured.</div>
    <div><strong>Auditory note</strong><br>Tone-bearing events were heard through the participant's audio output while the grid display itself stayed visually unchanged.</div>
  `,e.appendChild(c)}function ae(){J();const e=document.getElementById("figure-board"),n=document.createElement("div");n.className="figure-shell";const t=document.createElement("div");t.className="figure-grid",n.appendChild(t),e.appendChild(n);const o=$(),r=T(),a=y("A","Single-task working-memory trials");ne(a.canvas,o,r),t.appendChild(a.panel);const s=y("B","Imagery-only trial and periodic reminder","panel-right");ie(s.canvas,o,r),t.appendChild(s.panel);const c=y("C","Dual-task trial structures","panel-bottom");oe(c.canvas,o,r),t.appendChild(c.panel);const u=y("D","Representative displays and response logic","panel-right panel-bottom");re(u.canvas,o,r),t.appendChild(u.panel),document.body.dataset.captureReady="true"}ae();
//# sourceMappingURL=figure-board-Db4i2-59.js.map
