import { Button, TextField, Grid, Paper, AppBar, Typography, Toolbar, Link } from "@material-ui/core";

const Login = ()=>{

    return (<>
      <div>
        <AppBar position="static" alignitems="center" color="primary">
            <Toolbar>
                <Grid container justify="center" wrap="wrap">
                    <Grid item>
                    <Typography variant="h6">Pets Shop</Typography>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
        <br/>
        <Grid container spacing={0} justify="center" styles={{width:'500px'}} direction="row">
            <Grid item>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    spacing={2}
                    className="login-form"
                    styles={{width:'500px'}}
                    >
                   
                    <Grid item>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                    </Grid>
                    <Grid item>
                        <form onSubmit={()=>{console.log('hom');}}>
                            <Grid container direction="column" spacing={2}>
                                <Grid item>
                                <TextField
                                    type="email"
                                    placeholder="Email"
                                    fullWidth
                                    name="username"
                                    variant="outlined"
                                    value={''}
                                    onChange={(event) =>{
                                // this.setState({
                                // [event.target.name]: event.target.value,
                                }}
                    
                                required
                                autoFocus
                                />
                                </Grid>
                                <Grid item>
                                <TextField
                                    type="password"
                                    placeholder="Password"
                                    fullWidth
                                    name="password"
                                    variant="outlined"
                                    // value={this.state.password}
                                    onChange={(event) =>{}}
                                required
                                />
                                </Grid>
                                <Grid item>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    className="button-block"
                                    >
                                Submit
                                </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                    
                </Grid>
            </Grid>
        </Grid>
        <Grid item>
            <Link href="/registration" variant="body2">
                Register ?
            </Link>
        </Grid>
    </div></>)
}

export default Login















