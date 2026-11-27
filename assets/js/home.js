/* PRO TEC home page: hero slider, arrows and enquiry form */
var s=document.querySelectorAll('.slide'),i=0,tm;
function go(n){s[i].classList.remove('on');i=(n+s.length)%s.length;s[i].classList.add('on')}
function run(){clearInterval(tm);tm=setInterval(function(){go(i+1)},4500)}
run();
document.querySelector('.arw.prev').addEventListener('click',function(){go(i-1);run()});
document.querySelector('.arw.next').addEventListener('click',function(){go(i+1);run()});
document.getElementById('f').addEventListener('submit',function(e){e.preventDefault();var v=function(x){return document.getElementById(x).value.trim()};
var t='Hi PRO TEC, I would like a free site inspection.\nName: '+v('n')+'\nMobile: '+v('m')+'\nProduct: '+v('p')+(v('l')?'\nLocation: '+v('l'):'')+(v('t')?'\nMessage: '+v('t'):'');
window.open('https://wa.me/919344488088?text='+encodeURIComponent(t),'_blank','noopener')});
