import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import bird from './bird.json';
import './App.css';


const Bird =()=>{

    return(
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead className="header">
                    <TableRow>
                        <TableCell align="left" sx={{ fontWeight: "bold" }}>Finnish</TableCell>
                        <TableCell align="left" sx={{ fontWeight: "bold" }}>Swedish</TableCell>
                        <TableCell align="left" sx={{ fontWeight: "bold" }}>English</TableCell>
                        <TableCell align="left" sx={{ fontWeight: "bold" }}>Short</TableCell>
                        <TableCell align="left" sx={{ fontWeight: "bold" }}>Latin</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {bird.sort((a,b) => (a.finnish > b.finnish ? 1 : ((a.finnish < b.finnish) ? -1 : 0))).map((birdname) => (
                        <TableRow
                        key={birdname.short}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {birdname.finnish}
                        </TableCell>
                        <TableCell align="left">{birdname.swedish}</TableCell>
                        <TableCell align="left">{birdname.english}</TableCell>
                        <TableCell align="left">{birdname.short}</TableCell>
                        <TableCell align="left">{birdname.latin}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
        </div>
    )
}

export default Bird;