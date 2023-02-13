import React from "react";

import configType from "./config";

const Container = ({ children }) => {
  return <div className='grid gap-4 grid-cols-1 m-4'>{children}</div>;
};

const RenderEngine = ({ item }) => {
  if (configType[item.type]) {
    return <Container>{configType[item.type].render}</Container>;
  }

  return <Container>Component Not Found</Container>;
};

export default RenderEngine;
