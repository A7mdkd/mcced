'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { submitQuoteAction, type QuoteState } from '../app/quote/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from "@/hooks/use-toast";
import { Loader2, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const initialState: QuoteState = {
  message: null,
  error: null,
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} variant="secondary" className="w-full text-primary-foreground border-white hover:bg-white hover:text-primary">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      SUBMIT
      <ArrowRight />
    </Button>
  );
}

export function InlineQuoteForm() {
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

  const inputStyles = "bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/20 focus:ring-white";

  return (
    <form action={formAction} className="space-y-4">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <Select name="serviceType" required>
          <SelectTrigger className={cn(inputStyles)}>
            <SelectValue placeholder="Type of Service" />
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
        <Input name="destination" placeholder="Destination" required className={inputStyles} />
        <Input name="name" placeholder="Full Name" required className={inputStyles} />
        <Input name="email" type="email" placeholder="Email" required className={inputStyles} />
        <Input name="weight" placeholder="Weight (kg, optional)" className={inputStyles} />
        <Input name="dimensions" placeholder="Dimensions (cm, optional)" className={inputStyles} />
        <Textarea name="specialHandling" placeholder="Special Handling (optional)" className={cn(inputStyles, "md:col-span-2")} rows={3} />
      </div>
      <div className="pt-4">
        <SubmitButton />
      </div>
       {state.error && (
            <p className="text-sm font-medium text-destructive">{state.error}</p>
      )}
       {state.errors?.name && <p className="text-sm font-medium text-destructive">{state.errors.name[0]}</p>}
       {state.errors?.email && <p className="text-sm font-medium text-destructive">{state.errors.email[0]}</p>}
       {state.errors?.destination && <p className="text-sm font-medium text-destructive">{state.errors.destination[0]}</p>}
       {state.errors?.serviceType && <p className="text-sm font-medium text-destructive">{state.errors.serviceType[0]}</p>}
    </form>
  );
}
