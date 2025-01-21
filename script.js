document.getElementById('formularioLogin').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Limpar mensagens de erro anteriores
    document.getElementById('erroEmail').textContent = '';
    document.getElementById('erroSenha').textContent = '';
    document.getElementById('mensagemSucesso').style.display = 'none';
    
    // Obter valores dos campos
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('erroEmail').textContent = 'Por favor, insira um e-mail válido';
        return;
    }
    
    // Validar senha
    if (senha.length < 6) {
        document.getElementById('erroSenha').textContent = 'A senha deve ter pelo menos 6 caracteres';
        return;
    }
    
    // Simulação de envio
    setTimeout(() => {
        const mensagemSucesso = document.getElementById('mensagemSucesso');
        mensagemSucesso.textContent = 'Login realizado com sucesso!';
        mensagemSucesso.style.display = 'block';
        
        // Limpar formulário
        document.getElementById('formularioLogin').reset();
    }, 1000);
}); 