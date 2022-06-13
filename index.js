const axios = require('axios')

class WasteOfSession {
  constructor(username, pass) {
    this.username = username;
    this.pass = pass
  }
  login() {
    axios
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
  post(content) {
    axios
      .post('https://api.wasteof.money/posts', {
        "post": content,
        "repost": null
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
    axios
      .put(`https://api.wasteof.money/posts/${id}`, {
        "post": content,
      },
      {
      headers: {
        "Authorization": this.token
      }
            })
      .then(res => {
        var id = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  reportPost(id, reason) {
    axios
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
        data = res.data
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
        data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  makeWallComment(content, username, parent) {
    axios
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
        data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  toggleLove(id) {
    axios
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
    axios
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
    axios
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
    axios
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
  getSinglePost(id) {
    axios
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
    axios
      .get(`https://api.wasteof.money/posts/${id}/loves/${user}`)
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  getSingleComment(id) {
    axios
      .get(`https://api.wasteof.money/comments/${id}`)
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  getCommentsOfPost(id, page) {
    axios
      .get(`https://api.wasteof.money/posts/${id}/comments?page=${page}`)
      .then(res => {
        var data = res.data
        return data
      })
      .catch(error => {
        throw(error)
      })
  }
  getRepliesOfComment(id, page) {
    axios
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
    axios
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
    axios
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
    axios
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
    axios
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
  getAdminMessages() {
    axios
      .get(`https://api.wasteof.money/messages/admin`, {
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
    axios
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
    axios
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
    axios
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
    axios
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
    axios
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
    axios
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
    axios
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
    axios
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
    axios
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
    axios
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
    axios
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
    axios
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
    axios
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
    axios
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
    axios
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
    axios
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
    axios
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
    axios
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
    axios
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
}
module.exports = WasteOfSession
