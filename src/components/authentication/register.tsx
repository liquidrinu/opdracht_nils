import React from 'react';
import { useState } from "react";

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';

// form styling
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

// form data
interface IUser {
    first: string;
    infix?: string;
    last: string;
    email: string;
}

// main function
export default withRouter(
    function Registration() {
        const classes = useStyles();

        const [formData, setFormData] = React.useState<IUser>({
            first: "",
            infix: "",
            last: "",
            email: ""
        });

        // form state variables
        const [submitting, setSubmitting] = useState(false);
        const [succesfullSubmit, setSuccesfullSubmit] = useState(false);

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData({ ...formData, [e.target.name]: e.target.value })
        }

        // POST data to api
        const handleSubmit = (e: any) => {

            e.preventDefault();
            const url = "https://code-application-api.devheld.nl/registration";

            fetch(url, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then((response) => {
                    if (response.status === 200) {
                        setSuccesfullSubmit(true);
                    }
                })
                .catch(() => console.log("error in form submission"));

            // while in transit..
            setSubmitting(true);
        }

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>

                    <Typography component="h1" variant="h5">
                        Register
                    </Typography>

                    <form onSubmit={handleSubmit} className={classes.form}>

                        <TextField
                            autoFocus
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="first"
                            label="First"
                            type="string"
                            id="first"
                            onChange={handleChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="infix"
                            label="Infix"
                            type="string"
                            id="infix"
                            onChange={handleChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="last"
                            label="Last"
                            type="string"
                            id="last"
                            onChange={handleChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            type="email"
                            id="email"
                            label="Email Address"
                            name="email"
                            onChange={handleChange}
                        />
                        <Button
                            disabled={submitting}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Register
                    </Button>
                    </form>

                    {submitting &&
                        <h3>Submitting Form, please wait...</h3>
                    }

                    {succesfullSubmit &&
                        <Redirect to="/bedankpagina" />
                    }

                </div>
            </Container >
        );
    }
)
