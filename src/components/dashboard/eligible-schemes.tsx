import { recommendEligibleGovtSchemes } from "@/ai/flows/recommend-eligible-govt-schemes";
import { User, GovtScheme } from "@/lib/definitions";
import { sampleSchemes } from "@/lib/placeholder-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Landmark } from "lucide-react";

type EligibleSchemesProps = {
  user: User;
};

export async function EligibleSchemes({ user }: EligibleSchemesProps) {
  const input = {
    healthData: {
      ...user.healthData,
      income: 50000, // Assuming a mock income
      age: new Date().getFullYear() - new Date(user.dob).getFullYear(),
    },
    schemes: sampleSchemes as any, // Cast because AI schema differs slightly from display schema
  };

  const eligibleSchemes = await recommendEligibleGovtSchemes(input);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
            <Landmark className="h-5 w-5 text-primary" />
            Eligible Government Schemes
        </CardTitle>
      </CardHeader>
      <CardContent>
        {eligibleSchemes && eligibleSchemes.length > 0 ? (
          <Accordion type="single" collapsible className="w-full">
            {eligibleSchemes.map((scheme) => {
              const fullScheme = sampleSchemes.find(s => s.schemeId === scheme.schemeId);
              return (
                <AccordionItem value={scheme.schemeId} key={scheme.schemeId}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex w-full items-center justify-between pr-4">
                        <span className="text-left font-semibold">{scheme.schemeName}</span>
                        <Badge variant="secondary" className="bg-accent/20 text-accent-foreground">
                            Eligible Amount: ₹{scheme.eligibleAmount.toLocaleString()}
                        </Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-2">{fullScheme?.description}</p>
                    {scheme.notes && <p className="text-sm italic text-primary mt-2">Note: {scheme.notes}</p>}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        ) : (
          <p className="text-muted-foreground">
            No specific government schemes match your current profile. We will notify you if this changes.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
