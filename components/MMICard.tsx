import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import {
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
  Accordion,
} from "@/components/ui/accordion";
import { AnyNaptrRecord } from "dns";

export default function MMICard() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4 md:p-8">
      <div className="container max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <Card className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <CardHeader>
            <CardTitle>Market Mood Index</CardTitle>
            <CardDescription>CNN</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-4xl font-bold">
                <span className="text-green-500">+2.3%</span>
              </div>
              <TrendingUpIcon className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <CardHeader>
            <CardTitle>Market Mood Index</CardTitle>
            <CardDescription>Tickertape</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-4xl font-bold">
                <span className="text-red-500">-1.7%</span>
              </div>
              <TrendingDownIcon className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <CardHeader>
            <CardTitle>Market Mood Index</CardTitle>
            <CardDescription>Bloomberg</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-4xl font-bold">
                <span className="text-yellow-500">0.0%</span>
              </div>
              <TrendingUpIcon className="w-8 h-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="container max-w-3xl mt-12 md:mt-16 grid gap-8">
        <Accordion collapsible type="single">
          <AccordionItem value="what-is-mmi">
            <AccordionTrigger className="text-lg font-medium">
              What is the Market Mood Index?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-500 dark:text-gray-400">
                The Market Mood Index (MMI) is a sentiment indicator that
                measures the overall mood and sentiment of the stock market. It
                is calculated by analyzing various data points, such as news
                articles, social media sentiment, and market activity. The MMI
                provides a snapshot of the current market sentiment, which can
                be useful for investors and traders in making informed
                decisions.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion collapsible type="single">
          <AccordionItem value="how-is-mmi-calculated">
            <AccordionTrigger className="text-lg font-medium">
              How is the Market Mood Index calculated?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-500 dark:text-gray-400">
                The Market Mood Index is calculated by analyzing a variety of
                data sources, including news articles, social media sentiment,
                and market activity. The index takes into account factors such
                as the tone of news coverage, the sentiment expressed on social
                media, and the overall volatility and trading volume in the
                stock market. The resulting index value provides a snapshot of
                the current market sentiment, which can range from highly
                positive to highly negative.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}

function TrendingDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
      <polyline points="16 17 22 17 22 11" />
    </svg>
  );
}

function TrendingUpIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
