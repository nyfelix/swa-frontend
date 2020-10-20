import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import Obstbauer from 'src/pages/Obstbauer.vue'
import Brunnenmeister from 'src/pages/Brunnenmeister.vue'
import Verbraucher from 'src/pages/Verbraucher.vue'
import Timeseries from 'src/pages/Timeseries.vue'
import Overview from 'src/pages/Overview.vue'
import UserProfile from 'src/pages/UserProfile.vue'
import TableList from 'src/pages/TableList.vue'
import Typography from 'src/pages/Typography.vue'
import Icons from 'src/pages/Icons.vue'
import Maps from 'src/pages/Maps.vue'
import Notifications from 'src/pages/Notifications.vue'
import Upgrade from 'src/pages/Upgrade.vue'

const routes = [
  /*{
    path: '/',
    component: DashboardLayout,
    redirect: '/obstbauer'
  },*/
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/obstbauer',
    children: [
      {
        path: 'obstbauer',
        name: 'Obstbauer',
        component: Obstbauer
      },
      {
        path: 'brunnenmeister',
        name: 'Brunnenmeister',
        component: Brunnenmeister
      },
      {
        path: 'verbraucher',
        name: 'Verbraucher',
        component: Verbraucher
      },
      {
        path: 'timeseries',
        name: 'Timeseries',
        component: Timeseries
      },
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
      {
        path: 'table-list',
        name: 'Table List',
        component: TableList
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        component: Maps
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'upgrade',
        name: 'Upgrade to PRO',
        component: Upgrade
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes