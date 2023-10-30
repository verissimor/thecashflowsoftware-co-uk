import { AeroBottom } from "@/components/hero/AeroBottom";
import { AeroHighlightedAkaHome } from "@/components/hero/AeroHighlightedAkaHome";
import { AeroMain } from "@/components/hero/AeroMain";
import { PricingTable } from "@/components/pricing/pricing-table";
import {
  ArrowTrendingUpIcon,
  ChartPieIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: {
    absolute: "The Cash Flow Software | Simple and Easy-to-Use: Start Free",
  },
  description:
    "Empower your small business or startup with our cash flow software. Streamline accounts payable and receivable effortlessly, thanks to our straightforward and user-friendly tool.",
  keywords: [
    "cash flow management software",
    "cash flow software",
    "cash flow projection software",
    "accounts payable",
    "accounts receivable",
    "saas cash flow solution",
  ],
};

export default function Home() {
  return (
    <main className="relative isolate pt-14">
      <AeroMain>
        <AeroHighlightedAkaHome
          title="Cash flow software with accounts payable and receivable"
          info="Simplify Cash Flow Management with Our Easy-to-Use Cash Flow Software for Small Businesses and Startups. Start free."
        />
      </AeroMain>

      <AeroBottom />

      <section
        id="features"
        aria-label="Features of the cash flow software"
        className="bg-gray-900 py-20 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
            <h2 className="text-3xl font-medium tracking-tight text-white">
              Cash flow software for small business.
            </h2>
            <p className="mt-2 text-lg text-gray-400">
              The <b>cash flow system</b> is cloud-based software, offering the
              convenience of global accessibility without the hassle of computer
              installations. This versatile system supports category
              organization, client and supplier management, payments and
              receivables tracking, generates numerous insightful reports,
              provides multi-user support, and ensures comprehensive audit
              capabilities.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
          <div className="w-full md:w-1/2 p-4">
            <Image
              src="/img/home/dashboard-cash-flow.png"
              width={576}
              height={479}
              alt="Cash flow software report"
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="flex flex-col">
              <div className="bg-gray-800 rounded-lg p-6 backdrop-blur sm:p-10 hover:bg-gray-800/30 mb-5">
                <Link href="/features">
                  <h3 className="mt-1 text-sm font-semibold text-white sm:text-lg">
                    <CreditCardIcon className="text-gray-600 w-6 h-6 inline mr-2" />
                    Register Accounts Payable and Receivable
                  </h3>
                  <p className="mt-2 text-sm text-gray-100">
                    Our system allows you to record payables, receivables,
                    recurring transactions, categorize income, manage clients
                    and suppliers, and store files such as invoices, bills, and
                    receipts. It is all at your fingertips.
                  </p>
                </Link>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 backdrop-blur sm:p-10 hover:bg-gray-800/30 mb-5">
                <Link href="/features/interactive-charts">
                  <h3 className="mt-1 text-sm font-semibold text-white sm:text-lg">
                    <ChartPieIcon className="text-gray-600 w-6 h-6 inline mr-2" />
                    Account Control Dashboard
                  </h3>
                  <p className="mt-2 text-sm text-gray-100">
                    With our initial dashboard, you can quickly determine
                    whether your revenues exceed your expenses. The accounts
                    payable by category and accounts receivable by category
                    graph provides clear insights into how your resources are
                    distributed.
                  </p>
                </Link>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 backdrop-blur sm:p-10 hover:bg-gray-800/30">
                <Link href="/features/reports">
                  <h3 className="mt-1 text-sm font-semibold text-white sm:text-lg">
                    <ArrowTrendingUpIcon className="text-gray-600 w-6 h-6 inline mr-2" />
                    Cash flow statement
                  </h3>
                  <p className="mt-2 text-sm text-gray-100">
                    Better than a simple expense spreadsheet, our cash flow
                    report compiles data from both payables and receivables,
                    giving you a clear picture of your profit or loss for the
                    period. Additionally, the Annual Performance Report allows
                    you to assess your annual profit or loss statement.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PricingTable includeHeader={true} />

      <section className="overflow-hidden pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Cash flow statement
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Cash flow is of utmost importance for businesses, as it directly
            relates to meeting financial obligations within specified time
            frames. Planning for cash availability to make these payments is
            essential, as it anticipates the cash position for a given period.
          </p>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Do you know the difference between <b>cash flow</b> and{" "}
            <b>projected cash flow statement</b>? The former pertains to actual
            cash transactions, considering only the items that have been
            received or paid. It is commonly referred to as a ledger of inflows
            and outflows from your cash account. On the other hand, the latter
            enables the projection of items that have not yet occurred, such as
            amounts receivable or payable near the end of the month.
          </p>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Here are some advantages of utilizing a projected{" "}
            <b>cash flow statement</b>: In case of a cash shortfall, the company
            will have time to negotiate with the financial market; It determines
            the desired amount of cash for a period to prevent issues; It
            provides an accurate assessment of available resources; When there
            is an excess of cash, it allows for evaluating the best way to
            invest the surplus.
          </p>
        </div>
      </section>

      <section className="overflow-hidden pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Cash Flow Receivables
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Accounts payable represent the expenses and transactions related to
            your company{"'"}s investments. In other words, they are the
            outflows and future outflows from your cash account. What do we mean
            by future outflows?
          </p>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            An accounts payable entry can be recorded as either <b>due</b> or{" "}
            <b>completed</b>. <b>Due</b> refers to an expense that has not been
            paid yet, making it an anticipated payable.
          </p>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Once the payable is actually settled, this entry transforms into an
            <i>completed</i> accounts payable.
          </p>
        </div>
      </section>

      <section className="overflow-hidden pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Cash flow Receivable
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Accounts receivable are quite similar to accounts payable. They
            represent the income your company is expecting. Just like accounts
            payable, they can also be either anticipated entries; for instance,
            if your sales include installment payments. In such cases, you can
            utilize the <b>Insert Recurring Account</b> feature to manage them
            effectively.
          </p>
        </div>
      </section>
    </main>
  );
}
