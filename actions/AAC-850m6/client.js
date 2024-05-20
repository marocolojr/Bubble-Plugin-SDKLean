function(properties, context) {

  // Carregar dados necessários
  var appToken = properties.token; // Substitua "token" pelo nome do campo que você definiu
  var customerId = properties.customerid; // Substitua "customerid" pelo nome do campo que você definiu

  // Inicializar o SDK da Lean
  Lean.connect({
    app_token: appToken,
    permissions: ["identity", "accounts", "transactions", "balance", "payments"],
    customer_id: customerId,
    sandbox: true,
    success: function(response) {
      // Sucesso: Realize alguma ação com a resposta
      console.log("Conexão bem-sucedida:", response);
      // Você pode adicionar outras ações aqui, como atualizar o estado ou chamar outras funções
    },
    error: function(error) {
      // Erro: Lide com o erro
      console.error("Erro na conexão:", error);
      // Você pode adicionar outras ações aqui, como mostrar uma mensagem de erro ao usuário
    }
  });

}