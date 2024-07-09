import React from 'react';
import Profile from './Profile';

const Gallery = ({ teamMembers }) => {
  return (
    <div className="gallery">
      {teamMembers.map(member => (
        <Profile key={member.id} name={member.name} role={member.role} photo={member.photo} />
      ))}
    </div>
  );
};

export default Gallery;
