import PageHeader from "@/components/shared/page-header";
import { SchemeCard } from "@/components/schemes/scheme-card";
import { sampleSchemes } from "@/lib/placeholder-data";

export default function SchemesPage() {
    return (
        <div className="flex flex-col gap-8">
            <PageHeader title="Government Schemes" description="Browse all available health schemes." />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {sampleSchemes.map((scheme) => (
                    <SchemeCard key={scheme.schemeId} scheme={scheme} />
                ))}
            </div>
        </div>
    );
}