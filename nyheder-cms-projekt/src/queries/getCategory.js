export const getCategory = `query getCategory($cat: String!) {
    articles(where: {category: $cat}) {
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