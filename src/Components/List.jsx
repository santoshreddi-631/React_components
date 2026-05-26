function List(props){
    
    const itemsList = props.items;
    const category = props.category;
    const listItems = itemsList.map(item => <li key={item.id}>{item.name} : &nbsp;
                                             <b>{item.cal}</b> </li> );

    return(
        <>
            <h3 className="heading">{category}</h3>
            <ul className="items">{listItems}</ul>
        </>
     );
}
export default List;