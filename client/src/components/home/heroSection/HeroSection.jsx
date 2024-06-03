import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { validation } from "./validation";
import { Link } from "react-router-dom";
import DatePickerWithRange from "./DateWithRangePicker";
import PopOver from "./PopOver";



const HeroSection = () => {
  const form = validation()
  function onSubmit(data) {
    console.log(data)
  }
  return (
    <div className="container min-h-screen grid place-items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="  flex border-2 rounded-md p-1 gap-3 border-blue-600 ring-4 ring-blue-600/30  justify-start items-center"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Email</FormLabel> */}
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>North America</SelectLabel>
                      <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                      <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                      <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                      <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                      <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                      <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                    </SelectGroup>
                  </SelectContent>

                </Select>
                {/* <FormDescription>
                  You can manage email addresses in your{" "}
                  <Link to="/examples/forms">email settings</Link>.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <DatePickerWithRange />
          <PopOver />
          <Button type="submit" className='bg-blue-600'>Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default HeroSection;
