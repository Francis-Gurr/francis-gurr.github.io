import { ExternalLink } from '@/components/ExternalLink/ExternalLink';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea";
import { toast } from '@/hooks/use-toast';
import { zodResolver } from "@hookform/resolvers/zod";
import { SendIcon } from 'lucide-react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";

interface ContactFormProps {
  children: React.ReactNode;
}

const formSchema = z.object({
  fullName: z.string().min(1, { message: "Full name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z.string().min(1, { message: "Subject is required." }),
  body: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const ContactForm: React.FC<ContactFormProps> = ({ children }) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      body: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSending(true);


    try {
      const response = await fetch("https://formspree.io/f/xbldyznz", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        form.reset(); // Clear the form after success
        setIsDialogOpen(false)
        toast({
          title: "Message sent!",
          description: "I'll get back to you soon.",
          variant: 'success'
        })
      } else {
        throw new Error();
      }
    } catch {
      toast({
        variant: 'error',
        description: "Please try again or contact me using a different method.",
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="max-w-l">
          <DialogHeader>
            <DialogTitle className="text-xl">Contact me</DialogTitle>
            <DialogDescription>
              You can send me a message here. Alternatively, connect on <ExternalLink href="" newTab={true} >LinkedIn</ExternalLink>, check out my work on <ExternalLink href="" newTab={true}>GitHub</ExternalLink>, or email me directly at <strong>francis.gurr@gmail.com</strong>.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="space-y-4" action="https://formspree.io/f/xbldyznz" method="POST">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Arthur Pendragon" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="arthur.pendragon@camelot.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Urgent: Sword Stuck in Stone (Again)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="body"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Hey, so, quick question…
If a certain legendary sword hypothetically found its way back into a certain famous stone… how difficult would it be to, say, Photoshop it out of the official records? Totally not asking for any particular reason.
Awaiting your wisdom, Arthur." {...field} rows={6} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="submit" disabled={isSending} className='w-40'>
                  <span className='flex justify-between w-full items-center'>
                    {isSending ? 'Sending...' : 'Send message'} <SendIcon />
                  </span>
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  )
}

export { ContactForm };
