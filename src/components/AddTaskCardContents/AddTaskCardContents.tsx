import { AddTaskCardContentsProps } from '../../types'
import AddTaskCardForm from '../AddTaskCardForm/AddTaskCardForm'
import './AddTaskCardContents.css'
import { Skeleton } from '@mui/material'

const AddTaskCardContents: React.FC<AddTaskCardContentsProps> = ({
    isActive,
    toggleActive
}): JSX.Element => {
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        toggleActive(true)
    }

    return isActive ? (
        <AddTaskCardForm />
    ) : (
        <>
            <button
                className='add-button'
                onClick={handleClick}>
                <h1>+</h1>
            </button>
            <Skeleton
                variant='rounded'
                animation={false}
                width='80%'
                height={100}
            />
            <section className='spacer'></section>
            <Skeleton
                variant='rounded'
                animation={false}
                width={100}
                height={100}
            />
        </>
    )
}

export default AddTaskCardContents