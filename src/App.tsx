import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CloudConceptsPage from './pages/CloudConceptsPage';
import AzureArchitecturePage from './pages/AzureArchitecturePage';
import AzureManagementPage from './pages/AzureManagementPage';
import TopicPage from './pages/TopicPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="cloud-concepts" element={<CloudConceptsPage />} />
            <Route path="azure-architecture" element={<AzureArchitecturePage />} />
            <Route path="azure-management" element={<AzureManagementPage />} />
            <Route path="topic/:section/:id" element={<TopicPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;