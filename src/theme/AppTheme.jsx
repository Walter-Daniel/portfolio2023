import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { newTheme } from "./newTheme"

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={newTheme}>
      <CssBaseline />
      { children }
    </ThemeProvider>
  )
}
