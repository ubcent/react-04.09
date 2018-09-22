import { commentsData, to } from './data';

export default modelComments = {
    async getComments() {
        const comments = await to(() => commentsData);
        return comments;
    },

    async getCommentsById(ids) {
        ids = [].concat(ids);
        const comment = await to(() => commentsData.filter((comment) => ids.indexOf(comment.id) !== -1));
        return comment;
    },
}