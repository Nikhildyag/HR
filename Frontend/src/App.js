import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import AdminLogin from './components/Admin/AdminLogin'
import EmployeeLogin from './components/Employee/EmployeeLogin'
import EmployeeHome from './components/Employee/EmployeeHome'
import SalaryDetails from './components/Employee/SalaryDetails'
import ProjectDetails from './components/Employee/ProjectDetails'
import ProjectReport from './components/Employee/ProjectReport'
import LeaveReport from './components/Employee/LeaveReport'
import './App.css'
import AdminBrowse from './components/Admin/AdminBrowse'
import AdminEmployees from './components/Admin/AdminEmployees'
import AdminAddSalary from './components/Admin/AdminAddSalary'
import AdminAddProject from './components/Admin/AdminAddProject'
import AdminSalaryDetails from './components/Admin/AdminSalaryDetails'
import AdminProjectDetails from './components/Admin/AdminProjectDetails'
import AdminProjectReport from './components/Admin/AdminProjectReport'
import AdminLeaveReport from './components/Admin/AdminLeaveReport'
import Browse from './components/Browse'
import AdminAddEmployee from './components/Admin/AdminAddEmployee'
import AdminEditProject from './components/Admin/AdminEditProject'
import AboutUs from './components/footer/AboutUs'
import Careers from './components/footer/Careers'
import EmployeePortal from './components/footer/EmployeePortal'
import ContactUs from './components/footer/ContactUs'
import Policies from './components/footer/Policies'
import Benefits from './components/footer/Benefits'
import Trainings from './components/footer/Trainings'
import FAQ from './components/footer/FAQ'

const Applayout = () => {
  return (
    <div>
      <Browse />
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    Element: <Applayout />,
    children: [
      {
        path: '/',
        element: <Browse />,
      },
      {
        path: '/Adminlogin/',
        element: <AdminLogin />,
      },
      {
        path: '/employeeLogin/',
        element: <EmployeeLogin />,
      },
      {
        path: '/admin/',
        element: <AdminBrowse />,
      },
      {
        path: '/admin/employees',
        element: <AdminEmployees />,
      },
      {
        path: '/admin/addsalary',
        element: <AdminAddSalary />,
      },
      {
        path: '/admin/addproject',
        element: <AdminAddProject />,
      },
      {
        path: '/admin/salarydetails',
        element: <AdminSalaryDetails />,
      },
      {
        path: '/admin/projectdetails',
        element: <AdminProjectDetails />,
      },
      {
        path: '/admin/projectreport',
        element: <AdminProjectReport />,
      },
      {
        path: '/admin/leavereport',
        element: <AdminLeaveReport />,
      },
      {
        path: '/admin/addEmployee',
        element: <AdminAddEmployee />,
      },
      {
        path: '/admin/editProject/:projectId',
        element: <AdminEditProject />,
      },
      {
        path: '/Adminlogin/',
        element: <AdminLogin />,
      },
      {
        path: '/employeeLogin/',
        element: <EmployeeLogin />,
      },

      {
        path: '/employeeHomepage/',
        element: <EmployeeHome />,
      },
      {
        path: '/employeeSalaryDetails/',
        element: <SalaryDetails />,
      },
      {
        path: '/employeeProjectDetails',
        element: <ProjectDetails />,
      },
      {
        path: '/employeeProjectReport/',
        element: <ProjectReport />,
      },
      {
        path: '/employeeLeaveReport/',
        element: <LeaveReport />,
      },
      {
        path: '/about-hr/',
        element: <AboutUs />,
      },
      {
        path: '/careers',
        element: <Careers />,
      },
      {
        path: '/employee-portal',
        element: <EmployeePortal />,
      },
      {
        path: '/contact',
        element: <ContactUs />,
      },
      {
        path: '/policies',
        element: <Policies />,
      },
      {
        path: '/benefits',
        element: <Benefits />,
      },
      {
        path: '/training',
        element: <Trainings />,
      },
      {
        path: '/faq',
        element: <FAQ />,
      },
    ],
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
