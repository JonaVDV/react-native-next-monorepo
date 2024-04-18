"use client";
import { Button } from "@acme/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useForm,
} from "@acme/ui/form";
import { Input } from "@acme/ui/input";
import { authValidator } from "@acme/validators";



// export async function AuthShowcase() {
//   // const { session, user } = await validateRequest();
//   const form = useForm({
//     schema: authValidator,
//   });

//   if (!) {
//     return (
//       <div>
//         <Form {...form}>
//           <form action="">
//             <FormField
//               name="username"
//               control={form.control}
//               render={({ field }) => (
//                 <FormItem>
//                   <FormControl>
//                     <Input {...field} placeholder="Title" />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               name="password"
//               control={form.control}
//               render={({ field }) => (
//                 <FormItem>
//                   <FormControl>
//                     <Input {...field} placeholder="Title" />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </form>
//         </Form>
//       </div>
//     );
//   }

//   return <div></div>;
// }

export function CreateSignupForm() {

  const form = useForm({
    schema: authValidator,
  });

  return (
    <div>
      <Form {...form}>
        <form className="grid gap-2" onSubmit={form.handleSubmit((data) => {
          console.log(data);
        })}>
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
        <Button>
          sign up
        </Button>
        </form>

      </Form>
    </div>
  );
}
