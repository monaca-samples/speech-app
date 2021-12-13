const routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/home',
    name: 'Home', 
    componentUrl: './pages/home.html'
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
