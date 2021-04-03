let offset = 0;
const sliderLine = document.querySelector('.slide-line');
const block = document.querySelector('.comment__switch-block');
let blockWidthComment = document.getElementsByClassName('comment__block')[0].offsetWidth;

document.querySelector('.comment__btn-next').addEventListener('click', function() {
	let activBlock = document.querySelector('.switch-block_activ');
	activBlock.classList.remove('switch-block_activ');
	offset += 1;
	if (offset > 3) {
		offset =0;
	}
	document.querySelectorAll('.comment__switch-block')[offset].classList.add('switch-block_activ');
	sliderLine.style.left = -blockWidthComment*offset + 'px';
});

document.querySelector('.comment__btn-previous').addEventListener('click', function() {
	let activBlock = document.querySelector('.switch-block_activ');
	activBlock.classList.remove('switch-block_activ');
	offset -= 1;
	if (offset < 0) {
		offset =3;
	}
	document.querySelectorAll('.comment__switch-block')[offset].classList.add('switch-block_activ');
	sliderLine.style.left = -blockWidthComment*offset + 'px';
});

/*document.getElementsByClassName('.slide').offsetWidth = blockWidthComment + 'px';
document.getElementById('slide').style.width = document.getElementsByClassName('.slide').offsetWidth;  
console.log(blockWidthComment);
console.log(document.getElementsByClassName('.slide').offsetWidth);*/


