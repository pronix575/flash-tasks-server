import jwt from "jsonwebtoken";
import tokenModel from "../models/token-model";

class TokenService {
    generateToken(id: Object) {
        const accessToken = jwt.sign(id, "9FmLYfj8NxHtjDLkLkMGFefj9U96zbRGPYza4vJVYwPBns5H9e", { expiresIn: "15m" });
        const refreshToken = jwt.sign(id, "JEw9cEyegWxNwPTQdhRmPVT2CB9hX7H3qMEJjx3b5YQKRheJCf", { expiresIn: "10d" });
        return {
            accessToken,
            refreshToken
        }
    }

    validateAccessToken(token:string) {
        const id = jwt.verify(token, "9FmLYfj8NxHtjDLkLkMGFefj9U96zbRGPYza4vJVYwPBns5H9e");
        return id;
    }

    validateRefreshToken(token:string) {
        const userData = jwt.verify(token, "JEw9cEyegWxNwPTQdhRmPVT2CB9hX7H3qMEJjx3b5YQKRheJCf");
        return userData;
    }

    async saveToken(userId: any, refreshToken: any) {
        const tokenData = await tokenModel.findOne({user:userId });
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        const token = await tokenModel.create({ user: userId, refreshToken });
        return token;
    }

    async removeToken(refreshToken:string) {
        const tokenData = await tokenModel.deleteOne({refreshToken});
        return tokenData;
    }

}
export default new TokenService();

