document.getElementById('cnpjInput').addEventListener('input', function() {
    const cnpjs = document.getElementById('cnpjInput').value.split('\n');
    const cnpjsSemPontos = cnpjs.map(cnpj => cnpj.replace(/[^\d]/g, '')).join('\n');
    document.getElementById('resultado').textContent = cnpjsSemPontos;
    
    navigator.clipboard.writeText(cnpjsSemPontos).then(function() {
        console.log('CNPJs copiados para a área de transferência');
    }).catch(function(error) {
        console.error('Erro ao copiar para a área de transferência: ', error);
    });
});
