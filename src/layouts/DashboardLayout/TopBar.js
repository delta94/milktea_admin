import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
// import Logo from '../../components/Logo';
import { useDispatch } from 'react-redux';
import { AuthActions } from 'src/redux/auth';

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    width: 60,
    height: 60,
  },
}));

const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();
  const [notifications] = useState([]);
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    await dispatch(AuthActions.logout());
  };
  return (
    <AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
      <Toolbar>
        <RouterLink to='/'>
          <Box>
            <Typography color='textSecondary' variant='h2'>
              Quản lý nhà hàng
            </Typography>
          </Box>
        </RouterLink>
        <Box flexGrow={1} />
        <Hidden mdDown>
          <IconButton color='inherit'>
            <Badge
              badgeContent={notifications.length}
              color='primary'
              variant='dot'
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color='inherit' onClick={logoutHandler}>
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color='inherit' onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
};

export default TopBar;
