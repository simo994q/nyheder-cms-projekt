export const getAllArticles = `query getAllArticles {
    articles {
      author
      catcher
      category
      date
      id
      title
      content {
        html
      }
      image {
        url
      }
    }
  }`