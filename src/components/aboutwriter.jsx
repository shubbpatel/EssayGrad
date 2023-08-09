import React from 'react';

const writer = {
  profilePhoto: 'profile-photo-url',
  name: 'John Doe',
  rating: 4.8,
  projectsCompleted: 128,
  membershipDate: '2022-01-15',
  studentsHelped: 87,
  lastDelivery: '2023-07-15',
  about:
    "I'm an experienced writer with a passion for delivering high-quality essays on time.",
};

const AboutWriter = () => {
  return (
    <div className="writer-profile p-2  border-1 border-black rounded-2" style={{border: "1px solid black",}}>
      <div className="profile-header d-flex flex-row justify-content-start">
        <img src={writer.profilePhoto} alt="Profile" className="profile-photo" />
        <div className="profile-details">
          <h3>{writer.name}</h3>
          <p>Rating: {writer.rating}</p>
        </div>
      </div>
      <hr />
      <div className="profile-stats d-flex flex-row gap-3">
        <div className="stat">
          <span>Projects Completed</span>
          <p>{writer.projectsCompleted}</p>
        </div>
        <div className="stat">
          <span>Membership Date</span>
          <p>{writer.membershipDate}</p>
        </div>
        <div className="stat">
          <span>No. of Students Helped</span>
          <p>{writer.studentsHelped}</p>
        </div>
        <div className="stat">
          <span>Last Delivery</span>
          <p>{writer.lastDelivery}</p>
        </div>
      </div>
      <div className="about">
        <h3>About</h3>
        <p>{writer.about}</p>
      </div>
    </div>
  );
};

export default AboutWriter;
