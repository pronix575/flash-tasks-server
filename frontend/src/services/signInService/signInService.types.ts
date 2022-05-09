import { SignInDto, SignInResponseDto } from "../../api/types";

export interface SignInRequestPayload extends SignInDto {
}

export interface Tokens extends SignInResponseDto {}
