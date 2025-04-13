import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const Mentees = () => {
  const [mentees, setMentees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/mentees')
      .then((res) => res.json())
      .then((data) => setMentees(data))
      .catch((err) => console.error('Error fetching mentees:', err));
  }, []);

  const handleConnect = (id) => {
    navigate(`/booking/${id}`);
  };

  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Mentors</h1>
      </div>
      <div className="container grid grid-three-cols">
        {mentees.map((mentee) => {
          const { id, price_per_hour, job_description, name, image } = mentee;
          return (
            <div className="card" key={id}>
              <div className="card-img">
                <img src={image} alt={name} />
              </div>
              <div className="card-details">
                <div className="grid grid-two-cols">
                  <p>💰 ₹{price_per_hour}/hr</p>
                  <p>🧠 {job_description}</p>
                </div>
                <h2>{name}</h2>
              </div>
              <div className="btn btn-group booking">
                <button className="btn" onClick={() => handleConnect(id)}>
                  Connect
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
