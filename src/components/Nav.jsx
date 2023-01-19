export default ({cast, onChoice}) => {
  return (
    <nav className="container">
      <ul>
        <li role="list" dir="rtl">
          <a href="#" aria-haspopup="listbox">Cast</a>
          <ul role="listbox">
            {
              cast.map((member) => (
                <li key={member.id}>
                  <a onClick={() => onChoice(member)}>{member.name}</a>
                </li>
              ))
            }
          </ul>
        </li>
      </ul>
</nav>
  )
}