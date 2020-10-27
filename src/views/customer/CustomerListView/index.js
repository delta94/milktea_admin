import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MemberActions } from '../../../redux/member';
import { Box, Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const CustomerListView = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [customers] = useState(data);
  useEffect(() => {
    const fetchMember = async () => {
      await dispatch(MemberActions.memberGet());
    };
    fetchMember();
  }, [dispatch]);
  return (
    <Page className={classes.root} title='Customers'>
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results customers={customers} />
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;
