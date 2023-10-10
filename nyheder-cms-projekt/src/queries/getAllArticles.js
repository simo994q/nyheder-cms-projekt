export const getAllArticles = `query getAllArticles {
    articles(orderBy: date_DESC) {
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