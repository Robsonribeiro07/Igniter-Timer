import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/theme/global";
import { defaultTheme } from "./styles/theme/default";

import { BrowserRouter} from 'react-router-dom'
import { AppRouter } from "./router";
import { CycleProvider } from "./provider/NewCycleProvider";
export function App(){



 
  return(
    <BrowserRouter>  
    <ThemeProvider theme={defaultTheme}>
   <CycleProvider>

        <AppRouter />
    </CycleProvider>

    <GlobalStyle/>
    </ThemeProvider>
      </BrowserRouter>



  )
}