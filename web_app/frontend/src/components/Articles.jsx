import ArticleCard from "./ArticleCard";

const Articles = () => {
  return (
    <div className="grid grid-cols-2 place-items-center gap-[4rem] max-w-[70%] mx-auto">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
    </div>
  )
}
export default Articles;