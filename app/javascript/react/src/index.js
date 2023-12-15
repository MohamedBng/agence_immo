import { define } from 'remount'      
import Sidebar from "./components/Sidebar"
import DashboardCard from "./components/DashboardCard"
                                      
define({ 'sidebar-component': Sidebar }, { root: document.getElementById('sidebar-root') });
define({ 'dashboard-card-component': DashboardCard }, { root: document.getElementById('dashboard-card-root') });