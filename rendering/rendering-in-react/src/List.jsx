import PropTypes from 'prop-types';

function List(props) {


    // Filtering low and high calorie fruits
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruits = fruits.filter(fruit => fruit.calories > 100);

    //Ordering fruits based on alphabetical order or no. of calories
    const listItems = props.items;

    listItems.sort((a, b) => a.name.localeCompare(b.name));

    const itemsList = listItems.map((item) => <li key={item.id} className="list-items">{item.name} :&nbsp; <b>{item.calories}</b></li>);

    return (
        <>
            <h2>{props.category}</h2>
                <ol>
                    {itemsList}
                </ol>
        </>
    )
    
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number
    }))
}

List.defaultProps = {
    category: "Category",
    items: []
}

export default List;