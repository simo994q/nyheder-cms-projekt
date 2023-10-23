export const getSociety = `query MyQuery {
    articles(orderBy: date_DESC, where: {category: Samfund}) {
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