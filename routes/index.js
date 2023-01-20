const router = require('express').Router();
const authRoutes = require('./auth');
const userRoutes = require('./users');
const adminAttendance=require('./admin-attendance')
const authenticate = require('../middleware/authenticate');
const studentAttendanceRoutes = require('./student-attendance');

router.use('/api/v1/auth', authRoutes);
router.use('/api/v1/users', authenticate, userRoutes);
router.use('/api/v1/admin/attendance', authenticate, adminAttendance);
router.use('/api/v1/student/attendance', authenticate, studentAttendanceRoutes);


module.exports = router;