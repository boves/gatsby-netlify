import * as React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Click on the following link to contact me:</p>
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default IndexPage
