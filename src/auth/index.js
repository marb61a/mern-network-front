export const signup = user => {
  return fetch(`${process.env.REACT_APP_API_URL}/signup`, {
    method: "POST",
    header: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const signin = user => {
  return fetch(`${process.env.REACT_APP_API_URL}/signin`, {
    method: "POST",
    header: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const authenticate = (jwt, next) => {
  if(typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(jwt));
    next();
  }
};

export const setName = (name, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("username", JSON.stringify(name));
    next();
  }
};

export const signout = next => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
  }
  next();

  return fetch(`${process.env.REACT_APP_API_URL}/signout`, {

  })
    .then()
    .catch(err => console.log(err))
};

export const isAuthenticated = () => {
  if(typeof window == "undefined") {
    return false;
  };

  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};

export const forgotPassword = email => {
  console.log("Email: ", email);

  return fetch(`${process.env.REACT_APP_API_URL}/forgot-password/`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email })
  })
  .then(response => {
    console.log("Forgotten password response:", response);
    return response.json();
  })
  .catch(err => console.log(err));
};
