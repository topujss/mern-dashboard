import { AppBar, Toolbar, useTheme } from '@mui/material';
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <AppBar sx={{ position: 'static', background: 'none', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <div
          className="left_side"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        ></div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
