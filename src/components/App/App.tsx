import React from 'react';
import { useAppInit } from 'hooks/useAppInit';
import TodoList from 'components/TodoList';
import Routers from 'components/Routers';
import Layout from 'components/Layout';

const App = () => {
  const { data } = useAppInit();
  return (
    <Layout>
      <Routers />
      Hello, App <TodoList data={data} />
    </Layout>
  );
};

export default App;
