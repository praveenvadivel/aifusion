import PageHeader from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SignupForm } from "@/components/auth/signup-form";

export default function AddUserPage() {
    return (
        <div className="flex flex-col gap-8">
            <PageHeader title="Add a New User" description="Add a family member or dependent to your HealthMate account." />
            <div className="max-w-4xl mx-auto w-full">
                <Card>
                    <CardHeader>
                        <CardTitle>New User Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                       <p className="text-muted-foreground mb-6">This form is a placeholder. In a real application, it would be adapted for adding a new user.</p>
                       <SignupForm />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
