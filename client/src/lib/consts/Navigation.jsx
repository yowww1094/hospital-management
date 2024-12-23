import { RxDashboard } from "react-icons/rx";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { GoGear } from "react-icons/go";




export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/',
        icon: <RxDashboard />,
    },
    {
        key: 'patients',
        label: 'Patients',
        path: '/patients',
        icon: <HiOutlineClipboardDocumentList />,
    },
    {
        key: 'settings',
        label: 'Settings',
        path: '/settings',
        icon: <GoGear />,
    },
]