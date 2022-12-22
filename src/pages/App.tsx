import { useState } from "react";
import logo from "../assets/logo-github.png";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { ItemRepo } from "../components/ItemRepo";
import { api } from "../services/api";
function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState<any[]>([]);

  async function handleSearchRepo() {
    const {data} = await api.get(`repos/${currentRepo}`);

    if (data.id) {
      const isExit = repos.find(repo => repo.id === data.id);

      if(!isExit) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo("");
        return;
      }
    }
    alert("Repositório não encontrado!");
  }

  function handleRemoveRepo(id: any) {
    console.log("Removendo registro ", id);
    const repositories = repos.filter(repo => repo.id !== id);
    setRepos(repositories);
  }

  return (
    <div className="w-[100%] h-[90vh] mt-5 mr-0 mb-0 ml-0 flex flex-col items-center justify-start">
      <img src={logo} width={64} height={64} alt="" />
      <Input value={currentRepo} onChange={(e: any) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
    </div>
  )
}

export default App
