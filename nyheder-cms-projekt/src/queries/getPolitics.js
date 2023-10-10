const getPolitics = `query MyQuery {
    articles(orderBy: date_DESC, where: {category: Politik}) {
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