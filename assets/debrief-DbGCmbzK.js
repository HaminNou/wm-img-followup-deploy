import{H as g}from"./index-Vh1_s8Sq.js";import{k as h,b as w,i as v,l as _,u as k,g as b,m as S}from"./uploader-CTeutibu.js";const $=["display: inline-block","margin: 1.25rem auto 0.25rem","padding: 0.65rem 1.3rem","background: #FFFFFF","color: #000000","font-size: 1.05rem","font-weight: 600","line-height: 1.3","border: 1.5px solid #000000","border-radius: 0.55rem","box-shadow: 0 1px 2px rgba(0,0,0,0.10)","text-align: center","max-width: 44rem"].join("; ");function c(e){return`<div style="text-align: center; width: 100%;"><div style="${$}">${e}</div></div>`}const m="upload-progress-mount",P=5e3,R=1e3;function M({session:e,endpoint:t,label:i}={}){if(!e)throw new Error("uploadProgressNode: session is required");return{type:g,stimulus:`
      <div style="display: grid; place-items: center; gap: 1.25rem; max-width: 36rem; margin: 0 auto;">
        <h2 style="margin: 0;">Saving your data</h2>
        <p style="margin: 0; opacity: 0.85;">Please don't close this tab — this usually takes only a few seconds.</p>
        <div id="${m}" style="font-size: 1.1rem;">Starting…</div>
      </div>
    `,choices:"NO_KEYS",on_load:function(){let o=!1;const n=r=>{o&&(r.key===" "||r.code==="Space")&&(r.preventDefault(),r.stopPropagation(),document.removeEventListener("keydown",n,!0),window.jsPsych.finishTrial())};document.addEventListener("keydown",n,!0),E({session:e,endpoint:t}).catch(r=>{console.error("[debrief] unexpected upload-flow error",r);const d=document.getElementById(m);d&&(d.innerHTML=f(r.message??"unknown error"))}).finally(()=>{o=!0})},on_finish:o=>{const n=window.__lastUploadSummary??{status:"unknown",uploadedBuckets:0,totalBuckets:0,uploadedRows:0,downloadFallback:!1};Object.assign(o,n);const r=_();o.storage_write_failures=r.writeFailures,o.storage_last_error=r.lastError,o.storage_last_failure_at=r.lastFailureAtIso},data:{phase:i??"upload_session_end"}}}async function E({session:e,endpoint:t}){const i=document.getElementById(m),o=s=>{i&&(i.innerHTML=s)};let n=0,r=0,d="";const a=await k({session:e,endpoint:t,onProgress:({bucketIndex:s,totalBuckets:p,bucketLabel:y})=>{n=s+1,r=p,d=y,o(T(n,r,d))}});let l=!1;if(a.status==="no_endpoint"||a.status==="partial")try{const s=await b(),p=S({session:e,rows:s});l=!0,o(L(a,p))}catch(s){o(f(s.message))}else a.status==="nothing_to_upload"?o(F()):o(B(a));window.__lastUploadSummary={status:a.status,uploadedBuckets:a.uploadedBuckets,totalBuckets:a.totalBuckets,uploadedRows:a.uploadedRows,downloadFallback:l,last_error:a.lastError}}function T(e,t,i){const o=t>0?Math.round(e/t*100):0,n=i?`<div style="margin-top: 0.25rem; opacity: 0.7; font-size: 0.85em;"><code>${u(i)}</code></div>`:"";return`
    <div>Uploading file ${e} of ${t}…</div>
    ${n}
    <div style="margin-top: 0.5rem; width: 18rem; height: 0.5rem; background: #333; border-radius: 0.25rem; overflow: hidden;">
      <div style="width: ${o}%; height: 100%; background: #34d399; transition: width 0.2s;"></div>
    </div>
  `}function B(e){return`
    <div style="color: #0a7c4d;">✓ Saved (${e.uploadedRows} rows in ${e.uploadedBuckets} files).</div>
    ${c("Press <kbd>Space</kbd> to continue.")}
  `}function F(){return`
    <div style="color: #0a7c4d;">✓ Already saved.</div>
    ${c("Press <kbd>Space</kbd> to continue.")}
  `}function L(e,t){return`
    ${e.status==="no_endpoint"?'<div style="color: #8a6d00;">No upload server configured for this build.</div>':`<div style="color: #8a6d00;">Upload incomplete (${e.uploadedBuckets} / ${e.totalBuckets} files). Saved a copy to your device.</div>`}
    <div style="margin-top: 0.5rem; opacity: 0.85;">
      A file <code>${t.filename}</code> (${(t.sizeBytes/1024).toFixed(1)} KB) has been
      downloaded. Please email it to the experimenter if asked.
    </div>
    ${c("Press <kbd>Space</kbd> to continue.")}
  `}function f(e){return`
    <div style="color: #b3261e;">Something went wrong: ${u(e)}</div>
    ${c("Press <kbd>Space</kbd> to continue.")}
  `}function u(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function C({redirectDelayMs:e}={}){const t=e??P;return{type:g,stimulus:'<div id="completion-mount" style="display: grid; place-items: center; gap: 1rem; max-width: 36rem; margin: 0 auto;">Loading…</div>',choices:[" "],trial_duration:null,on_load:async function(){const i=document.getElementById("completion-mount");if(!i)return;const n=await h()??w();if(v(n)||!n){i.innerHTML=x(n),window.__completionRedirectAt=null;return}let d=Math.ceil(t/1e3);i.innerHTML=I(n,d);const a=setInterval(()=>{if(d-=1,d<=0){clearInterval(a),window.location.href=n;return}const l=document.getElementById("completion-countdown");l&&(l.textContent=String(d))},R);window.__completionRedirectAt=n},on_finish:i=>{i.completion_redirect_url=window.__completionRedirectAt??null,i.completion_was_placeholder=!window.__completionRedirectAt},data:{phase:"completion_redirect"}}}function x(e){return`
    <h2 style="margin: 0;">You're done — thank you!</h2>
    <p style="margin: 0;">This is a development build. The Prolific completion URL hasn't been
    locked yet, so we're not redirecting automatically.</p>
    <div style="opacity: 0.7; font-size: 0.9em; margin-top: 0.5rem;">
      Configured URL: <code>${u(e||"(none)")}</code>
    </div>
    ${c("Press <kbd>Space</kbd> to close.")}
  `}function I(e,t){return`
    <h2 style="margin: 0;">Thank you!</h2>
    <p style="margin: 0;">Redirecting to Prolific in <span id="completion-countdown" style="font-weight: bold;">${t}</span> seconds…</p>
    <p style="margin-top: 0.5rem; opacity: 0.85;">
      If the redirect doesn't happen, <a href="${u(e)}" style="color: #60a5fa;">click here</a>.
    </p>
  `}export{C as a,c,M as u};
//# sourceMappingURL=debrief-DbGCmbzK.js.map
