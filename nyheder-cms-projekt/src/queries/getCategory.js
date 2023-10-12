export const getCategory = `query getCategory($cat: String!) {
    articles(where: {category: $cat}) {
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