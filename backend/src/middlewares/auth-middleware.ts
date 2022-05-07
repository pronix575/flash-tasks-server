import tokenService from "../services/tokenService";

export default (req: any, res: any, next: any) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return next(res.status(401).send("НЕ авторизован(хидер пуст)"));
    }
    const accessToken = authHeader.split(" ")[1];
    const userData = tokenService.validateAccessToken(accessToken);
    if (!userData) {
      return next(res.status(401).send("Не валидный accessToken"));
    }
    req.user = userData;
    next();
  } catch (e) {
    res.status(401).send(e);
  }
};
