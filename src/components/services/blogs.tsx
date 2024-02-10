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

  const getPostDetil = (postId: number) => {
    return fetch(`https://gorest.co.in/public/v2/posts/${postId}`)
    .then((response) => {
      return response.json();
    })
    .catch((err: any) => {
      return Promise.reject(err);
    });
  }

  const getComments = (postId: number) => {
    return fetch(`https://gorest.co.in/public/v2/posts/${postId}/comments`)
    .then((response) => {
      return response.json();
    })
    .catch((err: any) => {
      return Promise.reject(err);
    });
  }


  return {
    getALlPosts,
    getPostDetil,
    getComments
  };
};
