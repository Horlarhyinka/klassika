const HomeDepartmentCard = ({icon, deptName}) =>{
  return <div className="homedepartmentcard">
  <span>{icon}</span>
  <p>{deptName}</p>
  </div>
}

const QuickLlinkCard = ({icon, linkTitle})=>{
  return <div className="qlinkcard">
  <span>{icon}</span>
  <p>{linkTitle}</p>
  </div>
}
export {HomeDepartmentCard, QuickLlinkCard}
