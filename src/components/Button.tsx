interface ButtonProps {
    onClick: () => void;
}
export function Button({onClick}: ButtonProps) {
    return(
        <button onClick={onClick} className="bg-#FAFAFA border border-[#FAFAFA] rounded-2xl h-[62px] w-[80%] m-5 hover:bg-[]#FAFAFA40 cursor-pointer">
            Buscar
        </button>
    )
}