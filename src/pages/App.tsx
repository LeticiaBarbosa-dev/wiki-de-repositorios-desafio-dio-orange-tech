import logo from "../assets/logo-github.png";
import { Input } from "../components/Input";
function App() {
  return (
    <div className="w-[100%] h-[90vh] mt-5 mr-0 mb-0 ml-0 flex flex-col items-center justify-start">
      <img src={logo} width={64} height={64} alt="" />
      <Input />
    </div>
  )
}

export default App
