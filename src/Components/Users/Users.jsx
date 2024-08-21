import React, {useEffect} from 'react';
import User from "./User/User";
import Preloader from "../Preloader/Preloader";
import Paginator from "../../Common/Paginator/Paginator";

const Users = (props) => {

        useEffect(() => {
            if (props.users.length === 0) {
                props.getUsers(props.pageSize, props.currentPage)
            }
        }, [props.currentPage])

        const users = props.users
            .map(user => <User id={user.id}
                               firstName={user.name}
                               followed={user.followed}
                               status={user.status}
                               photo={user.photos.small}
                               followUser={props.followUnfollowUser}
                               toggleFollowingProgress={props.toggleFollowingProgress}
                               inFollowingProgress={props.inFollowingProgress}
                               changeFollowStatus={props.changeFollowStatus}
                               key={user.id + ' user key'}
            />)

        return (
            <div>
                {props.isFetching ? <Preloader/> :
                    <div>
                        <Paginator currentPage={props.currentPage} onPageChange={props.getUsers}
                                   itemsTotalCount={props.usersTotalCount} pageSize={props.pageSize}
                        />
                        {users}
                    </div>}
            </div>);
    }
;

export default Users;