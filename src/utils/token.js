class Token {

  constructor(storage) {
    this.storage = storage || localStorage;
  }
  saveToStorage (token) {
    this.storage.setItem("token", token);
  }

  getFromStorage () {
    if (this.storage.getItem("token")) {
      return this.storage.getItem("token");
    } else {
      return "";
    }
  }

  removeFromStorage () {
    this.storage.removeItem("token");
  }

  hasToken () {
    if (this.storage.getItem("token") !== null && this.storage.getItem("token") !== "") {
      return true;
    } else {
      return false;
    }
  }
}

export default Token;
