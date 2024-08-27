import ItemFruit from "./ItemFruit.jsx";

const ListFruits = ({fruits}) => {

    return(
        <ul>
        {
            fruits.map((fruit, index) => (
                <ItemFruit key = {index} fruit = {fruit}></ItemFruit>
            ))
            }
        </ul>
    )
}

export default ListFruits
