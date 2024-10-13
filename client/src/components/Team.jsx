import React from 'react';
import TeamCard from './TeamCard';
import './Team.css';


const teamMembers = [
    {
      name: 'Hritik Chouhan',
      role: 'Wedding Planner',
      image: 'https://randomuser.me/api/portraits/men/1.jpg'  
    },
    {
      name: 'Priyanka Yadav',
      role: 'Wedding Planner',
      image: 'https://randomuser.me/api/portraits/women/1.jpg' 
    },
    {
      name: 'Abhishek Singh',
      role: 'Wedding Planner',
      image: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
      name: 'Shreyanshi Jain',
      role: 'Wedding Planner',
      image: 'https://randomuser.me/api/portraits/women/2.jpg'  
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