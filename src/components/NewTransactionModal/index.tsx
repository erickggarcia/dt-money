import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export function NewTransactionModal() {

    const newTransactionFormSchema = z.object({
        description: z.string(),
        price: z.number(),
        category: z.string(),
        // type: z.enum(['income', 'outcome'])
    })

    type newTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<newTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema)
    })

    async function handleCreateNewTransaction(data: newTransactionFormInputs) {
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(data)
    }

    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova Transação</Dialog.Title>
                <CloseButton>
                    <X size={24} />
                </CloseButton>

                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input type="text"
                        placeholder='Descrição'
                        {...register('description')}
                        required />
                    <input type="number"
                        placeholder='Preço'
                        {...register('price', { valueAsNumber: true })}
                    />
                    <input type="text"
                        placeholder='Categoria'
                        {...register('category')}
                    />
                    <button
                        type='submit'
                        disabled={isSubmitting}
                    >Cadastrar</button>
                </form>

                <TransactionType>
                    <TransactionTypeButton variant='income' value='income'>
                        <ArrowCircleUp size={24} />
                        Entrada
                    </TransactionTypeButton>

                    <TransactionTypeButton variant='outcome' value='outcome'>
                        <ArrowCircleDown size={24} />
                        Saída
                    </TransactionTypeButton>
                </TransactionType>
            </Content>
        </Dialog.Portal>
    )
}