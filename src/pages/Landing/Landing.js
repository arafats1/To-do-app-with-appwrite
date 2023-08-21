import { appwrite, github, twitter, react, linkedin } from "../icons";
import { useHistory } from "react-router-dom";

const Landing = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/todos");
  };

  const links = [
    {
      href: "https://github.com/arafats1/To-do-app-with-appwrite",
      icon: github(10),
    },
    {
      href: "https://twitter.com/thats_arafat",
      icon: twitter(10),
    },
    {
      href: "https://www.linkedin.com/in/alaphat-magezi-85aa9632/",
      icon: linkedin(10),
    },
  ];

  return (
    <>
      <section className="container h-screen mx-auto flex">
        <div className="flex flex-col mx-auto justify-center p-6 text-center">
        <p className="my-8 text-xl md:text-2xl lg:text-3xl font-medium">
            Welcome to
          </p>
          <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold">Your Daily Planner</h1>
          
          <button
            onClick={handleClick}
            className="mx-auto mt-4 py-3 lg:py-5 px-10 lg:px-24 text-lg md:text-2xl font-semibold  rounded-lg shadow-md bg-white text-gray-900 border border-gray-900 hover:border-transparent hover:text-white hover:bg-gray-900 focus:outline-none"
          >
            Get Started
          </button>
        </div>
      </section>

      <section className="absolute bottom-0 right-0 py-3 px-6 mr-8 mb-8 flex">
        {links.map((item, key) => (
          <div key={key} className="rounded-full mx-4 transition duration-200 ease-in-out transform hover:-translate-y-3 hover:scale-125 hover:shadow-4xl">
            <a href={item["href"]}>{item["icon"]}</a>
          </div>
        ))}
      </section>
    </>
  );
};

export default Landing;
