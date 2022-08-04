export type TIndexPagePosts = {
  node: {
    post: {
      author: {
        bio: string
        id: string
        name: string
        photo: {
          url: string
        }
      }
      title: string
      createdAt: string
      slug: string
      excerpt: string
      featuredImage: {
        url: string
      }
      categories: [
        {
          slug: string
          name: string
        }
      ]
    }
    author: {
      bio: string
      id: string
      name: string
      photo: {
        url: string
      }
    }
    title: string
    createdAt: string
    slug: string
    title: string
    excerpt: string
    featuredImage: {
      url: string
    }
    categories: {
      slug: string
      name: string
    }
  }
}
// export type TCategoryPage = {
//   name: string
//   slug: string
//   categoryImage: {
//     url: string
//   }
//   posts: TIndexPagePosts['node']
// }
export type TCategoryPage = {
  name: string
  slug: string
  categoryImage: {
    url: string
  }
  // posts: TIndexPagePosts['node']['post']
  posts: [
    {
      author: {
        bio: string
        id: string
        name: string
        photo: {
          url: string
        }
      }
      title: string
      createdAt: string
      slug: string
      excerpt: string
      featuredImage: {
        url: string
      }
      categories: [
        {
          slug: string
          name: string
        }
      ]
    }
  ]
}

export type TCategoriesPage = {
  name: string
  slug: string
  categoryImage: {
    url: string
  }
  posts: {
    title: string
  }
}
