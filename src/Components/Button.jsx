const Button = () => {

    let count = 0

    const HandleClickButton = () => {
        count = count + 1
        console.log('HandleClick ' + count)
    }

    return <button onClick={HandleClickButton}>Boton: {count} </button>
};

export default Button
