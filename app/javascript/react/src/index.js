import { define } from 'remount'      
import Header from "./components/Sidebar"
                                      
define({ 'sidebar-component': Header }, { root: document.getElementById('sidebar-root') });