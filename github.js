class GitHub {
  constructor() {
    // leaving this tokens visible is not a problem for this app
    this.client_id = "d6055e8e1dc6b5400c7f";
    this.client_secret = "b371a216e66110bdae42392e27e9474d34735c96";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `http://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const reposRepsonse = await fetch(
      `http://api.github.com/users/${user}/repos?per_page=${
        this.repos_count
      }&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${
        this.client_secret
      }`
    );

    const profile = await profileResponse.json();
    const repos = await reposRepsonse.json();

    return {
      profile,
      repos
    };
  }
}
