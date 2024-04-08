import BaseServices from "./baseService";

class CommentService extends BaseServices {
  async storeComment({ id, data }) {
    return this.post({
      route: `/threads/${id}/comments`,
      data: { content: data },
    });
  }
}

export default CommentService;
