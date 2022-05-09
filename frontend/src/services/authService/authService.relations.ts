import { authService } from "./authService.models";

authService.outputs.$isAuth.on(authService.inputs.signIn, () => true);
