import"./modulepreload-polyfill-B5Qt9EMX.js";import{i as p,a as c,H as n}from"./index-yzbAS2-H.js";import{i as m,a as u}from"./uploader-_7_cN0H9.js";import{u as _,a as h}from"./debrief-DbZ6yJfj.js";import{c as e}from"./config-DSJqK44t.js";const f=new Date().toISOString().replace(/[:.]/g,"-"),t=`SMOKE_TEST_${f}`,s=5;async function g(){await m();const o=p({prolific_pid:t,study_id:"smoke_test",session_id:t,is_preview:!0},{is_pilot_run:!1,pilot_label:"smoke_test",source:"smoke-test"}),a=c({on_data_update:r=>{u(r).catch(i=>console.error("[smoke-test] storage write failed",i))}});window.jsPsych=a;const d={type:n,stimulus:`
      <div style="max-width: 38rem; margin: 0 auto; text-align: left;">
        <h2 style="text-align: center;">DataPipe smoke test</h2>
        <p>This page verifies the production data-egress path end-to-end. It will:</p>
        <ol>
          <li>Write ${s} fake trial rows to IndexedDB
              (<code>phase: 'smoke_test'</code>, <code>is_preview: true</code>).</li>
          <li>POST them through the configured uploader
              (<code>${e.uploader.provider}</code> →
              <code>${e.uploader.endpoint}</code>).</li>
          <li>DataPipe writes one JSON file per chunk into your OSF component.</li>
          <li>Show you the result, then quit.</li>
        </ol>
        <p>Runtime config in use:</p>
        <ul style="font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 0.9em;">
          <li>endpoint = <code>${e.uploader.endpoint??"(none)"}</code></li>
          <li>provider = <code>${e.uploader.provider??"(none)"}</code></li>
          <li>datapipe_experiment_id =
              <code>${e.uploader.datapipe_experiment_id??"(none)"}</code></li>
          <li>build_id = <code>${e.build_id}</code></li>
          <li>schema_version = <code>${e.schema_version}</code></li>
        </ul>
        <p>Session marker:</p>
        <ul style="font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 0.9em;">
          <li>prolific_pid = <code>${t}</code></li>
          <li>is_preview = <code>true</code></li>
        </ul>
        <p style="text-align: center; margin-top: 1.5rem;">
          Press <kbd>Space</kbd> to run the test.
        </p>
      </div>
    `,choices:[" "],data:{phase:"smoke_test_splash"}},l=Array.from({length:s},(r,i)=>({type:n,stimulus:`<div style="font-size: 1.5rem;">Generating fake trial ${i+1} / ${s}…</div>`,trial_duration:150,choices:"NO_KEYS",data:{phase:"smoke_test",smoke_trial_index:i,smoke_random_payload:Math.random().toString(36).slice(2)}}));a.run([d,...l,_({session:o}),h()])}g().catch(o=>{console.error("[smoke-test] fatal init error",o),document.body.innerHTML=`
    <div style="max-width: 38rem; margin: 4rem auto; padding: 1.5rem; background: #2a0b0b; border-radius: 0.5rem;">
      <h2 style="margin: 0 0 1rem 0;">Smoke test failed to start</h2>
      <pre style="white-space: pre-wrap; font-size: 0.85rem;">${String(o?.stack??o)}</pre>
    </div>
  `});
//# sourceMappingURL=smoke-test-E7cZLgf5.js.map
