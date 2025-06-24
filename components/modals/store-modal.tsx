'use client'

import { useStoreModal } from "@/hooks/use-store-modal"
import Modal from "../ui/modal"
import * as z from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

const formSchema = z.object({
    name: z.string().min(1, {
        message: 'Store name is required'
    }),
});



const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // Handle form submission logic here
}

export const StoreModal = () => {

    
    const storeModal = useStoreModal();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
    
        }
    });

    return (
        <Modal 
        title="Create store"
        description="Tambah store anda di sini"
        isOpen={storeModal.isOpen}
        onClose={storeModal.OnClose}
        >
        <div>
            <div>
                <Form {...form}>
                    <form>
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Store Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Nama Toko" {...field}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}/>
                        <div>
                            <Button>
                                Cancel
                            </Button>
                        </div>
                    </form>
                    
                </Form>
            </div>
        </div>
        </Modal>)
}