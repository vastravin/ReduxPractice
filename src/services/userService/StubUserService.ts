import { IUserService } from "./IUserService";
import { UserLoginForm } from "../../types/user/userLogin";
import users from "../../stubs/users.json";
import { User } from "../../types/user/user";
import { injectable } from "inversify";

@injectable()
export class StubUserService implements IUserService {
  async login(userLoginForm: UserLoginForm): Promise<User | null> {
    const user: User | undefined = users.find(
      u =>
        u.userName === userLoginForm.userName &&
        u.password === userLoginForm.password
    );

    if (!user) {
      return null;
    }

    return user;
  }

  async logout(): Promise<null> {
    window.console.log("User logged out");

    return null;
  }
}
