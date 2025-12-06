import GenresList from "./GenresList"
const SideBar = () => {
  return (
    <aside className="bg-gray-900 w-52 shadow-lg text-white">
      <h1 className="font-bold text-2xl p-2">Genres</h1>
      <GenresList/>
    </aside>
  )
}

export default SideBar
