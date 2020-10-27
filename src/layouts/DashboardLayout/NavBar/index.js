import React, { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles,
  Button,
} from '@material-ui/core';
import {
  BarChart as BarChartIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  Users as UsersIcon,
  Gift,
  PlusSquare,
  ShoppingCart,
  FileText,
} from 'react-feather';
import NavItem from './NavItem';
import { useDispatch } from 'react-redux';
import { AuthActions } from 'src/redux/auth';

const user = {
  avatar: '/static/images/avatar_6.png',
  jobTitle: 'Admin',
  name: 'Katarina Smith',
};

const items = [
  {
    href: '/app/',
    icon: BarChartIcon,
    title: 'Dashboard',
  },
  {
    href: '/app/customers',
    icon: UsersIcon,
    title: 'Thành viên',
  },
  {
    href: '/app/products',
    icon: ShoppingBagIcon,
    title: 'Products',
  },
  {
    href: '/app/orders',
    icon: ShoppingCart,
    title: 'Đơn hàng',
  },
  {
    href: '/app/banners',
    icon: PlusSquare,
    title: 'Banners',
  },
  {
    href: '/app/news',
    icon: FileText,
    title: 'News',
  },
  {
    href: '/app/vouchers',
    icon: Gift,
    title: 'Vouchers',
  },
  {
    href: '/app/settings',
    icon: SettingsIcon,
    title: 'Cài đặt',
  },
];

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)',
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64,
  },
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    await dispatch(AuthActions.logout());
  };
  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box height='100%' display='flex' flexDirection='column'>
      <Box alignItems='center' display='flex' flexDirection='column' p={2}>
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          src={user.avatar}
          to='/app/account'
        />
        <Typography className={classes.name} color='textPrimary' variant='h5'>
          {user.name}
        </Typography>
        <Typography color='textSecondary' variant='body2'>
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
          <Hidden lgUp>
            <Button
              color='primary'
              size='small'
              variant='contained'
              onClick={logoutHandler}
            >
              Logout
            </Button>
          </Hidden>
        </List>
      </Box>
      <Box flexGrow={1} />
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor='left'
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant='temporary'
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor='left'
          classes={{ paper: classes.desktopDrawer }}
          open
          variant='persistent'
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default NavBar;
