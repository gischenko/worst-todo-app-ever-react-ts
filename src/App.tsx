import TodoList from './pages/ToDoList';
import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

// MOCK pages, just for demo
const Projects = () => <div>Projects Component (We'll implement it soon)</div>;
const Calendar = () => <div>Calendar Component (We'll implement it soon)</div>;
const Settings = () => <div>Settings Component (We'll implement it soon)</div>;


function App() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="app-container">
      <div className="header">
        <div>ToDoFake Inc.</div>
      </div>
      <div className="content">
        <aside className="sidebar">
          <div className="menu">
            <div
              className={`menu-item ${location.pathname === '/' ? 'selected' : ''}`}
              onClick={() => navigate('/')}
            >
              ToDo List
            </div>
            <div
              className={`menu-item ${location.pathname === '/projects' ? 'selected' : ''}`}
              onClick={() => navigate('/projects')}
            >
              Projects
            </div>
            <div
              className={`menu-item ${location.pathname === '/calendar' ? 'selected' : ''}`}
              onClick={() => navigate('/calendar')}
            >
              Calendar
            </div>
            <div
              className={`menu-item ${location.pathname === '/settings' ? 'selected' : ''}`}
              onClick={() => navigate('/settings')}
            >
              Settings
            </div>
          </div>
        </aside>
        <div className="main">
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
      <div className="footer">
        © 2024 ToDoFake Inc.
      </div>
    </div>
  );
}


export default App;