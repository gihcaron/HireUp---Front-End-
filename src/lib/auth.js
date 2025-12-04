// Função para verificar acesso no CLIENT-SIDE
export async function verificarAcessoClient(rolesPermitidas = []) {
  try {
    // Rota da API que retorna o papel do usuário
    const response = await fetch("/api/me");
    const data = await response.json();

    const role = data?.role || null;

    if (!role) {
      window.location.href = "/login";
      return;
    }

    // Permissões do usuário
    const HIERARQUIA = {
      aluno: ["vagas", "perfil"],
      recrutador: ["candidaturas", "gestao", "triagem", "publicar"],
      administrador: [
        "candidaturas",
        "gestao",
        "triagem",
        "publicar",
        "vagas",
        "perfil",
      ],
    };

    const rolesDoUsuario = HIERARQUIA[role] || [];

    // Se o usuário não tem permissão
    if (!rolesPermitidas.some((r) => rolesDoUsuario.includes(r))) {
      window.location.href = "/home";
      return;
    }

    return true;

  } catch (error) {
    console.error("Erro ao verificar acesso no cliente:", error);
    window.location.href = "/login";
  }
}
