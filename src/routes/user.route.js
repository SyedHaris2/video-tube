import { Router } from "express";
import {
  loginUser,
  logoutUser,
  registerUsr,
  refreshAccesToken,
  chnageCurrentPassword,
  getCurrentUser,
  updateUserAvatar,
  updateUserCoverImage,
  getUserChannelProfile,
  getWatchHistory,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUsr
);

router.route("/login").post(loginUser);

//secured routes
router.route("/logout").post(verifyJWT, logoutUser);

router.route("/refresh-token").post(refreshAccesToken);

router.route("/chnage-password").post(verifyJWT, chnageCurrentPassword);

router.route("/current-user").get(verifyJWT, getCurrentUser);

//todo:  PATCH is a method of modifying resources where the client sends partial data that is to be updated without modifying the entire data PATCH is a method of modifying resources where the client sends partial data that is to be updated without modifying the entire data
router.route("/update-account").patch(verifyJWT, getCurrentUser);

router
  .route("/avatar")
  .patch(verifyJWT, upload.single("avatar"), updateUserAvatar);

router
  .route("/cover-image")
  .patch(verifyJWT, upload.single("coverImage"), updateUserCoverImage);

router.route("/c/:username").get(verifyJWT, getUserChannelProfile);

router.route("/history").get(verifyJWT, getWatchHistory);

export default router;

//http://localhost:8000/api/v1/users/register
