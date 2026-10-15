import { Navigate, Route, Routes } from 'react-router'
import { AppLayout } from './layouts/AppLayout'
import { Home } from './pages/Home'
import { ProjectsPage } from './pages/ProjectsPage'
import { ResumePage } from './pages/ResumePage'
import { ContactPage } from './pages/ContactPage'
import { NotFound } from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="projetos" element={<ProjectsPage />} />
        <Route path="curriculo" element={<ResumePage />} />
        {/* Endereço antigo da página de experiência: leva para o currículo */}
        <Route path="experiencia" element={<Navigate to="/curriculo" replace />} />
        <Route path="contato" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
