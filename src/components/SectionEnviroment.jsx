
export const SectionEnviroment = ({env}) => {
  return (
    <>
        <div>{env.enviroment}</div>
        <hr />
        {env.links.map(data =>{
            return (<>
                        <a href={data.link} target='_blank'>
                            <button>{data.name}</button>
                        </a>
                    </>
                    )
        })}
    </>
  )
}
