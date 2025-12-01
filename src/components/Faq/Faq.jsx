import { Accordion } from "./../Accordion/Accordion";
import { accordionItems } from "./../../constants/MainData";
export const Faq = () => {
  return (
    <div className="accordion-wrapper">
      <h3>FAQs</h3>
      {accordionItems.map((item, index) => (
        <Accordion key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};
