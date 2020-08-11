import React from "react"

import Post from "../components/Post"
import PrimaryLayout from "../layouts/PrimaryLayout"

export default function Home() {
  return (
    <PrimaryLayout column="col-xs-6">
      <Post
        title="This is our first post"
        excerpt="Something to be displaied in the excerpt"
      />
      <Post
        title="This is our first post"
        excerpt="Something to be displaied in the excerpt"
      />
      <Post
        title="This is our first post"
        excerpt="Something to be displaied in the excerpt"
      />
      <Post
        title="This is our first post"
        excerpt="Something to be displaied in the excerpt"
      />
    </PrimaryLayout>
  )
}
