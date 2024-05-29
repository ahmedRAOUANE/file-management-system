import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { useUpdateFileContent } from '../../utils/handleActions';

const EditFile = () => {
    const selectedFiles = useSelector(state => state.selectedSlice.selectedFiles);

    const { getFileContent, updateFileContent } = useUpdateFileContent();

    const [fileContent, setFileContent] = useState("");
    const [isEditable, setIsEditable] = useState(true);

    const target = selectedFiles[0];

    const newContentRef = useRef();

    useEffect(() => {
        const editableTypes = ['plain', 'html', 'json', 'javascript', "docx"];

        const fetchContent = async () => {
            if (!editableTypes.includes(target.name.split('.').pop())) {
                setIsEditable(false);

                return;
            }

            const content = await getFileContent(target);
            setFileContent(content);
        }

        fetchContent();
    }, [getFileContent, target]);

    const handleUpdateContent = async (e) => {
        e.preventDefault();

        const newContent = newContentRef.current.value;

        await updateFileContent(target, newContent);
    }

    if (!isEditable) {
        return <p className='text-center'>File type is not editable!</p>
    }

    return (
        <>
            <h2 className='full-width'>{`Edit ${target.name}`}</h2>

            <form onSubmit={handleUpdateContent} className='box column full-width ai-start'>
                <textarea defaultValue={fileContent} ref={newContentRef} name="content" id="content" placeholder="content here" className="full-width"></textarea>
                <button type='submit' className='primary'>save</button>
            </form>
        </>
    )
}

export default EditFile