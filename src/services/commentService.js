import BaseServices from "./baseService";

class CommentService extends BaseServices {
  async storeComment ({ id, data }) {
    return this.post(`/threads/${id}/comments`, data);
  }
}

export default CommentService;
