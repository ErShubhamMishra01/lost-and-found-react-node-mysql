import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Registration from './pages/Registration';
import AdminDash from './pages/admin/AdminDash';
import UserDash from './pages/user/UserDash';
import Logout from './components/Logout';
import Email from './pages/admin/Email';
import RegDetails from './pages/admin/RegDetails';
import Notification from './pages/admin/Notification';

import Enquiry from './pages/admin/Enquiry';
import ChangePassword from './pages/admin/ChangePassword';
import SubmitFeedback from './pages/user/SubmitFeedback';
import ViewFeedback from './pages/admin/ViewFeedback';

import LFManagement from './pages/admin/LFManagement';
import AddMaterial from './pages/user/AddMaterial'
import ClaimDetails from './pages/user/ClaimDetails'
import ViewLostMaterial from './pages/user/ViewLostMaterial'
import  Profile  from './pages/user/Profile';

const AppRoutes=[
    {
        index: true,
        element:<Home/>
    },
    {
        path:'/home',
        element:<Home/>
    },
    {
        path:'/about',
        element:<About/>
    },
    {
        path:'/contact',
        element:<Contact/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/registration',
        element:<Registration/>
    },
    {
        path:'/about',
        element:<About/>
    },
    {
        path:'admin/admindash',
        element:<AdminDash/>
    },
    {
        path:'user/userdash',
        element:<UserDash/>
    },
    {
        path:'/logout',
        element:<Logout/>
    },
    {
        path:'/admin/email',
        element:<Email/>
    },
    {
        path:'/admin/changepassword',
        element:<ChangePassword/>
    },
    {
        path:'/admin/enquiry',
        element:<Enquiry/>
    },
    {
        path:'/admin/regdetails',
        element:<RegDetails/>
    },
    {
        path:'/admin/notification',
        element:<Notification/>
    },
    {
        path:'/user/submitfeedback',
        element:<SubmitFeedback/>
    },
    {
        path:'/admin/viewfeedback',
        element:<ViewFeedback/>
    },
    {
        path:'/user/addmaterial',
        element:<AddMaterial/>
    },
    {
        path:'/user/viewlostmaterial',
        element:<ViewLostMaterial/>
    },
    {
        path:'/user/claimdetails',
        element:<ClaimDetails/>
    },
    {
        path:'/admin/lfmanagement',
        element:<LFManagement/>
    },
    {
        path:'/user/profile',
        element:<Profile/>
    }



    
];


export default AppRoutes;