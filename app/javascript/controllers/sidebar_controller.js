import { Controller } from "@hotwired/stimulus";
import React from "react";
import { createRoot } from "react-dom/client";
import Sidebar from "../react/src/components/Sidebar";

// Connects to data-controller="sidebar"
export default class extends Controller {
  connect() {
    const app = this.element;
    const canAccessUsers = app.getAttribute('data-can-access-users') === 'true';
    const canAccessProperties = app.getAttribute('data-can-access-properties') === 'true';

    createRoot(app).render(<Sidebar canAccessUsers={canAccessUsers} canAccessProperties={canAccessProperties} />);
  }
}
