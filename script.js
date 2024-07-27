//Mock data
const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Company A",
    location: "New York, NY",
    description: "Develop and maintain software applications.",
  },
  {
    id: 2,
    title: "Data Scientist",
    company: "Company B",
    location: "San Francisco, CA",
    description:
      "Analyze and interpret complex data to help organizations make better decisions.",
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Company B",
    location: "San Francisco, CA",
    description:
      "Analyze and interpret complex data to help organizations make better decisions.",
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "Company B",
    location: "San Francisco, CA",
    description:
      "Analyze and interpret complex data to help organizations make better decisions.",
  },
  {
    id: 5,
    title: "Data Scientist",
    company: "Company B",
    location: "San Francisco, CA",
    description:
      "Analyze and interpret complex data to help organizations make better decisions.",
  },
  {
    id: 6,
    title: "Data Scientist",
    company: "Company B",
    location: "San Francisco, CA",
    description:
      "Analyze and interpret complex data to help organizations make better decisions.",
  },
  {
    id: 7,
    title: "Data Scientist",
    company: "Company B",
    location: "San Francisco, CA",
    description:
      "Analyze and interpret complex data to help organizations make better decisions.",
  },
  {
    id: 8,
    title: "Data Scientist",
    company: "Company B",
    location: "San Francisco, CA",
    description:
      "Analyze and interpret complex data to help organizations make better decisions.",
  },
  {
    id: 9,
    title: "Data Scientist",
    company: "Company B",
    location: "San Francisco, CA",
    description:
      "Analyze and interpret complex data to help organizations make better decisions.",
  },
  // Add more jobs here
];

// Function to display featured jobs
function displayFeaturedJobs() {
  const featuredJobsContainer = document.getElementById("featured-jobs");
  featuredJobsContainer.innerHTML = "";
  jobs.forEach((job) => {
    const jobCard = document.createElement("div");
    jobCard.className = "job-card";
    jobCard.innerHTML = `
          <h3>${job.title}</h3>
          <p>${job.company}</p>
          <p>${job.location}</p>
          <button onclick="viewJobDetail(${job.id})">View Details</button>
      `;
    featuredJobsContainer.appendChild(jobCard);
  });
}

// Function to display job listings
function displayJobListings() {
  const jobListContainer = document.getElementById("job-list");
  jobListContainer.innerHTML = "";
  jobs.forEach((job) => {
    const jobCard = document.createElement("div");
    jobCard.className = "job-card";
    jobCard.innerHTML = `
          <h3>${job.title}</h3>
          <p>${job.company}</p>
          <p>${job.location}</p>
          <button onclick="viewJobDetail(${job.id})">View Details</button>
      `;
    jobListContainer.appendChild(jobCard);
  });
}

// Function to display job detail
function displayJobDetail(job) {
  const jobDetailContainer = document.getElementById("job-detail-content");
  jobDetailContainer.innerHTML = `
      <h1>${job.title}</h1>
      <h2>${job.company}</h2>
      <p>${job.location}</p>
      <p>${job.description}</p>
      <button onclick="applyForJob()">Apply for this Job</button>
  `;
}

// Function to view job details
function viewJobDetail(jobId) {
  const job = jobs.find((job) => job.id === jobId);
  if (job) {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("job-listings").classList.add("hidden");
    document.getElementById("job-detail").classList.remove("hidden");
    document.getElementById("candidate-dashboard").classList.add("hidden");
    displayJobDetail(job);
  }
}

// Function to apply for a job
function applyForJob() {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("job-listings").classList.add("hidden");
  document.getElementById("job-detail").classList.add("hidden");
  document.getElementById("candidate-dashboard").classList.remove("hidden");
}

// Event listeners
document.getElementById("homeLink").addEventListener("click", () => {
  document.getElementById("home").classList.remove("hidden");
  document.getElementById("job-listings").classList.add("hidden");
  document.getElementById("job-detail").classList.add("hidden");
  document.getElementById("candidate-dashboard").classList.add("hidden");
  displayFeaturedJobs();
});

document.getElementById("jobsLink").addEventListener("click", () => {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("job-listings").classList.remove("hidden");
  document.getElementById("job-detail").classList.add("hidden");
  document.getElementById("candidate-dashboard").classList.add("hidden");
  displayJobListings();
});

document.getElementById("candidateLink").addEventListener("click", () => {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("job-listings").classList.add("hidden");
  document.getElementById("job-detail").classList.add("hidden");
  document.getElementById("candidate-dashboard").classList.remove("hidden");
});

// Initialize the home page
displayFeaturedJobs();
