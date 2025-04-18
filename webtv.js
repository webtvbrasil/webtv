// ondemand.js
(function() {
    // ObtÃ©m os parÃ¢metros do elemento script
    const scriptElement = document.currentScript;
    const vodParam = scriptElement.getAttribute('data-vod');
    const idParam = scriptElement.getAttribute('data-id');
    const detParam = scriptElement.getAttribute('data-det');
    const width = scriptElement.getAttribute('data-width');
    const height = scriptElement.getAttribute('data-height');
    
    // Cria o iframe com os parÃ¢metros
    const iframe = document.createElement('iframe');
    iframe.src = `https://app.multisocial.com.br/unitv/tv.php?canal=${encodeURIComponent(vodParam)}&id=${encodeURIComponent(idParam)}&det=${encodeURIComponent(detParam)}&ref=${encodeURIComponent(window.location.href)}`;
    iframe.style.width = width;
    iframe.style.height = height;
    iframe.frameBorder = '0';
    iframe.allowFullscreen = true;
    
    // Adiciona o iframe ao container
    const container = document.getElementById('player-container') || document.body;
    container.appendChild(iframe);
    
    // Tratamento de erro bÃ¡sico
    iframe.onerror = function() {
        container.innerHTML = `
            <div style="color: red; text-align: center; padding: 20px;">
                <h2>Erro ao carregar o contedo</h2>
                <p>Por favor, verifique os parÃ¢metros e tente novamente.</p>
            </div>
        `;
    };
})();
