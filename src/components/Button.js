const Button = (props)=>{
    return(
        <button onClick={()=>props.onClick()}>
            Get coordinates
        </button>
    );
}

export default Button