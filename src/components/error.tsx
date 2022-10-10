import { FiAlertTriangle, FiX } from "solid-icons/fi";

import { wait } from "../lib/utils";

const Error = () => {
	let Error: HTMLDivElement;

	return <div ref={ Error! } class="absolute bg-red-400 w-full flex items-center justify-center transition-transform duration-500 top-0">
		<h1 class="text-2xl text-center font-montserrat font-bold text-red-100 mx-auto py-4">
			Sorry we were unable to find that page
			<FiAlertTriangle class="inline ml-2 justify-self-start" size="2.3rem"/>
		</h1>
		<FiX class="text-red-100 justify-self-end w-9 h-9 pointer hover:text-red-200/80 hover:w-12 hover:h-12 hover:-ml-3 transition-[size, margin] duration-300" onClick={ () => {
			Error.classList.add("-translate-y-full");
			wait(() => Error.remove(), "0.5s");
		} }/>
	</div>
};

export default Error;