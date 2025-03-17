function List(props) {
  const itemsList = props.items;
  const category = props.category;

  //   itemsList.sort((a, b) => a.name.localeCompare(b.name));
  //   itemsList.sort((a, b) => a.calorie - b.calorie);

  //   const lowCalorie = itemsList.filter((eachItem) => eachItem.calorie <= 50);

  //   const highCalorie = itemsList.filter((eachItem) => eachItem.calorie >= 50);

  const listItems = itemsList.map((eachItem) => (
    <li key={eachItem.id}>
      {eachItem.name}:
      <em>
        <b>{eachItem.calorie}</b>
      </em>
    </li>
  ));
  return (
    <>
      <h2>{category}</h2>
      <ol>{listItems}</ol>
    </>
  );
}

List.defaultProps = {
  category: "Category",
  items: [],
};
export default List;
