import { define } from 'remount'      
import Sidebar from "./components/Sidebar"
import DashboardCard from "./components/DashboardCard"
import Title from "./components/Title"
import Button from "./components/Button"
                                      
define({ 'sidebar-component': Sidebar }, { root: document.getElementById('sidebar-root') });
define({ 'dashboard-card-component': DashboardCard }, { root: document.getElementById('dashboard-card-root') });
define({ 'title-component': Title }, { root: document.getElementById('title-root') });
define({ 'button-component': Button }, { root: document.getElementById('button-root') });