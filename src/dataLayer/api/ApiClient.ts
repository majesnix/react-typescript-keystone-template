import ky from "ky";
import Example from "../models/Example";

class ApiClient {
  private ky: typeof ky;

  /**
   * Create our ky instance and add authorization token and prefix Url
   */
  constructor() {
    this.ky = ky.extend({
      prefixUrl: process.env.REACT_APP_API_URL ?? "http://localhost:3000/",
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
   * Fetch examples
   */
  async getExamples(): Promise<Example[]> {
    return this.ky.get("examples").json<Example[]>();
  }
}

export default new ApiClient();
