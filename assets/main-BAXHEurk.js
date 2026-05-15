import"./modulepreload-polyfill-B5Qt9EMX.js";import{P as p,a as ot,r as at,H as N,g as Ie,i as nn,b as rn,c as on}from"./index-Bz6dieJX.js";import{s as Q,a as it,u as an,g as st,b as qe,c as sn,d as lt,p as ln,e as ze,h as cn,f as un,F as A,i as $,j as de,k as dn,n as ct,l as hn,m as pn,r as mn}from"./main-blocks-C07_QOIn.js";import{c as g}from"./config-zUhCg_tb.js";import{u as fn,c as yn}from"./debrief-pGFuma2H.js";import{c as gn,a as bn,s as I,b as ut,h as _e,d as he,r as P,e as Oe,f as Pe,g as Se,i as wn,j as Me,o as _n,k as vn}from"./pattern-CJtvzC-V.js";var kn="2.1.0";const Tn={name:"html-button-response",version:kn,parameters:{stimulus:{type:p.HTML_STRING,default:void 0},choices:{type:p.STRING,default:void 0,array:!0},button_html:{type:p.FUNCTION,default:function(t,e){return`<button class="jspsych-btn">${t}</button>`}},prompt:{type:p.HTML_STRING,default:null},stimulus_duration:{type:p.INT,default:null},trial_duration:{type:p.INT,default:null},button_layout:{type:p.STRING,default:"grid"},grid_rows:{type:p.INT,default:1},grid_columns:{type:p.INT,default:null},response_ends_trial:{type:p.BOOL,default:!0},enable_button_after:{type:p.INT,default:0}},data:{rt:{type:p.INT},response:{type:p.INT},stimulus:{type:p.HTML_STRING}},citations:{apa:"de Leeuw, J. R., Gilbert, R. A., & Luchterhandt, B. (2023). jsPsych: Enabling an Open-Source Collaborative Ecosystem of Behavioral Experiments. Journal of Open Source Software, 8(85), 5351. https://doi.org/10.21105/joss.05351 ",bibtex:'@article{Leeuw2023jsPsych, 	author = {de Leeuw, Joshua R. and Gilbert, Rebecca A. and Luchterhandt, Bj{\\" o}rn}, 	journal = {Journal of Open Source Software}, 	doi = {10.21105/joss.05351}, 	issn = {2475-9066}, 	number = {85}, 	year = {2023}, 	month = {may 11}, 	pages = {5351}, 	publisher = {Open Journals}, 	title = {jsPsych: Enabling an {Open}-{Source} {Collaborative} {Ecosystem} of {Behavioral} {Experiments}}, 	url = {https://joss.theoj.org/papers/10.21105/joss.05351}, 	volume = {8}, }  '}};class S{constructor(e){this.jsPsych=e}static{this.info=Tn}trial(e,n){const r=document.createElement("div");r.id="jspsych-html-button-response-stimulus",r.innerHTML=n.stimulus,e.appendChild(r);const o=document.createElement("div");if(o.id="jspsych-html-button-response-btngroup",n.button_layout==="grid"){if(o.classList.add("jspsych-btn-group-grid"),n.grid_rows===null&&n.grid_columns===null)throw new Error("You cannot set `grid_rows` to `null` without providing a value for `grid_columns`.");const c=n.grid_columns===null?Math.ceil(n.choices.length/n.grid_rows):n.grid_columns,h=n.grid_rows===null?Math.ceil(n.choices.length/n.grid_columns):n.grid_rows;o.style.gridTemplateColumns=`repeat(${c}, 1fr)`,o.style.gridTemplateRows=`repeat(${h}, 1fr)`}else n.button_layout==="flex"&&o.classList.add("jspsych-btn-group-flex");for(const[c,h]of n.choices.entries()){o.insertAdjacentHTML("beforeend",n.button_html(h,c));const m=o.lastChild;m.dataset.choice=c.toString(),m.addEventListener("click",()=>{d(c)})}e.appendChild(o),n.prompt!==null&&e.insertAdjacentHTML("beforeend",n.prompt);var a=performance.now(),i={rt:null,button:null};const l=()=>{var c={rt:i.rt,stimulus:n.stimulus,response:i.button};this.jsPsych.finishTrial(c)};function d(c){var h=performance.now(),m=Math.round(h-a);i.button=parseInt(c),i.rt=m,r.classList.add("responded");for(const w of o.children)w.setAttribute("disabled","disabled");n.response_ends_trial&&l()}if(n.stimulus_duration!==null&&this.jsPsych.pluginAPI.setTimeout(()=>{r.style.visibility="hidden"},n.stimulus_duration),n.enable_button_after>0){for(var s=document.querySelectorAll("#jspsych-html-button-response-btngroup button"),u=0;u<s.length;u++)s[u].setAttribute("disabled","disabled");this.jsPsych.pluginAPI.setTimeout(()=>{for(var c=document.querySelectorAll("#jspsych-html-button-response-btngroup button"),h=0;h<c.length;h++)c[h].removeAttribute("disabled")},n.enable_button_after)}n.trial_duration!==null&&this.jsPsych.pluginAPI.setTimeout(l,n.trial_duration)}simulate(e,n,r,o){n=="data-only"&&(o(),this.simulate_data_only(e,r)),n=="visual"&&this.simulate_visual(e,r,o)}create_simulation_data(e,n){const r={stimulus:e.stimulus,rt:this.jsPsych.randomization.sampleExGaussian(500,50,.006666666666666667,!0)+e.enable_button_after,response:this.jsPsych.randomization.randomInt(0,e.choices.length-1)},o=this.jsPsych.pluginAPI.mergeSimulationData(r,n);return this.jsPsych.pluginAPI.ensureSimulationDataConsistency(e,o),o}simulate_data_only(e,n){const r=this.create_simulation_data(e,n);this.jsPsych.finishTrial(r)}simulate_visual(e,n,r){const o=this.create_simulation_data(e,n),a=this.jsPsych.getDisplayElement();this.trial(a,e),r(),o.rt!==null&&this.jsPsych.pluginAPI.clickTarget(a.querySelector(`#jspsych-html-button-response-btngroup [data-choice="${o.response}"]`),o.rt)}}let De=!1,q=[];const ve=new Map;let Z=!1,ke=!1;function xn(t){!t||typeof t!="string"||q[q.length-1]!==t&&(q.push(t),q.length>32&&q.shift())}function dt(t){const e=typeof t?.data=="function"?null:t?.data??null;return typeof e?.phase=="string"?e.phase:null}function En(t,e){return t&&typeof t=="object"&&typeof t!="function"?{...t,hidden_nav_step:e}:(...n)=>({...typeof t=="function"?t(...n):{},hidden_nav_step:e})}function v(t,e){!t||typeof t!="string"||typeof e!="function"||ve.set(t,e)}function b(t,e=dt(t)){if(!e||typeof e!="string")return t;const n=t?.on_load;return t.data=En(t?.data,e),t._hidden_nav_checkpoint=!0,t.on_load=(...r)=>{xn(e),n?.(...r)},t}function F(t,e){v(t,e)}function H(t){return b(t,dt(t))}function In(){const t=ke;return ke=!1,t}function On(t){const e=t?.timeline?.getLatestNode?.();return e&&typeof e.getDataParameter=="function"?e:null}function Pn(t){try{const e=On(t);if(!e)return null;const n=e.getDataParameter?.()??{},r=typeof n.hidden_nav_step=="string"?n.hidden_nav_step:null;return{node:e,stepId:r,phase:typeof n.phase=="string"?n.phase:null}}catch{return null}}function Sn(t){const e=t?.description?.type?.info?.name??null;return e==="html-button-response"?{response:0}:e==="survey-html-form"?{response:{}}:{}}function jn(t){const e=q.slice();if(t)for(;e[e.length-1]===t;)e.pop();return{trimmedHistory:e,prevStepId:e[e.length-1]??null}}function Ye(t,e){const n=t?.parent?.description?.timeline;if(!Array.isArray(n))return!1;const r=n.indexOf(t.description);return r<0?!1:(n.splice(r+1,0,...e),!0)}function Ln(){return function(e){if(e?._hidden_nav_checkpoint===!0){Z&&(Z=!1),Q(!1);return}if(!Z){Q(!1);return}!e||typeof e!="object"||(e.trial_duration=0,e.choices="NO_KEYS")}}function Nn(t){if(De||typeof document>"u")return;const e=n=>{const r=n.target&&n.target.tagName||"";if(r==="INPUT"||r==="TEXTAREA"||n.target?.isContentEditable||n.metaKey||n.ctrlKey||n.altKey)return;const o=n.key?.toLowerCase?.();if(o!=="u"&&o!=="r")return;const a=Pn(t);if(!a)return;n.preventDefault(),n.stopPropagation(),it();const i=Sn(a.node),l=!!a.stepId;if(o==="u"){ke=!0,l||(Z=!0),Q(!0),t.finishTrial({...i,phase:a.phase,hidden_nav:"forward",hidden_nav_step:a.stepId??null});return}const{trimmedHistory:d,prevStepId:s}=jn(a.stepId),u=s?ve.get(s):null;if(!u)return;let c=!1;if(l){const h=ve.get(a.stepId);if(!h)return;c=Ye(a.node,[u(),h()])}else c=Ye(a.node,[u()]);c&&(q=d,Z=!1,l?Q(!1):Q(!0),t.finishTrial({...i,phase:a.phase,hidden_nav:"back",hidden_nav_step:a.stepId??null,hidden_nav_target_step:s}))};document.addEventListener("keydown",e,!0),De=!0}const An="online-2101803-v1",$n=`
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
`;function ht(){const t="consent";let e=!1;const n={type:S,stimulus:$n,choices:["I consent — begin","I do not consent — exit"],button_html:(r,o)=>`<button class="jspsych-btn" data-idx="${o}"${o===0?" disabled":""}>${r}</button>`,on_load:()=>{e=!1;const r=document.getElementById("consent-checkbox"),o=document.querySelector('button.jspsych-btn[data-idx="0"]');!r||!o||r.addEventListener("change",()=>{e=r.checked,o.disabled=!r.checked})},on_finish:async r=>{r.consented=r.response===0,r.consent_acknowledged=e,r.consent_version=An,r.consented&&await an()},data:{phase:"consent"}};return v(t,ht),b(n,t)}function Cn(){return{timeline:[{type:S,stimulus:`
          <h2>Thank you</h2>
          <p>You declined consent. You may close this tab now.</p>
          <p>Please return your submission on Prolific so that the study slot can be reassigned.</p>
        `,choices:["Close"],on_finish:()=>{typeof window<"u"&&window.jsPsych?.abortExperiment&&window.jsPsych.abortExperiment("Consent declined.")}}],conditional_function:()=>{const t=window.jsPsych?.data?.get().filter({phase:"consent"}).last(1).values()[0];return t?t.consented===!1:!1}}}var Rn="2.1.0";const qn={name:"survey-html-form",version:Rn,parameters:{html:{type:p.HTML_STRING,default:null},preamble:{type:p.HTML_STRING,default:null},button_label:{type:p.STRING,default:"Continue"},autofocus:{type:p.STRING,default:""},dataAsArray:{type:p.BOOL,default:!1},autocomplete:{type:p.BOOL,default:!1}},data:{response:{type:p.OBJECT},rt:{type:p.INT}},citations:{apa:"de Leeuw, J. R., Gilbert, R. A., & Luchterhandt, B. (2023). jsPsych: Enabling an Open-Source Collaborative Ecosystem of Behavioral Experiments. Journal of Open Source Software, 8(85), 5351. https://doi.org/10.21105/joss.05351 ",bibtex:'@article{Leeuw2023jsPsych, 	author = {de Leeuw, Joshua R. and Gilbert, Rebecca A. and Luchterhandt, Bj{\\" o}rn}, 	journal = {Journal of Open Source Software}, 	doi = {10.21105/joss.05351}, 	issn = {2475-9066}, 	number = {85}, 	year = {2023}, 	month = {may 11}, 	pages = {5351}, 	publisher = {Open Journals}, 	title = {jsPsych: Enabling an {Open}-{Source} {Collaborative} {Ecosystem} of {Behavioral} {Experiments}}, 	url = {https://joss.theoj.org/papers/10.21105/joss.05351}, 	volume = {8}, }  '}};class V{constructor(e){this.jsPsych=e}static{this.info=qn}trial(e,n){var r="";if(n.preamble!==null&&(r+='<div id="jspsych-survey-html-form-preamble" class="jspsych-survey-html-form-preamble">'+n.preamble+"</div>"),n.autocomplete?r+='<form id="jspsych-survey-html-form">':r+='<form id="jspsych-survey-html-form" autocomplete="off">',r+=n.html,r+='<input type="submit" id="jspsych-survey-html-form-next" class="jspsych-btn jspsych-survey-html-form" value="'+n.button_label+'"></input>',r+="</form>",e.innerHTML=r,n.autofocus!==""){var o=e.querySelectorAll("#"+n.autofocus);o.length===0?console.warn("No element found with id: "+n.autofocus):o.length>1?console.warn('The id "'+n.autofocus+'" is not unique so autofocus will not work.'):o[0].focus()}e.querySelector("#jspsych-survey-html-form").addEventListener("submit",d=>{d.preventDefault();var s=performance.now(),u=Math.round(s-a),c=e.querySelector("#jspsych-survey-html-form"),h=i(c);n.dataAsArray||(h=l(h));var m={rt:u,response:h};this.jsPsych.finishTrial(m)});var a=performance.now();function i(d){for(var s=[],u=0;u<d.elements.length;u++){var c=d.elements[u];if(!(!c.name||c.disabled||c.type==="file"||c.type==="reset"||c.type==="submit"||c.type==="button"))if(c.type==="select-multiple")for(var h=0;h<c.options.length;h++)c.options[h].selected&&s.push({name:c.name,value:c.options[h].value});else(c.type!=="checkbox"&&c.type!=="radio"||c.checked)&&s.push({name:c.name,value:c.value})}return s}function l(d){for(var s={},u=0;u<d.length;u++)s[d[u].name]=d[u].value;return s}}}const zn=`
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
`;function pt(){const t="demographics",e={type:V,preamble:`
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
    `,button_label:"Continue",data:{phase:"demographics"}};return v(t,pt),b(e,t)}var Mn="2.1.0";const Dn={name:"call-function",version:Mn,parameters:{func:{type:p.FUNCTION,default:void 0},async:{type:p.BOOL,default:!1}},data:{value:{type:p.COMPLEX,default:void 0}},citations:{apa:"de Leeuw, J. R., Gilbert, R. A., & Luchterhandt, B. (2023). jsPsych: Enabling an Open-Source Collaborative Ecosystem of Behavioral Experiments. Journal of Open Source Software, 8(85), 5351. https://doi.org/10.21105/joss.05351 ",bibtex:'@article{Leeuw2023jsPsych, 	author = {de Leeuw, Joshua R. and Gilbert, Rebecca A. and Luchterhandt, Bj{\\" o}rn}, 	journal = {Journal of Open Source Software}, 	doi = {10.21105/joss.05351}, 	issn = {2475-9066}, 	number = {85}, 	year = {2023}, 	month = {may 11}, 	pages = {5351}, 	publisher = {Open Journals}, 	title = {jsPsych: Enabling an {Open}-{Source} {Collaborative} {Ecosystem} of {Behavioral} {Experiments}}, 	url = {https://joss.theoj.org/papers/10.21105/joss.05351}, 	volume = {8}, }  '}};class me{constructor(e){this.jsPsych=e}static{this.info=Dn}trial(e,n){let r;const o=()=>{const a={value:r};this.jsPsych.finishTrial(a)};if(n.async){const a=i=>{r=i,o()};n.func(a)}else r=n.func(),o()}}function Yn({userAgent:t="",hasHover:e=null,hasFinePointer:n=null,maxTouchPoints:r=0}={}){const o=String(t).toLowerCase(),a=Number.isFinite(r)?r:0,i=[];return/\biphone\b/.test(o)&&i.push("iphone"),/\bipod\b/.test(o)&&i.push("ipod"),/\bipad\b/.test(o)&&i.push("ipad"),/macintosh/.test(o)&&a>1&&i.push("ipad_macos_disguised"),/android/.test(o)&&i.push("android"),/mobile/.test(o)&&!/iphone|ipad|ipod|android/.test(o)&&i.push("mobile_ua"),e===!1&&n===!1&&i.push("no_hover_no_fine_pointer"),{isDesktop:i.length===0,reasons:i,userAgent:String(t),hasHover:e,hasFinePointer:n,maxTouchPoints:a}}function Bn(){const t=typeof navigator<"u"?navigator.userAgent??"":"";let e=null,n=null;if(typeof window<"u"&&typeof window.matchMedia=="function"){try{e=window.matchMedia("(hover: hover)").matches}catch{e=null}try{n=window.matchMedia("(pointer: fine)").matches}catch{n=null}}const r=typeof navigator<"u"&&Number.isFinite(navigator.maxTouchPoints)?navigator.maxTouchPoints:0;return{userAgent:t,hasHover:e,hasFinePointer:n,maxTouchPoints:r}}function Fn(){return{type:me,async:!1,func:()=>Yn(Bn()),data:{phase:"desktop_gate"}}}function Hn(){return{timeline:[{type:S,stimulus:`
          <h2>Sorry — this study requires a desktop or laptop computer</h2>
          <p style="max-width: 38rem; margin: 0 auto 1rem;">
            The task uses keyboard arrow keys and a fullscreen visual display.
            It cannot be completed on a phone or tablet.
          </p>
          <p style="max-width: 38rem; margin: 0 auto;">
            Please return the study on Prolific so the slot can be reopened
            for another participant. We're sorry for the inconvenience.
          </p>
        `,choices:["Close"],data:{phase:"desktop_gate_fail"},on_finish:()=>{typeof window<"u"&&window.jsPsych?.abortExperiment&&window.jsPsych.abortExperiment("Desktop required.")}}],conditional_function:()=>{const e=window.jsPsych?.data?.get().filter({phase:"desktop_gate"}).last(1).values()[0]?.value;return e?!e.isDesktop:!1}}}const Gn=85.6,Te=1.5,xe=12,Un=100,Wn=1100,ce=320,Vn=2,Be="screen_calibration",Fe="screen_calibration_retry_hint",Kn=`
  <h2>Calibrate the screen</h2>
  <p data-voiceover-target style="max-width: 38rem; margin: 0 auto 1rem;">
    Hold a <strong>credit card</strong> against your screen. Use the slider
    to resize the rectangle below until it exactly matches the width of the
    card.
  </p>
  <div id="cc-stage" style="margin: 1.5rem auto; height: 14rem; position: relative;">
    <div id="cc-rect"
         style="position: absolute; left: 50%; top: 1rem; transform: translateX(-50%);
                width: ${ce}px; height: ${ce*(53.98/85.6)}px; border: 2px solid #000; border-radius: 6px;
                background: linear-gradient(135deg, #1f3a8a 0%, #1e40af 100%);">
    </div>
  </div>
  <input id="cc-slider" type="range" min="${Un}" max="${Wn}" value="${ce}"
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
`;function mt(){const t={type:S,stimulus:Kn,choices:["This matches my card"],on_load:()=>{const e=document.getElementById("cc-slider"),n=document.getElementById("cc-rect"),r=()=>{const o=parseInt(e.value,10);n.style.width=`${o}px`,n.style.height=`${o*(53.98/85.6)}px`};e.addEventListener("input",r),r()},on_finish:e=>{const n=document.getElementById("cc-slider"),r=n?parseInt(n.value,10):ce,o=r/Gn;e.cc_px_width=r,e.px_per_mm=o,e.px_per_mm_in_bounds=o>=Te&&o<=xe,e.px_per_mm_min=Te,e.px_per_mm_max=xe,document.documentElement.style.setProperty("--mm",`${o}px`)},data:{phase:"screen_calibration"}};return v(Be,mt),b(t,Be)}function Xn(){return{type:me,async:!1,func:()=>{const t=window.jsPsych?.data?.get().filter({phase:"screen_calibration"}).last(1).values()[0];return{passed:!!(t&&t.px_per_mm>=Te&&t.px_per_mm<=xe),px_per_mm:t?.px_per_mm??null}},data:{phase:"screen_calibration_gate"}}}function ft(){const t={type:S,stimulus:Jn,choices:["Continue"],data:{phase:"screen_calibration_retry_hint"}};return v(Fe,ft),b(t,Fe)}function Qn(t){return{timeline:[ft()],conditional_function:()=>t.count>=1}}function Zn({maxAttempts:t=Vn}={}){const e={count:0};return{timeline:[Qn(e),mt(),Xn(),er(e,t)],loop_function:()=>(e.count+=1,e.count>=t?!1:!!!window.jsPsych?.data?.get().filter({phase:"screen_calibration_gate"}).last(1).values()[0]?.value?.passed)}}function er(t,e){return{type:me,async:!1,func:()=>{const n=window.jsPsych?.data?.get().filter({phase:"screen_calibration"}).last(1).values()[0],r=Number.isFinite(n?.px_per_mm)?n.px_per_mm:null;return{attempts_used:t.count,max_attempts:e,retried:t.count>1,px_per_mm:r,px_per_mm_in_bounds:n?.px_per_mm_in_bounds===!0}},data:{phase:"screen_calibration_outcome"}}}const tr="72vh",nr="#000",rr="50rem",or="95vw",ar="72rem",yt=`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  text-align: left;
  box-sizing: border-box;
  padding: 1.1rem 2rem 1.25rem;
  min-height: ${tr};
  color: ${nr};
`.replace(/\s+/g," ").trim(),gt=`${yt} width: ${rr}; max-width: 94vw;`,ir=`${yt} width: ${or}; max-width: ${ar}; align-items: center;`,bt=`
  flex: 0 0 auto;
  min-height: 3rem;
  width: 100%;
  margin: 0 0 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`.replace(/\s+/g," ").trim(),je=`
  margin: 0;
  text-align: center;
  font-size: clamp(1.05rem, 2.1vw, 1.6rem);
  line-height: 1.25;
  white-space: nowrap;
`.replace(/\s+/g," ").trim(),sr=`
  flex: 1 1 auto;
  min-height: 0;
  width: 100%;
`.replace(/\s+/g," ").trim();function wt({title:t,body:e,narration:n}){const r=typeof n=="string"&&n.trim()?` data-voiceover-script="${vt(n.trim())}"`:"";return`
    <div style="${`${gt} min-height: auto; padding-top: 0.4rem; padding-bottom: 0.4rem; font-size: 0.95rem; line-height: 1.5;`}">
      <div style="flex: 0 0 auto; width: 100%; margin: 0 0 0.5rem; display: flex; align-items: center; justify-content: center;">
        <h2 style="${je}">${t}</h2>
      </div>
      <div style="${sr}" data-voiceover-target${r}>${e}</div>
    </div>
  `}const Le=50,j=Le/2,_t=Le*Math.SQRT2/2+1,Ee=_t-j+.5,ie=Le+2*Ee,He={cx:35,cy:15},Ge={cx:15,cy:35},lr=2.5,cr=2.5,Ue=100,ur=30,dr=12,hr=12,pr=[1,2,3,7,10,11,12,13,14,17,21,22,23],se=10,mr="#FFFFFF",fr=.33;function yr(t,e,n){const o=n*.382,a=[];for(let i=0;i<10;i++){const l=i%2===0?n:o,d=-Math.PI/2+i*Math.PI/5;a.push(`${t+l*Math.cos(d)},${e+l*Math.sin(d)}`)}return a.join(" ")}const gr=yr(Ge.cx,Ge.cy,cr),br="rgba(0, 0, 0, 0.229)",wr="rgba(0, 0, 0, 0.55)",We="#000",Ve="rgba(0, 0, 0, 0.85)";function _r(t,{arrowAngleDeg:e=ur}={}){const n=new Set(t),r=n.has("tone")||n.has("qmark"),o=n.has("pattern"),a=`<circle cx="${j}" cy="${j}" r="${_t}" fill="none" stroke="${br}" stroke-width="0.5" />`,i=r||o?"":`<circle cx="${j}" cy="${j}" r="0.65" fill="${wr}" />`,l=o?pr.map(y=>{const k=y%5,x=Math.floor(y/5),f=k*se,L=x*se;return`<rect x="${f}" y="${L}" width="${se}" height="${se}" fill="${mr}" opacity="${fr}" />`}).join(""):"",d=n.has("dot")?`<circle cx="${He.cx}" cy="${He.cy}" r="${lr}" fill="${We}" />`:"",s=n.has("star")?`<polygon points="${gr}" fill="${We}" />`:"",u=n.has("tone")?`<text x="${j}" y="${j}" text-anchor="middle" dominant-baseline="central" fill="${Ve}" font-size="${dr}" font-family="Arial, sans-serif" font-weight="bold">♪</text>`:"",c=n.has("qmark")?`<text x="${j}" y="${j}" text-anchor="middle" dominant-baseline="central" fill="${Ve}" font-size="${hr}" font-family="Arial, sans-serif" font-weight="bold">?</text>`:"",h=`
    <svg viewBox="${-Ee} ${-Ee} ${ie} ${ie}"
         width="100%" height="100%" style="display: block; overflow: visible;">
      ${a}${l}${i}${d}${s}${u}${c}
    </svg>
  `,m=(e/360).toFixed(6),w=n.has("arrow")?`<img src="${vr()}" alt="rotation cue"
            style="position: absolute; top: 50%; left: 50%; width: ${Ue}px; height: ${Ue}px;
                   transform: translate(-50%, -50%) rotate(${m}turn); pointer-events: none; z-index: 10; user-select: none;
                   filter: brightness(0) saturate(100%);" />`:"";return`
    <div style="position: relative; width: calc(var(--mm) * ${ie}); height: calc(var(--mm) * ${ie}); margin: 0 auto;">
      ${h}${w}
    </div>
  `}function vr(){return"./assets/rotation-arrow.png"}function _({title:t,body:e,narration:n,exemplar:r=[],arrowAngleDeg:o}){const a=typeof n=="string"&&n.trim()?` data-voiceover-script="${vt(n.trim())}"`:"",i=_r(r,typeof o=="number"?{arrowAngleDeg:o}:{});return`
    <div style="${gt} align-items: center;">
      <div style="${bt}">
        <h2 style="${je}">${t}</h2>
      </div>
      <div style="flex: 0 0 auto; width: 100%; text-align: left;"
           data-voiceover-target${a}>${e}</div>
      <div style="flex: 0 0 auto; display: flex; align-items: center; justify-content: center; margin-top: 2rem;">
        ${i}
      </div>
      <div style="flex: 1 0 auto; min-height: 1rem;" aria-hidden="true"></div>
    </div>
  `}function vt(t){return t.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const kr=wt({title:"Sit comfortably for the study",body:`
    <p>Before we begin the tasks, let's get you set up.</p>
    <p>This study works best when you are seated comfortably and stay in
    roughly the same position for the rest of the session. Please take a
    moment to set yourself up:</p>
    <ul style="margin: 0.5rem 0 0.75rem 1.25rem; line-height: 1.45;">
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
  `,narration:"Before we begin the tasks, let's get you set up. This study works best when you are seated comfortably and stay in roughly the same position for the rest of the session. Please take a moment to set yourself up. Sit so that your eyes are about an arm's length, roughly 60 centimetres, away from the monitor. Centre yourself in front of the screen: your eyes should be directly in front of the middle of the monitor, not off to one side. Make sure the screen is roughly at eye level — adjust your chair or the monitor if needed. And try to stay in this position for the rest of the study — moving your head closer or farther between trials can change how the task looks, and how well you can do it. When you are settled in this position, click the button below to continue."}),Tr=wt({title:"How to place your hands",body:`
    <p>Next, let's set up your hands.</p>
    <p>Throughout the study you will respond with the
    <strong>two horizontal arrow keys</strong>
    (<kbd>&larr;</kbd>&nbsp;<kbd>&rarr;</kbd>) on your keyboard. The
    demonstrations will label them <strong>&ldquo;No&rdquo;</strong> /
    <strong>&ldquo;Yes&rdquo;</strong> and
    <strong>&ldquo;Not on-pattern&rdquo;</strong> /
    <strong>&ldquo;On-pattern&rdquo;</strong>. How you place your hands
    matters:</p>
    <ul style="margin: 0.5rem 0 0.75rem 1.25rem; line-height: 1.45;">
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
  `,narration:"Next, let's set up your hands. Throughout the study you will respond with the two horizontal arrow keys on your keyboard, the left arrow and the right arrow. The demonstrations will label them No or Yes, and Not on-pattern or On-pattern. How you place your hands matters. Use both hands, and only your index fingers. Place one index finger on each of the two horizontal arrow keys, one finger per hand. Keep them resting on those two keys throughout the study. Do not use two fingers of the same hand — one index finger per hand, on its own response key. When both index fingers are resting on the two response keys, click the button below to continue."});function xr(){const t=b({type:S,stimulus:kr,choices:["I am ready"],button_html:n=>`<button class="jspsych-btn" style="margin-top: 1rem;">${n}</button>`,data:{phase:"viewing_distance"}},"viewing_distance"),e=b({type:S,stimulus:Tr,choices:["I am ready"],button_html:n=>`<button class="jspsych-btn" style="margin-top: 1rem;">${n}</button>`,data:{phase:"hand_placement"}},"hand_placement");return{timeline:[t,e]}}function kt(){const t="speaker_volume_instruction",e={type:S,stimulus:`
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
    `,choices:["Continue"],data:{phase:"speaker_volume_instruction"}};return v(t,kt),b(e,t)}var Er="2.1.0";const Ir={name:"fullscreen",version:Er,parameters:{fullscreen_mode:{type:p.BOOL,default:!0,array:!1},message:{type:p.HTML_STRING,default:"<p>The experiment will switch to full screen mode when you press the button below</p>",array:!1},button_label:{type:p.STRING,default:"Continue",array:!1},delay_after:{type:p.INT,default:1e3,array:!1}},data:{success:{type:p.BOOL,default:null,description:"True if the user entered fullscreen mode, false if not."},rt:{type:p.INT,default:null,description:"Time in milliseconds until the user entered fullscreen mode."}},citations:{apa:"de Leeuw, J. R., Gilbert, R. A., & Luchterhandt, B. (2023). jsPsych: Enabling an Open-Source Collaborative Ecosystem of Behavioral Experiments. Journal of Open Source Software, 8(85), 5351. https://doi.org/10.21105/joss.05351 ",bibtex:'@article{Leeuw2023jsPsych, 	author = {de Leeuw, Joshua R. and Gilbert, Rebecca A. and Luchterhandt, Bj{\\" o}rn}, 	journal = {Journal of Open Source Software}, 	doi = {10.21105/joss.05351}, 	issn = {2475-9066}, 	number = {85}, 	year = {2023}, 	month = {may 11}, 	pages = {5351}, 	publisher = {Open Journals}, 	title = {jsPsych: Enabling an {Open}-{Source} {Collaborative} {Ecosystem} of {Behavioral} {Experiments}}, 	url = {https://joss.theoj.org/papers/10.21105/joss.05351}, 	volume = {8}, }  '}};class Or{constructor(e){this.jsPsych=e,this.rt=null,this.start_time=0}static{this.info=Ir}trial(e,n){var r=typeof Element<"u"&&"ALLOW_KEYBOARD_INPUT"in Element;r?this.endTrial(e,!1,n):n.fullscreen_mode?this.showDisplay(e,n):(this.exitFullScreen(),this.endTrial(e,!0,n))}showDisplay(e,n){e.innerHTML=`
      ${n.message}
      <button id="jspsych-fullscreen-btn" class="jspsych-btn">${n.button_label}</button>
    `,e.querySelector("#jspsych-fullscreen-btn").addEventListener("click",()=>{this.rt=Math.round(performance.now()-this.start_time),this.enterFullScreen(),this.endTrial(e,!0,n)}),this.start_time=performance.now()}endTrial(e,n,r){e.innerHTML="",this.jsPsych.pluginAPI.setTimeout(()=>{var o={success:n,rt:this.rt};this.jsPsych.finishTrial(o)},r.delay_after)}enterFullScreen(){var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}exitFullScreen(){(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)&&(document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen())}simulate(e,n,r,o){n=="data-only"&&(o(),this.simulate_data_only(e,r)),n=="visual"&&this.simulate_visual(e,r,o)}create_simulation_data(e,n){const o={success:!0,rt:this.jsPsych.randomization.sampleExGaussian(1e3,100,.005,!0)};return this.jsPsych.pluginAPI.mergeSimulationData(o,n)}simulate_data_only(e,n){const r=this.create_simulation_data(e,n);this.jsPsych.finishTrial(r)}simulate_visual(e,n,r){const o=this.create_simulation_data(e,n),a=this.jsPsych.getDisplayElement();o.success===!1?this.endTrial(a,!1,e):(this.trial(a,e),r(),this.jsPsych.pluginAPI.clickTarget(a.querySelector("#jspsych-fullscreen-btn"),o.rt))}}let Ke=null;const Tt=[];function Je(t){Tt.push(t),ot({phase:"visibility_event",...t}).catch(e=>{console.error("[visibility] storage append failed",e),at(e)})}function Pr(){if(Ke)return;const t=()=>{Je({kind:"visibilitychange",hidden:document.hidden,ts:performance.now(),iso:new Date().toISOString()})},e=()=>{Je({kind:"fullscreenchange",in_fullscreen:!!document.fullscreenElement,ts:performance.now(),iso:new Date().toISOString()})};document.addEventListener("visibilitychange",t),document.addEventListener("fullscreenchange",e),Ke=()=>{document.removeEventListener("visibilitychange",t),document.removeEventListener("fullscreenchange",e)}}function Sr(){return Tt.slice()}function xt(){const t="enter_fullscreen",e={type:Or,fullscreen_mode:!0,message:`
      <h2>Enter fullscreen</h2>
      <p>The experiment must run in fullscreen. Click below to continue.</p>
    `,button_label:"Enter fullscreen",data:{phase:"enter_fullscreen"}};return v(t,xt),b(e,t)}function jr(){return{type:me,async:!1,func:()=>(Pr(),{recording:!0}),data:{phase:"visibility_recorder_start"}}}const Lr=200,Nr=500,Ar=50,$r=10,J=50,Cr="#60a5fa";function ge(t,e){return new Promise(n=>{const r=()=>{const o=(e-t.currentTime)*1e3;if(o<=0){n();return}setTimeout(r,Math.min(o,10))};r()})}function Rr(t){const e=[];for(let n=0;n<t;n++)e.push(`<div class="tac-box" id="tac-box-${n}" data-idx="${n}">${n+1}</div>`);return e.join("")}function Et(){const t="tone_audibility_and_comfort";let e=!1,n=!1,r=!1,o=0,a=J;const i={type:S,stimulus:`
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
          background: ${Cr};
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
          ${g.tones.count} tones will start playing in a loop in a
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
        ${Rr(g.tones.count)}
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
    `,choices:["I'm comfortable — continue"],button_html:l=>`<button class="jspsych-btn" id="tac-yes-btn">${l}</button>`,on_load:async()=>{e=!1,n=!1,r=!1,o=0,a=J;const l=Promise.resolve();qe(J/100);const d=document.getElementById("tac-slider"),s=document.getElementById("tac-slider-readout");d&&d.addEventListener("input",()=>{const f=Number(d.value);a=f,s&&(s.textContent=`${f}%`),qe(f/100)});const u=document.getElementById("tac-yes-btn");if(u&&u.addEventListener("click",()=>{n||(r=!0),e=!0},{capture:!0}),await l,e)return;const c=sn(),h=lt(),m=g.tones.duration_ms/1e3,w=(g.tones.duration_ms+Lr)/1e3,y=Nr/1e3,k=[];for(let f=0;f<h.length;f++)k.push(document.getElementById(`tac-box-${f}`));let x=c.currentTime+Ar/1e3;try{for(let f=0;f<$r&&!e;f++){o=f+1;for(let L=0;L<h.length&&!e;L++){const R=x;if(ln(L,{when:R}),await ge(c,R),e)break;const G=k[L];G&&G.classList.add("playing"),await ge(c,R+m),G&&G.classList.remove("playing"),x=R+w}e||(await ge(c,x+y),x+=y)}}catch{}if(!r&&!e){n=!0;const f=document.getElementById("tac-yes-btn");f&&f.click()}},on_finish:l=>{it();const d=st();d.current&&!d.current._state?.finished&&d.current.cancel(),l.tones_audible=r&&!n,l.user_playback_pct=a,l.user_playback_gain=a/100,l.sweeps_completed=o},data:{phase:"tone_audibility_and_comfort"}};return v(t,Et),b(i,t)}function qr(){return{timeline:[{type:S,stimulus:`
          <h2>Sorry — the audio doesn't seem to be coming through</h2>
          <p style="max-width: 38rem; margin: 0 auto 1rem;">
            Without a comfortable, clearly audible setting for every
            tone, the task cannot be completed accurately.
          </p>
          <p style="max-width: 38rem; margin: 0 auto;">
            Please return the study on Prolific so the slot can be
            reopened. We're sorry for the inconvenience.
          </p>
        `,choices:["Close"],data:{phase:"tone_audibility_fail"},on_finish:()=>{typeof window<"u"&&window.jsPsych?.abortExperiment&&window.jsPsych.abortExperiment("Tone audibility failed.")}}],conditional_function:()=>{const t=window.jsPsych?.data?.get().filter({phase:"tone_audibility_and_comfort"}).last(1).values()[0];return t?t.tones_audible===!1:!1}}}function zr(){return[Fn(),Hn(),ht(),Cn(),pt(),xr(),Zn(),kt(),xt(),jr(),Et(),qr()]}var Mr="2.1.0";const Dr={name:"instructions",version:Mr,parameters:{pages:{type:p.HTML_STRING,default:void 0,array:!0},key_forward:{type:p.KEY,default:"ArrowRight"},key_backward:{type:p.KEY,default:"ArrowLeft"},allow_backward:{type:p.BOOL,default:!0},allow_keys:{type:p.BOOL,default:!0},show_clickable_nav:{type:p.BOOL,default:!1},show_page_number:{type:p.BOOL,default:!1},page_label:{type:p.STRING,default:"Page"},button_label_previous:{type:p.STRING,default:"Previous"},button_label_next:{type:p.STRING,default:"Next"},on_page_change:{type:p.FUNCTION,pretty_name:"Page change callback",default:function(t){}}},data:{view_history:{type:p.COMPLEX,array:!0,nested:{page_index:{type:p.INT},viewing_time:{type:p.INT}}},rt:{type:p.INT}},citations:{apa:"de Leeuw, J. R., Gilbert, R. A., & Luchterhandt, B. (2023). jsPsych: Enabling an Open-Source Collaborative Ecosystem of Behavioral Experiments. Journal of Open Source Software, 8(85), 5351. https://doi.org/10.21105/joss.05351 ",bibtex:'@article{Leeuw2023jsPsych, 	author = {de Leeuw, Joshua R. and Gilbert, Rebecca A. and Luchterhandt, Bj{\\" o}rn}, 	journal = {Journal of Open Source Software}, 	doi = {10.21105/joss.05351}, 	issn = {2475-9066}, 	number = {85}, 	year = {2023}, 	month = {may 11}, 	pages = {5351}, 	publisher = {Open Journals}, 	title = {jsPsych: Enabling an {Open}-{Source} {Collaborative} {Ecosystem} of {Behavioral} {Experiments}}, 	url = {https://joss.theoj.org/papers/10.21105/joss.05351}, 	volume = {8}, }  '}};class ee{constructor(e){this.jsPsych=e}static{this.info=Dr}trial(e,n){var r=0,o=[],a=performance.now(),i=a;function l(){this.id==="jspsych-instructions-back"?u():this.id==="jspsych-instructions-next"&&s()}function d(){var y=n.pages[r],k="";if(n.show_page_number&&(k="<span style='margin: 0 1em;' class='jspsych-instructions-pagenum'>"+n.page_label+" "+(r+1)+"/"+n.pages.length+"</span>"),n.show_clickable_nav){var x="<div class='jspsych-instructions-nav' style='padding: 10px 0px;'>";if(n.allow_backward){var f=r>0?"":"disabled='disabled'";x+="<button id='jspsych-instructions-back' class='jspsych-btn' style='margin-right: 5px;' "+f+">&lt; "+n.button_label_previous+"</button>"}n.pages.length>1&&n.show_page_number&&(x+=k),x+="<button id='jspsych-instructions-next' class='jspsych-btn'style='margin-left: 5px;'>"+n.button_label_next+" &gt;</button></div>",y+=x,e.innerHTML=y,r!=0&&n.allow_backward&&e.querySelector("#jspsych-instructions-back").addEventListener("click",l,{once:!0}),e.querySelector("#jspsych-instructions-next").addEventListener("click",l,{once:!0})}else n.show_page_number&&n.pages.length>1&&(y+="<div class='jspsych-instructions-pagenum'>"+k+"</div>"),e.innerHTML=y}function s(){c(),r++,r>=n.pages.length?h():d(),n.on_page_change(r)}function u(){c(),r--,d(),n.on_page_change(r)}function c(){var y=performance.now(),k=Math.round(y-i);o.push({page_index:r,viewing_time:k}),i=y}const h=()=>{n.allow_keys&&this.jsPsych.pluginAPI.cancelKeyboardResponse(w);var y={view_history:o,rt:Math.round(performance.now()-a)};this.jsPsych.finishTrial(y)},m=y=>{w=this.jsPsych.pluginAPI.getKeyboardResponse({callback_function:m,valid_responses:[n.key_forward,n.key_backward],rt_method:"performance",persist:!1,allow_held_key:!1}),this.jsPsych.pluginAPI.compareKeys(y.key,n.key_backward)&&r!==0&&n.allow_backward&&u(),this.jsPsych.pluginAPI.compareKeys(y.key,n.key_forward)&&s()};if(d(),n.allow_keys)var w=this.jsPsych.pluginAPI.getKeyboardResponse({callback_function:m,valid_responses:[n.key_forward,n.key_backward],rt_method:"performance",persist:!1})}simulate(e,n,r,o){n=="data-only"&&(o(),this.simulate_data_only(e,r)),n=="visual"&&this.simulate_visual(e,r,o)}create_simulation_data(e,n){let r=0,o=0,a=[];if(!n.data?.view_history&&!n.data?.rt)for(;r!==e.pages.length;){const d=Math.round(this.jsPsych.randomization.sampleExGaussian(3e3,300,.0033333333333333335));a.push({page_index:r,viewing_time:d}),o+=d,r==0||!e.allow_backward||this.jsPsych.randomization.sampleBernoulli(.9)==1?r++:r--}if(!n.data?.view_history&&n.data?.rt){for(o=n.data.rt;r!==e.pages.length;)a.push({page_index:r,viewing_time:null}),r==0||!e.allow_backward||this.jsPsych.randomization.sampleBernoulli(.9)==1?r++:r--;const d=n.data.rt/a.length;let s=0;for(const h of a){const m=Math.round(this.jsPsych.randomization.sampleExGaussian(d,d/10,1/(d/10)));h.viewing_time=m,s+=m}const u=n.data.rt-s,c=Math.round(u/a.length);for(const h of a)h.viewing_time+=c}if(n.data?.view_history&&!n.data?.rt){a=n.data.view_history,o=0;for(const d of n.data.view_history)o+=d.viewing_time}const i={view_history:a,rt:o},l=this.jsPsych.pluginAPI.mergeSimulationData(i,n);return this.jsPsych.pluginAPI.ensureSimulationDataConsistency(e,l),l}simulate_data_only(e,n){const r=this.create_simulation_data(e,n);this.jsPsych.finishTrial(r)}simulate_visual(e,n,r){const o=this.create_simulation_data(e,n),a=this.jsPsych.getDisplayElement();this.trial(a,e),r();const i=u=>{e.allow_keys?this.jsPsych.pluginAPI.pressKey(e.key_forward,u):e.show_clickable_nav&&this.jsPsych.pluginAPI.clickTarget(a.querySelector("#jspsych-instructions-next"),u)},l=u=>{e.allow_keys?this.jsPsych.pluginAPI.pressKey(e.key_backward,u):e.show_clickable_nav&&this.jsPsych.pluginAPI.clickTarget(a.querySelector("#jspsych-instructions-back"),u)};let d=0,s=0;for(let u=0;u<o.view_history.length;u++)u==o.view_history.length-1?i(s+o.view_history[u].viewing_time):(o.view_history[u+1].page_index>d&&i(s+o.view_history[u].viewing_time),o.view_history[u+1].page_index<d&&l(s+o.view_history[u].viewing_time),s+=o.view_history[u].viewing_time,d=o.view_history[u+1].page_index)}}const It='<span style="color: #0DE72E;"><strong>green</strong></span>',Ot='<span style="color: #FF1818;"><strong>red</strong></span>',Pt=Object.freeze({key_forward:" ",key_backward:"ArrowLeft",allow_backward:!0,allow_keys:!0,show_clickable_nav:!0,show_page_number:!0,page_label:"Page",button_label_previous:"Previous",button_label_next:"Next"});function St(){const t=g.memory.set_size,e="Task 1 — Remember the dots",n=[_({title:e,body:`
        <p>You will see <strong>${t} dots</strong> appear one at a
        time at different locations inside the circle. Each dot is brief
        — remember <strong>which locations</strong> the dots appear in.</p>
      `,narration:`You will see ${t} dots appear one at a time at different locations inside the circle. Each dot is brief — remember which locations the dots appear in.`,exemplar:["dot"]}),_({title:e,body:`
        <p>After the dots, we test your memory <strong>${t}
        times</strong>. Each time, a black dot appears for 3 seconds in
        some location:</p>
        <p style="margin: 1.25rem 0;">
          Press <strong>Yes</strong> (<kbd>&rarr;</kbd> RIGHT arrow) if
          a dot was shown in that location.<br />
          Press <strong>No</strong> (<kbd>&larr;</kbd> LEFT arrow) if it
          was not.
        </p>
        <p>Keep your eyes on the centre of the circle throughout.</p>
      `,narration:`After the dots, we test your memory ${t} times. Each time, a black dot appears for 3 seconds in some location. Press Yes, the right arrow, if a dot was shown in that location. Press No, the left arrow, if it was not. Keep your eyes on the centre of the circle throughout.`,exemplar:["qmark"]}),_({title:e,body:`
        <p>You have <strong>3 seconds</strong> for each test. Aim for
        accuracy first, but don't dwell.</p>
        <p>If you answer in time, the dot turns
        ${It} for correct or
        ${Ot} for incorrect while it is still on screen.</p>
        <p style="text-align: center; margin-top: 1.5rem;">
          Press <kbd>Space</kbd> for the Task 1 demonstration.
        </p>
      `,narration:"You have 3 seconds for each test. Aim for accuracy first, but don't dwell. If you answer in time, the dot turns green for correct or red for incorrect while it is still on screen. Press Space for the Task 1 demonstration.",exemplar:["qmark"]})],r={type:ee,pages:n,...Pt,data:{phase:"instructions_memory_d_only"}};return F(r.data.phase,St),H(r)}function jt(){const t=g.memory.set_size,e="Task 2 — Remember the tones",n=[_({title:e,body:`
        <p>Task 2 is like Task 1, but with sounds instead of dots. You
        will hear <strong>${t} short tones</strong>, one at a time.
        Remember <strong>each tone you hear</strong>.</p>
      `,narration:`Task 2 is like Task 1, but with sounds instead of dots. You will hear ${t} short tones, one at a time. Remember each tone you hear.`,exemplar:["tone"]}),_({title:e,body:`
        <p>Then we play <strong>${t} more tones</strong>, one at a
        time. For each one:</p>
        <p style="margin: 1.25rem 0;">
          Press <strong>Yes</strong> (<kbd>&rarr;</kbd> RIGHT arrow) if
          you heard this tone before.<br />
          Press <strong>No</strong> (<kbd>&larr;</kbd> LEFT arrow) if
          you did not.
        </p>
        <p>Keep your eyes on the centre of the circle and listen.</p>
      `,narration:`Then we play ${t} more tones, one at a time. For each one: Press Yes, the right arrow, if you heard this tone before. Press No, the left arrow, if you did not. Keep your eyes on the centre of the circle and listen.`,exemplar:["qmark"]}),_({title:e,body:`
        <p>You have <strong>3 seconds</strong> for each test. If you
        answer in time, the central question mark turns
        ${It} for correct or
        ${Ot} for incorrect.</p>
        <p>Please make sure your audio volume is still at the level you
        set earlier.</p>
        <p style="text-align: center; margin-top: 1.5rem;">
          Press <kbd>Space</kbd> for the Task 2 demonstration.
        </p>
      `,narration:"You have 3 seconds for each test. If you answer in time, the central question mark turns green for correct or red for incorrect. Please make sure your audio volume is still at the level you set earlier. Press Space for the Task 2 demonstration.",exemplar:["tone"]})],r={type:ee,pages:n,...Pt,data:{phase:"instructions_memory_t_only"}};return F(r.data.phase,jt),H(r)}const Yr='<span style="color: #0DE72E;"><strong>green</strong></span>',Br='<span style="color: #FF1818;"><strong>red</strong></span>',Fr='<p style="border-left: 3px solid #772139; padding: 0.5rem 0.75rem; margin: 1rem 0; background: rgba(119, 33, 57, 0.08);">',Hr=Object.freeze({key_forward:" ",key_backward:"ArrowLeft",allow_backward:!0,allow_keys:!0,show_clickable_nav:!0,show_page_number:!0,page_label:"Page",button_label_previous:"Previous",button_label_next:"Next"});function Lt(){const t=g.imagery.stars_per_trial,e="Task 3 — Picture the pattern",n=[_({title:e,body:`
        <p>In Task 3 you will <strong>picture this pattern in your
        mind</strong> and keep that picture clear while you respond.</p>
        ${Fr}
        <strong style="color: #772139;">Important:</strong> the
        demonstration will show this pattern once more so you can commit
        it to memory. It will <strong>not</strong> be shown during the
        trials.</p>
      `,narration:"In Task 3 you will picture this pattern in your mind and keep that picture clear while you respond. Important: the demonstration will show this pattern once more so you can commit it to memory. It will not be shown during the trials.",exemplar:["pattern"]}),_({title:e,body:`
        <p>Each trial begins with an <strong>arrow</strong>. The arrow
        tells you to <strong>turn the pattern in your mind</strong> in
        the direction it points, like rotating a piece of paper. Hold
        this turned pattern in mind.</p>
        <p>You'll have <strong>5 seconds</strong> to imagine and turn
        the pattern, then the trial continues automatically.</p>
      `,narration:"Each trial begins with an arrow. The arrow tells you to turn the pattern in your mind in the direction it points, like rotating a piece of paper. Hold this turned pattern in mind. You'll have 5 seconds to imagine and turn the pattern, then the trial continues automatically.",exemplar:["arrow"]}),_({title:e,body:`
        <p>Then <strong>${t} bright stars</strong> will flash
        inside the circle, one at a time. For each star, decide whether
        it lands on the <strong>rotated pattern you are picturing</strong>.</p>
        <p style="margin: 1.25rem 0;">
          Press <strong>On-pattern</strong> (<kbd>&rarr;</kbd> RIGHT arrow)
          if the star falls on your pictured pattern.<br />
          Press <strong>Not on-pattern</strong> (<kbd>&larr;</kbd> LEFT arrow)
          if it does not.
        </p>
      `,narration:`Then ${t} bright stars will flash inside the circle, one at a time. For each star, decide whether it lands on the rotated pattern you are picturing. Press On-pattern, the right arrow, if the star falls on your pictured pattern. Press Not on-pattern, the left arrow, if it does not.`,exemplar:["star"]}),_({title:e,body:`
        <p>You have <strong>3 seconds</strong> for each star. Aim for
        accuracy first, but don't dwell.</p>
        <p>If you answer in time, the star turns
        ${Yr} for correct or
        ${Br} for incorrect while it is still on screen.</p>
        <p>Be honest about your mental picture — if it's fuzzy, just do
        your best.</p>
        <p style="text-align: center; margin-top: 1.5rem;">
          Press <kbd>Space</kbd> for the Task 3 demonstration.
        </p>
      `,narration:"You have 3 seconds for each star. Aim for accuracy first, but don't dwell. If you answer in time, the star turns green for correct or red for incorrect while it is still on screen. Be honest about your mental picture — if it's fuzzy, just do your best. Press Space for the Task 3 demonstration.",exemplar:["star"]})],r={type:ee,pages:n,...Hr,data:{phase:"instructions_imagery_i_only"}};return F(r.data.phase,Lt),H(r)}const Nt='<span style="color: #0DE72E;"><strong>green</strong></span>',At='<span style="color: #FF1818;"><strong>red</strong></span>',$t='<p style="border-left: 3px solid #772139; padding: 0.5rem 0.75rem; margin: 1rem 0; background: rgba(119, 33, 57, 0.08);">',Ct=Object.freeze({key_forward:" ",key_backward:"ArrowLeft",allow_backward:!0,allow_keys:!0,show_clickable_nav:!0,show_page_number:!0,page_label:"Page",button_label_previous:"Previous",button_label_next:"Next"});function Rt(){const t=g.memory.set_size,e=g.imagery.stars_per_trial,n=t+e,r="Task 4 — Dots and pattern together",o=[_({title:r,body:`
        <p>Task 4 combines Task 3 (the pattern) with Task 1 (the dots).
        Each trial begins with the <strong>arrow</strong>: turn the
        pattern in your mind and hold the turned pattern for the whole
        trial. You'll have <strong>5 seconds</strong> to imagine and
        turn it.</p>
      `,narration:"Task 4 combines Task 3, the pattern, with Task 1, the dots. Each trial begins with the arrow: turn the pattern in your mind and hold the turned pattern for the whole trial. You'll have 5 seconds to imagine and turn it.",exemplar:["arrow"]}),_({title:r,body:`
        <p>Then <strong>${n} things</strong> appear inside the
        circle one at a time, <strong>mixed together</strong>:</p>
        <ul style="margin: 0.75rem 1.25rem;">
          <li><strong>${e} stars</strong> — for each star,
          press <strong>On-pattern</strong>
          (<kbd>&rarr;</kbd> RIGHT arrow) if it lands on your rotated
          pattern, or <strong>Not on-pattern</strong>
          (<kbd>&larr;</kbd> LEFT arrow) if it does not.</li>
          <li><strong>${t} dots</strong> — remember
          <strong>which locations</strong> they appear in, for the dot
          tests at the end of the trial.</li>
        </ul>
      `,narration:`Then ${n} things appear inside the circle one at a time, mixed together. ${e} stars — for each star, press On-pattern, the right arrow, if it lands on your rotated pattern, or Not on-pattern, the left arrow, if it does not. And ${t} dots — remember which locations they appear in, for the dot tests at the end of the trial.`,exemplar:["star","dot"]}),_({title:r,body:`
        <p>After the ${n} things, we test your dot memory
        <strong>${t} times</strong>. Each time a black dot appears
        for 3 seconds in some location:</p>
        <p style="margin: 1.25rem 0;">
          Press <strong>Yes</strong> (<kbd>&rarr;</kbd> RIGHT arrow) if
          a dot was shown here.<br />
          Press <strong>No</strong> (<kbd>&larr;</kbd> LEFT arrow) if
          it was not.
        </p>
        <p>You have <strong>3 seconds</strong> for each star and each
        dot test. If you answer in time, the star or dot turns
        ${Nt} for correct or ${At} for incorrect.</p>
      `,narration:`After the ${n} things, we test your dot memory ${t} times. Each time a black dot appears for 3 seconds in some location. Press Yes, the right arrow, if a dot was shown here. Press No, the left arrow, if it was not. You have 3 seconds for each star and each dot test. If you answer in time, the star or dot turns green for correct or red for incorrect.`,exemplar:["qmark"]}),_({title:r,body:`
        ${$t}
        <strong style="color: #772139;">VERY important:</strong> keep the
        picture of the rotated pattern in mind during the
        <strong>entire</strong> trial. You may drop it only when the
        central <strong>question mark (?)</strong> appears — that is
        when the dot tests begin.</p>
        <p style="text-align: center; margin-top: 1.5rem;">
          Press <kbd>Space</kbd> for the Task 4 demonstration.
        </p>
      `,narration:"Very important: keep the picture of the rotated pattern in mind during the entire trial. You may drop it only when the central question mark appears — that is when the dot tests begin. Press Space for the Task 4 demonstration.",exemplar:["pattern"]})],a={type:ee,pages:o,...Ct,data:{phase:"instructions_dual_i_d"}};return F(a.data.phase,Rt),H(a)}function qt(){const t=g.memory.set_size,e=g.imagery.stars_per_trial,n=t+e,r="Task 5 — Tones and pattern together",o=[_({title:r,body:`
        <p>Task 5 combines Task 3 (the pattern) with Task 2 (the tones).
        Each trial begins with the <strong>arrow</strong>: turn the
        pattern in your mind and hold the turned pattern for the whole
        trial. You'll have <strong>5 seconds</strong> to imagine and
        turn it.</p>
      `,narration:"Task 5 combines Task 3, the pattern, with Task 2, the tones. Each trial begins with the arrow: turn the pattern in your mind and hold the turned pattern for the whole trial. You'll have 5 seconds to imagine and turn it.",exemplar:["arrow"]}),_({title:r,body:`
        <p>Then <strong>${n} things</strong> happen one at a
        time, <strong>mixed together</strong>:</p>
        <ul style="margin: 0.75rem 1.25rem;">
          <li><strong>${e} stars</strong> inside the circle —
          for each star, press <strong>On-pattern</strong>
          (<kbd>&rarr;</kbd> RIGHT arrow) if it lands on your rotated
          pattern, or <strong>Not on-pattern</strong>
          (<kbd>&larr;</kbd> LEFT arrow) if it does not.</li>
          <li><strong>${t} tones</strong> — remember
          <strong>each tone you hear</strong>, for the tone tests at the
          end of the trial.</li>
        </ul>
      `,narration:`Then ${n} things happen one at a time, mixed together. ${e} stars inside the circle — for each star, press On-pattern, the right arrow, if it lands on your rotated pattern, or Not on-pattern, the left arrow, if it does not. And ${t} tones — remember each tone you hear, for the tone tests at the end of the trial.`,exemplar:["star","tone"]}),_({title:r,body:`
        <p>After the ${n} things, we test your tone memory
        <strong>${t} times</strong>. Each test plays a tone:</p>
        <p style="margin: 1.25rem 0;">
          Press <strong>Yes</strong> (<kbd>&rarr;</kbd> RIGHT arrow) if
          you heard this tone before.<br />
          Press <strong>No</strong> (<kbd>&larr;</kbd> LEFT arrow) if
          you did not.
        </p>
        <p>You have <strong>3 seconds</strong> for each star and each
        tone test. If you answer in time, the star or central question
        mark turns ${Nt} for correct or ${At} for
        incorrect.</p>
      `,narration:`After the ${n} things, we test your tone memory ${t} times. Each test plays a tone. Press Yes, the right arrow, if you heard this tone before. Press No, the left arrow, if you did not. You have 3 seconds for each star and each tone test. If you answer in time, the star or central question mark turns green for correct or red for incorrect.`,exemplar:["qmark"]}),_({title:r,body:`
        ${$t}
        <strong style="color: #772139;">VERY important:</strong> keep the
        picture of the rotated pattern in mind during the
        <strong>entire</strong> trial. You may drop it only when the
        central <strong>question mark (?)</strong> appears — that is
        when the tone tests begin.</p>
        <p>Please make sure your audio volume is still at the level you
        set earlier.</p>
        <p style="text-align: center; margin-top: 1.5rem;">
          Press <kbd>Space</kbd> for the Task 5 demonstration.
        </p>
      `,narration:"Very important: keep the picture of the rotated pattern in mind during the entire trial. You may drop it only when the central question mark appears — that is when the tone tests begin. Please make sure your audio volume is still at the level you set earlier. Press Space for the Task 5 demonstration.",exemplar:["pattern"]})],a={type:ee,pages:o,...Ct,data:{phase:"instructions_dual_i_t"}};return F(a.data.phase,qt),H(a)}const Gr=4,zt=1e3*Gr,Ur=2e3,Wr=400,E=500,T=400,z=1200,Vr=700,Xe=450,Kr=220,M=1500,Ne=1e3,Jr=Object.freeze([-90,-75,-60,-45,-30,-15,15,30,45,60,75,90]);function Ae(){return Ie().pick(Jr)}const Xr="./assets/rotation-arrow.png";function Qr(t,e){return`
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
    <div class="demo-frame" style="${ir}">
      <div style="${bt}">
        <h2 style="${je}">Demonstration of Task ${t} — ${e}</h2>
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
  `}function Zr(){const t={cancelled:!1,spaceArmed:!1,currentNarration:null};return{state:t,setCaption(e){const n=document.getElementById("demo-caption");if(!n)return;n.innerHTML=e,n.classList.remove("demo-caption-bump"),n.offsetWidth,n.classList.add("demo-caption-bump");const r=cn(e);r?(un(),t.currentNarration=st().speak(r)):t.currentNarration=null},async wait(e){return await ze(e),!t.cancelled},async awaitNarration(){const e=t.currentNarration;return e?.done&&await new Promise(n=>{let r=!1;const o=()=>{r||(r=!0,n())};e.done.then(o).catch(o);const a=setInterval(()=>{t.cancelled&&(clearInterval(a),o())},100);e.done.finally(()=>clearInterval(a))}),!t.cancelled},async advanceCaption(e){return t.cancelled||!await this.awaitNarration()||e!==""&&(await ze(Wr),t.cancelled)?!1:(this.setCaption(e),!0)},async narrate(e){return!(!await this.advanceCaption(e)||!await this.awaitNarration())}}}function eo(t,e){const n=g.imagery.rotation_arrow_size_px,r=document.createElement("img");return r.src=Xr,r.alt="rotation cue",r.className="rotation-arrow-cue demo-arrow",r.setAttribute("style",["position: absolute","top: 50%","left: 50%",`width: ${n}px`,`height: ${n}px`,`transform: translate(-50%, -50%) rotate(${e}deg)`,"pointer-events: none","z-index: 10","user-select: none","filter: brightness(0) saturate(100%)"].join("; ")+";"),t.wrapper.appendChild(r),r}function le(t){t&&t.parentNode&&t.parentNode.removeChild(t)}async function $e(t,e,n){if(e.setCaption("Step 1 of 3 — Here is the pattern. Picture it in your mind."),wn(t),Me(t),!await e.awaitNarration()||!await e.wait(1e3)||!await e.advanceCaption(`Step 2 of 3 — An arrow tells you which way to turn the pattern in your mind (here, by ${n>0?"+":""}${n}°).`))return!1;_e(t);const i=eo(t,n);return!await e.awaitNarration()||!await e.wait(600)||!await e.advanceCaption("Step 3 of 3 — This is how your rotated mental image should look. Hold this picture in your mind.")?(le(i),!1):(le(i),ut(t,n),Me(t),!await e.awaitNarration()||!await e.wait(1500)?!1:(_e(t),!0))}function te(){const t=_n(),e=vn();return{memCells:[t[0],e[1],t[2]],fillerCells:[e[0],t[1],e[2]],probeCells:[{cell:t[0],isTarget:!0,label:"on"},{cell:e[1],isTarget:!0,label:"off"},{cell:e[4],isTarget:!1,label:"off"}],starCells:[{cell:t[5],isOn:!0},{cell:e[5],isOn:!1},{cell:t[6],isOn:!0}]}}function ne({leftLabel:t,rightLabel:e}){const n=document.getElementById("demo-buttons-row");if(!n)return null;n.innerHTML=`
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
  `;const r=n.querySelector(".demo-buttons-container"),o=n.querySelector('[data-side="left"]'),a=n.querySelector('[data-side="right"]'),i=n.querySelector(".demo-hand");return{container:r,leftBtn:o,rightBtn:a,hand:i}}function Mt(t,e,n){if(!t?.leftBtn||!t?.rightBtn)return!1;const r=t.leftBtn.querySelector(".demo-btn-label"),o=t.rightBtn.querySelector(".demo-btn-label");return r&&(r.textContent=e),o&&(o.textContent=n),!0}function be(){const t=document.getElementById("demo-buttons-row");t&&(t.innerHTML="")}function Qe(t,e){if(!t?.container||!t?.hand)return;const n=e==="right"?t.rightBtn:t.leftBtn;if(!n)return;const r=t.container.getBoundingClientRect(),o=n.getBoundingClientRect(),a=o.left+o.width/2-r.left,i=o.bottom-r.top+4;t.hand.style.left=`${a}px`,t.hand.style.top=`${i}px`}async function D(t,e,n){if(!t)return!0;if(Qe(t,e==="right"?"left":"right"),t.hand.style.transition="none",t.hand.style.opacity="0",t.hand.offsetWidth,t.hand.style.transition="opacity 200ms ease-out",t.hand.style.opacity="0.95",!await n.wait(Vr)||(t.hand.style.transition=`left ${Xe}ms ease-in-out`,Qe(t,e),!await n.wait(Xe)))return!1;const r=e==="right"?t.rightBtn:t.leftBtn;return r&&(r.classList.remove("demo-btn-pressed"),r.offsetWidth,r.classList.add("demo-btn-pressed")),!!await n.wait(Kr)}function Y(t){t?.hand&&(t.hand.style.transition="opacity 200ms ease-in",t.hand.style.opacity="0")}const C=Object.freeze({left:"No",right:"Yes"}),U=Object.freeze({left:"Not on-pattern",right:"On-pattern"});function B({pressedLabel:t,correctLabel:e,isCorrect:n,stimulusName:r}){const o=`<span style="color: ${A}; font-weight: 600;">correct</span>`,a=`<span style="color: ${$}; font-weight: 600;">incorrect</span>`;return n?`We chose <strong>${t}</strong> — that was the ${o} answer, so the ${r} turns green.`:`We chose <strong>${t}</strong> — that was ${a}; the ${o} answer was <strong>${e}</strong>, so the ${r} turns red.`}async function to(t,e){const{memCells:n,fillerCells:r,probeCells:o}=te(),a=ne({leftLabel:"No",rightLabel:"Yes"});if(!await e.narrate("Memorize the locations of the dots that will appear inside the circle one at a time.")||!await e.advanceCaption("")||!await e.wait(E))return;for(let l=0;l<3;l++){const d=he(t,n[l]);if(!await e.wait(zt)||(P(d),!await e.wait(T)))return;const s=Oe(t,r[l],{visible:!1});if(!await e.wait(Ne))return;P(s)}if(!await e.narrate("Hold the dots in mind for a moment.")||(I(t,"?"),!await e.wait(T)))return;const i=2;for(let l=0;l<o.length;l++){const d=o[l],s=d.isTarget?"right":"left",u=l===i?s==="right"?"left":"right":s;if(!await e.narrate(`Test ${l+1} of 3: was a dot just shown in this location?`)||!await e.wait(E))return;const c=he(t,d.cell);if(!await e.wait(z)||!await D(a,u,e))return;const h=u===s;if(c.setAttribute("fill",h?A:$),!await e.wait(M)||!await e.narrate(B({pressedLabel:C[u],correctLabel:C[s],isCorrect:h,stimulusName:"dot"}))||(Y(a),P(c),!await e.wait(T)))return}I(t,"")}async function no(t,e){const{memCells:n,fillerCells:r,probeCells:o}=te(),a=ne({leftLabel:"No",rightLabel:"Yes"});if(!await e.narrate("Memorize each of the tones that will play one at a time.")||!await e.advanceCaption("")||!await e.wait(E))return;for(let l=0;l<3;l++){if(await de(n[l]).catch(()=>{}),!await e.wait(T))return;const d=Oe(t,r[l],{visible:!1});if(!await e.wait(Ne))return;P(d)}if(!await e.narrate("Hold the tones in mind for a moment.")||(I(t,"?"),!await e.wait(T)))return;const i=2;for(let l=0;l<o.length;l++){const d=o[l],s=d.isTarget?"right":"left",u=l===i?s==="right"?"left":"right":s;if(!await e.wait(E)||(await de(d.cell).catch(()=>{}),!await e.wait(T))||!await e.narrate(`Test ${l+1} of 3: was that tone one of the ones you just heard?`)||!await e.wait(z)||!await D(a,u,e))return;const c=u===s;if(I(t,"?",{color:c?A:$}),!await e.wait(M)||!await e.narrate(B({pressedLabel:C[u],correctLabel:C[s],isCorrect:c,stimulusName:"question mark"}))||(Y(a),I(t,"?"),!await e.wait(T)))return}I(t,"")}async function ro(t,e){const n=Ae(),r=ne({leftLabel:"Not on-pattern",rightLabel:"On-pattern"});if(!await e.narrate("Picture the pattern, turn it in your mind, then judge whether each star falls on the rotated pattern.")||!await $e(t,e,n)||!await e.narrate("Now keep picturing the turned pattern. 3 stars will appear inside the circle. For each star, decide whether it falls <strong>on-pattern</strong> or <strong>not on-pattern</strong>.")||!await e.wait(E)||!await e.advanceCaption(""))return;const{fillerCells:o,starCells:a}=te(),i=2;for(let l=0;l<3;l++){const d=Oe(t,o[l],{visible:!1});if(!await e.wait(Ne))return;P(d);const s=a[l],u=s.isOn?"right":"left",c=l===i?u==="right"?"left":"right":u;if(!await e.wait(E))return;const h=Pe(t,s.cell);if(!await e.wait(z)||!await D(r,c,e))return;const m=c===u;if(Se(h,m?A:$),!await e.wait(M)||!await e.narrate(B({pressedLabel:U[c],correctLabel:U[u],isCorrect:m,stimulusName:"star"}))||(Y(r),P(h),!await e.wait(T)))return}}async function oo(t,e){const n=Ae(),r=ne({leftLabel:"Not on-pattern",rightLabel:"On-pattern"});if(!await e.narrate("Picture the rotated pattern, memorize the dot locations, and judge whether each star falls on the rotated pattern.")||!await $e(t,e,n)||!await e.narrate("Now keep picturing the turned pattern. 6 things appear inside the circle, mixed together: 3 dots to remember, 3 stars to judge as <strong>on-pattern</strong> or <strong>not on-pattern</strong>.")||!await e.wait(E)||!await e.advanceCaption(""))return;const{memCells:o,starCells:a,probeCells:i}=te(),l=2;for(let s=0;s<3;s++){if(!await e.wait(E))return;const u=he(t,o[s]);if(!await e.wait(zt)||(P(u),!await e.wait(T)))return;const c=a[s],h=c.isOn?"right":"left",m=s===l?h==="right"?"left":"right":h;if(!await e.wait(E))return;const w=Pe(t,c.cell);if(!await e.wait(z)||!await D(r,m,e))return;const y=m===h;if(Se(w,y?A:$),!await e.wait(M)||!await e.narrate(B({pressedLabel:U[m],correctLabel:U[h],isCorrect:y,stimulusName:"star"}))||(Y(r),P(w),!await e.wait(T)))return}if(!await e.narrate("The question mark means the dot tests begin. You may let the picture go and focus on the dots.")||(Mt(r,"No","Yes"),I(t,"?"),!await e.wait(T)))return;const d=2;for(let s=0;s<i.length;s++){const u=i[s],c=u.isTarget?"right":"left",h=s===d?c==="right"?"left":"right":c;if(!await e.narrate(`Dot test ${s+1} of 3: was a dot shown in this location?`)||!await e.wait(E))return;const m=he(t,u.cell);if(!await e.wait(z)||!await D(r,h,e))return;const w=h===c;if(m.setAttribute("fill",w?A:$),!await e.wait(M)||!await e.narrate(B({pressedLabel:C[h],correctLabel:C[c],isCorrect:w,stimulusName:"dot"}))||(Y(r),P(m),!await e.wait(T)))return}I(t,"")}async function ao(t,e){const n=Ae(),r=ne({leftLabel:"Not on-pattern",rightLabel:"On-pattern"});if(!await e.narrate("Picture the rotated pattern, memorize each tone, and judge whether each star falls on the rotated pattern.")||!await $e(t,e,n)||!await e.narrate("Now keep picturing the turned pattern. 6 things happen, mixed together: 3 tones to remember, 3 stars (inside the circle) to judge as <strong>on-pattern</strong> or <strong>not on-pattern</strong>.")||!await e.wait(E)||!await e.advanceCaption(""))return;const{memCells:o,starCells:a,probeCells:i}=te(),l=2;for(let s=0;s<3;s++){if(!await e.wait(E)||(await de(o[s]).catch(()=>{}),!await e.wait(T)))return;const u=a[s],c=u.isOn?"right":"left",h=s===l?c==="right"?"left":"right":c;if(!await e.wait(E))return;const m=Pe(t,u.cell);if(!await e.wait(z)||!await D(r,h,e))return;const w=h===c;if(Se(m,w?A:$),!await e.wait(M)||!await e.narrate(B({pressedLabel:U[h],correctLabel:U[c],isCorrect:w,stimulusName:"star"}))||(Y(r),P(m),!await e.wait(T)))return}if(!await e.narrate("The question mark means the tone tests begin. You may let the picture go and focus on the tones.")||(Mt(r,"No","Yes"),I(t,"?"),!await e.wait(T)))return;const d=2;for(let s=0;s<i.length;s++){const u=i[s],c=u.isTarget?"right":"left",h=s===d?c==="right"?"left":"right":c;if(!await e.wait(E)||(await de(u.cell).catch(()=>{}),!await e.wait(T))||!await e.narrate(`Tone test ${s+1} of 3: was that tone one of the ones you just heard?`)||!await e.wait(z)||!await D(r,h,e))return;const m=h===c;if(I(t,"?",{color:m?A:$}),!await e.wait(M)||!await e.narrate(B({pressedLabel:C[h],correctLabel:C[c],isCorrect:m,stimulusName:"question mark"}))||(Y(r),I(t,"?"),!await e.wait(T)))return}I(t,"")}const io=3;async function so(t,e){if(t.state.cancelled)return!1;const n=document.getElementById("demo-buttons-row");if(!n)return!1;n.innerHTML=`
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
  `;const r=e===1?" (this is the last replay you can request)":` (you can watch up to ${e} more time${e===1?"":"s"})`;return await t.advanceCaption(`Would you like to watch the demonstration again?${r} Click the button below to watch it again. When you are ready to start the practice, press the <kbd>Space</kbd> key.`)?new Promise(o=>{let a=!1;const i=s=>{if(a)return;a=!0,n.querySelectorAll(".demo-replay-btn").forEach(c=>c.removeEventListener("click",l)),o(s)},l=s=>{const u=s.currentTarget.getAttribute("data-side");i(u==="right")};n.querySelectorAll(".demo-replay-btn").forEach(s=>s.addEventListener("click",l));const d=setInterval(()=>{t.state.cancelled&&(clearInterval(d),i(!1)),a&&clearInterval(d)},100)}):!1}function re(t){return async function(n,r){let o=0;for(;!r.state.cancelled;){try{await t(n,r)}catch(l){console.error("[demo] mini-trial error",l);return}if(r.state.cancelled)return;r.state.spaceArmed=!0;const a=io-o;if(a<=0){if(!await r.advanceCaption("That was the last demonstration. Press Space when you are ready to start the practice."))return;be();return}if(!await so(r,a)){await r.advanceCaption("Press Space when you are ready to start the practice."),be();return}o+=1;try{bn(n),be(),I(n,""),n.rotor.style.transition="",ut(n,0),_e(n)}catch{}if(!await r.advanceCaption("Replaying the demonstration…")||!await r.wait(Ur))return}}}const lo=re(to),co=re(no),uo=re(ro),ho=re(oo),po=re(ao);function oe({phase:t,taskNumber:e,title:n,run:r,factory:o}){const a={type:N,stimulus:Qr(e,n),choices:"NO_KEYS",response_ends_trial:!1,on_load:()=>{const i=document.getElementById("demo-mount");if(!i)return;const l=gn({rotation_deg:0,fixation:"",background_shade:"gray"});i.appendChild(l.wrapper);const d=Zr(),s=window.jsPsych?.getCurrentTrial?.();s&&typeof s=="object"&&(s._demo_state=d.state);let u=!0;const c=h=>{if(u){if(h.key==="ArrowLeft"||h.key==="ArrowRight"){h.preventDefault(),h.stopPropagation();return}if(h.key===" "||h.code==="Space"){if(h.preventDefault(),h.stopPropagation(),!d.state.spaceArmed)return;u=!1,document.removeEventListener("keydown",c,!0),d.state.cancelled=!0,window.jsPsych?.finishTrial?.({demo_advanced_via_space:!0})}}};document.addEventListener("keydown",c,!0),s&&typeof s=="object"&&(s._demo_keydown_handler=c),r(l,d).catch(h=>{console.error(`[demo:${t}] schedule error`,h)})},on_finish:()=>{const i=window.jsPsych?.getCurrentTrial?.();i?._demo_state&&(i._demo_state.cancelled=!0),i?._demo_keydown_handler&&(document.removeEventListener("keydown",i._demo_keydown_handler,!0),i._demo_keydown_handler=null)},data:{phase:t}};return F(t,o),H(a)}function Dt(){return oe({phase:"demo_d_only",taskNumber:1,title:"Remember the dots",run:lo,factory:Dt})}function Yt(){return oe({phase:"demo_t_only",taskNumber:2,title:"Remember the tones",run:co,factory:Yt})}function Bt(){return oe({phase:"demo_i_only",taskNumber:3,title:"Picture the pattern",run:uo,factory:Bt})}function Ft(){return oe({phase:"demo_i_d",taskNumber:4,title:"Dots and pattern together",run:ho,factory:Ft})}function Ht(){return oe({phase:"demo_i_t",taskNumber:5,title:"Tones and pattern together",run:po,factory:Ht})}const we=Object.freeze([Object.freeze({id:"ac1_direct_instruction",prompt:"To show you are reading carefully, please type the word <strong>paper</strong> into the box below (lowercase, no punctuation).",expected_answer:"paper"}),Object.freeze({id:"ac2_third_word",prompt:"In the sentence “Click the third word in this sentence”, what is the third word? Type just that word into the box below.",expected_answer:"third"}),Object.freeze({id:"ac3_arrow_mapping",prompt:"When a star points right, you press the right-arrow key. To show you understood, type the word <strong>right</strong> into the box below.",expected_answer:"right"})]);function Ze(t){return typeof t!="string"?"":t.trim().toLowerCase()}function ue(t){if(!t?.id||!t?.prompt||!t?.expected_answer)throw new Error(`typedAttentionCheckNode: item must have {id, prompt, expected_answer}, got ${JSON.stringify(t)}`);const e=`attention_check_${t.id}`,n={type:V,preamble:"<h2>Quick check</h2>",html:`
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
    `,button_label:"Continue",on_finish:r=>{const o=r.response?.response??"",a=Ze(o);r.attention_check_id=t.id,r.attention_check_raw=o,r.attention_check_passed=a===Ze(t.expected_answer)},data:{phase:"attention_check"}};return v(e,()=>ue(t)),b(n,e)}function mo(t,e=g.attention_checks.instruction_max_failures){const n=(t??[]).filter(a=>a?.phase==="attention_check"),r=n.filter(a=>a.attention_check_passed===!0).length,o=n.filter(a=>a.attention_check_passed===!1).length;return{total:n.length,passed:r,failed:o,exceededThreshold:o>e,threshold:e,ids:n.map(a=>a.attention_check_id)}}function Gt(){const t="attention_check_summary",e={type:V,preamble:"<h2>Thanks — moving on.</h2>",html:`
      <div style="max-width: 36rem; margin: 0 auto;">
        <p>Press <strong>Continue</strong> to proceed to the main task.</p>
      </div>
    `,button_label:"Continue",on_finish:n=>{const r=window.jsPsych?.data?.get().values()??[],o=mo(r);n.phase="attention_check_summary",n.attention_total=o.total,n.attention_passed=o.passed,n.attention_failed=o.failed,n.attention_excluded=o.exceededThreshold,n.attention_threshold=o.threshold}};return v(t,Gt),b(e,t)}const et=Object.freeze(["d_only","t_only","i_only","i_d","i_t"]);function tt(t){let e=0,n=0;for(const r of t)typeof r.probe_correct=="boolean"&&(n+=1,r.probe_correct&&(e+=1)),typeof r.star_correct=="boolean"&&(n+=1,r.star_correct&&(e+=1));return{correct:e,total:n,accuracy:n>0?e/n:0}}function X({trialType:t,trialsPerType:e,sequencePoolLabelPrefix:n,prng:r}={}){if(!et.includes(t))throw new Error(`singleTypePractice: unknown trialType '${t}'; expected one of ${et.join(", ")}`);const o=e??g.blocks.practice_trials_per_type,a=r??Ie(),i=dn({blockLabel:"practice",countsByType:{[t]:o},sequencePoolLabelPrefix:n??"practice",runLengthCap:Math.max(1,o),prng:a});return{schedule:i.schedule,trialParams:i.trialParams,nodes:i.nodes}}function fo({acc:t,passed:e,willRetry:n,criterion:r}){return yo({acc:t,passed:e,willRetry:n,criterion:r})}function yo({acc:t,passed:e,willRetry:n,criterion:r}){const o=Math.round(t.accuracy*100),a=Math.round(r*100),i=e?'<h2 style="color:#0a7c4d;">Practice complete</h2>':'<h2 style="color:#b3261e;">Practice — keep going</h2>',l=e?`<p>You got <strong>${t.correct} / ${t.total}</strong> correct
       (${o}%), above the ${a}% criterion. Press <kbd>Space</kbd> to
       start the main task.</p>`:n?`<p>You got <strong>${t.correct} / ${t.total}</strong> correct
         (${o}%), below the ${a}% criterion. Let's try the practice
         once more. Press <kbd>Space</kbd> to begin.</p>`:`<p>You got <strong>${t.correct} / ${t.total}</strong> correct
         (${o}%). Press <kbd>Space</kbd> to start the main task.</p>`;return`
    <div style="display: grid; place-items: center; gap: 1rem; max-width: 36rem; margin: 0 auto;">
      ${i}
      ${l}
    </div>
  `}function Ut(){const t=g.blocks.practice_trials_per_type,e=t*5,n=Math.round(g.practice.accuracy_criterion*100),r={type:N,stimulus:`
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
    `,choices:[" "],data:{phase:"instructions_overview"}};return F(r.data.phase,Ut),H(r)}function go({trialsPerType:t,accuracyCriterion:e,maxLoops:n,prng:r}={}){if(we.length!==3)throw new Error(`assembleInstructionsAndPractice: expected exactly 3 attention-check items, got ${we.length}`);const[o,a,i]=we,l=t??g.blocks.practice_trials_per_type,d=e??g.practice.accuracy_criterion,s=n??g.practice.max_loops,u=r??Ie(),c=X({trialType:"d_only",trialsPerType:l,prng:u}),h=X({trialType:"t_only",trialsPerType:l,prng:u}),m=X({trialType:"i_only",trialsPerType:l,prng:u}),w=X({trialType:"i_d",trialsPerType:l,prng:u}),y=X({trialType:"i_t",trialsPerType:l,prng:u});let k=0,x=0,f=null;const L={type:N,stimulus:"",choices:"NO_KEYS",trial_duration:0,on_start:()=>{k+=1,x=window.jsPsych?.data?.get().count()??0},data:()=>({phase:"practice_iteration_start",practice_iteration:k})};function R(){const ae="practice_feedback",Ce={type:N,stimulus:()=>{const tn=(window.jsPsych?.data?.get().values()??[]).slice(x),K=tt(tn),ye=K.accuracy>=d,Re=!ye&&k<=s;return f={accuracy:K.accuracy,correct:K.correct,total:K.total,passed:ye,willRetry:Re,attemptCount:k},fo({acc:K,passed:ye,willRetry:Re,criterion:d})},choices:[" "],data:()=>({phase:"practice_feedback",practice_iteration:k,iteration_accuracy:f?.accuracy??null,iteration_correct:f?.correct??null,iteration_total:f?.total??null,iteration_passed:f?.passed??null})};return v(ae,R),b(Ce,ae)}const G=R(),en={timeline:[L,St(),Dt(),...c.nodes,jt(),Yt(),...h.nodes,ue(o),Lt(),Bt(),...m.nodes,ue(a),Rt(),Ft(),...w.nodes,qt(),Ht(),...y.nodes,ue(i),G],loop_function:function(ae){return!(In()||tt(ae.values()).accuracy>=d||k>s)}};return[Ut(),en,Gt()]}const bo=Object.freeze([Object.freeze({value:1,label:'No image at all; you only "know" that you are thinking of the object'}),Object.freeze({value:2,label:"Vague and dim"}),Object.freeze({value:3,label:"Moderately clear and vivid"}),Object.freeze({value:4,label:"Clear and reasonably vivid"}),Object.freeze({value:5,label:"Perfectly clear and as vivid as normal vision"})]),pe=Object.freeze([Object.freeze({id:"vviq_v1_relative",preamble:"Think of some relative or friend whom you frequently see (but who is not with you at present) and consider carefully the picture that comes before your mind’s eye.",items:Object.freeze([Object.freeze({id:"vviq_q01",text:"The exact contour of face, head, shoulders and body."}),Object.freeze({id:"vviq_q02",text:"Characteristic poses of head, attitudes of body, etc."}),Object.freeze({id:"vviq_q03",text:"The precise carriage, length of step, etc. in walking."}),Object.freeze({id:"vviq_q04",text:"The different colours worn in some familiar clothes."})])}),Object.freeze({id:"vviq_v2_sunrise",preamble:"Think of the rising sun. Consider carefully the picture that comes before your mind’s eye.",items:Object.freeze([Object.freeze({id:"vviq_q05",text:"The sun is rising above the horizon into a hazy sky."}),Object.freeze({id:"vviq_q06",text:"The sky clears and surrounds the sun with blueness."}),Object.freeze({id:"vviq_q07",text:"Clouds. A storm blows up, with flashes of lightning."}),Object.freeze({id:"vviq_q08",text:"A rainbow appears."})])}),Object.freeze({id:"vviq_v3_shop",preamble:"Think of the front of a shop which you often go to. Consider the picture that comes before your mind’s eye.",items:Object.freeze([Object.freeze({id:"vviq_q09",text:"The overall appearance of the shop from the opposite side of the road."}),Object.freeze({id:"vviq_q10",text:"A window display including colours, shape and details of individual items for sale."}),Object.freeze({id:"vviq_q11",text:"You are near the entrance. The colour, shape and details of the door."}),Object.freeze({id:"vviq_q12",text:"You enter the shop and go to the counter. The counter assistant serves you. Money changes hands."})])}),Object.freeze({id:"vviq_v4_country",preamble:"Think of a country scene which involves trees, mountains and a lake. Consider the picture that comes before your mind’s eye.",items:Object.freeze([Object.freeze({id:"vviq_q13",text:"The contours of the landscape."}),Object.freeze({id:"vviq_q14",text:"The colour and shape of the trees."}),Object.freeze({id:"vviq_q15",text:"The colour and shape of the lake."}),Object.freeze({id:"vviq_q16",text:"A strong wind blows on the tree and on the lake causing waves."})])}),Object.freeze({id:"vviq_v5_highway",preamble:"Think of being driven in a fast-moving car by a relative or friend along a major highway. Consider the picture that comes into your mind’s eye.",items:Object.freeze([Object.freeze({id:"vviq_q17",text:"You observe the heavy traffic travelling at maximum speed around your car. The overall appearance of vehicles, their colours, sizes and shapes."}),Object.freeze({id:"vviq_q18",text:"Your car accelerates to overtake the traffic directly in front of you. You see an urgent expression on the face of the driver and the people in the other vehicles as you pass."}),Object.freeze({id:"vviq_q19",text:"A large truck is flashing its headlight directly behind. Your car quickly moves over to let the truck pass. The driver signals with a friendly wave."}),Object.freeze({id:"vviq_q20",text:"You see a broken-down vehicle beside the road. Its lights are flashing. The driver is looking concerned and she is using a mobile phone."})])}),Object.freeze({id:"vviq_v6_beach",preamble:"Think of the beach by the ocean on a warm summer’s day. Consider the picture that comes before your mind’s eye.",items:Object.freeze([Object.freeze({id:"vviq_q21",text:"The overall appearance and colour of the water, surf, and sky."}),Object.freeze({id:"vviq_q22",text:"Bathers are swimming and splashing about in the water. Some are playing with a brightly coloured beach ball."}),Object.freeze({id:"vviq_q23",text:"An ocean liner crosses the horizon. It leaves a trail of smoke in the blue sky."}),Object.freeze({id:"vviq_q24",text:"A beautiful air balloon appears with four people aboard. The balloon drifts past you, almost directly overhead. The passengers wave and smile. You wave and smile back at them."})])}),Object.freeze({id:"vviq_v7_railway",preamble:"Think of a railway station. Consider the picture that comes before your mind’s eye.",items:Object.freeze([Object.freeze({id:"vviq_q25",text:"The overall appearance of the station viewed from in front of the main entrance."}),Object.freeze({id:"vviq_q26",text:"You walk into the station. The colour, shape and details of the entrance hall."}),Object.freeze({id:"vviq_q27",text:"You approach the ticket office, go to a vacant counter and purchase your ticket."}),Object.freeze({id:"vviq_q28",text:"You walk to the platform and observe other passengers and the railway lines. A train arrives. You climb aboard."})])}),Object.freeze({id:"vviq_v8_garden",preamble:"Finally, think of a garden with lawns, bushes, flowers and shrubs. Consider the picture that comes before your mind’s eye.",items:Object.freeze([Object.freeze({id:"vviq_q29",text:"The overall appearance and design of the garden."}),Object.freeze({id:"vviq_q30",text:"The colour and shape of the bushes and shrubs."}),Object.freeze({id:"vviq_q31",text:"The colour and appearance of the flowers."}),Object.freeze({id:"vviq_q32",text:"Some birds fly down onto the lawn and start pecking for food."})])})]),nt=pe.reduce((t,e)=>t+e.items.length,0);if(nt!==32)throw new Error(`VVIQ_VIGNETTES must contain exactly 32 items, got ${nt}`);function Wt(t){const e=t.items.map(a=>{const i=bo.map(l=>`<option value="${l.value}">${l.value} — ${l.label}</option>`).join("");return`
        <tr>
          <td style="padding: 0.5rem 0.75rem 0.5rem 0; vertical-align: top;">${a.text}</td>
          <td style="padding: 0.5rem 0; vertical-align: top;">
            <select name="${a.id}" required>
              <option value="">—</option>
              ${i}
            </select>
          </td>
        </tr>`}).join(""),n=pe.findIndex(a=>a.id===t.id)+1,r=t.id,o={type:V,preamble:`
      <h2>Imagery questionnaire (part ${n} of ${pe.length})</h2>
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
    `,button_label:"Continue",on_finish:a=>{a.phase="vviq",a.vviq_vignette_id=t.id,a.vviq_responses=t.items.reduce((i,l)=>{const d=a.response?.[l.id];return i[l.id]=d===""||d===null||d===void 0?null:Number(d),i},{})}};return v(r,()=>Wt(t)),b(o,r)}function wo(){return pe.map(Wt)}const W=Object.freeze([Object.freeze({id:"me_q01",gold_msi:"MT01",text:"I engaged in regular, daily practice of a musical instrument (including voice) for ___ years.",options:Object.freeze([Object.freeze({value:"0",label:"0",score:1}),Object.freeze({value:"1",label:"1",score:2}),Object.freeze({value:"2",label:"2",score:3}),Object.freeze({value:"3",label:"3",score:4}),Object.freeze({value:"4-5",label:"4–5",score:5}),Object.freeze({value:"6-9",label:"6–9",score:6}),Object.freeze({value:"10+",label:"10 or more",score:7})])}),Object.freeze({id:"me_q02",gold_msi:"MT02",text:"At the peak of my interest, I practised my primary instrument for ___ hours per day.",options:Object.freeze([Object.freeze({value:"0",label:"0",score:1}),Object.freeze({value:"0.5",label:"0.5",score:2}),Object.freeze({value:"1",label:"1",score:3}),Object.freeze({value:"1.5",label:"1.5",score:4}),Object.freeze({value:"2",label:"2",score:5}),Object.freeze({value:"3-4",label:"3–4",score:6}),Object.freeze({value:"5+",label:"5 or more",score:7})])}),Object.freeze({id:"me_q03",gold_msi:"MT03",text:"I have had formal training in music theory for ___ years.",options:Object.freeze([Object.freeze({value:"0",label:"0",score:1}),Object.freeze({value:"0.5",label:"0.5",score:2}),Object.freeze({value:"1",label:"1",score:3}),Object.freeze({value:"2",label:"2",score:4}),Object.freeze({value:"3",label:"3",score:5}),Object.freeze({value:"4-6",label:"4–6",score:6}),Object.freeze({value:"7+",label:"7 or more",score:7})])}),Object.freeze({id:"me_q04",gold_msi:"MT04",text:"I have had ___ years of formal training on a musical instrument (including voice) during my lifetime — count school music classes <strong>and</strong> private lessons / conservatory together.",options:Object.freeze([Object.freeze({value:"0",label:"0",score:1}),Object.freeze({value:"0.5",label:"0.5",score:2}),Object.freeze({value:"1",label:"1",score:3}),Object.freeze({value:"2",label:"2",score:4}),Object.freeze({value:"3-5",label:"3–5",score:5}),Object.freeze({value:"6-9",label:"6–9",score:6}),Object.freeze({value:"10+",label:"10 or more",score:7})])}),Object.freeze({id:"me_q05",gold_msi:"MT05",text:"I can play ___ musical instruments.",options:Object.freeze([Object.freeze({value:"0",label:"0",score:1}),Object.freeze({value:"1",label:"1",score:2}),Object.freeze({value:"2",label:"2",score:3}),Object.freeze({value:"3",label:"3",score:4}),Object.freeze({value:"4",label:"4",score:5}),Object.freeze({value:"5",label:"5",score:6}),Object.freeze({value:"6+",label:"6 or more",score:7})])}),Object.freeze({id:"me_q06",gold_msi:"MT06",text:"I would consider myself a musician.",options:Object.freeze([Object.freeze({value:"1",label:"1 — Completely disagree",score:1}),Object.freeze({value:"2",label:"2",score:2}),Object.freeze({value:"3",label:"3",score:3}),Object.freeze({value:"4",label:"4 — Neither agree nor disagree",score:4}),Object.freeze({value:"5",label:"5",score:5}),Object.freeze({value:"6",label:"6",score:6}),Object.freeze({value:"7",label:"7 — Completely agree",score:7})])}),Object.freeze({id:"me_q07",gold_msi:"MT07",text:"The musical instrument I play best (including voice), I play at the level of a:",options:Object.freeze([Object.freeze({value:"none",label:"I do not play any instrument",score:1}),Object.freeze({value:"beginner",label:"Beginner",score:2.5}),Object.freeze({value:"intermediate",label:"Intermediate",score:4}),Object.freeze({value:"advanced",label:"Advanced",score:5.5}),Object.freeze({value:"expert",label:"Expert / professional",score:7})])}),Object.freeze({id:"me_q08",gold_msi:null,text:'Can you name a musical note (e.g., "C", "F♯") just from hearing it played, without comparing it to any reference note? (This is sometimes called "absolute pitch" or "perfect pitch".)',options:Object.freeze([Object.freeze({value:"no",label:"No",score:null}),Object.freeze({value:"unsure",label:"I am not sure / sometimes",score:null}),Object.freeze({value:"yes",label:"Yes — reliably",score:null})])})]);if(W.length!==8)throw new Error(`MUSIC_EXPERIENCE_ITEMS must contain exactly 8 items, got ${W.length}`);(()=>{const t={};for(const e of W){t[e.id]={};for(const n of e.options)t[e.id][n.value]=n.score}return Object.freeze(t)})();Object.freeze(W.filter(t=>t.gold_msi!==null).map(t=>t.id));function Vt(){const t="music_experience_intro",e={type:V,preamble:`
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
    `,html:'<div style="text-align: center; padding: 1rem 0;"><em>Click Continue to begin.</em></div>',button_label:"Continue",on_finish:n=>{n.phase="music_experience_intro"}};return v(t,Vt),b(e,t)}function Kt(){const t=W.map(r=>{const o=r.options.map(a=>`<option value="${a.value}">${a.label}</option>`).join("");return`
      <tr>
        <td style="padding: 0.75rem 0.75rem 0.75rem 0; vertical-align: top; max-width: 28rem;">
          ${r.text}
        </td>
        <td style="padding: 0.75rem 0; vertical-align: top;">
          <select name="${r.id}" required>
            <option value="">—</option>
            ${o}
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
    `,button_label:"Continue",on_finish:r=>{r.phase="music_experience",r.music_experience_responses=W.reduce((o,a)=>{const i=r.response?.[a.id];return o[a.id]=i===""||i===null||i===void 0?null:String(i),o},{})}};return v(e,Kt),b(n,e)}function _o(){return[Vt(),Kt()]}function Jt(){const t="questionnaire_intro",e={type:N,stimulus:`
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
    `,choices:[" "],data:{phase:"questionnaire_intro"}};return v(t,Jt),b(e,t)}function vo(){return[Jt(),...wo(),..._o()]}function Xt(){const t="main_a_intro",e={type:N,stimulus:`
      <div style="max-width: 36rem; margin: 0 auto;">
        <h2>Practice is over — the main trials start now</h2>
        <div data-voiceover-target>
          <p>Practice is over. The main trials start now. There are two
          blocks of 60 trials. Each block includes a
          ${g.blocks.rest_duration_s}-second rest after trials 20 and 40,
          and there is another ${g.blocks.rest_duration_s}-second rest
          between the two blocks.</p>
          <p>Same controls as the practice: <strong>Yes</strong> /
          <strong>On-pattern</strong> on the
          <kbd>&rarr;</kbd> RIGHT arrow key,
          <strong>No</strong> / <strong>Not on-pattern</strong> on the
          <kbd>&larr;</kbd> LEFT arrow key.</p>
          <p>Press <kbd>Space</kbd> to begin Block 1.</p>
        </div>
      </div>
    `,choices:[" "],data:{phase:"main_a_intro"},on_load:()=>{ct()}};return v(t,Xt),b(e,t)}function Qt(){const t="main_b_intro",e={type:N,stimulus:`
      <div style="max-width: 36rem; margin: 0 auto;">
        <h2>Main task — Block 2 of 2</h2>
        <div data-voiceover-target>
          <p>Last block. 60 more trials, same controls, with
          ${g.blocks.rest_duration_s}-second rests after trials 20
          and 40.</p>
          <p>Press <kbd>Space</kbd> to begin Block 2.</p>
        </div>
      </div>
    `,choices:[" "],data:{phase:"main_b_intro"}};return v(t,Qt),b(e,t)}function Zt(){const t="end_of_task_intro",e={type:N,stimulus:`
      <div style="max-width: 36rem; margin: 0 auto;">
        <h2>Thank you — you've finished the task</h2>
        <div data-voiceover-target>
          <p>Thank you for completing the experiment. Your work on these
          trials is enormously helpful to our research, and we are very
          grateful for your time and attention.</p>
          <p>We'll save your data now — this usually takes a few seconds.
          After that, there are a couple of short questionnaires and then
          you'll be returned to Prolific.</p>
          <p>Press <kbd>Space</kbd> to continue.</p>
        </div>
      </div>
    `,choices:[" "],data:{phase:"end_of_task_intro"},on_load:()=>{hn(),ct()}};return v(t,Zt),b(e,t)}const O=nn(),ko=rn();function To(){if(lt(),typeof Image<"u"){const t=new Image;t.src="./assets/rotation-arrow.png"}}To();const fe=on({display_element:void 0,on_trial_start:Ln(),on_data_update:t=>{ot(t).catch(e=>{console.error("[runner] storage append failed",e),at(e)})},on_finish:()=>{const t=fe.data?.get?.();t&&typeof t.addProperties=="function"&&t.addProperties({session_id:O.params.session_id,prolific_pid:O.params.prolific_pid,study_id:O.params.study_id,is_preview:O.params.is_preview,is_pilot_run:O.is_pilot_run,pilot_label:O.pilot_label,prng_seed_uint32:O.prng_seed_uint32,schema_version:O.schema_version,build_id:O.build_id}),console.info("[runner] session",O,"visibility",Sr())}});window.jsPsych=fe;Nn(fe);const rt=pn(),xo=[...zr(),...go(),Xt(),...rt.mainA.nodes,mn(),Qt(),...rt.mainB.nodes,Zt(),...vo(),fn({session:O}),yn()];ko.then(()=>fe.run(xo)).catch(t=>{console.error("[runner] fatal startup failure",t);const e=document.body;e.innerHTML=`
      <div style="max-width: 36rem; margin: 4rem auto; padding: 2rem; text-align: center;">
        <h2>Unable to start the experiment</h2>
        <p>Your browser is blocking the local storage this study needs. Please
        try a different browser (Chrome, Firefox, or Safari) on a desktop or
        laptop computer, with private/incognito mode disabled.</p>
        <p><small>Error reference: <code>${t&&t.message||"unknown"}</code></small></p>
      </div>
    `});
//# sourceMappingURL=main-BAXHEurk.js.map
