import Home from './pages/Home';
import ReactTestPage from './pages/ReactTestPage';
import Skillsheet from './pages/Skillsheet';
import WorkExperience from './pages/WorkExp';
import Education from './pages/Education';
import Portfolio from './pages/Portfolio';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import FormatAlignJustifyOutlinedIcon from '@mui/icons-material/FormatAlignJustifyOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';

export const RouteData = [
    {
        title: 'About',
        path: '/',
        icon: <AccountCircleOutlinedIcon/>,
        page: <Home/>
    },
    {
        title: 'Skillsheet',
        path: '/skills',
        icon: <LeaderboardOutlinedIcon/>,
        page: <Skillsheet/>
    },
    {
        title: 'Work Experience',
        path: '/workexp',
        icon: <WorkOutlineOutlinedIcon/>,
        page: <WorkExperience/>
    },
    {
        title: 'Education',
        path: '/edu',
        icon: <SchoolOutlinedIcon/>,
        page: <Education/>
    },
    {
        title: 'Portfolio',
        path: '/portfolio',
        icon: <PermMediaOutlinedIcon/>,
        page: <Portfolio/>
    },
    {
        title: 'Testing Room',
        path: '/dev',
        icon: <CodeOutlinedIcon/>,
        page: <ReactTestPage/>
    },
]