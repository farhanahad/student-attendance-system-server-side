Student Roles:

Student can register themselves.
There will be following account status for a student:
Pending
Active
Reject
Student can login with their credentials.
Pending and rejected students won't have anything in their profile.
Active students can update their profile info.
First Name
Last Name
Email
Phone No
Profile Picture
Active student can change / update password.
Active students can see their time sheet
Calender view
List view
Table view
Active students can participate in attendance system.
Student can logout.


Admin Roles:

Admin can create student.
Admin can delete / update / check students information.
Admin can change status of a student.
Admin can check time sheet of a student.
Admin can enable or disable attendance button.
Admin can check stats of a given day.

User:

Name
Email
Password
Roles
AccountStatus


Profile:

First Name
Last Name
Phone No
Profile Picture
UserId


StudentAttendance:

UserId
CreatedAt: DateTime
AdminAttendanceId

AdminAttendance:

CreatedAt: DateTime
Status
TimeLimit

Student Endpoints:

POST /auth/login [public]
POST /auth/register [public]
PATCH /profiles [private]
PATCH /profiles/avatar [private]
PUT /auth/change-password [private]
GET /timesheet [private]
GET /attendance [private]
GET /attendanceStatus [private]

Admin Endpoints:

GET /users [private]
POST /users [private]
PATCH /users/userId [private]
DELETE /users/userId [private]
GET /users/userId [private]
GET /profiles [private]
POST /profiles [private]
PATCH /profiles/profileId [private]
DELETE /profiles/profileId [private]
GET /profiles/profileId [private]
GET /timesheet/userId [private]
GET /timesheet/stats [private]
POST /attendance/enable [private]
GET /attendance/disabled/:attendanceId [private]