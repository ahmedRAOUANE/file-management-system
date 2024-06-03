

const File = () => {
    return (
        <svg
            style={{ maxHeight: "100%" }}
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="InsertDriveFileIcon"
            title="InsertDriveFile"
        >
            <path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm7 7V3.5L18.5 9z"></path>
        </svg>
    )
}

const Folder = () => {
    return (
        <svg
            style={{ maxHeight: "100%" }}
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="FolderIcon"
            title="Folder"
        >
            <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8z"></path>
        </svg>
    )
}

const List = () => {
    return (
        <svg
            style={{ width: "40px", fill: "white" }}
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="MenuIcon"
        >
            <path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"></path>
        </svg>
    )
}

const Forward = () => {
    return (
        <svg
            style={{ width: "30px", fill: "white" }}
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="ArrowForwardIcon"
            title="ArrowForward"
        >
            <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
        </svg>
    )
}

const Backward = () => {
    return (
        <svg
            style={{ width: "30px", fill: "white" }}
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="ArrowBackIcon"
            title="ArrowBack"
        >
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"></path>
        </svg>
    )
}

const Plus = () => {
    return (
        <svg
            style={{ width: "50px", fill: "white" }}
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="AddBoxIcon"
        >
            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4z"></path>
        </svg>
    )
}

const User = () => {
    return (
        <svg
            style={{ width: "40px", fill: "white" }}
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="AccountCircleIcon"
        >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20"></path>
        </svg>
    )
}

const More = () => {
    return (
        <svg
            style={{ width: "40px", fill: "white" }}
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="MoreVertIcon"
        >
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"></path>
        </svg>
    )
}

const Icon = ({ name }) => {
    switch (name) {
        case 'file':
            return <File />;
        case 'folder':
            return <Folder />;
        case 'list':
            return <List />;
        case 'forward':
            return <Forward />;
        case 'backward':
            return <Backward />;
        case 'plus':
            return <Plus />;
        case 'user':
            return <User />;
        case 'more':
            return <More />;
        default:
            return null;
    }
}
export default Icon;