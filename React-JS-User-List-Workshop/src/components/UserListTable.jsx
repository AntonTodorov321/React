import { useState, useEffect } from "react";

import UserListItem from "./UserListItem";

import * as userService from "../services/userAPI";
import CreateUserModal from "./CreateUserModal";
import UserInfoModal from "./UserInfoModal";
import UserDeleteModal from "./UserDeleteModal";
import Spinner from "./Spinner";

const UserListTable = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showUserModal, setShowUserModal] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [showDelete, setShowDelete] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        userService.getAll()
            .then(result => setUsers(result))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false));
    }, []);

    const createUserClickHandler = () => {
        setShowUserModal(true);
    };

    const showInfoClickUserHandler = async (userId) => {
        setSelectedUserId(userId);
        setShowInfo(true);
    };

    const hideCreateUserModal = () => {
        setShowUserModal(false);
    };

    const hideCreateUserModalWhenEscIsPressed = (e) => {
        if (e.key === "Escape") {
            setShowUserModal(false);
        };
    };

    const userCreateHandler = async (e) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.currentTarget));

        const newUser = await userService.create(data);
        setUsers(state => [newUser, ...state]);

        setShowUserModal(false);
    };

    const deleteUserClickHandler = async (userId) => {
        setShowDelete(true);
        setSelectedUserId(userId);
    };

    const deleteUserHandler = async () => {
        const result = await userService.deleteUser(selectedUserId);

        setUsers(state => state.filter(u => u._id !== selectedUserId));

        setShowDelete(false);
    };  

    return (
        <div className="table-wrapper" onKeyDown={hideCreateUserModalWhenEscIsPressed}>
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            Image
                        </th>
                        <th>
                            First name<svg aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="arrow-down" className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Last name<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Email<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Phone<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Created
                            <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="arrow-down" className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <UserListItem
                            key={user._id}
                            id={user._id}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            createdAt={user.createdAt}
                            email={user.email}
                            imageUrl={user.imageUrl}
                            phoneNumber={user.phoneNumber}
                            showInfo={showInfoClickUserHandler}
                            onDeleteClick={deleteUserClickHandler}
                        />
                    ))}
                </tbody>
            </table>

            <button className="btn-add btn" onClick={createUserClickHandler}>Add new user</button>

            {showUserModal && <CreateUserModal
                hideModal={hideCreateUserModal}
                pressEscape={hideCreateUserModalWhenEscIsPressed}
                onUserCreate={userCreateHandler}
            />}

            {showInfo && <UserInfoModal
                onClose={() => setShowInfo(false)}
                userId={selectedUserId}
            />}

            {showDelete && <UserDeleteModal
                onClose={() => setShowDelete(false)}
                onDelete={deleteUserHandler}
            />}

            {isLoading && <Spinner/>}

        </div>
    );
};

export default UserListTable;