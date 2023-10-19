import './ListItem.css'

function ListItem(props) {
  return (
    <li className="task">
        <input
          type="checkbox"
          defaultChecked={props.task.checked}
          className={props.task.checked && "strike"}
        />
     <span className={props.task.checked && "strike"}> { props.task.title } </span>
        <input type="hidden" name="id" />
        <button className="delete-button" type="submit">Delete</button>
    </li>
  )
}
export default ListItem;
