interface ItemRepoProps {
    repo: any;
    handleRemoveRepo: (id: any) => void;
}
export function ItemRepo({repo, handleRemoveRepo}: ItemRepoProps) {

    function handleRemove() {
        handleRemoveRepo(repo.id);
    }
    return (
        <div onClick={handleRemove} className="w-[80%]">
            <h3 className="text-[32px] text-[#FAFAFA]">
                {repo.name}
            </h3>
            <p className="text-base text-[#FAFAFA60] mb-5">{repo.full_name}</p>
            <a href={repo.html_url} target="_blank">Ver Repositório</a>
            <a className="text-[#FF0000] mt-5 ml-4" href="#">Remover</a>
            <hr className="text-[#FAFAFA60] my-5 mx-0" />
        </div>
    )
}