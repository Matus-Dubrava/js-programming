import React from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"

export default props => {
  return (
    <div>
      <Header title="Index Page Header" />
      <div className="container">
        <div className="row justify-content-md-center">
          <div className={props.column}>{props.children}</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
