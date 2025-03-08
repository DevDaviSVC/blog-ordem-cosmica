import trumpImg from "../assets/trump-img-cover.png";

const ArticleCard = () => {
  return (
    <div className="text-center backgroundAltTwo text-gray-950 rounded-lg p-5">
      <div className="w-full overflow-hidden flex items-center justify-center max-h-[200px]">
        <img src={trumpImg} alt="trump_img" className="w-full block" />
      </div>
      <div className="mt-[1rem] text-start">
        <h2 className="font-semibold text-xl mb-[0.5rem]">Trump deleta seu blog após 20 dias de seu lançamento</h2>
        <p className="font-[500] textColorAlt text-sm">22 hours ago</p>
      </div>
    </div>
  );
};
export default ArticleCard;
