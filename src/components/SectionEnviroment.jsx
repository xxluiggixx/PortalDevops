
export const SectionEnviroment = ({env}) => {
  const {enviroment} = env;
  return (
      <div className="accordion-item" key={new Date().getMilliseconds()}>
        <h2 className="accordion-header" id={`flush-heading${enviroment}`}>
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${enviroment}`} aria-expanded="false" aria-controls={`flush-collapse${enviroment}`}>
                    {enviroment}    
            </button>
        </h2>
        <div id={`flush-collapse${enviroment}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${enviroment}`} data-bs-parent="#accordionFlushExample" key={new Date().getMilliseconds()}>
          <div className="accordion-body" key={new Date().getMilliseconds()}>
          {env.links.map(data =>{
            return (
                          <a key={data.name} href={data.link} target='_blank' className="btn btn-primary m-1">
                              {data.name}
                          </a>
                    )
          })}
          </div>
        </div>
      </div>
  )
}
