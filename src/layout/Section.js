function Section() {
  return (
    <div className="bg-purple-50 w-full">
      <div className="flex m-16 justify-between">
        <span className="relative w-1/4 h-1/4 bg-gradient-to-r from-blue-400 to-purple-500 text-white flex flex-col items-center justify-center rounded-lg shadow-lg p-8 hover:scale-105">
          <h3 className="text-lg font-semibold">Weekly Sales</h3>
          <svg
            className="absolute top-2 right-2 w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"
            ></path>
          </svg>
          <label className="text-xl font-bold mt-2">$150,000</label>
          <label className="text-sm mt-1">Increased by 60%</label>
        </span>

        <span className="relative w-1/4 h-1/4 bg-gradient-to-r from-blue-400 to-blue-800 text-white flex flex-col items-center justify-center rounded-lg shadow-lg p-8 hover:scale-105">
          <h3 className="text-lg font-semibold">Weekly Orders</h3>
          <svg
            className="absolute top-2 right-2 w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 15 15"
            fill="currentColor"
          >
            <path
              d="M13 0H2v14.5a.5.5 0 00.812.39L7.5 11.14l4.688 3.75A.5.5 0 0013 14.5V0z"
              fill="currentColor"
            ></path>
          </svg>
          <label className="text-xl font-bold mt-2">4,53,765</label>
          <label className="text-sm mt-1">Decreased by 10%</label>
        </span>

        <span class="relative w-1/4 h-1/4 bg-gradient-to-r from-green-400 to-green-800 text-white flex flex-col items-center justify-center rounded-lg shadow-lg p-8 hover:scale-105">
          <h3 class="text-lg font-semibold">Visitor Online</h3>
          <svg
            class="absolute top-2 right-2 w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            color="currentColor"
          >
            <path
              d="M14.998 14.9688V16.3751C14.998 19.0267 14.998 20.3525 14.1193 21.1763C13.2406 22 11.8264 22 8.99805 22C6.16962 22 4.75541 22 3.87673 21.1763C2.99805 20.3525 2.99805 19.0267 2.99805 16.3751V11.5537C2.99805 8.90201 2.99805 7.57619 3.87673 6.75243C4.45861 6.20693 5.22501 6.05631 5.99805 6.01514"
              stroke="currentColor"
            ></path>
            <path d="M8.99805 19H9.00703" stroke="currentColor"></path>
            <path
              d="M14.9981 3.5C12.8911 2.31797 11.6226 2.09056 9.99814 2C9.35128 2.11723 9.1465 2.35124 8.99814 3V9C8.99308 9.91423 9.19599 10.2559 9.99814 10.5C12.1754 10.8479 13.2178 11.1632 14.875 11.9418C14.9531 11.9785 15.0442 11.9801 15.1236 11.9461C16.7228 11.2602 17.756 10.8761 18.9425 10.6532C19.6385 10.5224 20.5045 10.5127 20.8504 9.89477C20.9717 9.67807 21.0133 9.39717 20.9981 9V3C20.7944 2.35605 20.5752 2.13875 19.9981 2C18.2425 2.09672 17.1801 2.34506 14.9981 3.5ZM14.9981 3.5L14.998 11.5"
              stroke="currentColor"
            ></path>
          </svg>
          <label class="text-xl font-bold mt-2">9,65,741</label>
          <label class="text-sm mt-1">Increased by 6%</label>
        </span>
      </div>

      <span className="bg-white w-full m-18 rounded-sm shadow-md">
      <table class=" bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden m-12 w-auto">
    <thead class="bg-gradient-to-r from-blue-400 to-indigo-500 text-white">
        <tr>
            <th class="py-3 px-6 text-left">Assignee</th>
            <th class="py-3 px-6 text-left">Subject</th>
            <th class="py-3 px-6 text-left">Status</th>
            <th class="py-3 px-6 text-left">Last Update</th>
            <th class="py-3 px-6 text-left">Tracking Id</th>
        </tr>
    </thead>
    <tbody class="text-gray-700">
        <tr class="border-b border-gray-200 hover:bg-blue-100">
            <td class="py-3 px-6 flex items-center gap-2">
                <img
                    src="images/gym.jpg"
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full border border-gray-300 mr-2"
                />
                <span>John Doe</span>
            </td>
            <td class="py-3 px-6">Fix login issue</td>
            <td class="py-3 px-6">
    <span class="inline-block mt-1 rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 ring-1 ring-inset ring-blue-600/70 hover:scale-105">
        In Progress
    </span>
</td>

            <td class="py-3 px-6">2024-10-12</td>
            <td class="py-3 px-6">TK123456</td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-blue-100">
            <td class="py-3 px-6 flex items-center gap-2">
                <img
                    src="images/gym.jpg"
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full border border-gray-300 mr-2"
                />
                <span>Jane Smith</span>
                
            </td>
            <td class="py-3 px-6">Update documentation</td>
            <td class="py-3 px-6 text-green-500 font-semibold">
              <span class="inline-block mt-1 rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-800 ring-1 ring-inset ring-green-600/70 hover:scale-105">Completed</span></td>
            <td class="py-3 px-6">2024-10-10</td>
            <td class="py-3 px-6">TK123457</td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-blue-100">
            <td class="py-3 px-6 flex items-center gap-2">
                <img
                    src="images/gym.jpg"
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full border border-gray-300 mr-2"
                />
                <span>Mike Johnson</span>
                
            </td>
            <td class="py-3 px-6">Implement new feature</td>
            <td class="py-3 px-6 text-yellow-500 font-semibold">
              <span class="inline-block mt-1 rounded-md bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/70 hover:scale-105">Pending</span></td>
            <td class="py-3 px-6">2024-10-11</td>
            <td class="py-3 px-6">TK123458</td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-blue-100">
            <td class="py-3 px-6 flex items-center gap-2">
                <img
                    src="images/gym.jpg"
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full border border-gray-300 mr-2"
                />
                <span> Emily Davis</span>
               
            </td>
            <td class="py-3 px-6">Bug fixes</td>
            <td class="py-3 px-6 text-orange-500 font-semibold">
              <span class="inline-block mt-1 rounded-md bg-orange-100 px-2 py-1 text-xs font-medium text-orange-800 ring-1 ring-inset ring-orange-600/70 hover:scale-105">In Review</span></td>
            <td class="py-3 px-6">2024-10-09</td>
            <td class="py-3 px-6">TK123459</td>
        </tr>
    </tbody>
</table>
      </span>
    </div>
  );
}
export default Section;
