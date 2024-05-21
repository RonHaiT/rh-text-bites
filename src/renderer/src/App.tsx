import Result from './components/Result'
import Search from './components/Search/inex'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <Search></Search>
      <Result></Result>
    </>
  )
}

export default App
