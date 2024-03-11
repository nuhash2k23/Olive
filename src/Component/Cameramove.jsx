import React, { createContext, useContext, useState } from 'react';

const CameraContext = createContext();

export const useCamera = () => {
  return useContext(CameraContext);
};

export const CameraProvider = ({ children }) => {
  const [cameraPosition, setCameraPosition] = useState([8.5318, 5.2027, -9.1063]);
  const [cameraRotation, setCameraRotation] = useState([-2.5212, 0.4927, 2.8714]);

  const setCamera = (position, rotation) => {
    setCameraPosition(position);
    setCameraRotation(rotation);
  };

  return (
    <CameraContext.Provider value={{ cameraPosition, setCamera, cameraRotation}}>
      {children}
    </CameraContext.Provider>
  );
};
