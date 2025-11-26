import { useState } from 'react';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import UploadLayout from './Pages/Upload/UploadLayout';
import { Routes, Route } from 'react-router-dom';
import UploadSelect from './Pages/Upload/UploadSelect';
import UploadDetails from './Pages/Upload/UploadDetails';

function App() {

  return (
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 

          <Route path="upload" element={<UploadLayout />}>
            {/* Nested routes for upload can be added here */}
            <Route index element={<UploadSelect />} />
            <Route path="details" element={<UploadDetails />} />  
          </Route>

        </Route>

      </Routes>
  );
}

export default App
