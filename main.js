var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 
// counter
const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/dxpratikk/mouse?amount=1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}