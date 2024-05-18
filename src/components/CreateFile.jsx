
const CreateFile = () => {

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    return (
        <>
            <h2 className='full-width'>create file</h2>

            <form onSubmit={handleSubmit} className='box column full-width ai-start'>
                <input required type="text" name="folder name" id="folderName" placeholder='folder name' />
                <button type='submit' className='primary'>create</button>
            </form>
        </>
    )
}

export default CreateFile