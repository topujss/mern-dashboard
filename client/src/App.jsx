import { useMemo } from 'react';
// import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { themeSettings } from './theme';
import { RouterProvider } from 'react-router-dom';
import router from './router/route';

const App = () => {
  // const mode = useSelector((state) => state.globalStore?.mode);
  const mode = 'dark';
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <>
      <RouterProvider router={router} />
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
};

export default App;
