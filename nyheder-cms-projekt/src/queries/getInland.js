const getInland = `query MyQuery {
    articles(orderBy: date_DESC, where: {category: Indland}) {
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