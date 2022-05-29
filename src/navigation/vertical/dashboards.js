import {Settings, BarChart2, Square, Clock, FileText, Codesandbox, Home } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home />,
    navLink: '/page-layout/home'
  },
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: <Codesandbox />,
    navLink: '/apps/mydashboard'
  },
    {
      id: 'settings',
      title: 'Settings',
      icon: <Settings />,
      navLink: '/apps/mysettings'
    },
    {
      id: 'voters',
      title: 'Voters',
      icon: <BarChart2 />,
      navLink: '/apps/voters'
    },
    {
      id: 'ballot',
      title: 'Ballot',
      icon: <Square />,
      navLink: '/apps/ballot'
    },
    {
      id: 'start-stop',
      title: 'Start-Stop',
      icon: <Clock />,
      navLink: '/apps/start-stop'
    },
    {
      id: 'result',
      title: 'Result',
      icon: <FileText />,
      navLink: '/apps/result'
    },
    {
      id: 'faq',
      title: 'FQA',
      icon: <FileText />,
      navLink: '/apps/faq'
    }
]
