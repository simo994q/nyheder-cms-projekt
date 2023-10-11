export const getSports = `query MyQuery {
    articles(orderBy: date_DESC, where: {category: Sport}) {
      author
      catcher
      category
      date
      id
      title
      stage
      content {
        html
      }
      image {
        url
      }
    }
  }
  `