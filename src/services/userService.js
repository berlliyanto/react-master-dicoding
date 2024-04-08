import BaseServices from "./baseService";

class UserService extends BaseServices {
  async indexUsers () {
    return await this.get({ route: "/users" });
  }

  async profile () {
    return await this.get({ route: "/users/me" });
  }
}

export default UserService;
