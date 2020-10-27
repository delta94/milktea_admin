import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  Box,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {},
  toolbar: {
    height: 64,
  },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

const TopBar = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
      <Toolbar className={classes.toolbar}>
        <RouterLink to='/'>
          <Box className={classes.logoWrapper}>
            <Typography color='textSecondary' variant='h2'>
              Quản lý nhà hàng
            </Typography>
          </Box>
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
};

export default TopBar;
