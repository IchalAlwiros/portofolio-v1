import { Layouter } from "./Router/Index";
import { ThemeProvider } from "./Context/Context";
import 'antd/dist/reset.css'


function App() {
  return (
      <ThemeProvider>
        <Layouter/>
      </ThemeProvider>
  )
}

export default App;
