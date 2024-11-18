import LinkCustom from "@/components/LinkCustom/LinkCustom";

const Home = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center gap-14">
      <h1 className="text-xl">Welcome to Bar Buddy!</h1>
      <LinkCustom href="/selection">Get Started</LinkCustom>
    </section>
  );
};

export default Home;
