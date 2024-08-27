const Button = ({text}) => {

    const HandleClickButton = (title) => console.log('HandleClick ' + title)

    return <button onClick={() => HandleClickButton(text)}>{text} </button>
};

export default Button
