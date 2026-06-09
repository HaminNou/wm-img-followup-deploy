import"./modulepreload-polyfill-B5Qt9EMX.js";import{c as f}from"./config-DSJqK44t.js";import{i as b,g as w,b as y,c as $,d as v,e as _,p as x,u as I}from"./uploader-DqcxzQhC.js";const P=document.getElementById("mount");function d(s){P.innerHTML=`<h2>Data Recovery</h2>${s}`}function r(s){return String(s).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function S(){let s;try{s=(await b()).kind}catch{d(`
      <p class="error">Could not open browser storage. This can happen if you
      cleared your browser data or are using a different browser than the one
      you used for the experiment.</p>
    `);return}if(s==="memory"){d(`
      <p class="error">No persistent storage found. IndexedDB is unavailable in
      this browser. Please use the same browser you used for the experiment
      (Chrome, Firefox, or Edge on a desktop computer).</p>
    `);return}const t=await w();if(!t||t.length===0){d(`
      <p class="warn">No session data found in this browser. This can happen if:</p>
      <ul>
        <li>You cleared your browser data since the experiment</li>
        <li>You are using a different browser or device</li>
        <li>You are in a private/incognito window</li>
      </ul>
      <p>If you have the downloaded JSON file, please send it to the
      researcher through Prolific messaging.</p>
    `);return}const i=await y(),n=await $(),o=await v(),e=await _(),u=x(t).filter(a=>a.rows.length>0),l=t.filter(a=>a.seq>o);if(l.length===0){d(`
      <p class="success">All data from this session has already been uploaded
      successfully. No recovery is needed.</p>
      <table class="meta-table">
        <tr><td>Session</td><td><code>${r(i)}</code></td></tr>
        <tr><td>Total rows</td><td>${t.length}</td></tr>
      </table>
    `);return}let c=e;if(!c){const a=new URLSearchParams(window.location.search),g=a.get("PROLIFIC_PID")||null,m=a.get("STUDY_ID")||null;c={params:{session_id:i,prolific_pid:g,study_id:m,is_preview:!1},prng_seed_uint32:0,schema_version:f.schema_version,build_id:f.build_id,is_pilot_run:!1,pilot_label:null,started_at_iso:n,user_agent:navigator.userAgent}}const p=t.length-l.length;d(`
    <p>Found session data that was not fully uploaded.</p>
    <table class="meta-table">
      <tr><td>Session</td><td><code>${r(i)}</code></td></tr>
      <tr><td>Started</td><td>${r(n??"unknown")}</td></tr>
      <tr><td>Total rows</td><td>${t.length}</td></tr>
      <tr><td>Already uploaded</td><td>${p} rows</td></tr>
      <tr><td>Pending upload</td><td>${l.length} rows</td></tr>
      <tr><td>Files to upload</td><td>${u.length}</td></tr>
    </table>
    <p>Click the button below to re-upload your data. This usually takes a few seconds.</p>
    <button id="upload-btn">Upload my data</button>
    <div id="progress-area" class="hidden">
      <div class="progress-bar"><div class="progress-bar-fill" id="bar-fill"></div></div>
      <div class="status" id="status-text">Starting&hellip;</div>
    </div>
  `),document.getElementById("upload-btn").addEventListener("click",()=>{T(c)})}async function T(s){const t=document.getElementById("upload-btn"),i=document.getElementById("progress-area"),n=document.getElementById("bar-fill"),o=document.getElementById("status-text");t.disabled=!0,t.textContent="Uploading…",i.classList.remove("hidden");try{const e=await I({session:s,onProgress:({bucketIndex:h,totalBuckets:u,bucketLabel:l,status:c})=>{const p=h+1,a=Math.round(p/u*100);n.style.width=`${a}%`;const g=c==="ok"?"✓":"✗";o.textContent=`${g} File ${p} of ${u} (${l})`}});e.status==="uploaded"?(n.style.width="100%",o.innerHTML=`<span class="success">✓ All data uploaded successfully
        (${e.uploadedRows} rows in ${e.uploadedBuckets} files).</span>
        <br><br>You can close this page. Thank you!`,t.textContent="Done"):e.status==="nothing_to_upload"?(o.innerHTML='<span class="success">✓ All data was already uploaded. Nothing to do.</span>',t.textContent="Done"):e.status==="partial"?(n.style.background="#f59e0b",o.innerHTML=`<span class="warn">Partial upload: ${e.uploadedBuckets} of
        ${e.totalBuckets} files sent.</span>
        <br>Error: <code>${r(e.lastError)}</code>
        <br><br>Please try again, or contact the researcher through Prolific messaging.`,t.disabled=!1,t.textContent="Retry"):(o.innerHTML=`<span class="error">Upload could not start (${r(e.status)}).
        Please contact the researcher through Prolific messaging.</span>`,t.disabled=!1,t.textContent="Retry")}catch(e){o.innerHTML=`<span class="error">Unexpected error: ${r(e.message)}</span>
      <br><br>Please try again, or contact the researcher through Prolific messaging.`,t.disabled=!1,t.textContent="Retry"}}S().catch(s=>{console.error("[recover] fatal error",s),d(`<p class="error">Something went wrong: ${r(s.message)}</p>`)});
//# sourceMappingURL=recover-B9N4F4YE.js.map
