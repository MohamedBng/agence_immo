import { Application } from "@hotwired/stimulus"
import DashboardCardController from "./dashboard_card_controller"
import SidebarController from "./sidebar_controller";

const application = Application.start()
application.register("dashboard-card", DashboardCardController);
application.register("sidebar", SidebarController);

export default application;
