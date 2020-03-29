import { UserLoginForm } from "../../types/user/userLogin";
import { User } from "../../types/user/user";

export interface IUserService {
  login: (userLoginForm: UserLoginForm) => Promise<User | null>;
  logout: () => Promise<null>;
}
