const tools = {
  porcentaje:{cat:"Calculadoras",icon:"%",name:"Calculadora de porcentajes",desc:"Calcula porcentajes, aumentos, descuentos y qué porcentaje representa una cantidad.",render:()=>`
    <div class="toolbox form">
      <div class="row"><input id="p1" type="number" placeholder="Porcentaje"><input id="p2" type="number" placeholder="Número"></div>
      <button onclick="calcPercent()">Calcular porcentaje</button><div id="out" class="result"></div>
      <hr>
      <div class="row"><input id="d1" type="number" placeholder="Precio original"><input id="d2" type="number" placeholder="Descuento (%)"></div>
      <button onclick="calcDiscount()">Calcular descuento</button><div id="out2" class="result"></div>
    </div>`},
  nota:{cat:"Estudiantes",icon:"★",name:"Calculadora de notas",desc:"Calcula tu nota final con tantos exámenes, trabajos y porcentajes como necesites.",render:()=>`
    <div class="toolbox">
      <p class="muted">Añade cada evaluación y su peso. Los pesos no tienen que ser iguales.</p>
      <div id="grades" class="form" style="margin-top:15px"></div>
      <button onclick="addGrade()">+ Añadir evaluación</button>
      <button onclick="calcGrades()" style="margin-top:8px">Calcular nota final</button>
      <div id="gradeOut" class="result"></div>
    </div>`},
  "nota-aprobar":{cat:"Estudiantes",icon:"✓",name:"¿Qué nota necesito para aprobar?",desc:"Calcula la nota que necesitas en el examen o evaluación restante.",render:()=>`
    <div class="toolbox form">
      <div class="row"><input id="cur" type="number" step=".01" placeholder="Nota actual"><input id="curWeight" type="number" placeholder="% ya evaluado"></div>
      <div class="row"><input id="target" type="number" step=".01" placeholder="Nota final que quieres"><input id="lastWeight" type="number" placeholder="% restante"></div>
      <button onclick="neededGrade()">Calcular nota necesaria</button><div id="neededOut" class="result"></div>
      <div class="notice">También sirve si tienes varias evaluaciones: primero calcula qué peso representa cada una y después puedes añadirlas en la calculadora de notas.</div>
    </div>`},
  edad:{cat:"Calculadoras",icon:"AGE",name:"Calculadora de edad",desc:"Calcula tu edad exacta a partir de tu fecha de nacimiento.",render:()=>`
    <div class="toolbox form"><input id="birth" type="date"><button onclick="ageCalc()">Calcular edad</button><div id="ageOut" class="result"></div></div>`},
  regla:{cat:"Calculadoras",icon:"123",name:"Regla de tres",desc:"Resuelve proporciones de forma rápida.",render:()=>`
    <div class="toolbox form"><div class="three"><input id="ra" type="number" placeholder="A"><input id="rb" type="number" placeholder="B"><input id="rc" type="number" placeholder="C"></div><button onclick="ruleCalc()">Calcular X</button><div id="ruleOut" class="result"></div></div>`},
  palabras:{cat:"Texto",icon:"Aa",name:"Contador de palabras",desc:"Cuenta palabras, caracteres y líneas.",render:()=>`
    <div class="toolbox form"><textarea id="wc" rows="10" placeholder="Pega o escribe tu texto..."></textarea><div class="chips"><span class="chip"><b id="words">0</b> palabras</span><span class="chip"><b id="chars">0</b> caracteres</span><span class="chip"><b id="lines">0</b> líneas</span></div></div>`},
  "imagen-comprimir":{cat:"Imágenes",icon:"IMG",name:"Comprimir imagen",desc:"Reduce el tamaño de una imagen directamente en tu navegador.",render:()=>fileImageUI("compress")},
  "imagen-redimensionar":{cat:"Imágenes",icon:"↔",name:"Redimensionar imagen",desc:"Cambia el ancho y alto de una imagen.",render:()=>fileImageUI("resize")},
  "imagen-jpg":{cat:"Imágenes",icon:"JPG",name:"Convertir imagen a JPG",desc:"Convierte PNG, WebP y otras imágenes a JPG.",render:()=>fileImageUI("jpg")},
  "imagen-png":{cat:"Imágenes",icon:"PNG",name:"Convertir imagen a PNG",desc:"Convierte una imagen a PNG.",render:()=>fileImageUI("png")},
  "imagen-pdf":{cat:"PDF",icon:"PDF",name:"Imagen → PDF",desc:"Convierte imágenes a un PDF desde tu navegador.",render:()=>fileImageUI("pdf")},
  "qr":{cat:"Generadores",icon:"QR",name:"Generador de códigos QR",desc:"Crea un código QR gratis.",render:()=>`<div class="toolbox form"><input id="qrtext" placeholder="Texto, enlace, Wi‑Fi..."><button onclick="makeQR()">Generar QR</button><div id="qrcode" style="padding:20px;text-align:center"></div></div>`},
  "conversor-longitud":{cat:"Conversores",icon:"cm",name:"Conversor de longitud",desc:"Convierte metros, kilómetros, centímetros, pulgadas y pies.",render:()=>`
    <div class="toolbox form"><div class="row"><input id="len" type="number" placeholder="Cantidad"><select id="from"><option value="m">Metros</option><option value="km">Kilómetros</option><option value="cm">Centímetros</option><option value="in">Pulgadas</option><option value="ft">Pies</option></select></div><select id="to"><option value="m">Metros</option><option value="km">Kilómetros</option><option value="cm">Centímetros</option><option value="in">Pulgadas</option><option value="ft">Pies</option></select><button onclick="lengthCalc()">Convertir</button><div id="lenOut" class="result"></div></div>`},
  "conversor-temperatura":{cat:"Conversores",icon:"°C",name:"Conversor de temperatura",desc:"Convierte Celsius, Fahrenheit y Kelvin.",render:()=>`
    <div class="toolbox form"><div class="row"><input id="temp" type="number" placeholder="Temperatura"><select id="tempFrom"><option>Celsius</option><option>Fahrenheit</option><option>Kelvin</option></select></div><select id="tempTo"><option>Celsius</option><option>Fahrenheit</option><option>Kelvin</option></select><button onclick="tempCalc()">Convertir</button><div id="tempOut" class="result"></div></div>`},
  "interes-compuesto":{cat:"Finanzas",icon:"€",name:"Calculadora de interés compuesto",desc:"Calcula cuánto puede crecer un ahorro con intereses y aportaciones.",render:()=>`
    <div class="toolbox form"><div class="row"><input id="principal" type="number" placeholder="Capital inicial"><input id="rate" type="number" step=".01" placeholder="Interés anual (%)"></div><div class="row"><input id="years" type="number" placeholder="Años"><input id="monthly" type="number" placeholder="Aportación mensual"></div><button onclick="interestCalc()">Calcular</button><div id="interestOut" class="result"></div></div>`},
  "descuento":{cat:"Finanzas",icon:"%",name:"Calculadora de descuentos",desc:"Calcula precio final y ahorro después de un descuento.",render:()=>`<div class="toolbox form"><input id="price" type="number" placeholder="Precio"><input id="discount" type="number" placeholder="Descuento (%)"><button onclick="discountCalc()">Calcular</button><div id="discountOut" class="result"></div></div>`},
  "fecha-dias":{cat:"Fecha",icon:"DATE",name:"Calculadora de días entre fechas",desc:"Calcula cuántos días hay entre dos fechas.",render:()=>`<div class="toolbox form"><div class="row"><input id="date1" type="date"><input id="date2" type="date"></div><button onclick="daysCalc()">Calcular diferencia</button><div id="daysOut" class="result"></div></div>`},
  "media":{cat:"Estudiantes",icon:"AVG",name:"Calculadora de media",desc:"Calcula la media de varias notas o números.",render:()=>`<div class="toolbox form"><input id="avg" placeholder="Ejemplo: 7, 8.5, 6, 9"><button onclick="avgCalc()">Calcular media</button><div id="avgOut" class="result"></div></div>`},
  "mcd-mcm":{cat:"Matemáticas",icon:"÷",name:"MCD y MCM",desc:"Calcula el máximo común divisor y mínimo común múltiplo.",render:()=>`<div class="toolbox form"><div class="row"><input id="n1" type="number" placeholder="Número 1"><input id="n2" type="number" placeholder="Número 2"></div><button onclick="gcdLcm()">Calcular</button><div id="gcdOut" class="result"></div></div>`},
  "generador-password":{cat:"Generadores",icon:"🔒",name:"Generador de contraseñas",desc:"Genera contraseñas aleatorias y fuertes en tu navegador.",render:()=>`<div class="toolbox form"><input id="passLen" type="number" min="6" max="100" value="16" placeholder="Longitud"><label><input id="symbols" type="checkbox" checked> Incluir símbolos</label><button onclick="passwordGen()">Generar contraseña</button><div id="passOut" class="result"></div></div>`},
  "json":{cat:"Desarrolladores",icon:"{}",name:"Formateador JSON",desc:"Formatea y valida JSON rápidamente.",render:()=>`<div class="toolbox form"><textarea id="jsonIn" rows="12" placeholder='{"nombre":"Bruno","edad":16}'></textarea><button onclick="formatJSON()">Formatear JSON</button><div id="jsonOut" class="result"></div></div>`},
  "ia":{cat:"IA",icon:"AI",name:"Asistente ToolBox",desc:"Un asistente pensado para ayudarte con cálculos, estudio y herramientas de la web.",render:()=>`
    <div class="toolbox ai">
      <div class="chat" id="chat"><div class="msg bot">Soy el asistente de ToolBox. Puedo ayudarte con notas, porcentajes, reglas de tres, conversiones y explicarte cómo usar nuestras herramientas.</div></div>
      <div class="chatbar"><input id="chatInput" placeholder="Ej.: tengo 7 y 8 y me queda un examen..."><button onclick="askAI()">Enviar</button></div>
      <div class="notice">La versión gratuita inicial usa un asistente local para no exponer claves API en el navegador. Más adelante podemos conectar un backend seguro a Groq u otro proveedor si encontramos una opción gratuita adecuada.</div>
    </div>`}
};

const categories = ["Todas","Estudiantes","Calculadoras","PDF","Imágenes","Texto","Conversores","Finanzas","Generadores","Fecha","Matemáticas","Desarrolladores","IA"];

function home(){
  document.title="ToolBox — Herramientas online gratis";
  app.innerHTML=`<section class="hero">
    <span class="badge">100% GRATIS · SIN REGISTRO</span>
    <h1>Hazlo online.<br><span>Más rápido.</span></h1>
    <p>Calculadoras, herramientas para estudiar, PDF, imágenes, texto, conversiones y un asistente inteligente.</p>
    <div class="search"><input id="search" placeholder="¿Qué necesitas hacer? Ej.: calcular nota, comprimir imagen..."></div>
    <div class="home-cats">${categories.slice(1).map(c=>`<a class="cat" href="#/herramientas?cat=${encodeURIComponent(c)}">${c}</a>`).join("")}</div>
  </section>
  <section class="section"><span class="label">MÁS ÚTILES</span><h2>Herramientas populares</h2><p class="muted">Pensadas para tareas reales y rápidas.</p><div class="grid">${["nota","nota-aprobar","imagen-comprimir","imagen-pdf","qr","palabras","media","ia"].map(card).join("")}</div></section>
  <section class="about"><span class="label">TOOLBOX</span><h2>Una caja de herramientas, no una página de relleno.</h2><p>Cada herramienta tiene su propia página para que podamos crear contenido útil alrededor de búsquedas concretas y mejorar el posicionamiento con el tiempo.</p></section>`;
  document.getElementById("search").addEventListener("input",e=>{
    const q=e.target.value.toLowerCase().trim();
    if(q.length>2){const key=Object.keys(tools).find(k=>(tools[k].name+" "+tools[k].desc).toLowerCase().includes(q));if(key) location.hash="#/"+key;}
  });
}
function card(k){const t=tools[k];return `<a class="card" href="#/${k}"><div class="icon">${t.icon}</div><h3>${t.name}</h3><p>${t.desc}</p></a>`}
function toolsPage(cat){
  let arr=Object.keys(tools).filter(k=>!cat||cat==="Todas"||tools[k].cat===cat);
  app.innerHTML=`<section class="section"><a class="back" href="#/">← Inicio</a><span class="label">DIRECTORIO</span><h2>${cat||"Todas las herramientas"}</h2><p class="muted">Elige una herramienta.</p><div class="grid">${arr.map(card).join("")}</div></section>`;
}
function toolPage(k){const t=tools[k];if(!t)return home();document.title=t.name+" — ToolBox";app.innerHTML=`<section class="tool-page"><a class="back" href="#/herramientas">← Todas las herramientas</a><span class="label">${t.cat}</span><h1>${t.name}</h1><p class="muted">${t.desc}</p>${t.render()}</section>`;if(k==="nota"){for(let i=0;i<2;i++)addGrade()}if(k==="palabras")document.getElementById("wc").addEventListener("input",wordCount)}
function wordCount(){const v=document.getElementById("wc").value;document.getElementById("words").textContent=v.trim()?v.trim().split(/\s+/).length:0;document.getElementById("chars").textContent=v.length;document.getElementById("lines").textContent=v? v.split(/\n/).length:0}
function calcPercent(){out.textContent=`Resultado: ${(Number(p1.value)*Number(p2.value)/100)}`}
function calcDiscount(){const r=Number(d1.value)*(1-Number(d2.value)/100);out2.textContent=`Precio final: ${r.toFixed(2)} · Ahorras: ${(Number(d1.value)-r).toFixed(2)}`}
function addGrade(){const box=document.getElementById("grades"),n=box.children.length+1;box.insertAdjacentHTML("beforeend",`<div class="row grade"><input type="number" step=".01" placeholder="Nota ${n}" class="g"><input type="number" step=".01" placeholder="Peso % (ej. 25)" class="w"></div>`)}
function calcGrades(){const gs=[...document.querySelectorAll(".g")].map(Number),ws=[...document.querySelectorAll(".w")].map(Number);const total=ws.reduce((a,b)=>a+b,0);if(!gs.length||total===0){gradeOut.textContent="Introduce las notas y sus pesos.";return}const r=gs.reduce((s,x,i)=>s+x*ws[i]/100,0);gradeOut.textContent=`Nota final: ${r.toFixed(2)} / 10 · Pesos introducidos: ${total}%`}
function neededGrade(){const c=Number(cur.value),cw=Number(curWeight.value)/100,t=Number(target.value),lw=Number(lastWeight.value)/100;if(!cw||!lw){neededOut.textContent="Completa los porcentajes.";return}const n=(t-c*cw)/lw;neededOut.textContent=`Necesitas sacar ${n.toFixed(2)} sobre 10.`}
function ageCalc(){const d=new Date(birth.value+"T00:00:00"),now=new Date();let y=now.getFullYear()-d.getFullYear(),m=now.getMonth()-d.getMonth();if(m<0||(m===0&&now.getDate()<d.getDate()))y--;ageOut.textContent=`Tienes ${y} años.`}
function ruleCalc(){ruleOut.textContent=`X = ${(Number(rb.value)*Number(rc.value)/Number(ra.value)).toFixed(4)}`}
function fileImageUI(mode){return `<div class="toolbox form"><input id="imgFile" type="file" accept="image/*" onchange="loadImage('${mode}')"><div id="imgOptions"></div><canvas id="canvas" style="display:none"></canvas><div id="imgOut"></div></div>`}
let currentImage=null;
function loadImage(mode){const f=imgFile.files[0];if(!f)return;const im=new Image();im.onload=()=>{currentImage=im;let extra=mode==="resize"?`<div class="row"><input id="iw" type="number" value="${im.width}" placeholder="Ancho"><input id="ih" type="number" value="${im.height}" placeholder="Alto"></div>`:mode==="compress"?`<input id="quality" type="number" min="10" max="100" value="75" placeholder="Calidad %">`:"";imgOptions.innerHTML=extra+`<button onclick="processImage('${mode}')">Procesar y descargar</button>`};im.src=URL.createObjectURL(f)}
function processImage(mode){const c=canvas,ctx=c.getContext("2d");let w=currentImage.width,h=currentImage.height;if(mode==="resize"){w=Number(iw.value);h=Number(ih.value)}c.width=w;c.height=h;ctx.drawImage(currentImage,0,0,w,h);let mime=mode==="png"?"image/png":"image/jpeg",q=mode==="compress"?Number(quality.value)/100:.92;const a=document.createElement("a");a.href=c.toDataURL(mime,q);a.download=`toolbox.${mode==="png"?"png":"jpg"}`;a.click();imgOut.innerHTML="<div class='result'>Listo. La imagen se ha procesado en tu navegador.</div>"}
async function makeQR(){qrcode.innerHTML="";new QRCode(qrcode,{text:qrtext.value,width:220,height:220});}
function lengthCalc(){const base={m:1,km:1000,cm:.01,in:.0254,ft:.3048};lenOut.textContent=`Resultado: ${(Number(len.value)*base[from.value]/base[to.value]).toFixed(6)} ${to.value}`}
function tempCalc(){let x=Number(temp.value),f=tempFrom.value,t=tempTo.value;if(f==="C"){}else if(f==="F")x=(x-32)*5/9;else x=x-273.15;if(t==="F")x=x*9/5+32;else if(t==="Kelvin")x=x+273.15;tempOut.textContent=`Resultado: ${x.toFixed(2)} °${t==="Celsius"?"C":t==="Fahrenheit"?"F":"K"}`}
function interestCalc(){const P=Number(principal.value),r=Number(rate.value)/100/12,n=Number(years.value)*12,m=Number(monthly.value);const fv=P*Math.pow(1+r,n)+m*((Math.pow(1+r,n)-1)/r);interestOut.textContent=`Valor aproximado: ${fv.toFixed(2)}`}
function discountCalc(){const p=Number(price.value),d=Number(discount.value),save=p*d/100;discountOut.textContent=`Precio final: ${(p-save).toFixed(2)} · Ahorras: ${save.toFixed(2)}`}
function daysCalc(){const a=new Date(date1.value),b=new Date(date2.value);daysOut.textContent=`Diferencia: ${Math.abs(Math.round((b-a)/86400000))} días`}
function avgCalc(){const a=avg.value.split(",").map(Number).filter(x=>!isNaN(x));avgOut.textContent=a.length?`Media: ${(a.reduce((x,y)=>x+y,0)/a.length).toFixed(2)}`:"Introduce números separados por comas."}
function gcd(a,b){while(b){[a,b]=[b,a%b]}return Math.abs(a)}function gcdLcm(){const a=Math.abs(Number(n1.value)),b=Math.abs(Number(n2.value)),g=gcd(a,b);gcdOut.textContent=`MCD: ${g}\nMCM: ${a&&b?Math.abs(a*b)/g:0}`}
function passwordGen(){const chars="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789"+(symbols.checked?"!@#$%^&*_-+=":"");let s="";const n=Math.max(6,Math.min(100,Number(passLen.value)||16));for(let i=0;i<n;i++)s+=chars[Math.floor(Math.random()*chars.length)];passOut.textContent=s}
function formatJSON(){try{jsonOut.textContent=JSON.stringify(JSON.parse(jsonIn.value),null,2)}catch(e){jsonOut.textContent="JSON no válido: "+e.message}}
function askAI(){const q=chatInput.value.trim();if(!q)return;const c=document.getElementById("chat");c.insertAdjacentHTML("beforeend",`<div class="msg user">${escapeHTML(q)}</div>`);chatInput.value="";let a=localAI(q);c.insertAdjacentHTML("beforeend",`<div class="msg bot">${escapeHTML(a)}</div>`);c.scrollTop=c.scrollHeight}
function localAI(q){const x=q.toLowerCase();if(x.includes("nota")||x.includes("examen")||x.includes("aprobar"))return"Para calcular una nota final con pesos diferentes, usa “Calculadora de notas”. Puedes añadir tantas evaluaciones como quieras: por ejemplo 25%, 25%, 20% y 30%. Si me das tus notas y porcentajes, puedo indicarte qué cálculo debes hacer.";if(x.includes("porcentaje")||x.includes("%"))return"Usa la Calculadora de porcentajes. Si quieres saber cuánto es X% de una cantidad, introduce X y la cantidad.";if(x.includes("regla de tres"))return"En una regla de tres A:B = C:X, X = (B × C) / A.";if(x.includes("pdf"))return"Tenemos herramientas de PDF previstas para la siguiente ampliación. Mientras tanto, puedes usar Imagen → PDF para convertir imágenes desde el navegador.";if(x.includes("imagen"))return"Prueba Comprimir imagen o Redimensionar imagen. Los archivos se procesan localmente en tu navegador.";return"Puedo ayudarte con notas, porcentajes, reglas de tres, conversiones, texto e imágenes. Prueba a preguntarme algo concreto, por ejemplo: “Tengo 7 y 8 y me queda un examen que vale el 40%, ¿qué necesito para acabar con un 6?”"}
function escapeHTML(s){return s.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function privacy(){app.innerHTML=`<section class="tool-page"><a class="back" href="#/">← Inicio</a><span class="label">PRIVACIDAD</span><h1>Privacidad</h1><p class="muted">Esta página es un borrador inicial. Antes de monetizar con publicidad añadiremos una política de privacidad, cookies y las páginas legales necesarias para cumplir las condiciones aplicables.</p></section>`}
function router(){const raw=location.hash.slice(1)||"/";if(raw==="/")home();else if(raw==="/herramientas"||raw.startsWith("/herramientas?")){const cat=new URLSearchParams(raw.split("?")[1]||"").get("cat");toolsPage(cat)}else if(raw==="/estudiantes")toolsPage("Estudiantes");else if(raw==="/ia")toolPage("ia");else if(raw==="/privacidad")privacy();else toolPage(raw.slice(1))}
window.addEventListener("hashchange",router);router();