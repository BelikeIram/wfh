import { CONFIRMS } from "@/libs/doms";
import Title from "@/components/Title";


const SignComplete = () => {

  return (
    <>
    <div className={`step slider-content`}
    >
      <Title step={2} />
      <div className="mt-6 mb-5">
        <ul className="space-y-1 list-inside text-gray-500 dark:text-gray-400">
          {CONFIRMS.map((confirm, index) => {
            return (
              <li key={index} className="flex justify-start items-start">
                <svg
                  className="w-4 h-4 mt-[5px] mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {confirm}
              </li>
            );
          })}
        </ul>
      </div>
      </div>
    </>
  )
};

export default SignComplete;
