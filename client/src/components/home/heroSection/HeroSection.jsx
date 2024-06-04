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
    <div className="">
      <div className=" relative background-image text-white opacity-90  h-[400px] flex justify-center items-center w-full bg-cover ">
   <div className="absolute w-full h-full bg-black/20"></div>
    <div className="z-30">
      <p className="text-center text-5xl font-sans font-medium ">
Find Your Perfect Stay
</p>
<p className="text-xl font-semibold">Book your dream hotel now for the best prices and exclusive offers.</p>
    </div>
      <div className=" translate-y-6 border text-black bg-white rounded-lg shadow-md absolute bottom-0"> <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" flex  rounded-md p-1 gap-3   justify-start items-center"
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
      </Form></div>
      </div>
     
      
    </div>
  );
};

export default HeroSection;
