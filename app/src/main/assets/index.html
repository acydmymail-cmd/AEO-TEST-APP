<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>AEO Test & Learning</title>
<style>
*{box-sizing:border-box}
body{margin:0;font-family:Arial,sans-serif;background:#f2f5ff;color:#202747}
header{background:linear-gradient(135deg,#253cbb,#7049d8);color:white;text-align:center;padding:25px 15px 30px;border-radius:0 0 28px 28px}
.logo{width:78px;height:78px;border-radius:23px;background:white;margin:auto auto 10px;display:grid;place-items:center;font-size:42px;box-shadow:0 5px 15px #172b8060}
header h1{font-size:22px;margin:8px 0}
header p{font-size:13px;margin:5px}
main{max-width:550px;margin:auto;padding:18px 15px}
h2{font-size:19px}
.classes,.subjects{display:grid;grid-template-columns:repeat(3,1fr);gap:11px}
button{cursor:pointer}
.classbtn{border:0;border-radius:16px;padding:20px 4px;color:white;font-size:17px;font-weight:bold;background:linear-gradient(145deg,#4775ed,#2945bd);box-shadow:0 4px 12px #253cbb30}
.panel{background:white;border-radius:19px;padding:17px;margin-top:20px;box-shadow:0 4px 15px #253cbb12}
.subject{border:0;border-radius:15px;background:#f5f7ff;padding:15px 3px;color:#26345e;font-weight:bold;font-size:13px}
.subject span{display:block;font-size:26px;margin-bottom:8px}
.topic{width:100%;text-align:left;border:1px solid #e1e6fa;background:#f8f9ff;padding:14px;margin:6px 0;border-radius:12px;color:#26345e;font-size:14px}
.topic:active,.classbtn:active{transform:scale(.98)}
.back{border:0;background:#e6eaff;color:#263c9b;padding:10px 16px;border-radius:10px;font-weight:bold}
#content{margin-top:15px}
#status{background:#e8edff;padding:13px;border-radius:12px;font-size:14px}
footer{text-align:center;padding:22px;color:#8189a5;font-size:12px}
[dir=rtl]{text-align:right}
</style>
</head>
<body>
<header>
 <div class="logo">📚</div>
 <h1>AEO TEST & LEARNING</h1>
 <p>Learn • Practice • Achieve</p>
</header>

<main>
 <div id="home">
  <h2>🎓 Select Your Class</h2>
  <div class="classes">
   <button class="classbtn" onclick="selectClass(3)">Class 3</button>
   <button class="classbtn" onclick="selectClass(4)">Class 4</button>
   <button class="classbtn" onclick="selectClass(5)">Class 5</button>
  </div>
  <div class="panel">
   <h2>📝 Assessment Test</h2>
   <p>Student assessment and automatic results.</p>
   <div id="testInfo">Select a class to start.</div>
  </div>
 </div>

 <div id="content" style="display:none">
  <button class="back" onclick="goHome()">← Home</button>
  <h2 id="heading"></h2>
  <div id="items"></div>
 </div>
</main>

<footer>© AEO Test & Learning</footer>

<script src="slo-data.js"></script>
<script>
let currentClass=null;

function selectClass(c){
 currentClass=c;
 document.getElementById("home").style.display="none";
 document.getElementById("content").style.display="block";
 document.getElementById("heading").innerText="Class "+c+" - Select Subject";
 let items=document.getElementById("items");
 items.innerHTML=`
 <div class="subjects">
 <button class="subject" onclick="selectSubject('English')"><span>📘</span>English</button>
 <button class="subject" onclick="selectSubject('Urdu')"><span>📗</span>Urdu</button>
 <button class="subject" onclick="selectSubject('Mathematics')"><span>🔢</span>Mathematics</button>
 </div>`;
}

function selectSubject(s){
 let topics=window.SLO_DATA && window.SLO_DATA[currentClass] && window.SLO_DATA[currentClass][s];
 document.getElementById("heading").innerText="Class "+currentClass+" - "+s;
 let items=document.getElementById("items");
 if(!topics){
  items.innerHTML='<p id="status">SLO data load nahi hua. File location check karein.</p>';
  return;
 }
 items.innerHTML=topics.map((t,i)=>
 `<button class="topic" onclick="openTopic(${i},'${s}')">📖 ${i+1}. ${t}</button>`
 ).join("");
}

function openTopic(i,s){
 let topics=window.SLO_DATA[currentClass][s];
 document.getElementById("heading").innerText=topics[i];
 document.getElementById("items").innerHTML=
 `<div class="panel"><h3>📚 ${topics[i]}</h3>
 <p>Practice questions for this SLO will be added in the next step.</p>
 <p id="status">Class ${currentClass} | ${s}</p></div>`;
}

function goHome(){
 document.getElementById("content").style.display="none";
 document.getElementById("home").style.display="block";
}
</script>
</body>
</html>
