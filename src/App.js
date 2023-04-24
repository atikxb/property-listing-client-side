import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import Appointment from './components/Admin/Appointment/Appointment';
import Login from './components/Admin/Login/Login';
import Properties from './components/Admin/Properties/Properties';
import AddProperty from './components/Admin/AddProperty/AddProperty';
import PropertyDetails from './components/PropertyDetails/PropertyDetails';
import NotFound from './components/NotFound/NotFound';
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/property-Details/:id' element={<PropertyDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<RequireAuth><Dashboard/></RequireAuth>}/>
        <Route path='/add-property' element={<RequireAuth><AddProperty/></RequireAuth>}/>
        <Route path='/appointment' element={<RequireAuth><Appointment/></RequireAuth>}/>
        <Route path='/properties' element={<RequireAuth><Properties/></RequireAuth>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
