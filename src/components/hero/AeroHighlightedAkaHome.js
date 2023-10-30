import { CreateAccountForm } from "../form/CreateAccountForm";

export const AeroHighlightedAkaHome = ({title, info}) => (
  <div className="mx-auto max-w-3xl py-32 sm:py-48">
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        {title}
      </h1>
      <div className="mt-6 text-lg leading-8 text-gray-600">
        {info}
      </div>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <CreateAccountForm />
      </div>
    </div>
  </div>
);
