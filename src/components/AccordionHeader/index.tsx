import { TranslateProps } from "@/@types";
import * as Accordion from "@radix-ui/react-accordion";
import { CaretDown } from "phosphor-react";
import { AccordionContainer } from "./styles";

export function AccordionHeader({ textTranslated }: TranslateProps) {
  return (
    <AccordionContainer style={{ paddingTop: "80px" }}>
      <Accordion.Root
        className="AccordionRoot"
        type="single"
        defaultValue="item-1"
        collapsible
      >
        <Accordion.Item className="AccordionItem" value="item-1">
          <Accordion.Header className="AccordionHeader">
            <Accordion.Trigger className="AccordionTrigger">
              Home
            </Accordion.Trigger>
          </Accordion.Header>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-2">
          <Accordion.Header className="AccordionHeader">
            <Accordion.Trigger className="AccordionTrigger">
              {textTranslated?.("product")}
              <CaretDown size={14} className="AccordionChevron" aria-hidden />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="AccordionContent">
            <div className="AccordionContentText">Maincore Vega</div>
          </Accordion.Content>
          <Accordion.Content className="AccordionContent">
            <div className="AccordionContentText">Maincore Sirius</div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-3">
          <Accordion.Header className="AccordionHeader">
            <Accordion.Trigger className="AccordionTrigger">
              {textTranslated?.("resources")}
            </Accordion.Trigger>
          </Accordion.Header>
        </Accordion.Item>
      </Accordion.Root>
    </AccordionContainer>
  );
}
