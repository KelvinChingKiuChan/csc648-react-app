import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DisplayContents from '../Tables/DisplayContent';

var fields = new Map()

fields.set("starttime", 1)
fields.set("endtime", 1)
fields.set("prizepool", 0)
fields.set("maxcompetitors", 0)
fields.set("entryfee", 0)
fields.set("name", 1)
fields.set("categoryid", 0)
fields.set("picturepath", 0)

var contents = []
var i = 0

for (const [key, value] of fields) {
    var row;
    if (value == 0) {
        row = <TextField
            className="my-2"
            fullWidth
            id={key}
            label={key}
            name={key}
            autoFocus
        />
    } else {
        row = <TextField
            className="my-2"
            required
            fullWidth
            id={key}
            label={key}
            name={key}
            autoFocus
        />
    }
    contents[i++] = row
}

//for testing purpose JSON example
var testLine = '{"name":"John", "age":30, "car":null, "name1":"John", "age2":30, "car3":null, "name2":"John", "age3":30, "car2":null}'
var testArr = []

//testing, repeat the same line multiple times
for (let i = 0; i < 10; i += 1) {
    testArr[i] = testLine
}

export default function Competitions() {
    const theme = createTheme();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            starttime: data.get('starttime'),
            endtime: data.get('endtime'),
            prizepool: data.get('prizepool'),
            maxcompetitors: data.get('maxcompetitors'),
            entryfee: data.get('entryfee'),
            name: data.get('name'),
            categoryid: data.get('categoryid'),
            picturepath: data.get('picturepath'),
        });
    };

    return (
        <Container className="my-5" style={{ maxWidth: "2000px" }}>
            <div className="row">
                <h3>Competitions</h3>
                <hr />
            </div>
            <div className="row">
                <div className="col-xxl-3 ps-xxl-0">
                    <ThemeProvider theme={theme}>
                        <Container component="main" maxWidth="xs" className= "px-xxl-0 ms-xxl-0">
                            <CssBaseline />
                            <Box
                                sx={{
                                    marginTop: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                    {contents}
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 2, mb: 2 }}
                                    >
                                        Submit
                                    </Button>
                                </Box>
                            </Box>
                        </Container>
                    </ThemeProvider>
                </div>
                <div className="col-xxl-9">
                    <DisplayContents arr={testArr} />
                </div>
            </div>
        </Container>
    );
}