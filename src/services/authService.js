import BaseServices from "./baseService";

class AuthService extends BaseServices {
  async login (data) {
    return await this.post({ route: "/login", data });
  }

  async register (data) {
    return await this.post({ route: "/register", data });
  }
}

export default AuthService;
