import Profile from '@/Components/Profile'
import React, { useEffect, useState } from 'react'

const Repo = () => {
  const [items, setItems] = useState([])
  // Change this to any username whose repositories you want to get
  const [user] = useState("SametYurtoglu") //github isminiz yazın aksi takdirde hata alırsınız

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(
        `https://api.github.com/users/${user}/repos?per_page=6&sort=updated`
      )
      const data = await res.json()
      setItems(data)
      console.log(data)
    }

    fetchRepos()
  }, [user])
  return (
    <div className="">
      <div className="flex flex-col gap-y-10 ">
        <div className="bg-gray-800/30 w-full h-[4rem] flex items-center">
          <h1 className='container mx-auto text-gray-300 font-medium text-xl flex gap-3 items-center'>
            Github Repository
            <a href="https://github.com/SankThomas/github-users" className='text-blue-600 underline text-sm' target={'_blank'} rel="noreferrer">Producer</a>
          </h1>
        </div>
        <div className="container mx-auto">
          {!items ? (
            ''
          ) : (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 pb-20">
              {items.map((item) => (
                <Profile key={item.id} {...item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Repo