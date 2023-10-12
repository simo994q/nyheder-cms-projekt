export const getAllArticles = `query getAllArticles {
    articles(orderBy: date_DESC) {
      author
      catcher
      date
      id
      title
      category
      content {
        html
      }
      image {
        url
      }
    }
  }`