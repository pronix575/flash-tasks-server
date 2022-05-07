import User from '../models/user-model';
import bcrypt from "bcryptjs";
import tokenService from "./tokenService";
import tokenModel from '../models/token-model';


class UserService {
  async registration(name: string, email:string,  password: string, confirmationPassword : string) {
    if(password!==confirmationPassword) {
      throw new Error('Пароли не совпадают');
    }

    const canditate = await User.findOne({ name });
    if (canditate) {
      throw new Error('Пользователь с таким именем существует')
    }
    const hashPassword = bcrypt.hashSync(password, 5);
    const user = new User({ name, email, password: hashPassword});
    const tokens = tokenService.generateToken({ id: user._id });

    await user.save();
    await tokenService.saveToken(user._id, tokens.refreshToken);

    return {  ...tokens };

  }



  async login(login: string, password: string) {

    const user = await User.findOne({ login });
    if (!user) {
      throw new Error("User not found");
    }
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      throw new Error("Password is not correct");
    }
    const tokens = tokenService.generateToken({ ...user });

    await tokenService.saveToken(user._id, tokens.refreshToken);

    return {  ...tokens };

  }


  async logout(refreshToken: string) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }


  async refresh(refreshToken: string) {

    if (!refreshToken) {
      throw new Error("Refresh token is not correct");
    }

    const id = tokenService.validateRefreshToken(refreshToken);

    const tokenfromDB = await tokenModel.findOne({ refreshToken });

    if (!id || !tokenfromDB) {
      throw new Error("Refresh token is not found");
    }

    const user = await User.findById(id)
    const tokens = tokenService.generateToken({ ...user });

    await tokenService.saveToken(user._id, tokens.refreshToken);

    return {  ...tokens };
  }

}

export const userService = new UserService();


