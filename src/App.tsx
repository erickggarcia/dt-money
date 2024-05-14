import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./themes/defaultTheme"
import { GlobalStyle } from "./styles/global"
import { Transactions } from "./pages/Transactions"
import { TransactionsContextProvider } from "./contexts/TransactionsContext"


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsContextProvider>
        <GlobalStyle />
        <Transactions />
      </TransactionsContextProvider>
    </ThemeProvider>
  )

}
