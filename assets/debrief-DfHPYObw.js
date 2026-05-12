import{H as p,d as h,e as y,f as g,h as f,u as w,j as v,k as _}from"./index-Bz6dieJX.js";const c="upload-progress-mount",k=5e3,b=1e3;function I({session:e,endpoint:o,label:i}={}){if(!e)throw new Error("uploadProgressNode: session is required");return{type:p,stimulus:`
      <div style="display: grid; place-items: center; gap: 1.25rem; max-width: 36rem; margin: 0 auto;">
        <h2 style="margin: 0;">Saving your data</h2>
        <p style="margin: 0; opacity: 0.85;">Please don't close this tab — this usually takes only a few seconds.</p>
        <div id="${c}" style="font-size: 1.1rem;">Starting…</div>
      </div>
    `,choices:"NO_KEYS",on_load:function(){let r=!1;const a=n=>{r&&(n.key===" "||n.code==="Space")&&(n.preventDefault(),n.stopPropagation(),document.removeEventListener("keydown",a,!0),window.jsPsych.finishTrial())};document.addEventListener("keydown",a,!0),S({session:e,endpoint:o}).catch(n=>{console.error("[debrief] unexpected upload-flow error",n);const t=document.getElementById(c);t&&(t.innerHTML=m(n.message??"unknown error"))}).finally(()=>{r=!0})},on_finish:r=>{const a=window.__lastUploadSummary??{status:"unknown",uploadedChunks:0,totalChunks:0,uploadedRows:0,downloadFallback:!1};Object.assign(r,a);const n=f();r.storage_write_failures=n.writeFailures,r.storage_last_error=n.lastError,r.storage_last_failure_at=n.lastFailureAtIso},data:{phase:i??"upload_session_end"}}}async function S({session:e,endpoint:o}){const i=document.getElementById(c),r=d=>{i&&(i.innerHTML=d)};let a=0,n=0;const t=await w({session:e,endpoint:o,onProgress:({chunkIndex:d,totalChunks:l})=>{a=d+1,n=l,r(P(a,n))}});let s=!1;if(t.status==="no_endpoint"||t.status==="partial")try{const d=await v(),l=_({session:e,rows:d});s=!0,r(E(t,l))}catch(d){r(m(d.message))}else t.status==="nothing_to_upload"?r(C()):r(R(t));window.__lastUploadSummary={status:t.status,uploadedChunks:t.uploadedChunks,totalChunks:t.totalChunks,uploadedRows:t.uploadedRows,downloadFallback:s,last_error:t.lastError}}function P(e,o){const i=o>0?Math.round(e/o*100):0;return`
    <div>Uploading chunk ${e} of ${o}…</div>
    <div style="margin-top: 0.5rem; width: 18rem; height: 0.5rem; background: #333; border-radius: 0.25rem; overflow: hidden;">
      <div style="width: ${i}%; height: 100%; background: #34d399; transition: width 0.2s;"></div>
    </div>
  `}function R(e){return`
    <div style="color: #34d399;">✓ Saved (${e.uploadedRows} rows in ${e.uploadedChunks} chunks).</div>
    <div style="margin-top: 0.75rem; opacity: 0.8;">Press <kbd>Space</kbd> to continue.</div>
  `}function C(){return`
    <div style="color: #34d399;">✓ Already saved.</div>
    <div style="margin-top: 0.75rem; opacity: 0.8;">Press <kbd>Space</kbd> to continue.</div>
  `}function E(e,o){return`
    ${e.status==="no_endpoint"?'<div style="color: #fbbf24;">No upload server configured for this build.</div>':`<div style="color: #fbbf24;">Upload incomplete (${e.uploadedChunks} / ${e.totalChunks} chunks). Saved a copy to your device.</div>`}
    <div style="margin-top: 0.5rem; opacity: 0.85;">
      A file <code>${o.filename}</code> (${(o.sizeBytes/1024).toFixed(1)} KB) has been
      downloaded. Please email it to the experimenter if asked.
    </div>
    <div style="margin-top: 0.75rem; opacity: 0.8;">Press <kbd>Space</kbd> to continue.</div>
  `}function m(e){return`
    <div style="color: #f87171;">Something went wrong: ${u(e)}</div>
    <div style="margin-top: 0.75rem; opacity: 0.8;">Press <kbd>Space</kbd> to continue.</div>
  `}function u(e){return String(e).replace(/[&<>"']/g,o=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[o])}function A({redirectDelayMs:e}={}){const o=e??k;return{type:p,stimulus:'<div id="completion-mount" style="display: grid; place-items: center; gap: 1rem; max-width: 36rem; margin: 0 auto;">Loading…</div>',choices:[" "],trial_duration:null,on_load:async function(){const i=document.getElementById("completion-mount");if(!i)return;const a=await h()??y();if(g(a)||!a){i.innerHTML=T(a),window.__completionRedirectAt=null;return}let t=Math.ceil(o/1e3);i.innerHTML=$(a,t);const s=setInterval(()=>{if(t-=1,t<=0){clearInterval(s),window.location.href=a;return}const d=document.getElementById("completion-countdown");d&&(d.textContent=String(t))},b);window.__completionRedirectAt=a},on_finish:i=>{i.completion_redirect_url=window.__completionRedirectAt??null,i.completion_was_placeholder=!window.__completionRedirectAt},data:{phase:"completion_redirect"}}}function T(e){return`
    <h2 style="margin: 0;">You're done — thank you!</h2>
    <p style="margin: 0;">This is a development build. The Prolific completion URL hasn't been
    locked yet, so we're not redirecting automatically.</p>
    <div style="opacity: 0.7; font-size: 0.9em; margin-top: 0.5rem;">
      Configured URL: <code>${u(e||"(none)")}</code>
    </div>
    <p style="margin-top: 1rem; opacity: 0.85;">Press <kbd>Space</kbd> to close.</p>
  `}function $(e,o){return`
    <h2 style="margin: 0;">Thank you!</h2>
    <p style="margin: 0;">Redirecting to Prolific in <span id="completion-countdown" style="font-weight: bold;">${o}</span> seconds…</p>
    <p style="margin-top: 0.5rem; opacity: 0.85;">
      If the redirect doesn't happen, <a href="${u(e)}" style="color: #60a5fa;">click here</a>.
    </p>
  `}export{A as c,I as u};
//# sourceMappingURL=debrief-DfHPYObw.js.map
