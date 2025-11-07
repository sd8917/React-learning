// ✅ Benefit:
// Abstracts authentication checks — used across multiple protected components.

function withAuth(WrappedComponent) {
  return function ProtectedComponent(props) {
    const isAuthenticated = localStorage.getItem("token");

    if (!isAuthenticated) {
      return <p>Please login to continue</p>;
    }

    return <WrappedComponent {...props} />;
  };
}

// 🧩 Example usage
function Dashboard() {
  return <h2>Welcome to the Dashboard</h2>;
}

const ProtectedDashboard = withAuth(Dashboard);

//Interview question 
// 1. What problem does an HOC solve?
// Reusability of component logic across multiple components. without duplicating code.

// 2. Why are hooks preferred over now over hocs?
// Hooks solve the same problem (sharing logic) without wrapping or nesting components — leading to cleaner trees and better TypeScript support.

/*
Use Case	           Example
Authentication	       withAuth
Analytics tracking	   withTracking
Theming	withTheme      (like styled-components)
Feature flags	       withFeatureToggle
Permissions	           withRoleCheck
Error handling	       withErrorBoundary
State injection	connect() from Redux
*/