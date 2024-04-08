import BaseServices from "./baseService";

class VoteService extends BaseServices {
  async upVoteThread ({ id }) {
    return await this.post({ route: `/threads/${id}/up-vote`, data: {} });
  }

  async downVoteThread ({ id }) {
    return await this.post({ route: `/threads/${id}/down-vote`, data: {} });
  }

  async neutralizeVoteThread ({ id }) {
    return await this.post({ route: `/threads/${id}/neutral-vote`, data: {} });
  }

  async upVoteComment ({ threadId, commentId }) {
    return await this.post({
      route: `/threads/${threadId}/comments/${commentId}/up-vote`,
      data: {},
    });
  }

  async downVoteComment ({ threadId, commentId }) {
    return await this.post({
      route: `/threads/${threadId}/comments/${commentId}/down-vote`,
      data: {},
    });
  }

  async neutralizeVoteComment ({ threadId, commentId }) {
    return await this.post({
      route: `/threads/${threadId}/comments/${commentId}/neutral-vote`,
      data: {},
    });
  }
}

export default VoteService;
