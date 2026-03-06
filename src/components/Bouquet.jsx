export default function Bouquet({ show }) {

const branches = [

{
id:1,type:"rose",delay:0.2,rot:-15,scale:1.2,
d:"M200 500 Q120 380 90 290",
endX:90,endY:290,
leaves:[
{x:140,y:410,rot:-40,delay:1.2},
{x:105,y:330,rot:-60,delay:2.0}
]
},

{
id:2,type:"tulip",delay:0.6,rot:-10,scale:1.1,
d:"M200 500 Q150 340 130 200",
endX:130,endY:200,
leaves:[
{x:160,y:420,rot:-25,delay:1.5},
{x:140,y:280,rot:-45,delay:2.2}
]
},

{
id:3,type:"daisy",delay:1.0,rot:-5,scale:1.25,
d:"M200 500 Q180 280 165 130",
endX:165,endY:130,
leaves:[
{x:185,y:380,rot:-20,delay:1.8},
{x:175,y:230,rot:-35,delay:2.6}
]
},

{
id:4,type:"rose",delay:0.8,rot:0,scale:1.2,
d:"M200 500 Q190 350 180 240",
endX:180,endY:240,
leaves:[
{x:195,y:420,rot:-10,delay:1.6},
{x:185,y:320,rot:-30,delay:2.4}
]
},

{
id:5,type:"rose",delay:1.5,rot:0,scale:1.45,
d:"M200 500 Q200 300 200 80",
endX:200,endY:80,
leaves:[
{x:200,y:380,rot:0,delay:2},
{x:200,y:260,rot:20,delay:2.6},
{x:200,y:160,rot:-20,delay:3}
]
},

{
id:6,type:"tulip",delay:0.9,rot:5,scale:1.1,
d:"M200 500 Q210 350 220 230",
endX:220,endY:230,
leaves:[
{x:205,y:420,rot:10,delay:1.7},
{x:215,y:310,rot:30,delay:2.5}
]
},

{
id:7,type:"rose",delay:1.2,rot:10,scale:1.2,
d:"M200 500 Q240 300 250 150",
endX:250,endY:150,
leaves:[
{x:225,y:380,rot:20,delay:2},
{x:245,y:250,rot:40,delay:2.8}
]
},

{
id:8,type:"daisy",delay:0.5,rot:15,scale:1.2,
d:"M200 500 Q270 340 290 210",
endX:290,endY:210,
leaves:[
{x:240,y:420,rot:25,delay:1.4},
{x:275,y:300,rot:45,delay:2.2}
]
},

{
id:9,type:"tulip",delay:0.3,rot:18,scale:1.1,
d:"M200 500 Q300 380 320 270",
endX:320,endY:270,
leaves:[
{x:260,y:420,rot:40,delay:1.3},
{x:305,y:330,rot:55,delay:2.1}
]
}

]

const petals=[...Array(18).keys()]
const sparkles=[...Array(28).keys()]

const butterflies=[
{x:80,y:120,delay:4,scale:.6},
{x:330,y:140,delay:4.5,scale:.5},
{x:220,y:90,delay:5,scale:.7}
]

return(

<div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[420px] h-[600px] pointer-events-none z-10 transition-opacity duration-1000 ${show?"opacity-100":"opacity-0"}`}>

<svg viewBox="0 0 400 600" className="w-full h-full overflow-visible">

<defs>

<style>{`

.stem{
stroke-dasharray:600;
stroke-dashoffset:600;
transition:stroke-dashoffset 3s ease;
}

.stem.show{
stroke-dashoffset:0;
}

.grow{
opacity:0;
transform:scaleY(0);
transform-origin:bottom center;
transition:transform 2s ease,opacity 1.5s ease;
}

.grow.show{
opacity:1;
transform:scaleY(1);
}

@keyframes sway{
0%{transform:rotate(-1.5deg)}
100%{transform:rotate(1.5deg)}
}

.branch{
animation:sway 6s ease-in-out infinite alternate;
}

@keyframes bloom{
0%{transform:scale(.2) rotate(-20deg);opacity:0}
60%{transform:scale(1.1) rotate(5deg)}
100%{transform:scale(1) rotate(0);opacity:1}
}

.bloom{
animation:bloom 1.8s ease forwards;
}

@keyframes petalFall{
0%{transform:translateY(-20px) rotate(0);opacity:0}
20%{opacity:1}
100%{transform:translateY(600px) rotate(360deg);opacity:0}
}

.petal{
animation:petalFall linear infinite;
}

@keyframes sparkle{
0%,100%{opacity:.2;transform:scale(.6)}
50%{opacity:1;transform:scale(1)}
}

.sparkle{
animation:sparkle 2s infinite;
}

@keyframes butterflyFloat{
0%,100%{transform:translateY(0)}
50%{transform:translateY(-15px)}
}

.butterfly{
animation:butterflyFloat 4s ease-in-out infinite;
}

`}</style>

<radialGradient id="petalGrad">
<stop offset="0%" stopColor="#fb7185"/>
<stop offset="100%" stopColor="#be123c"/>
</radialGradient>

<g id="rose">
<g className="bloom">
<path d="M-12 -5 C-25 -15 -25 -35 -5 -38 C10 -38 10 -15 -2 -5 Z" fill="#be123c"/>
<path d="M12 -5 C25 -15 25 -35 5 -38 C-10 -38 -10 -15 2 -5 Z" fill="#be123c"/>
<path d="M-10 -10 C-15 -25 -5 -35 0 -32 C5 -35 15 -25 10 -10 Z" fill="#e11d48"/>
<path d="M-5 -12 C-6 -20 6 -20 5 -12 C4 -5 -4 -5 -5 -12 Z" fill="#fb7185"/>
</g>
<path d="M-8 5 Q0 18 8 5 L0 -5 Z" fill="#15803d"/>
</g>

<g id="tulip">
<g className="bloom">
<path d="M-10 10 C-20 -10 -10 -30 0 -35 C10 -30 20 -10 10 10 Z" fill="#f472b6"/>
</g>
</g>

<g id="daisy">
<g className="bloom">
<circle cx="0" cy="0" r="6" fill="#facc15"/>
<g fill="#fff">
<ellipse rx="4" ry="10" transform="rotate(0)"/>
<ellipse rx="4" ry="10" transform="rotate(45)"/>
<ellipse rx="4" ry="10" transform="rotate(90)"/>
<ellipse rx="4" ry="10" transform="rotate(135)"/>
</g>
</g>
</g>

<g id="leaf">
<path d="M0 0 Q18 -18 35 -35 Q25 -5 0 0 Z" fill="#16a34a"/>
</g>

<g id="butterfly">
<path d="M0 0 Q-10 -10 -18 -5 Q-10 5 0 0 Z" fill="#f472b6"/>
<path d="M0 0 Q10 -10 18 -5 Q10 5 0 0 Z" fill="#fb7185"/>
<ellipse cx="0" cy="0" rx="2" ry="5" fill="#831843"/>
</g>

</defs>

{branches.map(branch=>(

<g
key={branch.id}
className="branch"
style={{transformOrigin:"200px 500px",animationDelay:`${branch.delay}s`}}
>

<path
d={branch.d}
stroke="#16a34a"
strokeWidth="4"
fill="none"
strokeLinecap="round"
className={`stem ${show?"show":""}`}
style={{transitionDelay:`${branch.delay}s`}}
/>

{branch.leaves.map((leaf,i)=>(

<g key={i} transform={`translate(${leaf.x} ${leaf.y})`}>
<g className={`grow ${show?"show":""}`} style={{transitionDelay:`${branch.delay+leaf.delay}s`}}>
<use href="#leaf" transform={`rotate(${leaf.rot}) scale(.8)`}/>
</g>
</g>

))}

<g transform={`translate(${branch.endX} ${branch.endY})`}>
<g className={`grow ${show?"show":""}`} style={{transitionDelay:`${branch.delay+2.2}s`}}>
<use href={`#${branch.type}`} transform={`scale(${branch.scale}) rotate(${branch.rot})`}/>
</g>
</g>

</g>

))}

{petals.map(i=>(
<ellipse
key={i}
cx={Math.random()*400}
cy={-20}
rx="6"
ry="10"
fill="url(#petalGrad)"
className="petal"
style={{
animationDuration:`${6+Math.random()*6}s`,
animationDelay:`${Math.random()*5}s`
}}
/>
))}

{sparkles.map(i=>(
<circle
key={i}
cx={Math.random()*400}
cy={Math.random()*250}
r="2"
fill="#fde68a"
className="sparkle"
style={{animationDelay:`${Math.random()*2}s`}}
/>
))}

{butterflies.map((b,i)=>(
<g
key={i}
transform={`translate(${b.x} ${b.y}) scale(${b.scale})`}
className="butterfly"
style={{animationDelay:`${b.delay}s`}}
>
<use href="#butterfly"/>
</g>
))}

</svg>

</div>

)
}