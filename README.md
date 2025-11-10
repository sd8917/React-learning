## Context API
- Share global data (like `theme`, `user`, `language`, `auth` etc)
- Manage app-wide state when using simple apps

## Core parts
1. `React.createContext()` -> Creates a context object
2. `Context.Provider` -> Provides data to child components
3. `useContext()`-> Consumes the data inside any component


## Note
- When you have too many context provides, your app tree can get deeply nested and messy, like this::

```
<AuthProvider>
  <ThemeProvider>
    <UserProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </UserProvider>
  </ThemeProvider>
</AuthProvider>


```

## Solution
- You can combine multiple providers into one component, so your <App /> Only needs a single wrapper.

```
// ProviderComposer.js
export const AppProviders = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <UserProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </UserProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};


```