import { WelcomeBanner } from "@/components/dashboard/welcome-banner";
import { HealthMetricCard } from "@/components/dashboard/health-metric-card";
import { EligibleSchemes } from "@/components/dashboard/eligible-schemes";
import { sampleUser } from "@/lib/placeholder-data";
import {
  Activity,
  Droplets,
  HeartPulse,
  Thermometer,
  PersonStanding,
} from "lucide-react";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import PageHeader from "@/components/shared/page-header";

export default function DashboardPage() {
  const { healthData } = sampleUser;

  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Dashboard" description="Here's a snapshot of your health and eligible schemes." />
      
      <WelcomeBanner name={sampleUser.name} />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <HealthMetricCard
          title="Blood Pressure"
          value={`${healthData.bloodPressure.systolic}/${healthData.bloodPressure.diastolic}`}
          unit="mmHg"
          icon={HeartPulse}
          trend="stable"
          trendLabel="Last 7 days"
        />
        <HealthMetricCard
          title="Fasting Sugar"
          value={healthData.sugarLevel.fasting.toString()}
          unit="mg/dL"
          icon={Thermometer}
          trend="up"
          trendLabel="+5% from last"
        />
        <HealthMetricCard
          title="Post-Prandial Sugar"
          value={healthData.sugarLevel.postPrandial.toString()}
          unit="mg/dL"
          icon={Thermometer}
          trend="down"
          trendLabel="-2% from last"
        />
        <HealthMetricCard
          title="Blood Group"
          value={healthData.bloodGroup}
          icon={Droplets}
        />
      </div>

      <Suspense fallback={<Skeleton className="h-96 w-full" />}>
        <EligibleSchemes user={sampleUser} />
      </Suspense>
    </div>
  );
}
