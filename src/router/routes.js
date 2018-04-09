
export default [
  {
    path: '/',
    component: () => import('layouts/main'),
    children: [
      { path: '', component: () => import('pages/index') }
    ]
  },
  {
    path: '/todo',
    component: () => import('layouts/main'),
    children: [
      { path: 'new', component: () => import('pages/todo') },
      { path: 'assign', component: () => import('pages/assignclass') }
    ]
  },
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
