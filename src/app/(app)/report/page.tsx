import PageHeader from "@/components/shared/page-header";
import { ReportPreview } from "@/components/report/report-preview";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function ReportPage() {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
                <PageHeader title="Medical Report" description="Here is a preview of your downloadable A4 report." />
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                </Button>
            </div>
            <div className="flex justify-center">
                <ReportPreview />
            </div>
        </div>
    );
}
