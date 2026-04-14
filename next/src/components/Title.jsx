
const Title = ({title,subTitle}) => {
  return (
    <div>
        <h2 className="text-4xl text-primary font-bold mb-10 text-center">{title}</h2>
        <p>{subTitle}</p>
    </div>
  )
}

export default Title