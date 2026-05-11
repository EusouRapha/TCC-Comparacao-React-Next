export function useProxy(pathname: string, search: string): ProxyDecision {
  console.log(
    `Tentando acessar ${pathname} ${search ? `com parametro "${search}"` : ""}...`,
  );
  if (pathname !== "/painel-operacional") {
    return { allow: true };
  }

  const isFuncionario = new URLSearchParams(search).get("funcionario") === "1";

  if (isFuncionario) {
    console.log("Acesso permitido ao painel operacional.");
    return { allow: true };
  }

  console.log(
    "Acesso negado ao painel operacional. Redirecionando para /sobre?acesso=negado.",
  );
  return {
    allow: false,
    redirectPathname: "/sobre",
    redirectSearch: "?acesso=negado",
  };
}

type ProxyDecision =
  | { allow: true }
  | {
      allow: false;
      redirectPathname: string;
      redirectSearch: string;
    };
