import { CheckIcon } from "@heroicons/react/24/outline";
import { PricingFreeInfo } from "./pricing-free-info";

export const PricingTable = ({ includeHeader }) => {
  return (
    <section
      id="pricing"
      className={includeHeader ? "bg-white py-24 sm:py-32" : "bg-white"}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {includeHeader && (
          <div className="mx-auto max-w-2xl sm:text-center">
            <span className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Pricing
            </span>
            <PricingFreeInfo />
          </div>
        )}
        <div className="mx-auto mt-16 max-w-2xl rounded-t-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Solo entrepreneur Plan
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Tailored to meet the unique needs of individual business owners
              and freelancers. With this plan, you can enjoy unlimited access to
              our powerful system at no cost, for as long as you need it. Take
              the first step towards financial efficiency and join the Solo
              Entrepreneur plan today, without any financial commitment.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              <li className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                Registration of clients and suppliers
              </li>
              <li className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                Accounts rayable and receivable management
              </li>
              <li className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                Agreements, categorization and tags
              </li>
              <li className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                Insightful reports
              </li>
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  Montly payment
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    free
                  </span>
                </p>
                <a
                  href="/cash-flow-software-free"
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Create a free account
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  As long as you need it
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-0 max-w-2xl rounded-b-3xl ring-1 ring-gray-200 sm:mt-0 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Start-up and Small Business Plan
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Is designed to provide dynamic support for growing businesses.
              This plan opens the doors to collaboration, as it allows multiple
              users to harness the full potential of our comprehensive system.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                What is included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              <li className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                All included on Solo entrepreneur plan
              </li>
              <li className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                Multiple users
              </li>
              <li className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                Audit capabilities
              </li>
              <li className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                Cancel at any time
              </li>
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  Montly payment
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    £ 17
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    GBP
                  </span>
                </p>
                <a
                  href="/cash-flow-software-free"
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Create a free account
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Start with one month free
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
