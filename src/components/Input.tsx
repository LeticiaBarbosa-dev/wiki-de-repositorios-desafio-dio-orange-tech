interface InputProps {
    value: any;
    onChange: any;
}
export function Input({value, onChange}: InputProps) {
    return (
        <div className="border border-[#FAFAFA] rounded-2xl h-[62px] w-[80%] m-5">
            <input value={value} onChange={onChange} type="text" className="bg-transparent border-0 w-[100%] h-[62px] py-0 px-5 text-white outline-none text-xl" /> 
        </div>
    )
}