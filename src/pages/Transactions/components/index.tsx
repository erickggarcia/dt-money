import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

export function SearchForm() {

    const searchFormSchema = z.object({
        query: z.string()
    })

    type SearchFormInput = z.infer<typeof searchFormSchema>

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SearchFormInput>({
        resolver: zodResolver(searchFormSchema),
    })

    async function handleSearchTransactions(data: SearchFormInput) {
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(data)
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input type="text" id=""
                {...register('query')}
                placeholder="Busque por transações"
            />

            <button
                type="submit"
                disabled={isSubmitting}
            >
                <MagnifyingGlass size={20} />
                Buscar
            </button>
        </SearchFormContainer>
    )
}