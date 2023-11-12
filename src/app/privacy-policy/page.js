import { AeroBottom } from "@/components/hero/AeroBottom";
import { AeroMain } from "@/components/hero/AeroMain";

export const metadata = {
  title: "Privacy Policy for TheCashFlowSoftware.co.uk",
  keywords: ["cash flow privacy policy"],
};

export default function Features() {
  return (
    <main className="relative isolate pt-14">
      <AeroMain>
        <div className="mx-auto max-w-3xl pt-24 sm:pt-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Privacy Policy
            </h1>
          </div>
        </div>
      </AeroMain>
      <AeroBottom />

      <div className="bg-white rounded-lg shadow-lg flex my-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl p-6 lg:p-8">
          <p className="mt-6 text-base leading-7 text-gray-600">
            Effective Date: 12 November 2023
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 my-10">
            1. Introduction
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Thank you for choosing TheCashFlowSoftware.co.uk (we, us, or
            our). This Privacy Policy outlines our commitment to protecting
            the privacy of our users and the information we collect when you use
            our Software as a Service (SAAS) platform. Please read this Privacy
            Policy carefully to understand our practices regarding your personal
            information.
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 my-10">
            2. Information We Collect
          </h2>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-0">
            2.1 Personal Information
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            When you subscribe to our services, we may collect personal
            information such as your name, email address, billing information,
            and other relevant details necessary for providing and managing your
            account.
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-10">
            2.2 Usage Data
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            We automatically collect information about your interaction with our
            website and software, including but not limited to your IP address,
            browser type, and version, time zone setting, and the pages you
            visit.
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-10">
            2.3 Tracking Technologies
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            We use cookies and other tracking technologies, such as Google
            Analytics, to gather information about your browsing activities.
            These technologies help us analyze website traffic and enhance user
            experience. By using our website, you consent to the use of cookies
            and other tracking technologies as described in our Cookie Policy.
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-10">
            3. Legal Basis for Processing Personal Information
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            We process personal information based on the necessity of performing
            a contract with you, compliance with legal obligations, and our
            legitimate interests in providing and improving our services. In
            some cases, we may seek your consent for specific data processing
            activities.
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-10">
            4. How We Use Your Information
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-600">
            We use the information we collect to:
          </p>
          <ul className="list-disc ml-5 text-base leading-7 text-gray-600">
            <li>Provide and maintain our SAAS platform </li>
            <li>Process payments and invoices </li>
            <li>
              Communicate with you about our services, updates, and promotions{" "}
            </li>
            <li>
              Analyze and improve the performance of our website and services{" "}
            </li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-10">
            5. Sharing Your Information
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-600">
            We may share your personal information with third parties for
            purposes such as payment processing, analytics, and legal
            compliance. We ensure that any third-party service providers adhere
            to data protection standards and only process your information as
            necessary for the specified purpose.
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-10">
            6. Your Rights
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-600">
            You have the right to access, rectify, and erase your personal
            information. You may also restrict or object to the processing of
            your data and request data portability. To exercise these rights,
            please contact us at support@thecashflowsoftware.co.uk. We will
            respond to your requests within the time frame required by
            applicable data protection laws.
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-10">
            7. Security Measures
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            We implement security measures to protect your personal information
            from unauthorized access, disclosure, alteration, and destruction.
            However, no method of transmission over the internet or electronic
            storage is completely secure, and we cannot guarantee absolute
            security.
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-10">
            8. Changes to this
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Privacy Policy We reserve the right to update this Privacy Policy to
            reflect changes in our practices or legal requirements. We will
            notify you of any material changes through email or a notice on our
            website.
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-10">
            9. Contact Information
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-600">
            If you have any questions, concerns, or requests regarding this
            Privacy Policy, please contact us at
            support@thecashflowsoftware.co.uk.
          </p>
          <p className="mt-6 text-base leading-7 text-gray-600">
            By using TheCashFlowSoftware.co.uk, you agree to the terms of this
            Privacy Policy.
          </p>
        </div>
      </div>
    </main>
  );
}
