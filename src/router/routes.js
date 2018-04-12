
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
  {
    path: '/consent',
    component: () => import('layouts/main'),
    children: [
      { path: '', component: () => import('pages/consentform') }
    ]
  },
  {
    path: '/medcert',
    component: () => import('layouts/main'),
    children: [
      { path: '', component: () => import('pages/mc') }
    ]
  },
  {
    path: '/messageboard',
    component: () => import('layouts/main'),
    children: [
      { path: '', component: () => import('pages/messageboard') }
    ]
  },
  {
    path: '/schedule',
    component: () => import('layouts/main'),
    children: [
      { path: '', component: () => import('pages/schedule') }
    ]
  },
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
