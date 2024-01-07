import { Controller } from "@hotwired/stimulus"
import React from "react";
import { createRoot } from "react-dom/client";
import DashboardCard from "../react/src/components/DashboardCard";

// Connects to data-controller="dashboard-card"
export default class extends Controller {
  connect() {
    const app = this.element;
    const text = app.getAttribute('data-text');
    const link = app.getAttribute('data-link');
    const icon = app.getAttribute('data-icon');

    createRoot(app).render(<DashboardCard text={text} link={link} icon={icon} />)
  }
}
