import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = ({data}) => {
    return(
        <table className="table">   
            <TableHeader />
            <TableBody  data ={data} />
        </table>

    )
}



export default Table;