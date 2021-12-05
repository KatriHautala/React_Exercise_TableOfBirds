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

    function createData(finnish, swedish, english,short,latin) {
        return { finnish, swedish,english,short,latin };
      }
      
      const rows = birds.map((bird,index)=>{
          return createData(bird.finnish, bird.swedish, bird.english, bird.short, bird.latin);
      }); 
      
    return(
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow style={{backgroundColor:'lightgray'}}>
                        <TableCell>Finnish</TableCell>
                        <TableCell >Swedish</TableCell>
                        <TableCell >English</TableCell>
                        <TableCell >Short</TableCell>
                        <TableCell >Latin</TableCell>
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
                        <TableCell>{row.short}</TableCell>
                        <TableCell>{row.latin}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
        </div>
    )
}

export default TableExample;