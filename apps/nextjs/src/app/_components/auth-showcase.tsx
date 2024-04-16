import {validateRequest } from "@acme/auth";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  useForm,
} from "@acme/ui/form";
import { Input } from "@acme/ui/input";
import { authValidator } from "@acme/validators";


export async function AuthShowcase() {
  const { session, user } = await validateRequest();
  const form = useForm({
    schema: authValidator,
  });

  if (!session) {
    return (
      <div>
        <Form {...form}>
          <form action="">
            <FormField
              name="username"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} placeholder="Title" />
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
                  <FormControl>
                    <Input {...field} placeholder="Title" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    );
  }

  return <div></div>;
}
