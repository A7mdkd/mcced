
'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { submitQuoteAction, type QuoteState } from './actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from "@/hooks/use-toast";
import { Loader2, AlertCircle, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const initialState: QuoteState = {
  message: null,
  error: null,
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Request Quote
      <ArrowRight />
    </Button>
  );
}

export function QuoteForm() {
  const [state, formAction] = useActionState(submitQuoteAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({
        title: "Success!",
        description: state.message,
      });
    }
    if (state.error && !state.message) {
        toast({
            variant: "destructive",
            title: "Error",
            description: state.error,
        });
    }
  }, [state, toast]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Request a Free Quote</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="serviceType">Type of Service</Label>
               <Select name="serviceType" required>
                <SelectTrigger id="serviceType">
                    <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="cargo-service">Cargo Service</SelectItem>
                    <SelectItem value="air-freight">Air Freight</SelectItem>
                    <SelectItem value="sea-freight">Sea Freight</SelectItem>
                    <SelectItem value="road-freight">Road Freight</SelectItem>
                    <SelectItem value="rail-freight">Rail Freight</SelectItem>
                    <SelectItem value="customs">Customs</SelectItem>
                    <SelectItem value="consultation">Consultation</SelectItem>
                    <SelectItem value="supply-chain">Supply Chain Management</SelectItem>
                    <SelectItem value="logistics">Logistics</SelectItem>
                    <SelectItem value="business-development">Business Development</SelectItem>
                </SelectContent>
              </Select>
              {state.errors?.serviceType && <p className="text-sm font-medium text-destructive">{state.errors.serviceType[0]}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="destination">Destination</Label>
              <Input id="destination" name="destination" placeholder="e.g., New York, USA" required />
              {state.errors?.destination && <p className="text-sm font-medium text-destructive">{state.errors.destination[0]}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="weight">Weight (kg, optional)</Label>
              <Input id="weight" name="weight" placeholder="e.g., 500" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dimensions">Dimensions (cm, optional)</Label>
              <Input id="dimensions" name="dimensions" placeholder="e.g., 120x80x100" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="specialHandling">Special Handling Instructions</Label>
            <Textarea id="specialHandling" name="specialHandling" placeholder="e.g., Fragile, Keep Refrigerated" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" placeholder="John Doe" required />
              {state.errors?.name && <p className="text-sm font-medium text-destructive">{state.errors.name[0]}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" name="email" type="email" placeholder="you@example.com" required />
              {state.errors?.email && <p className="text-sm font-medium text-destructive">{state.errors.email[0]}</p>}
            </div>
          </div>
          <div className="space-y-2">
              <Label htmlFor="company">Company (optional)</Label>
              <Input id="company" name="company" placeholder="Your Company Inc." />
          </div>

          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
