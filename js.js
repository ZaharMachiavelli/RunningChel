alert("Для бега нажмите стрелку вправо (->), для остановки нажмите пробел");

let man = document.querySelector(".man");
let ground = document.querySelector(".ground");
let cloud1 = document.querySelector(".cloud1");
let cloud2 = document.querySelector(".cloud2");

document.addEventListener("keydown", move);
//document.addEventListener("keyup", stop);

function move(e) {
	if(e.key =='ArrowRight') {
		man.classList.add('run');
		ground.classList.add('run');
		cloud1.classList.add('run');
		cloud2.classList.add('run');
	}

	if(e.keyCode == 32) {
		man.classList.remove('run');
		ground.classList.remove('run');
		cloud1.classList.remove('run');
		cloud2.classList.remove('run');
	}
}

//function stop() {
//		man.classList.remove('run');
//		ground.classList.remove('run');
//		cloud1.classList.remove('run');
//		cloud2.classList.remove('run');
//}
