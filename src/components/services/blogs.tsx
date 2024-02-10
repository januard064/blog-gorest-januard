export const BlogServices = () => {
  const getALlPosts = () => {
    return fetch("https://gorest.co.in/public/v2/posts")
      .then((response) => {
        return response.json();
      })
      .catch((err: any) => {
        return Promise.reject(err);
      });
  };

  return {
    getALlPosts,
  };
};
