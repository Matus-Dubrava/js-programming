import React from "react"
import { Link } from "gatsby"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Post from "../components/Post"

export default function Home() {
  return (
    <div>
      <Header title="Index Page Header" />
      <div className="container">
        <div>
          <Link to="/test/">Navigate to test</Link>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-xs-6">
            <Post />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
