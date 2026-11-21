const clone=x=>JSON.parse(JSON.stringify(x));
let data=clone(window.SITE_CONTENT);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function updateText(){document.querySelectorAll('[data-edit]').forEach(el=>{el.textContent=data[el.dataset.edit]??''})}
function renderNews(){document.getElementById('newsCards').innerHTML=(data.news||[]).map(n=>`<article class="news-entry"><div class="news-date">${esc(n.date)}</div><div class="news-story"><div class="news-category">${esc(n.category)}</div><h3>${esc(n.title)}</h3><p>${esc(n.description)}</p>${n.link?`<a class="news-link" href="${esc(n.link)}" target="_blank" rel="noopener noreferrer">READ MORE ↗</a>`:''}</div></article>`).join('')}
const rosterGroups=[{heading:'LEADERSHIP',roles:['Founder','Leader','Co-Leader']},{heading:'STAFF',roles:['Management','Moderator','Event Manager','Social Media Manager']},{heading:'CREATIVE TEAM',roles:['Freestyler','Visual Artist','Editor','Designer','Photographer','Illustrator','Motion Designer']}];
function renderRoster(){const members=(data.roster||[]).flatMap(m=>String(m.role||'Other').split('/').map(role=>({...m,role:role.trim()})));
const sections=rosterGroups.map(g=>`<section class="roster-section ${g.heading.toLowerCase().replaceAll(' ','-')}-section"><h2>${g.heading}</h2><div class="role-grid">${g.roles.map(role=>{const people=members.filter(m=>m.role===role);return `<section class="role-column"><div class="role-heading"><span>${esc(role)}</span><span class="role-count">${people.length}</span></div><div class="role-people">${people.map(m=>`<div class="member-line"><div class="member-avatar"><img src="${esc(m.image||'sun-logo.svg')}" alt="" onerror="this.onerror=null;this.src='sun-logo.svg'"></div><div class="member-details"><strong>${esc(m.name)}</strong><small>${esc(m.tag)}</small></div>${m.link?`<a class="member-social" href="${esc(m.link)}" target="_blank" rel="noopener noreferrer">↗</a>`:''}</div>`).join('')}</div></section>`}).join('')}</div></section>`).join('');
const known=new Set(rosterGroups.flatMap(g=>g.roles));const other=members.filter(m=>!known.has(m.role));document.getElementById('rosterCards').innerHTML=sections+(other.length?`<section class="roster-section"><h2>OTHER CREATORS</h2><div class="role-grid"><section class="role-column">${other.map(m=>`<div class="member-line"><div class="member-avatar"><img src="${esc(m.image||'sun-logo.svg')}" alt=""></div><div class="member-details"><strong>${esc(m.name)}</strong><small>${esc(m.tag)}</small></div></div>`).join('')}</section></div></section>`:'');document.getElementById('filters').style.display='none';}
function navigate(){const page=location.hash.slice(1)||'home';const valid=['home','news','roster','apply'].includes(page)?page:'home';document.querySelectorAll('.page').forEach(p=>p.classList.toggle('active',p.id===valid));document.querySelectorAll('[data-nav]').forEach(a=>a.classList.toggle('active',a.dataset.nav===valid));document.getElementById('navLinks').classList.remove('open');window.scrollTo(0,0)}
let transitionTimer;
let lastPage=(location.hash.slice(1)||'home');
function animatedNavigate(){
 const next=location.hash.slice(1)||'home';
 if(next===lastPage){navigate();return}
 lastPage=next;
 const overlay=document.querySelector('.transition-wipe');
 if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){navigate();return}
 clearTimeout(transitionTimer);
 overlay.classList.remove('running');
 void overlay.offsetWidth;
 overlay.classList.add('running');
 transitionTimer=setTimeout(()=>{navigate()},420);
 setTimeout(()=>overlay.classList.remove('running'),950);
}
window.addEventListener('hashchange',animatedNavigate);document.getElementById('menuBtn').onclick=()=>document.getElementById('navLinks').classList.toggle('open');document.getElementById('year').textContent=new Date().getFullYear();updateText();renderNews();renderRoster();navigate();


// Opening splash: one time per browser tab, with a visible Skip Intro control.
(function(){
 const overlay=document.getElementById('solisIntro');
 if(!overlay)return;
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 let seen=false;
 try{seen=sessionStorage.getItem('solisIntroSeen')==='1'}catch(e){}
 if(reduced||seen){overlay.remove();return}
 let timer;
 function closeIntro(){
   if(overlay.classList.contains('is-closing'))return;
   clearTimeout(timer);
   try{sessionStorage.setItem('solisIntroSeen','1')}catch(e){}
   overlay.classList.add('is-closing');
   window.setTimeout(()=>overlay.remove(),750);
 }
 document.getElementById('skipIntro').addEventListener('click',closeIntro);
 timer=window.setTimeout(closeIntro,2450);
})();
