import { GovtScheme } from "@/lib/definitions";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Landmark } from "lucide-react";

type SchemeCardProps = {
    scheme: GovtScheme;
};

export function SchemeCard({ scheme }: SchemeCardProps) {
    return (
        <Card className="flex flex-col hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
                <div className="flex items-start justify-between gap-4">
                    <CardTitle className="font-headline">{scheme.schemeName}</CardTitle>
                    <Landmark className="h-6 w-6 text-accent flex-shrink-0"/>
                </div>
                <CardDescription>{scheme.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{scheme.eligibilityCriteria}</p>
            </CardContent>
            <CardFooter>
                <Badge variant="secondary" className="text-base">
                    Up to ₹{scheme.schemeAmount.toLocaleString()}
                </Badge>
            </CardFooter>
        </Card>
    );
}
