

const Experience = () => {
  const experiences = [
    
    {
      duration:'Feb 2024 - Present',
      role: 'Project Coordinator Intern',
      company: 'Digital Space',
      description: 'Led Agile Scrum meetings, boosting project efficiency by 49%.  Collaborated with cross-functional product managers and stakeholders to define project requirements, scope, objectives, and deliverables, which led to a 20% reduction in project initiation time.',
      skills: ['Agile Scrum', 'Project Management', 'Communication'],
    }
    ,
    
    { duration: 'Dec 2021 - Sept 2022',
      role: 'Associate Software Engineer / Pseudo Project Coordinator',
      company:'Expenzing',
      description: "Collaborated with cross-functional teams to design and implement scalable features.Developed responsive websites using HTML, CSS, and JavaScript frameworks. Streamlined feedback loops for UX designers in payment-based UI projects, accelerating design iterations by 30% and significantly improving turnaround times for user interface enhancements.",
      skills: ['Java', 'HTML', 'JavaScript', 'React']


    }
  ]
  return (
    <>
      <section className="text-section">
        <div className="experience-list">
          {experiences.map((exp, index)=> (
            <>
            <div key={index} className="section-exp">
              <p className="duration">{exp.duration} </p>
              <h3 className="heading">{exp.role} - {exp.company}</h3>
              <p className="resp">{exp.description}</p>
            </div>
            <ul className="skills">
              {exp.skills.map((skills, index) => (
                <li className="list-skills" key={index}>{skills}</li>
              ))}
            </ul>
          </>
          ))}
        </div>
      </section>
      <div className="borderline"></div>
    </>
  )
}

export default Experience