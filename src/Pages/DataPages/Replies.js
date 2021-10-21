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

fields.set("replyid", 1)
fields.set("commentid", 1)

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
var testLine = '{"name":"John", "age":30, "car":null}'
var testArr = []

//testing, repeat the same line multiple times
for (let i = 0; i < 10; i += 1) {
    testArr[i] = testLine
}

export default function Replies() {
    const theme = createTheme();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            replyid: data.get('replyid'),
            commentid: data.get('commentid'),
        });
    };

    return (
        <Container className="my-5" style={{ maxWidth: "2000px" }}>
            <div className="row">
                <h3>Replies</h3>
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