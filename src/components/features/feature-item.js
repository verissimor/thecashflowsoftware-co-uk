import Image from "next/image";

export const FeatureItem = ({ alignment, imgSrc, title, info }) => {
  const imgRender = (
    <div className="">
      <div className="rounded-t-md bg-gradient-to-b from-[#e6e6e6] to-[#cccccc] h-4"></div>
      <div className="border bg-gray-50 border-gray-300">
        <Image src={imgSrc} width={320} height={220} alt={title} />
      </div>
    </div>
  );

  const contentRender = (
    <>
      <h3 className="text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </h3>
      <p className="mt-6 text-base leading-7 text-gray-600">{info}</p>
    </>
  );

  if (alignment === "left") {
    return (
      <>
        <div className="flex flex-col sm:flex-row py-10">
          <div className="w-full md:w-3/5 mr-10">{contentRender}</div>
          <div className="w-full md:w-2/5">{imgRender}</div>
        </div>
        <div className="border-t my-4"></div>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row py-10">
        <div className="w-full md:w-2/5 mr-10">{imgRender}</div>
        <div className="w-full md:w-3/5">{contentRender}</div>
      </div>

      <div className="border-t my-4"></div>
    </>
  );
};

export const FeatureItemRegistrationPayablesReceivables = () => (
  <FeatureItem
    alignment="left"
    imgSrc="/img/features/registration-of-payables-and-receivables.png"
    title="Registration of Payables and Receivables"
    info="The registration of payables and receivables allows for the management of information related to accounts payable, paid accounts, accounts receivable, and received accounts."
  />
);

export const FeatureItemInteractiveCharts = () => (
  <FeatureItem
    alignment="right"
    imgSrc="/img/features/interactive-charts.png"
    title="Interactive Charts"
    info="Our interactive chart system displays the information you need to know. In the specified timeframe, did your revenues surpass your expenses? Where is the money coming from, and where is it going?"
  />
);

export const FeatureItemClientRegistration = () => (
  <FeatureItem
    alignment="left"
    imgSrc="/img/features/client-registration.png"
    title="Client Registration"
    info="Before registering your receivables, you have the option to use the comprehensive client registration."
  />
);

export const FeatureItemSupplierRegistration = () => (
  <FeatureItem
    alignment="right"
    imgSrc="/img/features/supplier-registration.png"
    title="Supplier Registration"
    info="Additionally, you have the option to register suppliers if desired."
  />
);

export const FeatureItemRecurringAccountSetup = () => (
  <FeatureItem
    alignment="left"
    imgSrc="/img/features/recurring-account-setup.png"
    title="Recurring Account Setup"
    info="For recurring monthly expenses, the system offers a feature to input recurring accounts for your convenience."
  />
);

export const FeatureItemAccountCategories = () => (
  <FeatureItem
    alignment="right"
    imgSrc="/img/features/account-categories.png"
    title="Account Categories"
    info="The account categories feature allows you to group account information into categories. These categories are subsequently used in the annual profit statement."
  />
);

export const FeatureItemReports = () => (
  <FeatureItem
    alignment="left"
    imgSrc="/img/features/reports.png"
    title="Reports"
    info="The system offers on-screen interactive reports with the option to export them to an Excel spreadsheet."
  />
);

export const FeatureItemSimpleIntuitiveRegistration = () => (
  <FeatureItem
    alignment="left"
    imgSrc="/img/features/recurring-account-setup.png"
    title="Simple and Intuitive Registration"
    info="Throughout the project's development, our strategy has been to keep the registration process as simple as possible."
  />
);

export const FeatureItemFileStorage = () => (
  <FeatureItem
    alignment="right"
    imgSrc="/img/features/file-storage.png"
    title="File Storage"
    info="File Storage enables users to upload and securely store various financial documents, including invoices, receipts, and bills, directly within the system. "
  />
);

export const FeatureItemExcelReports = () => (
  <FeatureItem
    alignment="left"
    imgSrc="/img/features/excel-reports.png"
    title="Excel Reports"
    info="Our system enables the application of filters and allows the export of payables and receivables data, with exports available in Excel spreadsheet format. We understand your affinity for Excel - we're fans too! It's an excellent tool for applying formulas and freely manipulating data."
  />
);

export const FeatureItemAccountsProjectionChart = () => (
  <FeatureItem
    alignment="left"
    imgSrc="/img/features/accounts-projection-chart.png"
    title="Accounts Projection Chart"
    info="With the accounts payable and receivable projection chart, you can visualize whether your revenues have surpassed your expenses and identify the flow in which your resources are tending within the cash account."
  />
);

export const FeatureItemPayablesCategoryChart = () => (
  <FeatureItem
    alignment="right"
    imgSrc="/img/features/payables-category-chart.png"
    title="Payables Category Chart"
    info="When entering payables, you have the option to associate them with specific categories. This chart displays the accumulated values of payables by their respective categories."
  />
);

export const FeatureItemTop10Clients = () => (
  <FeatureItem
    alignment="left"
    imgSrc="/img/features/top-10-clients-suppliers.png"
    title="Top 10 clients/suppliers"
    info="The 'Top 10 Clients and Suppliers' chart provides a quick and insightful overview of your business relationships. It showcases the highest revenue-generating clients and your most significant suppliers."
  />
);

export const FeatureItemIndividualsBusinesses = () => (
  <FeatureItem
    alignment="left"
    imgSrc="/img/features/individuals-and-businesses.png"
    title="Individuals and Businesses"
    info="The client registration feature allows you to register both individual (natural persons) and corporate (legal entities) clients."
  />
);

export const FeatureItemContactInformation = () => (
  <FeatureItem
    alignment="right"
    imgSrc="/img/features/accounting-data.png"
    title="Contact Information"
    info="Don't fret about gathering the information required for invoicing. With this feature, all the accounting data of your clients is conveniently stored in one place, making the process of issuing invoices a breeze."
  />
);

export const FeatureItemWhatsApp = () => (
  <FeatureItem
    alignment="left"
    imgSrc="/img/features/whatsapp-integration.png"
    title="WhatsApp Integration"
    info="Register your client's or supplier's phones number and the system will allow to chat directly from the tool."
  />
);

export const FeatureItemRecurringAccounts = () => (
  <FeatureItem
    alignment="left"
    imgSrc="/img/features/recurring-account-setup.png"
    title="Register Recurring Accounts"
    info="This feature makes it highly informative and easy to perform future cash flow projections."
  />
);

export const FeatureItemInstallmentPayments = () => (
  <FeatureItem
    alignment="right"
    imgSrc="/img/features/record-installment-payments.png"
    title="Record Installment Payments"
    info="Effortlessly document and manage transactions that involve installment payments, ensuring comprehensive tracking and organized financial management."
  />
);

export const FeatureItemCategoryManagement = () => (
  <FeatureItem
    alignment="left"
    imgSrc="/img/features/account-categories.png"
    title="Category Management"
    info="Category management is remarkably straightforward, allowing you to effortlessly rearrange and sort categories with a simple drag-and-drop interface."
  />
);

export const FeatureItemTags = () => (
  <FeatureItem
    alignment="right"
    imgSrc="/img/features/use-tagging.png"
    title="Use Tagging"
    info="Enhance your data organization with our tagging feature, which enables you to label transactions for improved tracking and customized data management."
  />
);

export const FeatureItemCashFlowReport = () => (
  <FeatureItem
    alignment="left"
    imgSrc="/img/features/reports.png"
    title="Cash Flow Report"
    info="The cash flow report offers a comprehensive view of your cash flow, showcasing inflows, outflows, and the profit or loss for the specified period. The initial balance is calculated by summing all the inflows and subtracting all the outflows from all previous transactions before the inquiry period.  "
  />
);

export const FeatureItemAnnualPerformanceReport = () => (
  <FeatureItem
    alignment="right"
    imgSrc="/img/features/annual-performance-report.png"
    title="Annual Performance Report"
    info="This report empowers you to analyze information at a strategic level. It provides a consolidated view of data grouped by month, offering an annual perspective on your financial performance."
  />
);

export const FeatureItemCalendarReport = () => (
  <FeatureItem
    alignment="left"
    imgSrc="/img/features/calendar-report.png"
    title="Calendar Report"
    info="Allows you to visualize payables and receivables on an interactive calendar."
  />
);
