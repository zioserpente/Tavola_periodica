var numtext=0
var descrizioni = {"H": "1,007","He": "4,002","Li": "6,941","Be": "9,012","B": "10,811","C": "12,010","N": "14,006","O": "15,999","F": "18,998","Ne": "20,179","Na": "22,989","Mg": "24,305","Al": "26,981","Si": "28,085","P": "30,974","S": "32,06","Cl": "35,45","Ar": "39,95","K": "39,098","Ca": "40,078","Sc": "44,956","Ti": "47,867","V": "50,942","Cr": "52,00","Mn": "54,938","Fe": "55,845","Ni": "58,693","Co": "58,933","Cu": "63,546","Zn": "65,39","Ga": "69,723","Ge": "72,63","As": "74,922","Se": "78,96","Br": "79,904","Kr": "83,798","Rb": "85,468","Sr": "87,62","Y": "88,906","Zr": "91,224","Nb": "92,906","Mo": "95,94","Tc": "(98)","Ru": "101,07","Rh": "102,91","Pd": "106,42","Ag": "107,87","Cd": "112,41","In": "114,82","Sn": "118,71","Sb": "121,76","Te": "127,60","I": "126,90","Xe": "131,29","Cs": "132,91","Ba": "137,33","La": "138,91","Ce": "140,12","Pr": "140,91","Nd": "144,24","Pm": "(145)","Sm": "150,36","Eu": "151,96","Gd": "157,25","Tb": "158,93","Dy": "162,50","Ho": "164,93","Er": "167,26", "Tm": "168,93","Yb": "173,05","Lu": "174,97","Hf": "178,49","Ta": "180,95","W": "183,84","Re": "186,21","Os": "190,23","Ir": "192,22","Pt": "195,08","Au": "196,97","Hg": "200,59","Tl": "204,38","Pb": "207,2","Bi": "208,98","Th": "232,04","Pa": "231,04","U": "238,03","Np": "(237)","Pu": "(244)","Am": "(243)","Cm": "(247)","Bk": "(247)","Cf": "(251)","Es": "(252)","Fm": "(257)","Md": "(258)","No": "(259)","Lr": "(262)","Rf": "(267)","Db": "(270)","Sg": "(271)","Bh": "(270)","Hs": "(277)","Mt": "(276)","Ds": "(281)","Rg": "(280)","Cn": "(285)","Nh": "(284)","Fl": "(289)","Mc": "(288)","Lv": "(293)","Ts": "(294)","Og": "(294)","Po": "(209)","At": "(210)","Rn": "(222)","Fr": "(223)","Ra": "(226)","Ac": "(227)"}
var scoperta={"H": "1766","He": "1895","Li": "1817","Be": "1798","B": "1808","C": "1789","N": "1772","O": "1774","F": "1886","Ne": "1898","Na": "1807","Mg": "1808","Al": "1825","Si": "1824","P": "1669","S": "1808","Cl": "1774","Ar": "1894","K": "1807","Ca": "1808","Sc": "1879","Ti": "1791","V": "1801","Cr": "1797","Mn": "1774","Fe": "1808","Ni": "1751","Co": "1735","Cu": "9000 AC","Zn": "1746","Ga": "1875","Ge": "1886","As": "1250 AC","Se": "1817","Br": "1826","Kr": "1898","Rb": "1861","Sr": "1790","Y": "1794","Zr": "1789","Nb": "1801","Mo": "1778","Tc": "1937","Ru": "1844","Rh": "1803","Pd": "1803","Ag": "5000 AC","Cd": "1817","In": "1863","Sn": "5000 AC","Sb": "3000 AC","Te": "1782","I": "1811","Xe": "1898","Cs": "1860","Ba": "1808","La": "1839","Ce": "1803","Pr": "1885","Nd": "1885","Pm": "1947","Sm": "1879","Eu": "1896","Gd": "1880","Tb": "1843","Dy": "1886","Ho": "1878","Er": "1842","Tm": "1879","Yb": "1878","Lu": "1907","Hf": "1922","Ta": "1802","W": "1783","Re": "1908","Os": "1803","Ir": "1803","Pt": "1735","Au": "6000 AC","Hg": "2000 AC","Tl": "1861","Pb": "4000 AC","Bi": "1753","Th": "1828","Pa": "1913","U": "1789","Np": "1940","Pu": "1940","Am": "1944","Cm": "1944","Bk": "1949","Cf": "1950","Es": "1952","Fm": "1952","Md": "1955","No": "1956","Lr": "1961","Rf": "1964", "Db": "1967","Sg": "1974","Bh": "1976","Hs": "1984","Mt": "1982","Ds": "1994","Rg": "1994","Cn": "1996","Nh": "2003","Fl": "1998","Mc": "2003","Lv": "2000","Ts": "2010","Og": "2002", "Po": "1898", "At": "1940", "Rn": "1899", "Fr": "1939", "Ra": "1898", "Ac": "1899"}
//temperatura ebolizione
//temperatura di fusione 
//raggio atomico (facoltativo)
//elettronegatività
//densità
//potete far fare gli elenchi a CHATGPT così ci mettiamo meno tempo
function start(){  //non va modificato
    console.log(Object.keys(descrizioni))
    for (let i = 1; i < 120; i++) {
        if(document.getElementById("d"+i)){
            document.getElementById("d"+i).addEventListener("click", loadinfo)
            console.log("aggiunto eventlistener al div d"+i)}
        else{
            console.log("impossibile aggiungere")}}
    document.getElementById("cr").addEventListener("click",loadinfo)
    for (let i = 1; i < 120; i++) {
        num=document.createElement("h6")
        num.class="numat"
        num.textContent=i+ numtext
        if(document.getElementById("d"+i)){
            num.id=document.getElementById("d"+i).textContent
            document.getElementById("d"+i).appendChild(num)
            if(i==23){
                console.log("BURY THE LIGHT DEEP WITHIIIN")
                numtext=1}
            if(i==55||i==83){
                console.log("BURY THE LIGHT DEEP WITHIIIN")
                numtext=numtext-1}}}}
function loadinfo(){ //inserisce tutti i dati dell'elemento
    testo=this.textContent
    document.getElementById("jesseweneedtocook").textContent= testo.replace(/[^a-zA-Z]/g, '');
    document.getElementById("jesseweneedtocook").style.backgroundcolor=this.style.backgroundColor
    goofyahhlink=this.getAttribute("data-text-value")
    document.getElementById("linkwiki").href="https://it.wikipedia.org/wiki/"+goofyahhlink
    console.log(document.getElementById("infoh1").textContent)
    console.log(document.getElementById("jesseweneedtocook").textContent)
    numeroatomico=document.getElementById(""+document.getElementById("jesseweneedtocook").textContent).textContent
    document.getElementById("comp").href="https://commons.wikimedia.org/wiki/File:Elektronskal_"+numeroatomico+".png#/media/File:Elektronskal_"+numeroatomico+".png"
    textContent="Numero atomico:"+ numeroatomico+ "\n"+"Nome completo:"+goofyahhlink+"\nClasse:"+this.className.replace(/-/g, " ")+"\nPeso atomico:"+desc(r="descrizioni")+"\nAnno scoperta:"+desc(r="anno");
    document.getElementById("infoh1").textContent=textContent}

/*function desc(r){
    console.log("Invio")
    e=vettoreDomande=""
    let domandaUtente=document.getElementById("jesseweneedtocook").textContent;
    if(r=="descrizioni"){vettoreDomande= Object.keys(descrizioni);}
    else{vettoreDomande= Object.keys(scoperta);}
    console.log("r "+r)
    for(i=0;i<vettoreDomande.length;i++){
        if(vettoreDomande[i]==domandaUtente){
            if(r=="descrizioni"){e=Object.values(descrizioni)[i]}
            else{e=Object.values(scoperta)[i]}
        }}return e}*/
function desc(r){//carica una determinata informazione contenuta nei dizionari sopra (come l'anno della scoperta o la mazza atomica)
    console.log("Invio")
    e=vettoreDomande="" 
    let domandaUtente=document.getElementById("jesseweneedtocook").textContent;
    if(r=="descrizioni"){vettoreDomande= Object.keys(descrizioni);}
    else{vettoreDomande= Object.keys(scoperta);}
    console.log("r "+r)
    for(i=0;i<vettoreDomande.length;i++){
        if(vettoreDomande[i]==domandaUtente){
            if(r=="descrizioni"){e=Object.values(descrizioni)[i]}
            else{e=Object.values(scoperta)[i]}
        }}return e}
document.addEventListener("DOMContentLoaded",start)