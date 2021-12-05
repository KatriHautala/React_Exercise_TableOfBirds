import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import birds from './bird.json';

const TableExample =()=>{
    //sorting birds by FInnish name
    birds.sort(function(a, b){
        if(a.finnish < b.finnish) { return -1; }
        if(a.finnish > b.finnish) { return 1; }
        return 0;
    })

    function createData(finnish, swedish, english) {
        return { finnish, swedish,english };
      }
      
      const rows = birds.map((bird,index)=>{
          return createData(bird.finnish, bird.swedish, bird.english);
      }); 
      
    //   [
    //     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    //     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    //     createData('Eclair', 262, 16.0, 24, 6.0),
    //     createData('Cupcake', 305, 3.7, 67, 4.3),
    //     createData('Gingerbread', 356, 16.0, 49, 3.9),
    //   ];
      
    return(
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Finnish</TableCell>
                        <TableCell >Swedish</TableCell>
                        <TableCell >English</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell>{row.finnish}</TableCell>
                        <TableCell>{row.swedish}</TableCell>
                        <TableCell>{row.english}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
        </div>
    )
}

export default TableExample;