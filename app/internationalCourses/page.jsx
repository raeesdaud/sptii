import Container from "../components/Container";
import Card from "../components/card/page";


const getProps = async () => {
  try {
    const response = await fetch('http://127.0.0.1:1337/api/cards?populate=CardBackgroundImage,units,CourseOutline',{
      cache : 'no-cache'
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Fetching error: ${error}`);
    return { data: [] }; // Return an empty array in case of an error
  }
};


const Page = async() => {
  const Data = getProps()
  return (
    <Container>
      <div>
        <h1 className="text-2xl font-semibold my-4 text-black">
          INTERNATIONAL COURSES
        </h1>
        <div>
          <Card data={Data} />
        </div>
      </div>
    </Container>
  );
};

export default Page;
