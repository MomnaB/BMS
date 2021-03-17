import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Row, Col } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AddBooks() {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  

  return (
    
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {/* <Paper className={classes.paper}>xs=12</Paper> */}
          <Row>
                <Col sm={12} md={3} className="col-headers">Title</Col>
                <Col sm={12} md={9} >
                  <input type="text" name='name' onChange={(e)=>setTitle(e.target.value)} />
                </Col>
              </Row>

        </Grid>
        <Grid item xs={6}>
          {/* <Paper className={classes.paper}>xs=6</Paper> */}
          <Row>
                <Col sm={12} md={3}  className="col-headers">Body</Col>
                <Col sm={12} md={9}>
                  <textarea 
                  rows='5'
                  style={{width: '100%'}} 
                  type="text" name='email' 
                  onChange={(e)=>setBody(e.target.value)} >
                  </textarea>
                </Col>
              </Row>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
         
      </Grid>
    </div>
  );
}