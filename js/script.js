// Lógica de Redirecionamento e Interatividade
console.log("Eco-MaxiDeka iniciado com sucesso!");

// Função universal para unificar todas as telas da pasta /pages/
function navigateTo(page) {
  try {
    // Se a página for declarada sem o .html, adiciona automaticamente
    const targetPage = page.endsWith('.html') ? page : `${page}.html`;
    
    // Redireciona na mesma pasta
    window.location.href = `./${targetPage}`;
  } catch (error) {
    console.error('Erro na navegação:', error);
  }
}