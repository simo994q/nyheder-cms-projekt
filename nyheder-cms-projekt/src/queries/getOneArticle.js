export const getOneArticle = `query MyQuery($artId: ID!) {
    articles(where: {id: $artId}) {
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