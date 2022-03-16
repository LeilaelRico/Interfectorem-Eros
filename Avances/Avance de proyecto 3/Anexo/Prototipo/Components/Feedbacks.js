import React from "react";
const dat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

export default function Feedbacks() {
  return (
    <>
      <h1 className="title w-3/4 mx-auto">Mis Feebacks</h1>
      <div className="flex flex-col justify-center mt-10 mx-auto w-11/12">
        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Assintant</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Periodo</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">General</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {dat.map((i) => (
                    <tr
                      key={i}
                      className="hover:bg-blue-400/20 active:scale-95 transition-all ease-in-out"
                    >
                      <td className="p-2 whitespace-nowrap ">
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg"
                              width={40}
                              height={40}
                              alt="Burak Long"
                            />
                          </div>
                          <div className="font-medium text-gray-800">
                            Burak Long
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">12/02/2020</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center font-medium text-green-500">
                          2.4
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
