const root=document.documentElement;
const themeBtn=document.getElementById("themeBtn");
const langBtn=document.getElementById("langBtn");
const menuBtn=document.getElementById("menuBtn");
const nav=document.getElementById("nav");

const saved=localStorage.getItem("theme");
if(saved==="light"){document.body.classList.add("light");themeBtn.textContent="☀";}
themeBtn.addEventListener("click",()=>{document.body.classList.toggle("light");const light=document.body.classList.contains("light");themeBtn.textContent=light?"☀":"☾";localStorage.setItem("theme",light?"light":"dark")});
menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

langBtn.addEventListener("click",()=>{
  const isEn=langBtn.textContent==="EN";
  langBtn.textContent=isEn?"HI":"EN";
  document.querySelector(".hero-text").textContent=isEn
    ?"मैं responsive websites, mobile apps और practical software solutions design और develop करता हूँ — idea से deployment तक."
    :"I design and develop responsive websites, mobile apps and practical software solutions — from idea to deployment.";
  document.querySelector(".contact-copy h2").innerHTML=isEn?"Have an idea?<br><span class='gradient'>Let's talk.</span>":"कोई idea है?<br><span class='gradient'>बात करते हैं।</span>";
});

window.addEventListener("scroll",()=>{
  const h=document.documentElement;
  document.getElementById("progress").style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+"%";
});
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>obs.observe(el));

document.getElementById("contactForm").addEventListener("submit",e=>{
  e.preventDefault();
  const data=new FormData(e.target);
  const subject=encodeURIComponent("Portfolio enquiry from "+data.get("name"));
  const body=encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`);
  window.location.href=`mailto:your-email@example.com?subject=${subject}&body=${body}`;
  document.getElementById("formNote").textContent="Opening your email client… Replace your-email@example.com in index.html with your real email.";
});
