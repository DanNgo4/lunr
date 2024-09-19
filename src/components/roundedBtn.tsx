const RoundedBtn = ({ first = <></>, 
                      second = <></>, 
                      className = "", 
                      callback = () => {}}) => {
    return (
        <button 
            onClick={callback}
            className={`flex flex-row items-center border rounded-full cursor-pointer ${className}`} 
        >
            {first}
            {second}
        </button>
    )
}

export default RoundedBtn