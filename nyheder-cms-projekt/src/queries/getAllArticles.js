// export const getAllArticles = () => {
//     return (
//         `query getAllArticles {
//             articles {
//               author
//               catcher
//               category
//               date
//               id
//               title
//               content {
//                 html
//               }
//             }
//           }
//           `
//     )
// }

export const getAllArticles = `query getAllArticles {
    articles {
      author
      catcher
      category
      date
      id
      title
      content {
        html
      }
    }
  }`