/**
 * Sidebar Component with MetricsProvider
 *
 * This file defines the `Sidebar` component, which serves as a container for the 
 * navigation and layout of the application's sidebar. The `MetricsProvider` context 
 * is used to wrap the `Navigation` component, allowing the sidebar and its child 
 * components to access metrics-related data seamlessly.
 *
 * Key Features:
 * - The `MetricsProvider` wraps the `Navigation` component, enabling metrics data sharing.
 * - Responsive design: The layout adapts for smaller screens with padding adjustments.
 * - The structure ensures the sidebar is positioned correctly with a gap between components.
 *
 * This component ensures consistency in providing metrics-related context to the navigation 
 * and other child components within the sidebar.
 */

import React from "react";
import Navigation from "./components/Navigation";
import { MetricsProvider } from "@/store/context/MetricsContext"; // Import MetricsProvider

const Sidebar = () => {
  return (
    // Wrap the entire sidebar content with the MetricsProvider
    <MetricsProvider>
      {/* Container for the sidebar content */}
      <section className="container mx-auto min-h-screen relative z-20 max-sm:p-5">
        {/* Responsive layout with gap adjustment for flex */}
        <div className="min-h-[100vh] relative z-10 sm:flex lg:flex gap-6">
          <div className="space-y-16">
            {/* Navigation component wrapped within MetricsProvider */}
            <Navigation />
          </div>
        </div>
      </section>
    </MetricsProvider>
  );
};

export default Sidebar;
