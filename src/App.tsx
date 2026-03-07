/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import PasswordGate from './components/PasswordGate';
import MainLayout from './layouts/MainLayout';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ThankYouPage from './pages/ThankYouPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import LegalNoticePage from './pages/LegalNoticePage';
import CookiesPolicyPage from './pages/CookiesPolicyPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PasswordGate>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/gracias" element={<ThankYouPage />} />
            <Route path="/privacidad" element={<PrivacyPolicyPage />} />
            <Route path="/aviso-legal" element={<LegalNoticePage />} />
            <Route path="/cookies" element={<CookiesPolicyPage />} />
          </Route>
        </Routes>
      </PasswordGate>
    </BrowserRouter>
  );
}
