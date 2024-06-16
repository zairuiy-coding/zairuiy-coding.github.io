const TimelineItem = ({ title, degree, company, date, description }) => {
    return (
      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">{title}</h4>
        {degree && <p className="degree">{degree}</p>}
        {company && <p className="company">{company}</p>}
        <span>{date}</span>
        <div className="timeline-text">{description}</div>
      </li>
    );
  }
  
  export default TimelineItem;
  