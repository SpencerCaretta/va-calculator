import Grid from '@material-ui/core/Grid';
import React from 'react';
import './QuestionnairePage.css';
//import ReactDOM from 'react-dom';
//import Button from '@material-ui/core/Button';

  function Results () {
    return (
      <div>
      <Grid container spacing = {24}>
        <Grid item xs={12} id='surveyTitle' ><h4>Results</h4></Grid>
      </Grid>
      <Grid container spacing = {24}>
        <Grid item xs={12} id='surveyTitle' ><h5>You may be eligible for...</h5></Grid>
      </Grid>
      </div>

    );
  }


export default Results;