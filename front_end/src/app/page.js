import Footer_index from "./Components/home/Footer/footer_index";
import Header_index from "./Components/home/Header/header_index";
import Body_index from "./Components/home/body/body_index";


export default function Home() {
  return (
    <main className="">
      {/* //This is header section */}
      <section >
        <Header_index />
      </section>

      {/* //This is middle section */}
      <section>
        <Body_index />
      </section>

      {/* //This is footer section */}
      <section>
        <Footer_index />
      </section>
    </main>
  );
}
