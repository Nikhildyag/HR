import { Router } from "express";
import {
  addLeave,
  addProject,
  addSalary,
  getEmployeesList,
  getProjectList,
  getSalareeDetails,
} from "../controllers/Admin.controller.js";
import { verifyAdmin, verifyJwt } from "../middlewares/auth.middleware.js";
const router = Router();
router.route("/addEmployeeSalary").post(verifyJwt, verifyAdmin, addSalary);
router.route("/addEmployeeLeave").post(verifyJwt, verifyAdmin, addLeave);
router.route("/getEmployees").get(verifyJwt, verifyAdmin, getEmployeesList);
router.route("/getSalarees").get(verifyJwt, verifyAdmin, getSalareeDetails);
router.route("/addProject").post(verifyJwt, verifyAdmin, addProject);
router.route("/getProjects").get(verifyJwt, verifyAdmin, getProjectList);
export default router;
