import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";

import { MMI, STATUS_REACTION, getReaction } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function MMICard({ mmis }: { mmis: MMI[] }) {
  return (
    <div className="container max-w-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
      {mmis.map((mmi) => (
        <Card className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <CardHeader>
            <CardTitle className="uppercase">{mmi.source}</CardTitle>
            <CardDescription>Market Mood Index</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-4xl font-bold">
                <span
                  className={cn(
                    mmi.score > 30 && mmi.score < 70
                      ? "text-green-500"
                      : "text-red-500"
                  )}
                >
                  {mmi.score}
                </span>
              </div>
              <p className="text-4xl">{getReaction(mmi.status.toString())}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 flex items-center justify-end pt-4">
                Last Updated: {new Date(mmi.$updatedAt).toLocaleString()}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
