import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useAddVolunteerMutation } from "@/features/api/apiSlice";
import { FormEvent, useState } from "react";

export function VolunteerModal() {
  const [addVolunteer, { data, isSuccess, isError, isLoading }] =
    useAddVolunteerMutation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [location, setLocation] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setphoneNumber("");
    setLocation("");
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addVolunteer({ name, email, phoneNumber, location });
    resetForm();
  };
  let Contain = null;
  if (isLoading) {
    Contain = <h1>this is loading</h1>;
  }
  if (!isLoading && isError) {
    Contain = <h1>this is eor</h1>;
  }
  if (!isLoading && !isError && isSuccess) {
    Contain = <h1>Thanks For Your Comment</h1>;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" px-16 py-4 text-sm mt-10"> Be a Volunteer</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle> Add Supply</DialogTitle>
          <DialogDescription>Make changes Enter correct Data</DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit}
          className=" w-full p-4 rounded shadow-md"
          action="submit"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="mb-4 col-span-1 md:col-span-3">
              <Input
                onChange={(e) => setName(e.target.value)}
                className="  w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed"
                placeholder="Name"
              />
            </div>
            <div className="mb-4 col-span-1 md:col-span-3">
              <Input
                onChange={(e) => setEmail(e.target.value)}
                className="  w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed"
                placeholder="email"
              />
            </div>
            <div className="mb-4 col-span-1 md:col-span-3">
              <Input
                onChange={(e) => setphoneNumber(e.target.value)}
                className="  w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed"
                placeholder="phone"
              />
            </div>
            <div className="mb-4 col-span-1 md:col-span-3">
              <Input
                onChange={(e) => setLocation(e.target.value)}
                className="  w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed"
                placeholder="Location"
              />
            </div>
          </div>
          {Contain}
          <div className="flex justify-end">
            <DialogTrigger asChild>
              <Button type="submit">Save changes</Button>
            </DialogTrigger>
          </div>
        </form>

        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
