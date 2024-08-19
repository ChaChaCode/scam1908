function preloadIframe(url) {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = `${url}?t=${Date.now()}`; // Уникальный параметр
    document.body.appendChild(iframe);
}

window.addEventListener('DOMContentLoaded', function() {
    preloadIframe('boost.html');
    preloadIframe('energy.html');
    preloadIframe('main.html');
    preloadIframe('info.html');
    preloadIframe('invite.html');
    preloadIframe('leadersbord.html');
    preloadIframe('map-top.html');
    preloadIframe('multitap.html');
    preloadIframe('tapbot.html');
    preloadIframe('task.html');
    preloadIframe('upgrade.html');

    const mainFrame = document.getElementById('main-frame');
    if (mainFrame) {
        mainFrame.src = 'index.html';

        mainFrame.onload = function() {
            console.log('Main frame loaded');
            // Используйте метод перенаправления на основной документ
            window.location.href = 'main.html';
        };

        mainFrame.onerror = function() {
            console.error('Error loading main frame');
        };
    } else {
        console.error('Main frame not found');
    }
});
