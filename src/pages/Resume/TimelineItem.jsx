const TimelineItem = ({ title, degree, company, date, description }) => {
  return (
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">{title}</h4>
      {degree && <p className="degree">{degree}</p>}
      {company && <p className="company">{company}</p>}
      <span>{date}</span>
      {/* Ensure description is wrapped in an unordered list */}
      <ul className="timeline-description timeline-text">
        {Array.isArray(description) ? (
          description.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>{description}</li> // Handles case where description is a string
        )}
      </ul>
    </li>
  );
};

export default TimelineItem;
