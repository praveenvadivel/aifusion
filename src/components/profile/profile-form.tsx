"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { updateUserProfile } from "@/lib/actions";
import { Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { sampleUser } from "@/lib/placeholder-data";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phoneNumber: z.string().min(10, { message: "Phone number must be at least 10 characters." }),
  dob: z.string().refine((val) => !isNaN(Date.parse(val)), { message: "Please enter a valid date." }),
  bloodGroup: z.string().min(1, { message: "Blood group is required." }),
  systolic: z.coerce.number().min(1, { message: "Required" }),
  diastolic: z.coerce.number().min(1, { message: "Required" }),
  fasting: z.coerce.number().min(1, { message: "Required" }),
  postPrandial: z.coerce.number().min(1, { message: "Required" }),
  healthIssues: z.string().optional(),
});

export function ProfileForm({ className }: React.ComponentProps<"form">) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: sampleUser.name,
      phoneNumber: sampleUser.phoneNumber,
      dob: sampleUser.dob,
      bloodGroup: sampleUser.healthData.bloodGroup,
      systolic: sampleUser.healthData.bloodPressure.systolic,
      diastolic: sampleUser.healthData.bloodPressure.diastolic,
      fasting: sampleUser.healthData.sugarLevel.fasting,
      postPrandial: sampleUser.healthData.sugarLevel.postPrandial,
      healthIssues: sampleUser.healthData.healthIssues.join(", "),
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const result = await updateUserProfile(values);
      toast({
        title: "Profile Updated",
        description: "Your information has been saved successfully.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Update Failed",
        description: "There was a problem saving your profile.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit Your Information</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className={cn("space-y-8", className)}>
            <div className="grid md:grid-cols-2 gap-8">
                <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl><Input {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>
                )}/>
                <FormField control={form.control} name="phoneNumber" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl><Input {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>
                )}/>
                <FormField control={form.control} name="dob" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Date of Birth</FormLabel>
                        <FormControl><Input type="date" {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>
                )}/>
                <FormField control={form.control} name="bloodGroup" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Blood Group</FormLabel>
                        <FormControl><Input {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>
                )}/>
            </div>

            <h3 className="text-lg font-semibold font-headline">Health Metrics</h3>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="grid grid-cols-2 gap-4">
                    <FormField control={form.control} name="systolic" render={({ field }) => (
                        <FormItem><FormLabel>Systolic BP</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem>
                    )}/>
                    <FormField control={form.control} name="diastolic" render={({ field }) => (
                        <FormItem><FormLabel>Diastolic BP</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem>
                    )}/>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <FormField control={form.control} name="fasting" render={({ field }) => (
                        <FormItem><FormLabel>Fasting Sugar</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem>
                    )}/>
                    <FormField control={form.control} name="postPrandial" render={({ field }) => (
                        <FormItem><FormLabel>Post-Prandial</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem>
                    )}/>
                </div>
            </div>

            <FormField control={form.control} name="healthIssues" render={({ field }) => (
                <FormItem>
                    <FormLabel>Health Issues (comma-separated)</FormLabel>
                    <FormControl><Textarea placeholder="e.g., High Cholesterol, Asthma" {...field} /></FormControl>
                    <FormMessage />
                </FormItem>
            )}/>

            <Button type="submit" disabled={isLoading} className="bg-accent hover:bg-accent/90 text-accent-foreground">
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Save Changes
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
