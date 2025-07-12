document.onreadystatechange = function () {
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const loader = document.getElementById('loader');

    if (document.readyState === 'interactive') {
        progressBar.style.width = '50%';
        progressText.innerText = '50%';
    } else if (document.readyState === 'complete') {
        progressBar.style.width = '100%';
        progressText.innerText = '100%';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 300);
    }
};

// Show loader on page transition
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
        if (link.target === '_blank' || link.href.startsWith('http')) return;
        e.preventDefault();
        document.getElementById('loader').style.display = 'flex';
        window.location.href = link.href;
    });
});