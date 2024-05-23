import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure()

    const { data:users=[],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })
    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()

                        }
                    })

            }
        });
    }

    // make admin
    const handleMakeAdmin = user => {
        
    }


    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">ALL USERS</h2>
                <h2 className="text-3xl">TOTAL USERS: {users.length}</h2>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user,idx) => <tr key={user._id}>
                                <th>{idx + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>
                                    <button onClick={() => handleMakeAdmin(user)} className="btn hover:text-rose-600 btn-ghost btn-xs"><FaUsers className="text-lg"></FaUsers></button>
                                </td>

                                <td>
                                    <button onClick={() => handleDeleteUser(user)} className="btn hover:text-rose-600 btn-ghost btn-xs"><FaTrash className="text-lg"></FaTrash></button>
                                </td>
                            </tr>)}
                      
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;