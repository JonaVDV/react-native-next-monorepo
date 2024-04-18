"use client";
import { signup } from "@acme/auth";
import { Button } from "@acme/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, useForm } from "@acme/ui/form";
import { Input } from "@acme/ui/input";
import { authValidator } from "@acme/validators";


export default function SignUpForm() {

  const form = useForm({
    schema: authValidator,
  });


  return (
    <div>
      <Form {...form}>
        <form className="grid gap-2">
          <FormField
            name="username"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" {...field} placeholder="username" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} placeholder="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant='outline'>sign up</Button>
        </form>
      </Form>
    </div>
  );
}
