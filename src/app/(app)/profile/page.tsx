import PageHeader from "@/components/shared/page-header";
import { ProfileForm } from "@/components/profile/profile-form";

export default function ProfilePage() {
    return (
        <div className="flex flex-col gap-8">
            <PageHeader title="Your Profile" description="Manage your personal and health information." />
            <div className="max-w-4xl mx-auto w-full">
                <ProfileForm />
            </div>
        </div>
    );
}