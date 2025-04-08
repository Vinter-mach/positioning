const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close');

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
});

document.querySelectorAll(".progressBar").forEach(progressbar => {
    let progress = 0;
    const intervalId = setInterval(() => {
        if (progress < 100) {
            progress++;
            let progressLine = progressbar.firstElementChild;
            progressLine.style.width = `${progress}%`;
        } else {
            clearInterval(intervalId);
        }
    }, 52);
});