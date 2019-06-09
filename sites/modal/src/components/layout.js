import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"

const Layout = ({ children }) => (
  <div>
    <Global
      styles={css`
        body {
          margin: 0;
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        }

        body * {
          box-sizing: inherit;
        }
      `}
    />
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
