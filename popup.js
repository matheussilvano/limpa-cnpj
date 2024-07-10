document.getElementById('cnpjInput').addEventListener('input', function() {
    const cnpj = document.getElementById('cnpjInput').value;
    const cnpjSemPontos = cnpj.replace(/[^\d]/g, '');
    document.getElementById('resultado').textContent = cnpjSemPontos;
    
    // Copia automaticamente o CNPJ para a área de transferência
    if (cnpjSemPontos.length === 14) { // Verifica se o CNPJ está completo
      navigator.clipboard.writeText(cnpjSemPontos).then(function() {
        console.log('CNPJ copiado para a área de transferência');
      }).catch(function(error) {
        console.error('Erro ao copiar para a área de transferência: ', error);
      });
    }
  });
  