interface PageTitleProps {
  title: string;
  emoji: string;
}

const PageTitle = ({ title, emoji }: PageTitleProps) => {

  return (
    <div className="page-header">
      <p className="emoji">{emoji}</p>
      <h1>{title}</h1>
    </div>
  )
}

export default PageTitle