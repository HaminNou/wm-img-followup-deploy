import"./modulepreload-polyfill-B5Qt9EMX.js";import{i as a,a as d,H as i}from"./index-7I2jrT1Q.js";import{c as r}from"./config-DSJqK44t.js";import{q as l,r as p}from"./main-blocks-C3N_Ww6T.js";import{i as c,a as m}from"./uploader-DqcxzQhC.js";import"./pattern-5Ezfdat3.js";const e=a(),h=c(),o=d({display_element:void 0,on_data_update:t=>{m(t).catch(s=>{console.error("[dev-main] storage append failed",s)})},on_finish:()=>{o.data.get().addProperties({session_id:e.params.session_id,prolific_pid:e.params.prolific_pid,study_id:e.params.study_id,is_preview:e.params.is_preview,is_pilot_run:e.is_pilot_run,pilot_label:e.pilot_label,prng_seed_uint32:e.prng_seed_uint32,schema_version:e.schema_version,build_id:e.build_id,dev_entry:"dev-main"}),console.info("[dev-main] session finished",e),console.info("[dev-main] data accessible at window.jsPsych.data.get()")}});window.jsPsych=o;const y={type:i,stimulus:`
    <div style="max-width: 36rem; margin: 0 auto; text-align: left;">
      <h2 style="text-align: center;">DEV — Main blocks preview</h2>
      <p>This is a developer-only entry for inspecting the main experimental
      conditions. No calibration, instructions, practice, or questionnaires &mdash; straight
      into the 60-trial Main A and Main B blocks.</p>
      <p><strong>Controls:</strong></p>
      <ul>
        <li><kbd>→</kbd> &nbsp;= yes / on / present / high tone (depending on trial type)</li>
        <li><kbd>←</kbd> &nbsp;= no / off / absent / low tone</li>
        <li>Imagery probe (star): press the arrow key the star points to.</li>
      </ul>
      <p>You'll see all five trial types interleaved: D-only, T-only, I-only,
      I+D (imagery + dot memory), I+T (imagery + tone memory).</p>
      <p>Quit anytime — your in-memory data is at
      <code>window.jsPsych.data.get()</code> in DevTools.</p>
      <p>Build <code>${r.build_id}</code>.</p>
      <p style="text-align: center;">Press <kbd>Space</kbd> to begin Main A.</p>
    </div>
  `,choices:[" "],data:{phase:"dev_main_intro"}},u={type:i,stimulus:`
    <div style="max-width: 36rem; margin: 0 auto;">
      <h2>Main task — Block 1 of 2</h2>
      <p>Block 1: 60 trials. Press <kbd>Space</kbd> to begin.</p>
    </div>
  `,choices:[" "],data:{phase:"main_a_intro"}},_={type:i,stimulus:`
    <div style="max-width: 36rem; margin: 0 auto;">
      <h2>Main task — Block 2 of 2</h2>
      <p>Block 2: 60 trials. Press <kbd>Space</kbd> to begin.</p>
    </div>
  `,choices:[" "],data:{phase:"main_b_intro"}},b={type:i,stimulus:`
    <div style="max-width: 36rem; margin: 0 auto;">
      <h2>Done — DEV preview</h2>
      <p>You've completed both main blocks in dev-preview mode. The data is
      still in memory; open DevTools and run
      <code>window.jsPsych.data.get().json()</code> to inspect.</p>
      <p>To preview the full session (calibration → instructions → practice →
      Main A → Main B → questionnaires), open <code>/</code> instead of
      <code>/dev-main.html</code>.</p>
      <p>Press <kbd>Space</kbd> to close.</p>
    </div>
  `,choices:[" "],data:{phase:"dev_main_end"}},n=l(),v=[y,u,...n.mainA.nodes,p({durationS:5,blockLabel:"dev_inter_block"}),_,...n.mainB.nodes,b];h.then(()=>o.run(v));
//# sourceMappingURL=dev-main-B5qMNjxL.js.map
