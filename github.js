class GitHub {
  constructor() {
    this.client_id = "d6055e8e1dc6b5400c7f";
    this.client_secret = "b371a216e66110bdae42392e27e9474d34735c96";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `http://api.github.com/users/${user}?cient_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
