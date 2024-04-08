import { axiosInstance as axios } from "../config/axiosInstance";
import toast from "react-hot-toast";
import Token from "../utils/token";

class BaseServices {
  headers () {
    return {
      "Content-Type": "application/json",
      Authorization: "Bearer " + new Token().getFromStorage(),
    };
  }

  async get ({ route, query = "" }) {
    try {
      const response = await axios.get(`${route}?${query}`, {
        headers: this.headers(),
      });
      if (response.status === 200) {
        return response;
      } else {
        throw new Error(response.data);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      return error.response;
    }
  }

  async post ({ route, data }) {
    try {
      const response = await axios.post(route, data, {
        headers: this.headers(),
      });
      console.log(response.status);
      if (response.status === 200 || response.status === 201) {
        return response;
      } else {
        throw new Error(response.data);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      return error.response;
    }
  }

  async put ({ route, data, query = "" }) {
    try {
      const response = await axios.put(`${route}?${query}`, data, {
        headers: this.headers(),
      });
      if (response.status === 200) {
        return response;
      } else {
        throw new Error(response.data);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      return error.response;
    }
  }

  async delete ({ route }) {
    try {
      const response = await axios.delete(route, {
        headers: this.headers(),
      });
      if (response.status === 200) {
        return response;
      } else {
        throw new Error(response.data);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      return error.response;
    }
  }
}

export default BaseServices;
