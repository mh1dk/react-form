const TableItem = ({item}) => {
    return(
        <tr>
            <th scope="row">{item.id}</th>
            <td>{item.fName}</td>
            <td>{item.lName}</td>
            <td>{item.age}</td>
            <td>{item.position}</td>
        </tr>
    )
}



export default TableItem;