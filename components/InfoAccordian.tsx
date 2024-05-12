// "use client";

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
          <AccordionTrigger className="text-lg font-medium text-white text-left">
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
          <AccordionTrigger className="text-lg font-medium text-white text-left">
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
      <div>
        <Accordion collapsible type="single">
          <AccordionItem value="how-is-mmi-calculated">
            <AccordionTrigger className="text-lg font-medium text-white text-left">
              How is the Market Mood Index calculated?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-500 dark:text-gray-400">
                The discrepancy between CNN's MMI index and tickertape's MMI
                index stems from differing methodologies and data sources. The
                MMI scale, combining unemployment and inflation rates, evaluates
                economic health. Variations arise from distinct data
                sourcing—government statistics versus independent research—and
                diverse weighting methods, affecting final values. Calculation
                algorithms, update frequencies, and geographical scopes also
                contribute. Each index may prioritize unemployment and inflation
                differently, impacting MMI values. These differences underscore
                the complexity of economic analysis and highlight the importance
                of comprehending diverse factors influencing composite indices
                like the MMI.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
