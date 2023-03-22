import React, { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div class="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Latest Customers
        </h5>
      </div>
      <div class="flow-root">
        {users.map((user) => (
          <section
            key={user.id}
            class="mb-2 border bg-neutral-100 p-4 rounded-lg max-w-md	 bg-neutral-100"
          >
            <div class="mx-auto">
              <div class="card md:flex max-w-lg">
                <div class="w-20 h-20 mx-auto mb-6 md:mr-6 flex-shrink-0">
                  <img
                    className="object-cover rounded-full"
                    src="https://tailwindflex.com/public/images/user.png"
                  />
                </div>
                <div class="flex-grow text-center md:text-left">
                  <p class="font-bold">Senior Developer</p>
                  <h3 class="text-xl heading">{user.name}</h3>
                  <p>{user.email}</p>
                  <p class="mt-2 mb-3">
                  {user.company.catchPhrase}
                  </p>
                  <div>
                    <span class="bg-gray-200 border px-3 py-1.5 rounded-lg text-sm">
                      Discrete Math
                    </span>
                    <span class="bg-gray-200 border px-3 py-1.5 rounded-lg text-sm">
                      Topology
                    </span>
                    <span class="bg-gray-200 border px-3 py-1.5 rounded-lg text-sm">
                      Neural Nets
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Users;
