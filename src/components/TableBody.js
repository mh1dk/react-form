import TableItem from "./TableItem";

const TableBody = ({data}) => {
    return(
        <tbody>
            {
                data.map(item => {
                    return(
                        <TableItem  item = {item} key={item.id} />
                    )
                })
            }
        </tbody>
    )
}



export default TableBody;