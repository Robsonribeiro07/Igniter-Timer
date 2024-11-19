import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/theme/global";
import { defaultTheme } from "./styles/theme/default";

import { BrowserRouter} from 'react-router-dom'
import { Router } from "./router";

export function App(){




  return(
    <BrowserRouter>  
  
    <ThemeProvider theme={defaultTheme}>
        <Router />
    <GlobalStyle/>
    </ThemeProvider>
      </BrowserRouter>



  )
}