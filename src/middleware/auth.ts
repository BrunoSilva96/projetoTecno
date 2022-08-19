import { NextFunction, Request, Response } from "express";
import { jwtService } from "../service/jwtService";

export function ensureAuth(req: Request, res: Response, next: NextFunction) {
  const autorizationHeader = req.headers.authorization;

  if (!autorizationHeader)
    return res
      .status(401)
      .json({ message: "Não autorizado: Nenhum token foi encontrado" });

  const token = autorizationHeader.replace(/Bearer /, "");

  jwtService.verifyToken(token, async (err, decoded) => {
    if (err || typeof decoded === "undefined")
      return res
        .status(401)
        .json({ message: "Não autorizado: Token inválido." });

    next();
  });
}
