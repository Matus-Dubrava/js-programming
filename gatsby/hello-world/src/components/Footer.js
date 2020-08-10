import React from "react"

import footerStyles from "./footer.module.css"

export default () => {
  return (
    <footer className={footerStyles.footer}>
      <div className="container ">
        <span className="text-muted">This is footer container</span>
      </div>
    </footer>
  )
}
