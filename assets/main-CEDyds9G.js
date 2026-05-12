import"./modulepreload-polyfill-B5Qt9EMX.js";import{P as p,a as tt,r as nt,H as S,g as Ie,i as Ut,b as Vt,c as Kt}from"./index-Bz6dieJX.js";import{s as Z,a as ot,u as Jt,g as xe,e as rt,b as Xt,c as Me,d as Qt,f as at,p as Zt,h as en,i as tn,F as I,j as N,k as de,l as nn,m as on,n as rn,o as an,r as sn}from"./main-blocks-DOeo7usz.js";import{c as f}from"./config-zUhCg_tb.js";import{u as ln,c as cn}from"./debrief-DfHPYObw.js";import{c as un,a as dn,s as T,b as it,h as Oe,d as he,r as j,e as Ne,f as Ce,g as Le,i as hn,j as De,o as pn,k as mn}from"./pattern-CJtvzC-V.js";var fn="2.1.0";const yn={name:"html-button-response",version:fn,parameters:{stimulus:{type:p.HTML_STRING,default:void 0},choices:{type:p.STRING,default:void 0,array:!0},button_html:{type:p.FUNCTION,default:function(t,e){return`<button class="jspsych-btn">${t}</button>`}},prompt:{type:p.HTML_STRING,default:null},stimulus_duration:{type:p.INT,default:null},trial_duration:{type:p.INT,default:null},button_layout:{type:p.STRING,default:"grid"},grid_rows:{type:p.INT,default:1},grid_columns:{type:p.INT,default:null},response_ends_trial:{type:p.BOOL,default:!0},enable_button_after:{type:p.INT,default:0}},data:{rt:{type:p.INT},response:{type:p.INT},stimulus:{type:p.HTML_STRING}},citations:{apa:"de Leeuw, J. R., Gilbert, R. A., & Luchterhandt, B. (2023). jsPsych: Enabling an Open-Source Collaborative Ecosystem of Behavioral Experiments. Journal of Open Source Software, 8(85), 5351. https://doi.org/10.21105/joss.05351 ",bibtex:'@article{Leeuw2023jsPsych, 	author = {de Leeuw, Joshua R. and Gilbert, Rebecca A. and Luchterhandt, Bj{\\" o}rn}, 	journal = {Journal of Open Source Software}, 	doi = {10.21105/joss.05351}, 	issn = {2475-9066}, 	number = {85}, 	year = {2023}, 	month = {may 11}, 	pages = {5351}, 	publisher = {Open Journals}, 	title = {jsPsych: Enabling an {Open}-{Source} {Collaborative} {Ecosystem} of {Behavioral} {Experiments}}, 	url = {https://joss.theoj.org/papers/10.21105/joss.05351}, 	volume = {8}, }  '}};class P{constructor(e){this.jsPsych=e}static{this.info=yn}trial(e,n){const o=document.createElement("div");o.id="jspsych-html-button-response-stimulus",o.innerHTML=n.stimulus,e.appendChild(o);const r=document.createElement("div");if(r.id="jspsych-html-button-response-btngroup",n.button_layout==="grid"){if(r.classList.add("jspsych-btn-group-grid"),n.grid_rows===null&&n.grid_columns===null)throw new Error("You cannot set `grid_rows` to `null` without providing a value for `grid_columns`.");const u=n.grid_columns===null?Math.ceil(n.choices.length/n.grid_rows):n.grid_columns,h=n.grid_rows===null?Math.ceil(n.choices.length/n.grid_columns):n.grid_rows;r.style.gridTemplateColumns=`repeat(${u}, 1fr)`,r.style.gridTemplateRows=`repeat(${h}, 1fr)`}else n.button_layout==="flex"&&r.classList.add("jspsych-btn-group-flex");for(const[u,h]of n.choices.entries()){r.insertAdjacentHTML("beforeend",n.button_html(h,u));const m=r.lastChild;m.dataset.choice=u.toString(),m.addEventListener("click",()=>{d(u)})}e.appendChild(r),n.prompt!==null&&e.insertAdjacentHTML("beforeend",n.prompt);var a=performance.now(),i={rt:null,button:null};const c=()=>{var u={rt:i.rt,stimulus:n.stimulus,response:i.button};this.jsPsych.finishTrial(u)};function d(u){var h=performance.now(),m=Math.round(h-a);i.button=parseInt(u),i.rt=m,o.classList.add("responded");for(const v of r.children)v.setAttribute("disabled","disabled");n.response_ends_trial&&c()}if(n.stimulus_duration!==null&&this.jsPsych.pluginAPI.setTimeout(()=>{o.style.visibility="hidden"},n.stimulus_duration),n.enable_button_after>0){for(var s=document.querySelectorAll("#jspsych-html-button-response-btngroup button"),l=0;l<s.length;l++)s[l].setAttribute("disabled","disabled");this.jsPsych.pluginAPI.setTimeout(()=>{for(var u=document.querySelectorAll("#jspsych-html-button-response-btngroup button"),h=0;h<u.length;h++)u[h].removeAttribute("disabled")},n.enable_button_after)}n.trial_duration!==null&&this.jsPsych.pluginAPI.setTimeout(c,n.trial_duration)}simulate(e,n,o,r){n=="data-only"&&(r(),this.simulate_data_only(e,o)),n=="visual"&&this.simulate_visual(e,o,r)}create_simulation_data(e,n){const o={stimulus:e.stimulus,rt:this.jsPsych.randomization.sampleExGaussian(500,50,.006666666666666667,!0)+e.enable_button_after,response:this.jsPsych.randomization.randomInt(0,e.choices.length-1)},r=this.jsPsych.pluginAPI.mergeSimulationData(o,n);return this.jsPsych.pluginAPI.ensureSimulationDataConsistency(e,r),r}simulate_data_only(e,n){const o=this.create_simulation_data(e,n);this.jsPsych.finishTrial(o)}simulate_visual(e,n,o){const r=this.create_simulation_data(e,n),a=this.jsPsych.getDisplayElement();this.trial(a,e),o(),r.rt!==null&&this.jsPsych.pluginAPI.clickTarget(a.querySelector(`#jspsych-html-button-response-btngroup [data-choice="${r.response}"]`),r.rt)}}let Be=!1,L=[];const Ee=new Map;let ee=!1,je=!1;function gn(t){!t||typeof t!="string"||L[L.length-1]!==t&&(L.push(t),L.length>32&&L.shift())}function st(t){const e=typeof t?.data=="function"?null:t?.data??null;return typeof e?.phase=="string"?e.phase:null}function bn(t,e){return t&&typeof t=="object"&&typeof t!="function"?{...t,hidden_nav_step:e}:(...n)=>({...typeof t=="function"?t(...n):{},hidden_nav_step:e})}function _(t,e){!t||typeof t!="string"||typeof e!="function"||Ee.set(t,e)}function g(t,e=st(t)){if(!e||typeof e!="string")return t;const n=t?.on_load;return t.data=bn(t?.data,e),t._hidden_nav_checkpoint=!0,t.on_load=(...o)=>{gn(e),n?.(...o)},t}function B(t,e){_(t,e)}function Y(t){return g(t,st(t))}function wn(){const t=je;return je=!1,t}function vn(t){const e=t?.timeline?.getLatestNode?.();return e&&typeof e.getDataParameter=="function"?e:null}function _n(t){try{const e=vn(t);if(!e)return null;const n=e.getDataParameter?.()??{},o=typeof n.hidden_nav_step=="string"?n.hidden_nav_step:null;return{node:e,stepId:o,phase:typeof n.phase=="string"?n.phase:null}}catch{return null}}function kn(t){const e=t?.description?.type?.info?.name??null;return e==="html-button-response"?{response:0}:e==="survey-html-form"?{response:{}}:{}}function Tn(t){const e=L.slice();if(t)for(;e[e.length-1]===t;)e.pop();return{trimmedHistory:e,prevStepId:e[e.length-1]??null}}function Ye(t,e){const n=t?.parent?.description?.timeline;if(!Array.isArray(n))return!1;const o=n.indexOf(t.description);return o<0?!1:(n.splice(o+1,0,...e),!0)}function xn(){return function(e){if(e?._hidden_nav_checkpoint===!0){ee&&(ee=!1),Z(!1);return}if(!ee){Z(!1);return}!e||typeof e!="object"||(e.trial_duration=0,e.choices="NO_KEYS")}}function On(t){if(Be||typeof document>"u")return;const e=n=>{const o=n.target&&n.target.tagName||"";if(o==="INPUT"||o==="TEXTAREA"||n.target?.isContentEditable||n.metaKey||n.ctrlKey||n.altKey)return;const r=n.key?.toLowerCase?.();if(r!=="u"&&r!=="r")return;const a=_n(t);if(!a)return;n.preventDefault(),n.stopPropagation(),ot();const i=kn(a.node),c=!!a.stepId;if(r==="u"){je=!0,c||(ee=!0),Z(!0),t.finishTrial({...i,phase:a.phase,hidden_nav:"forward",hidden_nav_step:a.stepId??null});return}const{trimmedHistory:d,prevStepId:s}=Tn(a.stepId),l=s?Ee.get(s):null;if(!l)return;let u=!1;if(c){const h=Ee.get(a.stepId);if(!h)return;u=Ye(a.node,[l(),h()])}else u=Ye(a.node,[l()]);u&&(L=d,ee=!1,c?Z(!1):Z(!0),t.finishTrial({...i,phase:a.phase,hidden_nav:"back",hidden_nav_step:a.stepId??null,hidden_nav_target_step:s}))};document.addEventListener("keydown",e,!0),Be=!0}const En="online-2101803-v1",jn=`
  <div style="text-align:left; max-width: 64ch; margin: 0 auto; font-size: 0.95rem; line-height: 1.55;">
    <h2 style="text-align:center; margin: 0 0 0.5rem;">ONLINE CONSENT FORM FOR REMOTE RESEARCH STUDY</h2>
    <div style="max-height: 60vh; overflow-y: auto; padding: 0.75rem 1rem; border: 1px solid #555; border-radius: 6px; background: rgba(255,255,255,0.04);">
      <p><strong>UNIVERSITY OF MISSOURI: IRB PROJECT #2101803</strong></p>
      <p><strong>PRINCIPAL INVESTIGATOR: NELSON COWAN</strong></p>
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
    <p style="margin-top: 1rem; text-align:center; font-size: 0.9rem; color: #aaa;">
      Please scroll to read the entire consent form before continuing.
    </p>
    <div style="margin: 1rem auto 0.25rem; text-align:center;">
      <label style="display:inline-flex; align-items:center; gap:0.5rem; cursor:pointer; font-size:0.95rem;">
        <input type="checkbox" id="consent-checkbox" style="width:1.1rem; height:1.1rem; cursor:pointer;" />
        <span>I have read and understood the information above.</span>
      </label>
    </div>
  </div>
`;function lt(){const t="consent";let e=!1;const n={type:P,stimulus:jn,choices:["I consent — begin","I do not consent — exit"],button_html:(o,r)=>`<button class="jspsych-btn" data-idx="${r}"${r===0?" disabled":""}>${o}</button>`,on_load:()=>{e=!1;const o=document.getElementById("consent-checkbox"),r=document.querySelector('button.jspsych-btn[data-idx="0"]');!o||!r||o.addEventListener("change",()=>{e=o.checked,r.disabled=!o.checked})},on_finish:async o=>{o.consented=o.response===0,o.consent_acknowledged=e,o.consent_version=En,o.consented&&await Jt()},data:{phase:"consent"}};return _(t,lt),g(n,t)}function Pn(){return{timeline:[{type:P,stimulus:`
          <h2>Thank you</h2>
          <p>You declined consent. You may close this tab now.</p>
          <p>Please return your submission on Prolific so that the study slot can be reassigned.</p>
        `,choices:["Close"],on_finish:()=>{typeof window<"u"&&window.jsPsych?.abortExperiment&&window.jsPsych.abortExperiment("Consent declined.")}}],conditional_function:()=>{const t=window.jsPsych?.data?.get().filter({phase:"consent"}).last(1).values()[0];return t?t.consented===!1:!1}}}var Sn="2.1.0";const In={name:"survey-html-form",version:Sn,parameters:{html:{type:p.HTML_STRING,default:null},preamble:{type:p.HTML_STRING,default:null},button_label:{type:p.STRING,default:"Continue"},autofocus:{type:p.STRING,default:""},dataAsArray:{type:p.BOOL,default:!1},autocomplete:{type:p.BOOL,default:!1}},data:{response:{type:p.OBJECT},rt:{type:p.INT}},citations:{apa:"de Leeuw, J. R., Gilbert, R. A., & Luchterhandt, B. (2023). jsPsych: Enabling an Open-Source Collaborative Ecosystem of Behavioral Experiments. Journal of Open Source Software, 8(85), 5351. https://doi.org/10.21105/joss.05351 ",bibtex:'@article{Leeuw2023jsPsych, 	author = {de Leeuw, Joshua R. and Gilbert, Rebecca A. and Luchterhandt, Bj{\\" o}rn}, 	journal = {Journal of Open Source Software}, 	doi = {10.21105/joss.05351}, 	issn = {2475-9066}, 	number = {85}, 	year = {2023}, 	month = {may 11}, 	pages = {5351}, 	publisher = {Open Journals}, 	title = {jsPsych: Enabling an {Open}-{Source} {Collaborative} {Ecosystem} of {Behavioral} {Experiments}}, 	url = {https://joss.theoj.org/papers/10.21105/joss.05351}, 	volume = {8}, }  '}};class V{constructor(e){this.jsPsych=e}static{this.info=In}trial(e,n){var o="";if(n.preamble!==null&&(o+='<div id="jspsych-survey-html-form-preamble" class="jspsych-survey-html-form-preamble">'+n.preamble+"</div>"),n.autocomplete?o+='<form id="jspsych-survey-html-form">':o+='<form id="jspsych-survey-html-form" autocomplete="off">',o+=n.html,o+='<input type="submit" id="jspsych-survey-html-form-next" class="jspsych-btn jspsych-survey-html-form" value="'+n.button_label+'"></input>',o+="</form>",e.innerHTML=o,n.autofocus!==""){var r=e.querySelectorAll("#"+n.autofocus);r.length===0?console.warn("No element found with id: "+n.autofocus):r.length>1?console.warn('The id "'+n.autofocus+'" is not unique so autofocus will not work.'):r[0].focus()}e.querySelector("#jspsych-survey-html-form").addEventListener("submit",d=>{d.preventDefault();var s=performance.now(),l=Math.round(s-a),u=e.querySelector("#jspsych-survey-html-form"),h=i(u);n.dataAsArray||(h=c(h));var m={rt:l,response:h};this.jsPsych.finishTrial(m)});var a=performance.now();function i(d){for(var s=[],l=0;l<d.elements.length;l++){var u=d.elements[l];if(!(!u.name||u.disabled||u.type==="file"||u.type==="reset"||u.type==="submit"||u.type==="button"))if(u.type==="select-multiple")for(var h=0;h<u.options.length;h++)u.options[h].selected&&s.push({name:u.name,value:u.options[h].value});else(u.type!=="checkbox"&&u.type!=="radio"||u.checked)&&s.push({name:u.name,value:u.value})}return s}function c(d){for(var s={},l=0;l<d.length;l++)s[d[l].name]=d[l].value;return s}}}const Nn=`
  <style>
    .demog-form { text-align: left; max-width: 36rem; margin: 0 auto; font-size: 0.95rem; line-height: 1.5; }
    .demog-form .field { margin: 0.6rem 0; }
    .demog-form label.row { display: flex; flex-wrap: wrap; gap: 0.5rem 0.75rem; align-items: baseline; }
    .demog-form .label-text { min-width: 14rem; }
    .demog-form input[type="number"], .demog-form input[type="text"], .demog-form select, .demog-form textarea {
      padding: 0.35rem 0.5rem; border: 1px solid #555; border-radius: 4px;
      background: rgba(255,255,255,0.08); color: inherit; font: inherit;
    }
    .demog-form input[type="number"] { width: 5rem; }
    .demog-form input[type="text"]   { width: 18rem; }
    .demog-form select               { min-width: 18rem; }
    .demog-form textarea             { width: 100%; min-height: 3rem; resize: vertical; margin-top: 0.4rem; }
    .demog-form .req                 { color: #ff8080; margin-left: 0.2rem; }
    .demog-form p.note               { color: #bbb; font-style: italic; margin: 0 0 0.75rem; }
  </style>
`;function ct(){const t="demographics",e={type:V,preamble:`
      <h2>Demographics</h2>
      <p style="max-width: 36rem; margin: 0.25rem auto 1rem; font-size: 0.95rem; color: #ccc;">
        This information is requested for research purposes and to apply
        pre-registered inclusion / exclusion criteria. Items marked with
        <span style="color:#ff8080;">&bull;</span> are required.
      </p>
    `,html:`
      ${Nn}
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
    `,button_label:"Continue",data:{phase:"demographics"}};return _(t,ct),g(e,t)}var Cn="2.1.0";const Ln={name:"call-function",version:Cn,parameters:{func:{type:p.FUNCTION,default:void 0},async:{type:p.BOOL,default:!1}},data:{value:{type:p.COMPLEX,default:void 0}},citations:{apa:"de Leeuw, J. R., Gilbert, R. A., & Luchterhandt, B. (2023). jsPsych: Enabling an Open-Source Collaborative Ecosystem of Behavioral Experiments. Journal of Open Source Software, 8(85), 5351. https://doi.org/10.21105/joss.05351 ",bibtex:'@article{Leeuw2023jsPsych, 	author = {de Leeuw, Joshua R. and Gilbert, Rebecca A. and Luchterhandt, Bj{\\" o}rn}, 	journal = {Journal of Open Source Software}, 	doi = {10.21105/joss.05351}, 	issn = {2475-9066}, 	number = {85}, 	year = {2023}, 	month = {may 11}, 	pages = {5351}, 	publisher = {Open Journals}, 	title = {jsPsych: Enabling an {Open}-{Source} {Collaborative} {Ecosystem} of {Behavioral} {Experiments}}, 	url = {https://joss.theoj.org/papers/10.21105/joss.05351}, 	volume = {8}, }  '}};class fe{constructor(e){this.jsPsych=e}static{this.info=Ln}trial(e,n){let o;const r=()=>{const a={value:o};this.jsPsych.finishTrial(a)};if(n.async){const a=i=>{o=i,r()};n.func(a)}else o=n.func(),r()}}function qn({userAgent:t="",hasHover:e=null,hasFinePointer:n=null,maxTouchPoints:o=0}={}){const r=String(t).toLowerCase(),a=Number.isFinite(o)?o:0,i=[];return/\biphone\b/.test(r)&&i.push("iphone"),/\bipod\b/.test(r)&&i.push("ipod"),/\bipad\b/.test(r)&&i.push("ipad"),/macintosh/.test(r)&&a>1&&i.push("ipad_macos_disguised"),/android/.test(r)&&i.push("android"),/mobile/.test(r)&&!/iphone|ipad|ipod|android/.test(r)&&i.push("mobile_ua"),e===!1&&n===!1&&i.push("no_hover_no_fine_pointer"),{isDesktop:i.length===0,reasons:i,userAgent:String(t),hasHover:e,hasFinePointer:n,maxTouchPoints:a}}function An(){const t=typeof navigator<"u"?navigator.userAgent??"":"";let e=null,n=null;if(typeof window<"u"&&typeof window.matchMedia=="function"){try{e=window.matchMedia("(hover: hover)").matches}catch{e=null}try{n=window.matchMedia("(pointer: fine)").matches}catch{n=null}}const o=typeof navigator<"u"&&Number.isFinite(navigator.maxTouchPoints)?navigator.maxTouchPoints:0;return{userAgent:t,hasHover:e,hasFinePointer:n,maxTouchPoints:o}}function $n(){return{type:fe,async:!1,func:()=>qn(An()),data:{phase:"desktop_gate"}}}function zn(){return{timeline:[{type:P,stimulus:`
          <h2>Sorry — this study requires a desktop or laptop computer</h2>
          <p style="max-width: 38rem; margin: 0 auto 1rem;">
            The task uses keyboard arrow keys and a fullscreen visual display.
            It cannot be completed on a phone or tablet.
          </p>
          <p style="max-width: 38rem; margin: 0 auto;">
            Please return the study on Prolific so the slot can be reopened
            for another participant. We're sorry for the inconvenience.
          </p>
        `,choices:["Close"],data:{phase:"desktop_gate_fail"},on_finish:()=>{typeof window<"u"&&window.jsPsych?.abortExperiment&&window.jsPsych.abortExperiment("Desktop required.")}}],conditional_function:()=>{const e=window.jsPsych?.data?.get().filter({phase:"desktop_gate"}).last(1).values()[0]?.value;return e?!e.isDesktop:!1}}}const Rn=85.6,Pe=1.5,Se=12,Mn=100,Dn=1100,ce=320,Bn=2,He="screen_calibration",Fe="screen_calibration_retry_hint",Yn=`
  <h2>Calibrate the screen</h2>
  <p data-voiceover-target style="max-width: 38rem; margin: 0 auto 1rem;">
    Hold a <strong>credit card</strong> against your screen. Use the slider
    to resize the rectangle below until it exactly matches the width of the
    card.
  </p>
  <div id="cc-stage" style="margin: 1.5rem auto; height: 14rem; position: relative;">
    <div id="cc-rect"
         style="position: absolute; left: 50%; top: 1rem; transform: translateX(-50%);
                width: ${ce}px; height: ${ce*(53.98/85.6)}px; border: 2px solid #fff; border-radius: 6px;
                background: linear-gradient(135deg, #1f3a8a 0%, #1e40af 100%);">
    </div>
  </div>
  <input id="cc-slider" type="range" min="${Mn}" max="${Dn}" value="${ce}"
         style="width: 24rem; max-width: 100%;" />
  <p style="opacity: 0.7; margin-top: 1rem;">
    A real card is <strong>85.6 mm</strong> wide.
  </p>
`,Hn=`
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
`;function ut(){const t={type:P,stimulus:Yn,choices:["This matches my card"],on_load:()=>{const e=document.getElementById("cc-slider"),n=document.getElementById("cc-rect"),o=()=>{const r=parseInt(e.value,10);n.style.width=`${r}px`,n.style.height=`${r*(53.98/85.6)}px`};e.addEventListener("input",o),o()},on_finish:e=>{const n=document.getElementById("cc-slider"),o=n?parseInt(n.value,10):ce,r=o/Rn;e.cc_px_width=o,e.px_per_mm=r,e.px_per_mm_in_bounds=r>=Pe&&r<=Se,e.px_per_mm_min=Pe,e.px_per_mm_max=Se,document.documentElement.style.setProperty("--mm",`${r}px`)},data:{phase:"screen_calibration"}};return _(He,ut),g(t,He)}function Fn(){return{type:fe,async:!1,func:()=>{const t=window.jsPsych?.data?.get().filter({phase:"screen_calibration"}).last(1).values()[0];return{passed:!!(t&&t.px_per_mm>=Pe&&t.px_per_mm<=Se),px_per_mm:t?.px_per_mm??null}},data:{phase:"screen_calibration_gate"}}}function dt(){const t={type:P,stimulus:Hn,choices:["Continue"],data:{phase:"screen_calibration_retry_hint"}};return _(Fe,dt),g(t,Fe)}function Wn(t){return{timeline:[dt()],conditional_function:()=>t.count>=1}}function Gn({maxAttempts:t=Bn}={}){const e={count:0};return{timeline:[Wn(e),ut(),Fn(),Un(e,t)],loop_function:()=>(e.count+=1,e.count>=t?!1:!!!window.jsPsych?.data?.get().filter({phase:"screen_calibration_gate"}).last(1).values()[0]?.value?.passed)}}function Un(t,e){return{type:fe,async:!1,func:()=>{const n=window.jsPsych?.data?.get().filter({phase:"screen_calibration"}).last(1).values()[0],o=Number.isFinite(n?.px_per_mm)?n.px_per_mm:null;return{attempts_used:t.count,max_attempts:e,retried:t.count>1,px_per_mm:o,px_per_mm_in_bounds:n?.px_per_mm_in_bounds===!0}},data:{phase:"screen_calibration_outcome"}}}const Vn="88vh",Kn="40rem",Jn="95vw",Xn="72rem",ht=`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  text-align: left;
  box-sizing: border-box;
  padding: 0.5rem 0;
  min-height: ${Vn};
`.replace(/\s+/g," ").trim(),Qn=`${ht} width: ${Kn}; max-width: 90vw;`,Zn=`${ht} width: ${Jn}; max-width: ${Xn}; align-items: center;`,pt=`
  flex: 0 0 auto;
  min-height: 3rem;
  width: 100%;
  margin: 0 0 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`.replace(/\s+/g," ").trim(),mt=`
  margin: 0;
  text-align: center;
  font-size: clamp(1.05rem, 2.1vw, 1.6rem);
  line-height: 1.25;
  white-space: nowrap;
`.replace(/\s+/g," ").trim(),eo=`
  flex: 1 1 auto;
  min-height: 0;
  width: 100%;
`.replace(/\s+/g," ").trim();function y({title:t,body:e,narration:n}){const o=typeof n=="string"&&n.trim()?` data-voiceover-script="${to(n.trim())}"`:"";return`
    <div style="${Qn}">
      <div style="${pt}">
        <h2 style="${mt}">${t}</h2>
      </div>
      <div style="${eo}" data-voiceover-target${o}>${e}</div>
    </div>
  `}function to(t){return t.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const no=y({title:"Sit comfortably for the study",body:`
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
  `,narration:"Before we begin the tasks, let's get you set up. This study works best when you are seated comfortably and stay in roughly the same position for the rest of the session. Please take a moment to set yourself up. Sit so that your eyes are about an arm's length, roughly 60 centimetres, away from the monitor. Centre yourself in front of the screen: your eyes should be directly in front of the middle of the monitor, not off to one side. Make sure the screen is roughly at eye level — adjust your chair or the monitor if needed. And try to stay in this position for the rest of the study — moving your head closer or farther between trials can change how the task looks, and how well you can do it. When you are settled in this position, click the button below to continue."}),oo=y({title:"How to place your hands",body:`
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
  `,narration:"Next, let's set up your hands. Throughout the study you will respond with the two horizontal arrow keys on your keyboard, the left arrow and the right arrow. The demonstrations will label them No or Yes, and Not on-pattern or On-pattern. How you place your hands matters. Use both hands, and only your index fingers. Place one index finger on each of the two horizontal arrow keys, one finger per hand. Keep them resting on those two keys throughout the study. Do not use two fingers of the same hand — one index finger per hand, on its own response key. When both index fingers are resting on the two response keys, click the button below to continue."});function ro(){const t=g({type:P,stimulus:no,choices:["I am ready"],button_html:n=>`<button class="jspsych-btn" style="margin-top: 1rem;">${n}</button>`,data:{phase:"viewing_distance"}},"viewing_distance"),e=g({type:P,stimulus:oo,choices:["I am ready"],button_html:n=>`<button class="jspsych-btn" style="margin-top: 1rem;">${n}</button>`,data:{phase:"hand_placement"}},"hand_placement");return{timeline:[t,e]}}function ft(){const t="speaker_volume_instruction",e={type:P,stimulus:`
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
    `,choices:["Continue"],data:{phase:"speaker_volume_instruction"}};return _(t,ft),g(e,t)}var ao="2.1.0";const io={name:"fullscreen",version:ao,parameters:{fullscreen_mode:{type:p.BOOL,default:!0,array:!1},message:{type:p.HTML_STRING,default:"<p>The experiment will switch to full screen mode when you press the button below</p>",array:!1},button_label:{type:p.STRING,default:"Continue",array:!1},delay_after:{type:p.INT,default:1e3,array:!1}},data:{success:{type:p.BOOL,default:null,description:"True if the user entered fullscreen mode, false if not."},rt:{type:p.INT,default:null,description:"Time in milliseconds until the user entered fullscreen mode."}},citations:{apa:"de Leeuw, J. R., Gilbert, R. A., & Luchterhandt, B. (2023). jsPsych: Enabling an Open-Source Collaborative Ecosystem of Behavioral Experiments. Journal of Open Source Software, 8(85), 5351. https://doi.org/10.21105/joss.05351 ",bibtex:'@article{Leeuw2023jsPsych, 	author = {de Leeuw, Joshua R. and Gilbert, Rebecca A. and Luchterhandt, Bj{\\" o}rn}, 	journal = {Journal of Open Source Software}, 	doi = {10.21105/joss.05351}, 	issn = {2475-9066}, 	number = {85}, 	year = {2023}, 	month = {may 11}, 	pages = {5351}, 	publisher = {Open Journals}, 	title = {jsPsych: Enabling an {Open}-{Source} {Collaborative} {Ecosystem} of {Behavioral} {Experiments}}, 	url = {https://joss.theoj.org/papers/10.21105/joss.05351}, 	volume = {8}, }  '}};class so{constructor(e){this.jsPsych=e,this.rt=null,this.start_time=0}static{this.info=io}trial(e,n){var o=typeof Element<"u"&&"ALLOW_KEYBOARD_INPUT"in Element;o?this.endTrial(e,!1,n):n.fullscreen_mode?this.showDisplay(e,n):(this.exitFullScreen(),this.endTrial(e,!0,n))}showDisplay(e,n){e.innerHTML=`
      ${n.message}
      <button id="jspsych-fullscreen-btn" class="jspsych-btn">${n.button_label}</button>
    `,e.querySelector("#jspsych-fullscreen-btn").addEventListener("click",()=>{this.rt=Math.round(performance.now()-this.start_time),this.enterFullScreen(),this.endTrial(e,!0,n)}),this.start_time=performance.now()}endTrial(e,n,o){e.innerHTML="",this.jsPsych.pluginAPI.setTimeout(()=>{var r={success:n,rt:this.rt};this.jsPsych.finishTrial(r)},o.delay_after)}enterFullScreen(){var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}exitFullScreen(){(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)&&(document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen())}simulate(e,n,o,r){n=="data-only"&&(r(),this.simulate_data_only(e,o)),n=="visual"&&this.simulate_visual(e,o,r)}create_simulation_data(e,n){const r={success:!0,rt:this.jsPsych.randomization.sampleExGaussian(1e3,100,.005,!0)};return this.jsPsych.pluginAPI.mergeSimulationData(r,n)}simulate_data_only(e,n){const o=this.create_simulation_data(e,n);this.jsPsych.finishTrial(o)}simulate_visual(e,n,o){const r=this.create_simulation_data(e,n),a=this.jsPsych.getDisplayElement();r.success===!1?this.endTrial(a,!1,e):(this.trial(a,e),o(),this.jsPsych.pluginAPI.clickTarget(a.querySelector("#jspsych-fullscreen-btn"),r.rt))}}let We=null;const yt=[];function Ge(t){yt.push(t),tt({phase:"visibility_event",...t}).catch(e=>{console.error("[visibility] storage append failed",e),nt(e)})}function lo(){if(We)return;const t=()=>{Ge({kind:"visibilitychange",hidden:document.hidden,ts:performance.now(),iso:new Date().toISOString()})},e=()=>{Ge({kind:"fullscreenchange",in_fullscreen:!!document.fullscreenElement,ts:performance.now(),iso:new Date().toISOString()})};document.addEventListener("visibilitychange",t),document.addEventListener("fullscreenchange",e),We=()=>{document.removeEventListener("visibilitychange",t),document.removeEventListener("fullscreenchange",e)}}function co(){return yt.slice()}function gt(){const t="enter_fullscreen",e={type:so,fullscreen_mode:!0,message:`
      <h2>Enter fullscreen</h2>
      <p>The experiment must run in fullscreen. Click below to continue.</p>
    `,button_label:"Enter fullscreen",data:{phase:"enter_fullscreen"}};return _(t,gt),g(e,t)}function uo(){return{type:fe,async:!1,func:()=>(lo(),{recording:!0}),data:{phase:"visibility_recorder_start"}}}const ho=1e3,po=500,mo=50,fo=10,X=50,yo="#60a5fa";function _e(t,e){return new Promise(n=>{const o=()=>{const r=(e-t.currentTime)*1e3;if(r<=0){n();return}setTimeout(o,Math.min(r,10))};o()})}function go(t){const e=[];for(let n=0;n<t;n++)e.push(`<div class="tac-box" id="tac-box-${n}" data-idx="${n}">${n+1}</div>`);return e.join("")}function bt(){const t="tone_audibility_and_comfort";let e=!1,n=!1,o=!1,r=0,a=X,i=null;const c={type:P,stimulus:`
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
          background: rgba(255, 255, 255, 0.06);
          color: rgba(255, 255, 255, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 4px;
          font-family: monospace;
          font-size: 0.95rem;
          font-variant-numeric: tabular-nums;
          user-select: none;
          transition: background 60ms linear, color 60ms linear, transform 60ms linear;
        }
        .tac-box.playing {
          background: ${yo};
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
          ${f.tones.count} tones will start playing in a loop in a
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
        ${go(f.tones.count)}
      </div>
      <div class="tac-slider-wrap">
        <input
          id="tac-slider"
          type="range"
          min="0"
          max="100"
          step="1"
          value="${X}"
          aria-label="Playback volume"
        />
        <div class="tac-slider-readout">
          <span>quieter</span>
          <span id="tac-slider-readout">${X}%</span>
          <span>louder</span>
        </div>
      </div>
    `,choices:["I'm comfortable — continue"],button_html:d=>`<button class="jspsych-btn" id="tac-yes-btn">${d}</button>`,on_load:async()=>{e=!1,n=!1,o=!1,r=0,a=X,typeof i=="function"&&(i(),i=null);const d=document.querySelector("[data-tac-narration]");let s=Promise.resolve();if(d){d.setAttribute("data-voiceover-started","1"),rt();const w=xe().narrateInPlace(d);i=Xt(),s=w?.done??Promise.resolve()}Me(X/100);const l=document.getElementById("tac-slider"),u=document.getElementById("tac-slider-readout");l&&l.addEventListener("input",()=>{const w=Number(l.value);a=w,u&&(u.textContent=`${w}%`),Me(w/100)});const h=document.getElementById("tac-yes-btn");if(h&&h.addEventListener("click",()=>{n||(o=!0),e=!0},{capture:!0}),await s,typeof i=="function"&&(i(),i=null),e)return;const m=Qt(),v=at(),b=f.tones.duration_ms/1e3,k=(f.tones.duration_ms+ho)/1e3,O=po/1e3,E=[];for(let w=0;w<v.length;w++)E.push(document.getElementById(`tac-box-${w}`));let H=m.currentTime+mo/1e3;try{for(let w=0;w<fo&&!e;w++){r=w+1;for(let F=0;F<v.length&&!e;F++){const K=H;if(Zt(F,{when:K}),await _e(m,K),e)break;const W=E[F];W&&W.classList.add("playing"),await _e(m,K+b),W&&W.classList.remove("playing"),H=K+k}e||(await _e(m,H+O),H+=O)}}catch{}if(!o&&!e){n=!0;const w=document.getElementById("tac-yes-btn");w&&w.click()}},on_finish:d=>{ot();const s=xe();s.current&&!s.current._state?.finished&&s.current.cancel(),typeof i=="function"&&(i(),i=null),d.tones_audible=o&&!n,d.user_playback_pct=a,d.user_playback_gain=a/100,d.sweeps_completed=r},data:{phase:"tone_audibility_and_comfort"}};return _(t,bt),g(c,t)}function bo(){return{timeline:[{type:P,stimulus:`
          <h2>Sorry — the audio doesn't seem to be coming through</h2>
          <p style="max-width: 38rem; margin: 0 auto 1rem;">
            Without a comfortable, clearly audible setting for every
            tone, the task cannot be completed accurately.
          </p>
          <p style="max-width: 38rem; margin: 0 auto;">
            Please return the study on Prolific so the slot can be
            reopened. We're sorry for the inconvenience.
          </p>
        `,choices:["Close"],data:{phase:"tone_audibility_fail"},on_finish:()=>{typeof window<"u"&&window.jsPsych?.abortExperiment&&window.jsPsych.abortExperiment("Tone audibility failed.")}}],conditional_function:()=>{const t=window.jsPsych?.data?.get().filter({phase:"tone_audibility_and_comfort"}).last(1).values()[0];return t?t.tones_audible===!1:!1}}}function wo(){return[$n(),zn(),lt(),Pn(),ct(),ro(),Gn(),ft(),gt(),uo(),bt(),bo()]}var vo="2.1.0";const _o={name:"instructions",version:vo,parameters:{pages:{type:p.HTML_STRING,default:void 0,array:!0},key_forward:{type:p.KEY,default:"ArrowRight"},key_backward:{type:p.KEY,default:"ArrowLeft"},allow_backward:{type:p.BOOL,default:!0},allow_keys:{type:p.BOOL,default:!0},show_clickable_nav:{type:p.BOOL,default:!1},show_page_number:{type:p.BOOL,default:!1},page_label:{type:p.STRING,default:"Page"},button_label_previous:{type:p.STRING,default:"Previous"},button_label_next:{type:p.STRING,default:"Next"},on_page_change:{type:p.FUNCTION,pretty_name:"Page change callback",default:function(t){}}},data:{view_history:{type:p.COMPLEX,array:!0,nested:{page_index:{type:p.INT},viewing_time:{type:p.INT}}},rt:{type:p.INT}},citations:{apa:"de Leeuw, J. R., Gilbert, R. A., & Luchterhandt, B. (2023). jsPsych: Enabling an Open-Source Collaborative Ecosystem of Behavioral Experiments. Journal of Open Source Software, 8(85), 5351. https://doi.org/10.21105/joss.05351 ",bibtex:'@article{Leeuw2023jsPsych, 	author = {de Leeuw, Joshua R. and Gilbert, Rebecca A. and Luchterhandt, Bj{\\" o}rn}, 	journal = {Journal of Open Source Software}, 	doi = {10.21105/joss.05351}, 	issn = {2475-9066}, 	number = {85}, 	year = {2023}, 	month = {may 11}, 	pages = {5351}, 	publisher = {Open Journals}, 	title = {jsPsych: Enabling an {Open}-{Source} {Collaborative} {Ecosystem} of {Behavioral} {Experiments}}, 	url = {https://joss.theoj.org/papers/10.21105/joss.05351}, 	volume = {8}, }  '}};class te{constructor(e){this.jsPsych=e}static{this.info=_o}trial(e,n){var o=0,r=[],a=performance.now(),i=a;function c(){this.id==="jspsych-instructions-back"?l():this.id==="jspsych-instructions-next"&&s()}function d(){var b=n.pages[o],k="";if(n.show_page_number&&(k="<span style='margin: 0 1em;' class='jspsych-instructions-pagenum'>"+n.page_label+" "+(o+1)+"/"+n.pages.length+"</span>"),n.show_clickable_nav){var O="<div class='jspsych-instructions-nav' style='padding: 10px 0px;'>";if(n.allow_backward){var E=o>0?"":"disabled='disabled'";O+="<button id='jspsych-instructions-back' class='jspsych-btn' style='margin-right: 5px;' "+E+">&lt; "+n.button_label_previous+"</button>"}n.pages.length>1&&n.show_page_number&&(O+=k),O+="<button id='jspsych-instructions-next' class='jspsych-btn'style='margin-left: 5px;'>"+n.button_label_next+" &gt;</button></div>",b+=O,e.innerHTML=b,o!=0&&n.allow_backward&&e.querySelector("#jspsych-instructions-back").addEventListener("click",c,{once:!0}),e.querySelector("#jspsych-instructions-next").addEventListener("click",c,{once:!0})}else n.show_page_number&&n.pages.length>1&&(b+="<div class='jspsych-instructions-pagenum'>"+k+"</div>"),e.innerHTML=b}function s(){u(),o++,o>=n.pages.length?h():d(),n.on_page_change(o)}function l(){u(),o--,d(),n.on_page_change(o)}function u(){var b=performance.now(),k=Math.round(b-i);r.push({page_index:o,viewing_time:k}),i=b}const h=()=>{n.allow_keys&&this.jsPsych.pluginAPI.cancelKeyboardResponse(v);var b={view_history:r,rt:Math.round(performance.now()-a)};this.jsPsych.finishTrial(b)},m=b=>{v=this.jsPsych.pluginAPI.getKeyboardResponse({callback_function:m,valid_responses:[n.key_forward,n.key_backward],rt_method:"performance",persist:!1,allow_held_key:!1}),this.jsPsych.pluginAPI.compareKeys(b.key,n.key_backward)&&o!==0&&n.allow_backward&&l(),this.jsPsych.pluginAPI.compareKeys(b.key,n.key_forward)&&s()};if(d(),n.allow_keys)var v=this.jsPsych.pluginAPI.getKeyboardResponse({callback_function:m,valid_responses:[n.key_forward,n.key_backward],rt_method:"performance",persist:!1})}simulate(e,n,o,r){n=="data-only"&&(r(),this.simulate_data_only(e,o)),n=="visual"&&this.simulate_visual(e,o,r)}create_simulation_data(e,n){let o=0,r=0,a=[];if(!n.data?.view_history&&!n.data?.rt)for(;o!==e.pages.length;){const d=Math.round(this.jsPsych.randomization.sampleExGaussian(3e3,300,.0033333333333333335));a.push({page_index:o,viewing_time:d}),r+=d,o==0||!e.allow_backward||this.jsPsych.randomization.sampleBernoulli(.9)==1?o++:o--}if(!n.data?.view_history&&n.data?.rt){for(r=n.data.rt;o!==e.pages.length;)a.push({page_index:o,viewing_time:null}),o==0||!e.allow_backward||this.jsPsych.randomization.sampleBernoulli(.9)==1?o++:o--;const d=n.data.rt/a.length;let s=0;for(const h of a){const m=Math.round(this.jsPsych.randomization.sampleExGaussian(d,d/10,1/(d/10)));h.viewing_time=m,s+=m}const l=n.data.rt-s,u=Math.round(l/a.length);for(const h of a)h.viewing_time+=u}if(n.data?.view_history&&!n.data?.rt){a=n.data.view_history,r=0;for(const d of n.data.view_history)r+=d.viewing_time}const i={view_history:a,rt:r},c=this.jsPsych.pluginAPI.mergeSimulationData(i,n);return this.jsPsych.pluginAPI.ensureSimulationDataConsistency(e,c),c}simulate_data_only(e,n){const o=this.create_simulation_data(e,n);this.jsPsych.finishTrial(o)}simulate_visual(e,n,o){const r=this.create_simulation_data(e,n),a=this.jsPsych.getDisplayElement();this.trial(a,e),o();const i=l=>{e.allow_keys?this.jsPsych.pluginAPI.pressKey(e.key_forward,l):e.show_clickable_nav&&this.jsPsych.pluginAPI.clickTarget(a.querySelector("#jspsych-instructions-next"),l)},c=l=>{e.allow_keys?this.jsPsych.pluginAPI.pressKey(e.key_backward,l):e.show_clickable_nav&&this.jsPsych.pluginAPI.clickTarget(a.querySelector("#jspsych-instructions-back"),l)};let d=0,s=0;for(let l=0;l<r.view_history.length;l++)l==r.view_history.length-1?i(s+r.view_history[l].viewing_time):(r.view_history[l+1].page_index>d&&i(s+r.view_history[l].viewing_time),r.view_history[l+1].page_index<d&&c(s+r.view_history[l].viewing_time),s+=r.view_history[l].viewing_time,d=r.view_history[l+1].page_index)}}const wt='<span style="color: #34d399;"><strong>green</strong></span>',vt='<span style="color: #f87171;"><strong>red</strong></span>',_t=Object.freeze({key_forward:" ",key_backward:"ArrowLeft",allow_backward:!0,allow_keys:!0,show_clickable_nav:!0,show_page_number:!0,page_label:"Page",button_label_previous:"Previous",button_label_next:"Next"});function kt(){const t=f.memory.set_size,e="Task 1 — Remember the dots",n=[y({title:e,body:`
        <p>You will see <strong>${t} dots</strong> appear one at a
        time at different locations inside a circle on the screen. Each
        dot is shown briefly. Try to remember
        <strong>which locations</strong> the dots appear in.</p>
      `,narration:`Welcome to Task 1. In this first task, you will see ${t} dots appear one at a time at different locations inside a circle on the screen. Each dot is shown briefly. Try to remember which locations the dots appear in.`}),y({title:e,body:`
        <p>After the dots, we will test your memory <strong>${t}
        times</strong>. Each time, a white dot will be shown for
        3 seconds, and you have to say whether the dot was shown in
        that location.</p>
        <p>Just keep watching the centre of the circle and remember
        each dot whenever it appears.</p>
      `,narration:`After the dots, we will test your memory ${t} times. Each time, a white dot will be shown for 3 seconds, and you have to say whether the dot was shown in that location. Just keep watching the centre of the circle, and remember each dot whenever it appears.`}),y({title:e,body:`
        <p style="margin: 1.25rem 0;">
          Press <strong>Yes</strong> if you remember you saw a dot in
          that location.<br />
          Press <strong>No</strong> if you did not.
        </p>
        <p>You will have <strong>3 seconds</strong> to provide your
        response. Try to get it right rather than answer quickly, but
        please don't take too long either.</p>
      `,narration:"Now for the responses. Press Yes if you remember you saw a dot in that location. Press No if you did not. You will have 3 seconds to provide your response. Try to get it right rather than answer quickly, but please don't take too long either."}),y({title:e,body:`
        <p>If you answer in time, the dot can turn
        ${wt} if you were correct or
        ${vt} if you were not. This colour change happens while
        the dot is still on the screen, so you can learn from each
        test.</p>
        <p>You will now do a short practice for this task before moving
        on to the next.</p>
        <p style="text-align: center; margin-top: 1.5rem;">
          Press <kbd>Space</kbd> to start the practice for Task 1.
        </p>
      `,narration:"One last thing. If you answer in time, the dot can turn green if you were correct, or red if you were not. This colour change happens while the dot is still on the screen, so you can learn from each test. You will now do a short practice for this task before moving on to the next. When you're ready, press Space to start the practice for Task 1."})],o={type:te,pages:n,..._t,data:{phase:"instructions_memory_d_only"}};return B(o.data.phase,kt),Y(o)}function Tt(){const t=f.memory.set_size,e="Task 2 — Remember the tones",n=[y({title:e,body:`
        <p>This task works just like Task 1, but now you will hear sounds
        instead of seeing dots. You will hear <strong>${t} short
        tones</strong>, one at a time. Try to remember
        <strong>each tone you hear</strong>.</p>
      `,narration:`Now on to Task 2. This task works just like Task 1, but now you will hear sounds instead of seeing dots. You will hear ${t} short tones, one at a time. Try to remember each tone you hear.`}),y({title:e,body:`
        <p>After the ${t} tones, we will play <strong>${t}
        more tones, one at a time</strong>. Each time, decide whether
        that tone was one of the ones you just heard.</p>
        <p>You don't need to look at anything during this task — just
        keep your eyes on the centre of the circle and listen for
        each tone whenever it plays.</p>
      `,narration:`After the ${t} tones, we will play ${t} more tones, one at a time. Each time, decide whether that tone was one of the ones you just heard. You don't need to look at anything during this task — just keep your eyes on the centre of the circle, and listen for each tone whenever it plays.`}),y({title:e,body:`
        <p style="margin: 1.25rem 0;">
          Press <strong>Yes</strong> if you heard this tone before.<br />
          Press <strong>No</strong> if you did not.
        </p>
        <p>You will have <strong>3 seconds</strong> to provide your
        response. If you answer in time, the central question mark can
        change colour while it is still on the screen:
        it turns ${wt} if you were correct or
        ${vt} if you were not, so you can learn from each
        test.</p>
      `,narration:"Here are the responses. Press Yes if you heard this tone before. Press No if you did not. You will have 3 seconds to provide your response. If you answer in time, the central question mark can change colour while it is still on the screen: it turns green if you were correct, or red if you were not, so you can learn from each test."}),y({title:e,body:`
        <p>Please make sure your audio volume is still at the level you
        set earlier.</p>
        <p style="text-align: center; margin-top: 1.5rem;">
          Press <kbd>Space</kbd> to start the practice for Task 2.
        </p>
      `,narration:"One quick reminder. Please make sure your audio volume is still at the level you set earlier. When you're ready, press Space to start the practice for Task 2."})],o={type:te,pages:n,..._t,data:{phase:"instructions_memory_t_only"}};return B(o.data.phase,Tt),Y(o)}const ko='<span style="color: #34d399;"><strong>green</strong></span>',To='<span style="color: #f87171;"><strong>red</strong></span>',xo='<p style="border-left: 3px solid #772139; padding: 0.5rem 0.75rem; margin: 1rem 0; background: rgba(119, 33, 57, 0.08);">',Oo=Object.freeze({key_forward:" ",key_backward:"ArrowLeft",allow_backward:!0,allow_keys:!0,show_clickable_nav:!0,show_page_number:!0,page_label:"Page",button_label_previous:"Previous",button_label_next:"Next"});function xt(){const t=f.imagery.stars_per_trial,e="Task 3 — Picture the pattern",n=[y({title:e,body:`
        <p>In this task we will ask you to <strong>picture a pattern in
        your mind</strong> and to keep that picture clear while you
        respond.</p>
        ${xo}
        <strong style="color: #772139;">Important:</strong> you will see
        the pattern in the demonstration just before the practice —
        please pay close attention to it then, because the pattern will
        <strong>not</strong> be shown again during the trials.</p>
      `,narration:"Welcome to Task 3. In this task, we will ask you to picture a pattern in your mind, and to keep that picture clear while you respond. Important: you will see the pattern in the demonstration just before the practice — please pay close attention to it then, because the pattern will not be shown again during the trials."}),y({title:e,body:`
        <p>On each trial, an <strong>arrow</strong> will briefly appear.
        The arrow tells you to <strong>turn the pattern in your
        mind</strong> in the direction it points, like rotating a piece
        of paper. Hold this turned pattern in mind.</p>
      `,narration:"Here's how each trial starts. On each trial, an arrow will briefly appear. The arrow tells you to turn the pattern in your mind in the direction it points, like rotating a piece of paper. Hold this turned pattern in mind."}),y({title:e,body:`
        <p>Then <strong>${t} bright stars</strong> will flash
        inside the circle, one at a time. For each star, decide whether
        it lands in a location that would be <strong>covered by the
        rotated pattern you are picturing</strong>.</p>
        <p style="margin: 1.25rem 0;">
          Press <strong>On-pattern</strong> if the star falls on your
          pictured pattern.<br />
          Press <strong>Not on-pattern</strong> if it does not.
        </p>
      `,narration:`Then ${t} bright stars will flash inside the circle, one at a time. For each star, decide whether it lands in a location that would be covered by the rotated pattern you are picturing. Press On-pattern if the star falls on your pictured pattern. Press Not on-pattern if it does not.`}),y({title:e,body:`
        <p>You will have <strong>3 seconds</strong> for each star. Try to
        get it right rather than answer quickly, but please don't take
        too long either.</p>
        <p>If you answer in time, the star can turn
        ${ko} if you were correct or
        ${To} if you were not. This colour change happens while
        the star is still on the screen, so you can learn from each
        star.</p>
        <p>Be honest about what you actually "see" in your mind. If your
        picture is fuzzy, just do your best — there is no expectation of
        a perfect mental picture.</p>
        <p style="text-align: center; margin-top: 1.5rem;">
          Press <kbd>Space</kbd> to start the practice for Task 3.
        </p>
      `,narration:"A few more things to know. You will have 3 seconds for each star. Try to get it right rather than answer quickly, but please don't take too long either. If you answer in time, the star can turn green if you were correct, or red if you were not. This colour change happens while the star is still on the screen, so you can learn from each star. Be honest about what you actually see in your mind. If your picture is fuzzy, just do your best — there is no expectation of a perfect mental picture. When you're ready, press Space to start the practice for Task 3."})],o={type:te,pages:n,...Oo,data:{phase:"instructions_imagery_i_only"}};return B(o.data.phase,xt),Y(o)}const Ot='<span style="color: #34d399;"><strong>green</strong></span>',Et='<span style="color: #f87171;"><strong>red</strong></span>',jt='<p style="border-left: 3px solid #772139; padding: 0.5rem 0.75rem; margin: 1rem 0; background: rgba(119, 33, 57, 0.08);">',Pt=Object.freeze({key_forward:" ",key_backward:"ArrowLeft",allow_backward:!0,allow_keys:!0,show_clickable_nav:!0,show_page_number:!0,page_label:"Page",button_label_previous:"Previous",button_label_next:"Next"});function St(){const t=f.memory.set_size,e=f.imagery.stars_per_trial,n=t+e,o="Task 4 — Dots and pattern together",r=[y({title:o,body:`
        <p>This task combines Task 3 (the pattern) with Task 1 (the
        dots). Each trial begins with the <strong>arrow</strong>, which
        tells you to turn the pattern in your mind. Hold this turned
        pattern in mind for the whole trial.</p>
      `,narration:"Now on to Task 4. This task combines Task 3, the pattern, with Task 1, the dots. Each trial begins with the arrow, which tells you to turn the pattern in your mind. Hold this turned pattern in mind for the whole trial."}),y({title:o,body:`
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
      `,narration:`Then ${n} things will appear inside the circle one at a time, all mixed together. ${e} stars — for each star, decide whether it lands in a location that would be covered by the rotated pattern you are picturing, just like Task 3. Press On-pattern if the star falls on your pictured pattern, or Not on-pattern if it does not. And ${t} dots — try to remember which locations the dots appear in, so you can answer the dot tests at the end of the trial, just like Task 1.`}),y({title:o,body:`
        <p>After the ${n} things, we will test your dot memory
        <strong>${t} times</strong>. Each time, a white dot will be
        shown for 3 seconds in some location:</p>
        <p style="margin: 1.25rem 0;">
          Press <strong>Yes</strong> if
          <em>a dot was presented here</em>.<br />
          Press <strong>No</strong> if
          <em>no dot was presented here</em>.
        </p>
        <p>You will have <strong>3 seconds</strong> for each star and for
        each dot test. If you answer in time, the star or dot can turn
        ${Ot} if you were correct or
        ${Et} if you were not while it is still on the screen,
        so you can learn from each response.</p>
      `,narration:`After the ${n} things, we will test your dot memory ${t} times. Each time, a white dot will be shown for 3 seconds in some location. Press Yes if a dot was presented here. Press No if no dot was presented here. You will have 3 seconds for each star and for each dot test. If you answer in time, the star or dot can turn green if you were correct, or red if you were not, while it is still on the screen, so you can learn from each response.`}),y({title:o,body:`
        ${jt}
        <strong style="color: #772139;">VERY important:</strong> keep the
        picture of the rotated pattern in your mind during the
        <strong>entire</strong> trial. The only moment you may let the
        picture go is when the central
        <strong>question mark (?)</strong> appears — that is when the
        dot tests begin, and at that point you can drop the image and
        focus only on the dot tests.</p>
        <p style="text-align: center; margin-top: 1.5rem;">
          Press <kbd>Space</kbd> to start the practice for Task 4.
        </p>
      `,narration:"One last thing, and this is very important. Keep the picture of the rotated pattern in your mind during the entire trial. The only moment you may let the picture go is when the central question mark appears — that is when the dot tests begin, and at that point you can drop the image and focus only on the dot tests. When you're ready, press Space to start the practice for Task 4."})],a={type:te,pages:r,...Pt,data:{phase:"instructions_dual_i_d"}};return B(a.data.phase,St),Y(a)}function It(){const t=f.memory.set_size,e=f.imagery.stars_per_trial,n=t+e,o="Task 5 — Tones and pattern together",r=[y({title:o,body:`
        <p>This task combines Task 3 (the pattern) with Task 2 (the
        tones). Each trial begins with the <strong>arrow</strong>, which
        tells you to turn the pattern in your mind. Hold this turned
        pattern in mind for the whole trial.</p>
      `,narration:"Now on to the last task, Task 5. This task combines Task 3, the pattern, with Task 2, the tones. Each trial begins with the arrow, which tells you to turn the pattern in your mind. Hold this turned pattern in mind for the whole trial."}),y({title:o,body:`
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
      `,narration:`Then ${n} things will happen one at a time, all mixed together. ${e} stars inside the circle — for each star, decide whether it lands in a location that would be covered by the rotated pattern you are picturing. Press On-pattern if the star falls on your pictured pattern, or Not on-pattern if it does not. And ${t} tones — try to remember each tone you hear, so you can answer the tone tests at the end of the trial, just like Task 2.`}),y({title:o,body:`
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
        mark can turn ${Ot} if you were correct or
        ${Et} if you were not while it is still on the screen,
        so you can learn from each response.</p>
      `,narration:`After the ${n} things, we will test your tone memory ${t} times. Each time, a tone will be played, and you will have 3 seconds to decide whether it was one of the tones you just heard. Press Yes if you heard this tone before. Press No if you did not. You will have 3 seconds for each star and for each tone test. If you answer in time, the star or central question mark can turn green if you were correct, or red if you were not, while it is still on the screen, so you can learn from each response.`}),y({title:o,body:`
        ${jt}
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
          Press <kbd>Space</kbd> to start the practice for Task 5.
        </p>
      `,narration:"One last thing, and this is very important. Keep the picture of the rotated pattern in your mind during the entire trial. The only moment you may let the picture go is when the central question mark appears — that is when the tone tests begin, and at that point you can drop the image and focus only on the tone tests. Please make sure your audio volume is still at the level you set earlier. When you're ready, press Space to start the practice for Task 5."})],a={type:te,pages:r,...Pt,data:{phase:"instructions_dual_i_t"}};return B(a.data.phase,It),Y(a)}const ne=4,pe=1e3*ne,ye=1500*ne,Eo=4e3*ne,jo=2e3*ne,Po=8e3,ge=2e3*ne,So=2e3,oe=2500,be=1200,Io=700,Ue=450,No=220,q=3e3,A=1500,$=2800,z=2500,qe=1e3,Co=Object.freeze([-90,-75,-60,-45,-30,-15,15,30,45,60,75,90]);function Ae(){return Ie().pick(Co)}const Lo="./assets/rotation-arrow.png";function qo(t,e){return`
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
      .demo-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 9rem;
        padding: 0.7rem 1.4rem;
        border-radius: 0.65rem;
        background: rgba(255,255,255,0.08);
        border: 1px solid rgba(255,255,255,0.22);
        color: rgba(255,255,255,0.95);
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
    <div class="demo-frame" style="${Zn}">
      <div style="${pt}">
        <h2 style="${mt}">Demonstration of Task ${t} — ${e}</h2>
      </div>

      <div class="demo-spacer-above-circle" style="
        flex: 3 0 0;
        min-height: 2rem;
      "></div>

      <div id="demo-mount" style="
        flex: 0 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
      "></div>

      <div style="
        flex: 0 0 auto;
        width: 30rem;
        max-width: 90vw;
        min-height: 5rem;
        margin-top: 1rem;
        padding: 0.85rem 1.15rem;
        border-radius: 0.75rem;
        background: rgba(96, 165, 250, 0.10);
        border: 1px solid rgba(96, 165, 250, 0.28);
        border-left: 3px solid rgba(96, 165, 250, 0.85);
        box-shadow: 0 0 0 1px rgba(255,255,255,0.04) inset;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
      ">
        <p id="demo-caption" style="
          margin: 0;
          text-align: center;
          color: rgba(255,255,255,0.95);
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
        color: rgba(255,255,255,0.85);
        text-align: center;
      ">
        Press <kbd>Space</kbd> when you are ready to start the practice for
        Task ${t}.
      </p>
    </div>
  `}function Ao(){const t={cancelled:!1,currentNarration:null};return{state:t,setCaption(e){const n=document.getElementById("demo-caption");if(!n)return;n.innerHTML=e,n.classList.remove("demo-caption-bump"),n.offsetWidth,n.classList.add("demo-caption-bump");const o=tn(e);o?(rt(),t.currentNarration=xe().speak(o)):t.currentNarration=null},async wait(e){return await en(e),!t.cancelled},async awaitNarration(){const e=t.currentNarration;return e?.done&&await new Promise(n=>{let o=!1;const r=()=>{o||(o=!0,n())};e.done.then(r).catch(r);const a=setInterval(()=>{t.cancelled&&(clearInterval(a),r())},100);e.done.finally(()=>clearInterval(a))}),!t.cancelled}}}function $o(t,e){const n=f.imagery.rotation_arrow_size_px,o=document.createElement("img");return o.src=Lo,o.alt="rotation cue",o.className="rotation-arrow-cue demo-arrow",o.setAttribute("style",["position: absolute","top: 50%","left: 50%",`width: ${n}px`,`height: ${n}px`,`transform: translate(-50%, -50%) rotate(${e}deg)`,"pointer-events: none","z-index: 10","user-select: none"].join("; ")+";"),t.wrapper.appendChild(o),o}function Ve(t){t&&t.parentNode&&t.parentNode.removeChild(t)}async function $e(t,e,n){if(e.setCaption("Step 1 of 3 — Here is the pattern. Picture it in your mind."),hn(t),De(t),!await e.wait(Eo))return!1;e.setCaption(`Step 2 of 3 — An arrow tells you which way to turn the pattern in your mind (here, by ${n>0?"+":""}${n}°).`),Oe(t);const o=$o(t,n);return await e.wait(jo)?(e.setCaption("Step 3 of 3 — This is how your rotated mental image should look. Hold this picture in your mind."),Ve(o),it(t,n),De(t),await e.wait(Po)?(Oe(t),!0):!1):(Ve(o),!1)}function re(){const t=pn(),e=mn();return{memCells:[t[0],e[1],t[2]],fillerCells:[e[0],t[1],e[2]],probeCells:[{cell:t[0],isTarget:!0,label:"on"},{cell:e[1],isTarget:!0,label:"off"},{cell:e[4],isTarget:!1,label:"off"}],starCells:[{cell:t[5],isOn:!0},{cell:e[5],isOn:!1},{cell:t[6],isOn:!0}]}}function ae({leftLabel:t,rightLabel:e}){const n=document.getElementById("demo-buttons-row");if(!n)return null;n.innerHTML=`
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
  `;const o=n.querySelector(".demo-buttons-container"),r=n.querySelector('[data-side="left"]'),a=n.querySelector('[data-side="right"]'),i=n.querySelector(".demo-hand");return{container:o,leftBtn:r,rightBtn:a,hand:i}}function Nt(t,e,n){if(!t?.leftBtn||!t?.rightBtn)return!1;const o=t.leftBtn.querySelector(".demo-btn-label"),r=t.rightBtn.querySelector(".demo-btn-label");return o&&(o.textContent=e),r&&(r.textContent=n),!0}function ke(){const t=document.getElementById("demo-buttons-row");t&&(t.innerHTML="")}function Ke(t,e){if(!t?.container||!t?.hand)return;const n=e==="right"?t.rightBtn:t.leftBtn;if(!n)return;const o=t.container.getBoundingClientRect(),r=n.getBoundingClientRect(),a=r.left+r.width/2-o.left,i=r.bottom-o.top+4;t.hand.style.left=`${a}px`,t.hand.style.top=`${i}px`}async function R(t,e,n){if(!t)return!0;if(Ke(t,e==="right"?"left":"right"),t.hand.style.transition="none",t.hand.style.opacity="0",t.hand.offsetWidth,t.hand.style.transition="opacity 200ms ease-out",t.hand.style.opacity="0.95",!await n.wait(Io)||(t.hand.style.transition=`left ${Ue}ms ease-in-out`,Ke(t,e),!await n.wait(Ue)))return!1;const o=e==="right"?t.rightBtn:t.leftBtn;return o&&(o.classList.remove("demo-btn-pressed"),o.offsetWidth,o.classList.add("demo-btn-pressed")),!!await n.wait(No)}function M(t){t?.hand&&(t.hand.style.transition="opacity 200ms ease-in",t.hand.style.opacity="0")}const C=Object.freeze({left:"No",right:"Yes"}),G=Object.freeze({left:"Not on-pattern",right:"On-pattern"});function D({pressedLabel:t,correctLabel:e,isCorrect:n,stimulusName:o}){const r=`<span style="color: ${I}; font-weight: 600;">correct</span>`,a=`<span style="color: ${N}; font-weight: 600;">incorrect</span>`;return n?`We chose <strong>${t}</strong> — that was the ${r} answer, so the ${o} turns green.`:`We chose <strong>${t}</strong> — that was ${a}; the ${r} answer was <strong>${e}</strong>, so the ${o} turns red.`}async function zo(t,e){const{memCells:n,fillerCells:o,probeCells:r}=re(),a=ae({leftLabel:"No",rightLabel:"Yes"});if(e.setCaption("Watch as dots appear one at a time. Try to remember the location of each dot."),!await e.wait(oe))return;for(let c=0;c<3;c++){if(c===0?e.setCaption("Dot 1 — remember its location."):c===2?e.setCaption("Last dot — remember its location."):e.setCaption(`Dot ${c+1} — keep tracking each location.`),!await e.wait(be))return;const d=he(t,n[c]);if(!await e.wait(pe)||(j(d),!await e.wait(ye-pe)))return;e.setCaption("");const s=Ne(t,o[c],{visible:!1});if(!await e.wait(qe))return;j(s)}if(e.setCaption("Hold the dots in mind for a moment."),T(t,"?"),!await e.wait(ge))return;const i=2;for(let c=0;c<r.length;c++){const d=r[c],s=d.isTarget?"right":"left",l=c===i?s==="right"?"left":"right":s;e.setCaption(`Test ${c+1} of 3: was a dot just shown in this location?`);const u=he(t,d.cell);if(!await e.wait($)||!await R(a,l,e))return;const h=l===s;if(u.setAttribute("fill",h?I:N),!await e.wait(A)||(e.setCaption(D({pressedLabel:C[l],correctLabel:C[s],isCorrect:h,stimulusName:"dot"})),!await e.wait(q))||(M(a),j(u),!await e.wait(z)))return}T(t,"")}async function Ro(t,e){const{memCells:n,fillerCells:o,probeCells:r}=re(),a=ae({leftLabel:"No",rightLabel:"Yes"});if(e.setCaption("Listen as tones play one at a time."),!await e.wait(oe))return;for(let c=0;c<3;c++){if(c===0?e.setCaption("Tone 1 — listen and try to remember it."):c===2?e.setCaption("Last tone — keep remembering each one."):e.setCaption(`Tone ${c+1} — keep listening for each tone.`),!await e.wait(be)||(de(n[c]).catch(()=>{}),!await e.wait(ye)))return;e.setCaption("");const d=Ne(t,o[c],{visible:!1});if(!await e.wait(qe))return;j(d)}if(e.setCaption("Hold the tones in mind for a moment."),T(t,"?"),!await e.wait(ge))return;const i=2;for(let c=0;c<r.length;c++){const d=r[c],s=d.isTarget?"right":"left",l=c===i?s==="right"?"left":"right":s;if(e.setCaption(`Test ${c+1} of 3: was this tone one of the ones you just heard?`),!await e.wait($)||(de(d.cell).catch(()=>{}),!await R(a,l,e)))return;const u=l===s;if(T(t,"?",{color:u?I:N}),!await e.wait(A)||(e.setCaption(D({pressedLabel:C[l],correctLabel:C[s],isCorrect:u,stimulusName:"question mark"})),!await e.wait(q))||(M(a),T(t,"?"),!await e.wait(z)))return}T(t,"")}async function Mo(t,e){const n=Ae(),o=ae({leftLabel:"Not on-pattern",rightLabel:"On-pattern"});if(!await $e(t,e,n)||(e.setCaption("Now keep picturing the turned pattern. 3 stars will appear inside the circle. For each star, decide whether it falls <strong>on-pattern</strong> or <strong>not on-pattern</strong>."),!await e.wait(oe)))return;const{fillerCells:r,starCells:a}=re(),i=2;for(let c=0;c<3;c++){e.setCaption("");const d=Ne(t,r[c],{visible:!1});if(!await e.wait(qe))return;j(d);const s=a[c],l=s.isOn?"right":"left",u=c===i?l==="right"?"left":"right":l;e.setCaption(`Star ${c+1} of 3 — judge it against your turned pattern.`);const h=Ce(t,s.cell);if(!await e.wait($)||!await R(o,u,e))return;const m=u===l;if(Le(h,m?I:N),!await e.wait(A)||(e.setCaption(D({pressedLabel:G[u],correctLabel:G[l],isCorrect:m,stimulusName:"star"})),!await e.wait(q))||(M(o),j(h),!await e.wait(z)))return}}async function Do(t,e){const n=Ae(),o=ae({leftLabel:"Not on-pattern",rightLabel:"On-pattern"});if(!await $e(t,e,n)||(e.setCaption("Now keep picturing the turned pattern. 6 things appear inside the circle, mixed together: 3 dots to remember, 3 stars to judge as <strong>on-pattern</strong> or <strong>not on-pattern</strong>."),!await e.wait(oe)))return;const{memCells:r,starCells:a,probeCells:i}=re(),c=2;for(let s=0;s<3;s++){if(e.setCaption(`Dot ${s+1} — remember its location.`),!await e.wait(be))return;const l=he(t,r[s]);if(!await e.wait(pe)||(j(l),!await e.wait(ye-pe)))return;const u=a[s],h=u.isOn?"right":"left",m=s===c?h==="right"?"left":"right":h;e.setCaption(`Star ${s+1} — judge it against your turned pattern.`);const v=Ce(t,u.cell);if(!await e.wait($)||!await R(o,m,e))return;const b=m===h;if(Le(v,b?I:N),!await e.wait(A)||(e.setCaption(D({pressedLabel:G[m],correctLabel:G[h],isCorrect:b,stimulusName:"star"})),!await e.wait(q))||(M(o),j(v),!await e.wait(z)))return}if(e.setCaption("When the question mark appears, the dot tests begin. You may let the picture go now and focus on the dots."),Nt(o,"No","Yes"),T(t,"?"),!await e.wait(ge))return;const d=2;for(let s=0;s<i.length;s++){const l=i[s],u=l.isTarget?"right":"left",h=s===d?u==="right"?"left":"right":u;e.setCaption(`Dot test ${s+1} of 3: was a dot shown in this location?`);const m=he(t,l.cell);if(!await e.wait($)||!await R(o,h,e))return;const v=h===u;if(m.setAttribute("fill",v?I:N),!await e.wait(A)||(e.setCaption(D({pressedLabel:C[h],correctLabel:C[u],isCorrect:v,stimulusName:"dot"})),!await e.wait(q))||(M(o),j(m),!await e.wait(z)))return}T(t,"")}async function Bo(t,e){const n=Ae(),o=ae({leftLabel:"Not on-pattern",rightLabel:"On-pattern"});if(!await $e(t,e,n)||(e.setCaption("Now keep picturing the turned pattern. 6 things happen, mixed together: 3 tones to remember, 3 stars (inside the circle) to judge as <strong>on-pattern</strong> or <strong>not on-pattern</strong>."),!await e.wait(oe)))return;const{memCells:r,starCells:a,probeCells:i}=re(),c=2;for(let s=0;s<3;s++){if(e.setCaption(`Tone ${s+1} — listen and remember it.`),!await e.wait(be)||(de(r[s]).catch(()=>{}),!await e.wait(ye)))return;const l=a[s],u=l.isOn?"right":"left",h=s===c?u==="right"?"left":"right":u;e.setCaption(`Star ${s+1} — judge it against your turned pattern.`);const m=Ce(t,l.cell);if(!await e.wait($)||!await R(o,h,e))return;const v=h===u;if(Le(m,v?I:N),!await e.wait(A)||(e.setCaption(D({pressedLabel:G[h],correctLabel:G[u],isCorrect:v,stimulusName:"star"})),!await e.wait(q))||(M(o),j(m),!await e.wait(z)))return}if(e.setCaption("When the question mark appears, the tone tests begin. You may let the picture go now and focus on the tones."),Nt(o,"No","Yes"),T(t,"?"),!await e.wait(ge))return;const d=2;for(let s=0;s<i.length;s++){const l=i[s],u=l.isTarget?"right":"left",h=s===d?u==="right"?"left":"right":u;if(e.setCaption(`Tone test ${s+1} of 3: was this tone one of the ones you just heard?`),!await e.wait($)||(de(l.cell).catch(()=>{}),!await R(o,h,e)))return;const m=h===u;if(T(t,"?",{color:m?I:N}),!await e.wait(A)||(e.setCaption(D({pressedLabel:C[h],correctLabel:C[u],isCorrect:m,stimulusName:"question mark"})),!await e.wait(q))||(M(o),T(t,"?"),!await e.wait(z)))return}T(t,"")}const Yo=3;async function Ho(t,e){if(t.state.cancelled)return!1;const n=document.getElementById("demo-buttons-row");if(!n)return!1;n.innerHTML=`
    <div class="demo-buttons-container" style="
      position: relative;
      display: inline-flex;
      align-items: center;
      gap: 1.25rem;
      padding: 0.5rem 0.5rem 1rem;
    ">
      <button type="button" class="demo-btn demo-replay-btn" data-side="right" style="cursor: pointer;">
        <span class="demo-btn-label">Yes, watch again</span>
      </button>
    </div>
  `;const o=e===1?" (this is the last replay you can request)":` (you can watch up to ${e} more time${e===1?"":"s"})`;return await t.awaitNarration()?(t.setCaption(`Would you like to watch the demonstration again?${o} Press <strong>Yes</strong> (or click the button below) to watch it again. When you are ready to start the practice, press the <kbd>Space</kbd> key.`),new Promise(r=>{let a=!1;const i=l=>{if(a)return;a=!0,document.removeEventListener("keydown",c,!0),n.querySelectorAll(".demo-replay-btn").forEach(h=>h.removeEventListener("click",d)),r(l)},c=l=>{if(t.state.cancelled)return i(!1);l.key==="ArrowRight"&&(l.preventDefault(),i(!0))},d=l=>{const u=l.currentTarget.getAttribute("data-side");i(u==="right")};document.addEventListener("keydown",c,!0),n.querySelectorAll(".demo-replay-btn").forEach(l=>l.addEventListener("click",d));const s=setInterval(()=>{t.state.cancelled&&(clearInterval(s),i(!1)),a&&clearInterval(s)},100)})):!1}function ie(t){return async function(n,o){let r=0;for(;!o.state.cancelled;){try{await t(n,o)}catch(c){console.error("[demo] mini-trial error",c);return}if(o.state.cancelled)return;const a=Yo-r;if(a<=0){if(!await o.awaitNarration())return;o.setCaption("That was the last demonstration. Press Space when you are ready to start the practice."),ke();return}if(!await Ho(o,a)){o.setCaption("Press Space when you are ready to start the practice."),ke();return}r+=1;try{dn(n),ke(),T(n,""),n.rotor.style.transition="",it(n,0),Oe(n)}catch{}if(o.setCaption("Replaying the demonstration…"),!await o.wait(So))return}}}const Fo=ie(zo),Wo=ie(Ro),Go=ie(Mo),Uo=ie(Do),Vo=ie(Bo);function se({phase:t,taskNumber:e,title:n,run:o,factory:r}){const a={type:S,stimulus:qo(e,n),choices:[" "],response_ends_trial:!0,on_load:()=>{const i=document.getElementById("demo-mount");if(!i)return;const c=un({rotation_deg:0,fixation:""});i.appendChild(c.wrapper);const d=Ao(),s=window.jsPsych?.getCurrentTrial?.();s&&typeof s=="object"&&(s._demo_state=d.state),o(c,d).catch(l=>{console.error(`[demo:${t}] schedule error`,l)})},on_finish:()=>{const i=window.jsPsych?.getCurrentTrial?.();i?._demo_state&&(i._demo_state.cancelled=!0)},data:{phase:t}};return B(t,r),Y(a)}function Ct(){return se({phase:"demo_d_only",taskNumber:1,title:"Remember the dots",run:Fo,factory:Ct})}function Lt(){return se({phase:"demo_t_only",taskNumber:2,title:"Remember the tones",run:Wo,factory:Lt})}function qt(){return se({phase:"demo_i_only",taskNumber:3,title:"Picture the pattern",run:Go,factory:qt})}function At(){return se({phase:"demo_i_d",taskNumber:4,title:"Dots and pattern together",run:Uo,factory:At})}function $t(){return se({phase:"demo_i_t",taskNumber:5,title:"Tones and pattern together",run:Vo,factory:$t})}const Te=Object.freeze([Object.freeze({id:"ac1_direct_instruction",prompt:"To show you are reading carefully, please type the word <strong>paper</strong> into the box below (lowercase, no punctuation).",expected_answer:"paper"}),Object.freeze({id:"ac2_third_word",prompt:"In the sentence “Click the third word in this sentence”, what is the third word? Type just that word into the box below.",expected_answer:"third"}),Object.freeze({id:"ac3_arrow_mapping",prompt:"When a star points right, you press the right-arrow key. To show you understood, type the word <strong>right</strong> into the box below.",expected_answer:"right"})]);function Je(t){return typeof t!="string"?"":t.trim().toLowerCase()}function ue(t){if(!t?.id||!t?.prompt||!t?.expected_answer)throw new Error(`typedAttentionCheckNode: item must have {id, prompt, expected_answer}, got ${JSON.stringify(t)}`);const e=`attention_check_${t.id}`,n={type:V,preamble:"<h2>Quick check</h2>",html:`
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
    `,button_label:"Continue",on_finish:o=>{const r=o.response?.response??"",a=Je(r);o.attention_check_id=t.id,o.attention_check_raw=r,o.attention_check_passed=a===Je(t.expected_answer)},data:{phase:"attention_check"}};return _(e,()=>ue(t)),g(n,e)}function Ko(t,e=f.attention_checks.instruction_max_failures){const n=(t??[]).filter(a=>a?.phase==="attention_check"),o=n.filter(a=>a.attention_check_passed===!0).length,r=n.filter(a=>a.attention_check_passed===!1).length;return{total:n.length,passed:o,failed:r,exceededThreshold:r>e,threshold:e,ids:n.map(a=>a.attention_check_id)}}function zt(){const t="attention_check_summary",e={type:V,preamble:"<h2>Thanks — moving on.</h2>",html:`
      <div style="max-width: 36rem; margin: 0 auto;">
        <p>Press <strong>Continue</strong> to proceed to the main task.</p>
      </div>
    `,button_label:"Continue",on_finish:n=>{const o=window.jsPsych?.data?.get().values()??[],r=Ko(o);n.phase="attention_check_summary",n.attention_total=r.total,n.attention_passed=r.passed,n.attention_failed=r.failed,n.attention_excluded=r.exceededThreshold,n.attention_threshold=r.threshold}};return _(t,zt),g(e,t)}const Xe=Object.freeze(["d_only","t_only","i_only","i_d","i_t"]);function Qe(t){let e=0,n=0;for(const o of t)typeof o.probe_correct=="boolean"&&(n+=1,o.probe_correct&&(e+=1)),typeof o.star_correct=="boolean"&&(n+=1,o.star_correct&&(e+=1));return{correct:e,total:n,accuracy:n>0?e/n:0}}function Q({trialType:t,trialsPerType:e,sequencePoolLabelPrefix:n,prng:o}={}){if(!Xe.includes(t))throw new Error(`singleTypePractice: unknown trialType '${t}'; expected one of ${Xe.join(", ")}`);const r=e??f.blocks.practice_trials_per_type,a=o??Ie(),i=nn({blockLabel:"practice",countsByType:{[t]:r},sequencePoolLabelPrefix:n??"practice",runLengthCap:Math.max(1,r),prng:a});return{schedule:i.schedule,trialParams:i.trialParams,nodes:i.nodes}}function Jo({acc:t,passed:e,willRetry:n,criterion:o}){return Xo({acc:t,passed:e,willRetry:n,criterion:o})}function Xo({acc:t,passed:e,willRetry:n,criterion:o}){const r=Math.round(t.accuracy*100),a=Math.round(o*100),i=e?'<h2 style="color:#34d399;">Practice complete</h2>':'<h2 style="color:#f87171;">Practice — keep going</h2>',c=e?`<p>You got <strong>${t.correct} / ${t.total}</strong> correct
       (${r}%), above the ${a}% criterion. Press <kbd>Space</kbd> to
       start the main task.</p>`:n?`<p>You got <strong>${t.correct} / ${t.total}</strong> correct
         (${r}%), below the ${a}% criterion. Let's try the practice
         once more. Press <kbd>Space</kbd> to begin.</p>`:`<p>You got <strong>${t.correct} / ${t.total}</strong> correct
         (${r}%). Press <kbd>Space</kbd> to start the main task.</p>`;return`
    <div style="display: grid; place-items: center; gap: 1rem; max-width: 36rem; margin: 0 auto;">
      ${i}
      ${c}
    </div>
  `}function Rt(){const t=f.blocks.practice_trials_per_type,e=t*5,n=Math.round(f.practice.accuracy_criterion*100),o={type:S,stimulus:`
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
    `,choices:[" "],data:{phase:"instructions_overview"}};return B(o.data.phase,Rt),Y(o)}function Qo({trialsPerType:t,accuracyCriterion:e,maxLoops:n,prng:o}={}){if(Te.length!==3)throw new Error(`assembleInstructionsAndPractice: expected exactly 3 attention-check items, got ${Te.length}`);const[r,a,i]=Te,c=t??f.blocks.practice_trials_per_type,d=e??f.practice.accuracy_criterion,s=n??f.practice.max_loops,l=o??Ie(),u=Q({trialType:"d_only",trialsPerType:c,prng:l}),h=Q({trialType:"t_only",trialsPerType:c,prng:l}),m=Q({trialType:"i_only",trialsPerType:c,prng:l}),v=Q({trialType:"i_d",trialsPerType:c,prng:l}),b=Q({trialType:"i_t",trialsPerType:c,prng:l});let k=0,O=0,E=null;const H={type:S,stimulus:"",choices:"NO_KEYS",trial_duration:0,on_start:()=>{k+=1,O=window.jsPsych?.data?.get().count()??0},data:()=>({phase:"practice_iteration_start",practice_iteration:k})};function w(){const le="practice_feedback",ze={type:S,stimulus:()=>{const Gt=(window.jsPsych?.data?.get().values()??[]).slice(O),J=Qe(Gt),ve=J.accuracy>=d,Re=!ve&&k<=s;return E={accuracy:J.accuracy,correct:J.correct,total:J.total,passed:ve,willRetry:Re,attemptCount:k},Jo({acc:J,passed:ve,willRetry:Re,criterion:d})},choices:[" "],data:()=>({phase:"practice_feedback",practice_iteration:k,iteration_accuracy:E?.accuracy??null,iteration_correct:E?.correct??null,iteration_total:E?.total??null,iteration_passed:E?.passed??null})};return _(le,w),g(ze,le)}const F=w(),W={timeline:[H,kt(),Ct(),...u.nodes,Tt(),Lt(),...h.nodes,ue(r),xt(),qt(),...m.nodes,ue(a),St(),At(),...v.nodes,It(),$t(),...b.nodes,ue(i),F],loop_function:function(le){return!(wn()||Qe(le.values()).accuracy>=d||k>s)}};return[Rt(),W,zt()]}const Zo=Object.freeze([Object.freeze({value:1,label:'No image at all; you only "know" that you are thinking of the object'}),Object.freeze({value:2,label:"Vague and dim"}),Object.freeze({value:3,label:"Moderately clear and vivid"}),Object.freeze({value:4,label:"Clear and reasonably vivid"}),Object.freeze({value:5,label:"Perfectly clear and as vivid as normal vision"})]),me=Object.freeze([Object.freeze({id:"vviq_v1_relative",preamble:"Think of some relative or friend whom you frequently see (but who is not with you at present) and consider carefully the picture that comes before your mind’s eye.",items:Object.freeze([Object.freeze({id:"vviq_q01",text:"The exact contour of face, head, shoulders and body."}),Object.freeze({id:"vviq_q02",text:"Characteristic poses of head, attitudes of body, etc."}),Object.freeze({id:"vviq_q03",text:"The precise carriage, length of step, etc. in walking."}),Object.freeze({id:"vviq_q04",text:"The different colours worn in some familiar clothes."})])}),Object.freeze({id:"vviq_v2_sunrise",preamble:"Think of the rising sun. Consider carefully the picture that comes before your mind’s eye.",items:Object.freeze([Object.freeze({id:"vviq_q05",text:"The sun is rising above the horizon into a hazy sky."}),Object.freeze({id:"vviq_q06",text:"The sky clears and surrounds the sun with blueness."}),Object.freeze({id:"vviq_q07",text:"Clouds. A storm blows up, with flashes of lightning."}),Object.freeze({id:"vviq_q08",text:"A rainbow appears."})])}),Object.freeze({id:"vviq_v3_shop",preamble:"Think of the front of a shop which you often go to. Consider the picture that comes before your mind’s eye.",items:Object.freeze([Object.freeze({id:"vviq_q09",text:"The overall appearance of the shop from the opposite side of the road."}),Object.freeze({id:"vviq_q10",text:"A window display including colours, shape and details of individual items for sale."}),Object.freeze({id:"vviq_q11",text:"You are near the entrance. The colour, shape and details of the door."}),Object.freeze({id:"vviq_q12",text:"You enter the shop and go to the counter. The counter assistant serves you. Money changes hands."})])}),Object.freeze({id:"vviq_v4_country",preamble:"Think of a country scene which involves trees, mountains and a lake. Consider the picture that comes before your mind’s eye.",items:Object.freeze([Object.freeze({id:"vviq_q13",text:"The contours of the landscape."}),Object.freeze({id:"vviq_q14",text:"The colour and shape of the trees."}),Object.freeze({id:"vviq_q15",text:"The colour and shape of the lake."}),Object.freeze({id:"vviq_q16",text:"A strong wind blows on the tree and on the lake causing waves."})])}),Object.freeze({id:"vviq_v5_highway",preamble:"Think of being driven in a fast-moving car by a relative or friend along a major highway. Consider the picture that comes into your mind’s eye.",items:Object.freeze([Object.freeze({id:"vviq_q17",text:"You observe the heavy traffic travelling at maximum speed around your car. The overall appearance of vehicles, their colours, sizes and shapes."}),Object.freeze({id:"vviq_q18",text:"Your car accelerates to overtake the traffic directly in front of you. You see an urgent expression on the face of the driver and the people in the other vehicles as you pass."}),Object.freeze({id:"vviq_q19",text:"A large truck is flashing its headlight directly behind. Your car quickly moves over to let the truck pass. The driver signals with a friendly wave."}),Object.freeze({id:"vviq_q20",text:"You see a broken-down vehicle beside the road. Its lights are flashing. The driver is looking concerned and she is using a mobile phone."})])}),Object.freeze({id:"vviq_v6_beach",preamble:"Think of the beach by the ocean on a warm summer’s day. Consider the picture that comes before your mind’s eye.",items:Object.freeze([Object.freeze({id:"vviq_q21",text:"The overall appearance and colour of the water, surf, and sky."}),Object.freeze({id:"vviq_q22",text:"Bathers are swimming and splashing about in the water. Some are playing with a brightly coloured beach ball."}),Object.freeze({id:"vviq_q23",text:"An ocean liner crosses the horizon. It leaves a trail of smoke in the blue sky."}),Object.freeze({id:"vviq_q24",text:"A beautiful air balloon appears with four people aboard. The balloon drifts past you, almost directly overhead. The passengers wave and smile. You wave and smile back at them."})])}),Object.freeze({id:"vviq_v7_railway",preamble:"Think of a railway station. Consider the picture that comes before your mind’s eye.",items:Object.freeze([Object.freeze({id:"vviq_q25",text:"The overall appearance of the station viewed from in front of the main entrance."}),Object.freeze({id:"vviq_q26",text:"You walk into the station. The colour, shape and details of the entrance hall."}),Object.freeze({id:"vviq_q27",text:"You approach the ticket office, go to a vacant counter and purchase your ticket."}),Object.freeze({id:"vviq_q28",text:"You walk to the platform and observe other passengers and the railway lines. A train arrives. You climb aboard."})])}),Object.freeze({id:"vviq_v8_garden",preamble:"Finally, think of a garden with lawns, bushes, flowers and shrubs. Consider the picture that comes before your mind’s eye.",items:Object.freeze([Object.freeze({id:"vviq_q29",text:"The overall appearance and design of the garden."}),Object.freeze({id:"vviq_q30",text:"The colour and shape of the bushes and shrubs."}),Object.freeze({id:"vviq_q31",text:"The colour and appearance of the flowers."}),Object.freeze({id:"vviq_q32",text:"Some birds fly down onto the lawn and start pecking for food."})])})]),Ze=me.reduce((t,e)=>t+e.items.length,0);if(Ze!==32)throw new Error(`VVIQ_VIGNETTES must contain exactly 32 items, got ${Ze}`);function Mt(t){const e=t.items.map(a=>{const i=Zo.map(c=>`<option value="${c.value}">${c.value} — ${c.label}</option>`).join("");return`
        <tr>
          <td style="padding: 0.5rem 0.75rem 0.5rem 0; vertical-align: top;">${a.text}</td>
          <td style="padding: 0.5rem 0; vertical-align: top;">
            <select name="${a.id}" required>
              <option value="">—</option>
              ${i}
            </select>
          </td>
        </tr>`}).join(""),n=me.findIndex(a=>a.id===t.id)+1,o=t.id,r={type:V,preamble:`
      <h2>Imagery questionnaire (part ${n} of ${me.length})</h2>
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
    `,button_label:"Continue",on_finish:a=>{a.phase="vviq",a.vviq_vignette_id=t.id,a.vviq_responses=t.items.reduce((i,c)=>{const d=a.response?.[c.id];return i[c.id]=d===""||d===null||d===void 0?null:Number(d),i},{})}};return _(o,()=>Mt(t)),g(r,o)}function er(){return me.map(Mt)}const U=Object.freeze([Object.freeze({id:"me_q01",gold_msi:"MT01",text:"I engaged in regular, daily practice of a musical instrument (including voice) for ___ years.",options:Object.freeze([Object.freeze({value:"0",label:"0",score:1}),Object.freeze({value:"1",label:"1",score:2}),Object.freeze({value:"2",label:"2",score:3}),Object.freeze({value:"3",label:"3",score:4}),Object.freeze({value:"4-5",label:"4–5",score:5}),Object.freeze({value:"6-9",label:"6–9",score:6}),Object.freeze({value:"10+",label:"10 or more",score:7})])}),Object.freeze({id:"me_q02",gold_msi:"MT02",text:"At the peak of my interest, I practised my primary instrument for ___ hours per day.",options:Object.freeze([Object.freeze({value:"0",label:"0",score:1}),Object.freeze({value:"0.5",label:"0.5",score:2}),Object.freeze({value:"1",label:"1",score:3}),Object.freeze({value:"1.5",label:"1.5",score:4}),Object.freeze({value:"2",label:"2",score:5}),Object.freeze({value:"3-4",label:"3–4",score:6}),Object.freeze({value:"5+",label:"5 or more",score:7})])}),Object.freeze({id:"me_q03",gold_msi:"MT03",text:"I have had formal training in music theory for ___ years.",options:Object.freeze([Object.freeze({value:"0",label:"0",score:1}),Object.freeze({value:"0.5",label:"0.5",score:2}),Object.freeze({value:"1",label:"1",score:3}),Object.freeze({value:"2",label:"2",score:4}),Object.freeze({value:"3",label:"3",score:5}),Object.freeze({value:"4-6",label:"4–6",score:6}),Object.freeze({value:"7+",label:"7 or more",score:7})])}),Object.freeze({id:"me_q04",gold_msi:"MT04",text:"I have had ___ years of formal training on a musical instrument (including voice) during my lifetime — count school music classes <strong>and</strong> private lessons / conservatory together.",options:Object.freeze([Object.freeze({value:"0",label:"0",score:1}),Object.freeze({value:"0.5",label:"0.5",score:2}),Object.freeze({value:"1",label:"1",score:3}),Object.freeze({value:"2",label:"2",score:4}),Object.freeze({value:"3-5",label:"3–5",score:5}),Object.freeze({value:"6-9",label:"6–9",score:6}),Object.freeze({value:"10+",label:"10 or more",score:7})])}),Object.freeze({id:"me_q05",gold_msi:"MT05",text:"I can play ___ musical instruments.",options:Object.freeze([Object.freeze({value:"0",label:"0",score:1}),Object.freeze({value:"1",label:"1",score:2}),Object.freeze({value:"2",label:"2",score:3}),Object.freeze({value:"3",label:"3",score:4}),Object.freeze({value:"4",label:"4",score:5}),Object.freeze({value:"5",label:"5",score:6}),Object.freeze({value:"6+",label:"6 or more",score:7})])}),Object.freeze({id:"me_q06",gold_msi:"MT06",text:"I would consider myself a musician.",options:Object.freeze([Object.freeze({value:"1",label:"1 — Completely disagree",score:1}),Object.freeze({value:"2",label:"2",score:2}),Object.freeze({value:"3",label:"3",score:3}),Object.freeze({value:"4",label:"4 — Neither agree nor disagree",score:4}),Object.freeze({value:"5",label:"5",score:5}),Object.freeze({value:"6",label:"6",score:6}),Object.freeze({value:"7",label:"7 — Completely agree",score:7})])}),Object.freeze({id:"me_q07",gold_msi:"MT07",text:"The musical instrument I play best (including voice), I play at the level of a:",options:Object.freeze([Object.freeze({value:"none",label:"I do not play any instrument",score:1}),Object.freeze({value:"beginner",label:"Beginner",score:2.5}),Object.freeze({value:"intermediate",label:"Intermediate",score:4}),Object.freeze({value:"advanced",label:"Advanced",score:5.5}),Object.freeze({value:"expert",label:"Expert / professional",score:7})])}),Object.freeze({id:"me_q08",gold_msi:null,text:'Can you name a musical note (e.g., "C", "F♯") just from hearing it played, without comparing it to any reference note? (This is sometimes called "absolute pitch" or "perfect pitch".)',options:Object.freeze([Object.freeze({value:"no",label:"No",score:null}),Object.freeze({value:"unsure",label:"I am not sure / sometimes",score:null}),Object.freeze({value:"yes",label:"Yes — reliably",score:null})])})]);if(U.length!==8)throw new Error(`MUSIC_EXPERIENCE_ITEMS must contain exactly 8 items, got ${U.length}`);(()=>{const t={};for(const e of U){t[e.id]={};for(const n of e.options)t[e.id][n.value]=n.score}return Object.freeze(t)})();Object.freeze(U.filter(t=>t.gold_msi!==null).map(t=>t.id));function Dt(){const t="music_experience_intro",e={type:V,preamble:`
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
    `,html:'<div style="text-align: center; padding: 1rem 0;"><em>Click Continue to begin.</em></div>',button_label:"Continue",on_finish:n=>{n.phase="music_experience_intro"}};return _(t,Dt),g(e,t)}function Bt(){const t=U.map(o=>{const r=o.options.map(a=>`<option value="${a.value}">${a.label}</option>`).join("");return`
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
    `,button_label:"Continue",on_finish:o=>{o.phase="music_experience",o.music_experience_responses=U.reduce((r,a)=>{const i=o.response?.[a.id];return r[a.id]=i===""||i===null||i===void 0?null:String(i),r},{})}};return _(e,Bt),g(n,e)}function tr(){return[Dt(),Bt()]}function Yt(){const t="questionnaire_intro",e={type:S,stimulus:`
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
    `,choices:[" "],data:{phase:"questionnaire_intro"}};return _(t,Yt),g(e,t)}function nr(){return[Yt(),...er(),...tr()]}function Ht(){const t="main_a_intro",e={type:S,stimulus:`
      <div style="max-width: 36rem; margin: 0 auto;">
        <h2>Main task — Block 1 of 2</h2>
        <div data-voiceover-target>
          <p>Now the main task begins. There are two blocks of 60 trials. Each
          block includes a ${f.blocks.rest_duration_s}-second rest after
          trials 20 and 40, and there is another
          ${f.blocks.rest_duration_s}-second rest between the two blocks.</p>
          <p>Same controls as the practice: <strong>Yes</strong> /
          <strong>On-pattern</strong> on one response key,
          <strong>No</strong> / <strong>Not on-pattern</strong> on the
          other.</p>
          <p>Press <kbd>Space</kbd> to begin Block 1.</p>
        </div>
      </div>
    `,choices:[" "],data:{phase:"main_a_intro"}};return _(t,Ht),g(e,t)}function Ft(){const t="main_b_intro",e={type:S,stimulus:`
      <div style="max-width: 36rem; margin: 0 auto;">
        <h2>Main task — Block 2 of 2</h2>
        <div data-voiceover-target>
          <p>Last block. 60 more trials, same controls, with
          ${f.blocks.rest_duration_s}-second rests after trials 20
          and 40.</p>
          <p>Press <kbd>Space</kbd> to begin Block 2.</p>
        </div>
      </div>
    `,choices:[" "],data:{phase:"main_b_intro"}};return _(t,Ft),g(e,t)}function Wt(){const t="end_of_task_intro",e={type:S,stimulus:`
      <div style="max-width: 36rem; margin: 0 auto;">
        <h2>You've finished the task</h2>
        <div data-voiceover-target>
          <p>Thank you for completing the experiment. We'll save your data now —
          this usually takes a few seconds.</p>
          <p>Press <kbd>Space</kbd> to continue.</p>
        </div>
      </div>
    `,choices:[" "],data:{phase:"end_of_task_intro"},on_load:()=>{on()}};return _(t,Wt),g(e,t)}const x=Ut(),or=Vt();function rr(){if(at(),typeof Image<"u"){const t=new Image;t.src="./assets/rotation-arrow.png"}}rr();const we=Kt({display_element:void 0,on_trial_start:xn(),on_data_update:t=>{tt(t).catch(e=>{console.error("[runner] storage append failed",e),nt(e)})},on_finish:()=>{const t=we.data?.get?.();t&&typeof t.addProperties=="function"&&t.addProperties({session_id:x.params.session_id,prolific_pid:x.params.prolific_pid,study_id:x.params.study_id,is_preview:x.params.is_preview,is_pilot_run:x.is_pilot_run,pilot_label:x.pilot_label,prng_seed_uint32:x.prng_seed_uint32,schema_version:x.schema_version,build_id:x.build_id}),console.info("[runner] session",x,"visibility",co())}});window.jsPsych=we;On(we);rn();const et=an(),ar=[...wo(),...Qo(),Ht(),...et.mainA.nodes,sn(),Ft(),...et.mainB.nodes,Wt(),...nr(),ln({session:x}),cn()];or.then(()=>we.run(ar)).catch(t=>{console.error("[runner] fatal startup failure",t);const e=document.body;e.innerHTML=`
      <div style="max-width: 36rem; margin: 4rem auto; padding: 2rem; text-align: center;">
        <h2>Unable to start the experiment</h2>
        <p>Your browser is blocking the local storage this study needs. Please
        try a different browser (Chrome, Firefox, or Safari) on a desktop or
        laptop computer, with private/incognito mode disabled.</p>
        <p><small>Error reference: <code>${t&&t.message||"unknown"}</code></small></p>
      </div>
    `});
//# sourceMappingURL=main-CEDyds9G.js.map
