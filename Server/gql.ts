export function discussionGql(ghDiscussionCategory: string | undefined) {
    return `{
  viewer {
    login
    avatarUrl
  }
  repository(name: "nextjs-typescript-grapQL__blog-project", owner: "bang222") {
    discussions(categoryId:${ghDiscussionCategory}, first: 100) {
      nodes {
        author {
          avatarUrl
          login
          url
        }
        bodyHTML
        bodyText
        title
        url
        createdAt
      }
    }
    labels(first: 100){
      nodes {
        name
      }
    }
  }
}`
}