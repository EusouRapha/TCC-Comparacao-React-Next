import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  console.log(
    `Tentando acessar ${request.nextUrl.pathname} ${request.nextUrl.search ? `com parametro "${request.nextUrl.search}"` : ""}`,
  );
  const isFuncionario = request.nextUrl.searchParams.get("funcionario") === "1";

  if (isFuncionario) {
    console.log("Acesso permitido ao painel operacional.");
    return NextResponse.next();
  }

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = "/sobre";
  redirectUrl.search = "acesso=negado";

  console.log(
    "Acesso negado ao painel operacional. Redirecionando para /sobre?acesso=negado.",
  );

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ["/painel-operacional/:path*"],
};
