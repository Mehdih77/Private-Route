const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

export const getUser = (username, password) =>
  sleep(1000).then(() => {
    if (("7learn" === username) & (1 === password)) {
      return {
        id: 1,
        username,
        email: "info@7learn.com",
      };
    }

    return null;
  });
