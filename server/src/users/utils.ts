import { UserResponseDto } from './dto/user-response.dto';
import { User } from './schemas/user.schema';

export const getUserDto = (user: User): UserResponseDto => {
  return { id: user._id, email: user.email, name: user.name };
};
