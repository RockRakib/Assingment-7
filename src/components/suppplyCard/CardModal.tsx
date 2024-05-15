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
import { useAddSupplyMutation } from "@/features/api/apiSlice";
import { FormEvent, useState } from "react";

export function CardModal() {
  const [addSupply, { data, isSuccess, isError, isLoading }] =
    useAddSupplyMutation();
  const [title, setTitle] = useState("");
  const [category, setCategoty] = useState("");
  const [amount, setAmount] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const resetForm = () => {
    setTitle("");
    setAmount("");
    setCategoty("");
    setImageUrl("");
    setDescription("");
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addSupply({ title, category, amount, imageUrl, description });
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
        <Button className=" px-20 py-8 text-lg mt-10"> Add Supply</Button>
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
                onChange={(e) => setTitle(e.target.value)}
                className="  w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed"
                placeholder="title"
              />
            </div>
            <div className="mb-4 col-span-1 md:col-span-3">
              <Input
                onChange={(e) => setCategoty(e.target.value)}
                className="  w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed"
                placeholder="categoty"
              />
            </div>
            <div className="mb-4 col-span-1 md:col-span-3">
              <Input
                onChange={(e) => setAmount(e.target.value)}
                className="  w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed"
                placeholder="amount"
              />
            </div>
            <div className="mb-4 col-span-1 md:col-span-3">
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed resize-none"
                placeholder="description"
              ></textarea>
            </div>
            <div className="mb-4 col-span-1 md:col-span-3">
              <textarea
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed resize-none"
                placeholder="imageUrl"
              ></textarea>
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
