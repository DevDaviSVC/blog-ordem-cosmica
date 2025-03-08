import { IoSearchSharp } from "react-icons/io5";
import Articles from "../../components/Articles";
import SearchForm from "../../components/SearchForm";

const Home = () => {
  return (
    <section className="container pt-[10rem] pb-[4rem]">
      <SearchForm />
      <Articles />
    </section>
  );
};
export default Home;
