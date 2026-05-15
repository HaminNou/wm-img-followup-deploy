import"./modulepreload-polyfill-B5Qt9EMX.js";import{P as p,a as it,r as st,H as N,g as je,i as nn,b as on,c as rn}from"./index-Bz6dieJX.js";import{s as Q,a as lt,u as an,g as ct,b as Me,c as sn,d as ut,p as ln,e as De,h as cn,f as un,F as L,i as $,j as ce,k as dn,l as hn,m as pn,r as mn}from"./main-blocks-C1uVeql_.js";import{c as y}from"./config-zUhCg_tb.js";import{u as fn,c as yn}from"./debrief-pGFuma2H.js";import{c as gn,a as bn,s as x,b as dt,h as _e,d as ue,r as I,e as Ie,f as Pe,g as Se,i as wn,j as Be,o as vn,k as _n}from"./pattern-CJtvzC-V.js";var kn="2.1.0";const Tn={name:"html-button-response",version:kn,parameters:{stimulus:{type:p.HTML_STRING,default:void 0},choices:{type:p.STRING,default:void 0,array:!0},button_html:{type:p.FUNCTION,default:function(t,e){return`<button class="jspsych-btn">${t}</button>`}},prompt:{type:p.HTML_STRING,default:null},stimulus_duration:{type:p.INT,default:null},trial_duration:{type:p.INT,default:null},button_layout:{type:p.STRING,default:"grid"},grid_rows:{type:p.INT,default:1},grid_columns:{type:p.INT,default:null},response_ends_trial:{type:p.BOOL,default:!0},enable_button_after:{type:p.INT,default:0}},data:{rt:{type:p.INT},response:{type:p.INT},stimulus:{type:p.HTML_STRING}},citations:{apa:"de Leeuw, J. R., Gilbert, R. A., & Luchterhandt, B. (2023). jsPsych: Enabling an Open-Source Collaborative Ecosystem of Behavioral Experiments. Journal of Open Source Software, 8(85), 5351. https://doi.org/10.21105/joss.05351 ",bibtex:'@article{Leeuw2023jsPsych, 	author = {de Leeuw, Joshua R. and Gilbert, Rebecca A. and Luchterhandt, Bj{\\" o}rn}, 	journal = {Journal of Open Source Software}, 	doi = {10.21105/joss.05351}, 	issn = {2475-9066}, 	number = {85}, 	year = {2023}, 	month = {may 11}, 	pages = {5351}, 	publisher = {Open Journals}, 	title = {jsPsych: Enabling an {Open}-{Source} {Collaborative} {Ecosystem} of {Behavioral} {Experiments}}, 	url = {https://joss.theoj.org/papers/10.21105/joss.05351}, 	volume = {8}, }  '}};class P{constructor(e){this.jsPsych=e}static{this.info=Tn}trial(e,n){const o=document.createElement("div");o.id="jspsych-html-button-response-stimulus",o.innerHTML=n.stimulus,e.appendChild(o);const r=document.createElement("div");if(r.id="jspsych-html-button-response-btngroup",n.button_layout==="grid"){if(r.classList.add("jspsych-btn-group-grid"),n.grid_rows===null&&n.grid_columns===null)throw new Error("You cannot set `grid_rows` to `null` without providing a value for `grid_columns`.");const d=n.grid_columns===null?Math.ceil(n.choices.length/n.grid_rows):n.grid_columns,h=n.grid_rows===null?Math.ceil(n.choices.length/n.grid_columns):n.grid_rows;r.style.gridTemplateColumns=`repeat(${d}, 1fr)`,r.style.gridTemplateRows=`repeat(${h}, 1fr)`}else n.button_layout==="flex"&&r.classList.add("jspsych-btn-group-flex");for(const[d,h]of n.choices.entries()){r.insertAdjacentHTML("beforeend",n.button_html(h,d));const m=r.lastChild;m.dataset.choice=d.toString(),m.addEventListener("click",()=>{u(d)})}e.appendChild(r),n.prompt!==null&&e.insertAdjacentHTML("beforeend",n.prompt);var a=performance.now(),l={rt:null,button:null};const i=()=>{var d={rt:l.rt,stimulus:n.stimulus,response:l.button};this.jsPsych.finishTrial(d)};function u(d){var h=performance.now(),m=Math.round(h-a);l.button=parseInt(d),l.rt=m,o.classList.add("responded");for(const _ of r.children)_.setAttribute("disabled","disabled");n.response_ends_trial&&i()}if(n.stimulus_duration!==null&&this.jsPsych.pluginAPI.setTimeout(()=>{o.style.visibility="hidden"},n.stimulus_duration),n.enable_button_after>0){for(var s=document.querySelectorAll("#jspsych-html-button-response-btngroup button"),c=0;c<s.length;c++)s[c].setAttribute("disabled","disabled");this.jsPsych.pluginAPI.setTimeout(()=>{for(var d=document.querySelectorAll("#jspsych-html-button-response-btngroup button"),h=0;h<d.length;h++)d[h].removeAttribute("disabled")},n.enable_button_after)}n.trial_duration!==null&&this.jsPsych.pluginAPI.setTimeout(i,n.trial_duration)}simulate(e,n,o,r){n=="data-only"&&(r(),this.simulate_data_only(e,o)),n=="visual"&&this.simulate_visual(e,o,r)}create_simulation_data(e,n){const o={stimulus:e.stimulus,rt:this.jsPsych.randomization.sampleExGaussian(500,50,.006666666666666667,!0)+e.enable_button_after,response:this.jsPsych.randomization.randomInt(0,e.choices.length-1)},r=this.jsPsych.pluginAPI.mergeSimulationData(o,n);return this.jsPsych.pluginAPI.ensureSimulationDataConsistency(e,r),r}simulate_data_only(e,n){const o=this.create_simulation_data(e,n);this.jsPsych.finishTrial(o)}simulate_visual(e,n,o){const r=this.create_simulation_data(e,n),a=this.jsPsych.getDisplayElement();this.trial(a,e),o(),r.rt!==null&&this.jsPsych.pluginAPI.clickTarget(a.querySelector(`#jspsych-html-button-response-btngroup [data-choice="${r.response}"]`),r.rt)}}let Ye=!1,q=[];const ke=new Map;let Z=!1,Te=!1;function xn(t){!t||typeof t!="string"||q[q.length-1]!==t&&(q.push(t),q.length>32&&q.shift())}function ht(t){const e=typeof t?.data=="function"?null:t?.data??null;return typeof e?.phase=="string"?e.phase:null}function On(t,e){return t&&typeof t=="object"&&typeof t!="function"?{...t,hidden_nav_step:e}:(...n)=>({...typeof t=="function"?t(...n):{},hidden_nav_step:e})}function v(t,e){!t||typeof t!="string"||typeof e!="function"||ke.set(t,e)}function w(t,e=ht(t)){if(!e||typeof e!="string")return t;const n=t?.on_load;return t.data=On(t?.data,e),t._hidden_nav_checkpoint=!0,t.on_load=(...o)=>{xn(e),n?.(...o)},t}function Y(t,e){v(t,e)}function H(t){return w(t,ht(t))}function En(){const t=Te;return Te=!1,t}function jn(t){const e=t?.timeline?.getLatestNode?.();return e&&typeof e.getDataParameter=="function"?e:null}function In(t){try{const e=jn(t);if(!e)return null;const n=e.getDataParameter?.()??{},o=typeof n.hidden_nav_step=="string"?n.hidden_nav_step:null;return{node:e,stepId:o,phase:typeof n.phase=="string"?n.phase:null}}catch{return null}}function Pn(t){const e=t?.description?.type?.info?.name??null;return e==="html-button-response"?{response:0}:e==="survey-html-form"?{response:{}}:{}}function Sn(t){const e=q.slice();if(t)for(;e[e.length-1]===t;)e.pop();return{trimmedHistory:e,prevStepId:e[e.length-1]??null}}function He(t,e){const n=t?.parent?.description?.timeline;if(!Array.isArray(n))return!1;const o=n.indexOf(t.description);return o<0?!1:(n.splice(o+1,0,...e),!0)}function Nn(){return function(e){if(e?._hidden_nav_checkpoint===!0){Z&&(Z=!1),Q(!1);return}if(!Z){Q(!1);return}!e||typeof e!="object"||(e.trial_duration=0,e.choices="NO_KEYS")}}function Ln(t){if(Ye||typeof document>"u")return;const e=n=>{const o=n.target&&n.target.tagName||"";if(o==="INPUT"||o==="TEXTAREA"||n.target?.isContentEditable||n.metaKey||n.ctrlKey||n.altKey)return;const r=n.key?.toLowerCase?.();if(r!=="u"&&r!=="r")return;const a=In(t);if(!a)return;n.preventDefault(),n.stopPropagation(),lt();const l=Pn(a.node),i=!!a.stepId;if(r==="u"){Te=!0,i||(Z=!0),Q(!0),t.finishTrial({...l,phase:a.phase,hidden_nav:"forward",hidden_nav_step:a.stepId??null});return}const{trimmedHistory:u,prevStepId:s}=Sn(a.stepId),c=s?ke.get(s):null;if(!c)return;let d=!1;if(i){const h=ke.get(a.stepId);if(!h)return;d=He(a.node,[c(),h()])}else d=He(a.node,[c()]);d&&(q=u,Z=!1,i?Q(!1):Q(!0),t.finishTrial({...l,phase:a.phase,hidden_nav:"back",hidden_nav_step:a.stepId??null,hidden_nav_target_step:s}))};document.addEventListener("keydown",e,!0),Ye=!0}const $n="online-2101803-v1",An=`
  <div style="text-align:left; max-width: 64ch; margin: 0 auto; font-size: 0.95rem; line-height: 1.55;">
    <h2 style="text-align:center; margin: 0 0 0.5rem;">Consent Form</h2>
    <div style="max-height: 60vh; overflow-y: auto; padding: 0.75rem 1rem; border: 1px solid rgba(0,0,0,0.35); border-radius: 6px; background: rgba(255,255,255,0.45);">
      <p><strong>UNIVERSITY OF MISSOURI: IRB PROJECT #2101803</strong></p>
      <p><strong>PRINCIPAL INVESTIGATOR: Dr. NELSON COWAN</strong></p>
      <p>We invite you to participate in a research study occurring under the project titled, &ldquo;The Impact of Visual Imagery on Spatial Working Memory Recall.&rdquo; This study is being conducted online and is delivered through your web browser via the Prolific research platform. Please read this form in its entirety and address any questions you may have to the Lead Researcher (contact information below) prior to indicating your consent and before participating.</p>

      <h3>What you should know before participating:</h3>
      <ul>
        <li>This is a remote, online study session that runs entirely in your web browser. No researcher will be present during your session.</li>
        <li>The purpose of the study is to explore the capacity, functioning, and limitations of working memory processes when dealing with spatial representations and imagery.</li>
        <li>Your responses are stored and analyzed using only your Prolific Participant ID, a randomly assigned alphanumeric code issued by Prolific. We do not collect your name, email address, IP address, or any other directly identifying information.</li>
        <li>Although we ask demographic information such as age, sex, handedness, education, language background, hearing, and vision, this information is collected for research purposes and for the application of pre-registered inclusion and exclusion criteria. You may select &ldquo;Prefer Not to Say&rdquo; where available.</li>
        <li>You will be presented with visual information (e.g., simple shapes such as dots on a grid, geometric patterns, an asterisk star marker, and a question-mark probe) and auditory information (short pure tones). You will indicate your responses using a keyboard press. Please be aware that visual items can flash or appear and disappear quickly, and that auditory items are short pure tones that may be high or low in pitch.</li>
        <li>The study takes approximately 50&ndash;60 minutes to complete.</li>
        <li>You will receive the compensation indicated on the Prolific study listing for your participation. Payment is processed by the Prolific platform upon submission of your completion code; the University of Missouri does not collect or process any payment information.</li>
        <li>Participation is voluntary, meaning you can choose to discontinue participation at any time. If you choose to discontinue before completion, please use the &ldquo;Return submission&rdquo; option on Prolific.</li>
      </ul>
      <p>All the data and the information you provide will be kept confidential and only the researchers will have access.</p>
      <ul>
        <li>If you need additional information, please contact the Lead Researcher (Hamid Nourbakhshi at hnth5@missouri.edu).</li>
        <li>If you decide to take part in this study, you may save, download, or print this consent form for future reference and further review.</li>
      </ul>

      <h3>TITLE OF THIS STUDY</h3>
      <p>&bull; The Impact of Visual Imagery on Spatial Working Memory Recall: An Online Follow-up Study.</p>
      <p>&bull; The aim of this study is to investigate the functioning and limitations of working memory processes when dealing with spatial representations and imagery, replicating and extending findings obtained in earlier laboratory-based work.</p>

      <h3>WHO IS CONDUCTING THIS RESEARCH?</h3>
      <p>&bull; The Working Memory Lab, University of Missouri, Department of Psychological Sciences, under the direction of Dr. Nelson Cowan, Principal Investigator and Director, via departmental funding.</p>

      <h3>WHO WILL BE PARTICIPATING IN THIS STUDY?</h3>
      <p>&bull; Adults 18 to 40 years of age who meet the eligibility requirements specified by the Prolific platform pre-screening filters at study launch.</p>
      <ul>
        <li>Must have access to a desktop or laptop computer with a working keyboard, a stable internet connection, and working audio output (built-in or external speakers, or headphones — your choice).</li>
        <li>Must have normal or corrected-to-normal vision (glasses; contacts), including normal color vision (i.e., the ability to distinguish shades and tints of color).</li>
        <li>Must have normal or corrected-to-normal hearing (aid; implant).</li>
        <li>Must be a native English speaker OR fluent in the English language.</li>
        <li>Must have the ability to attend to short auditory tones that may be soft or loud, high or low, irregular or repetitive, and to brief visual items that flash or appear and disappear quickly, without experiencing adverse side effects.</li>
      </ul>

      <h3>INELIGIBLE IF ANY OF THE FOLLOWING APPLY TO YOU:</h3>
      <ul>
        <li>Inability to attend to or respond to repetitive irregular sounds and/or flashing items without experiencing adverse side effects.</li>
        <li>Cognitive impairment or traumatic brain injury.</li>
        <li>Color blindness or inability to see colors or distinguish shades and tints of color.</li>
      </ul>

      <h3>IF YOU DECIDE TO PARTICIPATE, WHAT WILL YOU BE ASKED TO DO?</h3>
      <ul>
        <li>Complete a single online study session of approximately 50&ndash;60 minutes in your web browser.</li>
        <li>Calibrate your screen size using a credit card so that the visual stimuli are rendered at a fixed physical size on your monitor.</li>
        <li>Set your audio volume so that a brief reference tone is comfortably audible.</li>
        <li>Silence or turn off any other devices that could distract you during the session, and complete the session in a quiet environment, free of interruptions, in order to minimize anything that could potentially affect your focus and attention on the task.</li>
        <li>Remember and compare visual information (dots on a grid; mental images of simple geometric patterns) and auditory information (short pure tones) that may consist of any of the following: brief sounds, pure tones, simple shapes, geometric patterns, or grid markers, and indicate your memory of the recently presented items by pressing a key.</li>
        <li>Complete a brief demographics questionnaire and the Vividness of Visual Imagery Questionnaire (VVIQ; Marks, 1973), a 16-item self-report measure of mental-imagery vividness, in order to determine demographic background, language background, and individual differences in self-reported imagery vividness.</li>
        <li>Complete three brief typed instruction checks during the session. If you miss more than one, your data may be excluded from the analyses under the pre-registered exclusion rules.</li>
      </ul>

      <h3>WHAT YOU NEED TO KNOW REGARDING PARTICIPATION:</h3>
      <ul>
        <li>Although you may be invited to return for one or more future sessions, depending on the study, participating in THIS session will not obligate you to return for additional sessions.</li>
        <li>No researcher will be present during your session; the entire session is administered by your web browser. You may contact the research team using the contact information below at any point during or after participation.</li>
        <li>You understand that your participation is voluntary, meaning you have the right to refuse or discontinue participation at any time without penalty or loss of benefit to which you are otherwise entitled.</li>
        <li>You understand that your responses will be stored using only the Prolific Participant ID; your name and personal details will not be linked to any data that we collect.</li>
        <li>You understand that the data resulting from your participation may be shared with other investigators and integrated with results obtained from similar projects in the future without asking for your consent again. The shared data will not contain any information that could identify you as a participant; it will only be used, shared, and saved using a randomly assigned identifier.</li>
        <li>This study does not involve audio or video recording.</li>
        <li>Compensation for your participation is processed by the Prolific platform at the rate indicated on the Prolific study listing. The University of Missouri does not collect or process payment information.</li>
        <li>If you choose to discontinue participation before completion, please return your submission on Prolific. Compensation in the case of partial participation will follow the standard Prolific return policy.</li>
        <li>If your participation is canceled or terminated by the researcher: We reserve the right to terminate participation under conditions including, but not limited to, repeated failure of attention checks, reports that the auditory stimuli are not clearly audible, or other evidence of disengagement from the task. In such cases, the Prolific platform's standard return policy will apply.</li>
      </ul>

      <h3>WHAT ARE THE BENEFITS OF THIS STUDY TO YOU AND TO THE PUBLIC IN GENERAL?</h3>
      <ul>
        <li>You will become familiar with the kinds of procedures used to investigate human cognition. You may derive personal satisfaction from contributing to research on human memory and mental imagery, and you may learn useful and effective memory strategies and techniques that can be applied in other settings.</li>
        <li>Although the collected data is not used to examine individual memory differences, your data, when combined with the data of other participants, can help us understand how people learn, remember, retain, retrieve, and integrate visual and auditory information with mental imagery, and may inform applied settings such as education, clinical practice, and the design of cognitive tools.</li>
      </ul>

      <h3>WHO DO YOU CONTACT IF YOU HAVE QUESTIONS OR CONCERNS NOW, DURING OR AFTER?</h3>
      <ul>
        <li>Lead Researcher: Hamid Nourbakhshi, via email at hnth5@missouri.edu.</li>
        <li>If you have any questions about your rights as a research participant, please contact the University of Missouri Institutional Review Board (IRB) at 573-882-3181 or muresearchirb@missouri.edu. The IRB is a group of people who review research studies to make sure the rights and welfare of participants are protected.</li>
      </ul>

      <h3>STATEMENT OF CONSENT:</h3>
      <p>By clicking &ldquo;I consent &mdash; begin&rdquo; below, you acknowledge your intent to participate in this online research study; that you have been provided with the opportunity and the means to ask questions and obtain information prior to participating; and that you are aware of your right to decline participation by closing this browser tab and returning your submission on Prolific at any time without penalty.</p>
    </div>
    <p style="margin-top: 1rem; text-align:center; font-size: 0.9rem; color: rgba(0,0,0,0.6);">
      Please scroll to read the entire consent form before continuing.
    </p>
    <div style="margin: 1rem auto 0.25rem; text-align:center;">
      <label style="display:inline-flex; align-items:center; gap:0.5rem; cursor:pointer; font-size:0.95rem;">
        <input type="checkbox" id="consent-checkbox" style="width:1.1rem; height:1.1rem; cursor:pointer;" />
        <span>I have read and understood the information above.</span>
      </label>
    </div>
  </div>
`;function pt(){const t="consent";let e=!1;const n={type:P,stimulus:An,choices:["I consent — begin","I do not consent — exit"],button_html:(o,r)=>`<button class="jspsych-btn" data-idx="${r}"${r===0?" disabled":""}>${o}</button>`,on_load:()=>{e=!1;const o=document.getElementById("consent-checkbox"),r=document.querySelector('button.jspsych-btn[data-idx="0"]');!o||!r||o.addEventListener("change",()=>{e=o.checked,r.disabled=!o.checked})},on_finish:async o=>{o.consented=o.response===0,o.consent_acknowledged=e,o.consent_version=$n,o.consented&&await an()},data:{phase:"consent"}};return v(t,pt),w(n,t)}function Cn(){return{timeline:[{type:P,stimulus:`
          <h2>Thank you</h2>
          <p>You declined consent. You may close this tab now.</p>
          <p>Please return your submission on Prolific so that the study slot can be reassigned.</p>
        `,choices:["Close"],on_finish:()=>{typeof window<"u"&&window.jsPsych?.abortExperiment&&window.jsPsych.abortExperiment("Consent declined.")}}],conditional_function:()=>{const t=window.jsPsych?.data?.get().filter({phase:"consent"}).last(1).values()[0];return t?t.consented===!1:!1}}}var qn="2.1.0";const Rn={name:"survey-html-form",version:qn,parameters:{html:{type:p.HTML_STRING,default:null},preamble:{type:p.HTML_STRING,default:null},button_label:{type:p.STRING,default:"Continue"},autofocus:{type:p.STRING,default:""},dataAsArray:{type:p.BOOL,default:!1},autocomplete:{type:p.BOOL,default:!1}},data:{response:{type:p.OBJECT},rt:{type:p.INT}},citations:{apa:"de Leeuw, J. R., Gilbert, R. A., & Luchterhandt, B. (2023). jsPsych: Enabling an Open-Source Collaborative Ecosystem of Behavioral Experiments. Journal of Open Source Software, 8(85), 5351. https://doi.org/10.21105/joss.05351 ",bibtex:'@article{Leeuw2023jsPsych, 	author = {de Leeuw, Joshua R. and Gilbert, Rebecca A. and Luchterhandt, Bj{\\" o}rn}, 	journal = {Journal of Open Source Software}, 	doi = {10.21105/joss.05351}, 	issn = {2475-9066}, 	number = {85}, 	year = {2023}, 	month = {may 11}, 	pages = {5351}, 	publisher = {Open Journals}, 	title = {jsPsych: Enabling an {Open}-{Source} {Collaborative} {Ecosystem} of {Behavioral} {Experiments}}, 	url = {https://joss.theoj.org/papers/10.21105/joss.05351}, 	volume = {8}, }  '}};class V{constructor(e){this.jsPsych=e}static{this.info=Rn}trial(e,n){var o="";if(n.preamble!==null&&(o+='<div id="jspsych-survey-html-form-preamble" class="jspsych-survey-html-form-preamble">'+n.preamble+"</div>"),n.autocomplete?o+='<form id="jspsych-survey-html-form">':o+='<form id="jspsych-survey-html-form" autocomplete="off">',o+=n.html,o+='<input type="submit" id="jspsych-survey-html-form-next" class="jspsych-btn jspsych-survey-html-form" value="'+n.button_label+'"></input>',o+="</form>",e.innerHTML=o,n.autofocus!==""){var r=e.querySelectorAll("#"+n.autofocus);r.length===0?console.warn("No element found with id: "+n.autofocus):r.length>1?console.warn('The id "'+n.autofocus+'" is not unique so autofocus will not work.'):r[0].focus()}e.querySelector("#jspsych-survey-html-form").addEventListener("submit",u=>{u.preventDefault();var s=performance.now(),c=Math.round(s-a),d=e.querySelector("#jspsych-survey-html-form"),h=l(d);n.dataAsArray||(h=i(h));var m={rt:c,response:h};this.jsPsych.finishTrial(m)});var a=performance.now();function l(u){for(var s=[],c=0;c<u.elements.length;c++){var d=u.elements[c];if(!(!d.name||d.disabled||d.type==="file"||d.type==="reset"||d.type==="submit"||d.type==="button"))if(d.type==="select-multiple")for(var h=0;h<d.options.length;h++)d.options[h].selected&&s.push({name:d.name,value:d.options[h].value});else(d.type!=="checkbox"&&d.type!=="radio"||d.checked)&&s.push({name:d.name,value:d.value})}return s}function i(u){for(var s={},c=0;c<u.length;c++)s[u[c].name]=u[c].value;return s}}}const zn=`
  <style>
    .demog-form { text-align: left; max-width: 36rem; margin: 0 auto; font-size: 0.95rem; line-height: 1.5; }
    .demog-form .field { margin: 0.6rem 0; }
    .demog-form label.row { display: flex; flex-wrap: wrap; gap: 0.5rem 0.75rem; align-items: baseline; }
    .demog-form .label-text { min-width: 14rem; }
    .demog-form input[type="number"], .demog-form input[type="text"], .demog-form select, .demog-form textarea {
      padding: 0.35rem 0.5rem; border: 1px solid rgba(0,0,0,0.4); border-radius: 4px;
      background: rgba(255,255,255,0.6); color: inherit; font: inherit;
    }
    .demog-form input[type="number"] { width: 5rem; }
    .demog-form input[type="text"]   { width: 18rem; }
    .demog-form select               { min-width: 18rem; }
    .demog-form textarea             { width: 100%; min-height: 3rem; resize: vertical; margin-top: 0.4rem; }
    .demog-form .req                 { color: #b3261e; margin-left: 0.2rem; }
    .demog-form p.note               { color: rgba(0,0,0,0.6); font-style: italic; margin: 0 0 0.75rem; }
  </style>
`;function mt(){const t="demographics",e={type:V,preamble:`
      <h2>Demographics</h2>
      <p style="max-width: 36rem; margin: 0.25rem auto 1rem; font-size: 0.95rem; color: rgba(0,0,0,0.65);">
        This information is requested for research purposes and to apply
        pre-registered inclusion / exclusion criteria. Items marked with
        <span style="color:#b3261e;">&bull;</span> are required.
      </p>
    `,html:`
      ${zn}
      <div class="demog-form">

        <div class="field">
          <label class="row">
            <span class="label-text">Age (years)<span class="req">&bull;</span></span>
            <input name="age" type="number" min="18" max="99" step="1" required />
          </label>
        </div>

        <div class="field">
          <label class="row">
            <span class="label-text">Sex assigned at birth<span class="req">&bull;</span></span>
            <select name="sex" required>
              <option value="">— select —</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="intersex">Intersex</option>
              <option value="prefer_not">Prefer not to say</option>
            </select>
          </label>
        </div>

        <div class="field">
          <label class="row">
            <span class="label-text">Handedness<span class="req">&bull;</span></span>
            <select name="handedness" required>
              <option value="">— select —</option>
              <option value="right">Right</option>
              <option value="left">Left</option>
              <option value="ambidextrous">Ambidextrous</option>
              <option value="prefer_not">Prefer not to say</option>
            </select>
          </label>
        </div>

        <div class="field">
          <label class="row">
            <span class="label-text">Highest level of education<span class="req">&bull;</span></span>
            <select name="education" required>
              <option value="">— select —</option>
              <option value="high_school">High school</option>
              <option value="ged">GED</option>
              <option value="some_college">Some college</option>
              <option value="associate">Associate's degree</option>
              <option value="bachelor">Bachelor's degree</option>
              <option value="master">Master's degree</option>
              <option value="doctoral">Doctoral degree</option>
              <option value="other">Other</option>
              <option value="prefer_not">Prefer not to say</option>
            </select>
          </label>
        </div>

        <div class="field">
          <label class="row">
            <span class="label-text">First language(s)<span class="req">&bull;</span></span>
            <input name="first_languages" type="text" maxlength="120" required
                   placeholder="e.g. English; English and Spanish" />
          </label>
        </div>

        <div class="field">
          <label class="row">
            <span class="label-text">English fluency<span class="req">&bull;</span></span>
            <select name="english_fluency" required>
              <option value="">— select —</option>
              <option value="native">Native speaker</option>
              <option value="fluent">Fluent</option>
              <option value="intermediate">Intermediate</option>
              <option value="beginner">Beginner</option>
              <option value="prefer_not">Prefer not to say</option>
            </select>
          </label>
        </div>

        <div class="field">
          <label class="row">
            <span class="label-text">Hearing status<span class="req">&bull;</span></span>
            <select name="hearing" required>
              <option value="">— select —</option>
              <option value="no_impairment">No impairment</option>
              <option value="partial_impairment">Partial impairment</option>
              <option value="severe_impairment">Severe impairment</option>
              <option value="prefer_not">Prefer not to say</option>
            </select>
          </label>
        </div>

        <div class="field">
          <label class="row">
            <span class="label-text">Vision status<span class="req">&bull;</span></span>
            <select name="vision" required>
              <option value="">— select —</option>
              <option value="20_20">20/20 vision (no correction)</option>
              <option value="corrected">Corrected (glasses or contacts)</option>
              <option value="color_deficiency">Color-vision deficiency</option>
              <option value="other">Other</option>
              <option value="prefer_not">Prefer not to say</option>
            </select>
          </label>
        </div>

        <div class="field">
          <label class="row">
            <span class="label-text">Are you wearing glasses or contacts now?<span class="req">&bull;</span></span>
            <select name="glasses_contacts" required>
              <option value="">— select —</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="prefer_not">Prefer not to say</option>
            </select>
          </label>
          <textarea name="glasses_contacts_note"
                    placeholder="If 'No' but you normally wear corrective lenses, you may add a note (optional)."></textarea>
        </div>

        <div class="field">
          <label class="row">
            <span class="label-text">Are you currently taking any medication that may affect attention, vision, or sensory processing?<span class="req">&bull;</span></span>
            <select name="medication" required>
              <option value="">— select —</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="prefer_not">Prefer not to say</option>
            </select>
          </label>
          <textarea name="medication_note"
                    placeholder="If yes, please briefly describe HOW the medication may affect your concentration, vision, hearing, or participation. We are NOT asking for the name or dosage of any medication."></textarea>
        </div>

      </div>
    `,button_label:"Continue",data:{phase:"demographics"}};return v(t,mt),w(e,t)}var Mn="2.1.0";const Dn={name:"call-function",version:Mn,parameters:{func:{type:p.FUNCTION,default:void 0},async:{type:p.BOOL,default:!1}},data:{value:{type:p.COMPLEX,default:void 0}},citations:{apa:"de Leeuw, J. R., Gilbert, R. A., & Luchterhandt, B. (2023). jsPsych: Enabling an Open-Source Collaborative Ecosystem of Behavioral Experiments. Journal of Open Source Software, 8(85), 5351. https://doi.org/10.21105/joss.05351 ",bibtex:'@article{Leeuw2023jsPsych, 	author = {de Leeuw, Joshua R. and Gilbert, Rebecca A. and Luchterhandt, Bj{\\" o}rn}, 	journal = {Journal of Open Source Software}, 	doi = {10.21105/joss.05351}, 	issn = {2475-9066}, 	number = {85}, 	year = {2023}, 	month = {may 11}, 	pages = {5351}, 	publisher = {Open Journals}, 	title = {jsPsych: Enabling an {Open}-{Source} {Collaborative} {Ecosystem} of {Behavioral} {Experiments}}, 	url = {https://joss.theoj.org/papers/10.21105/joss.05351}, 	volume = {8}, }  '}};class he{constructor(e){this.jsPsych=e}static{this.info=Dn}trial(e,n){let o;const r=()=>{const a={value:o};this.jsPsych.finishTrial(a)};if(n.async){const a=l=>{o=l,r()};n.func(a)}else o=n.func(),r()}}function Bn({userAgent:t="",hasHover:e=null,hasFinePointer:n=null,maxTouchPoints:o=0}={}){const r=String(t).toLowerCase(),a=Number.isFinite(o)?o:0,l=[];return/\biphone\b/.test(r)&&l.push("iphone"),/\bipod\b/.test(r)&&l.push("ipod"),/\bipad\b/.test(r)&&l.push("ipad"),/macintosh/.test(r)&&a>1&&l.push("ipad_macos_disguised"),/android/.test(r)&&l.push("android"),/mobile/.test(r)&&!/iphone|ipad|ipod|android/.test(r)&&l.push("mobile_ua"),e===!1&&n===!1&&l.push("no_hover_no_fine_pointer"),{isDesktop:l.length===0,reasons:l,userAgent:String(t),hasHover:e,hasFinePointer:n,maxTouchPoints:a}}function Yn(){const t=typeof navigator<"u"?navigator.userAgent??"":"";let e=null,n=null;if(typeof window<"u"&&typeof window.matchMedia=="function"){try{e=window.matchMedia("(hover: hover)").matches}catch{e=null}try{n=window.matchMedia("(pointer: fine)").matches}catch{n=null}}const o=typeof navigator<"u"&&Number.isFinite(navigator.maxTouchPoints)?navigator.maxTouchPoints:0;return{userAgent:t,hasHover:e,hasFinePointer:n,maxTouchPoints:o}}function Hn(){return{type:he,async:!1,func:()=>Bn(Yn()),data:{phase:"desktop_gate"}}}function Fn(){return{timeline:[{type:P,stimulus:`
          <h2>Sorry — this study requires a desktop or laptop computer</h2>
          <p style="max-width: 38rem; margin: 0 auto 1rem;">
            The task uses keyboard arrow keys and a fullscreen visual display.
            It cannot be completed on a phone or tablet.
          </p>
          <p style="max-width: 38rem; margin: 0 auto;">
            Please return the study on Prolific so the slot can be reopened
            for another participant. We're sorry for the inconvenience.
          </p>
        `,choices:["Close"],data:{phase:"desktop_gate_fail"},on_finish:()=>{typeof window<"u"&&window.jsPsych?.abortExperiment&&window.jsPsych.abortExperiment("Desktop required.")}}],conditional_function:()=>{const e=window.jsPsych?.data?.get().filter({phase:"desktop_gate"}).last(1).values()[0]?.value;return e?!e.isDesktop:!1}}}const Wn=85.6,xe=1.5,Oe=12,Gn=100,Un=1100,se=320,Vn=2,Fe="screen_calibration",We="screen_calibration_retry_hint",Kn=`
  <h2>Calibrate the screen</h2>
  <p data-voiceover-target style="max-width: 38rem; margin: 0 auto 1rem;">
    Hold a <strong>credit card</strong> against your screen. Use the slider
    to resize the rectangle below until it exactly matches the width of the
    card.
  </p>
  <div id="cc-stage" style="margin: 1.5rem auto; height: 14rem; position: relative;">
    <div id="cc-rect"
         style="position: absolute; left: 50%; top: 1rem; transform: translateX(-50%);
                width: ${se}px; height: ${se*(53.98/85.6)}px; border: 2px solid #000; border-radius: 6px;
                background: linear-gradient(135deg, #1f3a8a 0%, #1e40af 100%);">
    </div>
  </div>
  <input id="cc-slider" type="range" min="${Gn}" max="${Un}" value="${se}"
         style="width: 24rem; max-width: 100%;" />
  <p style="opacity: 0.7; margin-top: 1rem;">
    A real card is <strong>85.6 mm</strong> wide.
  </p>
`,Jn=`
  <h2>Let's try the calibration once more</h2>
  <div data-voiceover-target>
    <p style="max-width: 38rem; margin: 0 auto 1rem;">
      Your previous setting was outside the range we can use. Please make sure
      you have an actual <strong>credit card</strong> in hand. On the next
      screen, hold the card <em>flat against your monitor</em> and drag the
      slider until the on-screen rectangle matches the card's width.
    </p>
    <p style="opacity: 0.8;">If you don't have a credit card available, just continue — we will use your best estimate.</p>
  </div>
`;function ft(){const t={type:P,stimulus:Kn,choices:["This matches my card"],on_load:()=>{const e=document.getElementById("cc-slider"),n=document.getElementById("cc-rect"),o=()=>{const r=parseInt(e.value,10);n.style.width=`${r}px`,n.style.height=`${r*(53.98/85.6)}px`};e.addEventListener("input",o),o()},on_finish:e=>{const n=document.getElementById("cc-slider"),o=n?parseInt(n.value,10):se,r=o/Wn;e.cc_px_width=o,e.px_per_mm=r,e.px_per_mm_in_bounds=r>=xe&&r<=Oe,e.px_per_mm_min=xe,e.px_per_mm_max=Oe,document.documentElement.style.setProperty("--mm",`${r}px`)},data:{phase:"screen_calibration"}};return v(Fe,ft),w(t,Fe)}function Xn(){return{type:he,async:!1,func:()=>{const t=window.jsPsych?.data?.get().filter({phase:"screen_calibration"}).last(1).values()[0];return{passed:!!(t&&t.px_per_mm>=xe&&t.px_per_mm<=Oe),px_per_mm:t?.px_per_mm??null}},data:{phase:"screen_calibration_gate"}}}function yt(){const t={type:P,stimulus:Jn,choices:["Continue"],data:{phase:"screen_calibration_retry_hint"}};return v(We,yt),w(t,We)}function Qn(t){return{timeline:[yt()],conditional_function:()=>t.count>=1}}function Zn({maxAttempts:t=Vn}={}){const e={count:0};return{timeline:[Qn(e),ft(),Xn(),eo(e,t)],loop_function:()=>(e.count+=1,e.count>=t?!1:!!!window.jsPsych?.data?.get().filter({phase:"screen_calibration_gate"}).last(1).values()[0]?.value?.passed)}}function eo(t,e){return{type:he,async:!1,func:()=>{const n=window.jsPsych?.data?.get().filter({phase:"screen_calibration"}).last(1).values()[0],o=Number.isFinite(n?.px_per_mm)?n.px_per_mm:null;return{attempts_used:t.count,max_attempts:e,retried:t.count>1,px_per_mm:o,px_per_mm_in_bounds:n?.px_per_mm_in_bounds===!0}},data:{phase:"screen_calibration_outcome"}}}const to="72vh",no="#000",oo="40rem",ro="95vw",ao="72rem",gt=`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  text-align: left;
  box-sizing: border-box;
  padding: 1.1rem 2rem 1.25rem;
  min-height: ${to};
  color: ${no};
`.replace(/\s+/g," ").trim(),bt=`${gt} width: ${oo}; max-width: 90vw;`,io=`${gt} width: ${ro}; max-width: ${ao}; align-items: center;`,Ne=`
  flex: 0 0 auto;
  min-height: 3rem;
  width: 100%;
  margin: 0 0 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`.replace(/\s+/g," ").trim(),Le=`
  margin: 0;
  text-align: center;
  font-size: clamp(1.05rem, 2.1vw, 1.6rem);
  line-height: 1.25;
  white-space: nowrap;
`.replace(/\s+/g," ").trim(),so=`
  flex: 1 1 auto;
  min-height: 0;
  width: 100%;
`.replace(/\s+/g," ").trim();function wt({title:t,body:e,narration:n}){const o=typeof n=="string"&&n.trim()?` data-voiceover-script="${_t(n.trim())}"`:"";return`
    <div style="${bt} min-height: auto;">
      <div style="${Ne}">
        <h2 style="${Le}">${t}</h2>
      </div>
      <div style="${so}" data-voiceover-target${o}>${e}</div>
    </div>
  `}const $e=50,S=$e/2,vt=$e*Math.SQRT2/2+1,Ee=vt-S+.5,ie=$e+2*Ee,Ge={cx:35,cy:15},Ue={cx:15,cy:35},lo=2.5,co=2.5,Ve=100,uo=12,ho=12;function po(t,e,n){const r=n*.382,a=[];for(let l=0;l<10;l++){const i=l%2===0?n:r,u=-Math.PI/2+l*Math.PI/5;a.push(`${t+i*Math.cos(u)},${e+i*Math.sin(u)}`)}return a.join(" ")}const mo=po(Ue.cx,Ue.cy,co),fo="rgba(0, 0, 0, 0.229)",yo="rgba(0, 0, 0, 0.55)",Ke="#000",Je="rgba(0, 0, 0, 0.85)";function go(t){const e=new Set(t),n=e.has("tone")||e.has("qmark"),o=`<circle cx="${S}" cy="${S}" r="${vt}" fill="none" stroke="${fo}" stroke-width="0.5" />`,r=n?"":`<circle cx="${S}" cy="${S}" r="0.65" fill="${yo}" />`,a=e.has("dot")?`<circle cx="${Ge.cx}" cy="${Ge.cy}" r="${lo}" fill="${Ke}" />`:"",l=e.has("star")?`<polygon points="${mo}" fill="${Ke}" />`:"",i=e.has("tone")?`<text x="${S}" y="${S}" text-anchor="middle" dominant-baseline="central" fill="${Je}" font-size="${uo}" font-family="Arial, sans-serif" font-weight="bold">♪</text>`:"",u=e.has("qmark")?`<text x="${S}" y="${S}" text-anchor="middle" dominant-baseline="central" fill="${Je}" font-size="${ho}" font-family="Arial, sans-serif" font-weight="bold">?</text>`:"",s=`
    <svg viewBox="${-Ee} ${-Ee} ${ie} ${ie}"
         width="100%" height="100%" style="display: block; overflow: visible;">
      ${o}${r}${a}${l}${i}${u}
    </svg>
  `,c=e.has("arrow")?`<img src="${bo()}" alt="rotation cue"
            style="position: absolute; top: 50%; left: 50%; width: ${Ve}px; height: ${Ve}px;
                   transform: translate(-50%, -50%); pointer-events: none; z-index: 10; user-select: none;
                   filter: brightness(0) saturate(100%);" />`:"";return`
    <div style="position: relative; width: calc(var(--mm) * ${ie}); height: calc(var(--mm) * ${ie}); margin: 0 auto;">
      ${s}${c}
    </div>
  `}function bo(){return"./assets/rotation-arrow.png"}function b({title:t,body:e,narration:n,exemplar:o=[]}){const r=typeof n=="string"&&n.trim()?` data-voiceover-script="${_t(n.trim())}"`:"",a=go(o);return`
    <div style="${bt} align-items: center;">
      <div style="${Ne}">
        <h2 style="${Le}">${t}</h2>
      </div>
      <div style="flex: 0 0 auto; width: 100%; text-align: left;"
           data-voiceover-target${r}>${e}</div>
      <div style="flex: 0 0 auto; display: flex; align-items: center; justify-content: center; margin-top: 2rem;">
        ${a}
      </div>
      <div style="flex: 1 0 auto; min-height: 1rem;" aria-hidden="true"></div>
    </div>
  `}function _t(t){return t.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const wo=wt({title:"Sit comfortably for the study",body:`
    <p>Before we begin the tasks, let's get you set up.</p>
    <p>This study works best when you are seated comfortably and stay in
    roughly the same position for the rest of the session. Please take a
    moment to set yourself up:</p>
    <ul style="margin: 1rem 0 1.25rem 1.25rem; line-height: 1.6;">
      <li>Sit so that your eyes are <strong>about an arm's length
      (≈ 60 cm)</strong> away from the monitor.</li>
      <li>Centre yourself in front of the screen: your eyes should be
      <strong>directly in front of the middle of the monitor</strong>,
      not off to one side.</li>
      <li>Make sure the screen is roughly at <strong>eye level</strong> —
      adjust your chair or the monitor if needed.</li>
      <li>Try to <strong>stay in this position</strong> for the rest of
      the study — moving your head closer or farther between trials can
      change how the task looks and how well you can do it.</li>
    </ul>
    <p>When you are settled in this position, click the button below to
    continue.</p>
  `,narration:"Before we begin the tasks, let's get you set up. This study works best when you are seated comfortably and stay in roughly the same position for the rest of the session. Please take a moment to set yourself up. Sit so that your eyes are about an arm's length, roughly 60 centimetres, away from the monitor. Centre yourself in front of the screen: your eyes should be directly in front of the middle of the monitor, not off to one side. Make sure the screen is roughly at eye level — adjust your chair or the monitor if needed. And try to stay in this position for the rest of the study — moving your head closer or farther between trials can change how the task looks, and how well you can do it. When you are settled in this position, click the button below to continue."}),vo=wt({title:"How to place your hands",body:`
    <p>Next, let's set up your hands.</p>
    <p>Throughout the study you will respond with the
    <strong>two horizontal arrow keys</strong>
    (<kbd>&larr;</kbd>&nbsp;<kbd>&rarr;</kbd>) on your keyboard. The
    demonstrations will label them <strong>&ldquo;No&rdquo;</strong> /
    <strong>&ldquo;Yes&rdquo;</strong> and
    <strong>&ldquo;Not on-pattern&rdquo;</strong> /
    <strong>&ldquo;On-pattern&rdquo;</strong>. How you place your hands
    matters:</p>
    <ul style="margin: 1rem 0 1.25rem 1.25rem; line-height: 1.6;">
      <li>Use <strong>both hands</strong>, and <strong>only your index
      fingers</strong>.</li>
      <li>Place <strong>one index finger on each of the two horizontal
      arrow keys</strong>, one finger per hand.</li>
      <li>Keep them resting on those two keys throughout the study.</li>
      <li><strong>Do not use two fingers of the same hand</strong> — one
      index finger per hand, on its own response key.</li>
    </ul>
    <p>When both index fingers are resting on the two response keys,
    click the button below to continue.</p>
  `,narration:"Next, let's set up your hands. Throughout the study you will respond with the two horizontal arrow keys on your keyboard, the left arrow and the right arrow. The demonstrations will label them No or Yes, and Not on-pattern or On-pattern. How you place your hands matters. Use both hands, and only your index fingers. Place one index finger on each of the two horizontal arrow keys, one finger per hand. Keep them resting on those two keys throughout the study. Do not use two fingers of the same hand — one index finger per hand, on its own response key. When both index fingers are resting on the two response keys, click the button below to continue."});function _o(){const t=w({type:P,stimulus:wo,choices:["I am ready"],button_html:n=>`<button class="jspsych-btn" style="margin-top: 1rem;">${n}</button>`,data:{phase:"viewing_distance"}},"viewing_distance"),e=w({type:P,stimulus:vo,choices:["I am ready"],button_html:n=>`<button class="jspsych-btn" style="margin-top: 1rem;">${n}</button>`,data:{phase:"hand_placement"}},"hand_placement");return{timeline:[t,e]}}function kt(){const t="speaker_volume_instruction",e={type:P,stimulus:`
      <h2>Set your system volume to about 50 %</h2>
      <div data-voiceover-target>
        <p style="max-width: 38rem; margin: 0 auto 1rem;">
          Open your computer's volume control (in the system toolbar or
          settings) and set the master volume to roughly the
          <strong>middle of its range</strong>.
        </p>
        <p style="max-width: 38rem; margin: 0 auto 1rem;">
          On the next page, you will hear a sequence of tones. You will use
          an on-screen slider to fine-tune the loudness to a comfortable
          level — so leaving your system volume near the middle gives that
          slider room to move in either direction.
        </p>
        <p style="max-width: 38rem; margin: 0 auto;">
          When your system volume is set, click Continue.
        </p>
      </div>
    `,choices:["Continue"],data:{phase:"speaker_volume_instruction"}};return v(t,kt),w(e,t)}var ko="2.1.0";const To={name:"fullscreen",version:ko,parameters:{fullscreen_mode:{type:p.BOOL,default:!0,array:!1},message:{type:p.HTML_STRING,default:"<p>The experiment will switch to full screen mode when you press the button below</p>",array:!1},button_label:{type:p.STRING,default:"Continue",array:!1},delay_after:{type:p.INT,default:1e3,array:!1}},data:{success:{type:p.BOOL,default:null,description:"True if the user entered fullscreen mode, false if not."},rt:{type:p.INT,default:null,description:"Time in milliseconds until the user entered fullscreen mode."}},citations:{apa:"de Leeuw, J. R., Gilbert, R. A., & Luchterhandt, B. (2023). jsPsych: Enabling an Open-Source Collaborative Ecosystem of Behavioral Experiments. Journal of Open Source Software, 8(85), 5351. https://doi.org/10.21105/joss.05351 ",bibtex:'@article{Leeuw2023jsPsych, 	author = {de Leeuw, Joshua R. and Gilbert, Rebecca A. and Luchterhandt, Bj{\\" o}rn}, 	journal = {Journal of Open Source Software}, 	doi = {10.21105/joss.05351}, 	issn = {2475-9066}, 	number = {85}, 	year = {2023}, 	month = {may 11}, 	pages = {5351}, 	publisher = {Open Journals}, 	title = {jsPsych: Enabling an {Open}-{Source} {Collaborative} {Ecosystem} of {Behavioral} {Experiments}}, 	url = {https://joss.theoj.org/papers/10.21105/joss.05351}, 	volume = {8}, }  '}};class xo{constructor(e){this.jsPsych=e,this.rt=null,this.start_time=0}static{this.info=To}trial(e,n){var o=typeof Element<"u"&&"ALLOW_KEYBOARD_INPUT"in Element;o?this.endTrial(e,!1,n):n.fullscreen_mode?this.showDisplay(e,n):(this.exitFullScreen(),this.endTrial(e,!0,n))}showDisplay(e,n){e.innerHTML=`
      ${n.message}
      <button id="jspsych-fullscreen-btn" class="jspsych-btn">${n.button_label}</button>
    `,e.querySelector("#jspsych-fullscreen-btn").addEventListener("click",()=>{this.rt=Math.round(performance.now()-this.start_time),this.enterFullScreen(),this.endTrial(e,!0,n)}),this.start_time=performance.now()}endTrial(e,n,o){e.innerHTML="",this.jsPsych.pluginAPI.setTimeout(()=>{var r={success:n,rt:this.rt};this.jsPsych.finishTrial(r)},o.delay_after)}enterFullScreen(){var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}exitFullScreen(){(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)&&(document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen())}simulate(e,n,o,r){n=="data-only"&&(r(),this.simulate_data_only(e,o)),n=="visual"&&this.simulate_visual(e,o,r)}create_simulation_data(e,n){const r={success:!0,rt:this.jsPsych.randomization.sampleExGaussian(1e3,100,.005,!0)};return this.jsPsych.pluginAPI.mergeSimulationData(r,n)}simulate_data_only(e,n){const o=this.create_simulation_data(e,n);this.jsPsych.finishTrial(o)}simulate_visual(e,n,o){const r=this.create_simulation_data(e,n),a=this.jsPsych.getDisplayElement();r.success===!1?this.endTrial(a,!1,e):(this.trial(a,e),o(),this.jsPsych.pluginAPI.clickTarget(a.querySelector("#jspsych-fullscreen-btn"),r.rt))}}let Xe=null;const Tt=[];function Qe(t){Tt.push(t),it({phase:"visibility_event",...t}).catch(e=>{console.error("[visibility] storage append failed",e),st(e)})}function Oo(){if(Xe)return;const t=()=>{Qe({kind:"visibilitychange",hidden:document.hidden,ts:performance.now(),iso:new Date().toISOString()})},e=()=>{Qe({kind:"fullscreenchange",in_fullscreen:!!document.fullscreenElement,ts:performance.now(),iso:new Date().toISOString()})};document.addEventListener("visibilitychange",t),document.addEventListener("fullscreenchange",e),Xe=()=>{document.removeEventListener("visibilitychange",t),document.removeEventListener("fullscreenchange",e)}}function Eo(){return Tt.slice()}function xt(){const t="enter_fullscreen",e={type:xo,fullscreen_mode:!0,message:`
      <h2>Enter fullscreen</h2>
      <p>The experiment must run in fullscreen. Click below to continue.</p>
    `,button_label:"Enter fullscreen",data:{phase:"enter_fullscreen"}};return v(t,xt),w(e,t)}function jo(){return{type:he,async:!1,func:()=>(Oo(),{recording:!0}),data:{phase:"visibility_recorder_start"}}}const Io=200,Po=500,So=50,No=10,J=50,Lo="#60a5fa";function ge(t,e){return new Promise(n=>{const o=()=>{const r=(e-t.currentTime)*1e3;if(r<=0){n();return}setTimeout(o,Math.min(r,10))};o()})}function $o(t){const e=[];for(let n=0;n<t;n++)e.push(`<div class="tac-box" id="tac-box-${n}" data-idx="${n}">${n+1}</div>`);return e.join("")}function Ot(){const t="tone_audibility_and_comfort";let e=!1,n=!1,o=!1,r=0,a=J;const l={type:P,stimulus:`
      <style>
        .tac-bank {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          gap: 8px;
          max-width: 36rem;
          margin: 0 auto 1.5rem;
          padding: 0;
        }
        .tac-box {
          aspect-ratio: 1 / 1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.45);
          color: rgba(0, 0, 0, 0.65);
          border: 1px solid rgba(0, 0, 0, 0.2);
          border-radius: 4px;
          font-family: monospace;
          font-size: 0.95rem;
          font-variant-numeric: tabular-nums;
          user-select: none;
          transition: background 60ms linear, color 60ms linear, transform 60ms linear;
        }
        .tac-box.playing {
          background: ${Lo};
          color: #0b1220;
          font-weight: 600;
          transform: scale(1.06);
        }
        .tac-slider-wrap {
          max-width: 36rem;
          margin: 0 auto 1.25rem;
        }
        .tac-slider-wrap input[type=range] { width: 100%; }
        .tac-slider-readout {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          opacity: 0.7;
          margin-top: 0.25rem;
          font-variant-numeric: tabular-nums;
        }
        .tac-instructions {
          max-width: 38rem;
          margin: 0 auto 1.25rem;
        }
      </style>
      <h2>Adjust the volume to a comfortable level</h2>
      <div data-voiceover-target data-tac-narration>
        <p class="tac-instructions">
          ${y.tones.count} tones will start playing in a loop in a
          moment, from low to high. Each box lights up while its tone
          plays. Use the slider below to set a level that is
          <strong>clearly audible but never uncomfortably loud</strong>,
          even on the very lowest and very highest tones.
        </p>
        <p class="tac-instructions">
          When the level feels right, click
          <strong>I'm comfortable — continue</strong>.
        </p>
      </div>
      <div class="tac-bank" id="tac-bank" aria-label="24 tones">
        ${$o(y.tones.count)}
      </div>
      <div class="tac-slider-wrap">
        <input
          id="tac-slider"
          type="range"
          min="0"
          max="100"
          step="1"
          value="${J}"
          aria-label="Playback volume"
        />
        <div class="tac-slider-readout">
          <span>quieter</span>
          <span id="tac-slider-readout">${J}%</span>
          <span>louder</span>
        </div>
      </div>
    `,choices:["I'm comfortable — continue"],button_html:i=>`<button class="jspsych-btn" id="tac-yes-btn">${i}</button>`,on_load:async()=>{e=!1,n=!1,o=!1,r=0,a=J;const i=Promise.resolve();Me(J/100);const u=document.getElementById("tac-slider"),s=document.getElementById("tac-slider-readout");u&&u.addEventListener("input",()=>{const f=Number(u.value);a=f,s&&(s.textContent=`${f}%`),Me(f/100)});const c=document.getElementById("tac-yes-btn");if(c&&c.addEventListener("click",()=>{n||(o=!0),e=!0},{capture:!0}),await i,e)return;const d=sn(),h=ut(),m=y.tones.duration_ms/1e3,_=(y.tones.duration_ms+Io)/1e3,g=Po/1e3,k=[];for(let f=0;f<h.length;f++)k.push(document.getElementById(`tac-box-${f}`));let E=d.currentTime+So/1e3;try{for(let f=0;f<No&&!e;f++){r=f+1;for(let F=0;F<h.length&&!e;F++){const C=E;if(ln(F,{when:C}),await ge(d,C),e)break;const W=k[F];W&&W.classList.add("playing"),await ge(d,C+m),W&&W.classList.remove("playing"),E=C+_}e||(await ge(d,E+g),E+=g)}}catch{}if(!o&&!e){n=!0;const f=document.getElementById("tac-yes-btn");f&&f.click()}},on_finish:i=>{lt();const u=ct();u.current&&!u.current._state?.finished&&u.current.cancel(),i.tones_audible=o&&!n,i.user_playback_pct=a,i.user_playback_gain=a/100,i.sweeps_completed=r},data:{phase:"tone_audibility_and_comfort"}};return v(t,Ot),w(l,t)}function Ao(){return{timeline:[{type:P,stimulus:`
          <h2>Sorry — the audio doesn't seem to be coming through</h2>
          <p style="max-width: 38rem; margin: 0 auto 1rem;">
            Without a comfortable, clearly audible setting for every
            tone, the task cannot be completed accurately.
          </p>
          <p style="max-width: 38rem; margin: 0 auto;">
            Please return the study on Prolific so the slot can be
            reopened. We're sorry for the inconvenience.
          </p>
        `,choices:["Close"],data:{phase:"tone_audibility_fail"},on_finish:()=>{typeof window<"u"&&window.jsPsych?.abortExperiment&&window.jsPsych.abortExperiment("Tone audibility failed.")}}],conditional_function:()=>{const t=window.jsPsych?.data?.get().filter({phase:"tone_audibility_and_comfort"}).last(1).values()[0];return t?t.tones_audible===!1:!1}}}function Co(){return[Hn(),Fn(),pt(),Cn(),mt(),_o(),Zn(),kt(),xt(),jo(),Ot(),Ao()]}var qo="2.1.0";const Ro={name:"instructions",version:qo,parameters:{pages:{type:p.HTML_STRING,default:void 0,array:!0},key_forward:{type:p.KEY,default:"ArrowRight"},key_backward:{type:p.KEY,default:"ArrowLeft"},allow_backward:{type:p.BOOL,default:!0},allow_keys:{type:p.BOOL,default:!0},show_clickable_nav:{type:p.BOOL,default:!1},show_page_number:{type:p.BOOL,default:!1},page_label:{type:p.STRING,default:"Page"},button_label_previous:{type:p.STRING,default:"Previous"},button_label_next:{type:p.STRING,default:"Next"},on_page_change:{type:p.FUNCTION,pretty_name:"Page change callback",default:function(t){}}},data:{view_history:{type:p.COMPLEX,array:!0,nested:{page_index:{type:p.INT},viewing_time:{type:p.INT}}},rt:{type:p.INT}},citations:{apa:"de Leeuw, J. R., Gilbert, R. A., & Luchterhandt, B. (2023). jsPsych: Enabling an Open-Source Collaborative Ecosystem of Behavioral Experiments. Journal of Open Source Software, 8(85), 5351. https://doi.org/10.21105/joss.05351 ",bibtex:'@article{Leeuw2023jsPsych, 	author = {de Leeuw, Joshua R. and Gilbert, Rebecca A. and Luchterhandt, Bj{\\" o}rn}, 	journal = {Journal of Open Source Software}, 	doi = {10.21105/joss.05351}, 	issn = {2475-9066}, 	number = {85}, 	year = {2023}, 	month = {may 11}, 	pages = {5351}, 	publisher = {Open Journals}, 	title = {jsPsych: Enabling an {Open}-{Source} {Collaborative} {Ecosystem} of {Behavioral} {Experiments}}, 	url = {https://joss.theoj.org/papers/10.21105/joss.05351}, 	volume = {8}, }  '}};class ee{constructor(e){this.jsPsych=e}static{this.info=Ro}trial(e,n){var o=0,r=[],a=performance.now(),l=a;function i(){this.id==="jspsych-instructions-back"?c():this.id==="jspsych-instructions-next"&&s()}function u(){var g=n.pages[o],k="";if(n.show_page_number&&(k="<span style='margin: 0 1em;' class='jspsych-instructions-pagenum'>"+n.page_label+" "+(o+1)+"/"+n.pages.length+"</span>"),n.show_clickable_nav){var E="<div class='jspsych-instructions-nav' style='padding: 10px 0px;'>";if(n.allow_backward){var f=o>0?"":"disabled='disabled'";E+="<button id='jspsych-instructions-back' class='jspsych-btn' style='margin-right: 5px;' "+f+">&lt; "+n.button_label_previous+"</button>"}n.pages.length>1&&n.show_page_number&&(E+=k),E+="<button id='jspsych-instructions-next' class='jspsych-btn'style='margin-left: 5px;'>"+n.button_label_next+" &gt;</button></div>",g+=E,e.innerHTML=g,o!=0&&n.allow_backward&&e.querySelector("#jspsych-instructions-back").addEventListener("click",i,{once:!0}),e.querySelector("#jspsych-instructions-next").addEventListener("click",i,{once:!0})}else n.show_page_number&&n.pages.length>1&&(g+="<div class='jspsych-instructions-pagenum'>"+k+"</div>"),e.innerHTML=g}function s(){d(),o++,o>=n.pages.length?h():u(),n.on_page_change(o)}function c(){d(),o--,u(),n.on_page_change(o)}function d(){var g=performance.now(),k=Math.round(g-l);r.push({page_index:o,viewing_time:k}),l=g}const h=()=>{n.allow_keys&&this.jsPsych.pluginAPI.cancelKeyboardResponse(_);var g={view_history:r,rt:Math.round(performance.now()-a)};this.jsPsych.finishTrial(g)},m=g=>{_=this.jsPsych.pluginAPI.getKeyboardResponse({callback_function:m,valid_responses:[n.key_forward,n.key_backward],rt_method:"performance",persist:!1,allow_held_key:!1}),this.jsPsych.pluginAPI.compareKeys(g.key,n.key_backward)&&o!==0&&n.allow_backward&&c(),this.jsPsych.pluginAPI.compareKeys(g.key,n.key_forward)&&s()};if(u(),n.allow_keys)var _=this.jsPsych.pluginAPI.getKeyboardResponse({callback_function:m,valid_responses:[n.key_forward,n.key_backward],rt_method:"performance",persist:!1})}simulate(e,n,o,r){n=="data-only"&&(r(),this.simulate_data_only(e,o)),n=="visual"&&this.simulate_visual(e,o,r)}create_simulation_data(e,n){let o=0,r=0,a=[];if(!n.data?.view_history&&!n.data?.rt)for(;o!==e.pages.length;){const u=Math.round(this.jsPsych.randomization.sampleExGaussian(3e3,300,.0033333333333333335));a.push({page_index:o,viewing_time:u}),r+=u,o==0||!e.allow_backward||this.jsPsych.randomization.sampleBernoulli(.9)==1?o++:o--}if(!n.data?.view_history&&n.data?.rt){for(r=n.data.rt;o!==e.pages.length;)a.push({page_index:o,viewing_time:null}),o==0||!e.allow_backward||this.jsPsych.randomization.sampleBernoulli(.9)==1?o++:o--;const u=n.data.rt/a.length;let s=0;for(const h of a){const m=Math.round(this.jsPsych.randomization.sampleExGaussian(u,u/10,1/(u/10)));h.viewing_time=m,s+=m}const c=n.data.rt-s,d=Math.round(c/a.length);for(const h of a)h.viewing_time+=d}if(n.data?.view_history&&!n.data?.rt){a=n.data.view_history,r=0;for(const u of n.data.view_history)r+=u.viewing_time}const l={view_history:a,rt:r},i=this.jsPsych.pluginAPI.mergeSimulationData(l,n);return this.jsPsych.pluginAPI.ensureSimulationDataConsistency(e,i),i}simulate_data_only(e,n){const o=this.create_simulation_data(e,n);this.jsPsych.finishTrial(o)}simulate_visual(e,n,o){const r=this.create_simulation_data(e,n),a=this.jsPsych.getDisplayElement();this.trial(a,e),o();const l=c=>{e.allow_keys?this.jsPsych.pluginAPI.pressKey(e.key_forward,c):e.show_clickable_nav&&this.jsPsych.pluginAPI.clickTarget(a.querySelector("#jspsych-instructions-next"),c)},i=c=>{e.allow_keys?this.jsPsych.pluginAPI.pressKey(e.key_backward,c):e.show_clickable_nav&&this.jsPsych.pluginAPI.clickTarget(a.querySelector("#jspsych-instructions-back"),c)};let u=0,s=0;for(let c=0;c<r.view_history.length;c++)c==r.view_history.length-1?l(s+r.view_history[c].viewing_time):(r.view_history[c+1].page_index>u&&l(s+r.view_history[c].viewing_time),r.view_history[c+1].page_index<u&&i(s+r.view_history[c].viewing_time),s+=r.view_history[c].viewing_time,u=r.view_history[c+1].page_index)}}const Et='<span style="color: #0a7c4d;"><strong>green</strong></span>',jt='<span style="color: #b3261e;"><strong>red</strong></span>',It=Object.freeze({key_forward:" ",key_backward:"ArrowLeft",allow_backward:!0,allow_keys:!0,show_clickable_nav:!0,show_page_number:!0,page_label:"Page",button_label_previous:"Previous",button_label_next:"Next"});function Pt(){const t=y.memory.set_size,e="Task 1 — Remember the dots",n=[b({title:e,body:`
        <p>Welcome to Task 1.</p>
        <p>In this first task, you will see <strong>${t} dots</strong>
        appear one at a time at different locations inside a circle on the
        screen. Each dot is shown briefly. Try to remember
        <strong>which locations</strong> the dots appear in.</p>
      `,narration:`Welcome to Task 1. In this first task, you will see ${t} dots appear one at a time at different locations inside a circle on the screen. Each dot is shown briefly. Try to remember which locations the dots appear in.`,exemplar:["dot"]}),b({title:e,body:`
        <p>After the dots, we will test your memory <strong>${t}
        times</strong>. Each time, a black dot will be shown for
        3 seconds, and you have to say whether the dot was shown in
        that location.</p>
        <p>Just keep watching the centre of the circle and remember
        each dot whenever it appears.</p>
      `,narration:`After the dots, we will test your memory ${t} times. Each time, a black dot will be shown for 3 seconds, and you have to say whether the dot was shown in that location. Just keep watching the centre of the circle, and remember each dot whenever it appears.`,exemplar:["qmark"]}),b({title:e,body:`
        <p>Now for the responses.</p>
        <p style="margin: 1.25rem 0;">
          Press <strong>Yes</strong> if you remember you saw a dot in
          that location.<br />
          Press <strong>No</strong> if you did not.
        </p>
        <p>You will have <strong>3 seconds</strong> to provide your
        response. Try to get it right rather than answer quickly, but
        please don't take too long either.</p>
      `,narration:"Now for the responses. Press Yes if you remember you saw a dot in that location. Press No if you did not. You will have 3 seconds to provide your response. Try to get it right rather than answer quickly, but please don't take too long either.",exemplar:["qmark"]}),b({title:e,body:`
        <p>One last thing.</p>
        <p>If you answer in time, the dot can turn
        ${Et} if you were correct or
        ${jt} if you were not. This colour change happens while
        the dot is still on the screen, so you can learn from each
        test.</p>
        <p>You will now do a short practice for this task before moving
        on to the next.</p>
        <p style="text-align: center; margin-top: 1.5rem;">
          When you're ready, press <kbd>Space</kbd> to see a demonstration
          of Task 1.
        </p>
      `,narration:"One last thing. If you answer in time, the dot can turn green if you were correct, or red if you were not. This colour change happens while the dot is still on the screen, so you can learn from each test. You will now do a short practice for this task before moving on to the next. When you're ready, press Space to see a demonstration of Task 1.",exemplar:["qmark"]})],o={type:ee,pages:n,...It,data:{phase:"instructions_memory_d_only"}};return Y(o.data.phase,Pt),H(o)}function St(){const t=y.memory.set_size,e="Task 2 — Remember the tones",n=[b({title:e,body:`
        <p>Now on to Task 2.</p>
        <p>This task works just like Task 1, but now you will hear sounds
        instead of seeing dots. You will hear <strong>${t} short
        tones</strong>, one at a time. Try to remember
        <strong>each tone you hear</strong>.</p>
      `,narration:`Now on to Task 2. This task works just like Task 1, but now you will hear sounds instead of seeing dots. You will hear ${t} short tones, one at a time. Try to remember each tone you hear.`,exemplar:["tone"]}),b({title:e,body:`
        <p>After the ${t} tones, we will play <strong>${t}
        more tones, one at a time</strong>. Each time, decide whether
        that tone was one of the ones you just heard.</p>
        <p>You don't need to look at anything during this task — just
        keep your eyes on the centre of the circle and listen for
        each tone whenever it plays.</p>
      `,narration:`After the ${t} tones, we will play ${t} more tones, one at a time. Each time, decide whether that tone was one of the ones you just heard. You don't need to look at anything during this task — just keep your eyes on the centre of the circle, and listen for each tone whenever it plays.`,exemplar:["qmark"]}),b({title:e,body:`
        <p>Here are the responses.</p>
        <p style="margin: 1.25rem 0;">
          Press <strong>Yes</strong> if you heard this tone before.<br />
          Press <strong>No</strong> if you did not.
        </p>
        <p>You will have <strong>3 seconds</strong> to provide your
        response. If you answer in time, the central question mark can
        change colour while it is still on the screen:
        it turns ${Et} if you were correct or
        ${jt} if you were not, so you can learn from each
        test.</p>
      `,narration:"Here are the responses. Press Yes if you heard this tone before. Press No if you did not. You will have 3 seconds to provide your response. If you answer in time, the central question mark can change colour while it is still on the screen: it turns green if you were correct, or red if you were not, so you can learn from each test.",exemplar:["qmark"]}),b({title:e,body:`
        <p>One quick reminder.</p>
        <p>Please make sure your audio volume is still at the level you
        set earlier.</p>
        <p style="text-align: center; margin-top: 1.5rem;">
          When you're ready, press <kbd>Space</kbd> to see a demonstration
          of Task 2.
        </p>
      `,narration:"One quick reminder. Please make sure your audio volume is still at the level you set earlier. When you're ready, press Space to see a demonstration of Task 2.",exemplar:["tone"]})],o={type:ee,pages:n,...It,data:{phase:"instructions_memory_t_only"}};return Y(o.data.phase,St),H(o)}const zo='<span style="color: #0a7c4d;"><strong>green</strong></span>',Mo='<span style="color: #b3261e;"><strong>red</strong></span>',Do='<p style="border-left: 3px solid #772139; padding: 0.5rem 0.75rem; margin: 1rem 0; background: rgba(119, 33, 57, 0.08);">',Bo=Object.freeze({key_forward:" ",key_backward:"ArrowLeft",allow_backward:!0,allow_keys:!0,show_clickable_nav:!0,show_page_number:!0,page_label:"Page",button_label_previous:"Previous",button_label_next:"Next"});function Nt(){const t=y.imagery.stars_per_trial,e="Task 3 — Picture the pattern",n=[b({title:e,body:`
        <p>Welcome to Task 3.</p>
        <p>In this task, we will ask you to <strong>picture a pattern in
        your mind</strong>, and to keep that picture clear while you
        respond.</p>
        ${Do}
        <strong style="color: #772139;">Important:</strong> you will see
        the pattern in the demonstration just before the practice —
        please pay close attention to it then, because the pattern will
        <strong>not</strong> be shown again during the trials.</p>
      `,narration:"Welcome to Task 3. In this task, we will ask you to picture a pattern in your mind, and to keep that picture clear while you respond. Important: you will see the pattern in the demonstration just before the practice — please pay close attention to it then, because the pattern will not be shown again during the trials.",exemplar:[]}),b({title:e,body:`
        <p>Here's how each trial starts.</p>
        <p>On each trial, an <strong>arrow</strong> will briefly appear.
        The arrow tells you to <strong>turn the pattern in your
        mind</strong> in the direction it points, like rotating a piece
        of paper. Hold this turned pattern in mind.</p>
        <p>You'll have <strong>5 seconds</strong> to imagine and turn
        the pattern. After 5 seconds the trial will continue
        automatically.</p>
      `,narration:"Here's how each trial starts. On each trial, an arrow will briefly appear. The arrow tells you to turn the pattern in your mind in the direction it points, like rotating a piece of paper. Hold this turned pattern in mind. You'll have 5 seconds to imagine and turn the pattern. After 5 seconds the trial will continue automatically.",exemplar:["arrow"]}),b({title:e,body:`
        <p>Then <strong>${t} bright stars</strong> will flash
        inside the circle, one at a time. For each star, decide whether
        it lands in a location that would be <strong>covered by the
        rotated pattern you are picturing</strong>.</p>
        <p style="margin: 1.25rem 0;">
          Press <strong>On-pattern</strong> if the star falls on your
          pictured pattern.<br />
          Press <strong>Not on-pattern</strong> if it does not.
        </p>
      `,narration:`Then ${t} bright stars will flash inside the circle, one at a time. For each star, decide whether it lands in a location that would be covered by the rotated pattern you are picturing. Press On-pattern if the star falls on your pictured pattern. Press Not on-pattern if it does not.`,exemplar:["star"]}),b({title:e,body:`
        <p>A few more things to know.</p>
        <p>You will have <strong>3 seconds</strong> for each star. Try to
        get it right rather than answer quickly, but please don't take
        too long either.</p>
        <p>If you answer in time, the star can turn
        ${zo} if you were correct or
        ${Mo} if you were not. This colour change happens while
        the star is still on the screen, so you can learn from each
        star.</p>
        <p>Be honest about what you actually see in your mind. If your
        picture is fuzzy, just do your best — there is no expectation of
        a perfect mental picture.</p>
        <p style="text-align: center; margin-top: 1.5rem;">
          When you're ready, press <kbd>Space</kbd> to see a demonstration
          of Task 3.
        </p>
      `,narration:"A few more things to know. You will have 3 seconds for each star. Try to get it right rather than answer quickly, but please don't take too long either. If you answer in time, the star can turn green if you were correct, or red if you were not. This colour change happens while the star is still on the screen, so you can learn from each star. Be honest about what you actually see in your mind. If your picture is fuzzy, just do your best — there is no expectation of a perfect mental picture. When you're ready, press Space to see a demonstration of Task 3.",exemplar:["star"]})],o={type:ee,pages:n,...Bo,data:{phase:"instructions_imagery_i_only"}};return Y(o.data.phase,Nt),H(o)}const Lt='<span style="color: #0a7c4d;"><strong>green</strong></span>',$t='<span style="color: #b3261e;"><strong>red</strong></span>',At='<p style="border-left: 3px solid #772139; padding: 0.5rem 0.75rem; margin: 1rem 0; background: rgba(119, 33, 57, 0.08);">',Ct=Object.freeze({key_forward:" ",key_backward:"ArrowLeft",allow_backward:!0,allow_keys:!0,show_clickable_nav:!0,show_page_number:!0,page_label:"Page",button_label_previous:"Previous",button_label_next:"Next"});function qt(){const t=y.memory.set_size,e=y.imagery.stars_per_trial,n=t+e,o="Task 4 — Dots and pattern together",r=[b({title:o,body:`
        <p>Now on to Task 4.</p>
        <p>This task combines Task 3 (the pattern) with Task 1 (the
        dots). Each trial begins with the <strong>arrow</strong>, which
        tells you to turn the pattern in your mind. Hold this turned
        pattern in mind for the whole trial.</p>
        <p>You'll have <strong>5 seconds</strong> to imagine and turn
        the pattern. After 5 seconds the trial will continue
        automatically.</p>
      `,narration:"Now on to Task 4. This task combines Task 3, the pattern, with Task 1, the dots. Each trial begins with the arrow, which tells you to turn the pattern in your mind. Hold this turned pattern in mind for the whole trial. You'll have 5 seconds to imagine and turn the pattern. After 5 seconds the trial will continue automatically.",exemplar:["arrow"]}),b({title:o,body:`
        <p>Then <strong>${n} things</strong> will appear inside
        the circle one at a time, all <strong>mixed together</strong>:</p>
        <ul style="margin: 0.75rem 1.25rem;">
          <li><strong>${e} stars</strong> — for each star,
          decide whether it lands in a location that would be covered by
          the rotated pattern you are picturing (just like Task 3).
          Press <strong>On-pattern</strong> if the star falls on your
          pictured pattern, or <strong>Not on-pattern</strong> if it
          does not.</li>
          <li><strong>${t} dots</strong> — try to remember
          <strong>which locations</strong> the dots appear in, so you
          can answer the dot tests at the end of the trial (just like
          Task 1).</li>
        </ul>
      `,narration:`Then ${n} things will appear inside the circle one at a time, all mixed together. ${e} stars — for each star, decide whether it lands in a location that would be covered by the rotated pattern you are picturing, just like Task 3. Press On-pattern if the star falls on your pictured pattern, or Not on-pattern if it does not. And ${t} dots — try to remember which locations the dots appear in, so you can answer the dot tests at the end of the trial, just like Task 1.`,exemplar:["star","dot"]}),b({title:o,body:`
        <p>After the ${n} things, we will test your dot memory
        <strong>${t} times</strong>. Each time, a black dot will be
        shown for 3 seconds in some location:</p>
        <p style="margin: 1.25rem 0;">
          Press <strong>Yes</strong> if
          <em>a dot was presented here</em>.<br />
          Press <strong>No</strong> if
          <em>no dot was presented here</em>.
        </p>
        <p>You will have <strong>3 seconds</strong> for each star and for
        each dot test. If you answer in time, the star or dot can turn
        ${Lt} if you were correct or
        ${$t} if you were not while it is still on the screen,
        so you can learn from each response.</p>
      `,narration:`After the ${n} things, we will test your dot memory ${t} times. Each time, a black dot will be shown for 3 seconds in some location. Press Yes if a dot was presented here. Press No if no dot was presented here. You will have 3 seconds for each star and for each dot test. If you answer in time, the star or dot can turn green if you were correct, or red if you were not, while it is still on the screen, so you can learn from each response.`,exemplar:["qmark"]}),b({title:o,body:`
        <p>One last thing, and this is very important.</p>
        ${At}
        <strong style="color: #772139;">VERY important:</strong> keep the
        picture of the rotated pattern in your mind during the
        <strong>entire</strong> trial. The only moment you may let the
        picture go is when the central
        <strong>question mark (?)</strong> appears — that is when the
        dot tests begin, and at that point you can drop the image and
        focus only on the dot tests.</p>
        <p style="text-align: center; margin-top: 1.5rem;">
          When you're ready, press <kbd>Space</kbd> to see a demonstration
          of Task 4.
        </p>
      `,narration:"One last thing, and this is very important. Keep the picture of the rotated pattern in your mind during the entire trial. The only moment you may let the picture go is when the central question mark appears — that is when the dot tests begin, and at that point you can drop the image and focus only on the dot tests. When you're ready, press Space to see a demonstration of Task 4.",exemplar:["arrow"]})],a={type:ee,pages:r,...Ct,data:{phase:"instructions_dual_i_d"}};return Y(a.data.phase,qt),H(a)}function Rt(){const t=y.memory.set_size,e=y.imagery.stars_per_trial,n=t+e,o="Task 5 — Tones and pattern together",r=[b({title:o,body:`
        <p>Now on to the last task, Task 5.</p>
        <p>This task combines Task 3 (the pattern) with Task 2 (the
        tones). Each trial begins with the <strong>arrow</strong>, which
        tells you to turn the pattern in your mind. Hold this turned
        pattern in mind for the whole trial.</p>
        <p>You'll have <strong>5 seconds</strong> to imagine and turn
        the pattern. After 5 seconds the trial will continue
        automatically.</p>
      `,narration:"Now on to the last task, Task 5. This task combines Task 3, the pattern, with Task 2, the tones. Each trial begins with the arrow, which tells you to turn the pattern in your mind. Hold this turned pattern in mind for the whole trial. You'll have 5 seconds to imagine and turn the pattern. After 5 seconds the trial will continue automatically.",exemplar:["arrow"]}),b({title:o,body:`
        <p>Then <strong>${n} things</strong> will happen one at
        a time, all <strong>mixed together</strong>:</p>
        <ul style="margin: 0.75rem 1.25rem;">
          <li><strong>${e} stars</strong> inside the circle —
          for each star, decide whether it lands in a location that
          would be covered by the rotated pattern you are picturing.
          Press <strong>On-pattern</strong> if the star falls on your
          pictured pattern, or <strong>Not on-pattern</strong> if it
          does not.</li>
          <li><strong>${t} tones</strong> — try to remember
          <strong>each tone you hear</strong>, so you can answer the
          tone tests at the end of the trial (just like Task 2).</li>
        </ul>
      `,narration:`Then ${n} things will happen one at a time, all mixed together. ${e} stars inside the circle — for each star, decide whether it lands in a location that would be covered by the rotated pattern you are picturing. Press On-pattern if the star falls on your pictured pattern, or Not on-pattern if it does not. And ${t} tones — try to remember each tone you hear, so you can answer the tone tests at the end of the trial, just like Task 2.`,exemplar:["star","tone"]}),b({title:o,body:`
        <p>After the ${n} things, we will test your tone
        memory <strong>${t} times</strong>. Each time, a tone
        will be played, and you will have 3 seconds to decide whether
        it was one of the tones you just heard:</p>
        <p style="margin: 1.25rem 0;">
          Press <strong>Yes</strong> if
          <em>you heard this tone before</em>.<br />
          Press <strong>No</strong> if
          <em>you did not</em>.
        </p>
        <p>You will have <strong>3 seconds</strong> for each star and for
        each tone test. If you answer in time, the star or central question
        mark can turn ${Lt} if you were correct or
        ${$t} if you were not while it is still on the screen,
        so you can learn from each response.</p>
      `,narration:`After the ${n} things, we will test your tone memory ${t} times. Each time, a tone will be played, and you will have 3 seconds to decide whether it was one of the tones you just heard. Press Yes if you heard this tone before. Press No if you did not. You will have 3 seconds for each star and for each tone test. If you answer in time, the star or central question mark can turn green if you were correct, or red if you were not, while it is still on the screen, so you can learn from each response.`,exemplar:["qmark"]}),b({title:o,body:`
        <p>One last thing, and this is very important.</p>
        ${At}
        <strong style="color: #772139;">VERY important:</strong> keep the
        picture of the rotated pattern in your mind during the
        <strong>entire</strong> trial. The only moment you may let the
        picture go is when the central
        <strong>question mark (?)</strong> appears — that is when the
        tone tests begin, and at that point you can drop the image and
        focus only on the tone tests.</p>
        <p>Please make sure your audio volume is still at the level you
        set earlier.</p>
        <p style="text-align: center; margin-top: 1.5rem;">
          When you're ready, press <kbd>Space</kbd> to see a demonstration
          of Task 5.
        </p>
      `,narration:"One last thing, and this is very important. Keep the picture of the rotated pattern in your mind during the entire trial. The only moment you may let the picture go is when the central question mark appears — that is when the tone tests begin, and at that point you can drop the image and focus only on the tone tests. Please make sure your audio volume is still at the level you set earlier. When you're ready, press Space to see a demonstration of Task 5.",exemplar:["arrow"]})],a={type:ee,pages:r,...Ct,data:{phase:"instructions_dual_i_t"}};return Y(a.data.phase,Rt),H(a)}const pe=4,zt=1e3*pe,Yo=4e3*pe,Ho=2e3*pe,Fo=8e3,me=2e3*pe,Wo=2e3,Go=400,T=500,O=400,R=1200,Uo=700,Ze=450,Vo=220,z=1500,Ae=1e3,Ko=Object.freeze([-90,-75,-60,-45,-30,-15,15,30,45,60,75,90]);function Ce(){return je().pick(Ko)}const Jo="./assets/rotation-arrow.png";function Xo(t,e){return`
    <style>
      @keyframes demo-caption-bump {
        0%   { transform: scale(0.97); opacity: 0.55; }
        55%  { transform: scale(1.02); opacity: 1; }
        100% { transform: scale(1);    opacity: 1; }
      }
      .demo-caption-bump { animation: demo-caption-bump 0.42s ease-out; }
      @keyframes demo-btn-press {
        0%   { transform: translateY(0)    scale(1);    box-shadow: 0 4px 0 rgba(0,0,0,0.35); }
        50%  { transform: translateY(3px)  scale(0.97); box-shadow: 0 1px 0 rgba(0,0,0,0.35); }
        100% { transform: translateY(0)    scale(1);    box-shadow: 0 4px 0 rgba(0,0,0,0.35); }
      }
      .demo-btn-pressed { animation: demo-btn-press 0.22s ease-out; }
      /* Demo "key" buttons render as dark-ink pills on the gray card —
       * mirroring the surrounding caption/hint flip on 2026-05-14. The
       * box-shadow remains a thin black bar for the depressible-key
       * affordance that the press-animation keyframe targets. */
      .demo-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 9rem;
        padding: 0.7rem 1.4rem;
        border-radius: 0.65rem;
        background: rgba(0,0,0,0.04);
        border: 1px solid rgba(0,0,0,0.30);
        color: rgba(0,0,0,0.85);
        font-size: 1.05rem;
        font-weight: 500;
        box-shadow: 0 4px 0 rgba(0,0,0,0.35);
        user-select: none;
        cursor: default;
      }
      .demo-hand {
        position: absolute;
        font-size: 2.2rem;
        line-height: 1;
        opacity: 0;
        pointer-events: none;
        transform: translate(-50%, 0);
        will-change: left, transform;
      }
    </style>
    <div class="demo-frame" style="${io}">
      <div style="${Ne}">
        <h2 style="${Le}">Demonstration of Task ${t} — ${e}</h2>
      </div>

      <div class="demo-spacer-above-circle" style="
        flex: 3 0 0;
        min-height: 9rem;
      "></div>

      <div id="demo-mount" style="
        flex: 0 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
      "></div>

      <div style="
        flex: 0 0 auto;
        width: 30rem;
        max-width: 90vw;
        height: 6rem;
        margin-top: 1rem;
        padding: 0.85rem 1.15rem;
        border-radius: 0.75rem;
        background: rgba(0, 0, 0, 0.04);
        border: 1px solid rgba(0, 0, 0, 0.18);
        border-left: 3px solid #772139;
        box-shadow: 0 0 0 1px rgba(0,0,0,0.04) inset;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
      ">
        <p id="demo-caption" style="
          margin: 0;
          text-align: center;
          color: rgba(0,0,0,0.85);
          font-size: 1.05rem;
          line-height: 1.45;
          font-weight: 400;
        "></p>
      </div>

      <div id="demo-buttons-row" style="
        flex: 0 0 auto;
        width: 100%;
        min-height: 6.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 0.75rem;
      "></div>

      <div class="demo-spacer-above-hint" style="
        flex: 1 0 0;
        min-height: 1rem;
      "></div>

      <p id="demo-hint" style="
        flex: 0 0 auto;
        margin: 0 0 0.25rem;
        opacity: 0.85;
        font-size: 0.95rem;
        color: rgba(0,0,0,0.75);
        text-align: center;
      ">
        Press <kbd>Space</kbd> when you are ready to start the practice for
        Task ${t}.
      </p>
    </div>
  `}function Qo(){const t={cancelled:!1,spaceArmed:!1,currentNarration:null};return{state:t,setCaption(e){const n=document.getElementById("demo-caption");if(!n)return;n.innerHTML=e,n.classList.remove("demo-caption-bump"),n.offsetWidth,n.classList.add("demo-caption-bump");const o=cn(e);o?(un(),t.currentNarration=ct().speak(o)):t.currentNarration=null},async wait(e){return await De(e),!t.cancelled},async awaitNarration(){const e=t.currentNarration;return e?.done&&await new Promise(n=>{let o=!1;const r=()=>{o||(o=!0,n())};e.done.then(r).catch(r);const a=setInterval(()=>{t.cancelled&&(clearInterval(a),r())},100);e.done.finally(()=>clearInterval(a))}),!t.cancelled},async advanceCaption(e){return t.cancelled||!await this.awaitNarration()||e!==""&&(await De(Go),t.cancelled)?!1:(this.setCaption(e),!0)},async narrate(e){return!(!await this.advanceCaption(e)||!await this.awaitNarration())}}}function Zo(t,e){const n=y.imagery.rotation_arrow_size_px,o=document.createElement("img");return o.src=Jo,o.alt="rotation cue",o.className="rotation-arrow-cue demo-arrow",o.setAttribute("style",["position: absolute","top: 50%","left: 50%",`width: ${n}px`,`height: ${n}px`,`transform: translate(-50%, -50%) rotate(${e}deg)`,"pointer-events: none","z-index: 10","user-select: none","filter: brightness(0) saturate(100%)"].join("; ")+";"),t.wrapper.appendChild(o),o}function be(t){t&&t.parentNode&&t.parentNode.removeChild(t)}async function qe(t,e,n){if(e.setCaption("Step 1 of 3 — Here is the pattern. Picture it in your mind."),wn(t),Be(t),!await e.wait(Yo)||!await e.advanceCaption(`Step 2 of 3 — An arrow tells you which way to turn the pattern in your mind (here, by ${n>0?"+":""}${n}°).`))return!1;_e(t);const o=Zo(t,n);return!await e.wait(Ho)||!await e.advanceCaption("Step 3 of 3 — This is how your rotated mental image should look. Hold this picture in your mind.")?(be(o),!1):(be(o),dt(t,n),Be(t),await e.wait(Fo)?(_e(t),!0):!1)}function te(){const t=vn(),e=_n();return{memCells:[t[0],e[1],t[2]],fillerCells:[e[0],t[1],e[2]],probeCells:[{cell:t[0],isTarget:!0,label:"on"},{cell:e[1],isTarget:!0,label:"off"},{cell:e[4],isTarget:!1,label:"off"}],starCells:[{cell:t[5],isOn:!0},{cell:e[5],isOn:!1},{cell:t[6],isOn:!0}]}}function ne({leftLabel:t,rightLabel:e}){const n=document.getElementById("demo-buttons-row");if(!n)return null;n.innerHTML=`
    <div class="demo-buttons-container" style="
      position: relative;
      display: inline-flex;
      align-items: center;
      gap: 1.25rem;
      padding: 0.5rem 0.5rem 2.75rem;
    ">
      <button type="button" class="demo-btn" data-side="left">
        <span class="demo-btn-label">${t}</span>
      </button>
      <button type="button" class="demo-btn" data-side="right">
        <span class="demo-btn-label">${e}</span>
      </button>
      <span class="demo-hand" aria-hidden="true">👆</span>
    </div>
  `;const o=n.querySelector(".demo-buttons-container"),r=n.querySelector('[data-side="left"]'),a=n.querySelector('[data-side="right"]'),l=n.querySelector(".demo-hand");return{container:o,leftBtn:r,rightBtn:a,hand:l}}function Mt(t,e,n){if(!t?.leftBtn||!t?.rightBtn)return!1;const o=t.leftBtn.querySelector(".demo-btn-label"),r=t.rightBtn.querySelector(".demo-btn-label");return o&&(o.textContent=e),r&&(r.textContent=n),!0}function we(){const t=document.getElementById("demo-buttons-row");t&&(t.innerHTML="")}function et(t,e){if(!t?.container||!t?.hand)return;const n=e==="right"?t.rightBtn:t.leftBtn;if(!n)return;const o=t.container.getBoundingClientRect(),r=n.getBoundingClientRect(),a=r.left+r.width/2-o.left,l=r.bottom-o.top+4;t.hand.style.left=`${a}px`,t.hand.style.top=`${l}px`}async function M(t,e,n){if(!t)return!0;if(et(t,e==="right"?"left":"right"),t.hand.style.transition="none",t.hand.style.opacity="0",t.hand.offsetWidth,t.hand.style.transition="opacity 200ms ease-out",t.hand.style.opacity="0.95",!await n.wait(Uo)||(t.hand.style.transition=`left ${Ze}ms ease-in-out`,et(t,e),!await n.wait(Ze)))return!1;const o=e==="right"?t.rightBtn:t.leftBtn;return o&&(o.classList.remove("demo-btn-pressed"),o.offsetWidth,o.classList.add("demo-btn-pressed")),!!await n.wait(Vo)}function D(t){t?.hand&&(t.hand.style.transition="opacity 200ms ease-in",t.hand.style.opacity="0")}const A=Object.freeze({left:"No",right:"Yes"}),G=Object.freeze({left:"Not on-pattern",right:"On-pattern"});function B({pressedLabel:t,correctLabel:e,isCorrect:n,stimulusName:o}){const r=`<span style="color: ${L}; font-weight: 600;">correct</span>`,a=`<span style="color: ${$}; font-weight: 600;">incorrect</span>`;return n?`We chose <strong>${t}</strong> — that was the ${r} answer, so the ${o} turns green.`:`We chose <strong>${t}</strong> — that was ${a}; the ${r} answer was <strong>${e}</strong>, so the ${o} turns red.`}async function er(t,e){const{memCells:n,fillerCells:o,probeCells:r}=te(),a=ne({leftLabel:"No",rightLabel:"Yes"});if(!await e.narrate("Watch as dots appear one at a time. Try to remember the location of each dot.")||!await e.wait(T))return;for(let i=0;i<3;i++){let u;if(i===0?u="Dot 1 — remember its location.":i===2?u="Last dot — remember its location.":u=`Dot ${i+1} — keep tracking each location.`,!await e.narrate(u)||!await e.wait(T))return;const s=ue(t,n[i]);if(!await e.wait(zt)||(I(s),!await e.wait(O))||!await e.advanceCaption(""))return;const c=Ie(t,o[i],{visible:!1});if(!await e.wait(Ae))return;I(c)}if(!await e.narrate("Hold the dots in mind for a moment.")||(x(t,"?"),!await e.wait(me)))return;const l=2;for(let i=0;i<r.length;i++){const u=r[i],s=u.isTarget?"right":"left",c=i===l?s==="right"?"left":"right":s;if(!await e.narrate(`Test ${i+1} of 3: was a dot just shown in this location?`)||!await e.wait(T))return;const d=ue(t,u.cell);if(!await e.wait(R)||!await M(a,c,e))return;const h=c===s;if(d.setAttribute("fill",h?L:$),!await e.wait(z)||!await e.narrate(B({pressedLabel:A[c],correctLabel:A[s],isCorrect:h,stimulusName:"dot"}))||(D(a),I(d),!await e.wait(O)))return}x(t,"")}async function tr(t,e){const{memCells:n,fillerCells:o,probeCells:r}=te(),a=ne({leftLabel:"No",rightLabel:"Yes"});if(!await e.narrate("Listen as tones play one at a time.")||!await e.wait(T))return;for(let i=0;i<3;i++){if(await ce(n[i]).catch(()=>{}),!await e.wait(O))return;let u;if(i===0?u="That was tone 1 — try to remember it.":i===2?u="That was the last tone — keep remembering each one.":u=`That was tone ${i+1} — keep remembering each tone.`,!await e.narrate(u)||!await e.advanceCaption(""))return;const s=Ie(t,o[i],{visible:!1});if(!await e.wait(Ae))return;I(s)}if(!await e.narrate("Hold the tones in mind for a moment.")||(x(t,"?"),!await e.wait(me)))return;const l=2;for(let i=0;i<r.length;i++){const u=r[i],s=u.isTarget?"right":"left",c=i===l?s==="right"?"left":"right":s;if(!await e.wait(T)||(await ce(u.cell).catch(()=>{}),!await e.wait(O))||!await e.narrate(`Test ${i+1} of 3: was that tone one of the ones you just heard?`)||!await e.wait(R)||!await M(a,c,e))return;const d=c===s;if(x(t,"?",{color:d?L:$}),!await e.wait(z)||!await e.narrate(B({pressedLabel:A[c],correctLabel:A[s],isCorrect:d,stimulusName:"question mark"}))||(D(a),x(t,"?"),!await e.wait(O)))return}x(t,"")}async function nr(t,e){const n=Ce(),o=ne({leftLabel:"Not on-pattern",rightLabel:"On-pattern"});if(!await qe(t,e,n)||!await e.narrate("Now keep picturing the turned pattern. 3 stars will appear inside the circle. For each star, decide whether it falls <strong>on-pattern</strong> or <strong>not on-pattern</strong>.")||!await e.wait(T))return;const{fillerCells:r,starCells:a}=te(),l=2;for(let i=0;i<3;i++){if(!await e.advanceCaption(""))return;const u=Ie(t,r[i],{visible:!1});if(!await e.wait(Ae))return;I(u);const s=a[i],c=s.isOn?"right":"left",d=i===l?c==="right"?"left":"right":c;if(!await e.narrate(`Star ${i+1} of 3 — judge it against your turned pattern.`)||!await e.wait(T))return;const h=Pe(t,s.cell);if(!await e.wait(R)||!await M(o,d,e))return;const m=d===c;if(Se(h,m?L:$),!await e.wait(z)||!await e.narrate(B({pressedLabel:G[d],correctLabel:G[c],isCorrect:m,stimulusName:"star"}))||(D(o),I(h),!await e.wait(O)))return}}async function or(t,e){const n=Ce(),o=ne({leftLabel:"Not on-pattern",rightLabel:"On-pattern"});if(!await qe(t,e,n)||!await e.narrate("Now keep picturing the turned pattern. 6 things appear inside the circle, mixed together: 3 dots to remember, 3 stars to judge as <strong>on-pattern</strong> or <strong>not on-pattern</strong>.")||!await e.wait(T))return;const{memCells:r,starCells:a,probeCells:l}=te(),i=2;for(let s=0;s<3;s++){if(!await e.narrate(`Dot ${s+1} — remember its location.`)||!await e.wait(T))return;const c=ue(t,r[s]);if(!await e.wait(zt)||(I(c),!await e.wait(O)))return;const d=a[s],h=d.isOn?"right":"left",m=s===i?h==="right"?"left":"right":h;if(!await e.narrate(`Star ${s+1} — judge it against your turned pattern.`)||!await e.wait(T))return;const _=Pe(t,d.cell);if(!await e.wait(R)||!await M(o,m,e))return;const g=m===h;if(Se(_,g?L:$),!await e.wait(z)||!await e.narrate(B({pressedLabel:G[m],correctLabel:G[h],isCorrect:g,stimulusName:"star"}))||(D(o),I(_),!await e.wait(O)))return}if(!await e.narrate("When the question mark appears, the dot tests begin. You may let the picture go now and focus on the dots.")||(Mt(o,"No","Yes"),x(t,"?"),!await e.wait(me)))return;const u=2;for(let s=0;s<l.length;s++){const c=l[s],d=c.isTarget?"right":"left",h=s===u?d==="right"?"left":"right":d;if(!await e.narrate(`Dot test ${s+1} of 3: was a dot shown in this location?`)||!await e.wait(T))return;const m=ue(t,c.cell);if(!await e.wait(R)||!await M(o,h,e))return;const _=h===d;if(m.setAttribute("fill",_?L:$),!await e.wait(z)||!await e.narrate(B({pressedLabel:A[h],correctLabel:A[d],isCorrect:_,stimulusName:"dot"}))||(D(o),I(m),!await e.wait(O)))return}x(t,"")}async function rr(t,e){const n=Ce(),o=ne({leftLabel:"Not on-pattern",rightLabel:"On-pattern"});if(!await qe(t,e,n)||!await e.narrate("Now keep picturing the turned pattern. 6 things happen, mixed together: 3 tones to remember, 3 stars (inside the circle) to judge as <strong>on-pattern</strong> or <strong>not on-pattern</strong>.")||!await e.wait(T))return;const{memCells:r,starCells:a,probeCells:l}=te(),i=2;for(let s=0;s<3;s++){if(!await e.wait(T)||(await ce(r[s]).catch(()=>{}),!await e.wait(O))||!await e.narrate(`That was tone ${s+1} — remember it.`))return;const c=a[s],d=c.isOn?"right":"left",h=s===i?d==="right"?"left":"right":d;if(!await e.narrate(`Star ${s+1} — judge it against your turned pattern.`)||!await e.wait(T))return;const m=Pe(t,c.cell);if(!await e.wait(R)||!await M(o,h,e))return;const _=h===d;if(Se(m,_?L:$),!await e.wait(z)||!await e.narrate(B({pressedLabel:G[h],correctLabel:G[d],isCorrect:_,stimulusName:"star"}))||(D(o),I(m),!await e.wait(O)))return}if(!await e.narrate("When the question mark appears, the tone tests begin. You may let the picture go now and focus on the tones.")||(Mt(o,"No","Yes"),x(t,"?"),!await e.wait(me)))return;const u=2;for(let s=0;s<l.length;s++){const c=l[s],d=c.isTarget?"right":"left",h=s===u?d==="right"?"left":"right":d;if(!await e.wait(T)||(await ce(c.cell).catch(()=>{}),!await e.wait(O))||!await e.narrate(`Tone test ${s+1} of 3: was that tone one of the ones you just heard?`)||!await e.wait(R)||!await M(o,h,e))return;const m=h===d;if(x(t,"?",{color:m?L:$}),!await e.wait(z)||!await e.narrate(B({pressedLabel:A[h],correctLabel:A[d],isCorrect:m,stimulusName:"question mark"}))||(D(o),x(t,"?"),!await e.wait(O)))return}x(t,"")}const ar=3;async function ir(t,e){if(t.state.cancelled)return!1;const n=document.getElementById("demo-buttons-row");if(!n)return!1;n.innerHTML=`
    <div class="demo-buttons-container" style="
      position: relative;
      display: inline-flex;
      align-items: center;
      gap: 1.25rem;
      padding: 0.5rem 0.5rem 1rem;
    ">
      <button type="button" class="demo-btn demo-replay-btn" data-side="right" style="cursor: pointer;">
        <span class="demo-btn-label">Repeat the demonstration</span>
      </button>
    </div>
  `;const o=e===1?" (this is the last replay you can request)":` (you can watch up to ${e} more time${e===1?"":"s"})`;return await t.advanceCaption(`Would you like to watch the demonstration again?${o} Click the button below to watch it again. When you are ready to start the practice, press the <kbd>Space</kbd> key.`)?new Promise(r=>{let a=!1;const l=s=>{if(a)return;a=!0,n.querySelectorAll(".demo-replay-btn").forEach(d=>d.removeEventListener("click",i)),r(s)},i=s=>{const c=s.currentTarget.getAttribute("data-side");l(c==="right")};n.querySelectorAll(".demo-replay-btn").forEach(s=>s.addEventListener("click",i));const u=setInterval(()=>{t.state.cancelled&&(clearInterval(u),l(!1)),a&&clearInterval(u)},100)}):!1}function oe(t){return async function(n,o){let r=0;for(;!o.state.cancelled;){try{await t(n,o)}catch(i){console.error("[demo] mini-trial error",i);return}if(o.state.cancelled)return;o.state.spaceArmed=!0;const a=ar-r;if(a<=0){if(!await o.advanceCaption("That was the last demonstration. Press Space when you are ready to start the practice."))return;we();return}if(!await ir(o,a)){await o.advanceCaption("Press Space when you are ready to start the practice."),we();return}r+=1;try{bn(n),we(),x(n,""),n.rotor.style.transition="",dt(n,0),_e(n)}catch{}if(!await o.advanceCaption("Replaying the demonstration…")||!await o.wait(Wo))return}}}const sr=oe(er),lr=oe(tr),cr=oe(nr),ur=oe(or),dr=oe(rr);function re({phase:t,taskNumber:e,title:n,run:o,factory:r}){const a={type:N,stimulus:Xo(e,n),choices:"NO_KEYS",response_ends_trial:!1,on_load:()=>{const l=document.getElementById("demo-mount");if(!l)return;const i=gn({rotation_deg:0,fixation:"",background_shade:"gray"});l.appendChild(i.wrapper);const u=Qo(),s=window.jsPsych?.getCurrentTrial?.();s&&typeof s=="object"&&(s._demo_state=u.state);let c=!0;const d=h=>{if(c){if(h.key==="ArrowLeft"||h.key==="ArrowRight"){h.preventDefault(),h.stopPropagation();return}if(h.key===" "||h.code==="Space"){if(h.preventDefault(),h.stopPropagation(),!u.state.spaceArmed)return;c=!1,document.removeEventListener("keydown",d,!0),u.state.cancelled=!0,window.jsPsych?.finishTrial?.({demo_advanced_via_space:!0})}}};document.addEventListener("keydown",d,!0),s&&typeof s=="object"&&(s._demo_keydown_handler=d),o(i,u).catch(h=>{console.error(`[demo:${t}] schedule error`,h)})},on_finish:()=>{const l=window.jsPsych?.getCurrentTrial?.();l?._demo_state&&(l._demo_state.cancelled=!0),l?._demo_keydown_handler&&(document.removeEventListener("keydown",l._demo_keydown_handler,!0),l._demo_keydown_handler=null)},data:{phase:t}};return Y(t,r),H(a)}function Dt(){return re({phase:"demo_d_only",taskNumber:1,title:"Remember the dots",run:sr,factory:Dt})}function Bt(){return re({phase:"demo_t_only",taskNumber:2,title:"Remember the tones",run:lr,factory:Bt})}function Yt(){return re({phase:"demo_i_only",taskNumber:3,title:"Picture the pattern",run:cr,factory:Yt})}function Ht(){return re({phase:"demo_i_d",taskNumber:4,title:"Dots and pattern together",run:ur,factory:Ht})}function Ft(){return re({phase:"demo_i_t",taskNumber:5,title:"Tones and pattern together",run:dr,factory:Ft})}const ve=Object.freeze([Object.freeze({id:"ac1_direct_instruction",prompt:"To show you are reading carefully, please type the word <strong>paper</strong> into the box below (lowercase, no punctuation).",expected_answer:"paper"}),Object.freeze({id:"ac2_third_word",prompt:"In the sentence “Click the third word in this sentence”, what is the third word? Type just that word into the box below.",expected_answer:"third"}),Object.freeze({id:"ac3_arrow_mapping",prompt:"When a star points right, you press the right-arrow key. To show you understood, type the word <strong>right</strong> into the box below.",expected_answer:"right"})]);function tt(t){return typeof t!="string"?"":t.trim().toLowerCase()}function le(t){if(!t?.id||!t?.prompt||!t?.expected_answer)throw new Error(`typedAttentionCheckNode: item must have {id, prompt, expected_answer}, got ${JSON.stringify(t)}`);const e=`attention_check_${t.id}`,n={type:V,preamble:"<h2>Quick check</h2>",html:`
      <div style="text-align:left; max-width: 36rem; margin: 0 auto;">
        <p style="margin: 0.75rem 0;">${t.prompt}</p>
        <p style="margin: 0.75rem 0;">
          <label>Your answer:
            <input
              name="response"
              type="text"
              required
              autocomplete="off"
              spellcheck="false"
              style="margin-left: 0.5rem; width: 12rem;"
            />
          </label>
        </p>
      </div>
    `,button_label:"Continue",on_finish:o=>{const r=o.response?.response??"",a=tt(r);o.attention_check_id=t.id,o.attention_check_raw=r,o.attention_check_passed=a===tt(t.expected_answer)},data:{phase:"attention_check"}};return v(e,()=>le(t)),w(n,e)}function hr(t,e=y.attention_checks.instruction_max_failures){const n=(t??[]).filter(a=>a?.phase==="attention_check"),o=n.filter(a=>a.attention_check_passed===!0).length,r=n.filter(a=>a.attention_check_passed===!1).length;return{total:n.length,passed:o,failed:r,exceededThreshold:r>e,threshold:e,ids:n.map(a=>a.attention_check_id)}}function Wt(){const t="attention_check_summary",e={type:V,preamble:"<h2>Thanks — moving on.</h2>",html:`
      <div style="max-width: 36rem; margin: 0 auto;">
        <p>Press <strong>Continue</strong> to proceed to the main task.</p>
      </div>
    `,button_label:"Continue",on_finish:n=>{const o=window.jsPsych?.data?.get().values()??[],r=hr(o);n.phase="attention_check_summary",n.attention_total=r.total,n.attention_passed=r.passed,n.attention_failed=r.failed,n.attention_excluded=r.exceededThreshold,n.attention_threshold=r.threshold}};return v(t,Wt),w(e,t)}const nt=Object.freeze(["d_only","t_only","i_only","i_d","i_t"]);function ot(t){let e=0,n=0;for(const o of t)typeof o.probe_correct=="boolean"&&(n+=1,o.probe_correct&&(e+=1)),typeof o.star_correct=="boolean"&&(n+=1,o.star_correct&&(e+=1));return{correct:e,total:n,accuracy:n>0?e/n:0}}function X({trialType:t,trialsPerType:e,sequencePoolLabelPrefix:n,prng:o}={}){if(!nt.includes(t))throw new Error(`singleTypePractice: unknown trialType '${t}'; expected one of ${nt.join(", ")}`);const r=e??y.blocks.practice_trials_per_type,a=o??je(),l=dn({blockLabel:"practice",countsByType:{[t]:r},sequencePoolLabelPrefix:n??"practice",runLengthCap:Math.max(1,r),prng:a});return{schedule:l.schedule,trialParams:l.trialParams,nodes:l.nodes}}function pr({acc:t,passed:e,willRetry:n,criterion:o}){return mr({acc:t,passed:e,willRetry:n,criterion:o})}function mr({acc:t,passed:e,willRetry:n,criterion:o}){const r=Math.round(t.accuracy*100),a=Math.round(o*100),l=e?'<h2 style="color:#0a7c4d;">Practice complete</h2>':'<h2 style="color:#b3261e;">Practice — keep going</h2>',i=e?`<p>You got <strong>${t.correct} / ${t.total}</strong> correct
       (${r}%), above the ${a}% criterion. Press <kbd>Space</kbd> to
       start the main task.</p>`:n?`<p>You got <strong>${t.correct} / ${t.total}</strong> correct
         (${r}%), below the ${a}% criterion. Let's try the practice
         once more. Press <kbd>Space</kbd> to begin.</p>`:`<p>You got <strong>${t.correct} / ${t.total}</strong> correct
         (${r}%). Press <kbd>Space</kbd> to start the main task.</p>`;return`
    <div style="display: grid; place-items: center; gap: 1rem; max-width: 36rem; margin: 0 auto;">
      ${l}
      ${i}
    </div>
  `}function Gt(){const t=y.blocks.practice_trials_per_type,e=t*5,n=Math.round(y.practice.accuracy_criterion*100),o={type:N,stimulus:`
      <div style="max-width: 38rem; margin: 0 auto; text-align: left;">
        <h2 style="text-align: center;">Instructions</h2>
        <div data-voiceover-target>
          <p>You are about to learn <strong>five short tasks</strong>.
          We'll teach them one at a time: <strong>for each task</strong>
          you will first read a short page of instructions and then do a
          few practice trials of that task before moving on to the next.</p>
          <p>Practice has ${e} trials in total (${t} per
          task). A few quick reading checks are mixed in along the way —
          please read each page carefully.</p>
          <p>If your practice score across all five tasks is below
          ${n}%, the whole instructions-and-practice sequence will
          run once more so you can get the hang of it.</p>
        </div>
        <p style="text-align: center; margin-top: 1.5rem;">
          Press <kbd>Space</kbd> to begin.
        </p>
      </div>
    `,choices:[" "],data:{phase:"instructions_overview"}};return Y(o.data.phase,Gt),H(o)}function fr({trialsPerType:t,accuracyCriterion:e,maxLoops:n,prng:o}={}){if(ve.length!==3)throw new Error(`assembleInstructionsAndPractice: expected exactly 3 attention-check items, got ${ve.length}`);const[r,a,l]=ve,i=t??y.blocks.practice_trials_per_type,u=e??y.practice.accuracy_criterion,s=n??y.practice.max_loops,c=o??je(),d=X({trialType:"d_only",trialsPerType:i,prng:c}),h=X({trialType:"t_only",trialsPerType:i,prng:c}),m=X({trialType:"i_only",trialsPerType:i,prng:c}),_=X({trialType:"i_d",trialsPerType:i,prng:c}),g=X({trialType:"i_t",trialsPerType:i,prng:c});let k=0,E=0,f=null;const F={type:N,stimulus:"",choices:"NO_KEYS",trial_duration:0,on_start:()=>{k+=1,E=window.jsPsych?.data?.get().count()??0},data:()=>({phase:"practice_iteration_start",practice_iteration:k})};function C(){const ae="practice_feedback",Re={type:N,stimulus:()=>{const tn=(window.jsPsych?.data?.get().values()??[]).slice(E),K=ot(tn),ye=K.accuracy>=u,ze=!ye&&k<=s;return f={accuracy:K.accuracy,correct:K.correct,total:K.total,passed:ye,willRetry:ze,attemptCount:k},pr({acc:K,passed:ye,willRetry:ze,criterion:u})},choices:[" "],data:()=>({phase:"practice_feedback",practice_iteration:k,iteration_accuracy:f?.accuracy??null,iteration_correct:f?.correct??null,iteration_total:f?.total??null,iteration_passed:f?.passed??null})};return v(ae,C),w(Re,ae)}const W=C(),en={timeline:[F,Pt(),Dt(),...d.nodes,St(),Bt(),...h.nodes,le(r),Nt(),Yt(),...m.nodes,le(a),qt(),Ht(),..._.nodes,Rt(),Ft(),...g.nodes,le(l),W],loop_function:function(ae){return!(En()||ot(ae.values()).accuracy>=u||k>s)}};return[Gt(),en,Wt()]}const yr=Object.freeze([Object.freeze({value:1,label:'No image at all; you only "know" that you are thinking of the object'}),Object.freeze({value:2,label:"Vague and dim"}),Object.freeze({value:3,label:"Moderately clear and vivid"}),Object.freeze({value:4,label:"Clear and reasonably vivid"}),Object.freeze({value:5,label:"Perfectly clear and as vivid as normal vision"})]),de=Object.freeze([Object.freeze({id:"vviq_v1_relative",preamble:"Think of some relative or friend whom you frequently see (but who is not with you at present) and consider carefully the picture that comes before your mind’s eye.",items:Object.freeze([Object.freeze({id:"vviq_q01",text:"The exact contour of face, head, shoulders and body."}),Object.freeze({id:"vviq_q02",text:"Characteristic poses of head, attitudes of body, etc."}),Object.freeze({id:"vviq_q03",text:"The precise carriage, length of step, etc. in walking."}),Object.freeze({id:"vviq_q04",text:"The different colours worn in some familiar clothes."})])}),Object.freeze({id:"vviq_v2_sunrise",preamble:"Think of the rising sun. Consider carefully the picture that comes before your mind’s eye.",items:Object.freeze([Object.freeze({id:"vviq_q05",text:"The sun is rising above the horizon into a hazy sky."}),Object.freeze({id:"vviq_q06",text:"The sky clears and surrounds the sun with blueness."}),Object.freeze({id:"vviq_q07",text:"Clouds. A storm blows up, with flashes of lightning."}),Object.freeze({id:"vviq_q08",text:"A rainbow appears."})])}),Object.freeze({id:"vviq_v3_shop",preamble:"Think of the front of a shop which you often go to. Consider the picture that comes before your mind’s eye.",items:Object.freeze([Object.freeze({id:"vviq_q09",text:"The overall appearance of the shop from the opposite side of the road."}),Object.freeze({id:"vviq_q10",text:"A window display including colours, shape and details of individual items for sale."}),Object.freeze({id:"vviq_q11",text:"You are near the entrance. The colour, shape and details of the door."}),Object.freeze({id:"vviq_q12",text:"You enter the shop and go to the counter. The counter assistant serves you. Money changes hands."})])}),Object.freeze({id:"vviq_v4_country",preamble:"Think of a country scene which involves trees, mountains and a lake. Consider the picture that comes before your mind’s eye.",items:Object.freeze([Object.freeze({id:"vviq_q13",text:"The contours of the landscape."}),Object.freeze({id:"vviq_q14",text:"The colour and shape of the trees."}),Object.freeze({id:"vviq_q15",text:"The colour and shape of the lake."}),Object.freeze({id:"vviq_q16",text:"A strong wind blows on the tree and on the lake causing waves."})])}),Object.freeze({id:"vviq_v5_highway",preamble:"Think of being driven in a fast-moving car by a relative or friend along a major highway. Consider the picture that comes into your mind’s eye.",items:Object.freeze([Object.freeze({id:"vviq_q17",text:"You observe the heavy traffic travelling at maximum speed around your car. The overall appearance of vehicles, their colours, sizes and shapes."}),Object.freeze({id:"vviq_q18",text:"Your car accelerates to overtake the traffic directly in front of you. You see an urgent expression on the face of the driver and the people in the other vehicles as you pass."}),Object.freeze({id:"vviq_q19",text:"A large truck is flashing its headlight directly behind. Your car quickly moves over to let the truck pass. The driver signals with a friendly wave."}),Object.freeze({id:"vviq_q20",text:"You see a broken-down vehicle beside the road. Its lights are flashing. The driver is looking concerned and she is using a mobile phone."})])}),Object.freeze({id:"vviq_v6_beach",preamble:"Think of the beach by the ocean on a warm summer’s day. Consider the picture that comes before your mind’s eye.",items:Object.freeze([Object.freeze({id:"vviq_q21",text:"The overall appearance and colour of the water, surf, and sky."}),Object.freeze({id:"vviq_q22",text:"Bathers are swimming and splashing about in the water. Some are playing with a brightly coloured beach ball."}),Object.freeze({id:"vviq_q23",text:"An ocean liner crosses the horizon. It leaves a trail of smoke in the blue sky."}),Object.freeze({id:"vviq_q24",text:"A beautiful air balloon appears with four people aboard. The balloon drifts past you, almost directly overhead. The passengers wave and smile. You wave and smile back at them."})])}),Object.freeze({id:"vviq_v7_railway",preamble:"Think of a railway station. Consider the picture that comes before your mind’s eye.",items:Object.freeze([Object.freeze({id:"vviq_q25",text:"The overall appearance of the station viewed from in front of the main entrance."}),Object.freeze({id:"vviq_q26",text:"You walk into the station. The colour, shape and details of the entrance hall."}),Object.freeze({id:"vviq_q27",text:"You approach the ticket office, go to a vacant counter and purchase your ticket."}),Object.freeze({id:"vviq_q28",text:"You walk to the platform and observe other passengers and the railway lines. A train arrives. You climb aboard."})])}),Object.freeze({id:"vviq_v8_garden",preamble:"Finally, think of a garden with lawns, bushes, flowers and shrubs. Consider the picture that comes before your mind’s eye.",items:Object.freeze([Object.freeze({id:"vviq_q29",text:"The overall appearance and design of the garden."}),Object.freeze({id:"vviq_q30",text:"The colour and shape of the bushes and shrubs."}),Object.freeze({id:"vviq_q31",text:"The colour and appearance of the flowers."}),Object.freeze({id:"vviq_q32",text:"Some birds fly down onto the lawn and start pecking for food."})])})]),rt=de.reduce((t,e)=>t+e.items.length,0);if(rt!==32)throw new Error(`VVIQ_VIGNETTES must contain exactly 32 items, got ${rt}`);function Ut(t){const e=t.items.map(a=>{const l=yr.map(i=>`<option value="${i.value}">${i.value} — ${i.label}</option>`).join("");return`
        <tr>
          <td style="padding: 0.5rem 0.75rem 0.5rem 0; vertical-align: top;">${a.text}</td>
          <td style="padding: 0.5rem 0; vertical-align: top;">
            <select name="${a.id}" required>
              <option value="">—</option>
              ${l}
            </select>
          </td>
        </tr>`}).join(""),n=de.findIndex(a=>a.id===t.id)+1,o=t.id,r={type:V,preamble:`
      <h2>Imagery questionnaire (part ${n} of ${de.length})</h2>
      <p style="max-width: 40rem; margin: 0.5rem auto; text-align: left;">
        ${t.preamble}
      </p>
      <p style="max-width: 40rem; margin: 0.5rem auto; text-align: left;">
        For each item below, rate the vividness of the image that comes to mind.
      </p>
    `,html:`
      <div style="max-width: 44rem; margin: 0 auto;">
        <table style="width: 100%; border-collapse: collapse; text-align: left;">
          ${e}
        </table>
      </div>
    `,button_label:"Continue",on_finish:a=>{a.phase="vviq",a.vviq_vignette_id=t.id,a.vviq_responses=t.items.reduce((l,i)=>{const u=a.response?.[i.id];return l[i.id]=u===""||u===null||u===void 0?null:Number(u),l},{})}};return v(o,()=>Ut(t)),w(r,o)}function gr(){return de.map(Ut)}const U=Object.freeze([Object.freeze({id:"me_q01",gold_msi:"MT01",text:"I engaged in regular, daily practice of a musical instrument (including voice) for ___ years.",options:Object.freeze([Object.freeze({value:"0",label:"0",score:1}),Object.freeze({value:"1",label:"1",score:2}),Object.freeze({value:"2",label:"2",score:3}),Object.freeze({value:"3",label:"3",score:4}),Object.freeze({value:"4-5",label:"4–5",score:5}),Object.freeze({value:"6-9",label:"6–9",score:6}),Object.freeze({value:"10+",label:"10 or more",score:7})])}),Object.freeze({id:"me_q02",gold_msi:"MT02",text:"At the peak of my interest, I practised my primary instrument for ___ hours per day.",options:Object.freeze([Object.freeze({value:"0",label:"0",score:1}),Object.freeze({value:"0.5",label:"0.5",score:2}),Object.freeze({value:"1",label:"1",score:3}),Object.freeze({value:"1.5",label:"1.5",score:4}),Object.freeze({value:"2",label:"2",score:5}),Object.freeze({value:"3-4",label:"3–4",score:6}),Object.freeze({value:"5+",label:"5 or more",score:7})])}),Object.freeze({id:"me_q03",gold_msi:"MT03",text:"I have had formal training in music theory for ___ years.",options:Object.freeze([Object.freeze({value:"0",label:"0",score:1}),Object.freeze({value:"0.5",label:"0.5",score:2}),Object.freeze({value:"1",label:"1",score:3}),Object.freeze({value:"2",label:"2",score:4}),Object.freeze({value:"3",label:"3",score:5}),Object.freeze({value:"4-6",label:"4–6",score:6}),Object.freeze({value:"7+",label:"7 or more",score:7})])}),Object.freeze({id:"me_q04",gold_msi:"MT04",text:"I have had ___ years of formal training on a musical instrument (including voice) during my lifetime — count school music classes <strong>and</strong> private lessons / conservatory together.",options:Object.freeze([Object.freeze({value:"0",label:"0",score:1}),Object.freeze({value:"0.5",label:"0.5",score:2}),Object.freeze({value:"1",label:"1",score:3}),Object.freeze({value:"2",label:"2",score:4}),Object.freeze({value:"3-5",label:"3–5",score:5}),Object.freeze({value:"6-9",label:"6–9",score:6}),Object.freeze({value:"10+",label:"10 or more",score:7})])}),Object.freeze({id:"me_q05",gold_msi:"MT05",text:"I can play ___ musical instruments.",options:Object.freeze([Object.freeze({value:"0",label:"0",score:1}),Object.freeze({value:"1",label:"1",score:2}),Object.freeze({value:"2",label:"2",score:3}),Object.freeze({value:"3",label:"3",score:4}),Object.freeze({value:"4",label:"4",score:5}),Object.freeze({value:"5",label:"5",score:6}),Object.freeze({value:"6+",label:"6 or more",score:7})])}),Object.freeze({id:"me_q06",gold_msi:"MT06",text:"I would consider myself a musician.",options:Object.freeze([Object.freeze({value:"1",label:"1 — Completely disagree",score:1}),Object.freeze({value:"2",label:"2",score:2}),Object.freeze({value:"3",label:"3",score:3}),Object.freeze({value:"4",label:"4 — Neither agree nor disagree",score:4}),Object.freeze({value:"5",label:"5",score:5}),Object.freeze({value:"6",label:"6",score:6}),Object.freeze({value:"7",label:"7 — Completely agree",score:7})])}),Object.freeze({id:"me_q07",gold_msi:"MT07",text:"The musical instrument I play best (including voice), I play at the level of a:",options:Object.freeze([Object.freeze({value:"none",label:"I do not play any instrument",score:1}),Object.freeze({value:"beginner",label:"Beginner",score:2.5}),Object.freeze({value:"intermediate",label:"Intermediate",score:4}),Object.freeze({value:"advanced",label:"Advanced",score:5.5}),Object.freeze({value:"expert",label:"Expert / professional",score:7})])}),Object.freeze({id:"me_q08",gold_msi:null,text:'Can you name a musical note (e.g., "C", "F♯") just from hearing it played, without comparing it to any reference note? (This is sometimes called "absolute pitch" or "perfect pitch".)',options:Object.freeze([Object.freeze({value:"no",label:"No",score:null}),Object.freeze({value:"unsure",label:"I am not sure / sometimes",score:null}),Object.freeze({value:"yes",label:"Yes — reliably",score:null})])})]);if(U.length!==8)throw new Error(`MUSIC_EXPERIENCE_ITEMS must contain exactly 8 items, got ${U.length}`);(()=>{const t={};for(const e of U){t[e.id]={};for(const n of e.options)t[e.id][n.value]=n.score}return Object.freeze(t)})();Object.freeze(U.filter(t=>t.gold_msi!==null).map(t=>t.id));function Vt(){const t="music_experience_intro",e={type:V,preamble:`
      <div style="max-width: 40rem; margin: 0 auto; text-align: left;">
        <h2 style="text-align: center;">Music background — 8 quick questions</h2>
        <p>The task you just finished played short tones. Different people
        listen to those tones in different ways depending on their music
        background. The next page asks eight short questions about music
        training and instrument practice.</p>
        <p>Please answer based on <strong>what you have actually done</strong>
        (years, hours, instruments) rather than how you compare to professional
        musicians — there are no right or wrong answers, and the scale is
        designed for everyone from people who have never played an instrument
        to people who play professionally.</p>
      </div>
    `,html:'<div style="text-align: center; padding: 1rem 0;"><em>Click Continue to begin.</em></div>',button_label:"Continue",on_finish:n=>{n.phase="music_experience_intro"}};return v(t,Vt),w(e,t)}function Kt(){const t=U.map(o=>{const r=o.options.map(a=>`<option value="${a.value}">${a.label}</option>`).join("");return`
      <tr>
        <td style="padding: 0.75rem 0.75rem 0.75rem 0; vertical-align: top; max-width: 28rem;">
          ${o.text}
        </td>
        <td style="padding: 0.75rem 0; vertical-align: top;">
          <select name="${o.id}" required>
            <option value="">—</option>
            ${r}
          </select>
        </td>
      </tr>`}).join(""),e="music_experience",n={type:V,preamble:`
      <h2>Music background</h2>
      <p style="max-width: 40rem; margin: 0.5rem auto; text-align: left;">
        Please answer each of the eight questions below based on what you
        have actually done — count years, hours, and instruments as
        accurately as you can. There are no right or wrong answers.
      </p>
    `,html:`
      <div style="max-width: 44rem; margin: 0 auto;">
        <table style="width: 100%; border-collapse: collapse; text-align: left;">
          ${t}
        </table>
      </div>
    `,button_label:"Continue",on_finish:o=>{o.phase="music_experience",o.music_experience_responses=U.reduce((r,a)=>{const l=o.response?.[a.id];return r[a.id]=l===""||l===null||l===void 0?null:String(l),r},{})}};return v(e,Kt),w(n,e)}function br(){return[Vt(),Kt()]}function Jt(){const t="questionnaire_intro",e={type:N,stimulus:`
      <div style="max-width: 38rem; margin: 0 auto; text-align: left;">
        <h2 style="text-align: center;">One last set of questions</h2>
        <p>You have finished the main task — thank you. Before we save your
        data, we have two short questionnaires:</p>
        <ol>
          <li>A <strong>visual imagery</strong> questionnaire — eight short
          scene descriptions, with vividness ratings for some specific
          details (about 8–10 minutes).</li>
          <li>A <strong>music background</strong> questionnaire — five quick
          questions about your music training and listening (about 1 minute).</li>
        </ol>
        <p>There are no right or wrong answers; people differ widely on both
        of these dimensions, and that is exactly what we want to measure.</p>
        <p style="text-align: center; margin-top: 1.5rem;">
          Press <kbd>Space</kbd> to begin.
        </p>
      </div>
    `,choices:[" "],data:{phase:"questionnaire_intro"}};return v(t,Jt),w(e,t)}function wr(){return[Jt(),...gr(),...br()]}function Xt(){const t="main_a_intro",e={type:N,stimulus:`
      <div style="max-width: 36rem; margin: 0 auto;">
        <h2>Main task — Block 1 of 2</h2>
        <div data-voiceover-target>
          <p>Now the main task begins. There are two blocks of 60 trials. Each
          block includes a ${y.blocks.rest_duration_s}-second rest after
          trials 20 and 40, and there is another
          ${y.blocks.rest_duration_s}-second rest between the two blocks.</p>
          <p>Same controls as the practice: <strong>Yes</strong> /
          <strong>On-pattern</strong> on one response key,
          <strong>No</strong> / <strong>Not on-pattern</strong> on the
          other.</p>
          <p>Press <kbd>Space</kbd> to begin Block 1.</p>
        </div>
      </div>
    `,choices:[" "],data:{phase:"main_a_intro"}};return v(t,Xt),w(e,t)}function Qt(){const t="main_b_intro",e={type:N,stimulus:`
      <div style="max-width: 36rem; margin: 0 auto;">
        <h2>Main task — Block 2 of 2</h2>
        <div data-voiceover-target>
          <p>Last block. 60 more trials, same controls, with
          ${y.blocks.rest_duration_s}-second rests after trials 20
          and 40.</p>
          <p>Press <kbd>Space</kbd> to begin Block 2.</p>
        </div>
      </div>
    `,choices:[" "],data:{phase:"main_b_intro"}};return v(t,Qt),w(e,t)}function Zt(){const t="end_of_task_intro",e={type:N,stimulus:`
      <div style="max-width: 36rem; margin: 0 auto;">
        <h2>You've finished the task</h2>
        <div data-voiceover-target>
          <p>Thank you for completing the experiment. We'll save your data now —
          this usually takes a few seconds.</p>
          <p>Press <kbd>Space</kbd> to continue.</p>
        </div>
      </div>
    `,choices:[" "],data:{phase:"end_of_task_intro"},on_load:()=>{hn()}};return v(t,Zt),w(e,t)}const j=nn(),vr=on();function _r(){if(ut(),typeof Image<"u"){const t=new Image;t.src="./assets/rotation-arrow.png"}}_r();const fe=rn({display_element:void 0,on_trial_start:Nn(),on_data_update:t=>{it(t).catch(e=>{console.error("[runner] storage append failed",e),st(e)})},on_finish:()=>{const t=fe.data?.get?.();t&&typeof t.addProperties=="function"&&t.addProperties({session_id:j.params.session_id,prolific_pid:j.params.prolific_pid,study_id:j.params.study_id,is_preview:j.params.is_preview,is_pilot_run:j.is_pilot_run,pilot_label:j.pilot_label,prng_seed_uint32:j.prng_seed_uint32,schema_version:j.schema_version,build_id:j.build_id}),console.info("[runner] session",j,"visibility",Eo())}});window.jsPsych=fe;Ln(fe);const at=pn(),kr=[...Co(),...fr(),Xt(),...at.mainA.nodes,mn(),Qt(),...at.mainB.nodes,Zt(),...wr(),fn({session:j}),yn()];vr.then(()=>fe.run(kr)).catch(t=>{console.error("[runner] fatal startup failure",t);const e=document.body;e.innerHTML=`
      <div style="max-width: 36rem; margin: 4rem auto; padding: 2rem; text-align: center;">
        <h2>Unable to start the experiment</h2>
        <p>Your browser is blocking the local storage this study needs. Please
        try a different browser (Chrome, Firefox, or Safari) on a desktop or
        laptop computer, with private/incognito mode disabled.</p>
        <p><small>Error reference: <code>${t&&t.message||"unknown"}</code></small></p>
      </div>
    `});
//# sourceMappingURL=main-CvobjCxK.js.map
