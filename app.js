const body = document.querySelector('body');

window.addEventListener('resize', () => {
    body.setAttribute('style', `background-image: url('https://picsum.photos/${innerWidth}/${innerHeight}');`)
})

function handleModal() {
    const background = document.getElementById('bg');

    background.classList.toggle('non-viewable');
}