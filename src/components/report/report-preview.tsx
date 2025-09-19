import { sampleUser, sampleSchemes } from "@/lib/placeholder-data";
import { Badge } from "@/components/ui/badge";
import { HeartPulse, Landmark } from "lucide-react";

export function ReportPreview() {
    const { name, phoneNumber, dob, healthData } = sampleUser;
    const eligibleSchemes = [
        { schemeId: 'scheme-001', schemeName: 'National Health Protection Scheme', eligibleAmount: 500000 },
        { schemeId: 'scheme-004', schemeName: 'Diabetes Care Initiative', eligibleAmount: 25000, notes: "Based on health issues." }
    ];

    return (
        <div className="w-full max-w-[210mm] min-h-[297mm] bg-white text-black p-12 shadow-2xl rounded-lg font-sans">
            <header className="flex items-center justify-between border-b-2 border-gray-200 pb-4">
                <div className="font-headline">
                    <h1 className="text-3xl font-bold text-primary">HealthMate Report</h1>
                    <p className="text-gray-500">Generated on: {new Date().toLocaleDateString()}</p>
                </div>
                <HeartPulse className="h-12 w-12 text-accent" />
            </header>

            <section className="mt-8">
                <h2 className="text-xl font-bold font-headline text-primary border-b border-gray-200 pb-2 mb-4">Personal Information</h2>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                    <div><strong>Name:</strong> {name}</div>
                    <div><strong>Phone:</strong> {phoneNumber}</div>
                    <div><strong>Date of Birth:</strong> {new Date(dob).toLocaleDateString()}</div>
                    <div><strong>Blood Group:</strong> <Badge variant="outline" className="text-primary border-primary">{healthData.bloodGroup}</Badge></div>
                </div>
            </section>

            <section className="mt-8">
                <h2 className="text-xl font-bold font-headline text-primary border-b border-gray-200 pb-2 mb-4">Health Metrics</h2>
                <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                        <span>Blood Pressure (Systolic/Diastolic):</span>
                        <strong>{healthData.bloodPressure.systolic}/{healthData.bloodPressure.diastolic} mmHg</strong>
                    </div>
                    <div className="flex justify-between">
                        <span>Fasting Blood Sugar:</span>
                        <strong>{healthData.sugarLevel.fasting} mg/dL</strong>
                    </div>
                    <div className="flex justify-between">
                        <span>Post-Prandial Blood Sugar:</span>
                        <strong>{healthData.sugarLevel.postPrandial} mg/dL</strong>
                    </div>
                     <div className="flex justify-between">
                        <span>Last Checked:</span>
                        <strong>{new Date(healthData.bloodPressure.lastChecked).toLocaleDateString()}</strong>
                    </div>
                </div>
            </section>
            
            <section className="mt-8">
                <h2 className="text-xl font-bold font-headline text-primary border-b border-gray-200 pb-2 mb-4">Health Issues / Backlogs</h2>
                 {healthData.healthIssues.length > 0 ? (
                    <ul className="list-disc list-inside space-y-1 text-sm">
                        {healthData.healthIssues.map((issue, index) => (
                            <li key={index}>{issue}</li>
                        ))}
                    </ul>
                ) : <p className="text-sm text-gray-500">None reported.</p>}
            </section>

            <section className="mt-8">
                <h2 className="text-xl font-bold font-headline text-primary border-b border-gray-200 pb-2 mb-4 flex items-center gap-2">
                    <Landmark className="h-5 w-5"/>
                    Eligible Government Schemes
                </h2>
                {eligibleSchemes.length > 0 ? (
                    <div className="space-y-4 text-sm">
                        {eligibleSchemes.map(scheme => (
                            <div key={scheme.schemeId} className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-semibold">{scheme.schemeName}</h3>
                                    <p className="font-bold text-primary">₹{scheme.eligibleAmount.toLocaleString()}</p>
                                </div>
                                {scheme.notes && <p className="text-xs italic text-gray-600 mt-1">Note: {scheme.notes}</p>}
                            </div>
                        ))}
                    </div>
                ) : <p className="text-sm text-gray-500">No eligible schemes found based on current data.</p>}
            </section>

            <footer className="mt-16 text-center text-xs text-gray-400 border-t pt-4">
                <p>This report is generated by HealthMate and is for informational purposes only. Consult a doctor for medical advice.</p>
                <p>HealthMate | Your Personal Healthcare Companion</p>
            </footer>
        </div>
    );
}
