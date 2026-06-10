import"./modulepreload-polyfill-B5Qt9EMX.js";import{P as p,H as N,g as Ne,i as un,a as hn}from"./index-7I2jrT1Q.js";import{s as te,a as ut,u as pn,g as $e,b as We,c as mn,d as ht,p as fn,F as Ce,e as Re,f as Ue,h as gn,i as yn,j as $,k as C,l as me,m as bn,n as pt,o as wn,q as _n,r as vn}from"./main-blocks-CLB9s8xD.js";import{a as mt,r as ft,i as kn}from"./uploader-DqcxzQhC.js";import{c as y}from"./config-DSJqK44t.js";import{c as L,u as Tn,a as xn}from"./debrief-8wlWwkYi.js";import{c as En,a as In,s as I,b as gt,h as Ee,d as fe,r as P,e as De,f as ze,g as Me,i as Sn,j as Ke,o as On,k as Pn}from"./pattern-qtbzjQQ8.js";var jn="2.1.0";const Ln={name:"html-button-response",version:jn,parameters:{stimulus:{type:p.HTML_STRING,default:void 0},choices:{type:p.STRING,default:void 0,array:!0},button_html:{type:p.FUNCTION,default:function(t,e){return`<button class="jspsych-btn">${t}</button>`}},prompt:{type:p.HTML_STRING,default:null},stimulus_duration:{type:p.INT,default:null},trial_duration:{type:p.INT,default:null},button_layout:{type:p.STRING,default:"grid"},grid_rows:{type:p.INT,default:1},grid_columns:{type:p.INT,default:null},response_ends_trial:{type:p.BOOL,default:!0},enable_button_after:{type:p.INT,default:0}},data:{rt:{type:p.INT},response:{type:p.INT},stimulus:{type:p.HTML_STRING}},citations:{apa:"de Leeuw, J. R., Gilbert, R. A., & Luchterhandt, B. (2023). jsPsych: Enabling an Open-Source Collaborative Ecosystem of Behavioral Experiments. Journal of Open Source Software, 8(85), 5351. https://doi.org/10.21105/joss.05351 ",bibtex:'@article{Leeuw2023jsPsych, 	author = {de Leeuw, Joshua R. and Gilbert, Rebecca A. and Luchterhandt, Bj{\\" o}rn}, 	journal = {Journal of Open Source Software}, 	doi = {10.21105/joss.05351}, 	issn = {2475-9066}, 	number = {85}, 	year = {2023}, 	month = {may 11}, 	pages = {5351}, 	publisher = {Open Journals}, 	title = {jsPsych: Enabling an {Open}-{Source} {Collaborative} {Ecosystem} of {Behavioral} {Experiments}}, 	url = {https://joss.theoj.org/papers/10.21105/joss.05351}, 	volume = {8}, }  '}};class O{constructor(e){this.jsPsych=e}static{this.info=Ln}trial(e,n){const o=document.createElement("div");o.id="jspsych-html-button-response-stimulus",o.innerHTML=n.stimulus,e.appendChild(o);const r=document.createElement("div");if(r.id="jspsych-html-button-response-btngroup",n.button_layout==="grid"){if(r.classList.add("jspsych-btn-group-grid"),n.grid_rows===null&&n.grid_columns===null)throw new Error("You cannot set `grid_rows` to `null` without providing a value for `grid_columns`.");const c=n.grid_columns===null?Math.ceil(n.choices.length/n.grid_rows):n.grid_columns,h=n.grid_rows===null?Math.ceil(n.choices.length/n.grid_columns):n.grid_rows;r.style.gridTemplateColumns=`repeat(${c}, 1fr)`,r.style.gridTemplateRows=`repeat(${h}, 1fr)`}else n.button_layout==="flex"&&r.classList.add("jspsych-btn-group-flex");for(const[c,h]of n.choices.entries()){r.insertAdjacentHTML("beforeend",n.button_html(h,c));const m=r.lastChild;m.dataset.choice=c.toString(),m.addEventListener("click",()=>{u(c)})}e.appendChild(r),n.prompt!==null&&e.insertAdjacentHTML("beforeend",n.prompt);var a=performance.now(),i={rt:null,button:null};const l=()=>{var c={rt:i.rt,stimulus:n.stimulus,response:i.button};this.jsPsych.finishTrial(c)};function u(c){var h=performance.now(),m=Math.round(h-a);i.button=parseInt(c),i.rt=m,o.classList.add("responded");for(const _ of r.children)_.setAttribute("disabled","disabled");n.response_ends_trial&&l()}if(n.stimulus_duration!==null&&this.jsPsych.pluginAPI.setTimeout(()=>{o.style.visibility="hidden"},n.stimulus_duration),n.enable_button_after>0){for(var s=document.querySelectorAll("#jspsych-html-button-response-btngroup button"),d=0;d<s.length;d++)s[d].setAttribute("disabled","disabled");this.jsPsych.pluginAPI.setTimeout(()=>{for(var c=document.querySelectorAll("#jspsych-html-button-response-btngroup button"),h=0;h<c.length;h++)c[h].removeAttribute("disabled")},n.enable_button_after)}n.trial_duration!==null&&this.jsPsych.pluginAPI.setTimeout(l,n.trial_duration)}simulate(e,n,o,r){n=="data-only"&&(r(),this.simulate_data_only(e,o)),n=="visual"&&this.simulate_visual(e,o,r)}create_simulation_data(e,n){const o={stimulus:e.stimulus,rt:this.jsPsych.randomization.sampleExGaussian(500,50,.006666666666666667,!0)+e.enable_button_after,response:this.jsPsych.randomization.randomInt(0,e.choices.length-1)},r=this.jsPsych.pluginAPI.mergeSimulationData(o,n);return this.jsPsych.pluginAPI.ensureSimulationDataConsistency(e,r),r}simulate_data_only(e,n){const o=this.create_simulation_data(e,n);this.jsPsych.finishTrial(o)}simulate_visual(e,n,o){const r=this.create_simulation_data(e,n),a=this.jsPsych.getDisplayElement();this.trial(a,e),o(),r.rt!==null&&this.jsPsych.pluginAPI.clickTarget(a.querySelector(`#jspsych-html-button-response-btngroup [data-choice="${r.response}"]`),r.rt)}}let Ve=!1,z=[];const Ie=new Map;let ne=!1,Se=!1;function An(t){!t||typeof t!="string"||z[z.length-1]!==t&&(z.push(t),z.length>32&&z.shift())}function yt(t){const e=typeof t?.data=="function"?null:t?.data??null;return typeof e?.phase=="string"?e.phase:null}function Nn(t,e){return t&&typeof t=="object"&&typeof t!="function"?{...t,hidden_nav_step:e}:(...n)=>({...typeof t=="function"?t(...n):{},hidden_nav_step:e})}function v(t,e){!t||typeof t!="string"||typeof e!="function"||Ie.set(t,e)}function b(t,e=yt(t)){if(!e||typeof e!="string")return t;const n=t?.on_load;return t.data=Nn(t?.data,e),t._hidden_nav_checkpoint=!0,t.on_load=(...o)=>{An(e),n?.(...o)},t}function W(t,e){v(t,e)}function U(t){return b(t,yt(t))}function $n(){const t=Se;return Se=!1,t}function Cn(t){const e=t?.timeline?.getLatestNode?.();return e&&typeof e.getDataParameter=="function"?e:null}function Rn(t){try{const e=Cn(t);if(!e)return null;const n=e.getDataParameter?.()??{},o=typeof n.hidden_nav_step=="string"?n.hidden_nav_step:null;return{node:e,stepId:o,phase:typeof n.phase=="string"?n.phase:null}}catch{return null}}function Dn(t){const e=t?.description?.type?.info?.name??null;return e==="html-button-response"?{response:0}:e==="survey-html-form"?{response:{}}:{}}function zn(t){const e=z.slice();if(t)for(;e[e.length-1]===t;)e.pop();return{trimmedHistory:e,prevStepId:e[e.length-1]??null}}function Je(t,e){const n=t?.parent?.description?.timeline;if(!Array.isArray(n))return!1;const o=n.indexOf(t.description);return o<0?!1:(n.splice(o+1,0,...e),!0)}function Mn(){return function(e){if(e?._hidden_nav_checkpoint===!0){ne&&(ne=!1),te(!1);return}if(!ne){te(!1);return}!e||typeof e!="object"||(e.trial_duration=0,e.choices="NO_KEYS")}}function qn(t){if(Ve||typeof document>"u")return;const e=n=>{const o=n.target&&n.target.tagName||"";if(o==="INPUT"||o==="TEXTAREA"||n.target?.isContentEditable||n.metaKey||n.ctrlKey||n.altKey)return;const r=n.key?.toLowerCase?.();if(r!=="u"&&r!=="r")return;const a=Rn(t);if(!a)return;n.preventDefault(),n.stopPropagation(),ut();const i=Dn(a.node),l=!!a.stepId;if(r==="u"){Se=!0,l||(ne=!0),te(!0),t.finishTrial({...i,phase:a.phase,hidden_nav:"forward",hidden_nav_step:a.stepId??null});return}const{trimmedHistory:u,prevStepId:s}=zn(a.stepId),d=s?Ie.get(s):null;if(!d)return;let c=!1;if(l){const h=Ie.get(a.stepId);if(!h)return;c=Je(a.node,[d(),h()])}else c=Je(a.node,[d()]);c&&(z=u,ne=!1,l?te(!1):te(!0),t.finishTrial({...i,phase:a.phase,hidden_nav:"back",hidden_nav_step:a.stepId??null,hidden_nav_target_step:s}))};document.addEventListener("keydown",e,!0),Ve=!0}const Bn="online-2101803-v1",Yn=`
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
        <li>This is an anonymous survey. Your responses are stored and analyzed using only your Prolific Participant ID, a randomly assigned alphanumeric code issued by Prolific. We do not collect your name, email address, IP address, or any other directly identifying information. No one, including the researchers, will be able to link your responses to your identity.</li>
        <li>Although we ask demographic information such as age, sex, handedness, education, language background, hearing, and vision, this information is collected for research purposes and also serves as a screening questionnaire for the application of pre-registered inclusion and exclusion criteria. If you do not meet the eligibility requirements, your participation will end and you will not proceed to the online study session. You may select &ldquo;Prefer Not to Say&rdquo; where available.</li>
        <li>You will be presented with visual information (e.g., simple shapes such as dots on a grid, geometric patterns, an asterisk star marker, and a question-mark probe) and auditory information (short pure tones). You will indicate your responses using a keyboard press. Please be aware that visual items can flash or appear and disappear quickly, and that auditory items are short pure tones that may be high or low in pitch.</li>
        <li>The study takes approximately 80&ndash;110 minutes to complete.</li>
        <li>You will be compensated at or above Prolific&rsquo;s recommended fair-pay rate, currently approximately $12.00 per hour, for a single session of approximately 80&ndash;110 minutes. The exact amount is indicated on the Prolific study listing. Payment is processed by the Prolific platform upon submission of your completion code; the University of Missouri does not collect or process any payment information. After responding to the survey, you will receive information about the payment you are eligible for based on your agreement with Prolific. If the compensation you received does not align with your expectations for this study, please contact the PI at hnth5@missouri.edu.</li>
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
        <li>Complete a single online study session of approximately 80&ndash;110 minutes in your web browser.</li>
        <li>Calibrate your screen size using a credit card so that the visual stimuli are rendered at a fixed physical size on your monitor.</li>
        <li>Set your audio volume so that a brief reference tone is comfortably audible.</li>
        <li>Silence or turn off any other devices that could distract you during the session, and complete the session in a quiet environment, free of interruptions, in order to minimize anything that could potentially affect your focus and attention on the task.</li>
        <li>Remember and compare visual information (dots on a grid; mental images of simple geometric patterns) and auditory information (short pure tones) that may consist of any of the following: brief sounds, pure tones, simple shapes, geometric patterns, or grid markers, and indicate your memory of the recently presented items by pressing a key.</li>
        <li>Complete a brief demographics questionnaire, which also serves as a screening questionnaire to verify eligibility. At the end of the session, you will complete a short strategy questionnaire (19 statements rated on a 5-point agreement scale) asking how you approached each part of the task &mdash; there are no right or wrong answers; we are interested in capturing your approach.</li>
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
        <li>Compensation for your participation is processed by the Prolific platform at or above Prolific&rsquo;s recommended fair-pay rate, currently approximately $12.00 per hour. The University of Missouri does not collect or process payment information. After responding to the survey, you will receive information about the payment you are eligible for based on your agreement with Prolific. If the compensation you received does not align with your expectations for this study, please contact the PI at hnth5@missouri.edu.</li>
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
`;function bt(){const t="consent";let e=!1;const n={type:O,stimulus:Yn,choices:["I consent — begin","I do not consent — exit"],button_html:(o,r)=>`<button class="jspsych-btn" data-idx="${r}"${r===0?" disabled":""}>${o}</button>`,on_load:()=>{e=!1;const o=document.getElementById("consent-checkbox"),r=document.querySelector('button.jspsych-btn[data-idx="0"]');!o||!r||o.addEventListener("change",()=>{e=o.checked,r.disabled=!o.checked})},on_finish:async o=>{o.consented=o.response===0,o.consent_acknowledged=e,o.consent_version=Bn,o.consented&&await pn()},data:{phase:"consent"}};return v(t,bt),b(n,t)}function Hn(){return{timeline:[{type:O,stimulus:`
          <h2>Thank you</h2>
          <p>You declined consent. You may close this tab now.</p>
          <p>Please return your submission on Prolific so that the study slot can be reassigned.</p>
        `,choices:["Close"],on_finish:()=>{typeof window<"u"&&window.jsPsych?.abortExperiment&&window.jsPsych.abortExperiment("Consent declined.")}}],conditional_function:()=>{const t=window.jsPsych?.data?.get().filter({phase:"consent"}).last(1).values()[0];return t?t.consented===!1:!1}}}var Fn="2.1.0";const Gn={name:"survey-html-form",version:Fn,parameters:{html:{type:p.HTML_STRING,default:null},preamble:{type:p.HTML_STRING,default:null},button_label:{type:p.STRING,default:"Continue"},autofocus:{type:p.STRING,default:""},dataAsArray:{type:p.BOOL,default:!1},autocomplete:{type:p.BOOL,default:!1}},data:{response:{type:p.OBJECT},rt:{type:p.INT}},citations:{apa:"de Leeuw, J. R., Gilbert, R. A., & Luchterhandt, B. (2023). jsPsych: Enabling an Open-Source Collaborative Ecosystem of Behavioral Experiments. Journal of Open Source Software, 8(85), 5351. https://doi.org/10.21105/joss.05351 ",bibtex:'@article{Leeuw2023jsPsych, 	author = {de Leeuw, Joshua R. and Gilbert, Rebecca A. and Luchterhandt, Bj{\\" o}rn}, 	journal = {Journal of Open Source Software}, 	doi = {10.21105/joss.05351}, 	issn = {2475-9066}, 	number = {85}, 	year = {2023}, 	month = {may 11}, 	pages = {5351}, 	publisher = {Open Journals}, 	title = {jsPsych: Enabling an {Open}-{Source} {Collaborative} {Ecosystem} of {Behavioral} {Experiments}}, 	url = {https://joss.theoj.org/papers/10.21105/joss.05351}, 	volume = {8}, }  '}};class X{constructor(e){this.jsPsych=e}static{this.info=Gn}trial(e,n){var o="";if(n.preamble!==null&&(o+='<div id="jspsych-survey-html-form-preamble" class="jspsych-survey-html-form-preamble">'+n.preamble+"</div>"),n.autocomplete?o+='<form id="jspsych-survey-html-form">':o+='<form id="jspsych-survey-html-form" autocomplete="off">',o+=n.html,o+='<input type="submit" id="jspsych-survey-html-form-next" class="jspsych-btn jspsych-survey-html-form" value="'+n.button_label+'"></input>',o+="</form>",e.innerHTML=o,n.autofocus!==""){var r=e.querySelectorAll("#"+n.autofocus);r.length===0?console.warn("No element found with id: "+n.autofocus):r.length>1?console.warn('The id "'+n.autofocus+'" is not unique so autofocus will not work.'):r[0].focus()}e.querySelector("#jspsych-survey-html-form").addEventListener("submit",u=>{u.preventDefault();var s=performance.now(),d=Math.round(s-a),c=e.querySelector("#jspsych-survey-html-form"),h=i(c);n.dataAsArray||(h=l(h));var m={rt:d,response:h};this.jsPsych.finishTrial(m)});var a=performance.now();function i(u){for(var s=[],d=0;d<u.elements.length;d++){var c=u.elements[d];if(!(!c.name||c.disabled||c.type==="file"||c.type==="reset"||c.type==="submit"||c.type==="button"))if(c.type==="select-multiple")for(var h=0;h<c.options.length;h++)c.options[h].selected&&s.push({name:c.name,value:c.options[h].value});else(c.type!=="checkbox"&&c.type!=="radio"||c.checked)&&s.push({name:c.name,value:c.value})}return s}function l(u){for(var s={},d=0;d<u.length;d++)s[u[d].name]=u[d].value;return s}}}const Wn=`
  <style>
    .demog-form {
      text-align: left; max-width: 34rem; margin: 0 auto;
      font-size: 0.95rem; line-height: 1.5;
    }
    .demog-section {
      border-top: 1px solid rgba(0,0,0,0.15);
      padding-top: 1rem; margin-top: 1.25rem;
    }
    .demog-section-title {
      font-size: 0.8rem; font-weight: 400; letter-spacing: 0.04em;
      text-transform: uppercase; color: rgba(0,0,0,0.5);
      margin: 0 0 0.75rem;
    }
    .demog-form .field {
      margin: 0 0 1.1rem;
    }
    .demog-form .field-label {
      display: block; margin-bottom: 0.3rem; font-weight: 400;
    }
    .demog-form .req {
      color: #b3261e; margin-left: 0.15rem; font-weight: 400;
    }
    .demog-form select, .demog-form textarea {
      display: block; width: 100%; box-sizing: border-box;
      padding: 0.45rem 0.6rem;
      border: 1px solid rgba(0,0,0,0.35); border-radius: 4px;
      background: rgba(255,255,255,0.55); color: inherit; font: inherit;
    }
    .demog-form select { max-width: 24rem; }
    .demog-form textarea {
      min-height: 2.8rem; resize: vertical; margin-top: 0.35rem;
      font-size: 0.9rem; color: rgba(0,0,0,0.7);
    }
    .demog-form .field-hint {
      display: block; font-size: 0.82rem; color: rgba(0,0,0,0.5);
      margin-top: 0.2rem; line-height: 1.35;
    }
  </style>
`;function wt(){const t="demographics",e={type:X,preamble:`
      <h2>Demographics</h2>
      <p style="max-width: 36rem; margin: 0.25rem auto 1rem; font-size: 0.95rem; color: rgba(0,0,0,0.65);">
        This information is requested for research purposes and to apply
        pre-registered inclusion / exclusion criteria. Items marked with
        <span style="color:#b3261e;">&bull;</span> are required.
      </p>
    `,html:`
      ${Wn}
      <div class="demog-form">

        <!-- ── General ── -->
        <div class="demog-section" style="border-top: none; margin-top: 0; padding-top: 0;">
          <p class="demog-section-title">General</p>

          <div class="field">
            <label class="field-label" for="d-handedness">Handedness<span class="req">&bull;</span></label>
            <select id="d-handedness" name="handedness" required>
              <option value="">— select —</option>
              <option value="right">Right</option>
              <option value="left">Left</option>
              <option value="ambidextrous">Ambidextrous</option>
              <option value="prefer_not">Prefer not to say</option>
            </select>
          </div>

          <div class="field">
            <label class="field-label" for="d-education">Highest level of education<span class="req">&bull;</span></label>
            <select id="d-education" name="education" required>
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
          </div>

          <div class="field">
            <label class="field-label" for="d-english">English fluency<span class="req">&bull;</span></label>
            <select id="d-english" name="english_fluency" required>
              <option value="">— select —</option>
              <option value="native">Native speaker</option>
              <option value="fluent">Fluent</option>
              <option value="intermediate">Intermediate</option>
              <option value="beginner">Beginner</option>
              <option value="prefer_not">Prefer not to say</option>
            </select>
          </div>
        </div>

        <!-- ── Hearing ── -->
        <div class="demog-section">
          <p class="demog-section-title">Hearing</p>

          <div class="field">
            <label class="field-label" for="d-hearing">Hearing status<span class="req">&bull;</span></label>
            <select id="d-hearing" name="hearing" required>
              <option value="">— select —</option>
              <option value="no_impairment">No impairment</option>
              <option value="partial_impairment">Partial impairment (not using a hearing aid)</option>
              <option value="severe_impairment">Severe impairment (not using a hearing aid)</option>
              <option value="aided_normal">Corrected to normal or near-normal by a hearing aid</option>
              <option value="aided_partial">Corrected by a hearing aid, but not to normal</option>
              <option value="prefer_not">Prefer not to say</option>
            </select>
            <textarea name="hearing_note"
                      placeholder="If you wear a hearing aid or have any impairment, you may briefly describe it here (optional)."></textarea>
          </div>
        </div>

        <!-- ── Vision ── -->
        <div class="demog-section">
          <p class="demog-section-title">Vision</p>

          <div class="field">
            <label class="field-label" for="d-vision">Vision status<span class="req">&bull;</span></label>
            <select id="d-vision" name="vision" required>
              <option value="">— select —</option>
              <option value="20_20">20/20 vision (no correction needed)</option>
              <option value="corrected">Corrected to normal (glasses or contacts)</option>
              <option value="color_deficiency">Color-vision deficiency</option>
              <option value="other">Other</option>
              <option value="prefer_not">Prefer not to say</option>
            </select>
          </div>

          <div class="field">
            <label class="field-label" for="d-glasses">Are you wearing glasses or contacts right now?<span class="req">&bull;</span></label>
            <select id="d-glasses" name="glasses_contacts" required>
              <option value="">— select —</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="prefer_not">Prefer not to say</option>
            </select>
            <span class="field-hint">If &ldquo;No&rdquo; but you normally wear corrective lenses, please add a note below.</span>
            <textarea name="glasses_contacts_note"
                      placeholder="Optional note"></textarea>
          </div>
        </div>

        <!-- ── Medication ── -->
        <div class="demog-section">
          <p class="demog-section-title">Medication</p>

          <div class="field">
            <label class="field-label" for="d-medication">Are you currently taking any medication that may affect attention, vision, or sensory processing?<span class="req">&bull;</span></label>
            <select id="d-medication" name="medication" required>
              <option value="">— select —</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="prefer_not">Prefer not to say</option>
            </select>
            <span class="field-hint">If yes, please describe how it may affect your concentration, vision, hearing, or participation. We are not asking for the name or dosage.</span>
            <textarea name="medication_note"
                      placeholder="Optional note"></textarea>
          </div>
        </div>

      </div>
    `,button_label:"Continue",data:{phase:"demographics"}};return v(t,wt),b(e,t)}var Un="2.1.0";const Kn={name:"call-function",version:Un,parameters:{func:{type:p.FUNCTION,default:void 0},async:{type:p.BOOL,default:!1}},data:{value:{type:p.COMPLEX,default:void 0}},citations:{apa:"de Leeuw, J. R., Gilbert, R. A., & Luchterhandt, B. (2023). jsPsych: Enabling an Open-Source Collaborative Ecosystem of Behavioral Experiments. Journal of Open Source Software, 8(85), 5351. https://doi.org/10.21105/joss.05351 ",bibtex:'@article{Leeuw2023jsPsych, 	author = {de Leeuw, Joshua R. and Gilbert, Rebecca A. and Luchterhandt, Bj{\\" o}rn}, 	journal = {Journal of Open Source Software}, 	doi = {10.21105/joss.05351}, 	issn = {2475-9066}, 	number = {85}, 	year = {2023}, 	month = {may 11}, 	pages = {5351}, 	publisher = {Open Journals}, 	title = {jsPsych: Enabling an {Open}-{Source} {Collaborative} {Ecosystem} of {Behavioral} {Experiments}}, 	url = {https://joss.theoj.org/papers/10.21105/joss.05351}, 	volume = {8}, }  '}};class be{constructor(e){this.jsPsych=e}static{this.info=Kn}trial(e,n){let o;const r=()=>{const a={value:o};this.jsPsych.finishTrial(a)};if(n.async){const a=i=>{o=i,r()};n.func(a)}else o=n.func(),r()}}function Vn({userAgent:t="",hasHover:e=null,hasFinePointer:n=null,maxTouchPoints:o=0}={}){const r=String(t).toLowerCase(),a=Number.isFinite(o)?o:0,i=[];return/\biphone\b/.test(r)&&i.push("iphone"),/\bipod\b/.test(r)&&i.push("ipod"),/\bipad\b/.test(r)&&i.push("ipad"),/macintosh/.test(r)&&a>1&&i.push("ipad_macos_disguised"),/android/.test(r)&&i.push("android"),/mobile/.test(r)&&!/iphone|ipad|ipod|android/.test(r)&&i.push("mobile_ua"),e===!1&&n===!1&&i.push("no_hover_no_fine_pointer"),{isDesktop:i.length===0,reasons:i,userAgent:String(t),hasHover:e,hasFinePointer:n,maxTouchPoints:a}}function Jn(){const t=typeof navigator<"u"?navigator.userAgent??"":"";let e=null,n=null;if(typeof window<"u"&&typeof window.matchMedia=="function"){try{e=window.matchMedia("(hover: hover)").matches}catch{e=null}try{n=window.matchMedia("(pointer: fine)").matches}catch{n=null}}const o=typeof navigator<"u"&&Number.isFinite(navigator.maxTouchPoints)?navigator.maxTouchPoints:0;return{userAgent:t,hasHover:e,hasFinePointer:n,maxTouchPoints:o}}function Xn(){return{type:be,async:!1,func:()=>Vn(Jn()),data:{phase:"desktop_gate"}}}function Qn(){return{timeline:[{type:O,stimulus:`
          <h2>Sorry — this study requires a desktop or laptop computer</h2>
          <p style="max-width: 38rem; margin: 0 auto 1rem;">
            The task uses keyboard arrow keys and a fullscreen visual display.
            It cannot be completed on a phone or tablet.
          </p>
          <p style="max-width: 38rem; margin: 0 auto;">
            Please return the study on Prolific so the slot can be reopened
            for another participant. We're sorry for the inconvenience.
          </p>
        `,choices:["Close"],data:{phase:"desktop_gate_fail"},on_finish:()=>{typeof window<"u"&&window.jsPsych?.abortExperiment&&window.jsPsych.abortExperiment("Desktop required.")}}],conditional_function:()=>{const e=window.jsPsych?.data?.get().filter({phase:"desktop_gate"}).last(1).values()[0]?.value;return e?!e.isDesktop:!1}}}const Oe="display-colour-locked";function Zn(){if(typeof document>"u")return!1;const t=document.documentElement;return t.classList.contains(Oe)?!1:(t.classList.add(Oe),!0)}function Pe(){return typeof document>"u"?!1:document.documentElement.classList.contains(Oe)}const Xe="display_mode_check",eo=`
  <h2>Display check</h2>
  <div data-voiceover-target style="max-width: 38rem; margin: 0 auto 1.25rem;">
    <p>
      To make sure the experiment looks the same on every participant's
      screen, please <strong>lock the display to light mode</strong> by
      clicking the button below. The lock stays engaged for the rest of
      the session.
    </p>
    <p style="font-size: 0.95rem; color: rgba(0, 0, 0, 0.7);">
      The panel around this text should look like a uniform
      <strong>light gray</strong>. If it looks darkened or hard to read,
      locking light mode will restore it.
    </p>
  </div>
  <div id="display-mode-check-footer" style="margin: 1.5rem auto 0; max-width: 38rem; text-align: center;">
    <button id="display-colour-lock-btn" type="button"
            style="font-size: 0.95rem; padding: 0.55rem 1.1rem; cursor: pointer;">
      Force light mode
    </button>
    <div id="display-colour-lock-status" role="status" aria-live="polite"
         style="visibility: hidden; margin-top: 0.5rem; color: #0a7c4d; font-weight: 600; font-size: 0.95rem;">
      ✓ Display set to light mode
    </div>
  </div>
  <p id="display-mode-gate-hint" role="status" aria-live="polite"
     style="margin: 1.25rem auto 0; max-width: 38rem; text-align: center;
            font-size: 0.95rem; color: rgba(0, 0, 0, 0.65);">
    Click <strong>Force light mode</strong> above to enable
    <strong>Continue</strong>.
  </p>
`;function _t(){const t={type:O,stimulus:eo,choices:["Continue"],button_html:(e,n)=>`<button class="jspsych-btn" data-idx="${n}" disabled aria-disabled="true" style="opacity: 0.55; cursor: not-allowed;">${e}</button>`,on_load:()=>{const e=document.getElementById("display-colour-lock-btn"),n=document.getElementById("display-colour-lock-status"),o=document.getElementById("display-mode-gate-hint"),r=document.querySelector('button.jspsych-btn[data-idx="0"]'),a=()=>{r&&(r.disabled=!1,r.setAttribute("aria-disabled","false"),r.style.opacity="",r.style.cursor=""),o&&(o.style.display="none")},i=()=>{e&&(e.disabled=!0,e.setAttribute("aria-disabled","true"),e.style.opacity="0.55",e.style.cursor="default",e.textContent="Light mode forced"),n&&(n.style.visibility="visible"),a(),r&&typeof r.focus=="function"&&r.focus()};Pe()?i():e&&e.addEventListener("click",()=>{Zn(),i()})},on_finish:e=>{e.display_colour_locked=Pe()},data:{phase:"display_mode_check"}};return v(Xe,_t),b(t,Xe)}const to=85.6,je=1.5,Le=12,no=100,oo=1100,he=320,ro=2,Qe="screen_calibration",Ze="screen_calibration_retry_hint",ao=`
  <h2>Calibrate the screen</h2>
  <p data-voiceover-target style="max-width: 38rem; margin: 0 auto 1rem;">
    Hold a <strong>credit card</strong> against your screen. Use the slider
    to resize the rectangle below until it exactly matches the width of the
    card.
  </p>
  <div id="cc-stage" style="margin: 1.5rem auto; height: 14rem; position: relative;">
    <div id="cc-rect"
         style="position: absolute; left: 50%; top: 1rem; transform: translateX(-50%);
                width: ${he}px; height: ${he*(53.98/85.6)}px; border: 2px solid #000; border-radius: 6px;
                background: linear-gradient(135deg, #1f3a8a 0%, #1e40af 100%);">
    </div>
  </div>
  <input id="cc-slider" type="range" min="${no}" max="${oo}" value="${he}"
         style="width: 24rem; max-width: 100%;" />
  <p style="opacity: 0.7; margin-top: 1rem;">
    A real card is <strong>85.6 mm</strong> wide.
  </p>
`,io=`
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
`;function vt(){const t={type:O,stimulus:ao,choices:["This matches my card"],on_load:()=>{const e=document.getElementById("cc-slider"),n=document.getElementById("cc-rect"),o=()=>{const r=parseInt(e.value,10);n.style.width=`${r}px`,n.style.height=`${r*(53.98/85.6)}px`};e.addEventListener("input",o),o()},on_finish:e=>{const n=document.getElementById("cc-slider"),o=n?parseInt(n.value,10):he,r=o/to;e.cc_px_width=o,e.px_per_mm=r,e.px_per_mm_in_bounds=r>=je&&r<=Le,e.px_per_mm_min=je,e.px_per_mm_max=Le,e.display_colour_locked=Pe(),document.documentElement.style.setProperty("--mm",`${r}px`)},data:{phase:"screen_calibration"}};return v(Qe,vt),b(t,Qe)}function so(){return{type:be,async:!1,func:()=>{const t=window.jsPsych?.data?.get().filter({phase:"screen_calibration"}).last(1).values()[0];return{passed:!!(t&&t.px_per_mm>=je&&t.px_per_mm<=Le),px_per_mm:t?.px_per_mm??null}},data:{phase:"screen_calibration_gate"}}}function kt(){const t={type:O,stimulus:io,choices:["Continue"],data:{phase:"screen_calibration_retry_hint"}};return v(Ze,kt),b(t,Ze)}function lo(t){return{timeline:[kt()],conditional_function:()=>t.count>=1}}function co({maxAttempts:t=ro}={}){const e={count:0};return{timeline:[lo(e),vt(),so(),uo(e,t)],loop_function:()=>(e.count+=1,e.count>=t?!1:!!!window.jsPsych?.data?.get().filter({phase:"screen_calibration_gate"}).last(1).values()[0]?.value?.passed)}}function uo(t,e){return{type:be,async:!1,func:()=>{const n=window.jsPsych?.data?.get().filter({phase:"screen_calibration"}).last(1).values()[0],o=Number.isFinite(n?.px_per_mm)?n.px_per_mm:null;return{attempts_used:t.count,max_attempts:e,retried:t.count>1,px_per_mm:o,px_per_mm_in_bounds:n?.px_per_mm_in_bounds===!0}},data:{phase:"screen_calibration_outcome"}}}const ho="72vh",po="#000",mo="50rem",fo="95vw",go="72rem",Tt=`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  text-align: left;
  box-sizing: border-box;
  padding: 1.1rem 2rem 1.25rem;
  min-height: ${ho};
  color: ${po};
`.replace(/\s+/g," ").trim(),xt=`${Tt} width: ${mo}; max-width: 94vw;`,yo=`${Tt} width: ${fo}; max-width: ${go}; align-items: center;`,Et=`
  flex: 0 0 auto;
  min-height: 3rem;
  width: 100%;
  margin: 0 0 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`.replace(/\s+/g," ").trim(),qe=`
  margin: 0;
  text-align: center;
  font-size: clamp(1.05rem, 2.1vw, 1.6rem);
  line-height: 1.25;
  white-space: nowrap;
`.replace(/\s+/g," ").trim(),bo=`
  flex: 1 1 auto;
  min-height: 0;
  width: 100%;
`.replace(/\s+/g," ").trim();function It({title:t,body:e,narration:n}){const o=typeof n=="string"&&n.trim()?` data-voiceover-script="${Ot(n.trim())}"`:"";return`
    <div style="${`${xt} min-height: auto; padding-top: 0.4rem; padding-bottom: 0.4rem; font-size: 0.95rem; line-height: 1.5;`}">
      <div style="flex: 0 0 auto; width: 100%; margin: 0 0 0.5rem; display: flex; align-items: center; justify-content: center;">
        <h2 style="${qe}">${t}</h2>
      </div>
      <div style="${bo}" data-voiceover-target${o}>${e}</div>
    </div>
  `}const Be=50,j=Be/2,St=Be*Math.SQRT2/2+1,Ae=St-j+.5,ce=Be+2*Ae,et={cx:35,cy:15},tt={cx:15,cy:35},wo=2.5,_o=2.5,nt=100,vo=30,ko=12,To=12,xo=[1,2,3,7,10,11,12,13,14,17,21,22,23],de=10,Eo="#FFFFFF",Io=.33;function So(t,e,n){const r=n*.382,a=[];for(let i=0;i<10;i++){const l=i%2===0?n:r,u=-Math.PI/2+i*Math.PI/5;a.push(`${t+l*Math.cos(u)},${e+l*Math.sin(u)}`)}return a.join(" ")}const Oo=So(tt.cx,tt.cy,_o),Po="rgba(0, 0, 0, 0.229)",jo="rgba(0, 0, 0, 0.55)",ot="#000",rt="rgba(0, 0, 0, 0.85)";function Lo(t,{arrowAngleDeg:e=vo}={}){const n=new Set(t),o=n.has("tone")||n.has("qmark"),r=n.has("pattern"),a=`<circle cx="${j}" cy="${j}" r="${St}" fill="none" stroke="${Po}" stroke-width="0.5" />`,i=o||r?"":`<circle cx="${j}" cy="${j}" r="0.65" fill="${jo}" />`,l=r?xo.map(f=>{const w=f%5,x=Math.floor(f/5),g=w*de,A=x*de;return`<rect x="${g}" y="${A}" width="${de}" height="${de}" fill="${Eo}" opacity="${Io}" />`}).join(""):"",u=n.has("dot")?`<circle cx="${et.cx}" cy="${et.cy}" r="${wo}" fill="${ot}" />`:"",s=n.has("star")?`<polygon points="${Oo}" fill="${ot}" />`:"",d=n.has("tone")?`<text x="${j}" y="${j}" text-anchor="middle" dominant-baseline="central" fill="${rt}" font-size="${ko}" font-family="Arial, sans-serif" font-weight="bold">♪</text>`:"",c=n.has("qmark")?`<text x="${j}" y="${j}" text-anchor="middle" dominant-baseline="central" fill="${rt}" font-size="${To}" font-family="Arial, sans-serif" font-weight="bold">?</text>`:"",h=`
    <svg viewBox="${-Ae} ${-Ae} ${ce} ${ce}"
         width="100%" height="100%" style="display: block; overflow: visible;">
      ${a}${l}${i}${u}${s}${d}${c}
    </svg>
  `,m=(e/360).toFixed(6),_=n.has("arrow")?`<img src="${Ao()}" alt="rotation cue"
            style="position: absolute; top: 50%; left: 50%; width: ${nt}px; height: ${nt}px;
                   transform: translate(-50%, -50%) rotate(${m}turn); pointer-events: none; z-index: 10; user-select: none;
                   filter: brightness(0) saturate(100%) drop-shadow(1px 0 0 #fff) drop-shadow(-1px 0 0 #fff) drop-shadow(0 1px 0 #fff) drop-shadow(0 -1px 0 #fff);" />`:"";return`
    <div style="position: relative; width: calc(var(--mm) * ${ce}); height: calc(var(--mm) * ${ce}); margin: 0 auto;">
      ${h}${_}
    </div>
  `}function Ao(){return"./assets/rotation-arrow.png"}function k({title:t,body:e,narration:n,exemplar:o=[],arrowAngleDeg:r}){const a=typeof n=="string"&&n.trim()?` data-voiceover-script="${Ot(n.trim())}"`:"",i=Lo(o,typeof r=="number"?{arrowAngleDeg:r}:{});return`
    <div style="${xt} align-items: center;">
      <div style="${Et}">
        <h2 style="${qe}">${t}</h2>
      </div>
      <div style="flex: 0 0 auto; width: 100%; text-align: left;"
           data-voiceover-target${a}>${e}</div>
      <div style="flex: 0 0 auto; display: flex; align-items: center; justify-content: center; margin-top: 2rem;">
        ${i}
      </div>
      <div style="flex: 1 0 auto; min-height: 1rem;" aria-hidden="true"></div>
    </div>
  `}function Ot(t){return t.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const No=It({title:"Sit comfortably for the study",body:`
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
  `,narration:"Before we begin the tasks, let's get you set up. This study works best when you are seated comfortably and stay in roughly the same position for the rest of the session. Please take a moment to set yourself up. Sit so that your eyes are about an arm's length, roughly 60 centimetres, away from the monitor. Centre yourself in front of the screen: your eyes should be directly in front of the middle of the monitor, not off to one side. Make sure the screen is roughly at eye level — adjust your chair or the monitor if needed. And try to stay in this position for the rest of the study — moving your head closer or farther between trials can change how the task looks, and how well you can do it. When you are settled in this position, click the button below to continue."}),$o=It({title:"How to place your hands",body:`
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
  `,narration:"Next, let's set up your hands. Throughout the study you will respond with the two horizontal arrow keys on your keyboard, the left arrow and the right arrow. The demonstrations will label them No or Yes, and Not on-pattern or On-pattern. How you place your hands matters. Use both hands, and only your index fingers. Place one index finger on each of the two horizontal arrow keys, one finger per hand. Keep them resting on those two keys throughout the study. Do not use two fingers of the same hand — one index finger per hand, on its own response key. When both index fingers are resting on the two response keys, click the button below to continue."});function Co(){const t=b({type:O,stimulus:No,choices:["I am ready"],button_html:n=>`<button class="jspsych-btn" style="margin-top: 1rem;">${n}</button>`,data:{phase:"viewing_distance"}},"viewing_distance"),e=b({type:O,stimulus:$o,choices:["I am ready"],button_html:n=>`<button class="jspsych-btn" style="margin-top: 1rem;">${n}</button>`,data:{phase:"hand_placement"}},"hand_placement");return{timeline:[t,e]}}function Pt(){const t="speaker_volume_instruction",e={type:O,stimulus:`
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
    `,choices:["Continue"],data:{phase:"speaker_volume_instruction"}};return v(t,Pt),b(e,t)}var Ro="2.1.0";const Do={name:"fullscreen",version:Ro,parameters:{fullscreen_mode:{type:p.BOOL,default:!0,array:!1},message:{type:p.HTML_STRING,default:"<p>The experiment will switch to full screen mode when you press the button below</p>",array:!1},button_label:{type:p.STRING,default:"Continue",array:!1},delay_after:{type:p.INT,default:1e3,array:!1}},data:{success:{type:p.BOOL,default:null,description:"True if the user entered fullscreen mode, false if not."},rt:{type:p.INT,default:null,description:"Time in milliseconds until the user entered fullscreen mode."}},citations:{apa:"de Leeuw, J. R., Gilbert, R. A., & Luchterhandt, B. (2023). jsPsych: Enabling an Open-Source Collaborative Ecosystem of Behavioral Experiments. Journal of Open Source Software, 8(85), 5351. https://doi.org/10.21105/joss.05351 ",bibtex:'@article{Leeuw2023jsPsych, 	author = {de Leeuw, Joshua R. and Gilbert, Rebecca A. and Luchterhandt, Bj{\\" o}rn}, 	journal = {Journal of Open Source Software}, 	doi = {10.21105/joss.05351}, 	issn = {2475-9066}, 	number = {85}, 	year = {2023}, 	month = {may 11}, 	pages = {5351}, 	publisher = {Open Journals}, 	title = {jsPsych: Enabling an {Open}-{Source} {Collaborative} {Ecosystem} of {Behavioral} {Experiments}}, 	url = {https://joss.theoj.org/papers/10.21105/joss.05351}, 	volume = {8}, }  '}};class zo{constructor(e){this.jsPsych=e,this.rt=null,this.start_time=0}static{this.info=Do}trial(e,n){var o=typeof Element<"u"&&"ALLOW_KEYBOARD_INPUT"in Element;o?this.endTrial(e,!1,n):n.fullscreen_mode?this.showDisplay(e,n):(this.exitFullScreen(),this.endTrial(e,!0,n))}showDisplay(e,n){e.innerHTML=`
      ${n.message}
      <button id="jspsych-fullscreen-btn" class="jspsych-btn">${n.button_label}</button>
    `,e.querySelector("#jspsych-fullscreen-btn").addEventListener("click",()=>{this.rt=Math.round(performance.now()-this.start_time),this.enterFullScreen(),this.endTrial(e,!0,n)}),this.start_time=performance.now()}endTrial(e,n,o){e.innerHTML="",this.jsPsych.pluginAPI.setTimeout(()=>{var r={success:n,rt:this.rt};this.jsPsych.finishTrial(r)},o.delay_after)}enterFullScreen(){var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}exitFullScreen(){(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)&&(document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen())}simulate(e,n,o,r){n=="data-only"&&(r(),this.simulate_data_only(e,o)),n=="visual"&&this.simulate_visual(e,o,r)}create_simulation_data(e,n){const r={success:!0,rt:this.jsPsych.randomization.sampleExGaussian(1e3,100,.005,!0)};return this.jsPsych.pluginAPI.mergeSimulationData(r,n)}simulate_data_only(e,n){const o=this.create_simulation_data(e,n);this.jsPsych.finishTrial(o)}simulate_visual(e,n,o){const r=this.create_simulation_data(e,n),a=this.jsPsych.getDisplayElement();r.success===!1?this.endTrial(a,!1,e):(this.trial(a,e),o(),this.jsPsych.pluginAPI.clickTarget(a.querySelector("#jspsych-fullscreen-btn"),r.rt))}}let at=null;const jt=[];function it(t){jt.push(t),mt({phase:"visibility_event",...t}).catch(e=>{console.error("[visibility] storage append failed",e),ft(e)})}function Mo(){if(at)return;const t=()=>{it({kind:"visibilitychange",hidden:document.hidden,ts:performance.now(),iso:new Date().toISOString()})},e=()=>{it({kind:"fullscreenchange",in_fullscreen:!!document.fullscreenElement,ts:performance.now(),iso:new Date().toISOString()})};document.addEventListener("visibilitychange",t),document.addEventListener("fullscreenchange",e),at=()=>{document.removeEventListener("visibilitychange",t),document.removeEventListener("fullscreenchange",e)}}function qo(){return jt.slice()}function Lt(){const t="enter_fullscreen",e={type:zo,fullscreen_mode:!0,message:`
      <h2>Enter fullscreen</h2>
      <p>The experiment must run in fullscreen. Click below to continue.</p>
    `,button_label:"Enter fullscreen",data:{phase:"enter_fullscreen"}};return v(t,Lt),b(e,t)}function Bo(){return{type:be,async:!1,func:()=>(Mo(),{recording:!0}),data:{phase:"visibility_recorder_start"}}}const Yo=200,Ho=500,Fo=50,Go=10,Z=50,Wo="#60a5fa";function Te(t,e){return new Promise(n=>{const o=()=>{const r=(e-t.currentTime)*1e3;if(r<=0){n();return}setTimeout(o,Math.min(r,10))};o()})}function Uo(t){const e=[];for(let n=0;n<t;n++)e.push(`<div class="tac-box" id="tac-box-${n}" data-idx="${n}">${n+1}</div>`);return e.join("")}function At(){const t="tone_audibility_and_comfort";let e=!1,n=!1,o=!1,r=0,a=Z;const i={type:O,stimulus:`
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
          background: ${Wo};
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
        ${Uo(y.tones.count)}
      </div>
      <div class="tac-slider-wrap">
        <input
          id="tac-slider"
          type="range"
          min="0"
          max="100"
          step="1"
          value="${Z}"
          aria-label="Playback volume"
        />
        <div class="tac-slider-readout">
          <span>quieter</span>
          <span id="tac-slider-readout">${Z}%</span>
          <span>louder</span>
        </div>
      </div>
    `,choices:["I'm comfortable — continue"],button_html:l=>`<button class="jspsych-btn" id="tac-yes-btn">${l}</button>`,on_load:async()=>{e=!1,n=!1,o=!1,r=0,a=Z;const l=Promise.resolve();We(Z/100);const u=document.getElementById("tac-slider"),s=document.getElementById("tac-slider-readout");u&&u.addEventListener("input",()=>{const g=Number(u.value);a=g,s&&(s.textContent=`${g}%`),We(g/100)});const d=document.getElementById("tac-yes-btn");if(d&&d.addEventListener("click",()=>{n||(o=!0),e=!0},{capture:!0}),await l,e)return;const c=mn(),h=ht(),m=y.tones.duration_ms/1e3,_=(y.tones.duration_ms+Yo)/1e3,f=Ho/1e3,w=[];for(let g=0;g<h.length;g++)w.push(document.getElementById(`tac-box-${g}`));let x=c.currentTime+Fo/1e3;try{for(let g=0;g<Go&&!e;g++){r=g+1;for(let A=0;A<h.length&&!e;A++){const D=x;if(fn(A,{when:D}),await Te(c,D),e)break;const K=w[A];K&&K.classList.add("playing"),await Te(c,D+m),K&&K.classList.remove("playing"),x=D+_}e||(await Te(c,x+f),x+=f)}}catch{}if(!o&&!e){n=!0;const g=document.getElementById("tac-yes-btn");g&&g.click()}},on_finish:l=>{ut();const u=$e();u.current&&!u.current._state?.finished&&u.current.cancel(),l.tones_audible=o&&!n,l.user_playback_pct=a,l.user_playback_gain=a/100,l.sweeps_completed=r},data:{phase:"tone_audibility_and_comfort"}};return v(t,At),b(i,t)}function Ko(){return{timeline:[{type:O,stimulus:`
          <h2>Sorry — the audio doesn't seem to be coming through</h2>
          <p style="max-width: 38rem; margin: 0 auto 1rem;">
            Without a comfortable, clearly audible setting for every
            tone, the task cannot be completed accurately.
          </p>
          <p style="max-width: 38rem; margin: 0 auto;">
            Please return the study on Prolific so the slot can be
            reopened. We're sorry for the inconvenience.
          </p>
        `,choices:["Close"],data:{phase:"tone_audibility_fail"},on_finish:()=>{typeof window<"u"&&window.jsPsych?.abortExperiment&&window.jsPsych.abortExperiment("Tone audibility failed.")}}],conditional_function:()=>{const t=window.jsPsych?.data?.get().filter({phase:"tone_audibility_and_comfort"}).last(1).values()[0];return t?t.tones_audible===!1:!1}}}function Vo(){return[Xn(),Qn(),bt(),Hn(),wt(),Co(),_t(),co(),Pt(),Lt(),Bo(),At(),Ko()]}var Jo="2.1.0";const Xo={name:"instructions",version:Jo,parameters:{pages:{type:p.HTML_STRING,default:void 0,array:!0},key_forward:{type:p.KEY,default:"ArrowRight"},key_backward:{type:p.KEY,default:"ArrowLeft"},allow_backward:{type:p.BOOL,default:!0},allow_keys:{type:p.BOOL,default:!0},show_clickable_nav:{type:p.BOOL,default:!1},show_page_number:{type:p.BOOL,default:!1},page_label:{type:p.STRING,default:"Page"},button_label_previous:{type:p.STRING,default:"Previous"},button_label_next:{type:p.STRING,default:"Next"},on_page_change:{type:p.FUNCTION,pretty_name:"Page change callback",default:function(t){}}},data:{view_history:{type:p.COMPLEX,array:!0,nested:{page_index:{type:p.INT},viewing_time:{type:p.INT}}},rt:{type:p.INT}},citations:{apa:"de Leeuw, J. R., Gilbert, R. A., & Luchterhandt, B. (2023). jsPsych: Enabling an Open-Source Collaborative Ecosystem of Behavioral Experiments. Journal of Open Source Software, 8(85), 5351. https://doi.org/10.21105/joss.05351 ",bibtex:'@article{Leeuw2023jsPsych, 	author = {de Leeuw, Joshua R. and Gilbert, Rebecca A. and Luchterhandt, Bj{\\" o}rn}, 	journal = {Journal of Open Source Software}, 	doi = {10.21105/joss.05351}, 	issn = {2475-9066}, 	number = {85}, 	year = {2023}, 	month = {may 11}, 	pages = {5351}, 	publisher = {Open Journals}, 	title = {jsPsych: Enabling an {Open}-{Source} {Collaborative} {Ecosystem} of {Behavioral} {Experiments}}, 	url = {https://joss.theoj.org/papers/10.21105/joss.05351}, 	volume = {8}, }  '}};class re{constructor(e){this.jsPsych=e}static{this.info=Xo}trial(e,n){var o=0,r=[],a=performance.now(),i=a;function l(){this.id==="jspsych-instructions-back"?d():this.id==="jspsych-instructions-next"&&s()}function u(){var f=n.pages[o],w="";if(n.show_page_number&&(w="<span style='margin: 0 1em;' class='jspsych-instructions-pagenum'>"+n.page_label+" "+(o+1)+"/"+n.pages.length+"</span>"),n.show_clickable_nav){var x="<div class='jspsych-instructions-nav' style='padding: 10px 0px;'>";if(n.allow_backward){var g=o>0?"":"disabled='disabled'";x+="<button id='jspsych-instructions-back' class='jspsych-btn' style='margin-right: 5px;' "+g+">&lt; "+n.button_label_previous+"</button>"}n.pages.length>1&&n.show_page_number&&(x+=w),x+="<button id='jspsych-instructions-next' class='jspsych-btn'style='margin-left: 5px;'>"+n.button_label_next+" &gt;</button></div>",f+=x,e.innerHTML=f,o!=0&&n.allow_backward&&e.querySelector("#jspsych-instructions-back").addEventListener("click",l,{once:!0}),e.querySelector("#jspsych-instructions-next").addEventListener("click",l,{once:!0})}else n.show_page_number&&n.pages.length>1&&(f+="<div class='jspsych-instructions-pagenum'>"+w+"</div>"),e.innerHTML=f}function s(){c(),o++,o>=n.pages.length?h():u(),n.on_page_change(o)}function d(){c(),o--,u(),n.on_page_change(o)}function c(){var f=performance.now(),w=Math.round(f-i);r.push({page_index:o,viewing_time:w}),i=f}const h=()=>{n.allow_keys&&this.jsPsych.pluginAPI.cancelKeyboardResponse(_);var f={view_history:r,rt:Math.round(performance.now()-a)};this.jsPsych.finishTrial(f)},m=f=>{_=this.jsPsych.pluginAPI.getKeyboardResponse({callback_function:m,valid_responses:[n.key_forward,n.key_backward],rt_method:"performance",persist:!1,allow_held_key:!1}),this.jsPsych.pluginAPI.compareKeys(f.key,n.key_backward)&&o!==0&&n.allow_backward&&d(),this.jsPsych.pluginAPI.compareKeys(f.key,n.key_forward)&&s()};if(u(),n.allow_keys)var _=this.jsPsych.pluginAPI.getKeyboardResponse({callback_function:m,valid_responses:[n.key_forward,n.key_backward],rt_method:"performance",persist:!1})}simulate(e,n,o,r){n=="data-only"&&(r(),this.simulate_data_only(e,o)),n=="visual"&&this.simulate_visual(e,o,r)}create_simulation_data(e,n){let o=0,r=0,a=[];if(!n.data?.view_history&&!n.data?.rt)for(;o!==e.pages.length;){const u=Math.round(this.jsPsych.randomization.sampleExGaussian(3e3,300,.0033333333333333335));a.push({page_index:o,viewing_time:u}),r+=u,o==0||!e.allow_backward||this.jsPsych.randomization.sampleBernoulli(.9)==1?o++:o--}if(!n.data?.view_history&&n.data?.rt){for(r=n.data.rt;o!==e.pages.length;)a.push({page_index:o,viewing_time:null}),o==0||!e.allow_backward||this.jsPsych.randomization.sampleBernoulli(.9)==1?o++:o--;const u=n.data.rt/a.length;let s=0;for(const h of a){const m=Math.round(this.jsPsych.randomization.sampleExGaussian(u,u/10,1/(u/10)));h.viewing_time=m,s+=m}const d=n.data.rt-s,c=Math.round(d/a.length);for(const h of a)h.viewing_time+=c}if(n.data?.view_history&&!n.data?.rt){a=n.data.view_history,r=0;for(const u of n.data.view_history)r+=u.viewing_time}const i={view_history:a,rt:r},l=this.jsPsych.pluginAPI.mergeSimulationData(i,n);return this.jsPsych.pluginAPI.ensureSimulationDataConsistency(e,l),l}simulate_data_only(e,n){const o=this.create_simulation_data(e,n);this.jsPsych.finishTrial(o)}simulate_visual(e,n,o){const r=this.create_simulation_data(e,n),a=this.jsPsych.getDisplayElement();this.trial(a,e),o();const i=d=>{e.allow_keys?this.jsPsych.pluginAPI.pressKey(e.key_forward,d):e.show_clickable_nav&&this.jsPsych.pluginAPI.clickTarget(a.querySelector("#jspsych-instructions-next"),d)},l=d=>{e.allow_keys?this.jsPsych.pluginAPI.pressKey(e.key_backward,d):e.show_clickable_nav&&this.jsPsych.pluginAPI.clickTarget(a.querySelector("#jspsych-instructions-back"),d)};let u=0,s=0;for(let d=0;d<r.view_history.length;d++)d==r.view_history.length-1?i(s+r.view_history[d].viewing_time):(r.view_history[d+1].page_index>u&&i(s+r.view_history[d].viewing_time),r.view_history[d+1].page_index<u&&l(s+r.view_history[d].viewing_time),s+=r.view_history[d].viewing_time,u=r.view_history[d+1].page_index)}}const Nt=`<span style="color: ${Ce};"><strong>green</strong></span>`,$t=`<span style="color: ${Re};"><strong>red</strong></span>`,Ct=Object.freeze({key_forward:" ",key_backward:"ArrowLeft",allow_backward:!0,allow_keys:!0,show_clickable_nav:!0,show_page_number:!0,page_label:"Page",button_label_previous:"Previous",button_label_next:"Next"});function Rt(){const t=y.memory.set_size,e="Task 1 — Remember the dots",n=[k({title:e,body:`
        <p>You will see <strong>${t} dots</strong> appear one at a
        time at different locations inside the circle. Each dot is brief
        — remember <strong>which locations</strong> the dots appear in.</p>
      `,narration:`You will see ${t} dots appear one at a time at different locations inside the circle. Each dot is brief — remember which locations the dots appear in.`,exemplar:["dot"]}),k({title:e,body:`
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
      `,narration:`After the dots, we test your memory ${t} times. Each time, a black dot appears for 3 seconds in some location. Press Yes, the right arrow, if a dot was shown in that location. Press No, the left arrow, if it was not. Keep your eyes on the centre of the circle throughout.`,exemplar:["qmark"]}),k({title:e,body:`
        <p>You have <strong>3 seconds</strong> for each test. Aim for
        accuracy first, but don't dwell.</p>
        <p>If you answer in time, the dot turns
        ${Nt} for correct or
        ${$t} for incorrect while it is still on screen.</p>
      `,narration:"You have 3 seconds for each test. Aim for accuracy first, but don't dwell. If you answer in time, the dot turns green for correct or red for incorrect while it is still on screen.",exemplar:["qmark"]})],o={type:re,pages:n,...Ct,data:{phase:"instructions_memory_d_only"}};return W(o.data.phase,Rt),U(o)}function Dt(){const t=y.memory.set_size,e="Task 2 — Remember the tones",n=[k({title:e,body:`
        <p>Task 2 is like Task 1, but with sounds instead of dots. You
        will hear <strong>${t} short tones</strong>, one at a time.
        Remember <strong>each tone you hear</strong>.</p>
      `,narration:`Task 2 is like Task 1, but with sounds instead of dots. You will hear ${t} short tones, one at a time. Remember each tone you hear.`,exemplar:["tone"]}),k({title:e,body:`
        <p>Then we play <strong>${t} more tones</strong>, one at a
        time. For each one:</p>
        <p style="margin: 1.25rem 0;">
          Press <strong>Yes</strong> (<kbd>&rarr;</kbd> RIGHT arrow) if
          you heard this tone before.<br />
          Press <strong>No</strong> (<kbd>&larr;</kbd> LEFT arrow) if
          you did not.
        </p>
        <p>Keep your eyes on the centre of the circle and listen.</p>
      `,narration:`Then we play ${t} more tones, one at a time. For each one: Press Yes, the right arrow, if you heard this tone before. Press No, the left arrow, if you did not. Keep your eyes on the centre of the circle and listen.`,exemplar:["qmark"]}),k({title:e,body:`
        <p>You have <strong>3 seconds</strong> for each test. If you
        answer in time, the central question mark turns
        ${Nt} for correct or
        ${$t} for incorrect.</p>
        <p>Please make sure your audio volume is still at the level you
        set earlier.</p>
      `,narration:"You have 3 seconds for each test. If you answer in time, the central question mark turns green for correct or red for incorrect. Please make sure your audio volume is still at the level you set earlier.",exemplar:["tone"]})],o={type:re,pages:n,...Ct,data:{phase:"instructions_memory_t_only"}};return W(o.data.phase,Dt),U(o)}const Qo=`<span style="color: ${Ce};"><strong>green</strong></span>`,Zo=`<span style="color: ${Re};"><strong>red</strong></span>`,er='<p style="border-left: 3px solid #772139; padding: 0.5rem 0.75rem; margin: 1rem 0; background: rgba(119, 33, 57, 0.08);">',tr=Object.freeze({key_forward:" ",key_backward:"ArrowLeft",allow_backward:!0,allow_keys:!0,show_clickable_nav:!0,show_page_number:!0,page_label:"Page",button_label_previous:"Previous",button_label_next:"Next"});function zt(){const t=y.imagery.stars_per_trial,e="Task 3 — Picture the pattern",n=[k({title:e,body:`
        <p>In Task 3 you will <strong>picture this pattern in your
        mind</strong> and keep that picture clear while you respond.</p>
        ${er}
        <strong style="color: #772139;">Important:</strong> the
        demonstration will show this pattern once more so you can commit
        it to memory. It will <strong>not</strong> be shown during the
        trials.</p>
      `,narration:"In Task 3 you will picture this pattern in your mind and keep that picture clear while you respond. Important: the demonstration will show this pattern once more so you can commit it to memory. It will not be shown during the trials.",exemplar:["pattern"]}),k({title:e,body:`
        <p>Each trial begins with an <strong>arrow</strong>. The arrow
        tells you to <strong>turn the pattern in your mind</strong> in
        the direction it points, like rotating a piece of paper. Hold
        this turned pattern in mind.</p>
        <p>You'll have <strong>5 seconds</strong> to imagine and turn
        the pattern, then the trial continues automatically.</p>
      `,narration:"Each trial begins with an arrow. The arrow tells you to turn the pattern in your mind in the direction it points, like rotating a piece of paper. Hold this turned pattern in mind. You'll have 5 seconds to imagine and turn the pattern, then the trial continues automatically.",exemplar:["arrow"]}),k({title:e,body:`
        <p>Then <strong>${t} bright stars</strong> will flash
        inside the circle, one at a time. For each star, decide whether
        it lands on the <strong>rotated pattern you are picturing</strong>.</p>
        <p style="margin: 1.25rem 0;">
          Press <strong>On-pattern</strong> (<kbd>&rarr;</kbd> RIGHT arrow)
          if the star falls on your pictured pattern.<br />
          Press <strong>Not on-pattern</strong> (<kbd>&larr;</kbd> LEFT arrow)
          if it does not.
        </p>
      `,narration:`Then ${t} bright stars will flash inside the circle, one at a time. For each star, decide whether it lands on the rotated pattern you are picturing. Press On-pattern, the right arrow, if the star falls on your pictured pattern. Press Not on-pattern, the left arrow, if it does not.`,exemplar:["star"]}),k({title:e,body:`
        <p>You have <strong>3 seconds</strong> for each star. Aim for
        accuracy first, but don't dwell.</p>
        <p>If you answer in time, the star turns
        ${Qo} for correct or
        ${Zo} for incorrect while it is still on screen.</p>
        <p>Be honest about your mental picture — if it's fuzzy, just do
        your best.</p>
      `,narration:"You have 3 seconds for each star. Aim for accuracy first, but don't dwell. If you answer in time, the star turns green for correct or red for incorrect while it is still on screen. Be honest about your mental picture — if it's fuzzy, just do your best.",exemplar:["star"]})],o={type:re,pages:n,...tr,data:{phase:"instructions_imagery_i_only"}};return W(o.data.phase,zt),U(o)}const Mt=`<span style="color: ${Ce};"><strong>green</strong></span>`,qt=`<span style="color: ${Re};"><strong>red</strong></span>`,Bt='<p style="border-left: 3px solid #772139; padding: 0.5rem 0.75rem; margin: 1rem 0; background: rgba(119, 33, 57, 0.08);">',Yt=Object.freeze({key_forward:" ",key_backward:"ArrowLeft",allow_backward:!0,allow_keys:!0,show_clickable_nav:!0,show_page_number:!0,page_label:"Page",button_label_previous:"Previous",button_label_next:"Next"});function Ht(){const t=y.memory.set_size,e=y.imagery.stars_per_trial,n=t+e,o="Task 4 — Dots and pattern together",r=[k({title:o,body:`
        <p>Task 4 combines Task 3 (the pattern) with Task 1 (the dots).
        Each trial begins with the <strong>arrow</strong>: turn the
        pattern in your mind and hold the turned pattern for the whole
        trial. You'll have <strong>5 seconds</strong> to imagine and
        turn it.</p>
      `,narration:"Task 4 combines Task 3, the pattern, with Task 1, the dots. Each trial begins with the arrow: turn the pattern in your mind and hold the turned pattern for the whole trial. You'll have 5 seconds to imagine and turn it.",exemplar:["arrow"]}),k({title:o,body:`
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
      `,narration:`Then ${n} things appear inside the circle one at a time, mixed together. ${e} stars — for each star, press On-pattern, the right arrow, if it lands on your rotated pattern, or Not on-pattern, the left arrow, if it does not. And ${t} dots — remember which locations they appear in, for the dot tests at the end of the trial.`,exemplar:["star","dot"]}),k({title:o,body:`
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
        ${Mt} for correct or ${qt} for incorrect.</p>
      `,narration:`After the ${n} things, we test your dot memory ${t} times. Each time a black dot appears for 3 seconds in some location. Press Yes, the right arrow, if a dot was shown here. Press No, the left arrow, if it was not. You have 3 seconds for each star and each dot test. If you answer in time, the star or dot turns green for correct or red for incorrect.`,exemplar:["qmark"]}),k({title:o,body:`
        ${Bt}
        <strong style="color: #772139;">VERY important:</strong> keep the
        picture of the rotated pattern in mind during the
        <strong>entire</strong> trial. You may drop it only when the
        central <strong>question mark (?)</strong> appears — that is
        when the dot tests begin.</p>
      `,narration:"Very important: keep the picture of the rotated pattern in mind during the entire trial. You may drop it only when the central question mark appears — that is when the dot tests begin.",exemplar:["pattern"]})],a={type:re,pages:r,...Yt,data:{phase:"instructions_dual_i_d"}};return W(a.data.phase,Ht),U(a)}function Ft(){const t=y.memory.set_size,e=y.imagery.stars_per_trial,n=t+e,o="Task 5 — Tones and pattern together",r=[k({title:o,body:`
        <p>Task 5 combines Task 3 (the pattern) with Task 2 (the tones).
        Each trial begins with the <strong>arrow</strong>: turn the
        pattern in your mind and hold the turned pattern for the whole
        trial. You'll have <strong>5 seconds</strong> to imagine and
        turn it.</p>
      `,narration:"Task 5 combines Task 3, the pattern, with Task 2, the tones. Each trial begins with the arrow: turn the pattern in your mind and hold the turned pattern for the whole trial. You'll have 5 seconds to imagine and turn it.",exemplar:["arrow"]}),k({title:o,body:`
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
      `,narration:`Then ${n} things happen one at a time, mixed together. ${e} stars inside the circle — for each star, press On-pattern, the right arrow, if it lands on your rotated pattern, or Not on-pattern, the left arrow, if it does not. And ${t} tones — remember each tone you hear, for the tone tests at the end of the trial.`,exemplar:["star","tone"]}),k({title:o,body:`
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
        mark turns ${Mt} for correct or ${qt} for
        incorrect.</p>
      `,narration:`After the ${n} things, we test your tone memory ${t} times. Each test plays a tone. Press Yes, the right arrow, if you heard this tone before. Press No, the left arrow, if you did not. You have 3 seconds for each star and each tone test. If you answer in time, the star or central question mark turns green for correct or red for incorrect.`,exemplar:["qmark"]}),k({title:o,body:`
        ${Bt}
        <strong style="color: #772139;">VERY important:</strong> keep the
        picture of the rotated pattern in mind during the
        <strong>entire</strong> trial. You may drop it only when the
        central <strong>question mark (?)</strong> appears — that is
        when the tone tests begin.</p>
        <p>Please make sure your audio volume is still at the level you
        set earlier.</p>
      `,narration:"Very important: keep the picture of the rotated pattern in mind during the entire trial. You may drop it only when the central question mark appears — that is when the tone tests begin. Please make sure your audio volume is still at the level you set earlier.",exemplar:["pattern"]})],a={type:re,pages:r,...Yt,data:{phase:"instructions_dual_i_t"}};return W(a.data.phase,Ft),U(a)}const nr=4,Gt=1e3*nr,or=2e3,rr=400,E=500,T=400,q=1200,ar=700,ir=450,sr=220,B=1500,Ye=1e3,lr=Object.freeze([-90,-75,-60,-45,-30,-15,15,30,45,60,75,90]);function He(){return Ne().pick(lr)}const cr="./assets/rotation-arrow.png";function dr(t,e){return`
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
        /* Participant is NEVER meant to click a demo button — the animated
         * hand glyph performs every press. Disabling pointer-events kills
         * the browser's default hover/focus paint that otherwise made the
         * buttons look interactive (and could falsely cue a response during
         * passive watch/listen phases). The replay button at end-of-demo
         * is the only clickable affordance and overrides this rule with
         * an inline pointer-events:auto + cursor:pointer style. */
        pointer-events: none;
      }
      /* Watch/listen banner lives in its OWN persistent slot
       * (#demo-watch-banner-row), one row ABOVE the response buttons —
       * NOT in the buttons-row itself (2026-05-17). The previous design
       * had the banner and the response buttons share a single slot and
       * swap places, which meant the banner vanished the moment the
       * demo mounted its (demo-driven, non-interactive) response
       * buttons — exactly when the participant most needed the "don't
       * respond yet" reminder. Now the banner persists throughout the
       * entire mini-trial, including the probe / star-judgement loops,
       * and is hidden only at askReplay (genuine end-of-demo decision)
       * and after the last replay is consumed.
       *
       * To prevent screen crowding when banner + buttons coexist, the
       * banner is slimmer than the earlier version (1.15rem font with
       * 0.4rem 1.1rem padding rather than 1.6rem / 0.85rem 1.6rem). The
       * uppercase + bold + dashed-border treatment keeps it salient
       * without dominating the column. Single line within the 38rem
       * max-width on a typical viewport. */
      .demo-watch-banner {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        max-width: 38rem;
        padding: 0.4rem 1.1rem;
        border: 2px dashed rgba(119, 33, 57, 0.6);
        border-radius: 0.5rem;
        background: rgba(119, 33, 57, 0.08);
        color: rgba(119, 33, 57, 1);
        font-size: 1.15rem;
        font-weight: 800;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        line-height: 1.2;
        user-select: none;
        pointer-events: none;
      }
      /* Two hand glyphs — one resting under each key cap (left ✋ on the
       * left arrow, right 🤚 on the right arrow). Both stay visible across
       * the entire response phase so the participant sees the realistic
       * two-hand keyboard posture they will adopt for the practice and
       * main task. Only the responding hand wiggles (up/down) to simulate
       * a press; the non-responding hand stays put. This replaces the
       * older single-hand design where one ☝ glyph slid across the
       * buttons — the slide animation read as theatrical / non-realistic
       * and didn't model the bimanual setup we expect on the actual
       * keyboard (left hand on ←, right hand on →). */
      .demo-hand {
        font-size: 3.6rem;
        line-height: 1;
        opacity: 0;
        pointer-events: none;
        user-select: none;
        margin-top: 0.35rem;
        transition: opacity 250ms ease-out;
        transform: translateY(0);
        filter: grayscale(1) brightness(0.45) drop-shadow(0 2px 4px rgba(0,0,0,0.25));
      }
      .demo-hand.is-visible { opacity: 1; }
      @keyframes demo-hand-wiggle {
        0%   { transform: translateY(0) scale(1);
               filter: grayscale(1) brightness(0.45) drop-shadow(0 2px 4px rgba(0,0,0,0.25)); }
        30%  { transform: translateY(-1.3rem) scale(1.22);
               filter: grayscale(0) brightness(0.85) drop-shadow(0 6px 12px rgba(0,0,0,0.3)); }
        60%  { transform: translateY(0.4rem) scale(0.93);
               filter: grayscale(0) brightness(0.85) drop-shadow(0 1px 2px rgba(0,0,0,0.15)); }
        80%  { transform: translateY(-0.1rem) scale(1.02);
               filter: grayscale(0.7) brightness(0.55) drop-shadow(0 2px 4px rgba(0,0,0,0.2)); }
        100% { transform: translateY(0) scale(1);
               filter: grayscale(1) brightness(0.45) drop-shadow(0 2px 4px rgba(0,0,0,0.25)); }
      }
      .demo-hand.is-pressing {
        animation: demo-hand-wiggle 520ms cubic-bezier(0.22, 1, 0.36, 1);
      }
      /* Per-button keyboard-key indicator. A small key-cap glyph rendered
       * directly below each demo button so the participant sees which
       * physical arrow key maps to which response, persistently — exactly
       * the same visual the deck pages use ("<kbd>&rarr;</kbd> RIGHT
       * arrow") but here it sits in the live demo's button row. The key
       * is decorative (aria-hidden); the button label already carries
       * the response meaning for assistive tech. */
      .demo-btn-stack {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        gap: 0.4rem;
      }
      .demo-btn-key {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 1.6rem;
        height: 1.6rem;
        padding: 0 0.35rem;
        border: 1px solid rgba(0, 0, 0, 0.35);
        border-bottom-width: 2px;
        border-radius: 0.3rem;
        background: rgba(255, 255, 255, 0.55);
        font-size: 1.05rem;
        line-height: 1;
        color: rgba(0, 0, 0, 0.8);
        user-select: none;
        pointer-events: none;
      }
    </style>
    <div class="demo-frame" style="${yo}">
      <div style="${Et}">
        <h2 style="${qe}">Demonstration of Task ${t} — ${e}</h2>
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

      <!-- Persistent slot for the "Just watch and listen, don't respond yet"
           banner (see .demo-watch-banner CSS above). Lives on its own row
           ABOVE the response-buttons row so it can coexist with the
           (demo-driven, non-interactive) buttons during probe / star-
           judgement loops, rather than being replaced by them. Reserves a
           fixed min-height so the column doesn't reflow when the banner
           is hidden at askReplay. -->
      <div id="demo-watch-banner-row" style="
        flex: 0 0 auto;
        width: 100%;
        min-height: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 0.75rem;
      "></div>

      <div id="demo-buttons-row" style="
        flex: 0 0 auto;
        width: 100%;
        min-height: 6.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 0.4rem;
      "></div>

      <!-- Bottom-of-viewport reserve so the in-flow content above can never
           bleed under the pinned hint pill on shorter viewports. Matches the
           pinned hint's height (~3.5rem pill + ~1.5rem bottom offset). -->
      <div class="demo-spacer-above-hint" style="
        flex: 0 0 auto;
        height: 5rem;
      "></div>
    </div>

    <!-- Continue-hint pill PINNED to the viewport. Placed outside the
         demo-frame element so position:fixed is unambiguous and the pill's
         y is anchored to the viewport (not the slide), guaranteeing:
         (a) the participant never has to scroll to see "Press Space when
             you are ready", and
         (b) the pill sits at exactly the same y across all five demo
             slides regardless of the in-flow content above.
         z-index 5 keeps it above the slide background but below modal /
         tooltip layers (which sit at 1000+).

         Visibility lock (2026-05-18). The pill is rendered fully
         transparent and aria-hidden so the participant cannot see (or
         have a screen reader read) the press-Space prompt while a
         demo mini-trial is playing. The controllers setSpaceArmed
         method flips opacity to 1 and aria-hidden to false the instant
         the demos events finish (post-roll prompt or last-demonstration
         handoff), and flips it back when a replay starts. Pill
         visibility is therefore the visible mirror of state.spaceArmed,
         which the keydown listener already consults to decide whether
         a Space press is honoured, so the message and the working key
         always agree. -->
    <div id="demo-hint" aria-hidden="true" style="
      position: fixed;
      left: 50%;
      bottom: 1.5rem;
      transform: translateX(-50%);
      z-index: 5;
      pointer-events: none;
      opacity: 0;
      transition: opacity 220ms ease-out;
    ">
      ${L(`Press <kbd>Space</kbd> when you are ready to start the practice for Task ${t}.`)}
    </div>
  `}function ur(){const t={cancelled:!1,spaceArmed:!1,currentNarration:null};return{state:t,setSpaceArmed(e){const n=!!e;t.spaceArmed=n;const o=typeof document<"u"?document.getElementById("demo-hint"):null;o&&(o.style.opacity=n?"1":"0",o.setAttribute("aria-hidden",n?"false":"true"))},setCaption(e){const n=document.getElementById("demo-caption");if(!n)return;n.innerHTML=e,n.classList.remove("demo-caption-bump"),n.offsetWidth,n.classList.add("demo-caption-bump");const o=gn(e);o?(yn(),t.currentNarration=$e().speak(o)):t.currentNarration=null},async wait(e){return await Ue(e),!t.cancelled},async awaitNarration(){const e=t.currentNarration;return e?.done&&await new Promise(n=>{let o=!1;const r=()=>{o||(o=!0,n())};e.done.then(r).catch(r);const a=setInterval(()=>{t.cancelled&&(clearInterval(a),r())},100);e.done.finally(()=>clearInterval(a))}),!t.cancelled},async advanceCaption(e){return t.cancelled||!await this.awaitNarration()||e!==""&&(await Ue(rr),t.cancelled)?!1:(this.setCaption(e),!0)},async narrate(e){return!(!await this.advanceCaption(e)||!await this.awaitNarration())}}}function hr(t,e){const n=y.imagery.rotation_arrow_size_px,o=document.createElement("img");return o.src=cr,o.alt="rotation cue",o.className="rotation-arrow-cue demo-arrow",o.setAttribute("style",["position: absolute","top: 50%","left: 50%",`width: ${n}px`,`height: ${n}px`,`transform: translate(-50%, -50%) rotate(${e}deg)`,"pointer-events: none","z-index: 10","user-select: none","filter: brightness(0) saturate(100%) drop-shadow(1px 0 0 #fff) drop-shadow(-1px 0 0 #fff) drop-shadow(0 1px 0 #fff) drop-shadow(0 -1px 0 #fff)"].join("; ")+";"),t.wrapper.appendChild(o),o}function ue(t){t&&t.parentNode&&t.parentNode.removeChild(t)}async function Fe(t,e,n){if(e.setCaption("Step 1 of 3 — Here is the pattern. Picture it in your mind."),Sn(t),Ke(t),!await e.awaitNarration()||!await e.wait(1e3)||!await e.advanceCaption(`Step 2 of 3 — An arrow tells you which way to turn the pattern in your mind (here, by ${n>0?"+":""}${n}°).`))return!1;Ee(t);const i=hr(t,n);return!await e.awaitNarration()||!await e.wait(600)||!await e.advanceCaption("Step 3 of 3 — This is how your rotated mental image should look. Hold this picture in your mind.")?(ue(i),!1):(ue(i),gt(t,n),Ke(t),!await e.awaitNarration()||!await e.wait(1500)?!1:(Ee(t),!0))}function ae(){const t=On(),e=Pn();return{memCells:[t[0],e[1],t[2]],fillerCells:[e[0],t[1],e[2]],probeCells:[{cell:t[0],isTarget:!0,label:"on"},{cell:e[1],isTarget:!0,label:"off"},{cell:e[4],isTarget:!1,label:"off"}],starCells:[{cell:t[5],isOn:!0},{cell:e[5],isOn:!1},{cell:t[6],isOn:!0}]}}function Y({leftLabel:t,rightLabel:e}){const n=document.getElementById("demo-buttons-row");if(!n)return null;n.innerHTML=`
    <div class="demo-buttons-container" style="
      position: relative;
      display: inline-flex;
      align-items: flex-start;
      gap: 1.25rem;
      padding: 0.5rem 0.5rem 0.75rem;
    ">
      <div class="demo-btn-stack">
        <button type="button" class="demo-btn" data-side="left">
          <span class="demo-btn-label">${t}</span>
        </button>
        <span class="demo-btn-key" data-side="left" aria-hidden="true">&larr;</span>
        <span class="demo-hand" data-side="left" aria-hidden="true">✋</span>
      </div>
      <div class="demo-btn-stack">
        <button type="button" class="demo-btn" data-side="right">
          <span class="demo-btn-label">${e}</span>
        </button>
        <span class="demo-btn-key" data-side="right" aria-hidden="true">&rarr;</span>
        <span class="demo-hand" data-side="right" aria-hidden="true">🤚</span>
      </div>
    </div>
  `;const o=n.querySelector(".demo-buttons-container"),r=n.querySelector('button[data-side="left"]'),a=n.querySelector('button[data-side="right"]'),i=n.querySelector('.demo-btn-key[data-side="left"]'),l=n.querySelector('.demo-btn-key[data-side="right"]'),u=n.querySelector('.demo-hand[data-side="left"]'),s=n.querySelector('.demo-hand[data-side="right"]');return{container:o,leftBtn:r,rightBtn:a,leftKey:i,rightKey:l,leftHand:u,rightHand:s}}function M(){const t=document.getElementById("demo-buttons-row");t&&(t.innerHTML="")}function ie(){const t=document.getElementById("demo-watch-banner-row");return t?(t.innerHTML=`
    <div class="demo-watch-banner" role="status" aria-live="polite">
      Just watch and listen, don't respond yet
    </div>
  `,!0):!1}function Wt(){const t=document.getElementById("demo-watch-banner-row");t&&(t.innerHTML="")}function pr(t){t&&(t.leftHand?.classList.add("is-visible"),t.rightHand?.classList.add("is-visible"))}async function H(t,e,n){if(!t)return!0;if(pr(t),!await n.wait(ar))return!1;const o=e==="right"?t.rightHand:t.leftHand;if(o&&(o.classList.remove("is-pressing"),o.offsetWidth,o.classList.add("is-pressing")),!await n.wait(Math.min(ir,220)))return!1;const r=e==="right"?t.rightBtn:t.leftBtn;return r&&(r.classList.remove("demo-btn-pressed"),r.offsetWidth,r.classList.add("demo-btn-pressed")),!!await n.wait(sr)}function F(t){t&&(t.leftHand?.classList.remove("is-visible","is-pressing"),t.rightHand?.classList.remove("is-visible","is-pressing"))}const R=Object.freeze({left:"No",right:"Yes"}),V=Object.freeze({left:"Not on-pattern",right:"On-pattern"});function G({pressedLabel:t,correctLabel:e,isCorrect:n,stimulusName:o}){const r=`<span style="color: ${$}; font-weight: 600;">correct</span>`,a=`<span style="color: ${C}; font-weight: 600;">incorrect</span>`;return n?`We chose <strong>${t}</strong> — that was the ${r} answer, so the ${o} turns green.`:`We chose <strong>${t}</strong> — that was ${a}; the ${r} answer was <strong>${e}</strong>, so the ${o} turns red.`}async function mr(t,e){const{memCells:n,fillerCells:o,probeCells:r}=ae();if(ie(),!await e.narrate("Memorize the locations of the dots that will appear inside the circle one at a time.")||!await e.advanceCaption("")||!await e.wait(E))return;for(let l=0;l<3;l++){const u=fe(t,n[l]);if(!await e.wait(Gt)||(P(u),!await e.wait(T)))return;const s=De(t,o[l],{visible:!1});if(!await e.wait(Ye))return;P(s)}if(!await e.narrate("Hold the dots in mind for a moment.")||(I(t,"?"),!await e.wait(T)))return;const a=Y({leftLabel:"No",rightLabel:"Yes"}),i=2;for(let l=0;l<r.length;l++){const u=r[l],s=u.isTarget?"right":"left",d=l===i?s==="right"?"left":"right":s;if(!await e.narrate(`Test ${l+1} of 3: was a dot just shown in this location?`)||!await e.wait(E))return;const c=fe(t,u.cell);if(!await e.wait(q)||!await H(a,d,e))return;const h=d===s;if(c.setAttribute("fill",h?$:C),!await e.wait(B)||!await e.narrate(G({pressedLabel:R[d],correctLabel:R[s],isCorrect:h,stimulusName:"dot"}))||(F(a),P(c),!await e.wait(T)))return}I(t,"")}async function fr(t,e){const{memCells:n,fillerCells:o,probeCells:r}=ae();if(ie(),!await e.narrate("Memorize each of the tones that will play one at a time.")||!await e.advanceCaption("")||!await e.wait(E))return;for(let l=0;l<3;l++){if(await me(n[l]).catch(()=>{}),!await e.wait(T))return;const u=De(t,o[l],{visible:!1});if(!await e.wait(Ye))return;P(u)}if(!await e.narrate("Hold the tones in mind for a moment.")||(I(t,"?"),!await e.wait(T)))return;const a=Y({leftLabel:"No",rightLabel:"Yes"}),i=2;for(let l=0;l<r.length;l++){const u=r[l],s=u.isTarget?"right":"left",d=l===i?s==="right"?"left":"right":s;if(!await e.wait(E)||(await me(u.cell).catch(()=>{}),!await e.wait(T))||!await e.narrate(`Test ${l+1} of 3: was that tone one of the ones you just heard?`)||!await e.wait(q)||!await H(a,d,e))return;const c=d===s;if(I(t,"?",{color:c?$:C}),!await e.wait(B)||!await e.narrate(G({pressedLabel:R[d],correctLabel:R[s],isCorrect:c,stimulusName:"question mark"}))||(F(a),I(t,"?"),!await e.wait(T)))return}I(t,"")}async function gr(t,e){const n=He();if(ie(),!await e.narrate("Picture the pattern, turn it in your mind, then judge whether each star falls on the rotated pattern.")||!await Fe(t,e,n)||!await e.narrate("Now keep picturing the turned pattern. 3 stars will appear inside the circle. For each star, decide whether it falls <strong>on-pattern</strong> or <strong>not on-pattern</strong>.")||!await e.wait(E)||!await e.advanceCaption(""))return;const o=Y({leftLabel:"Not on-pattern",rightLabel:"On-pattern"}),{fillerCells:r,starCells:a}=ae(),i=2;for(let l=0;l<3;l++){const u=De(t,r[l],{visible:!1});if(!await e.wait(Ye))return;P(u);const s=a[l],d=s.isOn?"right":"left",c=l===i?d==="right"?"left":"right":d;if(!await e.wait(E))return;const h=ze(t,s.cell);if(!await e.wait(q)||!await H(o,c,e))return;const m=c===d;if(Me(h,m?$:C),!await e.wait(B)||!await e.narrate(G({pressedLabel:V[c],correctLabel:V[d],isCorrect:m,stimulusName:"star"}))||(F(o),P(h),!await e.wait(T)))return}}async function yr(t,e){const n=He();if(ie(),!await e.narrate("Picture the rotated pattern, memorize the dot locations, and judge whether each star falls on the rotated pattern.")||!await Fe(t,e,n)||!await e.narrate("Now keep picturing the turned pattern. 6 things appear inside the circle, mixed together: 3 dots to remember, 3 stars to judge as <strong>on-pattern</strong> or <strong>not on-pattern</strong>.")||!await e.wait(E)||!await e.advanceCaption(""))return;const{memCells:o,starCells:r,probeCells:a}=ae(),i=2;for(let s=0;s<3;s++){if(M(),!await e.wait(E))return;const d=fe(t,o[s]);if(!await e.wait(Gt)||(P(d),!await e.wait(T)))return;const c=r[s],h=c.isOn?"right":"left",m=s===i?h==="right"?"left":"right":h,_=Y({leftLabel:"Not on-pattern",rightLabel:"On-pattern"});if(!await e.wait(E))return;const f=ze(t,c.cell);if(!await e.wait(q)||!await H(_,m,e))return;const w=m===h;if(Me(f,w?$:C),!await e.wait(B)||!await e.narrate(G({pressedLabel:V[m],correctLabel:V[h],isCorrect:w,stimulusName:"star"}))||(F(_),P(f),!await e.advanceCaption(""))||!await e.wait(T))return}if(M(),!await e.narrate("The question mark means the dot tests begin. You may let the picture go and focus on the dots.")||!await e.advanceCaption(""))return;const l=Y({leftLabel:"No",rightLabel:"Yes"});if(I(t,"?"),!await e.wait(T))return;const u=2;for(let s=0;s<a.length;s++){const d=a[s],c=d.isTarget?"right":"left",h=s===u?c==="right"?"left":"right":c;if(!await e.narrate(`Dot test ${s+1} of 3: was a dot shown in this location?`)||!await e.wait(E))return;const m=fe(t,d.cell);if(!await e.wait(q)||!await H(l,h,e))return;const _=h===c;if(m.setAttribute("fill",_?$:C),!await e.wait(B)||!await e.narrate(G({pressedLabel:R[h],correctLabel:R[c],isCorrect:_,stimulusName:"dot"}))||(F(l),P(m),!await e.wait(T)))return}I(t,"")}async function br(t,e){const n=He();if(ie(),!await e.narrate("Picture the rotated pattern, memorize each tone, and judge whether each star falls on the rotated pattern.")||!await Fe(t,e,n)||!await e.narrate("Now keep picturing the turned pattern. 6 things happen, mixed together: 3 tones to remember, 3 stars (inside the circle) to judge as <strong>on-pattern</strong> or <strong>not on-pattern</strong>.")||!await e.wait(E)||!await e.advanceCaption(""))return;const{memCells:o,starCells:r,probeCells:a}=ae(),i=2;for(let s=0;s<3;s++){if(M(),!await e.wait(E)||(await me(o[s]).catch(()=>{}),!await e.wait(T)))return;const d=r[s],c=d.isOn?"right":"left",h=s===i?c==="right"?"left":"right":c,m=Y({leftLabel:"Not on-pattern",rightLabel:"On-pattern"});if(!await e.wait(E))return;const _=ze(t,d.cell);if(!await e.wait(q)||!await H(m,h,e))return;const f=h===c;if(Me(_,f?$:C),!await e.wait(B)||!await e.narrate(G({pressedLabel:V[h],correctLabel:V[c],isCorrect:f,stimulusName:"star"}))||(F(m),P(_),!await e.advanceCaption(""))||!await e.wait(T))return}if(M(),!await e.narrate("The question mark means the tone tests begin. You may let the picture go and focus on the tones.")||!await e.advanceCaption(""))return;const l=Y({leftLabel:"No",rightLabel:"Yes"});if(I(t,"?"),!await e.wait(T))return;const u=2;for(let s=0;s<a.length;s++){const d=a[s],c=d.isTarget?"right":"left",h=s===u?c==="right"?"left":"right":c;if(!await e.wait(E)||(await me(d.cell).catch(()=>{}),!await e.wait(T))||!await e.narrate(`Tone test ${s+1} of 3: was that tone one of the ones you just heard?`)||!await e.wait(q)||!await H(l,h,e))return;const m=h===c;if(I(t,"?",{color:m?$:C}),!await e.wait(B)||!await e.narrate(G({pressedLabel:R[h],correctLabel:R[c],isCorrect:m,stimulusName:"question mark"}))||(F(l),I(t,"?"),!await e.wait(T)))return}I(t,"")}const wr=3;async function _r(t,e){if(t.state.cancelled)return!1;Wt();const n=document.getElementById("demo-buttons-row");if(!n)return!1;n.innerHTML=`
    <div class="demo-buttons-container" style="
      position: relative;
      display: inline-flex;
      align-items: center;
      gap: 1.25rem;
      padding: 0.5rem 0.5rem 1rem;
    ">
      <button type="button" class="demo-btn demo-replay-btn" data-side="right" style="cursor: pointer; pointer-events: auto;">
        <span class="demo-btn-label">Repeat the demonstration</span>
      </button>
    </div>
  `;const o=e===1?" (this is the last replay you can request)":` (you can watch up to ${e} more time${e===1?"":"s"})`;return await t.advanceCaption(`Would you like to watch the demonstration again?${o} Click the button below to watch it again.`)?new Promise(r=>{let a=!1;const i=s=>{if(a)return;a=!0,n.querySelectorAll(".demo-replay-btn").forEach(c=>c.removeEventListener("click",l)),r(s)},l=s=>{const d=s.currentTarget.getAttribute("data-side");i(d==="right")};n.querySelectorAll(".demo-replay-btn").forEach(s=>s.addEventListener("click",l));const u=setInterval(()=>{t.state.cancelled&&(clearInterval(u),i(!1)),a&&clearInterval(u)},100)}):!1}function se(t){return async function(n,o){let r=0;for(;!o.state.cancelled;){try{await t(n,o)}catch(l){console.error("[demo] mini-trial error",l);return}if(o.state.cancelled)return;o.setSpaceArmed(!0);const a=wr-r;if(a<=0){if(Wt(),!await o.advanceCaption("That was the last demonstration. Press Space when you are ready to start the practice."))return;M();return}if(!await _r(o,a)){await o.advanceCaption("Press Space when you are ready to start the practice."),M();return}r+=1,o.setSpaceArmed(!1);try{In(n),M(),I(n,""),n.rotor.style.transition="",gt(n,0),Ee(n)}catch{}if(!await o.advanceCaption("Replaying the demonstration…")||!await o.wait(or))return}}}const vr=se(mr),kr=se(fr),Tr=se(gr),xr=se(yr),Er=se(br);function le({phase:t,taskNumber:e,title:n,run:o,factory:r}){const a={type:N,stimulus:dr(e,n),choices:"NO_KEYS",response_ends_trial:!1,on_load:()=>{const i=document.getElementById("demo-mount");if(!i)return;const l=En({rotation_deg:0,fixation:"",background_shade:"gray"});i.appendChild(l.wrapper);const u=ur(),s=window.jsPsych?.getCurrentTrial?.();s&&typeof s=="object"&&(s._demo_state=u.state);let d=!0;const c=h=>{if(d){if(h.key==="ArrowLeft"||h.key==="ArrowRight"){h.preventDefault(),h.stopPropagation();return}if(h.key===" "||h.code==="Space"){if(h.preventDefault(),h.stopPropagation(),!u.state.spaceArmed)return;d=!1,document.removeEventListener("keydown",c,!0),u.state.cancelled=!0,window.jsPsych?.finishTrial?.({demo_advanced_via_space:!0})}}};document.addEventListener("keydown",c,!0),s&&typeof s=="object"&&(s._demo_keydown_handler=c),o(l,u).catch(h=>{console.error(`[demo:${t}] schedule error`,h)})},on_finish:()=>{const i=window.jsPsych?.getCurrentTrial?.();i?._demo_state&&(i._demo_state.cancelled=!0),i?._demo_keydown_handler&&(document.removeEventListener("keydown",i._demo_keydown_handler,!0),i._demo_keydown_handler=null);try{$e().cancel()}catch{}},data:{phase:t}};return W(t,r),U(a)}function Ut(){return le({phase:"demo_d_only",taskNumber:1,title:"Remember the dots",run:vr,factory:Ut})}function Kt(){return le({phase:"demo_t_only",taskNumber:2,title:"Remember the tones",run:kr,factory:Kt})}function Vt(){return le({phase:"demo_i_only",taskNumber:3,title:"Picture the pattern",run:Tr,factory:Vt})}function Jt(){return le({phase:"demo_i_d",taskNumber:4,title:"Dots and pattern together",run:xr,factory:Jt})}function Xt(){return le({phase:"demo_i_t",taskNumber:5,title:"Tones and pattern together",run:Er,factory:Xt})}const xe=Object.freeze([Object.freeze({id:"ac1_direct_instruction",prompt:"To show you are reading carefully, please type the word <strong>paper</strong> into the box below (lowercase, no punctuation).",expected_answer:"paper"}),Object.freeze({id:"ac2_third_word",prompt:"In the sentence “Click the third word in this sentence”, what is the third word? Type just that word into the box below.",expected_answer:"third"}),Object.freeze({id:"ac3_arrow_mapping",prompt:"When a star points right, you press the right-arrow key. To show you understood, type the word <strong>right</strong> into the box below.",expected_answer:"right"})]);function st(t){return typeof t!="string"?"":t.trim().toLowerCase()}function pe(t){if(!t?.id||!t?.prompt||!t?.expected_answer)throw new Error(`typedAttentionCheckNode: item must have {id, prompt, expected_answer}, got ${JSON.stringify(t)}`);const e=`attention_check_${t.id}`,n={type:X,preamble:"<h2>Quick check</h2>",html:`
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
    `,button_label:"Continue",on_finish:o=>{const r=o.response?.response??"",a=st(r);o.attention_check_id=t.id,o.attention_check_raw=r,o.attention_check_passed=a===st(t.expected_answer)},data:{phase:"attention_check"}};return v(e,()=>pe(t)),b(n,e)}function Ir(t,e=y.attention_checks.instruction_max_failures){const n=(t??[]).filter(a=>a?.phase==="attention_check"),o=n.filter(a=>a.attention_check_passed===!0).length,r=n.filter(a=>a.attention_check_passed===!1).length;return{total:n.length,passed:o,failed:r,exceededThreshold:r>e,threshold:e,ids:n.map(a=>a.attention_check_id)}}function Qt(){const t="attention_check_summary",e={type:X,preamble:"<h2>Thanks — moving on.</h2>",html:`
      <div style="max-width: 36rem; margin: 0 auto;">
        <p>Press <strong>Continue</strong> to proceed to the main task.</p>
      </div>
    `,button_label:"Continue",on_finish:n=>{const o=window.jsPsych?.data?.get().values()??[],r=Ir(o);n.phase="attention_check_summary",n.attention_total=r.total,n.attention_passed=r.passed,n.attention_failed=r.failed,n.attention_excluded=r.exceededThreshold,n.attention_threshold=r.threshold}};return v(t,Qt),b(e,t)}const lt=Object.freeze(["d_only","t_only","i_only","i_d","i_t"]);function ct(t){let e=0,n=0;for(const o of t)typeof o.probe_correct=="boolean"&&(n+=1,o.probe_correct&&(e+=1)),typeof o.star_correct=="boolean"&&(n+=1,o.star_correct&&(e+=1));return{correct:e,total:n,accuracy:n>0?e/n:0}}function ee({trialType:t,trialsPerType:e,sequencePoolLabelPrefix:n,prng:o}={}){if(!lt.includes(t))throw new Error(`singleTypePractice: unknown trialType '${t}'; expected one of ${lt.join(", ")}`);const r=e??y.blocks.practice_trials_per_type,a=o??Ne(),i=bn({blockLabel:"practice",countsByType:{[t]:r},sequencePoolLabelPrefix:n??"practice",runLengthCap:Math.max(1,r),prng:a});return{schedule:i.schedule,trialParams:i.trialParams,nodes:i.nodes}}function Sr({acc:t,passed:e,willRetry:n,criterion:o}){return Or({acc:t,passed:e,willRetry:n,criterion:o})}function Or({acc:t,passed:e,willRetry:n,criterion:o}){const r=Math.round(t.accuracy*100),a=Math.round(o*100),i=e?'<h2 style="color:#0a7c4d;">Practice complete</h2>':'<h2 style="color:#b3261e;">Practice — keep going</h2>',l=e?`<p>You got <strong>${t.correct} / ${t.total}</strong> correct
       (${r}%), above the ${a}% criterion.</p>
       ${L("Press <kbd>Space</kbd> to start the main task.")}`:n?`<p>You got <strong>${t.correct} / ${t.total}</strong> correct
         (${r}%), below the ${a}% criterion. Let's try the practice
         once more.</p>
         ${L("Press <kbd>Space</kbd> to begin.")}`:`<p>You got <strong>${t.correct} / ${t.total}</strong> correct
         (${r}%).</p>
         ${L("Press <kbd>Space</kbd> to start the main task.")}`;return`
    <div style="display: grid; place-items: center; gap: 1rem; max-width: 36rem; margin: 0 auto;">
      ${i}
      ${l}
    </div>
  `}function Zt(){const t=y.blocks.practice_trials_per_type,e=t*5,n=Math.round(y.practice.accuracy_criterion*100),o={type:N,stimulus:`
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
        ${L("Press <kbd>Space</kbd> to begin.")}
      </div>
    `,choices:[" "],data:{phase:"instructions_overview"}};return W(o.data.phase,Zt),U(o)}function Pr({trialsPerType:t,accuracyCriterion:e,maxLoops:n,prng:o}={}){if(xe.length!==3)throw new Error(`assembleInstructionsAndPractice: expected exactly 3 attention-check items, got ${xe.length}`);const[r,a,i]=xe,l=t??y.blocks.practice_trials_per_type,u=e??y.practice.accuracy_criterion,s=n??y.practice.max_loops,d=o??Ne(),c=ee({trialType:"d_only",trialsPerType:l,prng:d}),h=ee({trialType:"t_only",trialsPerType:l,prng:d}),m=ee({trialType:"i_only",trialsPerType:l,prng:d}),_=ee({trialType:"i_d",trialsPerType:l,prng:d}),f=ee({trialType:"i_t",trialsPerType:l,prng:d});let w=0,x=0,g=null;const A={type:N,stimulus:"",choices:"NO_KEYS",trial_duration:0,on_start:()=>{w+=1,x=window.jsPsych?.data?.get().count()??0},data:()=>({phase:"practice_iteration_start",practice_iteration:w})};function D(){const _e="practice_feedback",ve={type:N,stimulus:()=>{const dn=(window.jsPsych?.data?.get().values()??[]).slice(x),Q=ct(dn),ke=Q.accuracy>=u,Ge=!ke&&w<=s;return g={accuracy:Q.accuracy,correct:Q.correct,total:Q.total,passed:ke,willRetry:Ge,attemptCount:w},Sr({acc:Q,passed:ke,willRetry:Ge,criterion:u})},choices:[" "],data:()=>({phase:"practice_feedback",practice_iteration:w,iteration_accuracy:g?.accuracy??null,iteration_correct:g?.correct??null,iteration_total:g?.total??null,iteration_passed:g?.passed??null})};return v(_e,D),b(ve,_e)}const K=D(),ln={timeline:[A,Rt(),Ut(),...c.nodes,Dt(),Kt(),...h.nodes,pe(r),zt(),Vt(),...m.nodes,pe(a),Ht(),Jt(),..._.nodes,Ft(),Xt(),...f.nodes,pe(i),K],loop_function:function(){if($n())return!1;const ve=(window.jsPsych?.data?.get().values()??[]).slice(x);return!(ct(ve).accuracy>=u||w>s)}};return[Zt(),ln,Qt()]}const ge=Object.freeze([Object.freeze({value:"1",label:"1 — Strongly disagree",score:1}),Object.freeze({value:"2",label:"2 — Disagree",score:2}),Object.freeze({value:"3",label:"3 — Neither agree nor disagree",score:3}),Object.freeze({value:"4",label:"4 — Agree",score:4}),Object.freeze({value:"5",label:"5 — Strongly agree",score:5})]);if(ge.length!==5)throw new Error(`STRATEGY_SCALE must have 5 levels, got ${ge.length}`);const ye=Object.freeze([Object.freeze({id:"strategy_q01",section:"memory_only",construct:"geometric_pattern_formation",text:"I tried to connect the remembered dots with imaginary lines to form a shape.",provenance:"round1_kept",round1_evidence:"rho_acc = +0.54, p < .001 (strongest accuracy predictor)"}),Object.freeze({id:"strategy_q02",section:"memory_only",construct:"pattern_recognition",text:"I noticed common shapes or symmetrical arrangements in the dot configurations and remembered them by that shape.",provenance:"round1_kept",round1_evidence:"rho_acc = +0.45, p = .006; rho_dual_cost = -0.48, p = .003"}),Object.freeze({id:"strategy_q03",section:"memory_only",construct:"chunking",text:"I grouped several dots together into clusters to make them easier to remember.",provenance:"round1_kept",round1_evidence:"Structural Chunking composite: GLM β = 0.415, z = 7.68, p < .001"}),Object.freeze({id:"strategy_q04",section:"memory_only",construct:"relational_positioning",text:"I noted spatial relationships between the dots — which were adjacent, opposite, or close to each other.",provenance:"round1_kept",round1_evidence:"rho_dual_cost = -0.34, p = .041"}),Object.freeze({id:"strategy_q05",section:"memory_only",construct:"sequential_pathways",text:"I mentally retraced the dots in the order they appeared, as if drawing a line from one to the next.",provenance:"round1_kept",round1_evidence:"rho_acc = -0.37, p = .024 (negative predictor — informative)"}),Object.freeze({id:"strategy_q06",section:"tone_only",construct:"pitch_labeling",text:'I gave each tone a label (e.g., "high", "medium", "low", or a musical note name) and used the labels to remember the sequence.',provenance:"followup_new",literature_anchor:"Williamson et al. 2010 — verbal/phonological coding of pitch"}),Object.freeze({id:"strategy_q07",section:"tone_only",construct:"auditory_imagery_rehearsal",text:"I silently sang or hummed the tones to myself between hearing them and the tone tests.",provenance:"followup_new",literature_anchor:"Hubbard 2010 — auditory imagery / echoic rehearsal in auditory STM"}),Object.freeze({id:"strategy_q08",section:"tone_only",construct:"contour_encoding",text:'I remembered the tones by their up-and-down direction — e.g., "higher, then lower, then higher".',provenance:"followup_new",literature_anchor:"Dowling 1978 — melodic contour encoding in tonal memory"}),Object.freeze({id:"strategy_q09",section:"tone_only",construct:"tonal_chunking",text:"I grouped adjacent tones into short melodic phrases or pairs to make them easier to remember.",provenance:"followup_new",literature_anchor:"Tone-domain analogue of Chunking (strategy_q03)"}),Object.freeze({id:"strategy_q10",section:"imagery_only",construct:"imagery_vividness",text:"When the stars appeared, I could see the rotated pattern as a clear, vivid mental image — not just a vague sense of where it should be.",provenance:"followup_new",literature_anchor:"Pearson et al. 2015; Marks 1973 (VVIQ); Cui et al. 2007 — vividness as a percept-like vs. propositional distinction in visual imagery, central to imagery-maintenance accounts of dual-task cost"}),Object.freeze({id:"strategy_q11",section:"imagery_only",construct:"continuous_pattern_maintenance",text:"I held the rotated pattern in my mind as a continuous image throughout the trial, rather than recreating it from scratch each time a star appeared.",provenance:"followup_new",literature_anchor:"Cooper 1975; Kosslyn 1980; Logie 1995 — continuous maintenance of a visuospatial image vs. on-demand reconstruction; the within-subject mechanism the I-only condition is designed to isolate"}),Object.freeze({id:"strategy_q12",section:"imagery_only",construct:"imagery_lapse_guessing",text:"I often lost track of where the rotated pattern was and ended up just guessing on the stars.",provenance:"followup_new",literature_anchor:'Construct-validity check on the imagery-maintenance manipulation — endorsement signals the imagery channel failed to hold the rotated pattern long enough to support star judgements, mirroring "give-up" responding in Sperling-style decay paradigms'}),Object.freeze({id:"strategy_q13",section:"i_d",construct:"continuous_visualization",text:"During the image+dot trials, I continued to hold the rotated pattern vividly in mind while responding to the dot tests.",provenance:"round1_kept",round1_evidence:"Regression β = -0.012/Likert point, p = .038 (controlling for single-task accuracy)"}),Object.freeze({id:"strategy_q14",section:"i_d",construct:"selective_attention_switching",text:"During the image+dot trials, I switched my attention between visualizing the rotated pattern and tracking the dots, depending on what was on screen.",provenance:"round1_kept",round1_evidence:"rho_acc = +0.40, p = .015"}),Object.freeze({id:"strategy_q15",section:"i_d",construct:"phase_specific_focus",text:"During the image+dot trials, even when it was not required, I kept a residual image of the rotated pattern in my mind while doing the dot tests.",provenance:"round1_kept",round1_evidence:"rho_dual_cost = +0.23, p = .16 (borderline; retained for theoretical centrality)"}),Object.freeze({id:"strategy_q16",section:"i_t",construct:"continuous_visualization",text:"During the image+tone trials, I continued to hold the rotated pattern vividly in mind while responding to the tone tests.",provenance:"round1_kept",round1_evidence:"Same construct as strategy_q13; applied to the new I+T condition to test cross-modal generalisation of the imagery-maintenance cost"}),Object.freeze({id:"strategy_q17",section:"i_t",construct:"selective_attention_switching",text:"During the image+tone trials, I switched my attention between visualizing the rotated pattern and tracking the tones, depending on the stimulus.",provenance:"round1_kept",round1_evidence:"Same construct as strategy_q14; applied to the new I+T condition"}),Object.freeze({id:"strategy_q18",section:"i_t",construct:"phase_specific_focus",text:"During the image+tone trials, even when it was not required, I kept a residual image of the rotated pattern in my mind while doing the tone tests.",provenance:"round1_kept",round1_evidence:"Same construct as strategy_q15; applied to the new I+T condition"}),Object.freeze({id:"strategy_q19",section:"i_t",construct:"concurrent_auditory_rehearsal",text:"While visualizing the rotated pattern, I silently rehearsed (sang or hummed) the tones at the same time.",provenance:"followup_new",literature_anchor:"Auditory analogue of Continuous Visualization; tests concurrent loading of visuospatial and phonological buffers (Logie 1995; Baddeley 2000)"})]);if(ye.length!==19)throw new Error(`STRATEGY_ITEMS must contain exactly 19 items, got ${ye.length}`);const oe=Object.freeze([Object.freeze({id:"memory_only",phase:"strategy_memory_only",header:"Strategies — dot-memory trials",blurb:"Think about the trials where you only had to remember and judge the locations of <strong>dots</strong> (no pattern, no tones). For each statement, rate how much it describes the way you approached those trials."}),Object.freeze({id:"tone_only",phase:"strategy_tone_only",header:"Strategies — tone-memory trials",blurb:"Think about the trials where you only had to remember and judge a sequence of <strong>tones</strong> (no pattern, no dots). For each statement, rate how much it describes the way you approached those trials."}),Object.freeze({id:"imagery_only",phase:"strategy_imagery_only",header:"Strategies — pattern-imagery trials",blurb:"Think about the trials where you had to <strong>picture the rotated pattern</strong> and judge stars as on-pattern or not on-pattern (no dots, no tones). For each statement, rate how much it describes the way you approached those trials."}),Object.freeze({id:"i_d",phase:"strategy_i_d",header:"Strategies — pattern + dots (dual) trials",blurb:"Think about the trials where you had to <strong>both</strong> picture the rotated pattern <strong>and</strong> remember dot locations at the same time. For each statement, rate how much it describes the way you approached those dual trials."}),Object.freeze({id:"i_t",phase:"strategy_i_t",header:"Strategies — pattern + tones (dual) trials",blurb:"Think about the trials where you had to <strong>both</strong> picture the rotated pattern <strong>and</strong> remember a sequence of tones at the same time. For each statement, rate how much it describes the way you approached those dual trials."})]);if(oe.length!==5)throw new Error(`STRATEGY_SECTIONS must contain exactly 5 sections, got ${oe.length}`);const jr=new Set(oe.map(t=>t.id));for(const t of ye)if(!jr.has(t.section))throw new Error(`STRATEGY_ITEMS: item ${t.id} has unknown section "${t.section}"`);const Lr=(()=>{const t={};for(const e of oe)t[e.id]=[];for(const e of ye)t[e.section].push(e);return Object.freeze(Object.fromEntries(Object.entries(t).map(([e,n])=>[e,Object.freeze(n)])))})();function Ar(t){return Lr[t]??[]}(()=>{const t={};for(const e of ge)t[e.value]=e.score;return Object.freeze(t)})();function en(t){const e=Ar(t.id),n=ge.map(i=>`<option value="${i.value}">${i.label}</option>`).join(""),o=e.map(i=>`
      <tr>
        <td style="padding: 0.75rem 0.75rem 0.75rem 0; vertical-align: top; max-width: 32rem;">
          ${i.text}
        </td>
        <td style="padding: 0.75rem 0; vertical-align: top;">
          <select name="${i.id}" required>
            <option value="">—</option>
            ${n}
          </select>
        </td>
      </tr>`).join(""),r=t.phase,a={type:X,preamble:`
      <div style="max-width: 44rem; margin: 0 auto; text-align: left;">
        <h2 style="text-align: center;">${t.header}</h2>
        <p style="margin: 0.5rem 0 1rem 0;">${t.blurb}</p>
        <p style="margin: 0.5rem 0 1rem 0; font-size: 0.9rem; color: rgba(0,0,0,0.7);">
          There are no right or wrong answers. People use very different
          strategies on these tasks; we want to capture <em>your</em> approach.
          Use <strong>1 (Strongly disagree)</strong> if a statement is the
          opposite of what you did, <strong>5 (Strongly agree)</strong> if it
          captures your approach well, and the middle values for everything
          in between.
        </p>
      </div>
    `,html:`
      <div style="max-width: 46rem; margin: 0 auto;">
        <table style="width: 100%; border-collapse: collapse; text-align: left;">
          ${o}
        </table>
      </div>
    `,button_label:"Continue",on_finish:i=>{i.phase=t.phase,i.strategy_section=t.id,i.strategy_responses=e.reduce((l,u)=>{const s=i.response?.[u.id];return l[u.id]=s===""||s===null||s===void 0?null:String(s),l},{})}};return v(r,()=>en(t)),b(a,r)}function Nr(){return oe.map(t=>en(t))}const J=Object.freeze([Object.freeze({id:"me_q01",gold_msi:"MT01",text:"I engaged in regular, daily practice of a musical instrument (including voice) for ___ years.",options:Object.freeze([Object.freeze({value:"0",label:"0",score:1}),Object.freeze({value:"1",label:"1",score:2}),Object.freeze({value:"2",label:"2",score:3}),Object.freeze({value:"3",label:"3",score:4}),Object.freeze({value:"4-5",label:"4–5",score:5}),Object.freeze({value:"6-9",label:"6–9",score:6}),Object.freeze({value:"10+",label:"10 or more",score:7})])}),Object.freeze({id:"me_q02",gold_msi:"MT02",text:"At the peak of my interest, I practised my primary instrument for ___ hours per day.",options:Object.freeze([Object.freeze({value:"0",label:"0",score:1}),Object.freeze({value:"0.5",label:"0.5",score:2}),Object.freeze({value:"1",label:"1",score:3}),Object.freeze({value:"1.5",label:"1.5",score:4}),Object.freeze({value:"2",label:"2",score:5}),Object.freeze({value:"3-4",label:"3–4",score:6}),Object.freeze({value:"5+",label:"5 or more",score:7})])}),Object.freeze({id:"me_q03",gold_msi:"MT03",text:"I have had formal training in music theory for ___ years.",options:Object.freeze([Object.freeze({value:"0",label:"0",score:1}),Object.freeze({value:"0.5",label:"0.5",score:2}),Object.freeze({value:"1",label:"1",score:3}),Object.freeze({value:"2",label:"2",score:4}),Object.freeze({value:"3",label:"3",score:5}),Object.freeze({value:"4-6",label:"4–6",score:6}),Object.freeze({value:"7+",label:"7 or more",score:7})])}),Object.freeze({id:"me_q04",gold_msi:"MT04",text:"I have had ___ years of formal training on a musical instrument (including voice) during my lifetime — count school music classes <strong>and</strong> private lessons / conservatory together.",options:Object.freeze([Object.freeze({value:"0",label:"0",score:1}),Object.freeze({value:"0.5",label:"0.5",score:2}),Object.freeze({value:"1",label:"1",score:3}),Object.freeze({value:"2",label:"2",score:4}),Object.freeze({value:"3-5",label:"3–5",score:5}),Object.freeze({value:"6-9",label:"6–9",score:6}),Object.freeze({value:"10+",label:"10 or more",score:7})])}),Object.freeze({id:"me_q05",gold_msi:"MT05",text:"I can play ___ musical instruments.",options:Object.freeze([Object.freeze({value:"0",label:"0",score:1}),Object.freeze({value:"1",label:"1",score:2}),Object.freeze({value:"2",label:"2",score:3}),Object.freeze({value:"3",label:"3",score:4}),Object.freeze({value:"4",label:"4",score:5}),Object.freeze({value:"5",label:"5",score:6}),Object.freeze({value:"6+",label:"6 or more",score:7})])}),Object.freeze({id:"me_q06",gold_msi:"MT06",text:"I would consider myself a musician.",options:Object.freeze([Object.freeze({value:"1",label:"1 — Completely disagree",score:1}),Object.freeze({value:"2",label:"2",score:2}),Object.freeze({value:"3",label:"3",score:3}),Object.freeze({value:"4",label:"4 — Neither agree nor disagree",score:4}),Object.freeze({value:"5",label:"5",score:5}),Object.freeze({value:"6",label:"6",score:6}),Object.freeze({value:"7",label:"7 — Completely agree",score:7})])}),Object.freeze({id:"me_q07",gold_msi:"MT07",text:"The musical instrument I play best (including voice), I play at the level of a:",options:Object.freeze([Object.freeze({value:"none",label:"I do not play any instrument",score:1}),Object.freeze({value:"beginner",label:"Beginner",score:2.5}),Object.freeze({value:"intermediate",label:"Intermediate",score:4}),Object.freeze({value:"advanced",label:"Advanced",score:5.5}),Object.freeze({value:"expert",label:"Expert / professional",score:7})])}),Object.freeze({id:"me_q08",gold_msi:null,text:'Can you name a musical note (e.g., "C", "F♯") just from hearing it played, without comparing it to any reference note? (This is sometimes called "absolute pitch" or "perfect pitch".)',options:Object.freeze([Object.freeze({value:"no",label:"No",score:null}),Object.freeze({value:"unsure",label:"I am not sure / sometimes",score:null}),Object.freeze({value:"yes",label:"Yes — reliably",score:null})])})]);if(J.length!==8)throw new Error(`MUSIC_EXPERIENCE_ITEMS must contain exactly 8 items, got ${J.length}`);(()=>{const t={};for(const e of J){t[e.id]={};for(const n of e.options)t[e.id][n.value]=n.score}return Object.freeze(t)})();Object.freeze(J.filter(t=>t.gold_msi!==null).map(t=>t.id));function tn(){const t="music_experience_intro",e={type:X,preamble:`
      <div style="max-width: 40rem; margin: 0 auto; text-align: left;">
        <h2 style="text-align: center;">Music background — 8 quick questions</h2>
        <p>Some of the trials in this experiment involved listening to
        short tones. Different people listen to tones in different ways
        depending on their music background. The next page asks eight
        short questions about music training and instrument practice.</p>
        <p>Please answer based on <strong>what you have actually done</strong>
        (years, hours, instruments) rather than how you compare to professional
        musicians — there are no right or wrong answers, and the scale is
        designed for everyone from people who have never played an instrument
        to people who play professionally.</p>
      </div>
    `,html:'<div style="text-align: center; padding: 1rem 0;"><em>Click Continue to begin.</em></div>',button_label:"Continue",on_finish:n=>{n.phase="music_experience_intro"}};return v(t,tn),b(e,t)}function nn(){const t=J.map(o=>{const r=o.options.map(a=>`<option value="${a.value}">${a.label}</option>`).join("");return`
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
      </tr>`}).join(""),e="music_experience",n={type:X,preamble:`
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
    `,button_label:"Continue",on_finish:o=>{o.phase="music_experience",o.music_experience_responses=J.reduce((r,a)=>{const i=o.response?.[a.id];return r[a.id]=i===""||i===null||i===void 0?null:String(i),r},{})}};return v(e,nn),b(n,e)}function $r(){return[tn(),nn()]}function on(){const t="questionnaire_intro",e={type:N,stimulus:`
      <div style="max-width: 38rem; margin: 0 auto; text-align: left;">
        <h2 style="text-align: center;">One last set of questions</h2>
        <p>You have finished the main task — thank you. Before we save your
        data, we have two short questionnaires:</p>
        <ol>
          <li>A <strong>strategy</strong> questionnaire — five short pages
          (one per trial type) asking how you approached the dots, the
          tones, the pattern, and the two dual-task conditions
          (about 3–4 minutes).</li>
          <li>A <strong>music background</strong> questionnaire — five quick
          questions about your music training and listening (about 1 minute).</li>
        </ol>
        <p>There are no right or wrong answers; people use very different
        strategies on these tasks, and that is exactly what we want to
        measure.</p>
        ${L("Press <kbd>Space</kbd> to begin.")}
      </div>
    `,choices:[" "],data:{phase:"questionnaire_intro"}};return v(t,on),b(e,t)}function Cr(){return[on(),...Nr(),...$r()]}function rn(){const t="main_a_intro",e={type:N,stimulus:`
      <div style="max-width: 36rem; margin: 0 auto;">
        <h2>Practice is over — the main trials start now</h2>
        <div data-voiceover-target>
          <p>Practice is over. The main trials start now. There are two
          blocks of 60 trials. Each block includes a
          ${y.blocks.rest_duration_s}-second rest after trials 20 and 40,
          and there is another ${y.blocks.rest_duration_s}-second rest
          between the two blocks.</p>
          <p>Same controls as the practice: <strong>Yes</strong> /
          <strong>On-pattern</strong> on the
          <kbd>&rarr;</kbd> RIGHT arrow key,
          <strong>No</strong> / <strong>Not on-pattern</strong> on the
          <kbd>&larr;</kbd> LEFT arrow key.</p>
          <p><strong>Important:</strong> Before you press both arrow keys
          to start each trial, look at the label shown above the circle.
          It tells you what type of trial is coming next, so you know
          what to expect.</p>
          ${L("Press <kbd>Space</kbd> to begin Block 1.")}
        </div>
      </div>
    `,choices:[" "],data:{phase:"main_a_intro"},on_load:()=>{pt()}};return v(t,rn),b(e,t)}function an(){const t="main_b_intro",e={type:N,stimulus:`
      <div style="max-width: 36rem; margin: 0 auto;">
        <h2>Main task — Block 2 of 2</h2>
        <div data-voiceover-target>
          <p>Last block. 60 more trials, same controls, with
          ${y.blocks.rest_duration_s}-second rests after trials 20
          and 40.</p>
          ${L("Press <kbd>Space</kbd> to begin Block 2.")}
        </div>
      </div>
    `,choices:[" "],data:{phase:"main_b_intro"}};return v(t,an),b(e,t)}function sn(){const t="end_of_task_intro",e={type:N,stimulus:`
      <div style="max-width: 36rem; margin: 0 auto;">
        <h2>Thank you — you've finished the task</h2>
        <div data-voiceover-target>
          <p>Thank you for completing the trials. Your work is enormously
          helpful to our research, and we are grateful for your time and
          attention.</p>
          <p>A couple of short questionnaires are next. Once you finish
          them, your data will be saved and you will be returned to
          Prolific.</p>
          ${L("Press <kbd>Space</kbd> to continue.")}
        </div>
      </div>
    `,choices:[" "],data:{phase:"end_of_task_intro"},on_load:()=>{wn(),pt()}};return v(t,sn),b(e,t)}const S=un(),Rr=kn();function Dr(){if(ht(),typeof Image<"u"){const t=new Image;t.src="./assets/rotation-arrow.png"}}Dr();const we=hn({display_element:void 0,on_trial_start:Mn(),on_data_update:t=>{mt(t).catch(e=>{console.error("[runner] storage append failed",e),ft(e)})},on_finish:()=>{const t=we.data?.get?.();t&&typeof t.addProperties=="function"&&t.addProperties({session_id:S.params.session_id,prolific_pid:S.params.prolific_pid,study_id:S.params.study_id,is_preview:S.params.is_preview,is_pilot_run:S.is_pilot_run,pilot_label:S.pilot_label,prng_seed_uint32:S.prng_seed_uint32,schema_version:S.schema_version,build_id:S.build_id}),console.info("[runner] session",S,"visibility",qo())}});window.jsPsych=we;new URLSearchParams(window.location.search).has("devnav")&&qn(we);const dt=_n(),zr=[...Vo(),...Pr(),rn(),...dt.mainA.nodes,vn({session:S}),an(),...dt.mainB.nodes,sn(),...Cr(),Tn({session:S}),xn()];Rr.then(()=>we.run(zr)).catch(t=>{console.error("[runner] fatal startup failure",t);const e=document.body;e.innerHTML=`
      <div style="max-width: 36rem; margin: 4rem auto; padding: 2rem; text-align: center;">
        <h2>Unable to start the experiment</h2>
        <p>Your browser is blocking the local storage this study needs. Please
        try a different browser (Chrome, Firefox, or Safari) on a desktop or
        laptop computer, with private/incognito mode disabled.</p>
        <p><small>Error reference: <code>${t&&t.message||"unknown"}</code></small></p>
      </div>
    `});
//# sourceMappingURL=main-CuflfTJf.js.map
