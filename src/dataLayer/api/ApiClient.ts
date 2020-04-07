import ky from "ky";

class ApiClient {
  private ky: typeof ky;

  /**
   * Create our ky instance and add authorization token and prefix Url
   */
  constructor() {
    this.ky = ky.extend({
      prefixUrl: process.env.REACT_APP_API_URL,
      hooks: {
        beforeRequest: [
          (request) => {
            const token = localStorage.getItem("token");

            if (token != null) {
              request.headers.set("Authorization", `Bearer ${token}`);
            }
          },
        ],
      },
    });
  }

  /**
   * Authenticate the given email and password
   * @param email Email/Username of the Account
   * @param password Password of the Account
   * @returns {Promise} resolves to a JWT or Errors by wrong login data
   *
   */
  async login(email: string, password: string): Promise<string> {
    return this.ky
      .post("users/token", {
        json: {
          email,
          password,
        },
      })
      .json();
  }
}

export default new ApiClient();
