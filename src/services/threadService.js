import BaseServices from "./baseService";

class ThreadService extends BaseServices {
  async indexThreads ({ query = "" }) {
    return await this.get({ route: "/threads", query });
  }

  async showThread ({ id }) {
    return await this.get({ route: `/threads/${id}` });
  }

  async storeThread ({ data }) {
    return await this.post({ route: "/threads", data });
  }
}

export default ThreadService;
