import { useState } from "react"

const Search = () => {

  const [username, setUsername] = useState("")
  const [user, setUser] = useState(null)
  const [error, setError] = useState(false)

  const handleSearch = () => {

  }

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch()
  }

  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" onKeyDown={handleKey} onChange={e=>setUser(e.target.value)}/>
      </div>
      <div className="userChat">
        <img src="https://image.shutterstock.com/image-photo/young-asian-woman-professional-entrepreneur-260nw-2127014192.jpg" alt="" />
        <div className="userChatInfo">
            <span>Kamran</span>
        </div>
      </div>
    </div>
  )
}

export default Search

