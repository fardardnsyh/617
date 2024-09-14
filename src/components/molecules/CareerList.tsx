import { career } from "@/data/local/career";
import CareerItem from "../atoms/CareerItem";

export default function CareerList() {
  return (
    <>
      {career.map(({ id, company, position, duration, type, logo, link }) => (
        <CareerItem
          key={id}
          company={company}
          position={position}
          duration={duration}
          type={type}
          logo={logo}
          link={link}
        />
      ))}
    </>
  );
}
