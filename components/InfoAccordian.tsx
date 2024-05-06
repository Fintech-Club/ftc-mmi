import {
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
  Accordion,
} from "@/components/ui/accordion";
export default function InfoAccordion() {
  return (
    <div className="container max-w-3xl mt-12 md:mt-16 grid gap-8">
      <Accordion collapsible type="single">
        <AccordionItem value="what-is-mmi">
          <AccordionTrigger className="text-lg font-medium text-white">
            What is the Market Mood Index?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-500 dark:text-gray-400">
              The Market Mood Index (MMI) is a sentiment indicator that measures
              the overall mood and sentiment of the stock market. It is
              calculated by analyzing various data points, such as news
              articles, social media sentiment, and market activity. The MMI
              provides a snapshot of the current market sentiment, which can be
              useful for investors and traders in making informed decisions.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion collapsible type="single">
        <AccordionItem value="how-is-mmi-calculated">
          <AccordionTrigger className="text-lg font-medium text-white">
            How is the Market Mood Index calculated?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-500 dark:text-gray-400">
              The Market Mood Index is calculated by analyzing a variety of data
              sources, including news articles, social media sentiment, and
              market activity. The index takes into account factors such as the
              tone of news coverage, the sentiment expressed on social media,
              and the overall volatility and trading volume in the stock market.
              The resulting index value provides a snapshot of the current
              market sentiment, which can range from highly positive to highly
              negative.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
