import React from 'react';
import TeamCard from './TeamCard';
import './Team.css';


const teamMembers = [
    {
      name: 'Hritik Chouhan',
      role: 'Wedding Planner',
      image: 'https://res.cloudinary.com/ddbcdcws5/image/upload/v1732560715/WhatsApp_Image_2024-11-26_at_00.20.20_730e9453_tjzzva.jpg'  
    },
    {
      name: 'Priyanka Yadav',
      role: 'Wedding Planner',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQGE-vtE_SgwCQ/profile-displayphoto-shrink_800_800/B56ZY5tkPEGcAc-/0/1744724968842?e=1760572800&v=beta&t=bM15NefqIHBEspYgGlsRiGHS4_z-dfw0BuJpwYCjv7A'
    },
    {
      name: 'Abhishek Singh',
      role: 'Wedding Planner',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQEpB-LYcBXj6A/profile-displayphoto-crop_800_800/B56Zkq46k8I8AI-/0/1757361187932?e=1760572800&v=beta&t=J8KxE6xaQMi6RktlqSra1nq4xBKdOCQTKNoGWRtPD3I'
    },
    {
      name: 'Shreyanshi Jain',
      role: 'Wedding Planner',
      image: 'https://res.cloudinary.com/dqbhc0l7s/image/upload/v1732704911/brytddwlrqfumqgekrnq.jpg'  
    }
  ];
  
  const Team = () => {
    return (
      <div className="team">
        <h2 className="team__title">Our Team</h2>
        <div className="team__cards">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Team;