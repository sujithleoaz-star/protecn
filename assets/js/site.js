/* PRO TEC shared: mobile menu and custom cursor */
var mn=document.getElementById('mn');document.getElementById('bg').onclick=function(){mn.classList.toggle('open')};
mn.querySelectorAll('a').forEach(function(a){a.onclick=function(){mn.classList.remove('open')}});
(function(){
if(!window.matchMedia('(hover:hover) and (pointer:fine)').matches)return;
var dot=document.createElement('div'),ring=document.createElement('div');dot.className='cur-dot';ring.className='cur-ring';
document.body.appendChild(ring);document.body.appendChild(dot);
var mx=0,my=0,rx=0,ry=0,on=false,calm=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
document.addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY;
 if(!on){on=true;rx=mx;ry=my;document.body.classList.add('cc','cur-on')}
 dot.style.transform='translate3d('+mx+'px,'+my+'px,0)';
 ring.classList.toggle('h',!!e.target.closest('a,button,summary,label,.pcard,.pc,input,select,textarea'));});
document.addEventListener('mousedown',function(){ring.classList.add('d')});
document.addEventListener('mouseup',function(){ring.classList.remove('d')});
document.documentElement.addEventListener('mouseleave',function(){document.body.classList.remove('cur-on')});
document.documentElement.addEventListener('mouseenter',function(){if(on)document.body.classList.add('cur-on')});
(function loop(){rx+=(mx-rx)*(calm?1:.18);ry+=(my-ry)*(calm?1:.18);ring.style.transform='translate3d('+rx+'px,'+ry+'px,0)';requestAnimationFrame(loop)})();
})();
