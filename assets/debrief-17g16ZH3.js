import{H as m,d as f,e as h,f as w,h as v,u as _,j as k,k as b}from"./index-D84Ls8co.js";const p="upload-progress-mount",S=5e3,P=1e3;function A({session:e,endpoint:t,label:i}={}){if(!e)throw new Error("uploadProgressNode: session is required");return{type:m,stimulus:`
      <div style="display: grid; place-items: center; gap: 1.25rem; max-width: 36rem; margin: 0 auto;">
        <h2 style="margin: 0;">Saving your data</h2>
        <p style="margin: 0; opacity: 0.85;">Please don't close this tab — this usually takes only a few seconds.</p>
        <div id="${p}" style="font-size: 1.1rem;">Starting…</div>
      </div>
    `,choices:"NO_KEYS",on_load:function(){let o=!1;const n=r=>{o&&(r.key===" "||r.code==="Space")&&(r.preventDefault(),r.stopPropagation(),document.removeEventListener("keydown",n,!0),window.jsPsych.finishTrial())};document.addEventListener("keydown",n,!0),R({session:e,endpoint:t}).catch(r=>{console.error("[debrief] unexpected upload-flow error",r);const d=document.getElementById(p);d&&(d.innerHTML=y(r.message??"unknown error"))}).finally(()=>{o=!0})},on_finish:o=>{const n=window.__lastUploadSummary??{status:"unknown",uploadedBuckets:0,totalBuckets:0,uploadedRows:0,downloadFallback:!1};Object.assign(o,n);const r=v();o.storage_write_failures=r.writeFailures,o.storage_last_error=r.lastError,o.storage_last_failure_at=r.lastFailureAtIso},data:{phase:i??"upload_session_end"}}}async function R({session:e,endpoint:t}){const i=document.getElementById(p),o=s=>{i&&(i.innerHTML=s)};let n=0,r=0,d="";const a=await _({session:e,endpoint:t,onProgress:({bucketIndex:s,totalBuckets:u,bucketLabel:g})=>{n=s+1,r=u,d=g,o(E(n,r,d))}});let l=!1;if(a.status==="no_endpoint"||a.status==="partial")try{const s=await k(),u=b({session:e,rows:s});l=!0,o(T(a,u))}catch(s){o(y(s.message))}else a.status==="nothing_to_upload"?o(B()):o($(a));window.__lastUploadSummary={status:a.status,uploadedBuckets:a.uploadedBuckets,totalBuckets:a.totalBuckets,uploadedRows:a.uploadedRows,downloadFallback:l,last_error:a.lastError}}function E(e,t,i){const o=t>0?Math.round(e/t*100):0,n=i?`<div style="margin-top: 0.25rem; opacity: 0.7; font-size: 0.85em;"><code>${c(i)}</code></div>`:"";return`
    <div>Uploading file ${e} of ${t}…</div>
    ${n}
    <div style="margin-top: 0.5rem; width: 18rem; height: 0.5rem; background: #333; border-radius: 0.25rem; overflow: hidden;">
      <div style="width: ${o}%; height: 100%; background: #34d399; transition: width 0.2s;"></div>
    </div>
  `}function $(e){return`
    <div style="color: #0a7c4d;">✓ Saved (${e.uploadedRows} rows in ${e.uploadedBuckets} files).</div>
    <div style="margin-top: 0.75rem; opacity: 0.8;">Press <kbd>Space</kbd> to continue.</div>
  `}function B(){return`
    <div style="color: #0a7c4d;">✓ Already saved.</div>
    <div style="margin-top: 0.75rem; opacity: 0.8;">Press <kbd>Space</kbd> to continue.</div>
  `}function T(e,t){return`
    ${e.status==="no_endpoint"?'<div style="color: #8a6d00;">No upload server configured for this build.</div>':`<div style="color: #8a6d00;">Upload incomplete (${e.uploadedBuckets} / ${e.totalBuckets} files). Saved a copy to your device.</div>`}
    <div style="margin-top: 0.5rem; opacity: 0.85;">
      A file <code>${t.filename}</code> (${(t.sizeBytes/1024).toFixed(1)} KB) has been
      downloaded. Please email it to the experimenter if asked.
    </div>
    <div style="margin-top: 0.75rem; opacity: 0.8;">Press <kbd>Space</kbd> to continue.</div>
  `}function y(e){return`
    <div style="color: #b3261e;">Something went wrong: ${c(e)}</div>
    <div style="margin-top: 0.75rem; opacity: 0.8;">Press <kbd>Space</kbd> to continue.</div>
  `}function c(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function F({redirectDelayMs:e}={}){const t=e??S;return{type:m,stimulus:'<div id="completion-mount" style="display: grid; place-items: center; gap: 1rem; max-width: 36rem; margin: 0 auto;">Loading…</div>',choices:[" "],trial_duration:null,on_load:async function(){const i=document.getElementById("completion-mount");if(!i)return;const n=await f()??h();if(w(n)||!n){i.innerHTML=U(n),window.__completionRedirectAt=null;return}let d=Math.ceil(t/1e3);i.innerHTML=I(n,d);const a=setInterval(()=>{if(d-=1,d<=0){clearInterval(a),window.location.href=n;return}const l=document.getElementById("completion-countdown");l&&(l.textContent=String(d))},P);window.__completionRedirectAt=n},on_finish:i=>{i.completion_redirect_url=window.__completionRedirectAt??null,i.completion_was_placeholder=!window.__completionRedirectAt},data:{phase:"completion_redirect"}}}function U(e){return`
    <h2 style="margin: 0;">You're done — thank you!</h2>
    <p style="margin: 0;">This is a development build. The Prolific completion URL hasn't been
    locked yet, so we're not redirecting automatically.</p>
    <div style="opacity: 0.7; font-size: 0.9em; margin-top: 0.5rem;">
      Configured URL: <code>${c(e||"(none)")}</code>
    </div>
    <p style="margin-top: 1rem; opacity: 0.85;">Press <kbd>Space</kbd> to close.</p>
  `}function I(e,t){return`
    <h2 style="margin: 0;">Thank you!</h2>
    <p style="margin: 0;">Redirecting to Prolific in <span id="completion-countdown" style="font-weight: bold;">${t}</span> seconds…</p>
    <p style="margin-top: 0.5rem; opacity: 0.85;">
      If the redirect doesn't happen, <a href="${c(e)}" style="color: #60a5fa;">click here</a>.
    </p>
  `}export{F as c,A as u};
//# sourceMappingURL=debrief-17g16ZH3.js.map
