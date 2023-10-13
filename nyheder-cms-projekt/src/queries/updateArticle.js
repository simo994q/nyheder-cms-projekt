export const updateArticle = `mutation updateArticle($author: String!, $catcher: String!, $category: String!, $date: Date!, $title: String!, $id: ID!) {
    updateArticle(
      data: {author: $author, catcher: $catcher, category: $category, date: $date, title: $title}
      where: {id: $id}
    ) {id}
  }
  `