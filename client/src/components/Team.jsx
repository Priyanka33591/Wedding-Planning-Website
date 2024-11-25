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
      image: 'https://media.licdn.com/dms/image/v2/D5603AQEoqBMr8QVIaw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712638033700?e=1738195200&v=beta&t=rNpt5jYwU9QcfVbblEgKbFACNYC5tTwhonSUKm7MjQQ' 
    },
    {
      name: 'Abhishek Singh',
      role: 'Wedding Planner',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQGNYFdoqcUtKw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723719184048?e=1738195200&v=beta&t=vvaH_fNz4eT5Vc43gRBKII1xA760Lhi6mZD_Lb067b4'
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