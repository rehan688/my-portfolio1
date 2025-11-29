// EmailJS
emailjs.init("bMcrI5rjtvZsIAo1c"); // your public key

document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  const params = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };
  emailjs.send("service_610at3t", "template_3d16b9o", params)
  .then(() => { document.getElementById("form-status").textContent = "✅ Message Sent!"; })
  .catch(() => { document.getElementById("form-status").textContent = "❌ Failed!"; });
  this.reset();
});

// Typewriter effect
const taglines = ["Frontend Developer", "UI/UX Designer", "Creative Coder"];
let i=0,j=0;
const taglineEl = document.querySelector(".tagline");
function type(){ if(j<taglines[i].length){ taglineEl.textContent+=taglines[i][j]; j++; setTimeout(type,80); } else setTimeout(erase,1200); }
function erase(){ if(j>0){ taglineEl.textContent=taglines[i].substring(0,j-1); j--; setTimeout(erase,40); } else { i=(i+1)%taglines.length; setTimeout(type,400); } }
document.addEventListener("DOMContentLoaded",type);

// Reveal sections
function reveal(){ document.querySelectorAll(".reveal").forEach(el=>{ if(el.getBoundingClientRect().top<window.innerHeight-100) el.classList.add("active"); }); }
window.addEventListener("scroll",reveal);
reveal();
