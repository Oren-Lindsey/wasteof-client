const axios = require('axios')

class WasteOfSession {
  constructor(username, pass) {
    this.username = username;
    this.pass = pass
  }
  login() {
    return axios
      .post('https://api.wasteof.money/session', {
        "username":this.username,
        "password":this.pass
      })
      .then(res => {
        const token = res.data.token
        this.token = token
        return token
      })
      .catch(error => {
        throw(error)
      })
  }
  post(content, repost) {
    return axios
      .post('https://api.wasteof.money/posts', {
        "post": content,
        "repost": repost
      },
      {
      headers: {
        "Authorization": this.token
      }
            })
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  editPost(id, content) {
    return axios
      .put(`https://api.wasteof.money/posts/${id}`, {
        "post": content,
      },
      {
      headers: {
        "Authorization": this.token
      }
            })
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  reportPost(id, reason) {
    return axios
      .post(`https://api.wasteof.money/posts/${id}/report`, {
        "type": "none",
        "reason": reason
      },
      {
      headers: {
        "Authorization": this.token
      }
            })
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  deletePost(id) {
    axios
      .delete(`https://api.wasteof.money/posts/${id}`,
      {
      headers: {
        "Authorization": this.token
      }
            })
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  deleteComment(id) {
    axios
      .delete(`https://api.wasteof.money/comments/${id}`,
      {
      headers: {
        "Authorization": this.token
      }
            })
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  postWallComment(content, username, parent) {
    return axios
      .post(`https://api.wasteof.money/users/${username}/wall`, {
        "content": content,
        "parent": parent
      },
      {
      headers: {
        "Authorization": this.token
      }
            })
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  toggleLove(id) {
    return axios
      .post(`https://api.wasteof.money/posts/${id}/loves`, {
      },
      {
        headers: {
          "Authorization": this.token
        }
            })
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  pinPost(id) {
    return axios
      .post(`https://api.wasteof.money/posts/${id}/pin`, {
      },
      {
        headers: {
          "Authorization": this.token
        }
            })
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  unpinPost(id) {
    return axios
      .post(`https://api.wasteof.money/posts/${id}/unpin`, {
      },
      {
        headers: {
          "Authorization": this.token
        }
            })
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  setBio(content) {
    return axios
      .put(`https://api.wasteof.money/users/${this.username}/bio`, {
        "bio":content
      },
      {
        headers: {
          "Authorization": this.token
        }
            })
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  getPostData(id) {
    return axios
      .get(`https://api.wasteof.money/posts/${id}`)
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  checkIfUserLovedPost(id, user) {
    return axios
      .get(`https://api.wasteof.money/posts/${id}/loves/${user}`)
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  getCommentData(id) {
    return axios
      .get(`https://api.wasteof.money/comments/${id}`)
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  getCommentsOnPost(id, page) {
    return axios
      .get(`https://api.wasteof.money/posts/${id}/comments?page=${page}`)
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  getRepliesToComment(id, page) {
    return axios
      .get(`https://api.wasteof.money/comments/${id}/replies?page=${page}`)
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  getTrendingUsers() {
    return axios
      .get(`https://api.wasteof.money/explore/users/top`)
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  getTrendingPosts(timeframe) {
    return axios
      .get(`https://api.wasteof.money/explore/posts/trending?timeframe=${timeframe}`)
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  getReadMessages() {
    return axios
      .get(`https://api.wasteof.money/messages/read`, {
        headers: {
          "Authorization": this.token
        }
      })
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  getUnreadMessages() {
    return axios
      .get(`https://api.wasteof.money/messages/unread`, {
        headers: {
          "Authorization": this.token
        }
      })
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  getMessagesCount() {
    return axios
      .get(`https://api.wasteof.money/messages/count`, {
        headers: {
          "Authorization": this.token
        }
      })
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  markMessagesAsRead(ids) {
    return axios
      .post(`https://api.wasteof.money/messages/mark/read`, {
        "messages":ids
      },
      {
        headers: {
          "Authorization": this.token
        }
            })
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  markMessagesAsUnread(ids) {
    return axios
      .post(`https://api.wasteof.money/messages/mark/unread`, {
        "messages":ids
      },
      {
        headers: {
          "Authorization": this.token
        }
            })
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  getUsernameFromId(id) {
    return axios
      .get(`https://api.wasteof.money/username-from-id/${id}`)
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  checkUsername(username) {
    return axios
      .get(`https://api.wasteof.money/username-available?username=${username}`)
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  searchUsers(query) {
    return axios
      .get(`https://api.wasteof.money/search/users?q=${query}`)
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  searchPosts(query) {
    return axios
      .get(`https://api.wasteof.money/search/posts?q=${query}`)
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  getCurrentSession() {
    return axios
      .get(`https://api.wasteof.money/session`, {
        headers: {
          "Authorization": this.token
        }
      })
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  logout() {
    return axios
      .delete(`https://api.wasteof.money/session`, {
        headers: {
          "Authorization": this.token
        }
      })
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  getWallComments(username, page) {
    return axios
      .get(`https://api.wasteof.money/users/${username}/wall?page=${page}`)
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  getUserData(username) {
    return axios
      .get(`https://api.wasteof.money/users/${username}`)
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  getFollowersOfUser(username) {
    return axios
      .get(`https://api.wasteof.money/users/${username}/followers`)
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  getFollowingOfUser(username) {
    return axios
      .get(`https://api.wasteof.money/users/${username}/following`)
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  seeIfUserIsFollowingOtherUser(username1, username2) {
    return axios
      .get(`https://api.wasteof.money/users/${username2}/followers/${username2}`)
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  getProfilePicture(username) {
    return axios
      .get(`https://api.wasteof.money/users/${username}/picture`)
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  getBanner(username) {
    return axios
      .get(`https://api.wasteof.money/users/${username}/banner`)
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  getPostsOfUser(username, page) {
    return axios
      .get(`https://api.wasteof.money/users/${username}/posts?page=${page}`)
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  getFeedOfUser(username) {
    return axios
      .get(`https://api.wasteof.money/users/${username}/following/posts`)
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  toggleFollow(username) {
    return axios
      .post(`https://api.wasteof.money/users/${username}/followers`, { 
      },
      {
        headers: {
          "Authorization": this.token
        }
            })
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  postComment(id, content, parent) {
    return axios
      .post(`https://api.wasteof.money/posts/${id}/comments`, {
        "content":content,
        "parent":parent
      },
      {
        headers: {
          "Authorization": this.token
        }
            })
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  postAndLove(content, repost) {
    this.post(content, repost)
      .then(data => {
        this.toggleLove(data.id)
      })
  }
}
module.exports = WasteOfSession;