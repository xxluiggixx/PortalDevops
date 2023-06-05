
export const SectionEnviroment = ({env}) => {
  return (
    <>
        <h3 className="text-left">{env.enviroment}</h3>
        {env.links.map(data =>{
          return (
                  <>
                        <a href={data.link} target='_blank' className="btn btn-primary m-1">
                            {data.name}
                        </a>
                  </>
                  )
        })}
        <hr />
    </>
  )
}
