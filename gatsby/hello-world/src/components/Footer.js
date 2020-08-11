import React from "react"

import footerStyles from "./footer.module.css"

export default () => {
  return (
    <footer className={footerStyles.footer}>
      <div className="container ">
        <span className="text-muted">Footer text</span>
      </div>
    </footer>
  )
}
