import express from "express";
import { protect } from "../middlewares/auth.js";
import { deleteProject, getProjectId, getProjectPreview, getPublishProject, makeRevision, rollbackToVersion, saveProjectCode } from "../controllers/projectController.js";

const projectRouter  = express.Router();

projectRouter.post('/revision/:projectId', protect, makeRevision)
projectRouter.put('/save/:projectId', protect, saveProjectCode)
projectRouter.get('/rollback/:projectId/:versionId', protect, rollbackToVersion)
projectRouter.delete('/:projectId', protect, deleteProject)
projectRouter.get('/preview/:projectId', protect, getProjectPreview)
projectRouter.get('/published', getPublishProject )
projectRouter.get('/published/:projectId', getProjectId)

export default projectRouter;
