import Container from "../components/Container";
import Card from "../components/card/page";
import Course from "../courses/coursesCard/page";

const getProps = async () => {
  try {
    const response = await fetch(
      "http://127.0.0.1:1337/api/cards?populate=CardBackgroundImage,units,CourseOutline",
      {
        cache: "no-cache",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Fetching error: ${error}`);
    return { data: [] }; // Return an empty array in case of an error
  }
};

const Page = async () => {
  const Data = getProps();
  return (
    <Container>
      <div className="p-4">
        <h1 className="py-6 text-2xl font-bold my-4 text-primary-green">
          INTERNATIONAL COURSES
        </h1>
        <div>
          <Card data={Data} />
        </div>

        {/* Courses */}
        <div>
          <div className="pb-8 flex flex-row flex-wrap gap-10">
            <Course
              pageRoute="/courses/othm-l6"
              name="OTHM Level 6 Diploma in Occupational Health and Safety"
            />
            <Course
              pageRoute="/courses/neb-igc"
              name="NEBOSH International General Certificate (IGC)"
            />
            <Course pageRoute="/courses/iosh-ms" name="IOSH Managing Safely" />
            <Course
              pageRoute="/courses/osha-giot"
              name="OSHA 30-Hour General Industry Outreach Training"
            />
            <Course
              pageRoute="/courses/osha-cot"
              name="OSHA 30-Hour Construction Outreach Training"
            />
            <Course
              pageRoute="/courses/osha-csht"
              name="OSHA 48-Hour Construction Safety and Health Training"
            />
            <Course
              pageRoute="/courses/iso-ems"
              name="ISO 14001 Environmental Management System (EMS)"
            />
            <Course
              pageRoute="/courses/iso-ohsms"
              name="ISO 45001 Occupational Health and Safety Management System (OHSMS)"
            />
            <Course
              pageRoute="/courses/iso-qms"
              name="ISO 9001 Quality Management System (QMS)"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;
