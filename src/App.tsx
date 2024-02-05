import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { apps } from './route';
import { Layout, Menu } from 'antd';
import { useState } from 'react';

const { Header, Content, Footer } = Layout;
const navList = apps?.map(item => ({ key: item?.name, label: item?.label })) || [];

function App() {
  const [currentPage, setCurrentPage] = useState('/');
  const pageLinkJump = (key?: string) => {
    setCurrentPage(key ?? '/');
    window.history.pushState(null, '', key ?? '/');
    window.dispatchEvent(new PopStateEvent('popstate', { state: null }));
  };
  return (
    <Layout style={{ height: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="main-logo" onClick={() => pageLinkJump()} />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={navList}
          style={{ flex: 1, minWidth: 0 }}
          onClick={e => pageLinkJump(e?.key)}
          selectedKeys={[navList?.find(nav => nav?.key === currentPage)?.key ?? '/']}
        />
      </Header>
      <Content>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Home />} />
            {apps?.map(item => {
              return <Route key={item.name} path={item.baseroute} element={<micro-app {...item} iframe />} />;
            })}
          </Routes>
        </BrowserRouter>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Copyright © 2024</Footer>
    </Layout>
  );
}

export default App;
