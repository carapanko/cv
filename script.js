const checkbox = document.getElementById('checkbox');

const submitBtn = document.querySelector('button[type=submit]');
/* console.log(submitBtn) */;

const elements = document.querySelectorAll('.element');

const selectColor = document.getElementById('select-color');
console.log(selectColor);

elements.forEach(function (elem) {
    const color = getRandomColor();
    console.log(color);
    elem.style.backgroundColor = color;
    elem.innerHTML = color;
    selectColor.innerHTML = color;
})

elements.forEach(function (elem) {
    elem.addEventListener('click', function () {
        if (this.innerHTML === selectColor.innerHTML) {
            alert('You are Human!');
            checkbox.checked = true;
            submitBtn.disabled = false;
            submitBtn.classList.remove('btn-light');
            submitBtn.classList.add('btn-success');
        } else {
            alert('Please verify that youa re Human!');
            location.reload(true);
        }
    })
})


submitBtn.addEventListener('click', function() {
	window.open('success.html');
});

function getRandomColor () {
    const letter = '0123456789ABCDEF';
    let color = '#';

    for(let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)];
    }

    return color;
}

/* console.log(Math.random() * 16); */