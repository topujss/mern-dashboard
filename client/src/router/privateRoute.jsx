import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';

/**
 * Create private router
 */
const privateRouter = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
    ],
  },
];

// export router
export default privateRouter;
