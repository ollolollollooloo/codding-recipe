import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
  {url:""}
];

export default function TutorialsList({data}: any) {
  const {fetabs, festack, festabs, fesstack} = data

  const getT = async () => {
    let techstack:any = []
    
    festack.os.map((a:any) => {
      festack.framework.map((b:any) => {
        festack.programming_language.map((c:any) => {
          festack.package_installation_process.map((d:any) => {
            festack.framework_in_a_framework.map((e:any) => {
              festack.bundler.map((f:any) => {
                festack.containerized.map((g:any) => {
                  festack.repository.map((h:any) => {
                    
                    techstack.push([a,b,c,d,e,f,g,h])

                  })
                })
              })
            })
          })
        })
      })
    })

    console.log("techstack",techstack)

  }
  // getT()

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>URL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.url}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.url}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
