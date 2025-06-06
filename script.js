

const dashboardItems = [
    { title: "University Affiliations", desc: "Manage affiliated universities", link: "#", icon: "🏛️" },
    { title: "Colleges", desc: "Colleges under affiliations", link: "#", icon: "🏫" },
    { title: "Departments", desc: "Departments by college", link: "#", icon: "🏬" },
    { title: "Faculties", desc: "Faculty members by department", link: "#", icon: "👩‍🏫" },
    { title: "Students", desc: "Manage student records", link: "#", icon: "🎓" },
    { title: "Courses", desc: "Subject management", link: "#", icon: "📚" },
    { title: "Enrollments", desc: "Enroll students in courses", link: "#", icon: "📝" },
    { title: "Teaching Assignments", desc: "Assign faculties to courses", link: "#", icon: "📋" },
    { title: "Exams", desc: "Schedule and manage exams", link: "#", icon: "🧪" },
    { title: "Assignments", desc: "Create and review coursework", link: "#", icon: "📎" },
    { title: "Results", desc: "View student performance", link: "#", icon: "📊" },
    { title: "Attendance", desc: "Track student attendance", link: "#", icon: "📆" },
    { title: "Final Results", desc: "Calculate final grades", link: "#", icon: "🏁" }
  ];
  

  const container = document.getElementById('cardContainer');
  dashboardItems.forEach(item => {
    const card = `
      <div class="col-lg-4 col-md-6">
        <div class="card shadow-sm h-100">
          <div class="card-body text-center">
            <h2>${item.icon}</h2>
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.desc}</p>
            <a href="${item.link}" class="btn btn-outline-primary btn-sm">Open</a>
          </div>
        </div>
      </div>`;
    container.insertAdjacentHTML('beforeend', card);
  });
  

  document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value.trim();
  
  
    if (user === 'admin' && pass === 'admin123') {
      alert('Login successful! Redirecting to dashboard...');
      document.getElementById('loginForm').reset();
      const modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
      modal.hide();
    } else {
      alert('Invalid username or password.');
    }
  });
  