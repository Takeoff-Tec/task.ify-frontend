import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

import ApiClient from '../../../services/apiClient'
import AddTaskCardFormProps from '../../../interfaces/AddTaskCardFormProps'

import './AddTaskCardForm.css'
import Loading from '../Loading/Loading'

const AddTaskCardForm: React.FC<AddTaskCardFormProps> = ({
    setDashboardState
}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        taskName: '',
        vibe: '',
        timer: '',
        category: ''
    })

    /**
     * @todo add default field for vibe
     * @todo error handling for form
     */

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            const token = localStorage.getItem('token')!
            await ApiClient.addTask({
                task: {
                    taskName: formData.taskName,
                    vibe: formData.vibe,
                    timer: Number(formData.timer),
                    category: formData.category
                },
                token: token
            })
        } catch (error) {
            console.error('Failed to add task:', error)
        } finally {
            setIsLoading(false)
        }
        setDashboardState(prev => ({
            ...prev,
            formIsActive: false
        }))
    }

    const handleBack = () => {
        setDashboardState(prev => ({
            ...prev,
            formIsActive: false
        }))
    }

    const loading = isLoading ? 'loading' : 'not-loading'

    return (
        <motion.form
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            onSubmit={handleSubmit}>
            <section className='form-row'>
                <section className='form-col'>
                    <h2 className='taskifier-title'>Task.ifier</h2>
                    <section className='generate-square'>
                        <motion.section
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.5,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                            className={loading}>
                            <Loading />
                        </motion.section>
                    </section>
                </section>
                <section className='inputs-col'>
                    <label
                        htmlFor='task-name'
                        className='task-name-form'>
                        Task Name
                    </label>
                    <input
                        type='text'
                        className='input-field'
                        id='task-name'
                        name='task-name'
                        value={formData.taskName}
                        onChange={e =>
                            setFormData({
                                ...formData,
                                taskName: e.target.value
                            })
                        }
                    />
                    <label
                        htmlFor='vibe'
                        className='vibe'>
                        Playlist Vibe
                    </label>
                    <select
                        className='input-field'
                        id='vibe'
                        name='vibe'
                        onChange={e =>
                            setFormData({ ...formData, vibe: e.target.value })
                        }>
                        <option value='Happy'>Happy</option>
                        <option value='Sad'>Sad</option>
                        <option value='Party'>Party</option>
                        <option value='Latin Party'>Latin Party</option>
                        <option value='Country'>Country</option>
                        <option value='LoFi'>LoFi</option>
                        <option value='Rap'>Rap Party</option>
                        <option value='Indie'>Indie Breeze</option>
                    </select>
                    <label
                        htmlFor='timer'
                        className='timer-label'>
                        Timer Duration (in minutes)
                    </label>
                    <input
                        type='number'
                        className='input-field'
                        id='timer'
                        name='timer'
                        value={formData.timer}
                        onChange={e =>
                            setFormData({
                                ...formData,
                                timer: e.target.value
                            })
                        }
                    />
                    <label
                        htmlFor='category'
                        className='category'>
                        Task Category
                    </label>
                    <input
                        type='text'
                        className='input-field'
                        id='category'
                        name='category'
                        value={formData.category}
                        onChange={e =>
                            setFormData({
                                ...formData,
                                category: e.target.value
                            })
                        }
                    />
                </section>
            </section>
            <section className='form-row button-row'>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    transition={{
                        type: 'tween'
                    }}
                    className='back'
                    onClick={handleBack}
                    type='button'>
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        size='xl'
                        style={{ color: '#58624e' }}
                    />
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{
                        type: 'tween'
                    }}
                    className='generate-button'
                    type='submit'>
                    Generate Playlist
                </motion.button>
            </section>
        </motion.form>
    )
}

export default AddTaskCardForm
