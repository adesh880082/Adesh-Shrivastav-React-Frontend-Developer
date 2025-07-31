import { useEffect, useState } from 'react';
import Header from './components/Header';
import AppRoutes from './routes';
import { useTheme } from './hooks/useTheme';
import Sidebar from './components/Sidebar';

function App() {
  const { theme } = useTheme();
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    setFadeClass("fade-out");
    const timeout = setTimeout(() => setFadeClass("fade-in"), 300);
    return () => clearTimeout(timeout);
  }, [theme]);

  const isSidebarVisible = theme === "theme2";
  return (
    <div className={fadeClass}>
      <Header />
      {isSidebarVisible && <Sidebar />}
      <main style={{marginTop: "80px", flexGrow: 1}}>
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
