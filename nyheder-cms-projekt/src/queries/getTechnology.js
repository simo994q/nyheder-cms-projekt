const getTechnology = `query MyQuery {
    articles(orderBy: date_DESC, where: {category: Teknologi}) {
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