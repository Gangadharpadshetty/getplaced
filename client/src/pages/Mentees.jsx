import { useAuth } from "../store/auth";

export const Mentees = () => {
  const { mentees } = useAuth();

  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Mentors</h1>
      </div>
      <div className="container grid grid-three-cols">
        {mentees && mentees.map((mentee) => {
          const { id, price_per_hour, job_description, name } = mentee;
          return (
            <div className="card" key={id}>
              <div className="card-img">
                <img src="/images/mentees.jpg" alt="mentees" />
              </div>
              <div className="btn btn-group booking">
                <button className="btn" onClick={() => handleFreeTrialBooking(id)}>Book free trial</button>
              </div>
              <div className="card-details">
                <div className="grid grid-two-cols">
                  <p>{price_per_hour}</p>
                  <p>{job_description}</p>
                </div>
                <h2>{name}</h2>
              </div>
              <div className="btn btn-group booking">
                <button className="btn" onClick={() => handleConnect(id)}>Connect</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
