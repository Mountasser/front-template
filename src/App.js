import { Outlet } from 'react-router';
import Sidebar from './layouts/Sidebar/Sidebar';


export function App() {
  return (
    <>
      <Sidebar />
      <Outlet/>
    </>
  );
}

export default App;
